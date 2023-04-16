import React,{useState,useEffect} from 'react'
import styles from '../../style';
import AnnounceCard from '../AnnounceCard'
import {BoltLoader} from "..";
import axios from 'axios';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { API } from '../../constants';

const Events = () => {
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  const [years,setYears]=useState(null)
  let isAvailable=1;
  
  let year=(new Date().getFullYear());
  let month=new Date().getMonth();
  if(month>=5)
  {
    year=(year).toString()+'-'+(year+1-2000).toString();
  }
  else
  {
    year=(year-1).toString()+'-'+(year-2000).toString();
  }
  const [active,setActive]=useState(year.replace('-',' - '));
  
  useEffect(()=>{
    axios.get(`${API}/events/years`)
    .then((res)=>{setYears(res.data);setLoading(false);})
    .catch((err)=>{
      console.log("error:",err.message);
      setError(err.message);
      setLoading(false);
    }); 
    
  },[]);
  
  useEffect(()=>{
    axios.get(`${API}/events/year/${active.replace(' - ','-')}`)
      .then((res)=>{setData(res.data);setLoading(false);})
      .catch((err)=>{
        console.log("error:",err.message);
        setError(err.message);
        setLoading(false);
      }); 

  },[active]);
  
  const handleChange = (event) => {
    setActive(event.target.value);
  };

  return (
    <div className='flex flex-col'>
      
      <div className={` py-10 justify-center items-center gap-10 flex flex-row w-full animate-[zoomIn_1s_ease-in-out]`}>
        <div className={` flex items-center relative z-[1]`}>
          <h2 className={`${styles.heading2}  text-gradient`}>
            Events
          </h2>
        </div>
        <FormControl className='flex w-[10rem]'>
          <Select value={active} onChange={handleChange} >
            {years?.map((x)=>(
              <MenuItem key={x.id} value={x.year}>{x.year}</MenuItem>
            )).reverse()}
          </Select>
        </FormControl>
      </div>

      <div className={`flex flex-col`}>
        
        <section id={"events"} className={` ${styles.flexCenter} flex-col relative `}>
          <div data-aos="fade-up" data-aos-duration='1000'>
            
            <div className="flex flex-wrap justify-center items-center w-full z-[1] gap-5" >
              {data?.map((card) => 
                <div data-aos="fade-up" data-aos-duration='1000' key={card._id} >
                  <a href={`/events/${card._id}`} className='flex justify-center items-center'><AnnounceCard  {...card} /></a>
                  
                </div>
              ).reverse()}

              {isAvailable === 0 && <div className='flex'><span className={`${styles.heading2} text-center`}>Events Conducted in {active} are Yet to be Updated...</span></div>}
              {loading && <div className='flex my-10'> 
                <BoltLoader/>
              </div>}
              {error && <div className='flex'><span className={`${styles.heading2} text-center`}>{error}!</span></div>}
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default Events;