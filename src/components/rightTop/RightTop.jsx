import { useEffect } from 'react';
import './rightTop.scss';
import { useState } from 'react';

const RightTop = ({setSearchValue}) => {

  const [permanent, setPermanent] = useState('');

  useEffect(()=>{
    let t = setTimeout(()=>{
      setSearchValue(permanent);
    },500);
    return () => clearTimeout(t);
  },[permanent])

  return (
    <div className='rightTop'>
        <input type="search" name="" id="" value={permanent} onChange={(e)=>setPermanent(e.target.value)} />
        <div className="search"></div>
    </div>
  )
}

export default RightTop;