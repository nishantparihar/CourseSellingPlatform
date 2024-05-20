import React from "react"
import { useState } from "react"
import hindiSvg from "./hindi.svg"
import englishSvg from "./english.svg"
import LanguageDropDown from "./LanguageDropDown"
import { useRecoilValue } from "recoil"
import { pageLanguage } from "../../../state/atoms/atoms"



export default function LanguageButton() {
    const [flag, setFlag] = useState(true);
    const curLanguage = useRecoilValue(pageLanguage);
    
  return (
    <div className="h-full flex items-center justify-between ml-3 cursor-pointer" onClick={()=>setFlag(!flag)}>
        <div className="par text-white flex justify-between items-center">

            <div className="relative font-NotoSansDevanagari">
                <div>
                    { curLanguage ? <img src={englishSvg} alt="englishSvg" /> :  <img src={hindiSvg} alt="hindiSvg" />}
                </div>
                {!flag ? <LanguageDropDown /> : ""}
            </div>

            <div className="px-1 transition ease-in-out duration-500" style={{ transform: flag ? "rotate(0)" : "rotate(180deg)"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" class="fill-current"><path d="M.208.255A.7.7 0 0 0 0 .796a.9.9 0 0 0 .238.582l3.754 4.115q.317.337.659.45.342.111.688.005.348-.107.664-.455l3.744-4.115A.8.8 0 0 0 10 .802a.72.72 0 0 0-.213-.547A.75.75 0 0 0 9.222 0H.773a.75.75 0 0 0-.565.255"></path></svg>
            </div>
        </div>  
    </div>
  )
}
