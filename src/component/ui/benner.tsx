import Clock from '@/component/watchOfTime/clock'
import Image from 'next/image'
const Benner = () => {
    return (
       <div className='flex justify-between w-280 mx-auto bg-[#FAFCFA] border border-solid border-[#E1E8E1]         rounded-[24px] p-1 my-[24px]'>
            {/* left */}
             <div className='flex flex-col gap-6 pt-3 px-3'> 
                    <div className='text-[#035d2a] bg-[#81aa93] w-[175px] rounded-[14px] text-center'>
                        <Clock />
                    </div>
                 <div>
                        <h1 className='font-bold text-4xl '>আজকের বাজারের দাম এক নজরে</h1>
                        <p className='font-normal text-base text-[#1D271F]'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়,   <br />    সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                    </div>
                    <div className='w-[120px] h-[40px] bg-[#05893E] rounded-[14px] text-white flex justify-center items-center mt-2'>
                       <button>সব পণ্য দেখুন</button>
                    </div>
            </div>
                <div>

                        
                        <Image
                        src="/bazar-hero.png"
                        alt="Bazar Hero"
                        width={315}
                         height={265}
                        >
                        </Image>
                </div>

        </div>
    );
};

export default Benner;



 