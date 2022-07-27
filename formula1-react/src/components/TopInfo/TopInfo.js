import React from "react";
import "./TopInfo.css";

export default function TopInfo() {
  return (
    <header className="page-title">
      <h1 className="driver-title">F1 Drivers 2022</h1>
      <div className="content-info">
        <p className="page-info">
          Check out this season's official F1 line-up. Full breakdown of
          drivers, points and current
        </p>
        <p className="page-info">
          positions. Follow your favourite F1 drivers on and off the track.
        </p>
      </div>
    </header>
  );
}
