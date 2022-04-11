import axios from "axios";
import React, { useState } from "react";

const ImageUpload = () => {
  const [picture, setPicture] = useState();

  const uploadPicture = (e) => {
    setPicture(e.target.files[0]);
  };

  const setImageAction = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", picture);

    // console.log(picture.pictureAsFile);

    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    const datas = {
      id: 74,
      image: picture,
    };

    const data = await axios.post(
      "https://app.signatize.io/api/image_upload_api",
      {
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        id: 74,
        image: picture,
      }
    );
    // const uploadedImage = await data.json();
    let uploadedImage = data.data;
    if (uploadedImage) {
      console.log("Successfully uploaded image");
    } else {
      console.log("Error Found");
    }
  };
  return (
    <div>
      <form onSubmit={setImageAction}>
        <input type="file" name="image" onChange={uploadPicture} />
        <br />
        <br />
        <button type="submit" name="upload">
          Upload
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;
