import styles from "./page.module.css"
import Image from "next/image";
import Link from 'next/link';

import { FcGoogle } from "react-icons/fc";

export default function LogIn (){
  return <>
  <div>
    <div className="p-4 text-white h-screen w-screen flex overflow-hidden bg-gray-100">
      <div className={styles.maincontainer}>
        <div className="bg-white text-[#1b2450] w-[340px] h-[500px] py-12  px-10 rounded-[10px] flex flex-col justify-between items-center gap-[40px] shadow-custom">
          {/* Image */}
          <div>
            <Image
                    src="/images/tobex_logo.svg"
                    width={120} 
                    height={27}
                    />
          </div>

          {/* Input */}
          <div className="w-[250px] flex flex-col gap-7">
            <input className="rounded-[5px] outline-none text-black p-4 text-sm bg-gray-300 w-full h-[40px] transition-width duration-500 font-normal "
              placeholder="Username"
                  />
            <input className="rounded-[5px] outline-none text-black p-4 text-sm bg-gray-300 w-full h-[40px] transition-width duration-500 font-normal "
              placeholder="Password"
              type="password"
            />
          </div>

          {/* Button */}
          <div className="w-full gap-1 flex flex-col items-center justify-center" >
            <div className="bg-[#0641B6] text-white p-1 rounded-[50px] w-full text-center cursor-pointer font-semibold">
            <Link href="/logIn/verification">Log In</Link>
            </div>

            <div className="font-semibold">or</div>

            <div className="bg-white border border-blue-700 text-black p-1 rounded-[50px] w-full text-center cursor-pointer font-normal flex items-center justify-center text-[14px] gap-3">
               <FcGoogle/>
               Continue with Google
            </div>

            <div className="text-black text-[12px] hover:text-blue-500 transition-all duration-200" >Forgot Password?</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
}