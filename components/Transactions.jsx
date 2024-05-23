import { useHomeContext } from '@/context/HomeContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import TransactionsPreloader from './TransactionsPreloader';


const Transactions = () => {
    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(true)
    const { setActive } = useHomeContext()
    useEffect(() => {
        const getTransactions = async () => {
            await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTransactions`)
                .then((res) => { console.log(res.data); setTransactions(res.data); setLoading(false) })
        }
        getTransactions()
    }, [])

    console.log(transactions)



    return (
        <div className='w-full flex flex-col text-center relative'>
            <span onClick={() => setActive('home')} className='absolute top-10 left-32 flex items-center font-bold gap-1'><MdOutlineKeyboardBackspace />back</span>
            <p className='text-3xl font-bold mb-10 '>Transactions</p>
            {loading ? <div className='mx-auto text-center flex flex-col  items-center mt-10'>
                <TransactionsPreloader/>
                
            </div>
                : <div>
                    {transactions.map((item, i) => {
                        return (
                            <div key={i} className={`flex flex-col w-[400px] p-10 py-5 relative  mx-auto mt-2 items-start text-start border-b-2 border rounded-xl ${item?.status == 'failed' ? 'bg-red-50' : 'bg-green-50'}`}>
                                <span className='flex items-center w-full justify-between'>
                                    <span>{i + 1}.</span>
                                    <span className='flex items-center'>{item?.status == 'success' ? <IoMdCheckmarkCircle className='text-green-400' /> : <FaCircleXmark className='text-red-400' />}{item?.status}</span>
                                </span>
                                <span className='capitalize'>
                                    <span className='font-medium me-2 capitalize'>name:</span>{item.name}
                                </span>
                                <span><span className='font-medium me-2 capitalize'>amount:</span>{item.amount}/-</span>
                            </div>
                        )

                    })}
                </div>

            }



        </div>
    )
}

export default Transactions
