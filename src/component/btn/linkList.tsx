
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
     console.log("All data from API:", data);
console.log("All icons:", data.map((item:DataOfC) => item.icon));
    return (
        <div className='flex max-w-290 w-full justify-start gap-6 mx-auto '>
            {
                data.map((C)=>(
                    <LinkOn C={C} key={C.id} />

                ))
            }
        </div>
    );
};

export default LinkLinst;