import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import { useGetRecitersQuery ,useGetRewayatQuery} from "../../features/api/apiSlice";
import { Link } from "react-router-dom";
import logo from "../../assets/WhatsApp Image 2025-10-12 at 18.33.46.jpeg"
const Reciters = () => {
   const[rewaya,setRewaya]=useState<any>(0);
  const {data:reciters,isLoading}=useGetRecitersQuery({language:"ar",rewaya:rewaya});
  const {data:rewayat}=useGetRewayatQuery({language:"ar"})
  const[search,setSearch]=useState<string>("");
  const[filteredReciters,setFilteredReciters]=useState<any>([]);
  useEffect(()=>{
    if(reciters){
     const result=search? reciters?.reciters?.filter(reciter=>(reciter.name.toLowerCase().includes(search.toLowerCase()))):reciters.reciters

     setFilteredReciters(result);
    }
    
  },[reciters,search])

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
          placeholder="بحث باسم القارئ"
        />
        <Search size={20} className=" absolute left-3 bottom-2.75"/>
        </div>
        <select
        value={rewaya}
        onChange={(e)=>{setRewaya(e.target.value)}}
        className="bg-primary text-text w-[280px] p-2 text-sm rounded-lg border-2 border-text"
        >
        <option value={""}>اختر الرواية/نوع المصحف</option>
        {rewayat?.riwayat?.map(rewaya=>
          <option key={rewaya.id} value={rewaya.id}>{rewaya.name}</option>
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
            {filteredReciters?.map((reciter:any)=>
              <Link to={`/listening/reciter/${reciter.id}`} className="text-text h-17.5 min-w-[120px]  w-[calc(33.33%-6px)] md:w-[calc(25%-9px)] xl:w-[calc(20%-8px)] text-center bg-primary border-2 border-text hover:bg-secondary transition-colors duration-300 rounded-lg flex justify-center items-center " key={reciter.id}><li>{reciter.name}</li></Link>
            )}
          </ul>

        </div>}
     
    </main>
  )
}

export default Reciters