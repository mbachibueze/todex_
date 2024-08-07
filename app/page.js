// Ensure consistent import statements
"use client"

import { Inter } from "next/font/google";
import LogIn from "./logIn/page";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <>
    <div  className="flex justify-between">
      <div className=""  >
        <LogIn/>
      </div>
    </div>
    </>;
}
