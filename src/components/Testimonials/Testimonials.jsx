import React from 'react'
import sections from '../../constants/data'
import './Testimonials.css'
import {MdStar} from 'react-icons/md'

const gradient = 'url(#blue-gradient)';

function Testimonials() {

let startList;
const showRating = (starCount) => {
    startList = new Array(starCount)
    for(let i = 0; i < startList.length; i++){
        startList[i] = <MdStar size={25} style={{ fill: gradient}} />
    }
    return startList
}

return (
    <section className="testimonials section-p bg-black" id='testimonials'>
        <div className="container">
            <div className="testimonials-content">
                <div className="section-t text-center">
                    <h3>Customer Testimonials</h3>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum voluptates, sunt voluptatum inventore asperiores omnis. 
                        Fugiat unde modi eligendi nam voluptates iste soluta explicabo quam consequatur quis? 
                        Tempore tempora sequi eligendi doloremque est facere minima.</p>
                </div>
                <div className="item-list grid text-white text-center">
                    {
                        sections.testimonials.map(testimonial => {
                            showRating(testimonial.rating);
                            return(
                                <div className="item translate-effect bg-dark" key={testimonial.id}>
                                    <div className="item-img">
                                        <img src={testimonial.image} alt="" />
                                    </div>
                                    <h4 className="item-name">{testimonial.name}</h4>
                                    <p className="item-text text">{testimonial.text}</p>
                                    <ul className="flex item-rating flex-center">
                                        {
                                            startList.map((star, index) => {
                                                return (
                                                    <li key={index}>
                                                        {star}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
)
}

export default Testimonials
