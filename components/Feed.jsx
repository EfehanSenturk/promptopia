"use client";
import { useState, useEffect } from "react";
import PrompCard from "./PrompCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16">
      {data.map((post) => (
        <PrompCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section>
      <form className="relative flex justify-center items-center w-full">
        <input
          className="w-60 border border-orange-400 p-2 mt-6"
          type="text"
          placeholder="Search for a tag or username "
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
