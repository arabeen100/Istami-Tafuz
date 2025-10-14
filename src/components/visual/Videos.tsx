import { useGetVideosQuery } from "../../features/api/apiSlice"
import logo from "../../assets/WhatsApp Image 2025-10-12 at 18.33.46.jpeg"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
const Videos = () => {
  const{typeId}=useParams();
  const[matchedVideos,setMatchedVideos]=useState<any>([]);
  const{data:videos,isLoading}=useGetVideosQuery({language:"ar"});
     useEffect(()=>{
     const matchVideos = videos?.videos?.flatMap(videoo =>
      videoo.videos
    .filter(video => video.video_type === Number(typeId))
    .map(video => ({
      reciterName: videoo.reciter_name,
      videoss: video,
    }))
    );
    setMatchedVideos(matchVideos);

  },[videos])
  return (
    <main className="md:w-[768px] lg:w-[976px] xl:w-[1440px] mx-auto w-[95%] mt-5 flex flex-col gap-5 items-center min-h-[650px]">
      {isLoading&&!matchedVideos?
      <div className="w-full  grid place-content-center">
          <img
          src={logo}
          alt="loading"
          className="w-10 h-10 rounded-full border border-text animate-spin"
          />

      </div>:
      <ul className="flex w-full bg-primary border-4 border-text rounded-xl p-5 flex-wrap gap-3 justify-center items-center">
      
      {matchedVideos?.map((video:any)=>
       
        <Link className="w-80" key={video.videoss.id} to={`/videos/type/${typeId}/video/${video.videoss.id}`}><li className="w-full border-2 border-text flex flex-col justify-center p-2 rounded-lg hover:scale-105 transition-transform duration-300">
          <img
          src={video.videoss.video_thumb_url}
          alt="videoImage"
          className="object-cover object-center rounded-lg self-center"
          />
          <p className="text-text mt-1.5">{video.reciterName}</p>  
        </li></Link>       

      )}
      </ul>}
    </main>
  )
}

export default Videos