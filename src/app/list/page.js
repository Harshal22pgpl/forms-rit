import React from 'react'
import ItemList from '../components/ItemList/ItemList'

const items = [
    { sn: 1, name: 'Name of student',enrollmentNumber:"2345672345", contactNumber: '1234567890', department: 'IT', date: "3 Nov 2023",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias modi at officiis. Facere excepturi quo, nesciunt distinctio maiores eos reprehenderit! Qui libero maxime eaque consectetur illo eos placeat veniam esse earum. Fugit porro nam id minus dignissimos cupiditate iusto, corrupti aspernatur, ullam rem similique. Fugiat." },
    { sn: 2, name: 'Name of student',enrollmentNumber:"2345672345", contactNumber: '0987654321', department: 'HR', date: "3 Nov 2023",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias modi at officiis. Facere excepturi quo, nesciunt distinctio maiores eos reprehenderit! Qui libero maxime eaque consectetur illo eos placeat veniam esse earum. Fugit porro nam id minus dignissimos cupiditate iusto, corrupti aspernatur, ullam rem similique. Fugiat." },
  
  ];

export default function page() {
  return (
    <div className='w-9/12 mx-auto mt-3'>
        <h1 className=' text-center text-3xl font-bold text-purple-500'>Anti Ragging</h1>
        
       <ItemList items={items} />
    </div>
  )
}
