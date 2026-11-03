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
        <div className=' bg-[#E1E8E1] grid grid-cols-1 items-center w-full gap-[24px] sm:max-w-7xl mx-auto p-[22px]'>
          <div className=' w-[1120px] mx-auto'>
            <h2 className='mt-[24px]'>হোম 》 চাল 》 বাটাম সাইজ চাল </h2>
          </div>
          <NameBord P={cardDataByDetail}/>
          <PriceBord P={cardDataByDetail} />
             
        </div>
    );
};

export default DetailPage ;