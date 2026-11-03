import { foodData } from '@/type/type';
import React from 'react';

const NameBord = ({N}:{N:foodData}) => {
    return (
        <div className='flex  h-[94px] justify-start gap-10  p-[21px] rounded-[16px]  bg-[#F0F5F0] '>
            <div className='w-[36px] h-[40px] text-6xl'>
                {N.image}
            </div>
            <div>
            <h2 className='font-bold text-[24px]'>{N.categoryNameBn}</h2>
            <p className='font-normal text-[14px] text-[#1D271F]'>৪টি পণ্যের আজকের দাম ও পরিবর্তন</p>
            </div>
        </div>
    );
};

export default NameBord;