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
    <div className="relative flex justify-center items-center h-screen lg:mt-[140px] -mt-[140px] market-shadow">
      <div className="absolute z-50">
        <video
          id="video1"
          className="w-[1562px] mx-auto  cursor-pointer  "
          onClick={playPause}
          ref={videoRef}
          style={{ marginTop: "-140px" }}
        >
          <source src={video} type="video/mp4" />
        </video>
        <div
          id="playpause_img"
          className="bg-cover bg-no-repeat w-50px h-50px absolute left-0 right-0 -top-[140px] lg:-top-30 bottom-0 m-auto"
          style={{
            width: "96px",
            height: "96px",
            backgroundImage: isPlaying
              ? "none"
              : "url('https://i.ibb.co/xqttQLb/Video-1.png')",
          }}
          onClick={playPause}
        ></div>
        {/* shadow  */}
      </div>
      <div
        className="absolute left-[50%]  translate-x-[-50%] rounded-t-[700px] -top-[360px] first-shadow"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.08)",
          background:
            "radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 255, 255, 0.00) 40.53%, rgba(255, 255, 255, 0.01) 100%)",
         
        }}
      ></div>
      <div
        className="absolute  left-[50%]  translate-x-[-50%] rounded-t-[600px] -top-[280px] second-shadow"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.08)",
          background:
            "radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 255, 255, 0.00) 40.53%, rgba(255, 255, 255, 0.01) 100%)",
          
        }}
      ></div>
      <div className="bg-[#7A49FF]"></div>
      <div
        className="absolute bg-red-500 left-[50%]  translate-x-[-50%] rounded-t-[500px] -top-[170px] third-shadow"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.08)",
          background:
            "radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 255, 255, 0.00) 40.53%, rgba(255, 255, 255, 0.01) 100%)",
          
        }}
      ></div>
    </div>
  );
}

export default App;
