import { useEffect, useState } from "react";
import { useGetRecitersQuery ,useGetSuwarQuery} from "../../features/api/apiSlice";
import { Search } from "lucide-react";
import logo from "../../assets/WhatsApp Image 2025-10-12 at 18.33.46.jpeg";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch,useAppSelector } from "../../hooks/reduxTyped";
import { setItem, setRewaya } from "../../features/rewayat/rewaya";
const Reciter = () => {
  const {rewaya}=useAppSelector((state)=>state.rewaya);
  const dispatch=useAppDispatch();
  const[filteredSuwar,setFilteredSuwar]=useState<any>([])
  const{reciterId}=useParams();
  const[search,setSearch]=useState<string>("");
   const {data:reciters,isLoading}=useGetRecitersQuery({language:"ar",reciter:Number(reciterId)});
  const {data:suwar}=useGetSuwarQuery({language:"ar"});
  useEffect(()=>{
     if(reciters){
      const matchedMoshaf:any= rewaya?
            reciters?.reciters?.flatMap(reciter=>
              reciter.moshaf.filter(moshaf=>
                moshaf.name===rewaya
              )
            ):reciters?.reciters?.map(reciter=>
              reciter.moshaf[0]
            )
      const result1=suwar?.suwar.filter(surah=>
        matchedMoshaf[0]?.surah_list?.split(",").includes(String(surah.id))
      )
      const result2=search?result1?.filter(surah=>surah.name.includes(search)):result1;
      setFilteredSuwar(result2);
     }
  },[reciters,search,rewaya]);
  useEffect(()=>{

      reciters?.reciters?.forEach(reciter=>
        reciter.moshaf?.forEach((moshaf,i:number)=>{
          if(i===0){ 
            dispatch(setRewaya(moshaf.name));
            dispatch(setItem());
          }
        })
      )
  },[reciters]) 
  return (
    <main className="md:w-[768px] lg:w-[976px] xl:w-[1440px] mx-auto w-[95%] mt-5 flex flex-col gap-5 items-center min-h-[650px]">
        <div className="w-[280px] relative">
        <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
           className={`  border border-gray-300  w-[280px] bg-white  rounded-3xl p-2  outline-0 focus:border-text focus:border-2`}
          id='search'
          role='searchBox'
          type='text'
          placeholder="بحث باسم السورة"
        />
        <Search size={20} className=" absolute left-3 bottom-2.75"/>
        </div>
        <select
        value={rewaya}
        onChange={(e)=>{dispatch(setRewaya(e.target.value));
          dispatch(setItem());
        }}
        className="bg-primary text-text w-[280px] p-2 text-sm rounded-lg border-2 border-text"
        >
        <option value={""}>اختر الرواية/نوع المصحف</option>
        {reciters?.reciters?.map(reciter=>
        reciter.moshaf.map(moshaf=>
           <option key={moshaf.id} value={moshaf.name}>{moshaf.name}</option>
        )
         
        )}
        </select>
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
          {filteredSuwar?.map((surah:any)=>
              <Link to={`/listening/reciter/${reciterId}/surah/${surah.id}`} className="text-text h-17.5 min-w-[120px]  w-[calc(33.33%-6px)] md:w-[calc(25%-9px)] xl:w-[calc(20%-8px)] text-center bg-primary border-2 border-text hover:bg-secondary transition-colors duration-300 rounded-lg flex justify-center items-center " key={surah.id}><li>{surah.name}</li></Link>
            )} 
          </ul>

        </div>}
    </main>
  )
}

export default Reciter