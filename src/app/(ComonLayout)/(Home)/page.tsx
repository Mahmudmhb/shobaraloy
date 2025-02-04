import Bannar from '@/components/Home/Bannar/Bannar';
import Learn from '@/components/Home/Learn/Learn';
import React from 'react';

const Home = () => {
    return (
        <div className='space-y-16'>
            <Bannar />
            <Learn/>
        </div>
    );
};

export default Home;