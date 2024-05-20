import Card from "./Card";
import {coursesDetails } from '../../../state/atoms/atoms'
import { useRecoilValue} from 'recoil'


export default function CardShow() {

    const coursesDets = useRecoilValue(coursesDetails);

    return (
        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3 lg:gap-x-8 lg:px-4 xl:grid-cols-4">
            {coursesDets ? coursesDets.map((courseDets)=> <Card courseDets = {courseDets} key={courseDets.id}/>) : <div />}
        </div>  
    )
}