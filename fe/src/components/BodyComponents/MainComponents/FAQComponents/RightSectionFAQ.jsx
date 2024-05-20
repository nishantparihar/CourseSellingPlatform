import { useState } from "react";
import FAQ from "./FAQ";
import FAQDevider from "./FAQDevider";
import { useRecoilValue } from "recoil";
import { faqs } from "../../../../state/atoms/atoms";


export default function RightSectionFAQ(){
    const [activeId, setActiveId] = useState(null);
    const faqsList = useRecoilValue(faqs);

    return(
    <div class="w-full md:pl-24">
        {faqsList.map((faq, ind)=>{
            
            if(ind != faqsList.length - 1)
            { return <>
                    <FAQ activeId = {activeId} setActiveId = {setActiveId} key={ind} id={ind+1} faq={faq}/>
                    <FAQDevider key={Math.random()} />
                    </>
            }

            return <>
                    <FAQ activeId = {activeId} setActiveId = {setActiveId} key={ind} id={ind+1} faq={faq}/>
                    </>
                    
        })}
    </div>
    )
}