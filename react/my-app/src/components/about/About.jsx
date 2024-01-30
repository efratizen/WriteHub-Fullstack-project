import React, { useState, useRef } from 'react';


export default function About() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  return (
    <>
      <div style={{ width: "100%", paddingLeft: "10%", paddingRight: "10%", marginTop: "10%" }}>
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          controls
          style={{ width: '100%', position: "inherit" }}
        >
          <source
            src="src\assets\video\Untitled_video (2).mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>


    </>
  );
}
