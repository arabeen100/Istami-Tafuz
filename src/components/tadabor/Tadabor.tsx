import { useParams } from "react-router-dom";
import { useGetTadaborQuery } from "../../features/api/apiSlice";
import { useEffect, useState } from "react";
import { NotebookPen } from "lucide-react";
import logo from "../../assets/WhatsApp Image 2025-10-12 at 18.33.46.jpeg"
const Tadabor = () => {
const [videoUrl,setVideoUrl]=useState<string>("");
const[matchTadabor,setMatchTadabor]=useState<any>({})

 const{surahId,tadaborId}=useParams();   
 const{data:tadabor,isLoading}=useGetTadaborQuery({language:"ar",sura:Number(surahId)});
 useEffect(()=>{
   const matchedTadabor:any=tadabor?.tadabor?.[String(surahId)]?.find(tadabor=>tadabor.id===Number(tadaborId));
   setMatchTadabor(matchedTadabor);
   setVideoUrl(matchedTadabor?.video_url);
 },[tadabor])
  return (
    <main className="md:w-[768px] lg:w-[976px] xl:w-[1440px] mx-auto w-[95%] mt-5 flex flex-col gap-5 items-center min-h-[650px]">
      
      {isLoading||!videoUrl||!matchTadabor?
      <div className="w-full  grid place-content-center">
          <img
          src={logo}
          alt="loading"
          className="w-10 h-10 rounded-full border border-text animate-spin"
          />

      </div>:
      <div className="flex-col flex gap-3 justify-center items-center w-full bg-primary p-7 border-4 border-text rounded-xl">
        <div className="flex flex-col gap-2">
        <p className="text-text text-xl" >السورة: {matchTadabor?.sora_name}</p>
        <p className="text-text text-xl">القارئ: {matchTadabor?.reciter_name}</p>
        <NotebookPen size={25} className="text-text" />
        </div>
        <div className="p-2 border-2 border-text rounded-lg ">
        <video
          src={videoUrl}
          controls
          width="300"
          className="rounded-xl shadow-lg"
        />
        </div>
      </div>}
        
    </main>
  )
}

export default Tadabor