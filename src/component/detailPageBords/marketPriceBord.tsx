import { foodData } from '@/type/type';
import React from 'react';

const MarketPriceBord = ({P}:{P:foodData}) => {
    const num = 1;
    const price=P.markets
    const result =price.map((i) => {
        return(
        {
             maxPrice : i.max,
             minPrice : i.min,
             avaraje : (i.max + i.min) /2,
             market : i.market,
             distic : i.division,
             sum : num +2
        }
            
        )
    })
     
    return (
        <div>
            {result.map((J,index)=>(

                <div  className='h-[46px] border border-solid border-[#1D271F] flex px-[16px] py-[12px] grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center bg-[#FAFCFA] ' key={index} >
                <span  >{J.market}</span>
                <span  >{J.distic}</span>
                <span  >{J.minPrice}</span>
                <span  >{J.maxPrice}</span>
                <span  >{J.avaraje}</span>
            </div>
            ))}
        </div>
    );
};

export default MarketPriceBord;