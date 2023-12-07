import { MdKeyboardArrowLeft } from 'react-icons/md'
import Input from '../../../utils/Input'
const SignIn = ({ setSignReq }) => {
    return (
        <div className='size mt-[6rem] text-center'>
            <h2 className='text-4xl mb-4 font-bold'>Sign up with your email</h2>
            <p className="w-full">
                Enter the email address associated with your account, and we&apos;ll send a magic link to your inbox.
            </p>
            <form className='flex flex-col gap-4 mt-4 font-semibold'>
                <Input type="text" title="Username" />
                <Input type="email" title="Email" />
                <Input type="password" title="Password" />
                <Input type="password" title="Re-enter Password" />
                <button className="px-4 py-1 text-sm rounded-full bg-green-700 hover:bg-green-800 text-white w-fit mx-auto">
                    Sign Up
                </button>
            </form>
            <button onClick={() => setSignReq("")} className='mt-5 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto'>
                <MdKeyboardArrowLeft />
                Back to all sign up options
            </button>
            <button onClick={() => setSignReq("")} className='mt-5 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto'>
                <MdKeyboardArrowLeft />
                Already have an account? Login
            </button>
        </div>
    )
}

export default SignIn
