import axios from 'axios';
import React, { useState } from 'react'

function Payment() {
    const [details, setDetails]=useState({
        name:'',
        amount:''
    })
    const handleChange = (e,item) => {
        console.log(item)
        const regex = /^[0-9]*$/;
        if(item == 'amount'){
            if (regex.test(e.target.value)) {
                
                setDetails({...details,[item]:e.target.value});
              }
        }
        else{
            console.log('not amoutn')
            setDetails({...details,name:e.target.value})
        }
        
      };

      const submitHandler=async(e)=>{
        e.preventDefault()
        if(!Object.values(details).includes('')){
            await axios.post('http://localhost:7777/api/paymentDetails',{name:details.name, amount:details.amount})
            .then((res)=>console.log(res.data))
        }
      }
  return (
    <div className='px-52 '>
        <p className='text-3xl mt-5 font-bold text-center'>Payment</p>
        <form className='flex flex-col mt-5 items-center gap-5' onSubmit={submitHandler}>
            {Object.keys(details).map((item,i)=>{
                return (
                    <div key={i} className='flex flex-col'>
                        <label htmlFor={item} className='capitalize'>{item}</label>
                        <input type="text" name="" className='border outline-none rounded-md w-72 py-1 px-2 ' value={details[item]} onChange={(e)=>handleChange(e,item)} placeholder={`enter ${item}`} id={item} />
                    </div>
                )
            })}
            <button type='submit' className='px-5 py-1 bg-yellow-400 hover:bg-yellow-300 text-white font-semibold text-xl rounded-md'>submit</button>
        </form>
      
    </div>
  )
}

export default Payment
