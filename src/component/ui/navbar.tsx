"use client"

import Clock from '@/component/watchOfTime/clock';
import SignInUp from '@/component/btn/sign-up-in'
import {useSession,signOut } from '@/app/lib/auth-client' 
import Link from 'next/link';
import {useState} from 'react';
import {Button} from "@heroui/react";

export  const instant = false;

const NavbaR = () => {

  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-290 relative z-50 w-full h-[70px] px-[16px] py-[12px] mx-auto flex justify-between">

      <div className="flex gap-2">
        <div className="w-10 h-10 bg-[#05893E] rounded-xl">
        </div>

        <div>
          <h1 className="font-bold">বাজার দর</h1>
          <Clock />
        </div>
      </div>

      <div>
        {session?.user ? (
          <div className="relative z-50">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2"
            >
              <span>👤</span>
              <span>{session.user.name}</span>
              <span>⌄</span>
            </button>

            {isOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-white p-4 shadow-lg z-50">

                <h3 className="font-semibold">
                  {session.user.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {session.user.email}
                </p>

                <hr className="my-3" />

                <Link href="/my-profile" 
                onClick={()=>setIsOpen(false)}
                className="block py-2">
                  👤 আমার প্রোফাইল
                </Link>

                <button
                  className="block py-2 text-red-500"
                  onClick={() => {signOut();setIsOpen(false);}}
                >
                  ↪ Sign Out
                </button>

              </div>
            )}
          </div>
        ) : (
          <SignInUp />
        )}
      </div>

    </nav>
  );
};

export default NavbaR;


 