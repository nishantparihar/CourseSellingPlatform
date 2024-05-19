import Backward from "./MainComponents/Backward";
import CardCount from "./MainComponents/CardCount";
import CardShow from "./MainComponents/CardShow";
import CourseDetails from "./MainComponents/CourseDetails";
import FAQSection from "./MainComponents/FAQSection";
import MainFixedDiv from "./MainComponents/MainFixedDiv";
import PathShow from "./MainComponents/PathShow";


export default function Main() {

    return (
      <>
        <PathShow />
        <Backward />
        <CourseDetails />
        <CardCount />
        <CardShow />
        <FAQSection />
        <MainFixedDiv />
        
      </>
    )
}