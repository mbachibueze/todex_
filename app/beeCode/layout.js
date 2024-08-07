import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css"
import Image from "next/image";

// React Icons
import { IoHomeOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { Input } from "postcss";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { LuShieldCheck } from "react-icons/lu";
import { SiExpertsexchange } from "react-icons/si";
import { RiExchange2Line } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import Link from "next/link";



const inter = Inter({ subsets: ["latin"] });


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="flex ">
        <div class="p-2 h-screen  md:gap-2 md:grid md:grid-rows-[auto_1fr] md:grid-cols-[200px_1fr] w-screen" >

        {/* <Sidebar/> */}
          <div  class=" rounded-[10px] md:row-span-2 md:col-span-1 hidden md:block bg-white text-[#1b2450] ">
            {/* Logo */}
            <div class="border-b border-white-700 py-2 px-4" >
              <Image
                  src="/images/tobex_logo.svg"
                  width={100} 
                  height={20}
                  />
            </div>
            {/* Sidebar List */}
            <div className="p-4 flex flex-col gap-[20px]  ">
              <div className="flex gap-[10px] items-center font-semibold hover:text-[#4277DF] cursor-pointer text-[#4277DF] hover:border-l-[3px] hover:pl-2 hover:rounded-[3px] border-[#4277DF] transition-border duration-200" >
                <FaHome 
                  size={18}
                  style={{ stroke: 'white', strokeWidth: 7 }}
                />
                <Link href="/beeCode/dashboard">Dashboard</Link>
              </div>
              <div className="flex gap-[10px] items-center font-semibold hover:text-[#4277DF] cursor-pointer hover:border-l-[3px] hover:pl-2 hover:rounded-[3px] border-[#4277DF] transition-border duration-200">
                <SiExpertsexchange 
                  size={12}
                  style={{ stroke: '', strokeWidth: 0 }}
                />
                Transactions
              </div>
              <div className="flex gap-[10px] items-center font-semibold hover:text-[#4277DF] cursor-pointer hover:border-l-[3px] hover:pl-2 hover:rounded-[3px] border-[#4277DF] transition-border duration-200">
                <RiExchange2Line 
                  size={18}
                  style={{ stroke: 'white', strokeWidth: 0.5 }}
                />
                Trades
              </div>
              <div className="flex gap-[10px] items-center font-semibold hover:text-[#4277DF] cursor-pointer hover:border-l-[3px] hover:pl-2 hover:rounded-[3px] border-[#4277DF] transition-border duration-200">
                <FaRegUser
                  size={18}
                  style={{ stroke: 'white', strokeWidth: 1 }}
                />
                <Link href="/beeCode/users">Users</Link>
              </div>
              <div className="flex gap-[10px] items-center font-semibold hover:text-[#4277DF] cursor-pointer hover:border-l-[3px] hover:pl-2 hover:rounded-[3px] border-[#4277DF] transition-border duration-200 flex-grow">
                <LuShieldCheck
                  size={18}
                />
                Authentication
              </div>
              <div className="flex flex-col gap-[20px] absolute bottom-10">
                <div class="flex gap-[10px] items-center font-semibold hover:text-[#4277DF] cursor-pointer hover:border-l-[3px] hover:pl-2 hover:rounded-[3px] border-[#4277DF] transition-border duration-200 ">
                  <MdOutlineSettings
                    size={18}
                  />
                  <Link href="/settings">Settings</Link>
                </div>
                <div class="flex gap-[10px] items-center font-semibold hover:text-[#4277DF] cursor-pointer hover:border-l-[3px] hover:pl-2 hover:rounded-[3px] border-[#4277DF] transition-border duration-200 ">
                  <TbLogout2
                    size={18}
                  />
                  <Link href="/logIn">Log Out</Link>
                </div>

              </div>
            </div>
          </div>

          {/* Navigation  Bar*/}
          <div  class="rounded-[10px] row-span-1 col-span-1 bg-white ; p-2 pl-4  border-spacing-y-1 flex gap-[20px] justify-between items-center" >

              <div className="text-[#efefef] font-bold text-[25px] flex items-center gap-[10px]"> 
              <div class="md:hidden block  " >
              <Image
                  src="/images/logo_header.svg"
                  width={30} 
                  height={20}
                  />
            </div>
              
              </div>


              <div className="flex gap-[20px] items-center">

                {/* Search Bar */}
                <div class="font-semibold text-[#efefef] " >
                  <div className="flex items-center bg-white rounded-[100px] px-2 border border-[#4277DF]">
                  <CiSearch 
                    color="#1b2450"
                  />
                  <input className="rounded-[50px] outline-none text-black px-2 py-1 text-sm  w-0 hover:w-[150px] focus:w-[150px] font-normal transition-width duration-500"
                  />
                  </div>
                </div>
                
                {/* Notification Icon */}
                <div className="cursor-pointer text-[#4277DF] hover:text-[#0641B6] transition-colors duration-200">
                  <IoNotifications 
                    size={24}
                  />
                </div>

                {/* Use Profile */}
                <div className="flex gap-[10px] items-center bg-white text-black  p-1 nd:pr-2 rounded-[50px] cursor-pointer border border-[#4277DF]" >
                  <Image
                      src="/images/profileIcon.svg"
                      width={25}
                      height={25}
                    />
                    <div className="font-semibold text-[13px] md:block hidden">Temitope Oyedele</div>
                    <div className="md:block hidden"><FaAngleRight /></div>
                    
                </div>

              </div>
          </div>

{/* Body */}
          <div class="bg-white rounded-[10px] row-span-1 col-span-1  overflow-y-auto">
            <div className={styles.main}>
              {children}
            </div>
          </div>
</div>
        </body>
    </html>
  );
}
