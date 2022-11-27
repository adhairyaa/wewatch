import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home"
import Liked from '../Pages/Liked'
import Playlist from '../Pages/Playlist'
import Watchlist from '../Pages/Watchlist'
import History from '../Pages/History'
import VideoPlayer from "../Pages/VideoPlayer";

export default function Router (){

    return(
        <div>
            <Routes>
                
                <Route path ="/history" element={<History />} />
                <Route path="/liked" element={<Liked />}/>
                <Route path="/Playlist" element={<Playlist />}/>
                <Route path="/Watchlist" element={<Watchlist />}/>
                <Route path="/Video/:video" element={<VideoPlayer />}/>
                <Route path="/explore" element={<Home />} />
            </Routes>
        </div>
    )
}