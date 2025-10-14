import { Moon } from "lucide-react"
import { Link } from "react-router-dom"

const VideoTypes = () => {
  return (
    <main className="md:w-[768px] lg:w-[976px] xl:w-[1440px] mx-auto w-[95%] mt-5 flex flex-col  gap-5 items-center min-h-[650px]">
      <div className="flex flex-col w-full gap-5">
      <Link to={"/videos/type/4"} className="flex transition-colors duration-300 gap-2 w-full  h-30 bg-primary rounded-lg  items-center justify-center hover:bg-secondary cursor-pointer border-2 border-text">
        <p className="text-text text-xl text-center">نفحات رمضانية</p>
        <Moon className="text-text" size={35}/>
      </Link>
      <Link to={"/videos/type/3"} className="flex transition-colors duration-300 gap-2  w-full   h-30 bg-primary rounded-lg  items-center justify-center hover:bg-secondary cursor-pointer border-2 border-text">
        <p className="text-text  text-xl text-center">نفحات إيمانية</p>
      </Link>
      <Link to={"/videos/type/2"} className="flex transition-colors duration-300 gap-2 px- w-full  h-30 bg-primary rounded-lg  items-center justify-center hover:bg-secondary cursor-pointer border-2 border-text p-2">
        <p className="text-text  text-xl text-center">
الصلاة على النبي صلى الله عليه وسلم</p>
      </Link>
      </div>        
    </main>

  )
}

export default VideoTypes