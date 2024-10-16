import React from 'react'
import "../Css/Menu.css"
import hamburguesa from "../assets/hamburguesa.jpg";
import pizza from "../assets/pizza.jpg";
import pasta from "../assets/pasta.jpg";
import ensalada from "../assets/ensalada.jpg";
const Menu = () => {
    return (

        <div>
            <div class="titulo"><h1>Menú</h1></div>
            <div class="menu">
                <div class="manu-hamburguesa">
                    <img src={hamburguesa} alt="Imagen de la hamburguesa" />
                    <h3>Hamburguesa Clásica</h3>
                    <p>Nuestra Hamburguesa Clásica es una verdadera joya de la parrilla.
                        Preparada con carne 100% de res jugosa, Acompañado de queso cheddar
                        derretido, lechuga crujiente, tomate fresco, cebolla caramelizada y
                        nuestra salsa especial en un suave pan brioche.
                        <div class="precio">Precio: $25.000</div></p>
                </div>
                <div class="menu-pizza">
                    <img src={pizza} alt="Imagen de la pizza" />
                    <h3>Pizza Margarita</h3>
                    <p>Disfruta de la auténtica tradición italiana con nuestra Pizza Margarita.
                        Hecha con una base fina y crujiente, cubierta con una deliciosa salsa de
                        tomate casera, mozzarella fresca derretida y adornada con hojas de albahaca.
                        <div class="precio">Precio: $32.000</div></p>
                </div>
                <div class="menu-pasta">
                    <img src={pasta} alt="Imagen de la pasta" />
                    <h3>Pasta Alfredo</h3>
                    <p>
                        Sumérgete en la cremosidad de nuestra Pasta Alfredo. Fettuccine cocido a la
                        perfección, envuelto en una suave y sedosa salsa Alfredo hecha con auténtico
                        queso parmesano, mantequilla y crema fresca. El plato se complementa con pechuga
                        de pollo a la parrilla, dorada por fuera y jugosa por dentro.
                        <div class="precio">Precio: $22.000</div></p>
                </div>
                <div class="menu-ensalada">
                    <img src={ensalada} alt="Imagen de la ensalada" />
                    <h3>Ensalada César</h3>
                    <p>Fresca y deliciosa, nuestra Ensalada César combina lo mejor de la huerta
                        con un toque clásico. Lechuga romana crujiente acompañada de crutones dorados
                        al horno, virutas de queso parmesano añejo y un aderezo César cremoso con el
                        equilibrio perfecto.
                        <div class="precio">Precio: $17.000</div></p>
                </div>
            </div>

        </div>
    )
}


export default Menu