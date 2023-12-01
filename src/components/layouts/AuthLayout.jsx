import { Outlet } from 'react-router-dom';
import { HeaderAuth } from '../sections/HeaderAuth';
import { FooterAuth } from '../sections/FooterAuth';

export function AuthLayout(){
    return(
        <>
            <HeaderAuth />
                <main>
                    <Outlet />
                </main>
            <FooterAuth />
        </>
    );
}