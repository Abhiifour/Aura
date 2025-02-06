import { MdArrowOutward } from "react-icons/md";
export default function Home() {
  return (
    <div className="relative w-full  flex items-center justify-center overflow-hidden bg-black h-full border border-dashed border-gray-700">
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
      
      <div className="relative z-10">
        <div className="text-[52px] font-Poppins font-bold text-transparent bg-clip-text bg-gradient-to-r tracking-tight from-violet-200 to-white">
          Tune Your Mood, AI Does the Rest!
        </div>
        <div className="py-4 text-white flex items-center text-[18px] font-Poppins">
          <div className=" text-white hover:underline underline-offset-[4px] cursor-pointer">
            Start Listening
          </div>
          <MdArrowOutward/>
        </div>
      </div>
    </div>
  );
}