import LeftSectionFAQ from "./FAQComponents/LeftSectionFAQ";
import RightSectionFAQ from "./FAQComponents/RightSectionFAQ";
import { useEffect } from "react";
import axios from "axios";
import { faqs, pageLanguage } from '../../../state/atoms/atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'




export default function FAQSection(){
    const setFaqs = useSetRecoilState(faqs);
    const language =useRecoilValue(pageLanguage);

    useEffect(()=>{

        try{
            const fetchLanguage = language ? "english" : "hindi";
            axios.get(`https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=${fetchLanguage}`)
            .then((res)=>{
                if(res && res.status == 200 && res.data){
                    setFaqs(res.data);
                }
            })
            .catch((e)=>{
              console.log("Unable to fetch data");
            })
  
        }catch(e){
          console.log("Server Error")
        }
  
    }, [language]);


    return (

        <div class="bg-slate-50 px-4 py-16 md:px-4 lg:px-20 font-NotoSansDevanagari">
            <div class="md:flex">
                <LeftSectionFAQ />
                <RightSectionFAQ />
            </div>
        </div>

    )
}