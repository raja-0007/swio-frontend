'use client'
import Themes from "@/components/Themes";
import HomePage from "../../components/HomePage";
import Customization from "@/components/Customization";
import '../app/globals.css'
import Scrobble from "@/components/Scrobble";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 items-center py-10 ">
      {/* <span className="text-green-300">text</span> */}
    <HomePage/>
    <Themes/>
    <Customization/>
    <Scrobble/>
    </main>
  );
}
