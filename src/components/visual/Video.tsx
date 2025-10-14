import { useEffect, useState } from "react";
import { useGetVideosQuery } from "../../features/api/apiSlice"
import logo from "../../assets/WhatsApp Image 2025-10-12 at 18.33.46.jpeg"
import { useParams } from "react-router-dom";
import { SquarePlay } from "lucide-react";
const Video = () => {
  const{videoId}=useParams();
  const[matchedVideos,setMatchedVideos]=useState<any>([]);
  const{data:videos,isLoading}=useGetVideosQuery({language:"ar"});
     useEffect(()=>{
     const matchVideos = videos?.videos?.flatMap(videoo =>
      videoo.videos
    .filter(video => video.id === Number(videoId))
    .map(video => ({
      reciterName: videoo.reciter_name,
      videoss: video,
    }))
    );
    setMatchedVideos(matchVideos);

  },[videos])
  useEffect(()=>{
    
  },[videos])
  return (
    <main className="md:w-[768px] lg:w-[976px] xl:w-[1440px] mx-auto w-[95%] mt-5 flex flex-col gap-5 items-center min-h-[650px]">
      
      {isLoading||!matchedVideos?
      <div className="w-full  grid place-content-center">
          <img
          src={logo}
          alt="loading"
          className="w-10 h-10 rounded-full border border-text animate-spin"
          />

      </div>:
      <div className="flex-col flex gap-3 justify-center items-center w-full bg-primary p-7 border-4 border-text rounded-xl">
        <div className="flex flex-col gap-2">
        <p className="text-text text-xl">القارئ: {matchedVideos?.[0]?.reciterName}</p>
        <SquarePlay size={25} className="text-text" />
        </div>
        <div className="p-2 border-2 border-text rounded-lg  ">
        <video
          src={matchedVideos?.[0]?.videoss?.video_url}
          controls
          width="300"
          className="rounded-xl shadow-lg"
        />
        </div>
      </div>}
        
    </main>
  )
}

export default Video