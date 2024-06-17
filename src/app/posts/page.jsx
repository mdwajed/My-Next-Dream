import { postData } from "@/Fetch/PostsApi";
import React from "react";

const PostPage = async () => {
  const posts = await postData();
  console.log(posts);
  return (
    <div className="min-h-screen m-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {posts.slice(0, 18).map(({ title, body, id }) => (
          <div
            key={id}
            className="border-2 border-red-950 rounded-xl p-4 space-y-4"
          >
            <h2>
              <span className="bg-red-900 px-2 py-1 text-white ">Title</span> :{" "}
              {title}
            </h2>
            <h2>
              <span className="bg-red-900 px-2 py-1 text-white ">Body</span> :{" "}
              {body}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
