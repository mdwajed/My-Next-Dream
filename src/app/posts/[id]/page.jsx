import React from "react";
const postsData = async (id) => {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/posts/${id}`);
  const data = await res.json();
  return data;
};
const SinglePostPage = async ({ params }) => {
  const { title, body } = await postsData(params.id);
  return (
    <div className="bg-black text-white w-96 p-6 mx-auto my-6 rounded-lg">
      <h2>Title : {title}</h2>
      <h2>Body : {body}</h2>
    </div>
  );
};

export default SinglePostPage;
