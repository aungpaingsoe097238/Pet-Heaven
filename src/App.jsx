import React from 'react'
import { Route, Routes, } from 'react-router';
import ScrollToTop from './components/shared/utls/ScrollToTop';
import { useSelector } from "react-redux"
import HomePage from './pages/home';
import PetListPage from './pages/pet';
import PetDetailPage from './pages/pet/detail';
import AboutUsPage from './pages/about';
import ContactUsPage from './pages/contact';
import CommonHeader from './components/common/Header';
import CommonFooter from "./components/common/Footer";
import Modal from "./components/shared/modal/Modal";

const App = () => {
  const isModalOpen = useSelector( (state) => state?.modal?.open );
  return (
    <div className=' text-dark '>
      {/* Header */}
      <CommonHeader />
      {/* Auto Scroll To Top When Component Change */}
      <ScrollToTop />
      {/* Routes */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pets' element={<PetListPage />} />
        <Route path='/pets/:id' element={<PetDetailPage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
      </Routes>
      <CommonFooter />
      {/* Modal */}
      { isModalOpen && <Modal/> }
    </div>
  )
}

export default App