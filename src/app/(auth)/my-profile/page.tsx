"use client"
import { useSession,signOut } from "@/app/lib/auth-client";
import Link from 'next/link'

 


const Profile = () => {
   

   const {data:session} = useSession()
    return (
        <div className='flex flex-col items-center w-[1120px] mx-auto pb-[155px] gap-4 pt-[40px] h-[520px]'>
            {/* two btn wtith condition  and dropdwon*/}
            <h2 className='font-bold text-[24px]'>আমার প্রোফাইল</h2>
            <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            <div className='w-[735px] h-[120px] rounded-[16px] flex justify-between items-center p-[25px] bg-[#FAFCFA]'>

                <div>
                <h2>{session?.user.name}</h2>
                <h3>{session?.user.email}</h3>
                </div>
                <div className='w-[180px] h-[40px] border border-solid border-red-900 flex justify-center items-center rounded-[18px]'>
                <button onClick={()=>signOut()}>↩ সাইন আউট</button>
                </div>
            </div>

            <Link href="/update-profile" className="  rounded-md bg-green-600 py-2.5 text-sm font-medium text-white transition hover:bg-green-700 active:scale-[0.99] w-[720px] text-center font-bold text-3xl ">Up data profile</Link>

        </div>
    
    );
}
export default Profile;