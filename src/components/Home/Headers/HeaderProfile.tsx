import { Avatar } from '@heroui/avatar';
import React from 'react';
import { LiaBroadcastTowerSolid } from 'react-icons/lia';
import {Tooltip} from "@heroui/tooltip";
import { CiHome } from 'react-icons/ci';
import { Badge } from '@heroui/badge';
import { FaRegMessage } from 'react-icons/fa6';
import { IoIosAdd, IoIosNotificationsOutline } from 'react-icons/io';
import { TbDeviceGamepad3Filled } from 'react-icons/tb';

const HeaderProfile = () => {
    return (
        <div className='flex justify-between items-center gap-4'>
            <div className=' flex gap-3 items-center p-1 px-4 border-1 border-[#26ACE2] bg-[#deebf3] text-black rounded-xl'>
                <Avatar isDisabled name="Jane" />
                <h1>Name</h1>
            </div>
            <div className='border-1 rounded-[50%] flex items-center border-[#26ACE2] bg-[#deebf3] w-10 h-10 justify-center'>
                <Tooltip content="Go Live" className='text-red-700'>

                    <LiaBroadcastTowerSolid className="text-2xl text-[#26ACE2]" />
                </Tooltip>

            </div>
            <div className='border-1 rounded-[50%] flex items-center border-[#26ACE2] bg-[#deebf3] w-10 h-10 justify-center'>
                <Tooltip content="Home" className='text-red-700'>

                    <CiHome
                        className="text-2xl text-[#26ACE2]" />
                </Tooltip>

            </div>



            <Badge color="danger" content="5" shape="circle">
                {/* <Avatar isBordered radius="full" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" /> */}
                <div className='border-1 rounded-[50%] flex items-center border-[#26ACE2] bg-[#deebf3] w-10 h-10 justify-center'>
                    <Tooltip content="Message" className='text-red-700'>

                        <FaRegMessage
                            className="text-2xl text-[#26ACE2]" />
                    </Tooltip>

                </div>
            </Badge>
            <Badge color="danger" content="5" shape="circle">
                {/* <Avatar isBordered radius="full" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" /> */}
                <div className='border-1 rounded-[50%] flex items-center border-[#26ACE2] bg-[#deebf3] w-10 h-10 justify-center'>
                    <Tooltip content="Notifications" className='text-red-700'>

                        <IoIosNotificationsOutline
                            className="text-2xl text-[#26ACE2]" />
                    </Tooltip>

                </div>
            </Badge>
            <div className='border-1 rounded-[50%] flex items-center border-[#26ACE2] bg-[#deebf3] w-10 h-10 justify-center'>
                <Tooltip content="Add New" className='text-red-700'>

                    <IoIosAdd
                        className="text-2xl text-[#26ACE2]" />
                </Tooltip>

            </div>

            <div className="dropdown dropdown-hover dropdown-end dropdown-bottom">
                <div tabIndex={0} className='border-1 rounded-[50%] flex items-center border-[#26ACE2] bg-[#deebf3] w-10 h-10 justify-center'>


                    <TbDeviceGamepad3Filled
                        className="text-2xl text-[#26ACE2]" />


                </div>  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>



        </div>
    );
};

export default HeaderProfile;