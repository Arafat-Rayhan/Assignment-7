'use cache'

import { getDataByAllBazarProduct } from "@/component/getData/allData";
import { foodData } from "@/type/type";

 
export default async function Merque() {
  const allBazarData= await getDataByAllBazarProduct()
  return (
    <div className="">
      {
        allBazarData.map((item:foodData)=>(
          <h2 key={item.id}>{`${item.categoryIcon}${item.nameBn}${item.today}/kg${item.change.dir==="up"?`🔼${item.change.pct}%`:`🔻${item.change.pct}%`}`}</h2>
        ))
      }
     </div>
  );
};