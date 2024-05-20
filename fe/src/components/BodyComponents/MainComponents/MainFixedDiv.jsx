import { useRecoilValue } from "recoil"
import { pageLanguage } from "../../../state/atoms/atoms"


export default function MainFixedDiv(){

    const language = useRecoilValue(pageLanguage);

    return(
        <div class="fixed bottom-0 left-0 right-0 z-50 w-full font-NotoSansDevanagari font-[500] bg-[#FFEDD5] px-4 py-[10px] lg:hidden">
            <div class="flex items-center justify-between">
                <div class="pr-0.5 font-medium text-slate-700">
                    <span>{language ? "Read 130+ eBooks in App" : "130+ ईबुक्स ऍप में पढ़ें"}</span>
                </div> 
                <div class="text-xs md:text-sm">
                    <button class="flex items-center px-7 py-3 rounded-full bg-[#EA580C] hover:bg-[#D24115] hover:text-white shadow-none h-full text-white" onClick={()=>{window.open('https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks&pli=1', '_blank')}}>
                        <div class="flex items-center justify-center whitespace-nowrap">
                            <div class="mr-1.5 h-[14px] w-[14px] text-white md:h-4 md:w-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="fill-current">
                                    <path fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m-2.5-3.258h5M10 8.129l-2 2.065m0 0L6 8.129m2 2.065V4"></path>
                                </svg>
                            </div> 
                            <span>{language ? "Download App" : "ऐप डाउनलोड करें"}</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}