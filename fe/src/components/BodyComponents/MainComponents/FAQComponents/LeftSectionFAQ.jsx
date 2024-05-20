import { useRecoilValue } from "recoil"
import { pageLanguage } from "../../../../state/atoms/atoms"



export default function LeftSectionFAQ(){
    const language = useRecoilValue(pageLanguage);

    return(
    <div class="pb-10 md:w-1/3 md:pb-0">
        <div class="text-lg font-medium">
            <span>{language ? "FAQs" : "अक्सर पूछे जाने वाले प्रश्न"}</span>
        </div> 
        <div class="pt-1">
            <span class="font-[400] text-[16px]">
                {language ?                
                <p>
                    Can’t find the answer you’re looking for? Reach out to our
                    <a target="_blank" href="https://acharyaprashant.org/hi/technical-support">
                        <span className="text-[#DD6B20]"> support </span>
                    </a>team.
                </p>
                :
                <p>आप जिस उत्तर की तलाश कर रहे हैं वह नहीं मिल रहा है? कृपया हमारी 
                    <a target="_blank" href="https://acharyaprashant.org/hi/technical-support">
                        <span className="text-[#DD6B20]"> सपोर्ट </span>
                    </a> टीम से संपर्क करें।
                </p>
                }
            </span>
        </div>
    </div>
    )
}