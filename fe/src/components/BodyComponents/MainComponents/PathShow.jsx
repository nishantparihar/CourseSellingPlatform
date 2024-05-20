import { useRecoilValue } from "recoil"
import { pageLanguage, seriesDetails } from '../../../state/atoms/atoms'


export default function PathShow() {
    const language = useRecoilValue(pageLanguage);
    const seriesDets = useRecoilValue(seriesDetails);
    return (
      <>
        <div class="hidden px-4 pt-4 md:block lg:px-8">
            <div class="flex w-full flex-wrap items-baseline justify-start">
                <div class="mr-1 text-sm cursor-pointer hover:text-[#EA580C]">
                    <span class="font-NotoSansDevanagari font-black text-[13px] text-[#5D697B]">{language?"Home":"होम"}</span>
                </div> 
                <div class="mr-1 px-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" class="fill-current">
                        <path fill-rule="evenodd" d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0">
                        </path>
                    </svg> 
                </div>
                <div class="mr-1 text-sm ">
                    <span class="font-NotoSansDevanagari font-semibold text-[13px] text-[#5D697B]">{seriesDets.title ? seriesDets.title : ""}</span>
                </div> 
            </div>
        </div>
        
      </>
    )
}