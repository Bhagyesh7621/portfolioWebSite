import React, { useEffect, useState} from 'react'
import './testimonials.css'

import { useRef } from 'react';
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

var tempdata = [
  {
    name: 'Bhagyesh Gohel',
    review: 'Give Your Opinion Below'
    // review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, mollitia. Sequi culpa iure iste ducimus exercitationem cum veritatis in fugit!'
  },
  
]

const Testimonial = () => {
  var [data,setData] = useState(tempdata);
  const form = useRef();
  const name__ref = useRef();
  const review__ref = useRef();

  const solve = (e) => {
    e.preventDefault();
    console.log(name__ref.current?.value)
    console.log(review__ref.current?.value)

    const obj1 = {
      name:name__ref.current?.value,
      review: review__ref.current?.value
    }
    // data.push(obj1);  
    // setData(data);
    // console.log(data);

    setData([...data,obj1]);
    console.log(data)
    tempdata = data;

    e.target.reset()
  };

  useEffect(()=>{}, data);
  
  
  return (
    <section id='testimonial'>
      <h5> Share Your Idea </h5>
      <h2> Testimonial </h2>
      <Swiper className="container testimonial__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({name, review}, index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'> {review} </small>
              </SwiperSlide>)})
        }
      </Swiper>
      <div className="container testimonial__container">
      <form ref={form} onSubmit ={solve}>
        <input type="text" name='name' placeholder='Your Name' ref={name__ref} />
        <input type="text" name='review' placeholder='Your review' ref={review__ref}/>
        <button type='submit' className='btn btn-primary btn__test'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Testimonial