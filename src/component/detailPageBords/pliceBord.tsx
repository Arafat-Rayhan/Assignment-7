import { foodData } from '@/type/type';
import MarketPriceBord from '@/component/detailPageBords/marketPriceBord';
const pliceBord = ({P}:{P:foodData}) => {
    const price = P.markets;
    const maxPrice = Math.max(...price.map(i => i.max));
    const minPrice = Math.min(...price.map(i => i.min));
    const avaraze = (maxPrice + minPrice) / 2;
    return (
        <div className=' mx-auto bg-[#ffff] grid grid-cols-1 gap-[24px] mt-[24px] p-[22px] rounded-[16px]'>
            <h2 className='font-semibold text-[18px]'>দামের সারসংক্ষেপ</h2>
            <div className='flex justify-around gap-3'>
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

            <div >
                <h2 className='font-semibold text-[18px] mb-5'>বাজারভিত্তিক আজকের দাম</h2>
                {/* table */}
                <div className='mb-[24px]'>
                <div className=' h-[46px] border border-solid border-[#1D271F] flex px-[16px] py-[12px]  grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center rounded-t-[16px]'>
                    <span>বাজার</span>
                    <span>বিভাগ</span>
                    <span>সর্বনিম্ন</span>
                    <span>সর্বাধিক</span>
                    <span>গড়</span>
                </div>
                <MarketPriceBord P={P} />
                </div>
            </div>
        </div>
    );
};

export default pliceBord;