import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useEffect, useState } from "react";
import { useGetRadiosQuery } from "../../features/api/apiSlice"
import { useParams } from "react-router-dom";
import logo from "../../assets/WhatsApp Image 2025-10-12 at 18.33.46.jpeg"
import { RadioReceiver } from 'lucide-react';
const Radio = () => {
  const{data:radios,isLoading}=useGetRadiosQuery({language:"ar"});
  const[server,setServer]=useState<string>("");
   const[matchRadio,setMatchRadio]=useState<any>({});
  const{radioId}=useParams();
  useEffect(()=>{
     const matchedRadio:any=radios?.radios?.find(radio=>radio.id===Number(radioId))
     setMatchRadio(matchedRadio);
     setServer(matchedRadio?.url)
  },[radios])
  return (
    <main className="md:w-[768px] lg:w-[976px] xl:w-[1440px] mx-auto w-[95%] mt-5 flex flex-col gap-5 items-center  min-h-[650px]">

    {isLoading&&!matchRadio&&!server?
    <div className="w-full  grid place-content-center">
          <img
          src={logo}
          alt="loading"
          className="w-10 h-10 rounded-full border border-text animate-spin"
          />

    </div>:
    <AudioPlayer
    className='custom-audio-player relative'
      src={server}
      autoPlay={false}
      showJumpControls={false}
      customAdditionalControls={[
        <div className=' absolute top-15 p-2 ' key={matchRadio?.id}>
          <span className='text-text '>الإذاعة : {matchRadio?.name}</span>
          <RadioReceiver className='text-text mt-2 ' size={25}/>          
        </div>
      ]}
    />    
    }
    </main>
  )
}

export default Radio