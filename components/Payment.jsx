import axios from 'axios';
import React, { useState } from 'react'
import {loadStripe} from '@stripe/stripe-js';
import { useHomeContext } from '@/context/HomeContext';

function Payment() {
    
    const {details, setDetails, setActive} = useHomeContext()
    const handleChange = (e, item) => {
        console.log(item)
        const regex = /^[0-9]*$/;
        if (item == 'amount') {
            if (regex.test(e.target.value)) {

                setDetails({ ...details, [item]: e.target.value });
            }
        }
        else {
            console.log('not amoutn')
            setDetails({ ...details, name: e.target.value })
        }

    };

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
        if (!Object.values(details).includes('')) {
            // await axios.post('http://localhost:3000/api/payment', { name: details.name, amount: details.amount })
            //     .then((res) => console.log(res.data))
           const response =  await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/create-checkout-session`,{details:details})
          
           const session = await response.data

           const result = stripe.redirectToCheckout({
            sessionId: session.id
           })

           if((await result).error){
            console.log(result.error)
           }
        }
    }
    return (
       
        <div className='flex flex-col items-center justify-center w-full relative'>
          <span onClick={()=>setActive('home')} className='absolute top-10 left-10'>back</span>
            <p className='text-3xl mt-5 font-bold text-center'>Payment</p>
            <form className='flex flex-col mt-5 items-center gap-5' onSubmit={submitHandler}>
                {Object.keys(details).map((item, i) => {
                    return (
                        <div key={i} className='flex flex-col'>
                            <label htmlFor={item} className='capitalize'>{item}</label>
                            <input type="text" name="" className='border outline-none rounded-md w-72 py-1 px-2 ' value={details[item]} onChange={(e) => handleChange(e, item)} placeholder={`enter ${item}`} id={item} />
                        </div>
                    )
                })}
                <button type='submit' className='px-5 py-1 bg-yellow-400 hover:bg-yellow-300 text-white font-semibold text-xl rounded-md'>submit</button>
            </form>

        </div>
    )
}

export default Payment
