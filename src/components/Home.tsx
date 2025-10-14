import { BookOpenText,Radio,RadioReceiver,LibraryBig,SquarePlay ,NotebookPen} from "lucide-react"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <main className="md:w-[768px] lg:w-[976px] xl:w-[1440px] mx-auto w-[95%] mt-5 lg:min-h-[650px] lg:flex lg:items-center">
      <div className="flex flex-col md:flex-row md:flex-wrap gap-5">
      <Link to={"/listening"} className="flex transition-colors duration-300 gap-2 w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)] xl:w-[calc(25%-16px)] h-50 bg-primary rounded-lg  items-center justify-center hover:bg-secondary cursor-pointer border-2 border-text">
        <p className="text-text text-3xl">تلاوات القرآن الكريم</p>
        <BookOpenText className="text-text" size={35}/>
      </Link>
      <Link to={"/tafsir"} className="flex transition-colors duration-300 gap-2  w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)] xl:w-[calc(25%-16px)] h-50 bg-primary rounded-lg  items-center justify-center hover:bg-secondary cursor-pointer border-2 border-text">
        <p className="text-text  text-3xl">تفسير القرآن الكريم</p>
        <LibraryBig className="text-text" size={35}/>
      </Link> 
      <Link to={"/tadabor"} className="flex transition-colors duration-300 gap-2 px- w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)] xl:w-[calc(25%-16px)] h-50 bg-primary rounded-lg  items-center justify-center hover:bg-secondary cursor-pointer border-2 border-text">
        <p className="text-text  text-3xl">وقفات تدبرية</p>
        <NotebookPen className="text-text" size={35}/>
      </Link> 
      <Link to={"/videos"} className="flex transition-colors duration-300 gap-2 px- w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)] xl:w-[calc(25%-16px)] h-50 bg-primary rounded-lg  items-center justify-center hover:bg-secondary cursor-pointer border-2 border-text">
        <p className="text-text  text-3xl">تلاوات مرئية</p>
        <SquarePlay className="text-text" size={35}/>
      </Link>
      <Link to={"/live"} className="flex transition-colors duration-300 gap-2 px- w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)] xl:w-[calc(25%-16px)] h-50 bg-primary rounded-lg  items-center justify-center hover:bg-secondary cursor-pointer border-2 border-text">
        <p className="text-text  text-3xl">البث المباشر</p>
        <Radio className="text-text" size={35}/>
      </Link>
      <Link to={"/radio"} className="flex transition-colors duration-300 gap-2 px- w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)] xl:w-[calc(25%-16px)] h-50 bg-primary rounded-lg  items-center justify-center hover:bg-secondary cursor-pointer border-2 border-text">
        <p className="text-text  text-3xl">الإذاعة</p>
        <RadioReceiver className="text-text" size={35}/>
      </Link>
      </div>                        
    </main>
  )
}

export default Home