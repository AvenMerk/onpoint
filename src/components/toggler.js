import React, {Component} from 'react';

class Toggler extends Component {

    state = {
        posMin: 174,
        posMiddle: 494,
        posMax: 814,
        posCurrent: 814,
        linePosStart: -640,
        linePosCurrent: 0,
        animationToRight: "animate-it-to-right",
        animationToRightX2: "animate-it-to-right-2",
        animationToLeft: "animate-it-to-left",
        animationToLeftX2: "animate-it-to-left-2",
    };

    // Расчет движения polygon
    movePolygon = (e) => {
        e.preventDefault();
        const newPosition = e.changedTouches[0].clientX.toFixed(0) - 20;
        const polygon = document.getElementById('polygon-1');
        const line = document.getElementById('active-line');

        // Добавление анимации влево/вправо в зависимости от текущего положения polygon
        if (newPosition < this.state.posCurrent) {
            this.addAnimateToLeftClass(newPosition);
        } else if (newPosition > this.state.posCurrent) {
            this.addAnimateToRightClass(newPosition);
        }

        // Ограничение возможности движения polygon
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

    //Доводчик для polygon. Доводит до одного из стационарных положений (крайнее левое/середина/крайнее правое)
    polygonCloser = (e) => {
        e.preventDefault();
        let pos = this.state.posCurrent;
        let linePos = this.state.linePosCurrent;
        const polygon = document.getElementById("polygon-1");
        const line = document.getElementById("active-line");
        const style = document.documentElement.style;

        // Задаем параметры анимации, добавляем класс анимации
        // затем изменяем текущее положение polygon и line и записываем значения в state при:
        // движении к середине слева
        if (pos >= (this.state.posMiddle - 160) && pos <= this.state.posMiddle) {
            style.setProperty('--lineCurrent', `${linePos}px`);
            style.setProperty('--lineCloser', `-320px`);
            style.setProperty('--posCurrent', `${pos}px`);
            style.setProperty('--posCloser', `${this.state.posMiddle}px`);

            polygon.classList.add('closer-pos');
            line.classList.add('closer-line');
            this.setState({posCurrent: this.state.posMiddle, linePosCurrent: -320});
            this.addAnimateToRightClass(this.state.posMiddle);

            // движении к крайнему правому положению
        } else if (pos >= (this.state.posMax - 160)) {
            style.setProperty('--lineCurrent', `${linePos}px`);
            style.setProperty('--lineCloser', `0`);
            style.setProperty('--posCurrent', `${pos}px`);
            style.setProperty('--posCloser', `${this.state.posMax}px`);

            polygon.classList.add('closer-pos');
            line.classList.add('closer-line');
            this.setState({posCurrent: this.state.posMax, linePosCurrent: 0});
            this.addAnimateToRightClass(this.state.posMax);

            // движении к крайнему левому положению
        } else if (pos < (this.state.posMin + 160)) {
            style.setProperty('--lineCurrent', `${linePos}px`);
            style.setProperty('--lineCloser', `${this.state.linePosStart}px`);
            style.setProperty('--posCurrent', `${pos}px`);
            style.setProperty('--posCloser', `${this.state.posMin}px`);

            polygon.classList.add('closer-pos');
            line.classList.add('closer-line');
            this.setState({posCurrent: this.state.posMin, linePosCurrent: this.state.linePosStart});
            this.addAnimateToLeftClass(this.state.posMin);

            // движении к середине справа
        } else if (pos < (this.state.posMiddle + 160) && pos > this.state.posMiddle) {
            style.setProperty('--lineCurrent', `${linePos}px`);
            style.setProperty('--lineCloser', `-320px`);
            style.setProperty('--posCurrent', `${pos}px`);
            style.setProperty('--posCloser', `${this.state.posMiddle}px`);

            polygon.classList.add('closer-pos');
            line.classList.add('closer-line');
            this.setState({posCurrent: this.state.posMiddle, linePosCurrent: -320});
            this.addAnimateToLeftClass(this.state.posMiddle);
        }

        // вешаем listener на конец анимации, задаем новую (текущую) позицию элемента и удаляем класс анимации
        // (чтобы была возможность использовать анимацию снова)
        polygon.addEventListener("webkitAnimationEnd",
            (() => {
                    polygon.style.left = `${this.state.posCurrent}px`;
                    line.style.left = `${this.state.linePosCurrent}px`;
                    polygon.classList.remove('closer-pos');
                    line.classList.remove('closer-line');
                }
            ));
    };

    // добавляет анимацию слева-направо, в зависимости от текущего положения polygon
    addAnimateToRightClass = (position) => {
        const bgArray = document.getElementById('box3').children;
        for (let i = 0; i < bgArray.length; i++) {
            if (position <= this.state.posMiddle && position >= (this.state.posMiddle - 60)) {
                bgArray[i].classList.remove(this.state.animationToLeft);
                bgArray[i].classList.remove(this.state.animationToLeftX2);
                bgArray[i].classList.add(this.state.animationToRight);

            } else if (position <= this.state.posMax && position >= (this.state.posMax - 60)) {
                bgArray[i].classList.add(this.state.animationToRightX2);
                bgArray[i].classList.remove(this.state.animationToLeft);
                bgArray[i].classList.remove(this.state.animationToLeftX2);
            }
        }
    };

    // добавляет анимацию справа-налево, в зависимости от текущего положения polygon
    addAnimateToLeftClass = (position) => {
        const bgArray = document.getElementById('box3').children;
        for (let i = 0; i < bgArray.length; i++) {
            if (position >= this.state.posMin && position <= (this.state.posMin + 60)) {
                bgArray[i].classList.add(this.state.animationToLeftX2);
                bgArray[i].classList.remove(this.state.animationToRight);
                bgArray[i].classList.remove(this.state.animationToRightX2);
            } else if (position >= this.state.posMiddle && position <= (this.state.posMiddle + 60)) {
                bgArray[i].classList.remove(this.state.animationToRightX2);
                bgArray[i].classList.add(this.state.animationToLeft);
            }
        }
    };


    render() {
        return (
            <React.Fragment>
                <div id="polygon-1" onTouchMove={this.movePolygon} onTouchEnd={this.polygonCloser}/>
                <div className="toggle-line">
                    <div id="active-line"/>
                    <div id="passive-line"/>
                </div>
                <div className="txt">
                    <p className="toggler-txt-common min-year">1998</p>
                    <p className="toggler-txt-common med-year">2009</p>
                    <p className="toggler-txt-common max-year">2016</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Toggler;