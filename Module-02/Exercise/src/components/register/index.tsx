import { Formik, Form, Field, FormikProps } from "formik";
import Schema from "../schema/register.schema";
import axios from "axios";
import IUser from "../../interface/user.interface";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const postUser = async (params: IUser) => {
        try {
            await axios.post('https://66fd3bc6c3a184a84d199137.mockapi.io/api/v1/users', {
                name: params.name,
                email: params.email,
                password: params.password,
            });
            toast.success("User registered successfully!", {
                onClose: () => {
                    navigate('/');
                }
            });
        } catch (error) {
            console.error("Error registering user:", error);
            toast.error("Registration failed!");
        }
    };

    return (
        <div>
            <Formik
                initialValues={{
                    id: 0,
                    name: '',
                    email: '',
                    password: ''
                }}
                validationSchema={Schema}
                onSubmit={(values) => {
                    console.log(values);
                    postUser(values);
                }}
            >
                {(props: FormikProps<IUser>) => {
                    const { values, errors, touched, handleChange } = props;

                    return (
                        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-100 to-gray-100">
                            <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-lg">
                                <ToastContainer position="top-right" autoClose={2000} theme="colored" />
                                <Form>
                                    <div className="mb-6">
                                        <h1 className="text-3xl font-extrabold text-indigo-700 text-center mb-6">Register</h1>
                                    </div>

                                    <div className="mb-5">
                                        <label htmlFor="name" className="block text-gray-600 font-semibold mb-1 text-left">Name</label>
                                        <Field className="border border-indigo-300 rounded-md w-full bg-gray-50 p-3" type="text" name="name" onChange={handleChange} value={values.name} />
                                        {touched.name && errors.name ? (
                                            <div className="text-left text-red-600 text-sm mt-1">{errors.name}</div>
                                        ) : null}
                                    </div>

                                    <div className="mb-5">
                                        <label htmlFor="email" className="block text-gray-600 font-semibold mb-1 text-left">Email</label>
                                        <Field className="border border-indigo-300 rounded-md w-full bg-gray-50 p-3" type="email" name="email" onChange={handleChange} value={values.email} />
                                        {touched.email && errors.email ? (
                                            <div className="text-left text-red-600 text-sm mt-1">{errors.email}</div>
                                        ) : null}
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="password" className="block text-gray-600 font-semibold mb-1 text-left">Password</label>
                                        <Field className="border border-indigo-300 rounded-md w-full bg-gray-50 p-3" type="password" name="password" onChange={handleChange} value={values.password} />
                                        {touched.password && errors.password ? (
                                            <div className="text-left text-red-600 text-sm mt-1">{errors.password}</div>
                                        ) : null}
                                    </div>

                                    <button type="submit" className="bg-indigo-600 text-white w-full p-3 rounded-md hover:bg-indigo-700 transition">
                                        Submit
                                    </button>
                                </Form>
                            </div>
                        </div>
                    );
                }}
            </Formik>
        </div>
    );
}

export default Register;
