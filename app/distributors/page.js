
"use client"

import { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import TabItem from "@/components/Tabs";
import { StaticTab } from "@/utils/StaticTab";
import { AiOutlineCluster } from "react-icons/ai";
import DispalyText from "@/components/DispalyText";
import DisplayCotent from "@/components/DisplayCotent";

export default function Distributor() {
  const [tabItem,settabItem] = useState(StaticTab[0])
  const clickEvent=(tabDetails)=>{
    settabItem(tabDetails)
  }
  console.log(tabItem)
 
  return (
    <div className="flex flex-row">
       <div className="w-[200px] h-[500px]  flex flex-col  shadow-lg bg-white rounded-lg">
          <div className="flex flex-row items-center ml-2 ">
            <AiOutlineCluster size="30px" className="text-gray-200 mr-2"/>
            <p className="font-bold">I am a Distributor</p>
            </div>
          <div>
            {StaticTab.map((eachTab)=>(
              <TabItem tabDetails={eachTab} key={eachTab.fontText} isActive={eachTab.fontText===tabItem.fontText} clickEvent={clickEvent}/>
            ))}
          </div>
       </div>
       <div className="flex flex-col overflow-y-auto"> 
        <DispalyText/>
        <DisplayCotent/>
       </div>
    </div>
  );
}
