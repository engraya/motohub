import React from 'react'
import Link from 'next/link'
import { carImage } from '@/public'
import Image from 'next/image'
import { car3, car4, car5, car6 } from '@/public'
import SquigglyLines from './SquigglyLines'
function LandingPageComponent() {
  const carSite = "https://www.youtube.com/watch?v=INRncaJ6Dxc"
  const carsPhotos = "https://www.pexels.com/search/cars/"
  return (
<div>
  <div className="container mx-auto">
  <div className="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
  {/* Left Column */}
  <div className="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
    <div className="mb-16 lg:my-auto lg:max-w-lg">
      <div className="mb-6 max-w-xl">
        <div>
          <p className="bg-teal-accent-400 mb-2 inline-block rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">Where Passion Meets Performance</p>
        </div>
        <h2 className="mb-6 max-w-lg text-3xl font-extrabold text-slate-100 sm:text-5xl sm:leading-snug">
          Unleash your <br />
          Drive with
          <span className="rounded- abg-gradient-to-r inline-block bg-lime-400 from-sky-400 to-blue-400 px-2 font-bold">
          <span className="relative whitespace-nowrap bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-4xl font-extrabold ">
            <SquigglyLines />
            <span className="relative text-extrabold">MotoHub</span>
          </span>{' '}
            </span>
        </h2>
        <p className="text-base text-gray-100 md:text-lg">
        At MotoHub, we are not just about cars; we are about igniting your passion for driving. Our curated collection blends timeless classics with cutting-edge innovation, ensuring that every journey is an exhilarating experience. With a commitment to excellence and a team of passionate enthusiasts, MotoHub is your destination for automotive inspiration. From exploring our meticulously crafted fleet to experiencing expert services, we are here to elevate your driving experience to new heights.
        </p>
      </div>
      <div className="flex flex-col space-y-6 md:items-start items-center">
  <Link href="/explore">
    <div className="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 whitespace-nowrap focus:ring"> 
      Get started 
    </div>
  </Link>
  <Link href="/about" className="md:hidden">
    <div className="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 whitespace-nowrap focus:ring">
      About
    </div>
  </Link>
</div>

    </div>
  </div>
  {/* /Left Column */}
  {/* Right Column */}
  <div className="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
    {/* Col 2 */}
    <div className="hidden w-56 items-center space-y-3 lg:flex">
      <div className="overflow-hidden rounded-xl bg-yellow-400">
        <Image className="h-full w-full object-cover" src={car4} height={500} width={500} alt="car" />
      </div>
    </div>
    <div className="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
      <div className="h-40 overflow-hidden rounded-xl bg-green-600/60">
      <Image className="h-full w-full object-cover" src={car6} height={500} width={500} alt="car" />
      </div>
      <div className="h-40 overflow-hidden rounded-xl bg-pink-600/60">
      <Image className="h-full w-full object-cover" src={car5} height={500} width={500} alt="car" />
      </div>
      <div className="h-40 overflow-hidden rounded-xl bg-blue-600/60">
      <Image className="h-full w-full object-cover" src={car3} height={500} width={500} alt="car" />
      </div>
    </div>
  </div>
  {/* /Right Column */}
</div>
    <div className="text-center px-3 lg:px-0">
    <section className="mx-auto py-16">
  <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
    <div className="text-center">
      <h2 className="bg-clip-text text-3xl font-extrabold text-gray-200 sm:text-5xl">Get in touch</h2>
      <p className="bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">Driving Innovation, Inspiring Adventure</p>
    </div>
  </div>
</section>
<Link href="/explore">
<button className="mx-auto lg:mx-0 hover:underline whitespace-nowrap text-white font-extrabold rounded-lg my-2 md:my-6 py-4 px-8 shadow-lg w-48 transition hover:translate-y-1 hover:scale-105 hover:shadow-lg">
        Get started
      </button>
</Link>

    </div>
      <section className="relative py-10 text-gray-800 sm:py-16 md:py-20 md:pb-32">
  <div className="group relative mx-auto mb-10 hidden w-full max-w-xl overflow-hidden rounded-xl border-8 border-white bg-teal-600 shadow-lg md:block">
    <div className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center duration-500 hover:scale-110 hover:text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
      </svg>
    </div>
    <Image className="group-hover:opacity-30 h-full w-full opacity-100 duration-500" src={carImage} alt="" />
  </div>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 md:flex lg:px-8">
    <div className="relative mx-auto my-auto flex flex-col items-center text-center">
      <h2 className="leading-tight lg:text-6xl bg-teal-accent-400 mb-2 inline-block rounded-full px-3 py-1 uppercase tracking-wider text-indigo-900 bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl"> Stay Updated with Latest Trends and News<span className="whitespace-nowrap"></span></h2>
      <p className="mt-4 font-medium md:text-xl">Let&apos;s free Start Your Motoub Journey Today</p>
      <div className="sm mt-8 flex flex-col sm:flex-row sm:space-x-4 sm:px-0 lg:mt-12">
        <Link href={carsPhotos} target='_blank'>
        <button className="relative mt-4 rounded-lg bg-orange-500 px-6 py-2 font-medium text-white shadow transition hover:bg-orange-600">
          <div className="-scale-x-100 absolute left-0 -bottom-10 hidden h-10 w-10 -rotate-12 text-gray-800 md:inline-flex">
            <svg viewBox="0 0 82 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z" fill="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M33.9279 29.9296C33.9687 30.0252 34.0103 30.1211 34.0512 30.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7123 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8129 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.3082 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 12.1435 76.2413 6.39113C77.3061 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.12306 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36306C79.3033 5.6264 78.3041 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 30.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.122 30.8655C40.842 30.7492 40.3185 30.9333 40.0448 31.1527C37.2899 33.3656 34.1239 34.5277 30.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 30.2773 11.8348 29.0418C9.65017 27.2812 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7212 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 12.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 30.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 30.4122 20.5417 30.5982 17.0518C30.8143 13.0012 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 12.1255C42.9294 13.9466 43.9712 16.2194 44.3347 18.7977C44.7112 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z" fill="currentColor" />
            </svg>
          </div>
          Explore cars
        </button>
        </Link>

        <Link href={carSite} target='_blank'>
        <button className="mt-4 flex items-center text-white rounded-lg border-2 border-gray-800 px-6 py-2 font-medium transition hover:bg-gray-800 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          Watch the demo
        </button>
        </Link>

      </div>
    </div>
  </div>
</section>
  </div>


  
</div>
  )
}

export default LandingPageComponent
