import React, { useState, useEffect } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "./story";

const HackerNewsApi = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <>
      <h1>Welcome To Hacker News Page.</h1>
      {storyIds.map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
  );
};

export default HackerNewsApi;
