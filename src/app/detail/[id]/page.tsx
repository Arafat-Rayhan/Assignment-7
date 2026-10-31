import { getDataByOneFullDetail } from '@/component/getData/allData';
import {foodData} from '@/type/type'
export const instant = false


const DetailPage= async ({
  params,
}: {
  params: Promise<{id:string}>
}) => {
     const {id}= await params;
    //  catagori with full information 
    // and it return an object not array
    const cardDataByDetail:foodData=await getDataByOneFullDetail({id})
    return (
        <div>
          <h2>{cardDataByDetail.nameBn}</h2>
             
        </div>
    );
};

export default DetailPage ;