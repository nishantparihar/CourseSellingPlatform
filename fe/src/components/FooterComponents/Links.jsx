import Section from './LinksComponents/Section'
import sectionInfo from './LinksComponents/sectionInfo'
import SocialMedia from './LinksComponents/SocialMedia'


export default function Links() {

    
    return (
      <>
        <div class="text-md flex w-full flex-col space-y-5 px-4 pt-8 md:flex-row md:justify-center md:space-x-4 md:space-y-0 md:pt-0 lg:space-x-16">
            {sectionInfo.map((sInfo, ind)=><Section key={ind} sInfo = {sInfo} />)}
            <SocialMedia />
        </div>

      </>
    )
}