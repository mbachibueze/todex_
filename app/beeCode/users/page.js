import styles from "./page.module.css";
import Image from "next/image";

import { IoMdAddCircleOutline } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { GoFilter } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiViewGridAdd } from "react-icons/hi";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";


export default function Users(){
  return(
    <div className={styles.main}>
      <div className="md:p-4 p-2 text-[#1b2450] flex flex-col gap-[20px]">

        {/* Header */}
        <div className={styles.shadow}>
          <div className="p-3">
            <div className="font-semibold  text-[16px] flex justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="text-[20px]">Users</div>
                <div className="text-[#4277DF]">(All Users)</div>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="cursor-pointer flex items-center gap-[5px]  bg-[#0641B6] text-white md:px-3 p-1 md:py-[1px] md:rounded-[5px] rounded-[50px]" >
                  <LuDownload/>
                  <div className="md:block hidden ">Export</div></div>
                <div className="cursor-pointer md:border md:rounded-[5px] rounded-[50px] md:px-3 md:py-[1px] md:border-[#4277DF] flex items-center gap-[5px] md:text-[1.1vw] text-[29px]">
                  <IoMdAddCircleOutline/>
                  <div className="md:block hidden">New User</div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="font-semibold flex gap-5  ">
          <div className={styles.filterShadow}>
            <div className="flex items-center gap-4 p-3 py-2 cursor-pointer "> 
              <GoFilter/>
              <div>Filter by Department</div>
              <FaAngleDown/>
            </div>
          </div>
          <div className={styles.filterShadow}>
            <div className="flex items-center gap-4 p-3 py-2 hover:text-[#dde8fc] cursor-pointer"> 
              <GoFilter/>
              <div>Filter by Country</div>
              <FaAngleDown/>
            </div>
          </div>
          <div>
          </div>
        </div>

        {/* Users */}
        <div className="font-semibold">
          <div className={styles.usersContainer}>
            <div className={styles.filterShadow}>
              <div className="p-3 flex flex-col gap-6">
                <div className="text-[20px]">Total Users</div>
                <div className="text-[18px]  text-gray-400">1,458</div>
              </div>
            </div>
            <div className={styles.filterShadow}>
              <div className="p-3 flex flex-col gap-6">
                <div className="text-[20px]">New Users</div>
                <div className="text-[18px] text-gray-400">103</div>
              </div>
            </div>
            <div className={styles.filterShadow}>
              <div className="p-3 flex flex-col gap-6">
                <div className="text-[20px]">Active Users</div>
                <div className="text-[18px]  text-gray-400">829</div>
              </div>
            </div>
            <div className={styles.filterShadow}>
              <div className="p-3 flex flex-col gap-6">
                <div className="text-[20px]">Inactive Users</div>
                <div className="text-[18px]  text-gray-400">629</div>
              </div>
            </div>
          </div>
        </div>

        {/* Users Details */}
        <div className=" font-semibold ">
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[20px]">
              <div className="p-2 border-b-2 cursor-pointer">All Users</div>
              <div className="text-gray-400 cursor-pointer">Active Users</div>
              <div className="text-gray-400 cursor-pointer ">Inactive Users</div>
            </div>
            <div className={styles.filterShadow}>
              <div className="p-4 py-2 flex flex-col gap-2">
                <div className={styles.detailColumn}>
                  <div>Username</div>
                  <div className="w-">Email</div>
                  <div>User ID</div>
                  <div>Total Trades</div>
                  <div>Wallet Balance</div>
                  <div>Action</div>
                </div>

                <div className="">
                  <div className="border-b border-gray-600 py-2 font-[300] text-sm ">
                    <div className={styles.detailColumn}>
                      <div className="flex items-center  gap-2 text-sm">
                      <Image
                          src="/images/profileIcon.svg"
                          width={30}
                          height={30}
                        />
                        <div>Temitope Oyedele</div>
                      </div>
                      <div className="break-all">temitopeoyedele@gmail.com</div>
                      <div>312340</div>
                      <div>54</div>
                      <div className="flex items-center ">
                        <BsCurrencyDollar/>
                        <div>23,432.83</div>
                      </div>
                      <div className="">
                          <div className={styles.action}>
                            <HiViewGridAdd/>
                            View More</div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-600 py-2 font-[300] text-sm ">
                    <div className={styles.detailColumn}>
                      <div className="flex items-center  gap-2 text-sm">
                      <Image
                          src="/images/profileIcon.svg"
                          width={30}
                          height={30}
                        />
                        <div>Temitope Oyedele</div>
                      </div>
                      <div className="break-all">temitopeoyedele@gmail.com</div>
                      <div>312340</div>
                      <div>54</div>
                      <div className="flex items-center ">
                        <BsCurrencyDollar/>
                        <div>23,432.83</div>
                      </div>
                      <div className="">
                          <div className={styles.action}>
                            <HiViewGridAdd/>
                            View More</div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-600 py-2 font-[300] text-sm ">
                    <div className={styles.detailColumn}>
                      <div className="flex items-center  gap-2 text-sm">
                      <Image
                          src="/images/profileIcon.svg"
                          width={30}
                          height={30}
                        />
                        <div>Temitope Oyedele</div>
                      </div>
                      <div className="break-all">temitopeoyedele@gmail.com</div>
                      <div>312340</div>
                      <div>54</div>
                      <div className="flex items-center ">
                        <BsCurrencyDollar/>
                        <div>23,432.83</div>
                      </div>
                      <div className="">
                          <div className={styles.action}>
                            <HiViewGridAdd/>
                            View More</div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-600 py-2 font-[300] text-sm ">
                    <div className={styles.detailColumn}>
                      <div className="flex items-center  gap-2 text-sm">
                      <Image
                          src="/images/profileIcon.svg"
                          width={30}
                          height={30}
                        />
                        <div>Temitope Oyedele</div>
                      </div>
                      <div className="break-all">temitopeoyedele@gmail.com</div>
                      <div>312340</div>
                      <div>54</div>
                      <div className="flex items-center ">
                        <BsCurrencyDollar/>
                        <div>23,432.83</div>
                      </div>
                      <div className="">
                          <div className={styles.action}>
                            <HiViewGridAdd/>
                            View More</div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-600 py-2 font-[300] text-sm ">
                    <div className={styles.detailColumn}>
                      <div className="flex items-center  gap-2 text-sm">
                      <Image
                          src="/images/profileIcon.svg"
                          width={30}
                          height={30}
                        />
                        <div>Temitope Oyedele</div>
                      </div>
                      <div className="break-all">temitopeoyedele@gmail.com</div>
                      <div>312340</div>
                      <div>54</div>
                      <div className="flex items-center ">
                        <BsCurrencyDollar/>
                        <div>23,432.83</div>
                      </div>
                      <div className="">
                          <div className={styles.action}>
                            <HiViewGridAdd/>
                            View More</div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-600 py-2 font-[300] text-sm ">
                    <div className={styles.detailColumn}>
                      <div className="flex items-center  gap-2 text-sm">
                      <Image
                          src="/images/profileIcon.svg"
                          width={30}
                          height={30}
                        />
                        <div>Temitope Oyedele</div>
                      </div>
                      <div className="break-all">temitopeoyedele@gmail.com</div>
                      <div>312340</div>
                      <div>54</div>
                      <div className="flex items-center ">
                        <BsCurrencyDollar/>
                        <div>23,432.83</div>
                      </div>
                      <div className="">
                          <div className={styles.action}>
                            <HiViewGridAdd/>
                            View More</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between font-[400]">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <FaAngleDoubleLeft
                        size={14}
                      />
                    Prev</div>
                  <div className="flex items-center gap-2 cursor-pointer">Next 
                    <FaAngleDoubleRight
                      size={14}
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}