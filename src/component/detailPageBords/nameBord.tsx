import { foodData } from '@/type/type';
import React from 'react';

const nameBord = ({P}:{P:foodData}) => {
    const oparation= Number(P.today) - Number(P.lastMonth);
    return (
        <div className='w-[1120px] h-[175px]  p-[22px] mx-auto flex justify-between bg-[#E1E8E1]  rounded-[16px]'>
            <div className='flex justify-start items-center gap-4'>
                <div className='w-[80px] h-[80px] text-6xl bg-[#F0F5F0] rounded-[16px]'>
                    {P.image}
                </div>
                <div>
                    <h1 className='font-bold text-[30px]'>{P.nameBn}</h1>
                    <h4 className='text-[#1D271F]'>প্রতি কেজি · {P.categoryNameBn}</h4>
                    <p className='text-[#1D271F]'>গতকালের তুলনায় আজ  {oparation > 0
                            ? `দাম বেড়েছে · ${Math.abs(oparation)} টাকা`
                            : `দাম কমেছে ${Math.abs(oparation)} টাকা`}
                    </p>
                </div>
            </div>
            <div className='w-[120px] h-[133px] text-center  bg-[#F0F5F0] rounded-[16px]'>
                <h3>আজকের দাম</h3>
                <h6 className='text-[30px] font-bold'>{P.today}</h6>
                <p>টাকা / কেজি</p>
                <h3>{`${P.change.dir==="up"?`🔼${P.change.pct}%` :`🔻${P.change.pct}% `}`}</h3>
            </div>
        </div>
    );
};

export default nameBord;


