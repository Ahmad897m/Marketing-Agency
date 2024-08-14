import React from 'react'
import './About.css'
import images from '../../constants/images'

const About = () => {
return (
    <section className="about section-p bg-dark" id='about'>
        <div className="container">
            <div className="about-content grid text-center">
                <div className="content-left">
                    <img src={images.about_main_img} alt="" />
                </div>
                <div className="content-right">
                    <div className="section-t">
                        <h3>About Us</h3>
                    </div>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sapiente sequi ducimus ex voluptas ab ipsum porro aperiam, est repellendus commodi assumenda illum quis corporis, 
                        voluptates possimus ea esse, quibusdam suscipit.
                        Quae, totam! Eaque velit placeat perspiciatis quidem porro at vel!</p>
                        <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Excepturi assumenda itaque alias ea tempora dignissimos expedita consequatur consequuntur,
                        natus omnis nisi iusto! Nam optio dolores possimus nulla aliquam sunt atque.</p>
                </div>
            </div>
        </div>
    </section>
)
}

export default About
