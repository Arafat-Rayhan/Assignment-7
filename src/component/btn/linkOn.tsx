 "use client"
import Link from 'next/link'

type DataOfC={
    "id": string,
    "slug": string,
    "nameBn":string,
    "icon": string,
  }
const LinkOn = ({ C }: { C:DataOfC}) => {
    return (
        <div className='flex gap-1.5'>
        <span>{C.icon}</span>
      <Link href={`/catagories/${C.id}`} className="flex items-center gap-1">
        {C.nameBn}
      </Link>
        </div>
    );
  
 
};

export default LinkOn;