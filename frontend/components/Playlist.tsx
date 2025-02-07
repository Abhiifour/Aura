import { RxDotFilled } from "react-icons/rx";
import { RxDotsHorizontal } from "react-icons/rx";
import Song from "./Song";
export default function Playlist(){
    return (
        <div className="w-full p-3 font-Poppins text-white  ">
        {/* top */}
       <div className="flex gap-6 items-center">
       <div className="w-[200px] h-[200px] bg-gray-800">

        </div>
        <div>
           <h1>Playlist</h1>
           <h1 className="text-[52px]">Top Global Songs</h1>
           <div className="flex items-center text-[14px]">
           <RxDotFilled/>
           <p>Created 10 hours ago</p>
           </div>
        </div>
       </div>
       <div className="text-[32px] py-4 ">
        <RxDotsHorizontal className="cursor-pointer"/>
       </div>
       <div className="flex flex-col gap-3">
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>

       </div>
        </div>
    )
}