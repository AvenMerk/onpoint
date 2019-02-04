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
                            <div className="dot-settings dot1-1 dot1-animation"/>
                            <div className="dot-settings dot1-2 dot2-animation"/>
                            <div className="dot-settings dot1-3"/>
                            <div className="dot-settings dot2-1 dot1-animation"/>
                            <div className="dot-settings dot2-2 dot2-animation"/>
                            <div className="dot-settings dot2-3"/>
                            <div className="dot-settings dot3-1 dot1-animation"/>
                            <div className="dot-settings dot3-2 dot2-animation"/>
                            <div className="dot-settings dot3-3"/>
                            <div className="dot-settings dot4-1 dot1-animation"/>
                            <div className="dot-settings dot4-2 dot2-animation"/>
                            <div className="dot-settings dot4-3"/>
                        </div>

                        <div id="pages">
                            <div className="page active-page" />
                            <div className="page" />
                            <div className="page" />
                        </div>

                        <div className="background-2"/>

                        <div id="box3">
                            <div className="background-3-1"/>
                            <div className="background-3-2"/>
                            <div className="background-3-3"/>

                        </div>
                        <Toggler />
                    </div>
                </Swipeable>
            </div>
        );
    }
}

export default App;
