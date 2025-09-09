import React, { useRef, useState, useEffect } from "react";
import "./FullVideoPlayer.css"; // Add this CSS file

const FullVideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    const handleLoaded = () => setDuration(vid.duration);
    vid.addEventListener("loadedmetadata", handleLoaded);
    return () => vid.removeEventListener("loadedmetadata", handleLoaded);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    videoRef.current.volume = value;
    setIsMuted(value === 0);
  };

  const handleSeek = (e) => {
    const value = parseFloat(e.target.value);
    videoRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const toggleFullscreen = () => {
    const player = videoRef.current.parentElement;
    if (!isFullscreen) {
      if (player.requestFullscreen) player.requestFullscreen();
      else if (player.webkitRequestFullscreen) player.webkitRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="player-container">
      <video
        ref={videoRef}
        src={src}
        className="player-video"
        onClick={togglePlay}
        onTimeUpdate={() => setCurrentTime(videoRef.current.currentTime)}
      />

      {!isPlaying && (
        <div className="large-play-overlay" onClick={togglePlay}>
          ▶
        </div>
      )}

      <div className="player-controls">
        <input
          type="range"
          min={0}
          max={duration}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
          className="progress-bar"
        />
        <div className="controls-row">
          <div className="left-controls">
            <button onClick={togglePlay}>{isPlaying ? "❚❚" : "▶"}</button>
            <button onClick={toggleMute}>{isMuted ? "🔇" : "🔊"}</button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
            />
            <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
          </div>
          <div className="right-controls">
            <button onClick={toggleFullscreen}>{isFullscreen ? "🡼" : "🡾"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullVideoPlayer;
