'use client'

import styles from "./page.module.css"
import Image from "next/image";
import Link from 'next/link';
import { IoArrowBackSharp } from "react-icons/io5";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"




export default function LogIn (){
  return <>
  <div>
    <div className="p-4 text-white h-screen w-screen flex overflow-hidden bg-gray-100">
      <div className={styles.maincontainer}>
        <div className="bg-white text-[#1b2450] w-[340px]  h-[500px] p-6  px-10 rounded-[10px] flex flex-col justify-between items-center gap-[20px] shadow-custom">
          <div className="flex items-start w-full">
            <Link href="/logIn/verification"><IoArrowBackSharp size={16}/></Link>
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
            <p>A code has been sent to +2348075754312. Change</p>
          </div>

          {/* OTP */}
          <div>
            <InputOTP maxLength={6}
               pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
               size={1}
               className="w-12"
            >
              <InputOTPGroup className='w-20 h-8 rounded'>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup className="w-20">
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>

          </div>

          {/* Button */}
          <div className="w-full gap-3 flex flex-col items-center justify-center" >
            <div className="bg-[#0641B6] text-white p-2 rounded-[50px] w-full text-center md:text-[14px] text-[15px] cursor-pointer font-semibold">
            <Link href="/logIn/complete">Verify</Link>
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