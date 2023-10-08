import React from "react";
import Image from "next/image";

const LoadingGIF = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        alt="loading...."
        src={"/assets/loader.gif"}
        width={300}
        height={300}
        loading="lazy"
      />
    </div>
  );
};

export default LoadingGIF;
