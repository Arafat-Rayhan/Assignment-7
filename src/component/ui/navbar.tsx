"use client"

import Clock from '@/component/watchOfTime/clock';
import SignInUp from '@/component/btn/sign-up-in'
import {useSession,signOut } from '@/app/lib/auth-client' 
import {Button} from "@heroui/react";


export  const instant = false;

const NavbaR = () => {
    
    const {data:session} = useSession();
    

    return (
        <nav className='max-w-290 w-full mx-auto flex justify-between '>
            
            <div className='flex gap-2'>
                <div className='w-10 h-10 bg-[#05893E] rounded-xl '>
                </div>
                 <div>
                <h1 className='font-bold'>বাজার দর</h1>
                <Clock />
                 </div>
            </div>
            
            <div>
                {
                    session?.user ? <>
                        <div>
                        <span>Welcome {session.user.name}</span>
                        <Button onClick={()=>signOut()}>Sign out</Button>
                        </div>
                        </>
                         : <> <SignInUp /></> 
                }
               
            </div>
            
        </nav>
    );
};

export default NavbaR;