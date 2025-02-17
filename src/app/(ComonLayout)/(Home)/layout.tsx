import Footer from '@/components/Home/Footer/Footer';
import HeaderHome from '@/components/Home/Headers/HeaderHome';
import React, { ReactNode } from 'react';

const layout = ({children}: {children:ReactNode}) => {
    return (
        <div>
            <HeaderHome/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;