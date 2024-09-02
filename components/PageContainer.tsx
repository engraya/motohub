import React from 'react'

function PagesContainer({children} : {
    children : React.ReactNode
}) {
  return (
    <section className='py-12 sm:py-12 lg:py-16'>
      {children}
    </section>
  )
}

export default PagesContainer
