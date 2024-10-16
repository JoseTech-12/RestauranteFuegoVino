import React from 'react'
import "../Css/Fechas.css"
import sanValentin from "../assets/sanValentin.jpg"
import Madre from "../assets/Madre.jpg"
import añonuevo from "../assets/añonuevo.jpg"
import Cumpleaños from "../assets/Cumpleaños.jpg"
const Fechas = () => {
    return (
        <div>
            <div class="fechas-importantes">
                <h2>Fechas Importantes para Celebrar</h2>

                <div class="evento">
                    <img src={sanValentin} alt="Imagen de San Valentin" />
                    <div class="evento-info">
                        <h3>San Valentín - 14 de Febrero</h3>
                        <p>Disfruta de una noche romántica con un menú especial para parejas.
                            Incluye una cena de tres tiempos, postres gourmet y una copa de vino
                            de cortesía. Reserva con anticipación para vivir una velada inolvidable.
                            <div>Precio:150.000</div></p>
                    </div>
                </div>

                <div class="evento">
                    <img src={Madre} alt="Imagen de día de la madre" />
                    <div class="evento-info">
                        <h3>Día de la Madre - Segundo Domingo de Mayo</h3>
                        <p>Ven a celebrar a mamá con nuestro buffet exclusivo y una bebida de cortesía.
                            Regalos sorpresa y un ambiente familiar te esperan para hacer de este día algo especial.
                            <div>Precio: 100.000</div></p>
                    </div>
                </div>

                <div class="evento">
                    <img src={añonuevo} alt="Imagen de año nuevo" />
                    <div class="evento-info">
                        <h3>Noche de Año Nuevo - 31 de Diciembre</h3>
                        <p>Despide el año con estilo en nuestra gran fiesta de Año Nuevo.
                            Cena gourmet, música en vivo, brindis con champagne y una vista espectacular
                            de los fuegos artificiales.
                            <div>Precio:320.000</div></p>
                    </div>
                </div>

                <div class="evento">
                    <img src={Cumpleaños} alt="Imagen de cumpleaños" />
                    <div class="evento-info">
                        <h3>Cumpleaños</h3>
                        <p>¿Cumples años? ¡Celébralo con nosotros! Los cumpleañeros reciben un postre
                            especial de cortesía y descuentos exclusivos para su grupo de amigos o familiares.
                            ¡Haz que tu día sea inolvidable!
                            <div>Precio 170.000</div></p>
                    </div>

                </div>
            </div>
        </div >

    )
}

export default Fechas