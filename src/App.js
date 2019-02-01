import React, { Component } from 'react';
import { Swipeable } from 'react-touch';
import './App.css';

class App extends Component {
    state = {
        animationTop: "animate-it-top",
        animationBottom: "animate-it-bottom",
        animationFromBottom: "animate-it-from-bottom",
        animationToTop: "animate-it-to-top",
        animationToRight: "animate-it-to-right",
        animationToRightX2: "animate-it-to-right-2",
        // bgArray: document.getElementById('container').children,
    };

    addAnimateTopClass = () => {
        const bgArray = document.getElementById('container').children;
        for (let i = 0; i < bgArray.length; i++) {
            bgArray[i].classList.remove(this.state.animationToTop);
            bgArray[i].classList.add(this.state.animationTop);
        }
    };

    addAnimateBottomClass = () => {
        const bgArray = document.getElementById('container').children;
        for (let i = 0; i < bgArray.length; i++) {
            bgArray[i].classList.add(this.state.animationBottom);
        }
    };

    addAnimateFromBottomClass = () => {
        const bgArray = document.getElementById('container').children;
        for (let i = 0; i < bgArray.length; i++) {
            bgArray[i].classList.add(this.state.animationFromBottom);
            bgArray[i].classList.remove(this.state.animationBottom);
        }
    };

    addAnimateToTopClass = () => {
        const bgArray = document.getElementById('container').children;
        for (let i = 0; i < bgArray.length; i++) {
            bgArray[i].classList.add(this.state.animationToTop);
            bgArray[i].classList.remove(this.state.animationTop);
            bgArray[i].classList.remove(this.state.animationFromBottom);
        }
    };

    addAnimateToRightClass = () => {
        const bgArray = document.getElementById('box3').children;
        for (let i = 0; i < bgArray.length; i++) {
            bgArray[i].classList.add(this.state.animationToRight);
        }
    };

    render() {
        return (
            <div id="container">
                <Swipeable onSwipeUp={this.addAnimateTopClass}>
                    <div className="background-1"/>
                </Swipeable>
                <div className="blur-1-2"/>
                <Swipeable onSwipeUp={this.addAnimateBottomClass} onSwipeDown={this.addAnimateToTopClass}>
                    <div className="background-2"/>
                </Swipeable>
                <div className="blur-2-3"/>
                <Swipeable onSwipeDown={this.addAnimateFromBottomClass} onSwipeRight={this.addAnimateToRightClass}>
                    <div id="box3">
                        <div className="background-3-3"/>
                        <div className="background-3-2"/>
                        <div className="background-3-1"/>
                    </div>
                </Swipeable>
            </div>
        );
    }
}

export default App;
