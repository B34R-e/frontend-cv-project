import React from "react";
import { FileUploader } from "react-drag-drop-files";

function UnloginedMatching() {
  const fileTypes = ["JPG", "PNG", "GIF"];
  return (
    <div className="unlogined-matching-container">
      <div className="unlogined-file-uploader">
        <FileUploader
          types={fileTypes}
          label="Drag or click to upload CV"
          hoverTitle="Drop here"
        />
        <span className="unlogined-file-uploader-name">Upload CV</span>
        <button className="unlogined-file-uploader-button">Upload</button>
      </div>
      <div className="unlogined-matching-button">MATCH</div>
      <div className="unlogined-file-uploader">
        <FileUploader
          types={fileTypes}
          label="Drag or click to upload JD"
          hoverTitle="Drop here"
        />
        <span className="unlogined-file-uploader-name">Upload JD</span>
        <button className="unlogined-file-uploader-button">Upload</button>
      </div>
    </div>
  );
}

export default UnloginedMatching;
