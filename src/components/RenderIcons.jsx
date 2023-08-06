import React from "react";
import { Link } from "react-router-dom";

const RenderIcons = ({ sites, add }) => {
  
  const handleClick = (site) => {
    fetch("http://localhost:3002/site/update/" + site._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ visited: true }),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        console.log(updatedData);
      })
      .catch((error) => console.error(error));

    window.location.href = site.url;
  };

  const handleDoubleClick = (site) => {
    fetch(`http://localhost:3002/site/delete/${site._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
      window.location.reload();
  };

  function renderIcon(site) {
    return (
      <div className="flex flex-col w-20 items-center mr-[13.5px]">
        <button 
          className=" bg-slate-300 text-xs py-1 px-2 mb-2 border shadow-md rounded-md"
          onClick={() => handleDoubleClick(site)}
        > 
            Delete
        </button>
      <div
        key={sites._id}
        className="flex flex-col w-20 items-center"
        onClick={() => handleClick(site)}
        // onDoubleClick={handleDoubleClick}
      >
        <div className="w-20 h-20 flex justify-center items-center border rounded-lg shadow-md bg-gray-100">
          <img src={site.image} alt={site.name} className="w-8 h-8" />
        </div>
        <span className="mt-2 font-semibold text-sm text-center">
          {site.name}
        </span>
      </div>
      </div>
    );
  }

  return (
    <div className="flex mt-5 flex-wrap justify-start">
      {sites?.map((site) => renderIcon(site))}
      {add && (
        <Link to={"/add-site"}>
          <div className="flex flex-col w-20 items-center mt-[34px]">
            <div className="w-20 h-20 flex justify-center items-center border rounded-lg shadow-md bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>

            <span className="mt-2 font-semibold text-sm">Add</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default RenderIcons;
