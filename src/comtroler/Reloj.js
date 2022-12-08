
import temperatura from "../img/temperatura.png"



import Gas from "../img/Gas.png"
const Reloj = () => {
  return(
      <>
          <div className="u-body u-xl-mode">
              <div className="u-clearfix u-header u-header">
               <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">

          <section className="u-align-center u-clearfix u-section-2" id="carousel_1a16">
              <div className="u-clearfix u-sheet u-sheet-1">
                  <div className="u-expanded-width-xl u-list u-list-1">
                      <div className="u-repeater u-repeater-1">
                          <div
                              className="  u-align-center u-container-style u-custom-item u-list-item u-palette-1-base u-radius-50 u-repeater-item u-shape-round u-list-item-1"
                              data-animation-name="customAnimationIn" data-animation-duration="1750"
                              data-animation-delay="500">
                              <div className="u-container-layout u-similar-container u-container-layout-1"><span
                                  className="u-file-icon u-icon u-text-white u-icon-1"><img src={temperatura}
                                                                                            alt=""/></span>
                                  <h5 className="u-custom-font u-font-montserrat u-text u-text-1">Temperatura</h5>

                              </div>
                          </div>
                          <div
                              className=" left u-align-center u-container-style u-custom-item u-list-item u-palette-3-base u-radius-50 u-repeater-item u-shape-round u-list-item-2"
                              data-animation-name="customAnimationIn" data-animation-duration="1750"
                              data-animation-delay="500">
                              <div className="u-container-layout u-similar-container u-container-layout-2"><span
                                  className="u-file-icon u-icon u-text-white u-icon-2"><img src={Gas} alt=""/></span>
                                  <h5 className="u-custom-font u-font-montserrat u-text u-text-2">Gas</h5>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                      <div className="u-layout">
                          <div className="u-layout-row">
                              <div className="u-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                                  <div className="u-container-layout u-valign-middle u-container-layout-3">
                                      <h2 className="u-custom-font u-font-montserrat u-text u-text-3"
                                          data-animation-name="customAnimationIn" data-animation-duration="1750"
                                          data-animation-delay="500"> Sobre nosotros</h2>
                                  </div>
                              </div>
                              <div className="u-align-justify u-container-style u-layout-cell u-size-30 u-layout-cell-2"
                                   data-animation-name="customAnimationIn" data-animation-duration="1750"
                                   data-animation-delay="500">
                                  <div className="u-container-layout u-container-layout-4">
                                      <p className="u-custom-font u-font-merriweather u-large-text u-text u-text-variant u-text-4"> somos
                                          una empresa que quiere ayudar en las empresas pymes, a las instituciones
                                          educativas y casa hogar con un detector de incendio donde puedes monitorear la
                                          calidad de la temperatura y el cantidad de gas en el aire</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
               </div>
              </div>
          </div>


      </>
  )
}
export default Reloj;