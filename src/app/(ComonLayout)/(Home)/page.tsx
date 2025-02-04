import AdvanceBannar from '@/components/Home/AdvanceBannar/AdvanceBannar';
import Bannar from '@/components/Home/Bannar/Bannar';
import Impact from '@/components/Home/Impact/Impact';
import Learn from '@/components/Home/Learn/Learn';
import RecentEvent from '@/components/Home/RecentEvent/RecentEvent';
import React from 'react';

const Home = () => {
    return (
        <div className='space-y-16 bg-white'>
            <Bannar />
            <Learn/>
            <Impact/>
            <AdvanceBannar/>
            <RecentEvent/>
        </div>
    );
};

export default Home;