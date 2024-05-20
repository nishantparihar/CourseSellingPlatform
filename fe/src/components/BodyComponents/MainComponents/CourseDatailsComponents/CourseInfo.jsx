import { useState } from "react"
import { useRecoilValue} from 'recoil'
import { seriesDetails } from '../../../../state/atoms/atoms'




export default function CourseInfo(){
    const [showReadMore, setShowReadMore] = useState(true);
    const seriesDets = useRecoilValue(seriesDetails);

    return (

            <div className="flex flex-col self-stretch pt-4 text-sm md:pl-4 md:pt-0 lg:text-lg">
                <div className="text-lg font-medium lg:text-xl">
                    <span className="font-NotoSansDevanagari font-[500]">{seriesDets.subtitle ? seriesDets.subtitle : ""}</span>
                </div> 
                <div className="text-justify text-base md:pr-4">
                    <div className="hidden md:block">
                        <span className="font-NotoSansDevanagari font-[500] text-[#6A5569]">{seriesDets.description ? seriesDets.description: ""}</span>
                    </div>
                
                    {showReadMore ? 
                    <div className="md:hidden">
                        <span className="font-NotoSansDevanagari font-[500] text-[#6A5569]">{seriesDets.description ? seriesDets.description.substring(0, 155): ""}...</span> 
                        <button className="cursor-pointer text-[#ed7955] hover:text-[#9b5946]" onClick={()=> setShowReadMore(false)}>
                            <span className="font-NotoSansDevanagari font-[500]">और पढ़ें</span>
                        </button>
                    </div> :
                    <div class="md:hidden">
                        <span class="font-NotoSansDevanagari font-[500] text-[#6A5569]">{seriesDets.description ? seriesDets.description : ""}</span> 
                        <button class="cursor-pointer text-[#ed7955] hover:text-[#9b5946]"  onClick={()=> setShowReadMore(true)}>
                            <span class="font-NotoSansDevanagari font-[500] ">कम दिखाएं</span>
                        </button>
                    </div>
                    }

                </div>
            </div>

    )
}