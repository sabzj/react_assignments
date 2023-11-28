import React, { useState, useRef } from "react";

export default function UseRefPlayer() {
  const videoRef = useRef();
  console.log(videoRef);

  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayer = () => {
    setIsPlaying(!isPlaying);

    {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }

    // if(isPlaying){

    //     videoRef.current.play()
    // }
    // else {

    //     //     videoRef.current.pause()
    // }
  };
  // const handlePause = () => {
  //     videoRef.current.pause()

  // }
  return (
    <>
      <div className="grid-btn">
        {/* <button className='btn' onClick={handlePlayer}>Play</button>
    <button className='btn' onClick={handlePause}>Pause</button> */}
        <button onClick={handlePlayer}>play/pause</button>
      </div>

      <video width="520" height="240" ref={videoRef}>
        <source src="/videos/Nature.mp4"></source>
      </video>
    </>
  );
}
