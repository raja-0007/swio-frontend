'use client'

import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'

const homeContext = createContext()
function HomeProvider({ children }) {
    const [active, setActive] = useState('home')

    const [details, setDetails] = useState({
        name: '',
        amount: ''
    })
    const saveTransaction=async(action)=>{
        console.log('done')
        await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/saveTransaction`,{name:details.name, amount:details.amount})
        .then(res=>{console.log(res.data); setActive(action)})
    }
  
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
