import { useState, useEffect } from "react";
import axios from "axios";
import IUser from "../../interface/user.interface";
import { useDispatch } from 'react-redux';
import { setUserCount } from "../../redux/userSlice";

function Home() {
    const [users, setUsers] = useState<IUser[]>([]);
    const dispatch = useDispatch();
    const getUsers = async () => {
        try {
            const { data } = await axios.get('https://66fd3bc6c3a184a84d199137.mockapi.io/api/v1/users');
            setUsers(data);
            dispatch(setUserCount(data.length));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="min-h-screen bg-blue-50 py-10">
            <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-8">User List</h1>
            <div className="container mx-auto px-6">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full bg-white rounded-lg shadow-lg overflow-hidden">
                        <thead className="bg-blue-100">
                            <tr>
                                <th className="px-5 py-3 text-left text-base font-semibold text-blue-800">Name</th>
                                <th className="px-5 py-3 text-left text-base font-semibold text-blue-800">Email</th>
                                <th className="px-5 py-3 text-left text-base font-semibold text-blue-800">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((item) => (
                                <tr key={item.id} className="border-t border-gray-300">
                                    <td className="px-5 py-3 text-left text-base text-gray-800">{item.name}</td>
                                    <td className="px-5 py-3 text-left text-base text-gray-800">{item.email}</td>
                                    <td className="px-5 py-3 text-left text-base text-gray-800">{item.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
