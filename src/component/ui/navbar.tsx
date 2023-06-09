import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Navbar() {
    const router = useRouter();
    console.log(router.pathname);

    return (
        <nav className="backdrop-blur-sm bg-white/30 fixed w-full z-20 top-0 left-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-purple-600 dark:text-white">Nebyula</span>
                </a>
                <div className="flex md:order-2">
                    <UserButton />
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <Link href="/" className={`block py-2 pl-3 pr-4 text-gray-900 rounded ${router.pathname === "/" ? "text-purple-500" : ""
                                }  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}
                                aria-current={router.pathname === "/" ? "page" : undefined}>Home</Link>
                        </li>
                        <li>
                            <Link href="/availabilty" className={`block py-2 pl-3 pr-4 text-gray-900 rounded ${router.pathname === "/availabilty" ? "text-purple-500" : ""
                                } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 `}
                                aria-current={router.pathname === "/availabilty" ? "page" : undefined}>Availabilty</Link>
                        </li>
                        <li>
                            <Link href="/invitations" className={`block py-2 pl-3 pr-4 text-gray-900 rounded ${router.pathname === "/invitations" ? "text-purple-500" : ""
                                } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 `}
                                aria-current={router.pathname === "/invitations" ? "page" : undefined}>Invitations</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}