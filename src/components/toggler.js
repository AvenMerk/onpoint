import React, { Component } from 'react';

class Toggler extends Component {

    state = {
        posMin: 174,
        posMiddle: 494,
        posMax: 814,
        posCurrent: 174,
        linePosStart: -640,
        animationToRight: "animate-it-to-right",
        animationToRightX2: "animate-it-to-right-2",
        animationToLeft: "animate-it-to-left",
        animationToLeftX2: "animate-it-to-left-2",
    };

    movePolygon = (e) => {
        e.preventDefault();
        console.log('movePolygon');
        const newPosition = e.changedTouches[0].clientX.toFixed(0);
        const polygon = document.getElementById('polygon-1');
        const line = document.getElementById('active-line');

        if (newPosition < this.state.posCurrent) {
            this.addAnimateToLeftClass(newPosition);
        } else if (newPosition > this.state.posCurrent) {
            this.addAnimateToRightClass(newPosition);
        }

        if (newPosition <= this.state.posMin) {
            this.setState({posCurrent: this.state.posMin});
            polygon.style.left = `${this.state.posMin}px`;
            line.style.left = `${this.state.linePosStart}px`;
        } else if (newPosition >= this.state.posMax) {
            this.setState({posCurrent: this.state.posMax});
            polygon.style.left = `${this.state.posMax}px`;
            line.style.left = `0px`;
        } else {
            this.setState({posCurrent: newPosition});
            this.setState({linePosCurrent: this.state.linePosStart + (newPosition - this.state.posMin)});
            polygon.style.left = `${newPosition}px`;
            line.style.left = `${this.state.linePosCurrent}px`;
        }
    };

    polygonCloser = (e) => {
        e.preventDefault();
        console.log('polygonCloser');
        let pos = this.state.posCurrent;
        let linePos = this.state.linePosCurrent;
        const polygon = document.getElementById("polygon-1");
        const line = document.getElementById("active-line");

        if (pos >= (this.state.posMiddle - 160) && pos <= this.state.posMiddle) {
            while (pos < this.state.posMiddle) {
                pos++;
                linePos++;
                polygon.style.left = `${pos}px`;
                line.style.left = `${linePos}px`;
                this.setState( {posCurrent: pos, linePosCurrent: linePos});
            }
        } else if (pos >= (this.state.posMax - 160)) {
            while (pos < this.state.posMax) {
                pos++;
                linePos++;
                polygon.style.left = `${pos}px`;
                line.style.left = `${linePos}px`;
                this.setState( {posCurrent: pos, linePosCurrent: linePos});

            }
        } else if (pos < (this.state.posMin + 160)) {
            while (pos > this.state.posMin) {
                pos--;
                linePos--;
                polygon.style.left = `${pos}px`;
                line.style.left = `${linePos}px`;
                this.setState( {posCurrent: pos, linePosCurrent: linePos});
            }
        } else if (pos < (this.state.posMiddle + 160) && pos > this.state.posMiddle) {
            while (pos > this.state.posMiddle) {
                pos--;
                linePos--;
                polygon.style.left = `${pos}px`;
                line.style.left = `${linePos}px`;
                this.setState( {posCurrent: pos, linePosCurrent: linePos});
            }
        }
        // if ((pos >= (this.state.posMiddle - 160)) && (pos <= (this.state.posMiddle + 160))) {
        //     polygon.animate([
        //         // keyframes
        //         {left: `${pos}px`},
        //         {left: `${this.state.posMiddle}px`}
        //     ], {
        //         // timing options
        //         duration: 1000,
        //         iterations: 1,
        //         fill: "forwards"
        //     });
        //     line.animate([
        //         // keyframes
        //         {left: `${this.state.linePosCurrent}px`},
        //         {left: `${this.state.linePosStart + this.state.posMiddle-this.state.posMin}px`}
        //     ], {
        //         // timing options
        //         duration: 1000,
        //         iterations: 1,
        //         fill: "forwards"
        //     });
        //     this.setState({posCurrent: this.state.posMiddle});
        //     this.setState({linePosCurrent: this.state.linePosStart + this.state.posMiddle-this.state.posMin});
        // } else if (pos < (this.state.posMin + 160)) {
        //     polygon.animate([
        //         // keyframes
        //         {left: `${pos}px`},
        //         {left: `${this.state.posMin}px`}
        //     ], {
        //         // timing options
        //         duration: 1000,
        //         iterations: 1,
        //         fill: "forwards"
        //     });
        //     line.animate([
        //         // keyframes
        //         {left: `${this.state.linePosCurrent}px`},
        //         {left: `${this.state.linePosStart}px`}
        //     ], {
        //         // timing options
        //         duration: 1000,
        //         iterations: 1,
        //         fill: "forwards"
        //     });
        //     this.setState({posCurrent: this.state.posMin});
        //     this.setState({linePosCurrent: 0});
        // } else {
        //     polygon.animate([
        //         // keyframes
        //         {left: `${pos}px`},
        //         {left: `${this.state.posMax}px`}
        //     ], {
        //         // timing options
        //         duration: 1000,
        //         iterations: 1,
        //         fill: "forwards"
        //     });
        //     line.animate([
        //         // keyframes
        //         {left: `${this.state.linePosCurrent}px`},
        //         {left: `0px`}
        //     ], {
        //         // timing options
        //         duration: 1000,
        //         iterations: 1,
        //         fill: "forwards"
        //     });
        //     this.setState({posCurrent: this.state.posMax});
        //     this.setState({linePosCurrent: 0});
        // }
        // setTimeout(() => (polygon.style.left = `${this.state.posCurrent}px`), 1000);
        // setTimeout(() => (line.style.left = `${this.state.linePosCurrent}px`), 1000);
        // polygon.addEventListener("webkitAnimationEnd",(() => {console.log('set');
        // polygon.style.left = `${this.state.posCurrent}px`}));
    };

