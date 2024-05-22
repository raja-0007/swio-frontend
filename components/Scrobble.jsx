import React from 'react'

function Scrobble() {
    return (
        <div className='flex flex-col gap-10 items-center px-40 pb-20 '>
            <span className='uppercase text-violet-500 text-xs font-bold'>integrations</span>
            <span className='font-bold text-5xl capitalize'>like, scrobble.</span>
            <div className='flex w-full justify-between '>
                <div className="py-10  flex items-center w-[48%] flex-col border bg-pink-50 relative rounded-2xl">
                    <div className='relative top-[-30px]  w-[80%]'>
                        <img src="/IntegrationLastfm.png"  alt="" />
                    </div>
                    <div className=' w-[50%] text-center mx-auto text-2xl text-pink-800'>
                        Sleeve <span className='text-red-800 font-bold'>integrates with Last.fm</span> so you never miss a track. Simply sign in and start scrobbling.
                    </div>
                    <div className='px-20 w-full mt-10 text-center text-red-300 text-sm'>
                        Last.fm account required
                    </div>

                </div>
                <div className="py-10  flex items-center w-[48%] flex-col border bg-green-50 relative rounded-2xl">
                    <div className='relative top-[-30px]  w-[80%]'>
                        <img src="/IntegrationSpotify.png"  alt="" />
                    </div>
                    <div className=' w-[60%] text-center mx-auto text-2xl text-green-600'>
                    With Sleeve 2 you can now <span className='text-green-800 font-bold'>like tracks in Spotify</span>, without ever having to switch away from Sleeve.


                    </div>
                    <div className='px-20 w-full mt-10 text-center text-green-300 text-sm'>
                    A free Spotify Developer account is required
                    </div>
                </div>
            </div>
            <div className='w-full border bg-slate-50 flex justify-between gap-20 rounded-xl items-center p-8 px-32'>
                <div className='flex gap-4'>
                    <img src="/AppMusic.png" alt="" />
                    <img src="/AppSpotify.png" alt="" />
                    <img src="/AppDoppler.png" alt="" />

                </div>
                <div className='text-2xl w-[70%]'>Sleeve integrates directly with <span className='font-bold'>Apple Music, Spotify</span> and <span className='font-bold'>Doppler.</span> Control playback, like tracks and adjust volume seamlessly.</div>
            </div>
            <div className='flex w-full justify-between'>
                <div className="py-5 px-20 flex items-center w-[48%] gap-10 border bg-slate-50 relative rounded-2xl">
                    <div className=' relative'>
                        <img src="/AppSpotify.png" className='w-[150px]' alt="" />
                        <img src="/IntegrationDoc.png" className='absolute bottom-[-10px] right-[-10px]' alt="" />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span className='text-xl text-gray-800'>View the quick guide to connecting Sleeve to your Spotify account.</span>
                        <button type='button' className='border rounded-full px-6 w-[max-content] py-2 capitalize hover:bg-gray-100 font-semibold'>view guide</button>
                    </div>
                </div>
                <div className="py-5 px-20 flex items-center w-[48%] gap-10 border bg-slate-50 relative rounded-2xl">
                    <div className=' relative flex gap-5 items-center'>
                        <img src="/AppSleeve@2x.png" className='w-[80px]' alt="" />
                        <span className='font-bold text-xl text-gray-400'>+</span>
                        <div className='flex items-center justify-center border-2 rounded-lg border-dashed w-[150px] h-[80px] font-bold text-gray-400'>?</div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span className='text-xl text-gray-800'>Want to use Sleeve with your favorite music app?</span>
                        <button type='button' className='border rounded-full px-6 w-[max-content] py-2 capitalize hover:bg-gray-100 font-semibold'>request integration</button>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Scrobble
