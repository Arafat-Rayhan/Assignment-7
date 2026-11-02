"use client" 
import { foodData } from '@/type/type';
import {useState} from 'react'
import Card from '@/component/layout/card'
const SortingProgramm = ({C}:{C:foodData[]}) => {
     const [sortOrder, setSortOrder] = useState("default");

  const sortedProducts = [...C].sort((a, b) => {

    if (sortOrder === "low-to-high") {
      return Number(a.today) - Number(b.today);
    }

    if (sortOrder === "high-to-low") {
      return    Number(b.today) - Number(a.today);
    }

    return 0;
  });
    return (
        <div>
            <div className='flex flex-col gap-10'>
        <div className='w-[1120px] h-[65px] max-auto flex justify-end gap-4 items-center px-[24px] bg-[#F0F5F0] rounded-[15px]'>
          <h2>সাজান</h2>
          {/* w-[75px] h-[32px] border border-solid border-[#000] */}
          <div className=''>
          <select
           id="sort"
           value={sortOrder}
           onChange={(e) => setSortOrder(e.target.value)}
            className='cursor-pointer mx-w-[75px] [field-sizing:content] h-[32px] \\r\\n     h-[32px] 
            rounded-lg border border-gray-300
            bg-white  
            text-sm font-medium text-gray-700
            shadow-sm 
           focus:border-red-500 focus:ring-2
          focus:ring-red-100'>       
          <option value="default">ডিফল্ট</option>
          <option value="low-to-high">কম থেকে বেশি </option>
          <option value="high-to-low">বেশি থেকে কম</option>
        </select>
            </div>
        </div>
         <p>মোট {sortedProducts.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
      <div className="grid grid-cols-3 gap-4">

        {sortedProducts.map((F) => (
           <Card key={F.id} C={F} />
        ))}

      </div> 

              </div>
        </div>
    );
};

export default SortingProgramm;

// <div className="flex justify-end items-center gap-3 mb-6">

//   <label
//     htmlFor="sort"
//     className="text-sm font-medium text-gray-600"
//   >
//     Sort By:
//   </label>

//   <select
//     id="sort"
//     value={sortOrder}
//     onChange={(e) => setSortOrder(e.target.value)}
//     className="appearance-none cursor-pointer
//     rounded-lg border border-gray-300
//     bg-white px-4 py-2.5 pr-10
//     text-sm font-medium text-gray-700
//     shadow-sm outline-none
//     focus:border-red-500 focus:ring-2
//     focus:ring-red-100"
//   >
//     <option value="default">Default</option>
//     <option value="low-to-high">
//       Price: Low to High
//     </option>
//     <option value="high-to-low">
//       Price: High to Low
//     </option>
//   </select>

// </div>

 