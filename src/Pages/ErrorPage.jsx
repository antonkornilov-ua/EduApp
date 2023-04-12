import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error  = useRouteError();

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className='flex md:flex-row flex-col gap-4 md:gap-0 justify-center items-center mx-5 mb-4'>
                <FaExclamationTriangle className='text-5xl text-yellow-500 mr-4' />
                <h1 className='text-4xl text-center md:text-justify font-bold'>Oops! Something went wrong.</h1>
            </div>
            <div className='max-w-lg flex flex-col text-center gap-5'>
                <p className='mb-4'>Error Code: {error.statusText}</p>
                <Link
                    to='/'
                    className='mt-10 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-6 rounded-md transition-colors duration-300'>
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
