import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../features/themeSlice'

import logo from '../assets/logo.svg'
import {
    FolderOpenIcon, 
    LayoutDashboardIcon, 
    ClipboardCheck,
    FileChartColumnIncreasing,
    SettingsIcon, 
    UsersIcon,
    Bell,
    CircleAlert,
    Moon,
    Sun,
    ChevronRight,
    X
} from 'lucide-react'

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const [showSettings, setShowSettings] = useState(false)
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme.theme)

    const handleNavClick = () => {
        // Close sidebar on mobile when navigating
        if (window.innerWidth < 1024) {
            setIsSidebarOpen(false)
        }
    }

    const menuItems = [
        { name: 'Dashboard', href: '/app', icon: LayoutDashboardIcon },
        { name: 'Projects', href: '/app/projects', icon: ClipboardCheck },
        { name: 'Scan', href: '/app/scan', icon:FileChartColumnIncreasing },
        { name: 'Schedule', href: '/app/schedule', icon: () => <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' /></svg> },
    ]

    const sidebarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setIsSidebarOpen]);

    const handleThemeToggle = () => {
        dispatch(toggleTheme())
    }

    return (
        <>
            <div ref={sidebarRef} className={`z-10 bg-white dark:bg-zinc-900 w-64 flex flex-col h-screen border-r border-gray-200 dark:border-zinc-800 max-sm:absolute transition-all ${isSidebarOpen ? 'left-0' : '-left-full'} `} >
                {/* Header with Logo */}
                <div className='p-4 border-b border-gray-200 dark:border-zinc-800'>
                    <div className='flex items-center gap-2'>
                        <div className='w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm'>
                            <img src={logo} alt="" />
                        </div>
                        <span className='text-2xl  font-semibold text-[#3098AC] dark:text-[#3098AC]'>aps</span>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className='flex-1 overflow-y-scroll no-scrollbar flex flex-col'>
                    <div className='p-4'>
                        {menuItems.map((item) => (
                            <NavLink 
                                to={item.href} 
                                key={item.name} 
                                onClick={handleNavClick}
                                className={({ isActive }) => `flex items-center gap-3 py-2.5 px-3 text-gray-700 dark:text-zinc-300 cursor-pointer rounded-md transition-all mb-1 ${isActive ? 'bg-primary/20 dark:bg-primary/30 text-primary dark:text-primary' : 'hover:bg-gray-100 dark:hover:bg-zinc-800/50'}`} 
                            >
                                <item.icon size={18} />
                                <p className='text-sm truncate'>{item.name}</p>
                            </NavLink>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className='px-4 py-2'>
                        <hr className='border-gray-200 dark:border-zinc-800' />
                    </div>

                    {/* Secondary Sections */}
                    <div className='px-4 space-y-1'>
                        {/* Notifications */}
                        <button className='w-full flex items-center gap-3 py-2.5 px-3 text-gray-700 dark:text-zinc-300 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-all'>
                            <Bell size={18} />
                            <p className='text-sm'>Notifications</p>
                        </button>

                        {/* Settings */}
                        <button onClick={() => setShowSettings(true)} className='w-full flex items-center gap-3 py-2.5 px-3 text-gray-700 dark:text-zinc-300 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-all'>
                            <SettingsIcon size={18} />
                            <p className='text-sm'>Settings</p>
                        </button>

                        {/* Support */}
                        <button className='w-full flex items-center gap-3 py-2.5 px-3 text-gray-700 dark:text-zinc-300 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-all'>
                            <CircleAlert size={18} />
                            <p className='text-sm'>Support</p>
                        </button>
                    </div>

                    
                </div>

                {/* User Profile Section */}
                <div className='border-t border-gray-200 dark:border-zinc-800 p-4'>
                    <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800/50 p-2 rounded-md transition-all'>
                        <div className='w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm'>
                            A
                        </div>
                        <div className='flex-1 min-w-0'>
                            <p className='text-sm font-medium text-gray-900 dark:text-white truncate'>admin@ads.com</p>
                            <p className='text-xs text-gray-500 dark:text-zinc-400 truncate'>Settings Lead</p>
                        </div>
                        <ChevronRight size={16} className='text-gray-400 dark:text-zinc-500' />
                    </div>
                </div>
            </div>

            {/* Settings Modal */}
            {showSettings && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                    <div className='bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-96 max-w-[90vw]'>
                        {/* Modal Header */}
                        <div className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-zinc-800'>
                            <h2 className='text-lg font-semibold text-gray-900 dark:text-white'>Settings</h2>
                            <button onClick={() => setShowSettings(false)} className='p-1 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md transition-all'>
                                <X size={20} className='text-gray-600 dark:text-zinc-400' />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className='p-6 space-y-4'>
                            {/* Theme Toggle */}
                            <div className='flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-800/50 rounded-lg'>
                                <div className='flex items-center gap-3'>
                                    {theme === 'light' ? (
                                        <Sun size={18} className='text-amber-500' />
                                    ) : (
                                        <Moon size={18} className='text-indigo-400' />
                                    )}
                                    <div>
                                        <p className='text-sm font-medium text-gray-900 dark:text-white'>Theme</p>
                                        <p className='text-xs text-gray-500 dark:text-zinc-400'>Light / Dark</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={handleThemeToggle}
                                    className='relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-gray-300 dark:bg-primary'
                                >
                                    <span 
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}`}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className='p-6 border-t border-gray-200 dark:border-zinc-800 flex gap-3'>
                            <button 
                                onClick={() => setShowSettings(false)}
                                className='flex-1 px-4 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all font-medium text-sm'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Sidebar
