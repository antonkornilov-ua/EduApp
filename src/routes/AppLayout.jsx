import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const AppLayout = () => {
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    const isMaintenance = location.pathname === '/maintenance';

    return (
        <div className='min-h-screen flex flex-col'>
            <header>
                <Navbar />
            </header>
            {isMainPage || isMaintenance ? (
                <main className='grow h-[80vh]'>
                    <Outlet />
                </main>
            ) : (
                <main className='grow'>
                    <Outlet />
                </main>
            )}

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

