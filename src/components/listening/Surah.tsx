import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {useGetRecitersQuery,useGetSuwarQuery } from '../../features/api/apiSlice';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/reduxTyped';
import logo from "../../assets/WhatsApp Image 2025-10-12 at 18.33.46.jpeg"
import { BookOpenText } from 'lucide-react';
import QuranViewer from './QuranViewer';
const Surah = () => {
  const{data:suwar}=useGetSuwarQuery({language:"ar"})
  const{reciterId,surahId}=useParams();
  const[server,setServer]=useState<string>("");
  const[suraName,setSuraName]=useState<string>("")
  const {rewaya}=useAppSelector((state)=>state.rewaya)
  const{data:reciters,isLoading}=useGetRecitersQuery({language:"ar",reciter:Number(reciterId)});
  useEffect(()=>{
    if(reciters&&rewaya){
   const ser:any=reciters?.reciters?.map(reciter=>
      reciter.moshaf?.find(moshaf=>rewaya===moshaf.name)?.server
    )
    
    setServer(ser?.[0])}
  },[reciters,rewaya])
  useEffect(()=>{
     if(suwar){
      const surah:any=suwar?.suwar?.find(sura=>sura.id===Number(surahId))?.name
      setSuraName(surah);
     }
  },[suwar])
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
    <div className='w-full flex flex-col gap-5'>
    <QuranViewer id={String(surahId)} suwar={suwar}/>
    <AudioPlayer
    className='custom-audio-player relative'
      src={`${server}${surahId?.length===1?`00${surahId}`:surahId?.length===2?`0${surahId}`:surahId}.mp3`}
      autoPlay={false}
      showJumpControls={false}
      customAdditionalControls={[
        <div className=' absolute top-15 p-2 ' key={suraName}>        
          <span className='text-text '>{suraName}-</span>
          <span className='text-text '>{reciters?.reciters?.map((reciter)=>reciter.name)?.[0]}-</span>
          <span className='text-text'>{rewaya}</span>
          <BookOpenText className='text-text mt-2 ' size={25}/>  

        </div>
      ]}
    /> 
    </div>   
    }
    
    </main>
  )
}

export default Surah