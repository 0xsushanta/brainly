import type { ReactElement } from "react"

export function Sidebaritem ({text, icon}:{
    text: string
    icon: ReactElement
}){
    return <div className="flex items-center py-2 cursor-pointer hover:bg-purple-200 rounded max-w-28">
      <div className="pr-2" >
      {icon} 
      </div>
      <div>
        {text}
      </div>
    </div>
}