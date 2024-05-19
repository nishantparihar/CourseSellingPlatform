



  
export default function SectionItem({sectionItemInfo}) {
 
    return (
      <>
        <a href={sectionItemInfo.sectionItemLink} class="mb-2.5 text-slate-300 hover:cursor-pointer hover:text-brand-700">
            <span class="font-en svelte-t3mcl">{sectionItemInfo.sectionItemHeader}</span>
        </a> 
      </>
    )
}