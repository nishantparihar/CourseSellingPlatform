import LeftSectionFAQ from "./FAQComponents/LeftSectionFAQ";
import RightSectionFAQ from "./FAQComponents/RightSectionFAQ";
import { useEffect } from "react";
import axios from "axios";
import { faqs } from '../../../state/atoms/atoms'
import { useSetRecoilState } from 'recoil'




export default function FAQSection(){
    const setFaqs = useSetRecoilState(faqs);


    useEffect(()=>{

        try{
  
            axios.get("https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=hindi")
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
  
    }, [])


    return (

        <div class="bg-slate-50 px-4 py-16 md:px-4 lg:px-20 font-NotoSansDevanagari">
            <div class="md:flex">
                <LeftSectionFAQ />
                <RightSectionFAQ />
            </div>
        </div>

    )
}