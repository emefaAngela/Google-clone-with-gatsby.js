import * as React from 'react'

const SignInpage =() =>{
    return(
        <main className='py-36 mx-auto  flex flex-col h-full items-center justify-center bg-slate-100'>
            <section className='rounded-3xl flex flex-row space-between  bg-white h-[460px] w-[75%] p-4'>
                <div className='w-1/2 flex flex-col space-y-4'>
                    <div></div>
                    <div className='font-medium text-3xl'>Sign in</div>
                    <div className='text-xl '>Use your Google Account</div>
                </div>
                <div className='w-1/2 flex flex-col justify-center'>
                    <div className='border border-0.5 border-black px-2 mb-2 h-16 rounded-md py-4'>
                        Email or phone
                    </div>
                    <div className='pb-12 text-blue-600 font-medium'>Forgot email?</div>
                    <div>Not your computer? Use Guest mode to sign in privately.</div>
                    <div className='pb-10 text-blue-600 font-medium'>Learn more about using Guest mode</div>

                    <div className='flex flex-row space-x-4  ml-[264px]'>
                        <div className='text-blue-600 pt-2 font-medium'>Create account</div>
                        <div className='text-white bg-blue-600 text-center rounded-full px-6 py-2 '>Next</div>
                    </div>
                </div>
            </section>
            <div className='flex flex-row justify-between w-[75%] px-4 py-2'>
                <div className='text-sm font-light text-gray-600'>English(United States)</div>
                <div className='text-sm flex flex-row space-x-8 font-light text-gray-600'>
                    <div>Help</div>
                    <div>Privacy</div>
                    <div>Terms</div>
                </div>
            </div>
        </main>
    )
}
export const Head =()=> <title>Sign In</title>
export default SignInpage