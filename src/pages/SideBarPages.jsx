import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import cancel_icon_img from '../assets/cancel_icon_img.png'
import deliever_icon_img from '../assets/deliever_icon_img.png'
import order_icon_img from '../assets/order_icon_img.png'
import revenue_icon_img from '../assets/revenue_icon_img.png'
import { Badge } from '@mui/material';
import { PiBellSimpleLight } from 'react-icons/pi';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { ImGift } from 'react-icons/im';
import { CiSettings } from 'react-icons/ci';






let months_array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = new Date;
date.getDate();
date.getMonth();
date.getFullYear();

export const SideBarPages = (props) => {
    let cardArr = [
        {
            img: order_icon_img,
            head: props.order,
            text: "Total Orders",
        },
    
        {
            img: deliever_icon_img,
            head: props.deliver,
            text: "Total Delivered",
        },
        {
            img: cancel_icon_img,
            head: props.cancel,
            text: "Total Canceled",
        },
        {
            img: revenue_icon_img,
            head: props.revenue,
            text: "Total Revenue",
        },
    
    ]
    return (<>
        <div className="flex sm:hidden justify-end items-center space-x-3">

            <div className='bg-blue-200 px-3 py-3 rounded-full'>
                <Badge badgeContent={8} color="primary">
                    <PiBellSimpleLight color="rgb(29 78 216)" size={25} />
                </Badge>
            </div>
            <div className='bg-blue-200 px-3 py-3 rounded-full'>
                <Badge badgeContent={4} color="primary">
                    <IoChatboxEllipsesOutline color="rgb(29 78 216)" size={25} />
                </Badge>
            </div>
            <div className='bg-purple-300 px-3 py-3 rounded-full'>
                <Badge badgeContent={6} color="secondary">
                    <ImGift color="purple" size={25} />
                </Badge>
            </div>
            <div className='bg-red-200 px-3 py-3 rounded-full'>
                <Badge badgeContent={1} color="error">
                    <CiSettings color='red' size={25} />
                </Badge>
            </div>

        </div>


        <div className='my-5'>

            <div className="sm:flex block justify-between my-3 items-center">

                <div>
                    <h1 className='text-3xl my-1'>{props.pageText}</h1>
                    <p className='text-xs'>Hi, Samantha. Welcome back to {props.pageText}!</p>
                </div>

                <div className=" my-3 inline-flex bg-white rounded-lg p-2 cursor-pointer items-center space-x-3">
                    <div className='bg-blue-100 px-2 py-3 rounded-full'>
                        <MdOutlineDateRange color="rgb(29 78 216)" size={25} />
                    </div>
                    <div>
                        <h1 className='text-xs my-1 font-bold'>Filter Periode</h1>
                        <p className='text-[11px]'>5 January 2005 - {`${date.getDate()} ${months_array[date.getMonth()]} ${date.getFullYear()}`}</p>
                    </div>
                    <FaAngleDown size={25} />
                </div>

            </div>




            <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-4 my-10">
                {cardArr.map((obj, i) => {
                    const { head, img, text } = obj;
                    return <div key={i} className="flex justify-center m-2 items-center rounded-xl lg:min-h-32  lg:max-h-32  bg-white p-2">
                        <img src={img} alt="" />
                        <div>
                            <h1 className='lg:text-4xl text-2xl sm:text-3xl'>{head}</h1>
                            <p className='text-xs'>{text}</p>
                        </div>
                    </div>
                })}

            </div>






        </div>
    </>
    )
}
