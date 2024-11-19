import SectionTitle from '@/components/Common/SectionTitle/SectionTitle'
import React from 'react'
import PakegesRender from './PakegesRender'
import NewBanner from '@/components/Common/Banners/NewBanner'

function PakegeOne() {
  return (
    <>
        <section id="partners" className="py-5">
          <div className="container">
  
            <div className="flex flex-col gap-8">
                <PakegesRender />
                <NewBanner />
                <PakegesRender />
                <PakegesRender />
                <PakegesRender />
            </div>

            
          </div>
        </section>
      </>
  )
}

export default PakegeOne