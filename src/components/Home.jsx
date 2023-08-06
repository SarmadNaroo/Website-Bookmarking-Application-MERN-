import React from "react";
import RenderIcons from "./RenderIcons";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [sites, setSites] = useState(null);
  const [visitedSites, setVisitedSites] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3002/sites")
      .then((response) => response.json())
      .then((data) => setSites(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3002/sites/visited")
      .then((response) => response.json())
      .then((data) => setVisitedSites(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-gray-300 h-screen w-full p-5">
      <div className="h-4/6">
        <h1 className="text-2xl font-bold">Favourities</h1>
        <RenderIcons sites={sites} add={true}/>
      </div>
      <div className="h-2/6">
        <h1 className="text-2xl font-bold">Frequently Visited</h1>
        <RenderIcons sites={visitedSites} add={false}/>
      </div>
    </div>
  );
};

export default Home;
