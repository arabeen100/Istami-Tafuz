import { Link, useParams } from "react-router-dom"
import { useGetTadaborQuery } from "../../features/api/apiSlice";
import logo from "../../assets/WhatsApp Image 2025-10-12 at 18.33.46.jpeg"
const Tadaborat = () => {
  const {surahId}=useParams();
  const{data:tadabor,isLoading}=useGetTadaborQuery({language:"ar",sura:Number(surahId)});
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
      <ul className="flex w-full bg-primary border-4 border-text rounded-xl p-5 flex-wrap gap-2 justify-center items-center">
      
      {tadabor?.tadabor?.[String(surahId)]?.map(tadabor=>
        <Link className="w-50 h-90" key={tadabor.id} to={`/tadabor/surah/${surahId}/tadabor/${tadabor.id}`}><li className="w-full border-2 border-text flex flex-col justify-center p-2 rounded-lg hover:scale-105 transition-transform duration-300">
          <img
          src={tadabor.image_url}
          alt="tadaborImage"
          className="object-cover object-center rounded-lg"
          />  
        </li></Link>
      )}
      {(tadabor&&tadabor?.tadabor?.[String(surahId)]?.length<=0)&&
      <li className="text-text bg-secondary p-5 rounded-lg border-2 border-text text-xl text-center">لا يوجد وقفات تدبرية لهذة السورة</li>}
      </ul>}
    </main>
  )
}

export default Tadaborat