import { getDataByOneFullDetail } from '@/component/getData/allData';
import {foodData} from '@/type/type'
import NameBord from '@/component/detailPageBords/nameBord';
import PriceBord from '@/component/detailPageBords/pliceBord'
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
          <NameBord P={cardDataByDetail}/>
          <PriceBord P={cardDataByDetail} />
          <h2>{cardDataByDetail.nameBn}</h2>
             
        </div>
    );
};

export default DetailPage ;