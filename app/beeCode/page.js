// Ensure consistent import statements
"use client"

import Dashboard from "./dashboard/page";




export default function Home() {
  return <>
    <div  className="flex justify-between">
      <div className=" w-full p-4"  >
        <Dashboard/>
      </div>
    </div>
    </>;
}
