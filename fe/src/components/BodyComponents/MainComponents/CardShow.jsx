import Card from "./Card";


export default function CardShow() {

    return (
        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3 lg:gap-x-8 lg:px-4 xl:grid-cols-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                
        </div>  
    )
}