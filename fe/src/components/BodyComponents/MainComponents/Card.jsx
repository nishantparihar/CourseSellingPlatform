import { useRecoilValue } from "recoil";
import { pageLanguage } from "../../../state/atoms/atoms";
import { useMemo } from "react";



export default function Card({courseDets}){

    const language = useRecoilValue(pageLanguage);

    

    const timeIndiacator = useMemo(() => {
        return { 
            H: language ? "hours" : "घंटे",
            M: language ? "minutes" : "मिनट", 
        }
    }, [language])

    const courseLanguage = useMemo(() => (courseDets.language === "hindi") ? ( language ? "Hindi" : "हिन्दी" ) : (language ? "English" : "इंग्लिश"), [language, courseDets]);
   
    return (
        <a href={`https://acharyaprashant.org/hi/video-modules/module/${courseDets.id}`} className="flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 lg:rounded-lg lg:hover:shadow">
            <div className="flex flex-col space-y-2 font-NotoSansDevanagari font-[500]">
                <div className="self-start  pb-2">
                    <div className="bg-[#94A3B8] pl-2 rounded-md">
                        <span className=" text-white text-[14px]">भाग {courseDets.series.order.seq}</span>&nbsp;
                    </div>
                </div> 
                <div className="flex w-full flex-col text-left">
                    <div>
                        <div className="text-lg font-medium leading-normal text-gray-900">
                            <span>{courseDets.title}</span>
                        </div> 
                        <div className="text-sm leading-normal text-gray-500 lg:text-base">
                            <span>{courseDets.subtitle}</span>
                        </div> 
                        <div className="pt-1 text-xs text-gray-500 lg:text-sm">
                            <span>{parseInt(courseDets.courseHours) ? <span>{parseInt(courseDets.courseHours)} {timeIndiacator.H}</span>: ""}  {Math.ceil(60*(courseDets.courseHours % 1))} {timeIndiacator.M}</span>
                        </div> 
                        <div className="pt-1 text-xs text-gray-500 lg:text-sm">
                            <span>{language ? "Contribution" : "सहयोग राशि"}: ₹{courseDets.amount}</span> 
                            <del>
                                <span className="pl-1">
                                    <span>₹{courseDets.originalAmount}</span>
                                </span>
                            </del>
                        </div>
                    </div> 
                    <div className="mt-2 flex flex-wrap text-xs">
                        <div className="mr-1">
                            <div className="rounded px-1.5 pt-1 text-xs text-slate-700 bg-[#C7E6F8]"> 
                                <span>{courseLanguage}</span>
                            </div> 
                        </div>
                    </div>
                </div> 
                <div>
                    <div className="inline-flex items-center space-x-3 text-xs font-medium">
                        <div className="cursor-pointer rounded-md text-center transition duration-150 text-[#ed7955] hover:text-[#9b5946]" onClick={()=>{window.location.href = 'https://acharyaprashant.org/hi/video-modules/series/course-series-eeb9d3'}}>
                            <span>{language ? "ADD TO CART" : "कार्ट में जोड़ें"}</span>
                        </div> 
                        <div className="self-stretch  bg-gray-400">
                            <div className="h-full w-[0.5px] "></div>
                        </div> 
                        <div className="cursor-pointer rounded-md text-center transition duration-150 text-[#ed7955] hover:text-[#9b5946]" onClick={()=>{window.location.href = 'https://acharyaprashant.org/hi/login?page=https%3A%2F%2Facharyaprashant.org%2Fhi%2Fvideo-modules%2Fseries%2Fcourse-series-eeb9d3'}} >
                            <span>{language ? "ENROL" : "एनरोल करें"}</span>
                        </div>
                    </div>
                </div> 
            </div> 
            <div className="pt-2 ">
                <div className=" h-[0.5px] w-full bg-gray-300"></div>
            </div>
        </a>
    )
}