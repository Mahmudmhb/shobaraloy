import { TBlogs } from '@/app/(ComonLayout)/Types/Types';
import { Avatar } from '@heroui/avatar';
import { Button } from '@heroui/button';
import { Card, CardFooter, CardHeader } from '@heroui/card';
import Image from 'next/image';
import React from 'react';

const Blog = ({blog}: {blog:TBlogs}) => (
    <div>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                <h4 className=" font-medium text-2xl text-white">{blog.heading}</h4>
            </CardHeader>
            <Image

                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="https://heroui.com/images/hero-card.jpeg" fill={true} />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div className='flex gap-2 items-center'>
                    
                    <div>
                        <div className="flex gap-5">
                            <Avatar
                                isBordered
                                radius="full"
                                size="md"
                                src="https://heroui.com/avatars/avatar-1.png" />
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="text-small font-semibold leading-none text-default-600">{blog.name}</h4>
                                <h5 className="text-small tracking-tight text-default-400">{blog.date}</h5>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="group inline-block">
                                    <button className="bg-[#088dcd] px-5 py-2 text-sm rounded-3xl 
                                        group-hover:bg-[#13153e] group-hover:translate-y-1 
                                        transition duration-400">
                                        More details
                                    </button>
                                </div>
            </CardFooter>
        </Card>
    </div>
);

export default Blog;