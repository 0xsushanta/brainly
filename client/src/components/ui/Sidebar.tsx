import { BrainIcon } from "../../icon/BrainIncon";
import { TwitterIcon } from "../../icon/TwiteerIcon";
import { YoutubeIcon } from "../../icon/YoutubeIcon";
import { Sidebaritem } from "././Sidebaritem";

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed top-0 left-0 pl-4">
        <div className="flex pt-8 font-bold text-2xl items-center text-purple-600">
            <div className="pr-2 text-purple-600">
            <BrainIcon />
            </div>
           Brainly
        </div>
       <div className=" pt-8 pl-4">
        <Sidebaritem text="twitter" icon={<TwitterIcon />} />
       <Sidebaritem text="youtube" icon={<YoutubeIcon />} />
       </div>
    </div>
}
