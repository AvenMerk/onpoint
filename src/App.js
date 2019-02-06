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
        currentPage: 1,
    };

    //add animation on swipe from bottom to top
    addAnimateToBottomClass = () => {
        const bg = document.getElementById('bg');

        //to move to page 2: add animationToBottom and remove ToTop and ToTopX2
        // (this classes can appear after swipe down/up)
        //then change pagination and currentPage and disable "next" tab
        if (this.state.currentPage === 1) {
            bg.classList.add(this.state.animationToBottom);
            bg.classList.remove(this.state.animationToTopX2);
            document.getElementsByClassName('page')[1].classList.add('active-page');
            document.getElementsByClassName('page')[0].classList.remove('active-page');
            document.getElementsByClassName('next')[0].classList.add('disable');
            this.setState({currentPage: 2});

            //to move to page 3 we need to add animationToBottomX2 and remove ToTop and ToTopX2
            //then change pagination and currentPage
        } else if (this.state.currentPage === 2) {
            bg.classList.add(this.state.animationToBottomX2);
            bg.classList.remove(this.state.animationToTop);
            bg.classList.remove(this.state.animationToTopX2);
            document.getElementsByClassName('page')[2].classList.add('active-page');
            document.getElementsByClassName('page')[1].classList.remove('active-page');
            this.setState({currentPage: 3});
        } else {

        }
    };

    //function for removing event listener
    removeListener = () => {
        document.getElementsByClassName('next')[0].classList.remove('disable');
    };

    //add animation on swipe from top to bottom
    addAnimateToTopClass = () => {
        const bg = document.getElementById('bg');

        //to move to page 1: add animationToTopX2 and remove ToTop,ToBottom and ToBottomX2
        // (this classes can appear after swipe down/up)
        //then change pagination and currentPage and remove "disable" for "next" tab after end of animation
        if (this.state.currentPage === 2) {
            bg.classList.add(this.state.animationToTopX2);
            bg.classList.remove(this.state.animationToTop);
            bg.classList.remove(this.state.animationToBottom);
            bg.classList.remove(this.state.animationToBottomX2);
            document.getElementsByClassName('page')[0].classList.add('active-page');
            document.getElementsByClassName('page')[1].classList.remove('active-page');
            bg.addEventListener("webkitAnimationEnd", this.removeListener);
            setTimeout(() => {
                bg.removeEventListener("webkitAnimationEnd", this.removeListener);
            }, 2000);
            this.setState({currentPage: 1});

            //to move to page 2: add animationToTop and remove ToBottomX2
            // (this classes can appear after swipe down/up)
            //then change pagination and currentPage
        } else if (this.state.currentPage === 3) {
            bg.classList.remove(this.state.animationToBottomX2);
            bg.classList.add(this.state.animationToTop);
            document.getElementsByClassName('page')[1].classList.add('active-page');
            document.getElementsByClassName('page')[2].classList.remove('active-page');
            this.setState({currentPage: 2});
        } else {

        }
    };

    render() {
        return (
            <div id="container">
                <Swipeable onSwipeUp={this.addAnimateToBottomClass}
                           onSwipeDown={this.addAnimateToTopClass}>
                    <div id='bg'>

                        {/*Page 1*/}
                        <div className="background-1">
                            <div className="txt-1-headline text-common">
                                <p>Всегда ли цели терапии СД2</p>
                                <p>на поверхности?</p>
                            </div>
                            <div className="dot-settings dot1 dot-animation dot-high-opacity "/>
                            <div className="dot-settings dot1 dot-animation-delayed dot-high-opacity"/>
                            <div className="dot-settings dot1 dot-animation-innerborder"/>
                            <div className="dot-settings dot1 dot-animation-outter-border dot-low-opacity"/>
                            <div className="text-common text-p txt-1-top">
                                <p>Цель по HbA1c</p>
                            </div>
                            <div className="dot-settings dot2 dot-animation dot-high-opacity"/>
                            <div className="dot-settings dot2 dot-animation-delayed dot-high-opacity"/>
                            <div className="dot-settings dot2 dot-animation-innerborder"/>
                            <div className="dot-settings dot2 dot-animation-outter-border dot-low-opacity "/>
                            <div className="text-common text-p txt-1-left">
                                <p>Гипогликемия</p>
                            </div>
                            <div className="dot-settings dot3 dot-animation dot-high-opacity"/>
                            <div className="dot-settings dot3 dot-animation-delayed dot-high-opacity"/>
                            <div className="dot-settings dot3 dot-animation-innerborder"/>
                            <div className="dot-settings dot3 dot-animation-outter-border dot-low-opacity "/>
                            <div className="text-common text-p txt-1-right">
                                <p>СС риски</p>
                            </div>
                            <div className="dot-settings dot4 dot-animation dot-high-opacity"/>
                            <div className="dot-settings dot4 dot-animation-delayed dot-high-opacity"/>
                            <div className="dot-settings dot4 dot-animation-innerborder "/>
                            <div className="dot-settings dot4 dot-animation-outter-border dot-low-opacity "/>
                            <div className="text-common text-p txt-1-bottom">
                                <p>Осложнения СД</p>
                            </div>
                            <div className="next" />
                        </div>
                        <div id="pages">
                            <div className="page active-page" />
                            <div className="page" />
                            <div className="page" />
                        </div>

                        {/*Page 2*/}

                        <div className="background-2">
                            <div className="txt-2-headline">
                                <p>Основа терапии -</p>
                                <p>патогенез СД2</p>
                            </div>
                            <div className="ice-top-1 ice-min" />
                            <div className="ice-top-2 ice-max" />
                            <div className="ice-bottom-1 ice-med" />
                            <div className="ice-bottom-2 ice-min" />
                        </div>

                        {/*Page 3*/}

                        <div id="box3">
                            <div className="background-3-1 animate-it-to-right animate-it-to-right-2">
                                <div className="txt-3">
                                    <p>Звенья патогенеза СД2</p>
                                </div>
                                <div className="ice-min ice-3-1-top" />
                                <div className="ice-med ice-3-1-right" />
                                <div className="ice-max ice-3-1-bottom" />
                            </div>
                            <div className="background-3-2 animate-it-to-right animate-it-to-right-2">
                                <div className="txt-3">
                                    <p>Смертельный октет</p>
                                </div>
                                <div className="ice-min ice-3-2-top" />
                                <div className="ice-med ice-3-2-left" />
                                <div className="ice-max ice-3-2-bottom" />
                            </div>
                            <div className="background-3-3 animate-it-to-right animate-it-to-right-2">
                                <div className="txt-3">
                                    <p>Звенья патогенеза СД2</p>
                                </div>
                                <div className="ice-min ice-3-3-top" />
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
