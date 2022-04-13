import React from 'react';
import {Outlet} from 'react-router-dom'

const LayoutPh = () => {
    return (
        <>
           <header></header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    );
};

export { LayoutPh };