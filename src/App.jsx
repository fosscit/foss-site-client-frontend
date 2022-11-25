import React from 'react'
import styles from './style';

import { Navbar,Footer,HomePage, AboutUs, Members, Contact, Announcement, Events } from './components'; 
import { Route, Routes } from 'react-router-dom';
const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} text-white`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} text-white`}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/members' element={<Members/>}/>
          <Route path='/announcement' element={<Announcement/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} text-white`}>
        <Footer/>
      </div>
    </div>

  </div>
)

export default App;