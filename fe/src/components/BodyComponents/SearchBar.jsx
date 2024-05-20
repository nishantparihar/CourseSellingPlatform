import { useState } from "react"
import { useRecoilValue } from "recoil";
import {pageLanguage} from '../../state/atoms/atoms'



export default function SearchBar() {

    const [panel, setPanel] = useState(true);
    const language = useRecoilValue(pageLanguage)

    return (
        <>
            <div class="sticky top-0 z-10 bg-white shadow font-NotoSansDevanagari">

                {panel && <div class="mx-auto max-w-screen-2xl select-none">
                    <div class="h-12">
                        <div class="flex h-full w-full items-center justify-between">
                            <div class="flex cursor-pointer items-center justify-center pl-4 lg:pl-8">
                                <a href="https://acharyaprashant.org/hi/video-modules">
                                    <div class="lg:block ">
                                        <img class="h-6 object-contain" src="https://acharyaprashant.org/images/ic_videoseries.png" alt="content home" />
                                    </div> 
                                </a>


                                <div class="ml-6 hidden w-[36rem] flex-grow md:block">
                                    <div class="items-center rounded border border-gray-600 shadow-sm">
                                        <div class="relative"> 
                                            <div class="relative flex w-full flex-row">
                                                <button class="flex flex-row items-center whitespace-nowrap rounded-l border-r pl-2 text-xs font-normal">
                                                    <div class="text-xs font-medium text-gray-600">
                                                        <span>{language?"All":"सभी"}</span>
                                                    </div> 
                                                    <div class="px-3 text-slate-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" class="fill-current">
                                                            <path d="m.354 1.354 3.792 3.792a.5.5 0 0 0 .708 0l3.792-3.792A.5.5 0 0 0 8.293.5H.707a.5.5 0 0 0-.353.854">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </button> 
                                                <input type="search" class="h-9 w-full border-0 caret-brand-600 focus:outline-none placeholder:pl-4 placeholder:text-slate-500" placeholder= {language?"Search for video series":"वीडियो श्रृंखलाएँ खोजें"}/>  
                                                <button class="items-end rounded-r fill-current py-1 px-2 text-slate-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16">
                                                        <path fillRule="evenodd" d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6">
                                                        </path>
                                                    </svg>
                                                </button> 
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>  


                            <div class="flex h-10 content-center items-center justify-center space-x-4 pr-4 lg:pr-12">
                                <div class="cursor-pointer text-slate-900 md:hidden"  onClick={()=>{setPanel(false)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" class="fill-current">
                                        <path fillRule="evenodd" d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6">
                                        </path>
                                    </svg>
                                </div> 
                                <div class="whitespace-nowrap py-4 text-sm">
                                    <a href="https://acharyaprashant.org/hi/login?page=https%3A%2F%2Facharyaprashant.org%2Fhi%2Fvideo-modules%2Fseries%2Fcourse-series-eeb9d3">
                                        <div class="cursor-pointer rounded-md text-center  transition duration-150  bg-[#EA580C] hover:bg-[#D24115] text-white px-2 py-1">
                                            <span className="font-NotoSansDevanagari">{language?"Login":"लॉगिन करें"}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                }


                { !panel && <div class="flex justify-end h-full w-full items-center pl-1.5 pr-4" style={{}}>
                    <div class="w-full">
                        <div class="inline-flex w-full items-center py-2">
                            <div class="cursor-pointer px-2.5 py-2.5" onClick={()=>{setPanel(true)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13">
                                    <path fillRule="evenodd" d="M7.244 12.249a.89.89 0 0 1-1.238 0L.756 7.106a.845.845 0 0 1 0-1.212L6.006.75a.89.89 0 0 1 1.238 0 .845.845 0 0 1 0 1.212l-3.757 3.68h10.138c.483 0 .875.384.875.857a.866.866 0 0 1-.875.857H3.487l3.757 3.68a.845.845 0 0 1 0 1.212">
                                    </path>
                                </svg>
                            </div> 
                            <div class="-ml-2.5 flex-grow w-full">
                                <input type="search" class="border-0 bg-transparent focus:outline-none w-full" maxLength={45} autoFocus=""/>
                            </div> 
                        </div>
                    </div>
                </div>
                }

             </div>
        </>
    )
}