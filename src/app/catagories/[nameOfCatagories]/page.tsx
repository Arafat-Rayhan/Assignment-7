import { getDataByGropOfCatagoriName } from '@/component/getData/allData';
import { foodData } from '@/type/type';
import Card from '@/component/layout/card'
import NameBord from '@/component/ui/nameBord'

export const instant =false;
const CatagoriesList= async ({params}:{params: Promise<{nameOfCatagories:string}>}) => {
     const {nameOfCatagories}= await params;
    // with bazar information
    const data:foodData[]=await getDataByGropOfCatagoriName({name:nameOfCatagories})
    const oneData =data[0];
    return ( 
        <div className='w-[1160px] py-[24px] px-[16px] mx-auto'>
            <NameBord N={oneData}/>
            <div>

                {
                data.map((i)=>(<Card key={i.id} C={i}/>))
                }
            </div>
        </div>
    );
};

export default CatagoriesList;