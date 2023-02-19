import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
    return (
        <div>
            <div className="flex items-center justify-between p-5">
                <Link href="/" className="text-[#F7AB0A] flex items-center">
                    <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-[#F7AB0A]" />
                    Go to website
                </Link>

                <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]">
                    <h1 className="font-bold text-white">
                        Want more details & home decor insights?
                        👉
                    </h1>
                    <Link href="https://www.instagram.com" className="text-[#F7AB0A] font-bold ml-2">
                    www.google.com
                </Link>
                </div>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    );
}

export default StudioNavbar;