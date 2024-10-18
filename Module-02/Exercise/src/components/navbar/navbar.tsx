import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ICount } from '../../redux/userSlice';

function Navbar() {
    const count = useSelector((state: {userSlice: ICount}) => state.userSlice.value);
    return (
        <div className='bg-gray-800 flex justify-between items-center h-20 w-full mx-auto px-6 text-white'>
            <h1 className='text-3xl font-extrabold text-blue-0'>Network Call Practice</h1>
            <ul className='flex justify-center items-center'>
                <li className='p-4 hover:bg-blue-400 rounded-lg m-2 cursor-pointer duration-300 hover:text-white'>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className='p-4 hover:bg-blue-400 rounded-lg m-2 cursor-pointer duration-300 hover:text-white'>
                    <Link to="/register">
                        Register
                    </Link>
                </li>
            </ul>
            <h2 className='text-lg'>Total Users: {count}</h2>
        </div>
    );
}

export default Navbar;
