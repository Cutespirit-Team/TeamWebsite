import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

interface SideItem {
  name: string;
  icon: IconProp;
  href: string;
  items?: SideItem[];
}

const items: SideItem[] = [
  {
    name: '團隊介紹',
    icon: ['fas', 'arrow-up-right-from-square'],
    href: '/about/intro',
  },
  {
    name: '團隊歷史',
    icon: ['fas', 'arrow-up-right-from-square'],
    href: '/about/history',
  },
  {
    name: '團隊成員',
    icon: ['fas', 'arrow-up-right-from-square'],
    href: '/about/member',
  },
  {
    name: '團隊資訊',
    icon: ['fas', 'address-card'],
    href: '/about/info',
  },
  {
    name: '洽談合作',
    icon: ['fas', 'address-card'],
    href: '/about/cooperation',
  },
  {
    name: '團隊連結和好友情站',
    icon: ['fas', 'address-card'],
    href: '/about/link',
  },
]

const Sidebar = () => {
  return (
    <div>
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      {/* Sidebar 內容 */}
      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4s overflow-y-auto bg-gray-100 bg-opacity-75 dark:bg-opacity-50 dark:bg-gray-800">
            <ul className="space-y-2 relative top-20">
            {
              items.map((item, index) => {
                return (
                  <li key={item.name}>
                    <NavLink key={index} className={({ isActive }) => (isActive ? " text-gray-900 font-bold dark:text-white" : "flex items-center p-2 text-base font-normal rounded-lg text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700")} to={item.href}>
                      <FontAwesomeIcon icon={ item.icon } className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                      <span className="flex-1 ml-3 whitespace-nowrap">{ item.name }</span>
                    </NavLink>
                  </li>
                )
              })
            }
            </ul>
        </div>
      </aside>

      {/* 右邊呈現的東西 */}
      <div className="p-4 sm:ml-64">
        <div className="p-4">
          {/* <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div> */}
          {/* <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
              </div>
          </div> */}
          <Outlet />
          {/* <Footer></Footer> */}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
