import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/assets/logo.png'
import {AiOutlineSetting, AiOutlinePlus,AiFillAmazonCircle,
AiFillAndroid, AiFillApple, AiFillCodeSandboxCircle,AiOutlineAppstore, AiOutlineContacts} from 'react-icons/ai'
import {TfiVideoClapper} from 'react-icons/tfi'
import {BsBookmark} from 'react-icons/bs'

export const Profile = () => {
  return (
    <div className='h-full w-screen'>
        <div className='max-w-4xl h-full flex mx-5 p-10 xl:mx-auto'>
            <div className='grid grid-cols-2 gap-4'>
                <div className="avatar">
                    <div className=' rounded-full w-36 h-36 border border-gray-400 p-6'>
                        <Image src={logo}/>
                    </div>
                </div>
                <div className="cols-span-2">
                    <span className="text-gray-700 text-2xl mr-4">
                        Corridor_Aja
                    </span>
                    <div className="cursor-pointer inline text-sm text-gray-700 p-1 px-2 mr-4 rounded border border-gray-200 font-semibold">
                        Edit Profile
                    </div>
                        <AiOutlineSetting className='cursor-default h-6 inline flex-1'/>
                    <div className='flex mt-4'>
                        <div><span className='font-semibold'>200</span> post</div>
                        <div className='ml-4'><span className='font-semibold'>200</span> followers</div>
                        <div className='ml-4'><span className='font-semibold'>200</span> following</div>
                    </div>
                    <div className="pt-3">
                        <div className="text-gray-700 text-lg text-semibold mr-2">
                            <strong>Gilang Prima E (ZECHTXD)</strong>
                        </div>
                    </div>
                    <div className="pt-3">
                        <p className="text-base mr-2 text-gray-700">
                            UDB Informatics Engineer
                        </p>
                        <p className="text-base mr-2 text-gray-700">
                            I excited to learn new knowledge
                        </p>
                        <p className=' text-base mr-2 text-blue-700'>
                            CORRIDOR_AJA.VERCEL.APP
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-around max-w-[330] m-auto mx-20 py-14'>
            <div className='rounded-full justify-center items-center shadow-lg shadow-gray-400 p-6 hover:scale-110'>
                <AiFillApple/>
            </div>
            <div className='rounded-full justify-center items-center shadow-lg shadow-gray-400 p-6 hover:scale-110'>
                <AiFillAndroid/>
            </div>
            <div className='rounded-full justify-center items-center shadow-lg shadow-gray-400 p-6 hover:scale-110'>
                <AiFillAmazonCircle/>
            </div>
            <div className='rounded-full justify-center items-center shadow-lg shadow-gray-400 p-6 hover:scale-110'>
                <AiFillCodeSandboxCircle/>
            </div>
            <div className='rounded-full justify-center items-center shadow-lg shadow-gray-400 p-6 hover:scale-110'>
                <Link href=''> <AiOutlinePlus/> </Link>
            </div>
        </div>

        <hr className='border-gray-400 mt-4 max-w-6xl mx-24'/>

        <div className='flex items-center justify-around max-w-[200] m-auto mx-32 py-4'>
            <div className='flex justify-center items-center p-2'>
                <AiOutlineAppstore size={20}/>
                <button className="border-gray-400"> POST</button>
            </div>
            <div className='flex justify-center items-center p-2'>
                <TfiVideoClapper/> 
                <button className="flex border-gray-400">  REELS</button>
            </div>
            <div className='flex first-letter:justify-center items-center p-2'>
                <BsBookmark/>
                <button className="border-gray-400"> SAVED</button>
            </div>
            <div className='flex justify-center items-center p-2'>
                <AiOutlineContacts size={20}/>
                <button className="border-gray-400"> TAGGED</button>
            </div>
        </div>

        <div className='grid grid-cols-4 gap-4 items-center justify-around max-w-[200] m-auto py-4'>
            <div className='py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className=' py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className='py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
            <div className=' py-16 flex justify-center items-center'>
                <Image src={logo}/>
            </div>
        </div>
    </div>
  )
}
