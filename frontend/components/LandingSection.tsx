import Image from "next/image";
import { VscSearch } from "react-icons/vsc";

export default function LandingSection (){

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="text-[42px] tracking-tighter">How You Feelin' Today </h1>
            <input type="text" className="bg-violet-950/20 bg-blur-lg outline-none shadow-lg  rounded-full px-20 py-3 text-white text-[16px] text-center" placeholder="Feeling Awesome"/>
            <div className="bg-violet-950/20 bg-blur-lg text-[20px] rounded-full p-5 shadow-lg cursor-pointer">
            <VscSearch className=""/>
            </div>
            {/* <div className="font-Cedarville-Cursive">
            The answer, my friend, is blowin' in the wind
            The answer is blowin' in the wind
            </div> */}
        </div>
    )
}