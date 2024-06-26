import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Get job notifications</h4>
                <p>The latest job news, articles, sent to your inbox weekly.</p>
                <p>Get your CV reviewed and fixed by professionals</p>
                <div className="subscribe-form">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">➤</button>
                </div>
            </div>
            <div className="footer-section">
                <h4>Support</h4>
                <address>
                    18 Hoàng Quốc Việt, Nghĩa Đô, Cầu Giấy, Hà Nội.
                    <br />
                    trungnt.bill-274@st.usth.edu.vn
                    <br />
                    0981568196
                </address>
            </div>
            <div className="footer-section">
                <h4>Account</h4>
                <a href="/profile">My Account</a>
                <a href="/auth">Login / Register</a>
                <a href="/saved">Saved</a>
            </div>
            <div className="footer-section">
                <h4>About us</h4>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms Of Use</a>
                <a href="/">FAQ</a>
                <a href="/">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;
