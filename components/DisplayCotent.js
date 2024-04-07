import React from 'react'
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

export default function DisplayCotent() {
  return (
    <Card className="py-4 w-screen h-full bg-gray-100 rounded-tl-none mx-1 my-1">
        <CardBody>
            <div className='mt-10 flex flex-row'>
                <div>
                    <h1 className='text-xl font-bold'>What can Zotalk do ?</h1>
                    <p>Zotok revolutionizes Distributor connections.<br/> merging WhatApp's ease with a rewarding 
                       chat<br/> interfact.Streamlined orders. prompt payments,<br/>vibrant marketing, and a linked network spur <br/> business growth,promoting collaboration
                    </p>
                    <Button color="primary">
                        Button
                    </Button>

                    <Card className='w-[450px] shadow-lg mt-1'>
                        <CardBody>
                            <div className='flex flex-row'>
                                <div className='flex flex-col'>
                                    <h1 className='font-bold text-xl'>Increase Turnover</h1>
                                    <p>Lorem Ipsum</p>
                                </div>

                            </div>
                        </CardBody>
                    </Card>
                    <Card className='w-[450px] shadow-lg  mt-1'>
                        <CardBody>
                            <div className='flex flex-row'>
                                <div className='flex flex-col'>
                                    <h1 className='font-bold text-xl'>Increase Profitability</h1>
                                    <p>Lorem Ipsum</p>
                                </div>

                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <p>Illustration Here</p>
                </div>
            </div>
        </CardBody>
    </Card>
  )
}
