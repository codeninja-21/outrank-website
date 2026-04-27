// "use client";

import Image from "next/image";
import Button from "@/components/atoms/button";
import Spline from '@splinetool/react-spline/next';

export default function Home() {

  // const clickTest = (textTest) => {
  //   alert(textTest);
  // }

  return (
    <main className="flex flex-1 w-full flex-col items-center justify-between bg-neutral-950">
      <Spline
        scene="/spline/scene.splinecode" 
      />
    </main>
  );
}
