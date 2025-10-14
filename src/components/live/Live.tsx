import { useGetLiveTvQuery } from "../../features/api/apiSlice";
import logo from "../../assets/WhatsApp Image 2025-10-12 at 18.33.46.jpeg"
import Hls from "hls.js";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Radio } from "lucide-react";
const Live = () => {
  const{liveId}=useParams();
  const{data:lives,isLoading}=useGetLiveTvQuery({language:"ar"});
  const videoRef = useRef<any>(null);
  const [server,setServer]=useState<string>("");
  const[matchLive,setMatchLive]=useState<any>({})
  useEffect(()=>{
     const matchedLive:any=lives?.livetv?.find(liveTv=>liveTv.id===Number(liveId))
     setMatchLive(matchedLive);
     setServer(matchedLive?.url)
  },[lives])
  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(server);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = server;
      }
    }
  }, [server]);
  return (
    <main className="md:w-[768px] lg:w-[976px] xl:w-[1440px] mx-auto w-[95%] mt-5 flex flex-col gap-5 items-center  min-h-[650px]">
    {isLoading?
    <div className="w-full  grid place-content-center">
          <img
          src={logo}
          alt="loading"
          className="w-10 h-10 rounded-full border border-text animate-spin"
          />

    </div>:
      <div className="flex-col flex gap-3 justify-center items-center w-full bg-primary p-7 border-4 border-text rounded-xl">
       <div className="flex flex-col gap-2">
        <p className="text-text text-xl">القناة : {matchLive?.name}</p>
        <Radio size={25} className="text-text" />
        </div>
        <div className="p-2 border-2 border-text rounded-lg  ">
        <video
        ref={videoRef}
        controls
        autoPlay
        muted
        width="640"
        className="rounded-xl shadow-lg"
        />
        </div>
    </div>}
    </main>
  )
}

export default Live