import { useEffect, useState } from "react"



export default function FAQ({activeId, setActiveId, id}){

    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(()=>{
        if(showAnswer){
            setActiveId(id);
        }

    }, [showAnswer])

    useEffect(()=>{
        if(activeId != id){
            setShowAnswer(false);
        }

    }, [activeId])

    return (
        <div>
            <div class="flex items-center justify-between md:cursor-pointer" onClick={()=>{setShowAnswer(!showAnswer)}}>
                <div class="pr-2  font-medium text-[#232d3a]">
                    <span> कोई भी वीडियो श्रृंखला आचार्य प्रशांत के यूट्यूब वीडियो से कैसे अलग है?</span>
                </div> 
                <div class="h-3 w-3 text-slate-400 hover:text-slate-800 transition ease-in duration-1000" style={{ transform: !showAnswer ? "rotate(180deg)" : "rotate(0)"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" class="fill-current">
                        <path fill-rule="evenodd" d="M10.207 6.207a1 1 0 0 1-1.414 0L5.5 2.914 2.207 6.207A1 1 0 0 1 .793 4.793l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414"></path>
                    </svg>
                </div>
            </div> 
            {showAnswer && <div id="markdown" class="w-full" >
                <div class="md:text-md pt-4 pr-4 leading-normal md:pr-8">
                    <span class="font-[400] text-[#475569]">
                        <p>वीडियो श्रृंखला के सभी वीडियो-सत्र सिर्फ़ इस प्लेटफार्म पर उपलब्ध हैं। (कुछ वीडियो के कुछ हिस्से किन्हीं सोशल मीडिया प्लेटफॉर्म पर उपलब्ध हो सकते हैं। हालाँकि, इनकी संरचना, परीक्षण और प्रक्रियाओं के साथ पूरा पाठ्यक्रम इस प्लेटफॉर्म के अलावा कहीं और उपलब्ध नहीं है।)</p>
                    </span>
                </div>
            </div> }
        </div> 
    )
}