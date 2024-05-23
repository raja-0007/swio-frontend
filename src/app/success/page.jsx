'use client'
import React, { useEffect } from 'react'

function page() {
    useEffect(()=>{
        const saveTransaction=async()=>{
            console.log('done')
        }
        saveTransaction()
    },[])
  return (
    <div>
      success
    </div>
  )
}

export default page
