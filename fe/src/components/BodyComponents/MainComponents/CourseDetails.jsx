
import ShareMenu from "./CourseDatailsComponents/ShareMenu";
import CourseImageShow from "./CourseDatailsComponents/CourseImageShow"
import CourseInfo from "./CourseDatailsComponents/CourseInfo";



export default function CourseDetails() {

    
    return (
      <>
        <div className="px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-start">
                <div className="w-full shrink-0 md:w-2/5">
                    <CourseImageShow />
                    <ShareMenu />
                </div>  
                <CourseInfo />
            </div>
        </div>
        
      </>
    )
}