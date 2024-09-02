import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition, TransitionChild, DialogPanel } from "@headlessui/react";
import { CarProps } from "@types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  onClick={closeModal}
                >
                  <Image
                    src='/close.svg'
                    alt='close'
                    width={20}
                    height={20}
                    className='object-contain'
                  />
                </button>

                <div className='flex-1 flex flex-col gap-2'>
                  <h2 className='font-semibold text-xl capitalize'>
                    {car.make} {car.model}
                  </h2>
                  <div className='mt-3 flex flex-wrap gap-4'>
                      <div className='flex justify-between gap-5 w-full text-right'  >
                        <h4 className='text-gray-900 capitalize'>
                          Manufacturer
                        </h4>
                        <p className='text-black-100 font-semibold'>
                          {car.make}
                        </p>
                      </div>
                      <div className='flex justify-between gap-5 w-full text-right'  >
                        <h4 className='text-gray-900 capitalize'>
                            Model
                          </h4>
                          <p className='text-black-100 font-semibold'>
                            {car.model}
                          </p>
                      </div>
                      <div className='flex justify-between gap-5 w-full text-right'  >
                        <h4 className='text-gray-900 capitalize'>
                            Year
                          </h4>
                          <p className='text-black-100 font-semibold'>
                            {car.year}
                          </p>
                      </div>
                      <div className='flex justify-between gap-5 w-full text-right'  >
                        <h4 className='text-gray-900 capitalize'>
                            Transmission
                          </h4>
                          <p className='text-black-100 font-semibold'>
                            {car.transmission}
                          </p>
                      </div>
                      <div className='flex justify-between gap-5 w-full text-right'  >
                        <h4 className='text-gray-900 capitalize'>
                            Fuel Type
                          </h4>
                          <p className='text-black-100 font-semibold'>
                            {car.fuel_type}
                          </p>
                      </div>
                      <div className='flex justify-between gap-5 w-full text-right'  >
                        <h4 className='text-gray-900 capitalize'>
                            Drive Type
                          </h4>
                          <p className='text-black-100 font-semibold'>
                            {car.drive}
                          </p>
                      </div>
                      <div className='flex justify-between gap-5 w-full text-right'  >
                        <h4 className='text-gray-900 capitalize'>
                            Displacement
                          </h4>
                          <p className='text-black-100 font-semibold'>
                            {car.displacement}
                          </p>
                      </div>
                      <div className='flex justify-between gap-5 w-full text-right'  >
                      <h4 className='text-gray-900 capitalize'>
                          Cylinders
                        </h4>
                        <p className='text-black-100 font-semibold'>
                          {car.cylinders}
                        </p>
                      </div>
                      <div className='flex justify-between gap-5 w-full text-right'  >
                        <h4 className='text-gray-900 capitalize'>
                            Class
                          </h4>
                          <p className='text-black-100 font-semibold'>
                            {car.class}
                          </p>
                      </div>
                      <div className='flex justify-between gap-5 w-full text-right'  >
                        <h4 className='text-gray-900 capitalize'>
                            Highway Miles per Gallon (highway_mpg)
                          </h4>
                          <p className='text-black-100 font-semibold'>
                            {car.highway_mpg}
                          </p>
                      </div>
                      <div className='flex justify-between gap-5 w-full text-right'  >
                        <h4 className='text-gray-900 capitalize'>
                            City Miles per Gallon (city_mpg)
                          </h4>
                          <p className='text-black-100 font-semibold'>
                            {car.city_mpg}
                          </p>
                      </div>
                      <div className='flex justify-between gap-5 w-full text-right'  >
                        <h4 className='text-gray-900 capitalize'>
                            Combination Miles per Gallon
                          </h4>
                          <p className='text-black-100 font-semibold'>
                            {car.combination_mpg}
                          </p>
                      </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
);

export default CarDetails;
