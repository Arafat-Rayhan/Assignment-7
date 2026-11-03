'use cache'
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


import { getDataByAllBazarProduct } from "@/component/getData/allData";
import { foodData } from "@/type/type";

 
export default async function Merque() {
  const allBazarData= await getDataByAllBazarProduct()
  return (
    <div className="border-y bg-[#FAFCFA] w-[1440px] border-solid h-9 w-full ">
      <MarqueeText direction='right' duration={10}>
      {
        allBazarData.map((i:foodData)=>(
         <div key={i.id} className="flex mx-5 items-center ">
           <span className="mx-2">{i.image}</span>
           <span>{i.nameBn}</span>
            <span className="mx-2">{i.today}tk/kg</span>  
            <span className="">{`${i.change.dir==="up"?`🔼${i.change.pct}%` :`🔻${i.change.pct}%`}`}</span>
         </div>
        ))
      }
      </MarqueeText>
     </div>
  );
};

//  <span key={item.id} >{`${item.categoryIcon}${item.nameBn}${item.today}/kg$`
//           {item.change.dir==="up"?🔼{item.change.pct}%` 
//           :🔻${item.change.pct}%}`}</span>