'use client'

import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

const homeContext = createContext()
function HomeProvider({ children }) {
    const [active, setActive] = useState('home')

    const [details, setDetails] = useState({
        name: '',
        amount: ''
    })
    const saveTransaction=async(action, status)=>{
        const details2 = JSON.parse(sessionStorage.getItem('details')) 
        console.log(details2, action)
        await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/saveTransaction`,{name:details2.name, amount:details2.amount, status:status})
        .then(res=>{console.log(res.data); setActive(action)})
    }

    useEffect(()=>{
        if(!Object.values(details).includes('')){
            sessionStorage.setItem('details', JSON.stringify(details))
        }
        
    },[details])
  
  return (
    <homeContext.Provider value={{
        details, setDetails, saveTransaction, active, setActive
    }}>

      {children}

    </homeContext.Provider>
  )
}

export default HomeProvider
export const useHomeContext = () => useContext(homeContext)
