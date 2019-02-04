import React, { Component } from 'react';

class Toggler extends Component {

    state = {
        posMin: 174,
        posMax: 814,
    };

    movePolygon = (e) => {
        e.preventDefault();
        const linePosition = -640;
        for (let i=0; i<e.changedTouches.length; i++) {
            const newPosition = e.changedTouches[i].clientX.toFixed(2);
            if (newPosition <= this.state.posMin) {
                document.getElementById('polygon-1').style.left = `${this.state.posMin}px`;
                document.getElementById('active-line').style.left = `${linePosition}px`;
            } else if (newPosition>=this.state.posMax) {
                document.getElementById('polygon-1').style.left = `${this.state.posMax}px`;
                document.getElementById('active-line').style.left = `0px`;
            } else {
                document.getElementById('polygon-1').style.left = `${newPosition}px`;
                document.getElementById('active-line').style.left = `${linePosition + (newPosition - this.state.posMin)}px`;

            }
        }
    };

    render () {
        return (
            <React.Fragment>
                <div id="polygon-1" onTouchMove={this.movePolygon}/>
                <div className="toggle-line">
                    <div id="active-line" />
                    <div id="passive-line" />
                </div>
            </React.Fragment>
        );
    }
}

export default Toggler;