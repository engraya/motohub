import Image from "next/image";
import Link from "next/link";
import { navCar } from "@/public";
const Footer = () => (
  <>
    <footer className="relative mt-20 bg-gray-900 px-4 pt-10">
      <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2"><Image className="h-full object-contain" src={navCar} alt="" /></div>
      <nav aria-label="Footer Navigation" className="mx-auto mb-2 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left">
        <Link href="/">
        <div className="font-medium text-white">Home</div>
        </Link>
        <Link href="/about">
        <div className="font-medium text-white">About</div>
        </Link>
      </nav>
      <div className="flex items-center justify-center">
        <Link href="/">
          <div className="no-underline hover:no-underline bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-4xl font-extrabold text-transparent lg:text-4xl">
            <svg className="h-6 w-6 inline-block fill-current text-yellow-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
            </svg>
            MotoHub
          </div>
          </Link>
        </div>
      <p className="py-10 text-center text-gray-300">© 2024 MotoHub | All Rights Reserved</p>
    </footer>
    
  </>
);

export default Footer;
