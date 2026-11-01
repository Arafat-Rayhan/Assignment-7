import { foodData } from '@/type/type';
import React from 'react';

const pliceBord = ({P}:{P:foodData}) => {
    const price = P.markets;
    const maxPrice = Math.max(...price.map(i => i.max));
    const minPrice = Math.min(...price.map(i => i.min));
    const avaraze = (maxPrice + minPrice) / 2;
    return (
        <div className='w-[1120px] mx-auto'>
            <h2>দামের সারসংক্ষেপ</h2>
            <div className='flex justify-around'>
                {/* 3 card */}
                <div className='w-[350px] h-[102px] rounded-[16px] py-[17px] px-[25px] bg-[#E1E8E1]'>
                    <h3>সর্বনিম্ন দাম</h3>
                    <h2 className='text-green-600'> <span className='text-2xl font-extrabold'>{minPrice}</span> টাকা</h2>
                    <p>সবচেয়ে কম দামের বাজার</p>
                </div>

                <div className='w-[350px] h-[102px] rounded-[16px] py-[17px] px-[25px] bg-[#E1E8E1]'>
                    <h3>সর্বাধিক দাম</h3>
                    <h2  className='text-red-600'><span className='text-2xl font-extrabold'>{maxPrice}</span> টাকা</h2>
                    <p>সবচেয়ে বেশি দামের বাজার</p>
                </div>

                <div className='w-[350px] h-[102px] rounded-[16px] py-[17px] px-[25px] bg-[#E1E8E1]'>
                    <h3>গড় দাম</h3>
                    <h2 className='text-green-600'> <span className='text-2xl font-extrabold'>{avaraze}</span>টাকা</h2>
                    <p>প্রতি কেজি-এর হিসাবে</p>
                </div>

            </div>
        </div>
    );
};

export default pliceBord;