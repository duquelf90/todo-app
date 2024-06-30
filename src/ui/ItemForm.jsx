import React, { useState } from 'react'
import { Icon } from '@iconify/react';


const ItemForm = ({ onCreate, title }) => {
    const [newValue, setNewValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newValue.trim() !== '') {
            onCreate({ title: newValue });
            setNewValue('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className='w-full'>
            <div className="flex flex-wrap items-center mb-3">
                <div className="flex-1 mb-4 sm:mb-0">
                    <input type="text"
                        className='block w-full outline-none p-4 rounded-md text-black text-xl  font-medium'
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)}
                        placeholder={title} />
                </div>
                <div className="flex-2 px-3">
                    <button className="p-4 ml-auto flex items-center text-xl text-white bg-indigo-500 hover:bg-indigo-600 rounded-md">
                        <Icon icon="gala:add" />
                        <span className='ml-2'>Agregar</span>
                    </button>
                </div>
            </div>
        </form>

    )
}

export default ItemForm