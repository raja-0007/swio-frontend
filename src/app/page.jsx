'use client'
import Themes from "@/components/Themes";
import HomePage from "../../components/HomePage";
import Customization from "@/components/Customization";
import '../app/globals.css'
import Scrobble from "@/components/Scrobble";
import { useState } from "react";
import Payment from "@/components/Payment";
import Transactions from "@/components/Transactions";

export default function Home() {
  const [active, setActive] = useState('home')
  return (
    <main className="flex flex-col gap-24 items-center py-10 ">
      {/* <span className="text-green-300">text</span> */}
      {active == 'home' ? <>
        <HomePage setActive={setActive}/>
        <Themes />
        <Customization />
        <Scrobble />
      </> 
      :active == 'payment' ?  
      <Payment/>
      :active == 'transactions' && <Transactions/> 
      }

    </main>
  );
}
