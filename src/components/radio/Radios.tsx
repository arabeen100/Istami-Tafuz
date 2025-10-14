import { useGetRadiosQuery } from "../../features/api/apiSlice"
import logo from "../../assets/WhatsApp Image 2025-10-12 at 18.33.46.jpeg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
const Radios = () => {
  const {data:radios,isLoading}=useGetRadiosQuery({language:"ar"});
  const[filterRadios,setFilterRadios]=useState<any>([])
  const[search,setSearch]=useState<string>("");
  useEffect(()=>{
    if(radios){
     const result=search? radios?.radios?.filter(radio=>(radio.name.toLowerCase().includes(search.toLowerCase()))):radios.radios

     setFilterRadios(result);
    }
    
  },[radios,search])
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
          placeholder="بحث باسم الإذاعة"
        />
        <Search size={20} className=" absolute left-3 bottom-2.75"/>
        </div>
      {isLoading&&!filterRadios?
      <div className="w-full  grid place-content-center">
          <img
          src={logo}
          alt="loading"
          className="w-10 h-10 rounded-full border border-text animate-spin"
          />

      </div>:
      <ul className="flex w-full flex-wrap gap-2 justify-center items-center">
        {filterRadios?.map((radio:any)=>
          <Link className="text-text text-sm min-h-21 p-1.5  min-w-[120px]  w-[calc(33.33%-6px)] md:w-[calc(25%-9px)] xl:w-[calc(20%-8px)] text-center bg-primary border-2 border-text hover:bg-secondary transition-colors duration-300 rounded-lg flex justify-center items-center " key={radio.id} to={`/radio/${radio.id}`}>
          <li>{radio.name}</li>
          </Link>
        )} 
      </ul>}


    </main>
  )
}

export default Radios