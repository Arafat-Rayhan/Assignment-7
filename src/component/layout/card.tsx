import { foodData } from "@/type/type";
import LinkWithSomeProgramm from '@/component/layout/cardLink';
import {toast} from 'sonner'

const card = ({C}:{C:foodData}) => {
    return (
        // main
        <div>
            <LinkWithSomeProgramm C={C} key={C.id}>
        <div className="w-full bg-[#F0F5F0] rounded-[16px] p-[16px] grid grid-cols-1 gap-[16px]  ">
            <div>
                
                <div className="flex gap-[12px]">
                    <div className="w-[48px] h-[48px] bg-[#c8d3c8] rounded-[12px] flex justify-around items-center text-2xl">{C.image}</div>
                    <div>{C.nameBn} <br /><span>প্রতি কেজি</span></div>
                </div>
            </div>
            <div className="flex justify-between items-end">
                <div>
                    <h2>আজকের দাম</h2>
                    <h2>{C.today} <span>টাকা</span></h2>
                </div>
                <div>
                    <span className="mx-1">{`${C.change.dir==="up"?`🔼${C.change.pct}%` :`🔻${C.change.pct}%`}`}</span>
                </div>
            </div>
        </div>
            </LinkWithSomeProgramm>
        </div>
    );
};

export default card;