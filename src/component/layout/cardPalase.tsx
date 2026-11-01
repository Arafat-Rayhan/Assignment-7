import {getDataByAllBazarProduct} from '@/component/getData/allData'
import { foodData } from '@/type/type';
import Card from '@/component/layout/card'
const CardPalase =async () => {
    const data:foodData[] = await getDataByAllBazarProduct()
    return (
        <div className='grid grid-cols-1 mx-auto gap-2'>
             <div >
                <h2>🔼 আজ দাম বেড়েছে</h2>
                <div className='grid grid-cols-3 gap-2 mx-auto'>
                    {
                        data.filter(card=> card.change.dir==="up").slice(0,8).map((C)=>(<Card key={C.id} C={C}/>))
                    }
                </div>
                <div>
                    <h2>🔻আজ দাম কমেছে</h2>
                    <div className='grid grid-cols-3 gap-2 mx-auto'>
                        {
                             data.filter(card=> card.change.dir!=="up").slice(0,8).map((C)=>(<Card key={C.id} C={C}/>))
                        }
                    </div>
                </div>
                <div >
                    <h2>সব পণ্য</h2>
                    <p>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
                    <div  className='grid grid-cols-3 gap-2 mx-auto'>
                        {
                            data.map((C)=>(<Card key={C.id} C={C}/>))
                        }
                    </div>
                </div>
             </div>
        </div>
    );
};

export default CardPalase;