import React from 'react'

function Themes() {
    return (
        <div className='flex flex-col items-center gap-8 '>
            <span className="text-sky-500 uppercase text-sm">new  in  <span className="px-2 py-1 bg-sky-500 ms-1 text-xs rounded-3xl text-white">2.0</span></span>

            <h5 className='font-bold text-5xl'>Themes. Unlimited themes.</h5>
            <span className='px-56 text-center  text-2xl text-gray-700'>
                Themes in Sleeve make creating and switching between customizations easy.
                Share your own creations with friends and install as many themes as you like with just a double-click.
            </span>
            <div className='px-40'>
                <img src="/themes.png" alt="" />
            </div>
            <div className='px-40 flex gap-10 justify-between '>
                <div className='p-5 rounded-xl relative flex gap-5 justify-between w-[48%] bg-blue-50 px-10 border  pt-10'>
                    <div className='flex flex-col gap-5 w-[50%] pb-6 text-lg text-gray-600'>
                        <span  className='font-bold text-xl'>Change it up</span>
                        <span>Switch between themes with just a click.</span>
                        <span>Modify the built-in themes or create your own using Sleeve’s extensive preferences.</span>
                    </div>
                    <img src="/ThemeUI.png" className='w-[250px]  self-center mb-5 rotate-2 h-[130px]' alt="" />
                    <img src="/ThemeUI.png" className='w-[250px] absolute bottom-0 right-0 self-end mb-5 rotate-3 h-[120px]' alt="" />
                </div>
                <div className='p-5 rounded-xl flex gap-5 justify-between w-[48%] bg-sky-50 px-10 border pt-10'>


                    <div className='flex flex-col gap-5 w-[50%] text-lg text-gray-600'>
                        <span className='font-bold text-xl'>Shareable</span>
                        <span>Export your themes and share them with friends using the handy new Sleeve Theme file format.
                        </span>
                        <span>Install themes from anywhere with a double-click or a drag and drop.
                        </span>
                    </div>
                    <img src="/ThemeExport.png" className='w-[200px] h-[200px] self-center' alt="" /></div>
            </div>
        </div>
    )
}

export default Themes
