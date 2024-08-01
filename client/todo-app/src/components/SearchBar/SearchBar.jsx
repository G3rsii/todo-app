import React from 'react'
import { FaMagnifyingGlas } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io";

const SearchBar = ({value, onChange, handleSearch, onClearSearch}) => {


    return (
        <div className='w-80 flex items-center px-4 bg-slate-100 rounded-md'>
            <input
                type="text"
                placeholder='Search Notes'
                className='w-full text-xs bg-transparent py-[11px] outline-none'
                value={value}
                onChange={onChange} />

            {value && (
                <IoMdClose
                    className="text-slate-500 cursor-pointer hover:text-black"
                    onClick={onClearSearch} />)}
            <FaMagnifyingGlas
                className="text-slate-400 cursor-pointer hover:text-black"
                onClick={handleSearch} />
        </div>
    )
}

export default SearchBar