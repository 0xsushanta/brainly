import { useEffect } from "react";
import { Share } from "../icon/Share";
interface CardProps {
    title: string
    link: string
    type: "youtube"| "x"
}
export function Card({title, link, type}: CardProps) {
      useEffect(() => {
    // load twitter script only once
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup
    };
  }, []);
    return <div className="bg-white shadow-md rounded-md outline-slate-100 p-8 max-w-72 border min-h-48 min-w-72">
        <div className="flex justify-between items-center">
            <div className="flex items-center text-md">
                <div className="text-gray-200 pr-1">
                    <Share />
                </div>
                {title}
            </div>
            <div className="flex items-center">
                <div className="pr-2 text-gray-200" >
                    <Share />
                </div>
                <div className="pr-2 text-gray-200">
                    <Share />
                </div>

            </div>
        </div>
        <div className="pt-4" >
            {type==="x" && <blockquote className="twitter-tweet"> <a href={link}>September 4, 2025</a></blockquote> 
            }

            { type==="youtube" && <iframe className="w-full" src={link.replace("watch","embed").replace("?v=", "/")} title="What is ReactJS?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

        </div>
    </div>
}