"use client";

import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import Image from 'next/image';


export default function Home() {
    const router = useRouter();

    return (
        <div className="container mx-auto px-4 sm:max-w-lg md:max-w-xl lg:max-w-1xl xl:max-w-2xl">
            <div className="mt-8 mx-4 -space-y-px">
                <h2 className="mt-4 text-center text-sm text-neutral-200">
                    Hi! I'm <span className="text-teal-500">Alex Evans</span> and <br />
                    I'm a <span className="text-teal-500">Software Engineer</span> focused on <br />
                    building <span className="text-teal-500">Healthcare Solutions</span>.
                </h2>
            </div>
            <div className="flex">
                <div className="relative h-32 w-32">
                    <Image src="healthcare.svg" alt="Healthcare" layout="fill" />
                </div>
                <div className="relative h-32 w-32">
                    <Image src="code_image.svg" alt="Code" layout="fill" />
                </div>
            </div>
            <div className="flex justify-right">
                
            </div>
        </div>
    )
}