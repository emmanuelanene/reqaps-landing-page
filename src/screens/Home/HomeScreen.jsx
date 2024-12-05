import React from 'react'
import Section1 from '../../components/Section1'
import Section7 from '../../components/Section7'
import Section6 from '../../components/Section6'


function HomeScreen() {
  return (
    <div className='w-full overflow-x-hidden'>
      <Section1/>

      <Section6/>
      <Section7/>

    </div>
  )
}

export default HomeScreen