import React from 'react'
import './Footer.css'

function Footer() {
    let date = new Date();
return (
    <footer className="footer bg-black flex flex-center" id='footer'>
        <div className="container flex flex-center w-100">
            <div className="grid footer-content text-center">
                <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Laudantium amet a veniam rerum earum provident,
                sint voluptas distinctio quisquam at ullam, deleniti numquam vel ut.</p>
                <span className="text">&copy; {date.getFullYear().toString()} AhmadHub. Theme</span>
            </div>
        </div>
    </footer>
)
}

export default Footer
