import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Images from './pages/Images';
import Containers from './pages/Containers';
import ContainerDetail from './pages/ContainerDetail';
import { Toaster } from 'sonner'

const App = () => {
  return (
    <>
      <div className="w-full flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/images" element={<Images />} />
          <Route path="/containers" element={<Containers />} />
          <Route path="/containers/:id" element={<ContainerDetail />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App