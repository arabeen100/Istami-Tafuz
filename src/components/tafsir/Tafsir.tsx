import { useParams } from "react-router-dom"
import { useGetTafsirQuery } from "../../features/api/apiSlice"
import logo from "../../assets/WhatsApp Image 2025-10-12 at 18.33.46.jpeg"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState } from "react";
import { LibraryBig } from "lucide-react";
const Tafsir = () => {
  const[server,setServer]=useState<string>("");
  const[tafsirName,setTafsirName]=useState<string>("");
  const{surahId}=useParams();
  const {data:tafsir,isLoading}=useGetTafsirQuery({language:"ar",tafsir:1,sura:Number(surahId)})
  return (
  <main className="md:w-[768px] lg:w-[976px] xl:w-[1440px] mx-auto w-[95%] mt-5 flex flex-col gap-5 items-center min-h-[650px]">
        {isLoading?
        <div className="w-full  grid place-content-center">
          <img
          src={logo}
          alt="loading"
          className="w-10 h-10 rounded-full border border-text animate-spin"
          />

        </div>:
        <div>
          <ul className="flex w-full flex-wrap gap-2 justify-center items-center">
          {tafsir?.tafasir?.soar?.[String(surahId)]?.map((tafsir:any)=>
              <a href={"#audio"}  onClick={()=>{setServer(tafsir.url);
                setTafsirName(tafsir.name)
              }} className="cursor-pointer text-text text-sm h-17.5 p-2 min-w-[120px]  w-[calc(33.33%-6px)] md:w-[calc(25%-9px)] xl:w-[calc(20%-8px)] text-center bg-primary border-2 border-text hover:bg-secondary transition-colors duration-300 rounded-lg flex justify-center items-center" key={tafsir.id}><li>{tafsir.name}</li></a>
            )} 
         </ul>
        {server&&tafsirName&&
         <div id="audio" className="w-full">
         <AudioPlayer          
          className=' custom-audio-player relative mt-10 '
           src={server}
          autoPlay={false}
          showJumpControls={false}
          customAdditionalControls={[
          <div className=' absolute top-15 p-2 ' key={"الخلاصة من تفسير الطبري"}>          
          <span className='text-text '>{tafsirName}-</span>
          <span className='text-text '>الخلاصة من تفسير الطبري</span>
          <LibraryBig className='text-text mt-2 ' size={25}/>
         </div>
          ]}
        />
        </div>}    
        </div>}   


  </main>
  )
}

export default Tafsir