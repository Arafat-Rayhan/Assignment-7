import Navbar from '@/component/ui/navbar'
import LinkWithNav from '@/component/btn/linkList';
import Merque from '@/component/ui/merque'

const MainNavbar = () => {
    return (
        <div className='bg-[#FAFCFA]'>
            <Navbar />
             <LinkWithNav />
            <Merque />
        </div>
    );
};

export default MainNavbar;