'use client'
import { UsersInflowChart } from "@components/userInflowChart";
import styles from "./page.module.css";
import Image from "next/image";
import { BsCurrencyDollar } from "react-icons/bs";



// React Icons
import { IoTrendingUpOutline } from "react-icons/io5";
import { IoTrendingDownOutline } from "react-icons/io5";
import { RevenueChart } from "@components/revenueChart";
import { RevenuePieChart } from "@components/revenuePieChart";





export default function Dashboard () {
  return <div className="md:p-4  text-[#1b2450] bg-white flex flex-col gap-[20px]">
    <div className={styles.tnxContainer}> 
      {/* Start tabs */}
      <div className={styles.dashTab}>
        <div className="flex items-center w-full justify-between">
          <div className="font-bold text-[20px]">Stat Tabs</div>
          <div className="flex items-center text-[11px] font-bold gap-[3px] bg-green-600 text-white p-1 px-2 rounded-2xl">
            <IoTrendingUpOutline
            style={{ stroke: 'white', strokeWidth: 2 }}/>
            10.0%</div>
        </div>
        <div className="font-semibold text-[20px]">350</div>
        <div className="font-light text-gray-400">Statistics</div>
      </div>

      {/* Total Transactions */}
      <div className={styles.dashTab}> 
        <div className="flex  items-center justify-between">
          <div className="font-bold text-[17px] flex items-center justify-between">Total Transactions</div>
          <div className="flex items-center text-[11px] font-bold gap-[3px] bg-red-500 text-white p-1 px-2 rounded-2xl">
            <IoTrendingDownOutline
            style={{ stroke: 'white', strokeWidth: 2 }}/>
            9.73%
            </div>
        </div>
          <div className="font-semibold text-[16px] flex items-center"><BsCurrencyDollar/>73,823</div>
          <div className="font-light text-gray-400">Last 24 Hours</div>
      </div>
      
      {/* Revenue Today */}
      <div className={styles.dashTab}>
        <div className="flex items-center gap-[10px] justify-between">
          <div className="font-bold text-[16px]"> Revenue Today</div>
          <div className="flex items-center text-[11px] font-bold gap-[3px] bg-green-600 text-white p-1 px-2 rounded-2xl">
            <IoTrendingUpOutline
            style={{ stroke: 'white', strokeWidth: 2 }}/>
            10.0%
            </div>
        </div>
          <div className="flex items-center font-semibold text-[16px]">
            <BsCurrencyDollar/>
            312,213.23
          </div>
          <div className="font-light text-gray-400">Last 24 Hours</div>
       </div>

      {/* new Users */}
      <div className={styles.dashTab}>
        <div className="flex justify-between items-center">
          <div className="font-bold text-[16px]">New Users</div>
          <div className="flex items-center text-[11px] font-bold gap-[3px] bg-gray-500 text-white p-1 px-2 rounded-2xl">
            0.00%
            </div>
        </div>
          <div className="font-semibold text-[16px]">0</div>
          <div className="font-light text-gray-400">Last 7 days</div>
      </div>
    </div>
    
    <div className=" flex flex-col md:flex-row gap-[20px] justify-between">
        <div className={styles.shadow}>
          <UsersInflowChart/>
        </div>
        <div className={styles.shadow}>
          <RevenueChart/>
        </div>
        <div className={styles.shadow}>
          <RevenuePieChart/>
        </div>
      </div>
  </div>
}