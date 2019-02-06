import React, {Component} from 'react';
import {Swipeable} from 'react-touch';
import './css/App.css';
import Toggler from './components/toggler'

class App extends Component {
    state = {
        animationToBottom: "animate-it-to-bottom",
        animationToBottomX2: "animate-it-to-bottom-2",
        animationToTop: "animate-it-to-top",
        animationToTopX2: "animate-it-to-top-2",
        currentPage: 1,
    };

    // Добавление анимации при свайпе снизу-вверх
    addAnimateToBottomClass = () => {
        const bg = document.getElementById('background');

        // добавление анимации при переходе на 2 страницу
        if (this.state.currentPage === 1) {
            bg.classList.add(this.state.animationToBottom);
            bg.classList.remove(this.state.animationToTopX2);
            document.getElementsByClassName('page')[1].classList.add('active-page');
            document.getElementsByClassName('page')[0].classList.remove('active-page');
            document.getElementsByClassName('next')[0].classList.add('disable');
            this.setState({currentPage: 2});

            // добавление анимации при переходе на 3 страницу
        } else if (this.state.currentPage === 2) {
            bg.classList.add(this.state.animationToBottomX2);
            bg.classList.remove(this.state.animationToTop);
            bg.classList.remove(this.state.animationToTopX2);
            document.getElementsByClassName('page')[2].classList.add('active-page');
            document.getElementsByClassName('page')[1].classList.remove('active-page');
            this.setState({currentPage: 3});
        } else {
            document.getElementsByClassName("overlay")[0].classList.remove('disable');
            document.getElementsByClassName("source-field")[0].classList.add('overlay-animation');
            setTimeout(() => {
                document.getElementsByClassName("source-field")[0].classList.remove('overlay-animation');
            }, 500);
        }
    };

    removeListener = () => {
        document.getElementsByClassName('next')[0].classList.remove('disable');
    };

    // Добавляет анимацию при свайпе сверху вниз
    addAnimateToTopClass = () => {
        const bg = document.getElementById('background');

        // добавление анимации при переходе на 1 страницу
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

            // добавление анимации при переходе на 2 страницу
        } else if (this.state.currentPage === 3
            && document.getElementsByClassName("overlay")[0].classList.contains('disable')) {
            bg.classList.remove(this.state.animationToBottomX2);
            bg.classList.add(this.state.animationToTop);
            document.getElementsByClassName('page')[1].classList.add('active-page');
            document.getElementsByClassName('page')[2].classList.remove('active-page');
            this.setState({currentPage: 2});
        } else if (this.state.currentPage !== 1 && !document.getElementsByClassName("overlay")[0].classList.contains('disable')) {
            document.getElementsByClassName("source-field")[0].classList.add('overlay-animation-reverse');
            setTimeout(() => {
                document.getElementsByClassName("overlay")[0].classList.add('disable');
                document.getElementsByClassName("source-field")[0].classList
                    .remove('overlay-animation-reverse')
            }, 500);
        }
    };

    render() {
        return (
            <div id="container">
                <Swipeable onSwipeUp={this.addAnimateToBottomClass}
                           onSwipeDown={this.addAnimateToTopClass}>
                    <div id='background'>

                        {/* Страница 1 */}
                        <div className="box-1">
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
                            <div className="next"/>
                        </div>

                        {/* Блок с нумерацией страниц */}

                        <div id="pages">
                            <div className="page active-page"/>
                            <div className="page"/>
                            <div className="page"/>
                        </div>

                        {/* Страница 2 */}

                        <div className="box-2">
                            <div className="txt-2-headline">
                                <p>Основа терапии -</p>
                                <p>патогенез СД2</p>
                            </div>
                            <div className="ice-top-1 ice-min"/>
                            <div className="ice-top-2 ice-max"/>
                            <div className="ice-bottom-1 ice-med"/>
                            <div className="ice-bottom-2 ice-min"/>
                        </div>

                        {/* Страница 3 */}

                        <div id="box3">
                            <div className="scheme-3-1 animate-it-to-right animate-it-to-right-2">
                                <div className="txt-3">
                                    <p>Звенья патогенеза СД2</p>
                                </div>
                                <div className="ice-min ice-3-1-top"/>
                                <div className="ice-med ice-3-1-right"/>
                                <div className="ice-max ice-3-1-bottom"/>
                            </div>
                            <div className="scheme-3-2 animate-it-to-right animate-it-to-right-2">
                                <div className="txt-3">
                                    <p>Смертельный октет</p>
                                </div>
                                <div className="ice-min ice-3-2-top"/>
                                <div className="ice-med ice-3-2-left"/>
                                <div className="ice-max ice-3-2-bottom"/>
                            </div>
                            <div className="scheme-3-3 animate-it-to-right animate-it-to-right-2">
                                <div className="txt-3">
                                    <p>Звенья патогенеза СД2</p>
                                </div>
                                <div className="ice-min ice-3-3-top"/>
                                <div className="ice-med ice-3-3-right"/>
                                <div className="ice-max ice-3-3-bottom"/>
                            </div>
                        </div>

                        {/* Страница 4 */}

                        <div className="overlay disable">
                            <div className="source-field">
                                <ol className="source-txt">
                                    <li><p>Defronzo RA. Diabetes. 2009 Apr;58(4):773-95</p></li>
                                    <li><p>Inzucchi SE, Sherwin RS in: Cecil Medicine 2011</p></li>
                                    <li><p>Stanley S. Schwartz, Solomon Epstein,Barbara E. Corkey, Struan F.A. Grant,
                                        James R. Gavin III, and Richard B. Aguilar The Time Is Right</p>
                                        <p>for a New Classification System for Diabetes: Rationale and Implications
                                            of the b-Cell–Centric Classification Schema Diabetes Care 2016;</p>
                                        <p>39:179–186 | DOI: 10.2337/dc15-1585</p></li>
                                </ol>
                            </div>
                        </div>
                        <Toggler/>
                    </div>
                </Swipeable>
            </div>
        );
    }
}

export default App;
