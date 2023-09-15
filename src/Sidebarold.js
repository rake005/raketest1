import React from 'react'
import {Link} from 'react-router-dom';

const Sidebar = () => {

return (
    <div>
    <div className='w-52 h-screen flex-col bg-[#C9252C] text-[#FFBC00] pt-28 pl-6 mt-14 absolute'>
     <nav> 
    <div className='bg-slate-700 p-3 border border-[#FFBC00] bg-[#ffffff1a] rounded-xl w-40 text-center '>Bag Receive</div>
   
<div className='bg-slate-700 p-3 border border-[#FFBC00] bg-[#ffffff1a] rounded-xl w-40 text-center mt-3 '>Bag Open</div>
<div className='bg-slate-700 p-3 border border-[#FFBC00] bg-[#ffffff1a] rounded-xl w-40 text-center mt-3'>Bag Close</div>
<div className='bg-slate-700 p-3 border border-[#FFBC00] bg-[#ffffff1a] rounded-xl w-40 text-center mt-3'>Bag Despatch</div>    
</nav>
</div>

    </div>
  );
}

export default Sidebar
