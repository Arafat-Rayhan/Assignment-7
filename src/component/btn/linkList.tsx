
import { getDataByAllCatagories } from '@/component/getData/allData';
import LinkOn from '@/component/btn/linkOn'
 
 type DataOfC={
    "id": string,
    "slug": string,
    "nameBn":string,
    "icon": string,
  }

const LinkLinst =async () => {
    const data:DataOfC[] = await getDataByAllCatagories()
    return (
        <div className='flex w-full justify-start  mx-auto  ' >
            {
                data.map((C)=>(
                    <LinkOn C={C} key={C.id} />

                ))
            }
        </div>
    );
};

export default LinkLinst;