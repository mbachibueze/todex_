
import { Switch } from "@/components/ui/switch"


export default function Settings (){
  return<>
    <div className="p-4 text-white border rounded-[10px]">
      <div>settinfs v<Switch /></div>
      <Switch id="airplane-mode" />
      
    </div>
  </>
}