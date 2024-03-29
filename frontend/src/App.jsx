import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Images from './pages/Images';
import Containers from './pages/Containers';
import ContainerDetail from './pages/ContainerDetail';
import PullImage from './pages/PullImage';
import { Toaster } from 'sonner'
import TestLine from './components/TestLine'

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
          <Route path="/pull" element={<PullImage/>} />
          <Route path='/puku' element={<TestLine />} />
        </Routes>
        <Toaster richColors position="top-center"/>
      </div>
    </>
  )
}

export default App