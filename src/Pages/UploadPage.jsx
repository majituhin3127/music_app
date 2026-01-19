import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addSong,
  updateSong,
  setEditingIndex,
} from "../hooks/redux_toolkit/slice/musicSlice";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UploadPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { editingIndex, songs } = useSelector((s) => s.music);

  const editingSong =
    editingIndex !== null ? songs[editingIndex] : null;

  const [title, setTitle] = useState(editingSong?.title || "");
  const [audioFile, setAudioFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 VALIDATION
    if (!title.trim()) {
      alert("Song name required");
      return;
    }

    if (!editingSong && !audioFile) {
      alert("Audio file required");
      return;
    }

    if (audioFile && !audioFile.type.startsWith("audio/")) {
      alert("Only audio files allowed");
      return;
    }

    const payload = {
      title,
      audio: audioFile
        ? URL.createObjectURL(audioFile)
        : editingSong.audio,
      image: imageFile
        ? URL.createObjectURL(imageFile)
        : editingSong?.image ||
          "https://i.imgur.com/8Km9tLL.png",
    };

    if (editingSong) {
      dispatch(updateSong({ index: editingIndex, ...payload }));
    } else {
      dispatch(addSong(payload));
    }

    dispatch(setEditingIndex(null));
    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          background: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: 420 }}>
          <Typography
            variant="h5"
            sx={{ color: "#1DB954", mb: 2 }}
          >
            {editingSong ? "Edit Song" : "Add Song"}
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Song Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ mb: 2 }}
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              style={{ marginBottom: 10 }}
            />

            <input
              type="file"
              accept="audio/*"
              onChange={(e) => setAudioFile(e.target.files[0])}
              style={{ marginBottom: 20 }}
            />

            <Button
              type="submit"
              fullWidth
              sx={{
                background: "#1DB954",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              {editingSong ? "UPDATE SONG" : "ADD SONG"}
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default UploadPage;
