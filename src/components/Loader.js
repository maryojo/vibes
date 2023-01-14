import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import LoadingAnimation from "../assets/animations/loading-animation.json";
import DefaultLayout from "../components/DefaultLayout";

const Loader = () => {
  return (
    <DefaultLayout>
      <div className="w-full h-full flex justify-center items-center">
        <Player
          src={LoadingAnimation}
          autoplay
          loop
          className={`w-64 h-64`}
        ></Player>
      </div>
    </DefaultLayout>
  );
};

export default Loader;
