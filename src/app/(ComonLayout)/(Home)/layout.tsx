import HeaderHome from '@/components/Home/Headers/HeaderHome';
import React, { ReactNode } from 'react';

const layout = ({children}: {children:ReactNode}) => {
    return (
        <div>
            <HeaderHome/>
            {children}
        </div>
    );
};

export default layout;