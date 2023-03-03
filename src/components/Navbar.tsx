import { useState } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navbarData = [
  {
    name: "主頁",
    icon: ['', ''],
    path: "/",
    type: "page"
  },
  {
    name: "貼文",
    icon: ['', ''],
    path: "/post",
    type: "page"
  },
  {
    name: "開源專案",
    icon: ['', ''],
    path: "/project",
    type: "page"
  },
  {
    name: "關於我們",
    icon: ['', ''],
    path: "/about",
    items: [
      {
        name: "團隊介紹",
        icon: ['', ''],
        path: "/about/team",
        type: "page"
      },
      {
        name: "團隊歷史",
        icon: ['', ''],
        path: "/about/history",
        type: "page"
      },
      {
        name: "團隊成員",
        icon: ['', ''],
        path: "/about/member",
        type: "page"
      },
      {
        name: "團隊資訊",
        icon: ['', ''],
        path: "/about/info",
        type: "page"
      },
      {
        name: "洽談合作",
        icon: ['', ''],
        path: "/about/cooperation",
        type: "page"
      },
      {
        name: "團隊連結和好友情站",
        icon: ['', ''],
        path: "/about/link",
        type: "page"
      }
    ],
    type: "dropdown"
  },
  {
    name: "加入我們",
    icon: ['', ''],
    path: "/joinus",
    type: "page"
  },
  {
    name: "更新日誌",
    icon: ['', ''],
    path: "/changelog",
    type: "page"
  },
  {
    name: "開發者",
    icon: ['', ''],
    path: "/dev",
    type: "page"
  },
  {
    name: "設定",
    icon: ['', ''],
    path: "/setttings",
    type: "page"
  }
];

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className=" flex flex-wrap items-center justify-between mx-auto">
        {/* 標題 */}
        <Link onClick={() => setNavbarOpen(false)}  to="/" className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
            <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">靈萌團隊</h1>

        </Link>
        {/* 手機版Navbar */}
        <button onClick={ () => setNavbarOpen(!navbarOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className={ "w-full md:block md:w-auto " + (navbarOpen? '' : 'hidden') } id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* 選單開始 */}
            {navbarData.map((item, index) => {
              return (
                <NavLink onClick={() => setNavbarOpen(!navbarOpen)} className={({ isActive }) => (isActive ? " text-white" : "text-gray-700 dark:text-gray-400")} to={item.path}>
                  <button className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    {item.name}
                  </button>
                </NavLink>
                // <li key={index} className="flex flex-col items-center justify-center md:flex-row md:items-center">
                //   <Link onClick={() => setNavbarOpen(false)} to={item.path} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                //     {item.name}
                //   </Link>
                // </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
