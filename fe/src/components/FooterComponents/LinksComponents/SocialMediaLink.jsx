

export default function SocialMediaLink({smInfo}) {

    return (
      <>
        <div class="text-slate-300 hover:text-[#EA580C]">
            <a href={smInfo.link} target="_blank" dangerouslySetInnerHTML={{ __html: smInfo.svg }}>               
            </a>
          </div>
      </>
    )
}