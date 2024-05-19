import Copyright from "./components/FooterComponents/Copyright";
import Devider from "./components/FooterComponents/Devider";
import Links from "./components/FooterComponents/Links";



export default function Footer() {

    return (
      <>

        <div class="bg-slate-900 px-4 pb-24 md:px-0 md:pb-7 md:pt-10">
          <Links />
          <Devider />
          <Copyright />
        </div>


      </>
    )
}