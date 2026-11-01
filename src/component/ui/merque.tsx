'use cache'
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


import { getDataByAllBazarProduct } from "@/component/getData/allData";
import { foodData } from "@/type/type";

 
export default async function Merque() {
  const allBazarData= await getDataByAllBazarProduct()
  console.log(allBazarData);
  return (
    <div className="border-y border-b-amber-100 border-solid h-9 w-full my-2">
      <MarqueeText direction='right' duration={10}>
      {
        allBazarData.map((i:foodData)=>(
         <div key={i.id} className="flex mx-5 items-center ">
           <span className="mx-2">{i.image}</span>
           <span>{i.nameBn}</span>
            <span>{i.today}tk/kg</span>  
            <span className="mx-1">{`${i.change.dir==="up"?`🔼${i.change.pct}%` :`🔻${i.change.pct}%`}`}</span>
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