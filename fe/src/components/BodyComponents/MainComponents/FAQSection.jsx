import LeftSectionFAQ from "./FAQComponents/LeftSectionFAQ";
import RightSectionFAQ from "./FAQComponents/RightSectionFAQ";



export default function FAQSection(){
    return (

        <div class="bg-slate-50 px-4 py-16 md:px-4 lg:px-20 font-NotoSansDevanagari">
            <div class="md:flex">
                <LeftSectionFAQ />
                <RightSectionFAQ />
            </div>
        </div>

    )
}