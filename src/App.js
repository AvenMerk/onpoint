import React, { Component } from 'react';
import { Swipeable } from 'react-touch';
import './App.css';
import Toggler from './components/toggler'

class App extends Component {
    state = {
        animationToBottom: "animate-it-to-bottom",
        animationToBottomX2: "animate-it-to-bottom-2",
        animationToTop: "animate-it-to-top",
        animationToTopX2: "animate-it-to-top-2",

        // bgArray: document.getElementById('container').children,
    };

    addAnimateToBottomClass = () => {
        const bg = document.getElementById('bg');

        if (bg.classList.contains(this.state.animationToBottom)){
            bg.classList.add(this.state.animationToBottomX2);
            bg.classList.remove(this.state.animationToTop);
            bg.classList.remove(this.state.animationToTopX2);
            document.getElementsByClassName('page')[2].classList.add('active-page');
            document.getElementsByClassName('page')[1].classList.remove('active-page');
        } else if (bg.classList.contains(this.state.animationToTop)){
            bg.classList.remove(this.state.animationToTop);
            bg.classList.remove(this.state.animationToTopX2);
            bg.classList.add(this.state.animationToBottom);
            document.getElementsByClassName('page')[1].classList.add('active-page');
            document.getElementsByClassName('page')[0].classList.remove('active-page');
        } else {
            bg.classList.add(this.state.animationToBottom);
            bg.classList.remove(this.state.animationToTopX2);
            document.getElementsByClassName('page')[1].classList.add('active-page');
            document.getElementsByClassName('page')[0].classList.remove('active-page');
        }
    };

    addAnimateToTopClass = () => {
        const bg = document.getElementById('bg');

        if (bg.classList.contains(this.state.animationToTop)) {
            bg.classList.add(this.state.animationToTopX2);
            bg.classList.remove(this.state.animationToTop);
            bg.classList.remove(this.state.animationToBottom);
            bg.classList.remove(this.state.animationToBottomX2);
            document.getElementsByClassName('page')[0].classList.add('active-page');
            document.getElementsByClassName('page')[1].classList.remove('active-page');
        } else if (bg.classList.contains(this.state.animationToBottomX2)) {
            bg.classList.remove(this.state.animationToBottomX2);
            bg.classList.add(this.state.animationToTop);
            document.getElementsByClassName('page')[1].classList.add('active-page');
            document.getElementsByClassName('page')[2].classList.remove('active-page');
        } else if (bg.classList.contains(this.state.animationToBottom)) {
            bg.classList.remove(this.state.animationToBottom);
            bg.classList.add(this.state.animationToTopX2);
            document.getElementsByClassName('page')[0].classList.add('active-page');
            document.getElementsByClassName('page')[1].classList.remove('active-page');
        } else if (!bg.classList.contains(this.state.animationToTop)) {

        }
    };

    render() {
        return (
            <div id="container">
                <Swipeable onSwipeUp={this.addAnimateToBottomClass}
                           onSwipeDown={this.addAnimateToTopClass}>
                    <div id='bg'>
                        <div className="background-1">
                            <div className="dot-settings dot1 dot-animation dot-high-opacity "/>
                            <div className="dot-settings dot1 dot-animation-delayed dot-high-opacity"/>
                            <div className="dot-settings dot1 dot-animation-innerborder"/>
                            <div className="dot-settings dot1 dot-animation-outter-border dot-low-opacity"/>
                            <div className="dot-settings dot2 dot-animation dot-high-opacity"/>
                            <div className="dot-settings dot2 dot-animation-delayed dot-high-opacity"/>
                            <div className="dot-settings dot2 dot-animation-innerborder"/>
                            <div className="dot-settings dot2 dot-animation-outter-border dot-low-opacity "/>
                            <div className="dot-settings dot3 dot-animation dot-high-opacity"/>
                            <div className="dot-settings dot3 dot-animation-delayed dot-high-opacity"/>
                            <div className="dot-settings dot3 dot-animation-innerborder"/>
                            <div className="dot-settings dot3 dot-animation-outter-border dot-low-opacity "/>
                            <div className="dot-settings dot4 dot-animation dot-high-opacity"/>
                            <div className="dot-settings dot4 dot-animation-delayed dot-high-opacity"/>
                            <div className="dot-settings dot4 dot-animation-innerborder "/>
                            <div className="dot-settings dot4 dot-animation-outter-border dot-low-opacity "/>
                        </div>

                        <div id="pages">
                            <div className="page active-page" />
                            <div className="page" />
                            <div className="page" />
                        </div>

                        <div className="background-2"/>

                        <div id="box3">
                            <div className="background-3-1">
                                <div className=" ice-min ice-3-1-top" />
                                <div className="ice-med ice-3-1-right" />
                                <div className="ice-max ice-3-1-bottom" />
                            </div>
                            <div className="background-3-2">
                                <div className="ice-3-2" />
                            </div>
                            <div className="background-3-3">
                                <div className=" ice-min ice-3-3-top" />
                                <div className="ice-med ice-3-3-right" />
                                <div className="ice-max ice-3-3-bottom" />
                            </div>
                        </div>
                        <Toggler />
                    </div>
                </Swipeable>
            </div>
        );
    }
}

export default App;
