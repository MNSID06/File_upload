import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState();
  const handleFile = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);
    fetch("url", {
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("success", result);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
  return (
    <div>
      <h2>File Upload</h2>
      <form onSubmit={handleUpload}>
        <input type="file" name="file" />
        <button>Upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