    addAnimateToRightClass = (position) => {
        const bgArray = document.getElementById('box3').children;
        for (let i = 0; i < bgArray.length; i++) {
            if ( position <= this.state.posMiddle && position>= (this.state.posMiddle - 160)) {
                bgArray[i].classList.remove(this.state.animationToLeft);
                bgArray[i].classList.remove(this.state.animationToLeftX2);
                bgArray[i].classList.add(this.state.animationToRight);

            } else if (position <= this.state.posMax && position>= (this.state.posMax - 160)) {
                bgArray[i].classList.add(this.state.animationToRightX2);
                bgArray[i].classList.remove(this.state.animationToLeft);
                bgArray[i].classList.remove(this.state.animationToLeftX2);
            }
        }
    };

    addAnimateToLeftClass = (position) => {
        const bgArray = document.getElementById('box3').children;
        for (let i = 0; i < bgArray.length; i++) {
            if (position >= this.state.posMin && position <= (this.state.posMin + 160)) {
                bgArray[i].classList.add(this.state.animationToLeftX2);
                bgArray[i].classList.remove(this.state.animationToRight);
                bgArray[i].classList.remove(this.state.animationToRightX2);
            } else if (position >= this.state.posMiddle && position <= (this.state.posMiddle + 160)) {
                bgArray[i].classList.remove(this.state.animationToRightX2);
                bgArray[i].classList.add(this.state.animationToLeft);
            }
        }
    };


    render () {
        return (
            <React.Fragment>
                <div id="polygon-1"  onTouchMove={this.movePolygon} onTouchEnd={this.polygonCloser} />
                <div className="toggle-line">
                    <div id="active-line" />
                    <div id="passive-line" />
                </div>
            </React.Fragment>
        );
    }
}
// onClick={() => console.log('click')} onTouchEnd={this.polygonCloser}

export default Toggler;