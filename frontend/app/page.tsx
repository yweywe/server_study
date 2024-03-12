import Image from "next/image";
import { useState } from "react";

export default function Home() {  
  return (
    <main className="flex flex-col min-h-screen items-center gap-16 bg-[#282828]">
      <h1 className=" text-8xl">Work wanted!</h1>
        
      <p className="flex flex-col items-end gap-8 text-4xl">I'm willing to work and relocate!</p>
      <p></p>
    </main>
  );
}