import Link from "next/link";
import Image from "next/image";
import navCar from "@public/navCar.svg"
const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
        <div className="pl-4 flex items-center">
          <Link href="/">
          <div className="no-underline hover:no-underline bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-xl font-extrabold text-transparent lg:text-4xl">
            <Image src={navCar} width={50} height={50} alt="logo" className="inline-block mx-3"/>
            MotoHub
          </div>
          </Link>
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden  mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">

          </ul>
          <Link href="/cars">
            <div className="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring">
            Explore
            </div>
          </Link>
  
        </div>
      </div>
    </nav>

  </header>
);

export default NavBar;
