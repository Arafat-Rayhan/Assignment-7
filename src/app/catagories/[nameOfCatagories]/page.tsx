import { getDataByGropOfCatagoriName } from '@/component/getData/allData';
import { foodData } from '@/type/type';

export const instant =false;
const CatagoriesList= async ({params}:{params: Promise<{nameOfCatagories:string}>}) => {
     const {nameOfCatagories}= await params;
    // with bazar information
    const data:foodData[]=await getDataByGropOfCatagoriName({name:nameOfCatagories})
    return ( 
        <div>

        {
            data.map((i)=>(
                
                <h2 key={i.id}>{i.nameBn}</h2>
            ))
        }
        </div>
    );
};

export default CatagoriesList;