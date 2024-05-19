
import { useState } from "react"

export default function CourseInfo(){
    const [showReadMore, setShowReadMore] = useState(true);
    return (

            <div className="flex flex-col self-stretch pt-4 text-sm md:pl-4 md:pt-0 lg:text-lg">
                <div className="text-lg font-medium text-gray-title lg:text-xl">
                    <span className="font-NotoSansDevanagari font-[500]">संतों की सीख पर आधारित श्रृंखला</span>
                </div> 
                <div className="text-justify text-base text-gray-subtitle md:pr-4">
                    <div className="hidden md:block">
                        <span className="font-NotoSansDevanagari font-[500] text-[#6A5569]">जब-जब समाज में धर्म के प्रति अनादर बढ़ा है और आम-आदमी की चेतना को पाखंड ने घेरा है, तब-तब संतों ने अपने वचनों से हमारे मन को शीतलता प्रदान की है और सामाजिक चेतना को शुद्ध किया है।
                                                            इस श्रृंखला में आचार्य जी ने संत कबीरदास, तुलसीदास, पलटूदास, दादू दयाल, सहजोबाई, मलूकदास, दरियादास, रविदास आदि संतों की वाणी पर चर्चा की है। जानिए उनके वचनों की जीवन में सार्थकता को आचार्य प्रशांत के साथ इस आसान वीडियो कोर्स में।
                        </span>
                    </div>
                
                    {showReadMore ? 
                    <div className="md:hidden">
                        <span className="font-NotoSansDevanagari font-[500] text-[#6A5569]">जब-जब समाज में धर्म के प्रति अनादर बढ़ा है और आम-आदमी की चेतना को पाखंड ने घेरा है, तब-तब संतों ने अपने वचनों से हमारे मन को शीतलता प्रदान की है और सामाजिक...</span> 
                        <button className="cursor-pointer text-[#ed7955] hover:text-[#9b5946]" onClick={()=> setShowReadMore(false)}>
                            <span className="font-NotoSansDevanagari font-[500]">और पढ़ें</span>
                        </button>
                    </div> :
                    <div class="md:hidden">
                        <span class="font-NotoSansDevanagari font-[500] text-[#6A5569]">जब-जब समाज में धर्म के प्रति अनादर बढ़ा है और आम-आदमी की चेतना को पाखंड ने घेरा है, तब-तब संतों ने अपने वचनों से हमारे मन को शीतलता प्रदान की है और सामाजिक चेतना को शुद्ध किया है।

                                                                                                            इस श्रृंखला में आचार्य जी ने संत कबीरदास, तुलसीदास, पलटूदास, दादू दयाल, सहजोबाई, मलूकदास, दरियादास, रविदास आदि संतों की वाणी पर चर्चा की है। जानिए उनके वचनों की जीवन में सार्थकता को 
                                                                                                            आचार्य प्रशांत के साथ इस आसान वीडियो कोर्स में।
                        </span> 
                        <button class="cursor-pointer text-[#ed7955] hover:text-[#9b5946]"  onClick={()=> setShowReadMore(true)}>
                            <span class="font-NotoSansDevanagari font-[500] ">कम दिखाएं</span>
                        </button>
                    </div>
                    }

                </div>
            </div>

    )
}