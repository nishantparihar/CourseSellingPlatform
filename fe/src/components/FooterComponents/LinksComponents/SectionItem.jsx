



  
export default function SectionItem({sectionItemInfo}) {
 
    return (
      <>
        <a href={sectionItemInfo.sectionItemLink} class="mb-2.5 text-slate-300 hover:cursor-pointer hover:text-[#AC4115]">
            <span>{sectionItemInfo.sectionItemHeader}</span>
        </a> 
      </>
    )
}