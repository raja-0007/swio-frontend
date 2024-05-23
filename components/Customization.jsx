import React from 'react'
import '../src/app/globals.css'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { MdFiberManualRecord } from "react-icons/md";




function Customization() {
    return (
        <div className='flex flex-col items-center gap-10 px-40'>
            <span className='uppercase text-violet-500 text-xs font-bold'>Customization</span>
            <span className='font-bold text-5xl '>Countless ways to customize.</span>
            <span className='text-center  text-2xl text-gray-700 px-40'>
                Customization is at the core of the Sleeve experience — choose from any combination of design choices,
                behaviors and settings to make Sleeve at home on your desktop.
            </span>
            <div>
                <img src="/customize.png" className='h-[130px]' alt="" />
            </div>
            <div className='w-full min-h-screen flex flex-col justify-end relative overflow-hidden '>
                
                <div className="absolute top-0 left-0 z-0 w-full h-full flex justify-between flex-col bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/bgImg2.png')" }}></div>
                
                <div className='relative  flex flex-col items-center justify-center w-full min-h-screen  '>
                    
                    <div className='flex justify-between z-0 gap-10 w-full'>
                        <div className='flex flex-col gap-10 w-[50%] pe-36 pt-64 bg-white text-xl ps-10'>
                            <img src="/IconArrayArtwork.png" className='w-[100px]' alt="" />
                            <span className='text-3xl font-bold'>Artwork</span>
                            <span>Scale artwork all the way up or all the way down. Round the corners or leave them square.</span>
                            <span>Choose shadow and lighting effects to bring your album artwork to life.</span>
                            <span>Or hide it completely.</span>
                        </div>
                        <div className='flex flex-col gap-8 pe-36 pt-64 z-0'>
                            <div className="w-[max-content] p-2 bg-white rounded-xl flex flex-col gap-3">
                                <div className='flex gap-2'>
                                    <div className='border-2 rounded-md bg-gray-200 flex justify-around w-[70px] items-center h-[70px]'>
                                        <img src="/IconArrayArtwork.png" className='w-[20px] h-[20px]' alt="" />
                                    </div>
                                    <div className='border-2 rounded-md bg-gray-200 flex justify-around w-[70px] items-center h-[70px]'>
                                        <img src="/IconArrayArtwork.png" className='w-[30px] h-[30px]' alt="" />
                                    </div>
                                    <div className='border-2 rounded-md bg-gray-200 flex justify-around w-[70px] items-center h-[70px]'>
                                        <img src="/IconArrayArtwork.png" className='w-[40px] h-[40px]' alt="" />
                                    </div>
                                    <div className='border-2 rounded-md bg-gray-200 flex justify-around w-[70px] items-center h-[70px]'>
                                        <img src="/IconArrayArtwork.png" className='w-[45px] h-[45px]' alt="" />
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className='w-full h-1 bg-gray-400 flex items-center gap-0'>
                                        <div className='w-[25%] h-full bg-sky-400'></div>
                                        <MdFiberManualRecord className='text-gray-200 p-0 m-0  text-3xl' />
                                    </div>
                                    <div className='p-1 px-2 rounded-full bg-gray-300 text-xs'>120</div>
                                    <div className='flex flex-col items-center gap-[1px]'>
                                        <span className='pt-[1px] text-xs border rounded-t-full'><FaAngleDown /></span>
                                        <span className='pb-[1px] text-xs border rounded-b-full'><FaAngleUp /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[320px] bg-white rounded-xl">
                                <img src="/artwork2.png" className='rounded-md' alt="" />

                            </div>
                            <div className="w-[320px]  bg-white rounded-xl">
                                <img src="/artwork3.png" alt="" className='rounded-md' />
                            </div>
                        </div>

                    </div>


                    <div className='flex justify-between gap-10 w-full'>
                        <div className='flex flex-col gap-10 w-[50%] pe-36 pt-64 bg-white text-xl ps-10'>
                            <img src="/Typography.png" className='w-[100px]' alt="" />
                            <span className='text-3xl font-bold'>Typography</span>
                            <span>Pick the track info you want to display, and then exactly how to display it.</span>
                            <span>Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.</span>

                        </div>
                        <div className='flex flex-col gap-8 pe-36 pt-64'>
                            <div className="w-[320px]  bg-white rounded-xl">
                                <img src="/typography1.png" alt="" className='rounded-md' />

                            </div>
                            <div className="w-[320px]  bg-white rounded-xl">
                                <img src="/typography2.png" alt="" className='rounded-md' />
                            </div>
                        </div>

                    </div>


                    <div className='flex justify-between gap-10 w-full'>
                        <div className='flex flex-col gap-10 w-[50%] pe-36 pt-64 bg-white text-xl ps-10'>
                            <img src="/Interface.png" className='w-[150px]' alt="" />
                            <span className='text-3xl font-bold'>Interface</span>
                            <span>Customize the layout, alignment and position to fit your setup.</span>
                            <span>Show and hide playback controls. Add a backdrop layer and customize it.</span>

                        </div>
                        <div className='flex flex-col gap-5 pe-36 pt-64'>
                            <div className="w-[320px]  bg-white rounded-xl">
                                <img src="/interface1.png" alt="" className='rounded-md' />
                            </div>
                        </div>

                    </div>


                    <div className='flex justify-between gap-10 w-full'>
                        <div className='flex flex-col gap-10 w-[50%] pe-36 pt-64 pb-36 bg-white text-xl ps-10'>
                            <img src="/IconSettings.png" className='w-[100px]' alt="" />
                            <span className='text-3xl font-bold'>Settings</span>
                            <span>Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it.</span>
                            <span>Show it in the Dock, choose from custom icons, or keep it on the Desktop only.</span>
                            <span>Set your custom keyboard shortcuts and integrate with the apps you use.</span>

                        </div>
                        <div className='flex flex-col gap-8 pe-36 pt-64'>
                            <div className="w-[320px]  bg-white rounded-xl">
                                <img src="/typography1.png" alt="" className='rounded-md' />

                            </div>
                            <div className="w-[320px]  bg-white rounded-xl">
                                <img src="/typography2.png" alt="" className='rounded-md' />
                            </div>
                        </div>

                    </div>





                </div>
                {/* <div className='w-[50%] h-full relative'>
                    <div className='w-full h-[10vh] absolute top-0 bg-white z-10'></div>
                    <div className='w-full relative h-[80vh] rounded-xl overflow-hidden '>
                    <div class="bg-inherit  rounded-xl"></div>
                    </div>
                    <div className='w-full h-[10vh] absolute bottom-0 bg-white z-10'></div>
                   

                </div> */}

            </div>
        </div>
    )
}

export default Customization
