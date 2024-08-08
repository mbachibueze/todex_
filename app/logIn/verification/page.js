import styles from "./page.module.css"
import Image from "next/image";
import Link from 'next/link';
import { IoArrowBackSharp } from "react-icons/io5";

import { FcGoogle } from "react-icons/fc";

export default function LogIn (){
  return <>
  <div>
    <div className="p-4 text-white h-screen w-screen flex overflow-hidden bg-gray-100">
      <div className={styles.maincontainer}>
        <div className="bg-white text-[#1b2450] w-[340px] h-[500px] p-6  px-10 rounded-[10px] flex flex-col justify-between items-center gap-[40px] shadow-custom">
          <div className="flex items-start w-full">
            <Link href="/logIn"><IoArrowBackSharp size={16}/></Link>
          </div>
          {/* Image */}
          {/* <div>
            <Image
                    src="/images/tobex_logo.svg"
                    width={120} 
                    height={27}
                    />
          </div> */}

          {/* Input */}
          <Image
                    src="/images/email.png"
                    width={150} 
                    height={27}
                    />

          <div className="flex flex-col text-center items-center md:text-[8px] text-[11px]">
            <p>A mail has been sent to jo**********@*****.com to confirm the validity of the email</p>
            <p>Click Link in mail to validate </p>
          </div>

          {/* Button */}
          <div className="w-full gap-3 flex flex-col items-center justify-center" >
            <div className="bg-[#0641B6] text-white p-2 rounded-[50px] w-full text-center md:text-[14px] text-[13px] cursor-pointer font-semibold">
            <Link href="/logIn/otp">Confirm Email</Link>
            </div>
            <div className="flex text-[11px] justify-between w-full">
              <div className="text-blue-600 underline cursor-pointer">Resend Code</div>
              <div className="md:cursor-pointer">Use Phone instead</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
}