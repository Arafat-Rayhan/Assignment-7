"use client"
import { foodData } from '@/type/type';
import Link from 'next/link'
import { ReactNode } from 'react';
import {toast} from 'sonner'
const LinkWithSomeProgramm = ({C,children}:{C:foodData;children:ReactNode;}) => {
    return (
        <div>
           <Link href={`/detail/${C.id}`} onClick={()=>{toast.info("wait few time")}}>
           {children}
            </Link>
        </div>
    );
};

export default LinkWithSomeProgramm;