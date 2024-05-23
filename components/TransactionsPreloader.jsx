import React from 'react'

function TransactionsPreloader() {
    return (
        <>
            <div className={`flex flex-col w-[400px] p-10 py-5 relative  mx-auto mt-2 items-start text-start border-b-2 border rounded-xl bg-gray-300 animate-pulse`}>
                <span className='flex items-center w-full justify-between'>
                    <span className='animate-pulse'>1.</span>
                    <span className='py-2 rounded-md  px-8 bg-gray-500 w-[max-content] animate-pulse'></span>
                </span>
                <span className='py-2 mb-3 rounded-md  px-14 bg-gray-500 w-[max-content] animate-pulse'>
                </span>
                <span className='py-2 mb-3 rounded-md  px-14 bg-gray-500 w-[max-content] animate-pulse'>
                </span>
            </div>
            <div className={`flex flex-col w-[400px] p-10 py-5 relative  mx-auto mt-2 items-start text-start border-b-2 border rounded-xl bg-gray-300 animate-pulse`}>
                <span className='flex items-center w-full justify-between'>
                    <span className='animate-pulse'>2.</span>
                    <span className='py-2 rounded-md  px-8 bg-gray-500 w-[max-content] animate-pulse'></span>
                </span>
                <span className='py-2 mb-3 rounded-md  px-14 bg-gray-500 w-[max-content] animate-pulse'>
                </span>
                <span className='py-2 mb-3 rounded-md  px-14 bg-gray-500 w-[max-content] animate-pulse'>
                </span>
            </div>
            <div className={`flex flex-col w-[400px] p-10 py-5 relative  mx-auto mt-2 items-start text-start border-b-2 border rounded-xl bg-gray-300 animate-pulse`}>
                <span className='flex items-center w-full justify-between'>
                    <span className='animate-pulse'>3.</span>
                    <span className='py-2 rounded-md  px-8 bg-gray-500 w-[max-content] animate-pulse'></span>
                </span>
                <span className='py-2 mb-3 rounded-md  px-14 bg-gray-500 w-[max-content] animate-pulse'>
                </span>
                <span className='py-2 mb-3 rounded-md  px-14 bg-gray-500 w-[max-content] animate-pulse'>
                </span>
            </div>
        </>
    )
}

export default TransactionsPreloader
