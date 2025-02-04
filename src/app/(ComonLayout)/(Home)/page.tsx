import AdvanceBannar from '@/components/Home/AdvanceBannar/AdvanceBannar';
import Bannar from '@/components/Home/Bannar/Bannar';
import Impact from '@/components/Home/Impact/Impact';
import Learn from '@/components/Home/Learn/Learn';
import NewsLetter from '@/components/Home/NewsLetter/NewsLetter';
import RecentEvent from '@/components/Home/RecentEvent/RecentEvent';
import Testimonials from '@/components/Home/Testimonials/Testimonials';
import React from 'react';

const Home = () => {
    return (
        <div className='space-y-28 bg-white'>
            <Bannar />
            <Learn/>
            <Impact/>
            <AdvanceBannar/>
            <RecentEvent/>
            <NewsLetter/>
            <Testimonials/>
        </div>
    );
};

export default Home;