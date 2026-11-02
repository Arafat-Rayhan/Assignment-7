   
import Merque from '@/component/ui/merque'
 import LinkWithNav from '@/component/btn/linkList'
 import Benner from '@/component/ui/benner'
 import Card from '@/component/layout/card'
import CardPalase from '@/component/layout/cardPalase';
export default async function Home() {
  return (
    <div className=" bg-[#E1E8E1] w-[1160px] py-[24px] px-[16px] gap-[40px] mx-auto">
     
      <Benner />
      <CardPalase/>
     </div>
  );
};