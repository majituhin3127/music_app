import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentIndex,
  deleteSong,
  setEditingIndex,
} from "../hooks/redux_toolkit/slice/musicSlice";
import { useNavigate } from "react-router-dom";

const AudioTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { songs, currentIndex } = useSelector((s) => s.music);

  return (
    <List sx={{ background: "#000", minHeight: "100vh" }}>
      {songs.map((song, index) => {
        const isActive = currentIndex === index;

        return (
          <ListItem
            key={index}
            disablePadding
            sx={{
              background: isActive ? "#1DB95422" : "#000",
              borderBottom: "1px solid #222",
            }}
            secondaryAction={
              <Box>
                {/* ▶ PLAY */}
                <IconButton
                  onClick={() => dispatch(setCurrentIndex(index))}
                >
                  <PlayArrowIcon sx={{ color: "#1DB954" }} />
                </IconButton>

                {/* ✏ EDIT */}
                <IconButton
                  onClick={() => {
                    dispatch(setEditingIndex(index));
                    navigate("/add-song");
                  }}
                >
                  <EditIcon sx={{ color: "#fff" }} />
                </IconButton>

                {/* 🗑 DELETE */}
                <IconButton
                  onClick={() => dispatch(deleteSong(index))}
                >
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </Box>
            }
          >
            <ListItemButton
              onClick={() => dispatch(setCurrentIndex(index))}
            >
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={song.image}
                  alt={song.title}
                />
              </ListItemAvatar>

              <ListItemText
                primary={song.title}
                primaryTypographyProps={{
                  color: isActive ? "#1DB954" : "#fff",
                  fontWeight: isActive ? "bold" : "normal",
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default AudioTable;
