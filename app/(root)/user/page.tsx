import React from 'react';
import '../../globals.css';
import Image from 'next/image';
import { auth, signIn } from '@/auth';
import Link from 'next/link';

const Page = async() => {

  await auth();


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center bg-white shadow-lg p-6 max-w-md w-full rounded-xl">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">Login</h2>

        <form className="w-full space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-center gap-3 mt-3">
                  <div className="flex-grow h-px bg-black-200"></div>
                  <span className="text-sm text-gray-600">OR</span>
                  <div className="flex-grow h-px bg-black-200"></div>
                </div>
        
                <div className="w-full mt-4 flex flex-col justify-between gap-3 md:flex-row">
                  <form className='w-full' action={async () => {
                      "use server";
                      await signIn('github');
                      
                    }}
                    >
                  <button
                    className="w-full flex items-center justify-center bg-gray-200 text-gray-700 py-3 rounded-md font-semibold hover:bg-gray-300 transition duration-300"
                  >
                    <Image src="/github.png" alt="GitHub" className="mr-2" width={25} height={25} />
                    GitHub
                  </button>
                    </form>

                    {/* google auth */}
                    <form className='w-full' action={async () => {
                      "use server";
                      await signIn('google');
                    }}
                    >
                  <button
                    className="w-full flex items-center justify-center bg-gray-200 text-gray-700 py-3 rounded-md font-semibold hover:bg-gray-300 transition duration-300"
                  >
                    <Image src="/google.png" alt="GitHub" className="mr-2" width={25} height={25} />
                    Google
                  </button>
                    </form>
                </div>

        <p className="text-sm text-gray-600 mt-4">
          Don’t have an account? <Link href="/user/sign-up" className="text-purple-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
