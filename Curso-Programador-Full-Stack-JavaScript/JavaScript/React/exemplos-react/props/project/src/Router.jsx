import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './pages/Counter'
import News from './pages/News'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<News/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
    </BrowserRouter>
  )
}
