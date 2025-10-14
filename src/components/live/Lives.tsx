import { useGetLiveTvQuery } from "../../features/api/apiSlice"
import logo from "../../assets/WhatsApp Image 2025-10-12 at 18.33.46.jpeg"
import { Link } from "react-router-dom";
const Lives = () => {
  const{data:lives,isLoading}=useGetLiveTvQuery({language:"ar"});

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
    <ul className="flex flex-col  gap-5 w-full">
      {lives?.livetv?.map(liveTv=>
        <Link  key={liveTv.id} className="flex transition-colors duration-300 gap-2 w-full  h-30 bg-primary rounded-lg  items-center justify-center hover:bg-secondary cursor-pointer border-2 border-text text-text text-xl" to={`/live/${liveTv.id}`}><li>{liveTv.name}</li></Link>
      )}
    </ul>}


    </main>
  )
}

export default Lives