import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import AudioCard from "../components/AudioCard";
import AudioTable from "../components/AudioTable";
import AudioPlayer from "../components/AudioPlayer";

const Dashboard = () => {
  const { view } = useSelector((s) => s.music);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Navbar />
      {view === "grid" ? <AudioCard /> : <AudioTable />}
      <AudioPlayer />
    </Box>
  );
};

export default Dashboard;
