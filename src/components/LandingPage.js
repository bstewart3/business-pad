import React from "react";
import heroImage from '../assets/BusinessPad.svg';
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
    render() {
        return (
                <div className="wrapper">
                    <div className="display-area">
                        <div className="container1">
                            <div className="left">
                                <div className="landing-txt">
                                    <h1 id="landingH1">Save That Killer business Idea For Later.</h1>
                                    <h2 id="landingH2">We Make It Easy To Keep Tabs On Your business Ideas.</h2>
                                    </div>
                                    <p id="landingP" >
                                        Its not always easy to remember the next big thing.
                                        businessPad makes taking notes on a new business idea simple.
                                    </p>
                                    <div className="landing-buttons">
                                        <Link to='/' className="ui button secondary">Try It</Link>
                                    </div>
                                </div>
                            <div className="right">
                                <div className="hero">
                                    <img src={heroImage} alt=""></img>
                                </div> 
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default LandingPage