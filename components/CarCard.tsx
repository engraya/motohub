"use client"

import React from 'react'
import { carImage } from '@/public'
import Image from 'next/image'
import { CarProps } from '@/types'
import Button from './CustomButton'
import { useState } from 'react'
import CarDetails from './CarDetails'
interface CarCardProps {
  car: CarProps;
}


function CarCard({ car }: CarCardProps) {

  const [isOpen, setIsOpen] = useState(false);

  const { year, make, model, drive, fuel_type, cylinders, highway_mpg, transmission } = car;
  return (

  <div className="my-2">
    <div className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
        <div className="relative flex items-end  max-w-screen-xl rounded-xl">
          <Image src={carImage} height={500} width={500} alt="car" className='w-full rounded'/>
          <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-slate-400 ml-1 text-sm">{transmission}</span>
          </div>
        </div>
        <div className="mt-1 p-2">
          <h2 className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-xl font-extrabold text-transparent">{model}</h2>
          <p className="bg-gradient-to-r from-gray-900 to-indigo-500 bg-clip-text text-sm font-medium text-transparent">{make}</p>
          <ul className="box-border flex list-none items-center justify-between border-t border-b border-solid border-gray-200 px-0 py-6">
            <li className="mr-4 flex items-center text-left">
              <i className="mr-2 text-2xl text-green-600">
              <Image src="/drive.svg" width={20} height={20} alt="seat" />
              </i>
              <span className="text-sm">{drive}</span>
            </li>
            <li className="mr-4 flex items-center text-left">
            <i className="mr-2 text-2xl text-green-600">
              <Image src="/fuel.svg" width={20} height={20} alt="seat" />
              </i>
              <span className="text-sm">{fuel_type}</span>
            </li>
            <li className="flex items-center text-left">
            <i className="mr-2 text-2xl text-green-600">
              <Image src="/cylinder.svg" width={20} height={20} alt="seat" />
              </i>
              <span className="text-sm">{cylinders}</span>
            </li>
          </ul>
          <div className="mt-3 flex items-end justify-between">
            <p>
              <span className="text-lg font-bold text-blue-500">{highway_mpg}</span>
              <span className="text-slate-400 text-sm">MPG</span>
            </p>
            <div className="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
              {year}
            </div>
          </div>
        </div>
        
        <div className="">
          <Button
            title='Details'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            handleClick={() => setIsOpen(true)}
          />
        </div>
        <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  </div>

  )
}

export default CarCard
