import { ChangeEvent, useState } from "react";
import * as yup from 'yup';
export const Register = () => {

    const [formData, setFormData] = useState({
        email: '', // required
        password: '', // required
        confirmpassword: '' // optional
    })
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
        confirmpassword: yup.string().oneOf([yup.ref('password'), ''], 'Passwords must match')
      });
    async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(formData);
        await schema.validate(formData, { abortEarly: false });
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

 function handleChange(e:ChangeEvent<HTMLInputElement>) {
        
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (

<>
    <main className="w-full max-w-md mx-auto mt-10">
        <div className=" bg-gray-200 border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
                <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?
                        <a className="text-blue-600 decoration-2 hover:underline font-medium" href="/auth/signin">
                            Sign in here
                        </a>
                    </p>
                </div>

                <div className="mt-5">
                    <div
                        className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                        Or
                    </div>


                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="grid gap-y-4">

                            <div>
                                <label className="block text-sm mb-2 dark:text-white">Email address</label>
                                <div className="relative">
                                    <input type="email" name="email" value={formData.email} onChange={e => handleChange(e)}
                                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                        placeholder="example@opentrends.net" />
                                    <div
                                        className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3" />
                                </div>
                                <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                    Please include a valid email address so we can get back to you
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm mb-2 dark:text-white">Password</label>
                                <div className="relative">
                                    <input name="password" type="password" value={formData.password} onChange={e => handleChange(e)}
                                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                        placeholder="**********" />
                                    <div
                                        className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor"
                                            viewBox="0 0 16 16" aria-hidden="true">
                                            <path
                                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="hidden text-xs text-red-600 mt-2" id="password-error">
                                    8+ characters required
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm mb-2 dark:text-white">Confirm Password</label>
                                <div className="relative">
                                    <input name="confirmpassword" type="password" value={formData.confirmpassword} onChange={e => handleChange(e)}
                                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                        placeholder="**********" />
                                    <div
                                        className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor"
                                            viewBox="0 0 16 16" aria-hidden="true">
                                            <path
                                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">
                                    Password does not match the password
                                </p>
                            </div>

                            <div className="flex items-center">
                                <div className="flex">
                                    <input id="remember-me" name="remember-me" type="checkbox"
                                        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                </div>
                                <div className="ml-3">
                                    <label className="text-sm dark:text-white">I accept the <a
                                            className="text-blue-600 decoration-2 hover:underline font-medium"
                                            href="#">Terms and Conditions</a></label>
                                </div>
                            </div>

                            <button type="submit"
                                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Sign
                                up
                            </button>
                        </div>


                    </form>

                </div>
            </div>
        </div>
    </main>
</>
);
};
export default Register;