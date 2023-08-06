import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddSite = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !url) return;

    const site = { name, url, image: url + "/favicon.ico", visited: false };

    fetch("http://localhost:3002/site/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(site),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-200">
      <div className="flex w-2/5 border rounded-md shadow-md h-96 justify-center items-center bg-white">
        <div className="w-96">
            <div className="flex justify-center items-center text-xl mb-8 font-bold">
                <h1 className="uppercase">Add Site</h1>
            </div>
          <form action={handleSubmit} className="flex flex-col space-y-3">
            <input
              className="border py-2 px-5 "
              type="text"
              placeholder="Enter Name of site"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              className="border py-2 px-5 "
              type="text"
              placeholder="Enter site URL"
              name="url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <button
              className="border py-2 px-5 bg-green-500 text-white cursor-pointer"
              onClick={handleSubmit}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSite;
