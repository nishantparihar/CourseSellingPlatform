import SectionHeader from "./SectionHeader";
import SectionItems from "./SectionItems";


export default function Section({sInfo}) {

    return (
      <div className="font-NotoSansDevanagari">
        <SectionHeader header= {sInfo.sectionHeader}/>
        <SectionItems sectionItems = {sInfo.sectionItems} />
      </div>
    )
}