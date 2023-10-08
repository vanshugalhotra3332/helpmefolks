import React from "react";
import Image from "next/image";
import PrimaryButton from "@/components/Button/PrimaryButton";

export const metadata = {
  title: "HelpMeFolks - You are lost!!",
  description: "Easing your academic journey",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};


const FourOhFour = () => {
  return (
    <div className="flex justify-center">
      <div className="404 py-20">
        <div className="image image-float-animation">
          <Image
            alt="Page Not Found"
            src={"/assets/images/background/404.png"}
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="py-8 text text-center text-[var(--secondary-color)]">
          <h1 className="text-4xl font-semibold">Page Not Found</h1>
          <p className="py-8 text-xl font-medium text-[var(--third-color)]">
            404: Lost in the Digital Maze? Let{" "}
            <span className="font-bold">helpmefolks</span> Lead You Back to the
            Path of Success.
          </p>
          <PrimaryButton url={"/"} text={"go to home"} />
        </div>
      </div>
    </div>
  );
};

export default FourOhFour;
