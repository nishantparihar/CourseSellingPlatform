


export function Hamburger(){
    return (
        <div className="h-full flex items-center">
            <div className="mx-2 flex cursor-pointer items-center px-2 py-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" class="fill-current">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.826" d="M1 1.609h20M1 8h20M1 14.391h20">
                    </path>
                </svg> 
                <div class="hidden pl-2 mb-1 lg:block">
                    <span class="text-[12px]">मेन्यू</span>
                </div>
            </div>

        
        </div>

    )
}