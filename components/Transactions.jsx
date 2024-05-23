import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Transactions = () => {
    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getTransactions = async () => {
            await axios.get('http://localhost:7777/api/getTransactions')
                .then((res) => { console.log(res.data); setTransactions(res.data); setLoading(false)})
        }
        getTransactions()
    }, [])

    console.log(transactions)



    return (
        <div className='w-full flex flex-col text-center'>
            <p className='text-xl font-bold'>Transactions</p>
            {loading ? <div className='mx-auto text-center flex flex-col gap-5 items-center mt-10'>
                <div >
                    <div className='py-2 mb-3 rounded-md  px-14 bg-gray-400 w-[max-content] animate-pulse'>
                        
                    </div>
                    <div className='py-2 mb-3 rounded-md  px-10 bg-gray-400 w-[max-content] animate-pulse'></div>
                </div>
                <div >
                    <div className='py-2 mb-3 rounded-md  px-14 bg-gray-400 w-[max-content] animate-pulse'>
                        
                    </div>
                    <div className='py-2 mb-3 rounded-md  px-10 bg-gray-400 w-[max-content] animate-pulse'></div>
                </div>
            </div>
                : <div>
                    {transactions.map((item, i) => {
                        return (
                            <div key={i} className='flex flex-col w-[max-content] ps-10 relative pe-20 mx-auto mt-10 items-start text-start border-b-2'>
                                <span className='absolute top-0 left-0'>{i+1}.</span>
                                <span>
                                    <span className='font-medium me-2'>name:</span>{item.name}
                                </span>
                                <span><span className='font-medium me-2'>amount:</span>{item.amount}</span>
                            </div>
                        )

                    })}
                </div>

            }



        </div>
    )
}

export default Transactions
