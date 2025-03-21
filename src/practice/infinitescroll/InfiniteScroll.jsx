import React, { useEffect, useState } from "react";

export default function InfiniteScroll() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasNext, sethasNext] = useState(true);

  const fetchPosts = async (pageNum) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
      );
      const data = await res.json();
      setTodos([...todos, ...data]);

      //if no data avalible

      if (data.length === 0) {
        return sethasNext(false);
      }
    } catch (error) {
      console.log("erroe", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 10 &&
        !loading &&
        hasNext
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasNext]);
  return (
    <div className="p-4 w-[400px] mx-auto">
      <h2 className="text-xl font-bold mb-4">Infinite Scroll</h2>
      <ul className="space-y-3">
        {todos.map((post) => (
          <li key={post.id} className="border p-2 rounded shadow-sm bg-white">
            <p className="font-semibold">{post.title}</p>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
      {/* Loader */}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {!hasNext && <p className="text-center mt-4">No more posts</p>}
    </div>
  );
}
