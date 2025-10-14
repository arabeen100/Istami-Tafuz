import { Link } from 'react-router-dom'
import logo from '../assets/WhatsApp Image 2025-10-12 at 18.33.46.jpeg'
const Footer = () => {
  return (
    <footer className="bg-primary w-full p-10 flex flex-col gap-4 sm:justify-center sm:items-center  mt-25">
      <Link to={"/"} >
      <img 
      src={logo} 
      alt="Logo" 
      className="h-28 w-28 border border-text  rounded-full object-cover"
      />
      </Link>
      <p className='text-text text-xl font-semibold'>استمع تفز</p>
      <ul className='text-text space-y-4 sm:grid sm:grid-cols-3 sm:gap-4 md:gap-7 lg:gap-10 xl:gap-15 sm:space-y-2 sm:text-center'>
         <li className='hover:underline'><Link to={"/listening"}>تلاوات القرآن</Link></li>
         <li className='hover:underline'><Link to={"/tafsir"}>تفسير القرآن الكريم</Link></li>
         <li className='hover:underline'><Link to={"/tadabor"}>وقفات تدبرية</Link></li>
         <li className='hover:underline'><Link to={"/videos"}>تلاوات مرئية</Link></li>
         <li className='hover:underline'><Link to={"/live"}>البث المباشر</Link></li>
         <li className='hover:underline'><Link to={"/radio"}>الإذاعة</Link></li>
      </ul>
    </footer>
  )
}

export default Footer