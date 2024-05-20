import { Hamburger } from "./NavbarComponents/Hamburger";
import LanguageButton from "./NavbarComponents/LanguageButton";
import { pageLanguage } from "../../state/atoms/atoms";
import { useRecoilValue } from "recoil";


export function Navbar() {
    const language = useRecoilValue(pageLanguage);

    return (
      <div className="w-full h-12 bg-[#D24115] flex justify-between">
        <div className="flex items-center pl-4"> 
            <a href="https://acharyaprashant.org/hi/home"><img className="mr-2 h-8 w-8 self-center" src="https://acharyaprashant.org/images/ic_favicon.png" alt="Acharya Prashant" /></a>
        </div>
        <div className="h-full flex justify-between">
            <div className="h-full flex items-center">
                <div className="border-[2px] rounded-md px-2 py-[1.5px] text-sm text-white font-NotoSansDevanagari font-normal">{language? "Donate" :"योगदान करें"}</div>
            </div>
            <div>
                <LanguageButton />
            </div>
            <div>
            <Hamburger />
            </div>
        </div>
      </div>
    )
}