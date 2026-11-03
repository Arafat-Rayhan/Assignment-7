
import { getDataByGropOfCatagoriName } from '@/component/getData/allData';
import { foodData } from '@/type/type';
import NameBord from '@/component/ui/nameBord'
import SortingProgramm from '@/component/sorting/sortingProgamm'

export const instant =false;
const CatagoriesList= async ({params}:{params: Promise<{nameOfCatagories:string}>}) => {
     const {nameOfCatagories}= await params;
    const data:foodData[]=await getDataByGropOfCatagoriName({name:nameOfCatagories})
    const oneData = data[0]
    return ( 
        <div className='  pb-[44px]  mx-auto grid grid-cols-1 gap-8   px-[16px] py-[24px]'>
            <NameBord N={oneData}/>
            <SortingProgramm C={data} />
            
        </div>
    );
};

export default CatagoriesList;