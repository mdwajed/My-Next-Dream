import Image from "next/image";
import React from "react";

const Gallerypage = () => {
  return (
    <div>
      <h2 className="text-center text-red-700 text-2xl font-extrabold">Gallery Page</h2>
      {/* <img src="/images/animal1.jpg" alt="" height="1080" width="1920" /> */}
      <div>
        {[1, 2, 3, 5, 6, 7]?.map((img) => (
          <Image
            className="h-400 w-full object-cover space-y-4"
            key={img}
            src={`/images/${img}.jpg`}
            alt={`Image ${img}`}
            height={580}
            width={1920}
            layout="responsive"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallerypage;
