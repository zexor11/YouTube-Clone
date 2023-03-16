import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import VideoDetail from "./components/VideoDetail.jsx";
import ChannelDetail from "./components/ChannelDetail.jsx";
import SearchFeed from "./components/SearchFeed.jsx";
import Feed from "./components/Feed.jsx"

function App() {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  );
}

export default App;
