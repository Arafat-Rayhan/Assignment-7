import {getDataByAllBazarProduct} from '@/component/getData/allData'
import { foodData } from '@/type/type';
import Card from '@/component/layout/card'
const CardPalase =async () => {
   const data: foodData[] = await getDataByAllBazarProduct()
return (
    <div className='w-full mx-auto gap-2'>
        <div>
            <div className='my-7'>
                <h2 className='font-bold text-[20px]'>🔼 আজ দাম বেড়েছে</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
                {
                    data.filter(card => card.change.dir === "up").slice(0, 6).map((C) => (
                        <Card key={C.id} C={C} />
                    ))
                }
            </div>

            <div>
                <div className='font-bold text-[20px] my-7'>
                    <h2 className='font-bold text-[20px]'>🔻আজ দাম কমেছে</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
                    {
                        data.filter(card => card.change.dir !== "up").slice(0, 6).map((C) => (
                            <Card key={C.id} C={C} />
                        ))
                    }
                </div>
            </div>

            <div>
                <div className='my-7'>
                    <h2 className='font-bold text-[20px]'>সব পণ্য</h2>
                    <p>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
                    {
                        data.map((C) => (
                            <Card key={C.id} C={C} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
);
};

export default CardPalase;