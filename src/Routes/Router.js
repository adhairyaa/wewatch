import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Liked from "../Pages/Liked";
import Playlist from "../Pages/Playlist";
import Watchlist from "../Pages/Watchlist";
import History from "../Pages/History";
import Login from "../Pages/login/Login";
import VideoPlayer from "../Pages/VideoPlayer";
import SignUp from "../Pages/signup/SignUp";
import { useAuth } from "../Context/AuthContext";

export default function Router() {
  const { currentUser } = useAuth();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/explore" replace={true} />} />
        <Route path="/explore" element={<Home />} />
        <Route
          path="/history"
          element={currentUser ? <History /> : <Login />}
        />
        <Route path="/liked" element={currentUser ? <Liked /> : <Login />} />
        <Route path="/Playlist" element={<Playlist />} />
        <Route
          path="/Watchlist"
          element={currentUser ? <Watchlist /> : <Login />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Video/:video" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}
