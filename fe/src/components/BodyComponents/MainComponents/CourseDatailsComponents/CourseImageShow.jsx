


export default function ImageShow(){
    return (
        <div className="aspect-[16/9] w-full">
            <div className="relative h-full w-full overflow-hidden rounded">
                <img className="h-full w-full object-cover" src="https://cimg.acharyaprashant.org/images/img-4337ee73-d8a3-4c8b-951b-d09a5a6468d3/10/image.jpg" /> 
                <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white"> 
                </div> 
                <img className="absolute object-contain h-10 md:h-14 right-1 bottom-1" src="https://acharyaprashant.org/images/ic_apsignature_hindi.png" />
            </div>
        </div> 
    )
}