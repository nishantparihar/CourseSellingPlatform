import SectionHeader from "./SectionHeader";
import SocialMediaLink from "./SocialMediaLink";
import {socialMediaInfoEng, socialMediaInfoHin} from "./socialMediaInfo"



export default function SocialMedia() {

    return (
      <div>
            <SectionHeader header ={"SOCIAL MEDIA"}/>
            <div class="mb-6 flex flex-col">
                <div class="mb-2.5 text-slate-300">
                    <span class="font-en svelte-t3mcl">For English</span>
                </div>
                <div class="flex space-x-2">
                    {socialMediaInfoEng.map((smInfo, ind)=> <SocialMediaLink key={ind} smInfo={smInfo} />)}
                </div>
            </div>
            <div class="flex flex-col">
                <div class="mb-2.5 text-slate-300">
                    <span class="font-en svelte-t3mcl">For English</span>
                </div>
                <div class="flex space-x-2">
                    {socialMediaInfoHin.map((smInfo, ind)=> <SocialMediaLink key={ind} smInfo={smInfo} />)}
                </div>
            </div>

      </div>
    )
}