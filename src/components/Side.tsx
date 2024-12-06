
// import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import HomeLogo from '../assets/home.svg'
import Discover from '../assets/discover.svg'
import Library from '../assets/library.svg'
import Settings from '../assets/settings.svg'
import Log from '../assets/log.svg'
import Trends from '../assets/trends.svg'
import Arrow from '../assets/arrow.svg'
import Logo from '../assets/Logo.svg'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


 
// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: HomeLogo,
  },
  {
    title: "Trends",
    url: "#",
    icon: Trends,
  },
  {
    title: "Library",
    url: "#",
    icon: Library,
  },
  {
    title: "Discover",
    url: "#",
    icon: Discover,
  },
  
]


export default function SideBar(){
    return <Sidebar className=''>
        <SidebarHeader className="bg-side-black"> <div className='flex space-x-3'>
          <img src={Logo} alt='Logo' className='h-8 w-8'/>
          <h1 className='text-3xl text-side-white'><span className='text-text-red'>Dream</span>Music</h1>
          </div></SidebarHeader>
    <SidebarContent className='bg-side-black'>
      <SidebarGroup>
        <SidebarGroupLabel className='text-side-miniHeading'>
         Menu
          </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="text-red hover:before:bg-redborder-red-500 relative  overflow-hidden  px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-side-red hover:bg-side-red hover:before:left-0 hover:before:w-1 ">
                    <img src={item.icon} className='h-5 w-5'/>
                    <span className='text-side-white'>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter className='bg-side-black'>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel className='text-side-miniHeading'>
                    General
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href='#' className='text-red hover:before:bg-redborder-red-500 relative  overflow-hidden  px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-side-red hover:bg-side-red hover:before:left-0 hover:before:w-1'>
                                    <img src={Settings} className='h-5 w-5'/>
                                    <span className='text-side-white'>Settings</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href='#' className='text-red hover:before:bg-redborder-red-500 relative  overflow-hidden  px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-side-red hover:bg-side-red hover:before:left-0 hover:before:w-1'>
                                    <div className='relative flex items-center'>
                                    <img src={Log} className='h-5 w-4'/>
                                    <img src={ Arrow} className='h-4 w-4 absolute left-2'/>
                                    </div>
                                    
                                    <span className='ml-2 text-side-white'>LogOut</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>

                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </SidebarFooter>
  </Sidebar>

}