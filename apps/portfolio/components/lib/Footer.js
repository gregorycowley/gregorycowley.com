import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

/**
 * Footer Layout
 * @param {*} props 
 */

class Footer extends Component{
    render(){
        let jhonData = this.props.jhonData;
        return(
            <section className="footer-area sect-pad">
                <div className="container">
                    <div className="footer-content">
                        <Link to="/" className="logo wow fadeInDown" data-wow-delay="0.4s">
                            <img src={require('../public/image/logo2.png')} alt=""/>
                        </Link>
                        <Fade top cascade>
                            <ul className="list_style">
                                {
                                    jhonData.socialLinks.map(item =>{
                                        return(
                                            <li key={item.name}>
                                                <a  href={item.url}><i className={item.className}></i></a> 
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Fade>
                    </div>
                </div>
            </section>
        )
    }
}
export default Footer;