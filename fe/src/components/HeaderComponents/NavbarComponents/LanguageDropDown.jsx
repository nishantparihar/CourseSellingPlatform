import { useRecoilState } from "recoil"
import { pageLanguage } from "../../../state/atoms/atoms"


export default function LanguageDropDown(){
    const [language, setLanguage] = useRecoilState(pageLanguage);

    return <>
            <div class="absolute z-20 left-1/2 mt-4 -translate-x-[45px] transform whitespace-nowrap rounded-lg shadow-lg">
                <div class="flex flex-col items-start rounded-md bg-white py-1.5">
                    <div class="w-full cursor-pointer px-5 py-2 text-base font-medium hover:bg-slate-100 " onClick={()=>{setLanguage(false)}}>
                        <div className={language ? "text-slate-900": "text-[#D24115]"}>हिन्दी</div> 
                    </div>
                    <div class="w-full cursor-pointer px-5 py-2 text-base font-medium hover:bg-slate-100 text-slate-900" onClick={()=>{setLanguage(true)}}>
                        <div className={!language ? "text-slate-900": "text-[#D24115]"}>ENGLISH</div> 
                    </div>
                </div>
            </div>
        </>
}