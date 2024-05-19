import SectionItem from "./SectionItem"




export default function SectionItems({sectionItems}) {

    return (
      <>
        <div class="flex flex-col">
            {sectionItems.map((sectionItemInfor, index)=> <SectionItem key={index} sectionItemInfo = {sectionItemInfor} />)}

        </div>
      </>
    )
}