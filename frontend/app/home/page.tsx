"use client"
import LandingSection from "@/components/LandingSection";
import Playlist from "@/components/Playlist";
import { useState } from "react";
import { GiMusicSpell } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
export default function Home(){
    const [render , setRender] = useState("Home")
    return (
         <div className="relative w-full h-full overflow-hidden bg-black  border border-dashed border-gray-700 font-Poppins p-5">
             <div className="absolute inset-0 ">
               <div className="absolute inset-0 bg-gradient-to-tr from-violet-950/30 via-transparent to-transparent" />
               <div className="absolute inset-0 bg-gradient-to-bl from-blue-950/30 via-transparent to-transparent" />
               <div className="absolute inset-0" 
                    style={{
                      background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 90%)'
                    }}
               />
               <div className="absolute inset-0 backdrop-blur-3xl opacity-30" />
             </div>
             
             <div className="relative z-10 flex  w-full text-white">
              {/* left side */}
              <div className="w-[22%] pr-4 flex flex-col gap-12">
                <div className="flex items-center justify-between text-[20px]">
                <div className="flex items-center gap-2">
                <GiMusicSpell/>
                <h1>Your Library</h1>
                </div>
                <div className="text-[24px] cursor-pointer">
                <GoPlus/>
                </div>
                </div>
                 
                <h1 className="cursor-pointer" onClick={()=>setRender("Home")}>Home</h1>

                <div className="w-full h-[300px] bg-violet-950/10 rounded-xl shadow-md" onClick={() => setRender("Playlist")}>
                   
                </div>                   
              </div>
              {/* right side */}
              <div className="w-[78%] p-6 overflow-y-auto h-screen pb-52 ">
              {
                render === "Playlist" ?  <Playlist/> : <LandingSection/>
              }
             
              </div>
             </div>
           </div>
    )
}