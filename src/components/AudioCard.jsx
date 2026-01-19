import {
  Card,
  CardMedia,
  CardActions,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSong,
  setCurrentIndex,
  setEditingIndex,
} from "../hooks/redux_toolkit/slice/musicSlice";
import { useNavigate } from "react-router-dom";

const AudioCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { songs, currentIndex } = useSelector((s) => s.music);

  return (
    <Grid
      container
      spacing={3}
      sx={{
        px: 3,
        pb: 10,
        bgcolor: "background.default", 
      }}
    >
      {songs.map((song, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Card
            sx={{
              backgroundColor: "background.paper",
              border:
                currentIndex === i
                  ? "2px solid #1DB954"
                  : "1px solid #1f2937",
              transition: "0.2s",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={song.image}
              alt={song.title}
            />

            <Typography p={1} color="text.primary">
              {song.title}
            </Typography>

            <CardActions>
              <IconButton onClick={() => dispatch(setCurrentIndex(i))}>
                <PlayArrowIcon color="primary" />
              </IconButton>

              <IconButton
                onClick={() => {
                  dispatch(setEditingIndex(i));
                  navigate("/add-song");
                }}
              >
                <EditIcon />
              </IconButton>

              <IconButton onClick={() => dispatch(deleteSong(i))}>
                <DeleteIcon color="error" />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AudioCard;
