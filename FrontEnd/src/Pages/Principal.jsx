import { useState } from "react"
import NavbarMenu from "../Componentes/Menu"
import "../Css/Principal.css"
import carruselUno from "../assets/carrusel1.jpg"
import carruselDos from "../assets/carrusel2.jpg"
import carruselTres from "../assets/carrusel3.jpg"
import TartaDeSalmon from "../assets/TartadeSalmon.jpg"
import foisPlancha from "../assets/foisPlancha.jpg"
import champiñones from "../assets/champiñones.jpg"
import filete from "../assets/filete.jpg"
import lubia from "../assets/lubia.jpeg"
import trufas from "../assets/trufas.jpg"
import persona from "../assets/persona1.jpg"
import persona1 from "../assets/persona2.jpg"
import persona2 from "../assets/persona3.jpg"
import ubicacion from "../assets/ubicacion.jpg"
import reservas from "../assets/reservas.png";
import Cumpleaños from "../assets/Cumpleaños.jpg"

const Principal = () => {


    const [verMas, setVerMas] = useState(false)

    const HandleVerMasClick = () => {
        setVerMas(!verMas);
    };
    return (
        <div>
            <NavbarMenu></NavbarMenu>
            <div id="carouselExampleIndicators" className="carrusel carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carruselUno} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carruselDos} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carruselTres} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section className="acerca-de" id="acerca-de">
                <div className="contenido-acerca-de">
                    <h2>Acerca de</h2>
                    <p className="texto-de-acerca-de">¡Bienvenidos a Fuego & Vino! En nuestro restaurante, la pasión por la cocina y el amor por el buen vino se fusionan para ofrecerte una experiencia gastronómica inolvidable.

                        En Fuego & Vino, nos especializamos en la cocina a la parrilla, con cortes de carne seleccionados y mariscos frescos que se cocinan a la perfección, resaltando los sabores auténticos de cada ingrediente. Puedes disfrutar de nuestras jugosas costillas a la barbacoa, el clásico ojo de bife, o una deliciosa langosta a la plancha. Además, ofrecemos una variedad de guarniciones artesanales, como nuestro puré de papas trufado y verduras asadas al fuego. Para acompañar tu comida, nuestra carta de vinos ha sido cuidadosamente seleccionada para complementar cada plato, con opciones que van desde los mejores caldos locales hasta reconocidas marcas internacionales.

                        Te invitamos a visitar nuestra página web, donde podrás explorar nuestro menú completo y hacer tu reserva de manera rápida y sencilla. ¡No dejes pasar la oportunidad de disfrutar de una velada única en Fuego & Vino! ¡Te estamos esperando!</p>
                </div>
            </section>
            <hr />

            <section className="servicios">
                <h2 className="titulo-seccion">Nuestros servicios</h2>
                <div className="servicio">
                    <div className="contenedor-servicio">
                        <div >
                            <h4>¡Reserva tu mesa en Fuego y Vino hoy mismo!</h4>
                            <p>No te quedes sin vivir la mejor experiencia gastronómica en Fuego y Vino, donde el sabor de la parrilla y los mejores vinos se fusionan para brindarte una velada inolvidable.</p>

                            <p>📅 Reserva fácil y rápido a través de nuestra página web. Garantiza tu lugar y disfruta de un ambiente acogedor con lo mejor de nuestra cocina y vinos seleccionados.</p>
                            <a href="./Login" className="btn boton-reservar">Realizar Reserva</a>
                        </div>
                        <div className="conten-datos-servicios">
                            <img src={reservas} alt="" />

                        </div>

                    </div>
                </div>

                <div className="servicio">
                    <div className="contenedor-servicio">
                        <div >
                            <h4>Celebra tus momentos más especiales en Fuego & Vino!</h4>
                            <p>¿Tienes un aniversario, cumpleaños o cualquier ocasión especial? En <strong>Fuego & Vino</strong>, convertimos cada celebración en una experiencia inolvidable. Déjanos ser parte de esos momentos únicos con nuestra exquisita cocina, vinos selectos y un ambiente cálido y acogedor.</p>

                            <p>🎂 Reserva tu evento y deja que nos encarguemos de todo, desde una cena íntima hasta una gran celebración. Personalizamos cada detalle para que solo tengas que preocuparte por disfrutar.</p>
                            <a href="./Login" className="btn boton-reservar">Reservar Evento</a>
                        </div>
                        <div className="conten-datos-servicios">
                            <img src={Cumpleaños} alt="" />

                        </div>

                    </div>
                </div>

            </section>
            <hr />
            <section className="menus" id="menu">
                <h2 className="titulo-seccion">Nuestro Menú</h2>
                <div>
                    <div className="menuR">
                        <h3>Entradas</h3>
                        <div className="contenidoInicial">

                            <div className="menu1">
                                <h5>Tarta de salmon</h5>
                                <img className="imagenesMenu" src={TartaDeSalmon} alt="" />
                                <p>Salmón fresco picado, aguacate, mango y aderezo de sésamo, servido con chips de loto.</p>
                            </div>
                            <div className="menu1">
                                <h5>Foie gras a la plancha</h5>
                                <img className="imagenesMenu" src={foisPlancha} alt="" />
                                <p>Rodajas de foie gras a la plancha, compota de higos y pan brioche tostado.</p>
                            </div>
                            <div className="menu1">
                                <h5>Crema de champiñones</h5>
                                <img className="imagenesMenu" src={champiñones} alt="" />
                                <p>Crema suave de champiñones silvestres, trocitos de avellana y crema fresca.</p>
                            </div>
                        </div>


                        <div className={`collapse ${verMas ? 'show' : ''}`} id="contenidoAdicional">
                            <div>
                                <h3>Platos Principales</h3>
                                <div className="contenidoInicial">

                                    <div className="menu1">
                                        <h5>Filete de res Rossini</h5>
                                        <img className="imagenesMenu" src={filete} alt="" />
                                        <p>Filete de res acompañado de salsa de oporto, trufas negras y puré de patatas con aceite de oliva.</p>
                                    </div>
                                    <div className="menu1">
                                        <h5>Lubina al horno</h5>
                                        <img className="imagenesMenu" src={lubia} alt="" />
                                        <p>Lubina al horno, emulsión de lima y verduras de temporada asadas.</p>
                                    </div>
                                    <div className="menu1">
                                        <h5>Risotto de trufas</h5>
                                        <img className="imagenesMenu" src={trufas} alt="" />
                                        <p>Risotto cremoso con parmesano, aromatizado con trufa negra y servido con lascas de parmesano.</p>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>
                </div>
                <div className="mt-auto verMas">
                    <button className="botonVermas" onClick={HandleVerMasClick}>
                        {verMas ? 'Ver menos' : 'Ver más'}
                    </button>
                </div>

            </section>
            <hr />

            <section className="Ubicacion">
                <h2 className="titulo-seccion">Visitanos</h2>
                <div className="ubicacion-contenido">
                    <div>
                        <h4>¡Descubre la experiencia única en Fuego y Vino!</h4>
                        <p>Te invitamos a disfrutar de lo mejor de la parrilla y los vinos más selectos en un ambiente acogedor y vibrante. En Fuego y Vino, combinamos sabores ahumados y especias irresistibles con una selección exclusiva de vinos que harán que tu visita sea inolvidable.</p>

                        <p>📍 Encuéntranos en la Calle del Sabor #123, Barrio Gourmet, Medellín.</p>

                        <p>¡Ven con amigos o en pareja, y déjate llevar por el fuego de los sabores! No olvides reservar tu mesa para vivir una experiencia que encenderá todos tus sentidos.🔥✨</p>
                    </div>
                    <img className="imagen-ubicacion" src={ubicacion} alt="" />
                </div>


            </section>
            <hr />
            <section className="reseña" id="reseña">
                <div>
                    <h2 className="titulo-seccion" >Reseñas</h2>
                    <div className="contenedor-reseña">
                        <div className="reseña1">
                            <div className="foto-perfil"><img src={persona} alt="" /></div>

                            <div className="conten-datos">
                                <div>
                                    <p>Isaac Gomez</p>
                                    <p>¡Una experiencia inolvidable! La comida estuvo espectacular, llena de sabores auténticos y bien presentados. El ambiente es acogedor y el servicio de primera, siempre atentos a cada detalle. Definitivamente, uno de los mejores restaurantes que he visitado. ¡Recomendado al 100%!</p>
                                </div>

                            </div>
                        </div>
                        <div className="reseña1">
                            <div className="foto-perfil"><img src={persona2} alt="" /></div>

                            <div className="conten-datos">
                                <div>
                                    <p>Cristian Alvarez</p>
                                    <p>Ambiente acogedor, comida increíble y un servicio impecable. ¡Totalmente recomendable!</p>
                                </div>

                            </div>
                        </div>
                        <div className="reseña1">
                            <div className="foto-perfil"><img src={persona1} alt="" /></div>

                            <div className="conten-datos">
                                <div>
                                    <p>Jose Parra</p>
                                    <p>Excelente atención y comida deliciosa. Cada plato fue una sorpresa de sabor. ¡Volveré pronto!</p>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <hr />
            <section className="formulario-principal">
                <h2 className="titulo-seccion" >Contactanos</h2>
                <div className="contenido-formulario">
                    <div className="contenido-texto-formulario">
                        <h4>¡Nos encantaría saber de ti!
                        </h4>
                        <p>En Fuego y Vino, siempre estamos atentos a tus comentarios, preguntas o sugerencias. Completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible. ¡Gracias por elegirnos para tu próxima experiencia gastronómica!</p>
                    </div>
                    <form action="" className="form-principal">
                        <input className="inputs-principal" type="text" placeholder="ingrese nombre" />
                        <input className="inputs-principal" type="email" placeholder="ingrese email" />
                        <input className="inputs-principal" type="number" placeholder="ingrese telefono" />
                        <textarea name="" id="" placeholder="ingrese mensaje"  ></textarea>
                        <input className="btn" type="submit" />
                    </form>
                </div>

            </section>

        </div>


    )

}

export default Principal