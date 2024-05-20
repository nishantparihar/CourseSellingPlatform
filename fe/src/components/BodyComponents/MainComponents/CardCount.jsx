
import { useRecoilValue} from 'recoil'
import {coursesDetails, pageLanguage } from '../../../state/atoms/atoms'


export default function CardCount() {

    const coursesDets = useRecoilValue(coursesDetails);
    const language = useRecoilValue(pageLanguage);

    return (
      <>
        <div class="px-4 lg:px-8">
            <div>
                <div class="mt-8 text-lg font-medium md:mt-12 md:text-xl lg:mt-16">
                    <span class="font-NotoSansDevanagari font-[500]">{language? "Video Series" :"वीडियो श्रृंखलाएँ"} ({coursesDets ? coursesDets.length : 7})</span>
                </div> 
                <div class="mt-1 h-[0.5px] w-full bg-gray-300 md:mt-2">
                </div>
            </div>
        </div>
      </>
    )
}