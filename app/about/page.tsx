import PagesContainer from '@/components/PageContainer'
import React from 'react'
import Image from 'next/image'
import { car4 } from '@/public'


function AboutPage() {
  return (
    <PagesContainer>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
  <div className="max-w-xl mx-auto text-center">
    <p className="bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">About Motohub</p>
  </div>
  <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
    <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
      <div className="flex items-start">
        <svg className="flex-shrink-0 text-green-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        <div className="ml-5">
          <h3 className="text-xl font-semibold text-emerald-400 dark:text-slate-50"> Explore a World of Cars</h3>
          <p className="mt-3 text-base text-gray-300 dark:text-slate-300">Motohub is your ultimate destination for all things automotive. Whether you're a car enthusiast, a potential buyer, or simply curious about the latest models, our app provides comprehensive details on a wide range of cars. Discover in-depth specifications, high-quality images, and expert reviews to help you make informed decisions and satisfy your passion for cars.</p>
        </div>
      </div>
      <div className="flex items-start">
        <svg className="flex-shrink-0 text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <div className="ml-5">
          <h3 className="text-xl font-semibold text-blue-400 dark:text-slate-50">Stay Updated with the Latest Trends</h3>
          <p className="mt-3 text-base text-gray-300 dark:text-slate-300">In the fast-paced world of automotive innovation, staying up-to-date is key. Motohub brings you the latest news, trends, and developments in the car industry. From groundbreaking technology to upcoming car releases, our app ensures you're always in the loop with what's happening in the automotive world.</p>
        </div>
      </div>
      <div className="flex items-start">
        <svg className="flex-shrink-0 text-red-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <div className="ml-5">
          <h3 className="text-xl font-semibold text-pink-400 dark:text-slate-50">Compare and Choose with Confidence</h3>
          <p className="mt-3 text-base text-gray-300 dark:text-slate-300">Making the right choice can be challenging with so many options available. Motohub's comparison tools allow you to easily compare different models based on key factors like price, performance, and features. Whether you're deciding on your next car purchase or just exploring your options, Motohub empowers you to make confident, well-informed decisions.</p>
        </div>
      </div>
    </div>
    <div className="lg:col-span-1">
      <Image className="w-full rounded-lg shadow-xl" src={car4} alt="Dashboard screenshot" />
    </div>
  </div>
</div>

    </PagesContainer>
  )
}

export default AboutPage
