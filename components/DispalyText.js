import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import Image from 'next/image';
import { IoIosArrowDroprightCircle } from "react-icons/io";



export default function DispalyText(){
    return (
        <div>
            <Card className="py-4 w-screen h-[250px] bg-purple-200 rounded-tl-none rounded-bl-none ">
                <CardBody>
                    <div className="flex flex-row">
                        <div className="w-1/2">
                            <h1 className=" uppercase font-bold text-xl ">Zotok is my Single Integrated chat Platform with...</h1>
                            <div>
                                <div className="flex flex-row items-center">
                                    <IoIosArrowDroprightCircle />
                                    <p className="ml-2">Streaming Orders</p>
                                </div>
                                <div className="flex flex-row items-center">
                                    <IoIosArrowDroprightCircle />
                                    <p className="ml-2">Timely Payments</p>
                                </div>
                                <div className="flex flex-row items-center">
                                    <IoIosArrowDroprightCircle />
                                    <p className="ml-2">Dynamic Marketing</p>
                                </div>
                            </div>
                            <p>Leading to <span className="font-bold">HIgher Turnover</span> with Better <span className="font-bold">Peace of Mind</span></p>
                        </div>
                        <div className="w-1/2">
                        <Image src="https://www.zonoapp.com/img/credit-zono-home.png" alt="zonoImage"  width={400} height={250} />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}