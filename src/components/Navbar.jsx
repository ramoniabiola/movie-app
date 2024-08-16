import React, { useState } from 'react';
import { ArrowDropDownRounded,ArrowDropUpRounded, Notifications, SearchRounded } from '@mui/icons-material';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

      
    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };
    

    return (
        <div className="fixed w-11/12 top-0 z-50 text-white mx-20">
            <div className="flex items-center justify-between h-24">
                <div className="flex items-center space-x-10 cursor-pointer">
                    <h1 className="bg-gradient-to-r from-rose-900 via-rose-400 to-rose-900 bg-clip-text text-transparent font-bold text-4xl tracking-widest">TrinNet</h1>
                    <div className="flex items-center space-x-8 pl-10 font-normal text-lg tracking-wide">
                        <span>Homepage</span>
                        <span>Series</span>
                        <span>Movies</span>
                        <span>New and Popular</span>
                        <span>My List</span>
                    </div>
                </div>
                <div className="flex items-center space-x-5 cursor-pointer">
                    <SearchRounded style={{ fontWeight: '32px'}} />
                    <span className='font-semibold tracking-wider'>KID</span>
                    <Notifications />
                    <img
                      className="w-10 h-10 rounded-full ring-[.18rem] ring-rose-600 ring-offset-4 dark:ring-offset-[#0b0b0b]"
                      src="https://th.bing.com/th/id/OIP.0TsJGYhWWOy_hBFOH0hX-gHaHa?rs=1&pid=ImgDetMain"
                      alt=""
                    />
                    <div className='relative' onClick={handleDropdownToggle} >
                        {!dropdownOpen ? 
                            (<ArrowDropDownRounded style={{  fontSize: "30px"}} />) :
                            (<ArrowDropUpRounded style={{  fontSize: "30px"}} />
                        )}
                        <div
                            className={`absolute right-0 mt-5 bg-[#0b0b0b] border-zinc-900 border-2 shadow-sm rounded-md overflow-hidden z-50 transform transition-all duration-200 ease-out px-5 py-5 ${
                                dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
                            }`}
                        >
                            <span className="py-3 px-6 block hover:bg-[#181818] hover:rounded-md">Settings</span>
                            <span className="py-3 px-6 block hover:bg-[#181818] hover:rounded-md">Log out</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};  

export default Navbar;
