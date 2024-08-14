import React from 'react'
import './Qualities.css'
import sections from '../../constants/data'
import images from '../../constants/images'

function Qualities() {
return (
    <section className="qualities section-p bg-md-black" id='qualities'>
        <div className="container">
            <div className="qualities-content grid">
                <div className="content-left">
                <div className="section-t text-center">
                    <h3>We are Professionals</h3>
                    <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Sapiente nostrum provident vel natus unde hic maxime modi aspernatur autem. 
                    Ex eligendi sunt consectetur necessitatibus, quasi ipsam quos aperiam sapiente, 
                    veritatis atque perspiciatis saepe rem tempore commodi?</p>
                </div>
                <div className="item-list grid text-white">
                    {
                        sections.qualities.map(quality => {
                            return (
                                <div className="item flex" key={quality.id}>
                                    <div className="item-icon flex flex-center">
                                        {quality.icon}
                                    </div>
                                    <div className="item-text">
                                        <h3 className="item-title fs-25">Ideas & Plans</h3>
                                        <p className="text">{quality.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            <div className="content-right">
                <img src={images.professionals_main_img} alt="" />
            </div>
            </div>
        </div>
    </section>
)
}

export default Qualities
