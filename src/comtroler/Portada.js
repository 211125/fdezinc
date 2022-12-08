import '../style/modal.css'
import React, { useState } from "react";
import { Modal } from 'reactstrap';
import X_white from "../img/white_x.png";
import _white from "../img/fondo-negro.jpg";
import anychart from 'anychart'
import AnyChart from 'anychart-react'


const Portada = () => {
    const [modaladd, setModaladd] = useState(false);
    const add = () => setModaladd(!modaladd);
    let dato = 60;

    let stage1 = anychart.graphics.create();
    let stage2 = anychart.graphics.create();
    let chart1 = anychart.line([1, 7, 9]);
    let chart2 = anychart.line([1, 8, 3,6,2]);



    let data = anychart.data.set([
        ["January", 10000, 12500],
        ["February", 12000, 15000],
        ["March", 13000, 16500],
        ["April", 10000, 13000],
        ["May", 9000, 11000]
    ]);
    let error = anychart.column();
    let seriesData_1 = data.mapAs({x: 0, value: 1});
    let seriesData_2 = data.mapAs({x: 0, value: 2});
    let series1 = error.column(seriesData_1);
    series1.error().valueLowerError(700);
     

    return (
        <> <div className="u-body u-xl-mode">
            <div className="u-clearfix u-header u-header">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <section className="u-clearfix u-white u-section-1" id="sec-c45a">
                        <div className="u-clearfix u-sheet u-valign-middle-md u-sheet-1">
                            <div className="u-expanded-width-md u-shape u-shape-svg u-text-palette-3-base u-shape-1"
                                data-animation-name="customAnimationIn" data-animation-duration="1750"
                                data-animation-delay="500">

                            </div>
                            <div className="u-align-left u-image u-image-circle u-image-1" data-image-width="1200"
                                data-image-height="800" data-animation-name="customAnimationIn"
                                data-animation-duration="1000" data-animation-direction=""
                                data-animation-delay="250"></div>
                            <div className="u-gradient u-shape u-shape-circle u-shape-2"
                                data-animation-name="customAnimationIn" data-animation-duration="1500"
                                data-animation-delay="250"></div>
                            <div
                                className="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-container-style u-expanded-width-xs u-group u-radius-30 u-shape-round u-white u-group-1"
                                data-animation-name="customAnimationIn" data-animation-duration="1500"
                                data-animation-delay="500">
                                <div className="u-container-layout u-container-layout-1">
                                    <h5 className="u-align-left-xs u-text u-text-default u-text-1"> Detector de
                                        incendio<br />
                                    </h5>
                                    <h1 className="u-align-center-xs u-text u-text-2"><b>Fdez <span
                                        className="u-text-palette-3-base">Inc</span></b>
                                    </h1>

                                    <a onClick={add}
                                        className="u-btn u-btn-round u-button-style u-palette-3-base u-radius-50 u-text-body-alt-color u-btn-1">monitorear</a>
                                </div>
                            </div>
                        </div>
                    </section></div>
            </div>
        </div>
            <div>

                <Modal isOpen={modaladd} className="modal-lg Modal  ">
                    <div>
                        <div className="container Modal " >
                            <div>
                                <img src={X_white} alt="" onClick={add} className="X_white" />
                            </div>
                            <div className="topRightHeading" data-depth="1.00">
                                PANEL DE CONTROL
                            </div>
                            <div className="gallery  " data-depth="0.00">


                                <div className="gallery-img ">
                                    <ul className="ul ">
                                        <li className="li">
                                            <div className="user">
                                                <ul className=" semaforo verde ">
                                                    <li className="derecha"></li>
                                                    Normal
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="li">
                                            <div className="user">
                                                <ul className=" semaforo  naranja">
                                                    <li className="derecha"></li>
                                                    Gas
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="li">
                                            <div className="user">
                                                <ul className=" semaforo rojo ">
                                                    <li className="derecha"></li>
                                                    Fuego
                                                </ul>
                                            </div></li>
                                    </ul>
                                </div>
                                <div className="gallery-img">
                                    <div className="base">
                                        <p className="P">temperatura</p>

                                        <div className="prog-1">
                                            <div className="c100 p80 big">
                                                <span>80%</span>
                                                <div className="slice">
                                                    <div className="bar"></div>
                                                    <div className="fill"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="P2">temepratura</p>

                                        <div className="prog-2">
                                            <div className={`c100 p${dato} big`}>
                                                <span>{dato}%</span>
                                                <div className="slice">
                                                    <div className="bar"></div>
                                                    <div className="fill"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-inline-flex">
                                    <div className="d-inline-flex justify-content-center mx-1">

<AnyChart
    instance={error}
    id="firstdChart"
    width={350}
    height={300}
    charts={[data]}
/>
</div>
<div className="d-inline-flex justify-content-center">
<AnyChart
    instance={stage2}
    id="secondChart"
    width={350}
    height={300}
    charts={[chart2]}

/>
</div>


                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>
                </Modal>

            </div>
        </>
    )
}
export default Portada;