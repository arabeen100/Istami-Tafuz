import { Link } from "react-router-dom"

const Missing = () => {
  return (
    <main className=" flex flex-col gap-1 justify-center items-center h-screen bg-gray-300 ">
      <h1 className="font-semibold text-[100px] sm:text-[200px] md:text-[300px] leading-none h-fit text-primary ">404</h1>
      <p className="font-semibold text-xl sm:text-2xl md:text-3xl text-primary ">Oops! Nothing was found</p>
      <p className="mt-3" >Back to <Link className="text-text text-lg" to={"/"}>Home</Link></p>
      
    </main>
  )
}

export default Missing