import { useState } from "react";
import FAQ from "./FAQ";
import FAQDevider from "./FAQDevider";


export default function RightSectionFAQ(){
    const [activeId, setActiveId] = useState(null);
    return(
    <div class="w-full md:pl-24">
        <FAQ activeId = {activeId} setActiveId = {setActiveId} id={1}/>
        <FAQDevider />
        <FAQ activeId = {activeId} setActiveId = {setActiveId} id={2}/>
        <FAQDevider />
        <FAQ activeId = {activeId} setActiveId = {setActiveId} id={3}/>
        <FAQDevider />
        <FAQ activeId = {activeId} setActiveId = {setActiveId} id={4}/>
        <FAQDevider />
    </div>
    )
}