import Header from '@/components/Home/Headers/Header';
import React, { ReactNode } from 'react';

const layout = ({children}: {children:ReactNode}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default layout;