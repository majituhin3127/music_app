import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setView } from "../hooks/redux_toolkit/slice/musicSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { view } = useSelector((s) => s.music);

  return (
    <AppBar position="sticky" sx={{ background: "#000" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography sx={{ color: "#1DB954" }}>🎵 Music Player</Typography>
        <div>
          <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
          <Button
            sx={{ color: view === "grid" ? "#1DB954" : "#fff" }}
            onClick={() => dispatch(setView("grid"))}
          >
            Grid
          </Button>
          <Button
            sx={{ color: view === "list" ? "#1DB954" : "#fff" }}
            onClick={() => dispatch(setView("list"))}
          >
            List
          </Button>
          <Button onClick={() => navigate("/add-song")}>Add Song</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
