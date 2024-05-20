import './App.css'
import Header  from './Header'
import Body from './Body'
import Footer from './Footer'
import { useEffect } from 'react'
import { coursesDetails, seriesDetails } from './state/atoms/atoms'
import { useSetRecoilState } from 'recoil'
import axios from 'axios'


function App() {

  const setCoursesDetails = useSetRecoilState(coursesDetails);
  const setSeriesDetails = useSetRecoilState(seriesDetails);

  useEffect(()=>{

      try{

          axios.get("https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3")
          .then((res)=>{
              if(res && res.status == 200 && res.data){
                  if(res.data.courses && res.data.details){
                      setCoursesDetails(res.data.courses);
                      setSeriesDetails(res.data.details);
                  }
              }
          })
          .catch((e)=>{
            console.log("Unable to fetch data");
          })

      }catch(e){
        console.log("Server Error")
      }

  }, [])

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default App
