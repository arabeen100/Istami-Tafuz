import { Link } from "react-router-dom"
import logo from "../assets/WhatsApp Image 2025-10-12 at 18.33.46.jpeg"
const Navbar = () => {
  return (
    <nav  className="w-full bg-primary py-3 flex sm:gap-3 vs:gap-2 justify-center items-center">
      <p className="text-text text-center">أنعِم سمعك بخير الكلام</p>
      <Link to={"/"}>
      <img 
       src={logo} 
       alt="Logo" 
       className="h-17 w-17   border border-text  rounded-full object-cover"
      />
      </Link>
      <p className="text-text text-center">تفز بنورٍ وسلام</p>


    </nav>
  )
}

export default Navbar