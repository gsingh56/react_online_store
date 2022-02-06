import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export const UploadProductForm = () => {
  const token = useSelector((state) => state.auth.token);

  const [uploadState, setUploadState] = useState({
    title: "",
    description: "",
    price: 0,
    category: "",
  });

  const [selectedFile, setSlectedFile] = useState();

  const handleFile = (event) => {
    setSlectedFile(event.target.files[0]);
  };

  const handleChanges = (event) => {
    const value = event.target.value;

    setUploadState({
      ...uploadState,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      uploadState.title &&
      uploadState.description &&
      uploadState.price &&
      uploadState.category //&&
      //   state.image
    ) {
      const formData = new FormData();
        formData.append("title", uploadState.title);
        formData.append("description", uploadState.description);
        formData.append("category", uploadState.category);
        formData.append("price", uploadState.price);
      formData.append("imageFile", selectedFile);
      formData.append("imageFileName", selectedFile.name);
      axios
        .post(
          "http://localhost:5423/upload",

          formData,
          {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              Authorization: "JWT " + token,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="topMargin">
      <form className="ui form order" onSubmit={handleSubmit}>
        <div class="field">
          <label>
            Title
            <input
              type="text"
              value={uploadState.title}
              name="title"
              onChange={handleChanges}
            />
          </label>
        </div>
        <div class="field">
          <label>
            Description:
            <input
              type="text"
              value={uploadState.description}
              name="description"
              onChange={handleChanges}
            />
          </label>
        </div>
        <div class="field">
          <label>
            Price:
            <input
              type="number"
              value={uploadState.price}
              name="price"
              onChange={handleChanges}
              min={1}
            />
          </label>
        </div>
        <div class="field">
          <label>
            Category:
            <input
              type="text"
              value={uploadState.category}
              name="category"
              onChange={handleChanges}
            />
          </label>
        </div>
        <div class="field">
          <label>
            Image:
            <input type="file" onChange={handleFile} />
          </label>
        </div>
        <input className="ui button green" type="submit" value="Submit" />
      </form>
    </div>
  );
};
