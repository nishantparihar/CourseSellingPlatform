import { useEffect, useState } from "react"


export default function FAQ({activeId, setActiveId, id, faq}){
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
                    <span>{faq.question}</span>
                </div> 
                <div class="h-3 w-3 text-slate-400 hover:text-slate-800 transition ease-in duration-400" style={{ transform: !showAnswer ? "rotate(180deg)" : "rotate(0)"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" class="fill-current">
                        <path fill-rule="evenodd" d="M10.207 6.207a1 1 0 0 1-1.414 0L5.5 2.914 2.207 6.207A1 1 0 0 1 .793 4.793l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414"></path>
                    </svg>
                </div>
            </div> 
            {showAnswer && <div id="markdown" class="w-full" >
                <div class="md:text-md pt-4 pr-4 leading-normal md:pr-8">
                    <span class="font-[400] text-[#475569] [&>p>*]:text-red-500" dangerouslySetInnerHTML={{__html: faq.answer}}>
                    </span>
                </div>
            </div> }
        </div> 
    )
}