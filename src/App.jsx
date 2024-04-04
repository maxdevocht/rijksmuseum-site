import { useState } from 'react'
import Navbar from '../components/Navbar'
import Card_Museum from '../components/Card_Museum'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="bento--header">
        <Card_Museum />
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </>
  )
}

