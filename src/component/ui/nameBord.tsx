import { foodData } from '@/type/type';
import React from 'react';

const NameBord = ({N}:{N:foodData}) => {
    return (
        <div className='flex w-[1120px] justify-start gap-4  p-[21px] rounded-[16px] p-[21px] bg-[#E1E8E1]'>
            <div className='w-[36px] h-[40px] text-3xl'>
                {N.image}
            </div>
            <div>
            <h2>{N.categoryNameBn}</h2>
            <p>৪টি পণ্যের আজকের দাম ও পরিবর্তন</p>
            </div>
        </div>
    );
};

export default NameBord;