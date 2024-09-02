import PagesContainer from '@/components/PageContainer'
import React from 'react'
import SearchBar from '@/components/Searchbar'
import CustomFilter from '@/components/CustomFilter'
import { fuels, yearsOfProduction } from '@/constatnts'
import { HomeProps } from '@/types'
import { fetchCars } from '@/utils'
import ShowMore from '@/components/ShowMore'
import CarCard from '@/components/CarCard'


async function ExploreCarsPage({ searchParams }: HomeProps) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


  return (
<PagesContainer>
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
        <div className="text-center">
         <p className="bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">Explore Your Favourites</p>
    </div>
       </div>
      <div className='home__filters'>
            <SearchBar />
            <CustomFilter title='Select Year' options={yearsOfProduction} />
            <CustomFilter title='Select Fuel' options={fuels} />
 
        </div>
      {!isDataEmpty ? (
        <>
      <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-2 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-4 sm:mt-8 lg:mt-16 sm:text-left">
            {allCars?.map((car) => (
              <CarCard car={car} key={car}/>
            ))}
      </div>
        <div className='mt-8'>
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
      />
          </div>
        </>

      
      ) : (
        <div className='home__error-container'>
        <h2 className='text-black text-xl font-bold'>No Car Results Found....Try again</h2>
        <p>{allCars?.message}</p>
      </div>
      )}

    </div>
</PagesContainer>

  )
}

export default ExploreCarsPage
