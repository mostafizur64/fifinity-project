import React, { useState, useRef } from "react";
import video from "../../../assets/video/songs.mp4";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const playPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen lg:mt-[140px] -mt-[140px]">
      <div className=" relative">
        <video 
          id="video1"
          className="w-[1562px] mx-auto  cursor-pointer  "
          onClick={playPause}
          ref={videoRef} 
          style={{marginTop:'-140px'}}
        >
          <source src={video} type="video/mp4" />
        </video>
        <div
          id="playpause_img"
          className="bg-cover bg-no-repeat w-50px h-50px absolute left-0 right-0 -top-[140px] lg:-top-30 bottom-0 m-auto"
          style={{
           width:'96px',height:'96px', backgroundImage: isPlaying ? "none" : "url('https://i.ibb.co/xqttQLb/Video-1.png')",
          }}
          onClick={playPause}
        ></div>
      </div>
    </div>
  );
}

export default App;
