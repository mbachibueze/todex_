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
        <div className="bg-white text-[#1b2450] w-[340px] h-[500px]  py-12  px-10 rounded-[10px] flex flex-col items-center gap-[20px] shadow-custom justify-between">
          <div></div>
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
                    src="/images/done.png"
                    width={240} 
                    height={27}
                    />

        

          {/* Button */}
          <div className="w-full gap-3 flex flex-col items-center justify-center" >
            <div className="bg-[#0641B6] text-white p-2 rounded-[50px] w-full text-center md:text-[14px] text-[15px] cursor-pointer font-semibold">
            <Link href="/beeCode">Continue</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  </>
}