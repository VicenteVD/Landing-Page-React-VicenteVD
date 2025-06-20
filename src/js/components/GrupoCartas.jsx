import React from "react";
import Card from "./Card";



const GrupoCartas = () => {
    const cartas = [
        { titulo: "Card Title", texto: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eligendi qui quasi.", boton: "Find out More!", img: "https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpcyUyMGRlJTIwZm9uZG98ZW58MHx8MHx8fDA%3D" },
        { titulo: "Card Title", texto: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eligendi qui quasi.", boton: "Find out More!", img: "https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpcyUyMGRlJTIwZm9uZG98ZW58MHx8MHx8fDA%3D" },
        { titulo: "Card Title", texto: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eligendi qui quasi.", boton: "Find out More!", img: "https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpcyUyMGRlJTIwZm9uZG98ZW58MHx8MHx8fDA%3D" },
        { titulo: "Card Title", texto: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eligendi qui quasi.", boton: "Find out More!", img: "https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpcyUyMGRlJTIwZm9uZG98ZW58MHx8MHx8fDA%3D" }
    ]
    return (
        <div className="container">
            <div className="row justify-content-center">
                {cartas.map((cartaIndividual, index) => (
                    <Card
                        key={index}
                        titulo={cartaIndividual.titulo}
                        texto={cartaIndividual.texto}
                        boton={cartaIndividual.boton}
                        img={cartaIndividual.img}
                    />
                ))}
            </div>
        </div>
    )

};

export default GrupoCartas