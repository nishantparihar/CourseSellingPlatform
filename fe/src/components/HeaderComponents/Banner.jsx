import { useRecoilValue } from "recoil"
import {pageLanguage} from '../../state/atoms/atoms'


export default function Banner() {

    const language = useRecoilValue(pageLanguage);

    return (
      <>
        <div class="flex w-full items-center justify-between bg-slate-800 px-4 py-2 lg:justify-center lg:py-3.5 font-NotoSansDevanagari">
            <div class="flex lg:items-center">
                <div class="mr-2 mt-0.5 h-4 w-4 shrink-0 rounded-full border border-white bg-red-600 lg:mt-0"></div> 
                <div class="text-sm text-white lg:text-lg">
                    <span>
                        {language ? "Acharya Prashant is dedicated to building a brighter future for you":"आचार्य प्रशांत आपके बेहतर भविष्य की लड़ाई लड़ रहे हैं"}
                    </span>
                </div>
            </div> 
            <div class="pl-5 text-sm">
                <a class="flex w-[135px] items-center rounded-md border border-gray-200 px-2 py-1 text-white lg:py-0.75" href="https://acharyaprashant.org/hi/contribute/contribute-work?cmId=m00071">
                    <span>{language ? "Extend your hand" :"अपना कर्तव्य निभाएँ"}</span>
                </a>
            </div>
        </div>
      </>
    )
}