"use client";
import { useState, useEffect } from "react";
import { BlogPost } from "../types/blog";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch posts from api/posts here (async pattern to be implemented by candidate)
  }, []);

  return (
    <main style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <h1>Blog Homepage</h1>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <section>
        {/* Render list of blog posts with title, content */}
      </section>
    </main>
  );
}
