import React, { Component } from 'react';
import { Swipeable } from 'react-touch';
import './App.css';

class App extends Component {
    state = {
        animationTop: "animate-it-top",
        animationBottom: "animate-it-bottom",
        animationFromBottom: "animate-it-from-bottom",
        animationToTop: "animate-it-to-top",
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

    render() {
        return (
            <div id="container">
                <Swipeable onSwipeUp={this.addAnimateTopClass}>
                    <div className="background-1" />
                    {/*<img src={"/img/bg1.svg"} />*/}
                </Swipeable>
                <div className="blur-1-2"/>
                <Swipeable onSwipeUp={this.addAnimateBottomClass} onSwipeDown={this.addAnimateToTopClass}>
                    <div className="background-2" />
                    {/*<img src={"/img/bg2.svg"} />*/}
                </Swipeable>
                <div className="blur-2-3"/>
                <Swipeable onSwipeDown={this.addAnimateFromBottomClass}>
                    <div className="background-3-1" />
                    {/*<img src={"/img/bg3_1.png"} />*/}
                </Swipeable>
                {/*<div className="background-3-2 ">*/}
                {/*<img src={"/img/bg3_2.png"} />*/}
                {/*</div>*/}
                {/*<div className="background-3-3 ">*/}
                {/*<img src={"/img/bg3_3.png"} />*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default App;
