
import { useRecoilValue} from 'recoil'
import { seriesDetails } from '../../../../state/atoms/atoms'
import { useEffect, useMemo } from 'react';


export default function ImageShow(){
    const seriesDets = useRecoilValue(seriesDetails);

    const imgSrc = useMemo(()=>{
        let imgSrc;
        if(seriesDets && seriesDets.thumbnail){
            imgSrc = `${seriesDets.thumbnail.domain}/${seriesDets.thumbnail.basePath}/${seriesDets.thumbnail.qualities[0]}/${seriesDets.thumbnail.key}`
        }
        return imgSrc;
    }, [seriesDets])

    return (
        <div className="aspect-[16/9] w-full">
            <div className="relative h-full w-full overflow-hidden rounded">
                <img className="h-full w-full object-cover" src={imgSrc} /> 
                <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white"> 
                </div> 
                <img className="absolute object-contain h-10 md:h-14 right-1 bottom-1" src="https://acharyaprashant.org/images/ic_apsignature_hindi.png" />
            </div>
        </div> 
    )
}