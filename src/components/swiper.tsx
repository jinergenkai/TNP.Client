// Import Swiper React components

// Import Swiper styles
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  image: string;
}

export default function IntroComponent({ image }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const setPlayback = () => {
    if (videoRef.current) videoRef.current.playbackRate = 4;
  };
  useEffect(() => {
    setPlayback();
  }, [videoRef]);
  return (
    <div className="relative w-full h-[100vh]">
      {/* <img
                src={image}
                alt="image"
                className="object-cover w-full h-[80vh]"
              ></img> */}

      {/* <video
        autoPlay
        loop
        muted
        className="object-cover w-full h-full rounded-lg shadow-lg"
        ref={videoRef}
      >
        <source src={image} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <img src="./background.png"></img>

      {/* <div className="my-6">Vững bền mọi công trình</div>
        <div className="text-2xl">
        Welcome to 
        <br/>
        Huynh Hanh Building Materials
        </div>
        <button className="px-16 py-1 text-xl text-white bg-black border-2 border-black border-solid hover:text-black hover:bg-transparent hover:border-solid hover:border-2 hover:border-black ">
          <a href="/jewelry">Xem thêm</a>
        </button> */}
      <img
        src="banner2.png"
        className="w-[20%] absolute left-[50%] tranform translate-x-[-50%] z-20 text-5xl leading-9 text-left text-white align-middle top-32"
      ></img>
    </div>
  );
}
