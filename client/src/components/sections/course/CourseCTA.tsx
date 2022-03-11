import Button from '@mui/material/Button';
import React from 'react';
import RegisterInterestModal from '../../organisms/RegisterInterestModal';
interface Props{
    courseId: any;
    isEnterprise?: boolean;
}
const CourseCTA = ({courseId, isEnterprise=false}:Props) => {
    const [openInterest, setOpenInterest] = React.useState(false);
    const handleOpenInterest = () => setOpenInterest(true);
    const handleCloseInterest = () => setOpenInterest(false);

    return (
        <div className={`${isEnterprise ? 'bg-contrastAccent-200' : 'bg-accent-200'}  pt-20 pb-16`}>
            <div className="w-10/12 mx-auto">
                <div className="text-center pb-5">Register now to give your kids the competitive edge with Smartle.</div>
                <div className="flex justify-center gap-4">
                    <RegisterInterestModal isEnterprise={isEnterprise} courseId={courseId} openInterest={openInterest} handleCloseInterest={handleCloseInterest} />
                    <Button
                        onClick={handleOpenInterest}
                        className={`px-14 py-2 text-white ${isEnterprise ? 'bg-contrast-400' : 'bg-color-400'} font-bold rounded-md`}>Register Your Interest</Button>
                    {/* <Button className='px-14 py-2 text-white bg-color-400 font-bold rounded-md'>Buy Course</Button>
                    <Button className='px-14 py-2 text-white bg-color-400 font-bold rounded-md'>Book Trial</Button> */}
                </div>
            </div>            
        </div>
    );
}

export default CourseCTA;
