 "use client"
import { foodData } from '@/type/type';
import Link from 'next/link'
import {usePathname} from 'next/navigation'

type DataOfC={
    "id": string,
    "slug": string,
    "nameBn":string,
    "icon": string,
  }
const LinkOn = ({ C }: { C:DataOfC}) => {
  const pathName = usePathname();
  const href = `/catagories/${C.id}`
  const isActive = pathName === href;
    return (
        <div className={`gap-1.5 px-4 py-2 rounded-lg flex justify-start ${isActive ? "bg-green-600" : ""} `}>
        <span>{C.icon}</span>
      <Link href={`/catagories/${C.id}`} className="flex items-center gap-1">
        {C.nameBn}
      </Link>
        </div>
    );
  
 
};

export default LinkOn;