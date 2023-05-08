"use client"; 
import data from '../json/data.json';
import Years from './components/years';
import { useState } from 'react';



export default function Home() {
  const [totalYears, setTotalYears] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>I have been working for {totalYears} years</h1>
      <Years technology={data.technology} yearResult={setTotalYears}  />
    </main>
  )
}
