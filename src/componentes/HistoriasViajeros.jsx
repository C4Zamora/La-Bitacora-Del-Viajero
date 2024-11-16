import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../componentes/HistoriasViajeros.css';

const HistoriasViajeros = () => {
    const historias = [
        {
            id: 1,
            titulo: 'Aventura en los Alpes',
            descripcion: 'Una experiencia inolvidable en las montañas.',
            imagen: 'img/Alpes.jpg'
        },
        {
            id: 2,
            titulo: 'Descubriendo el Amazonas',
            descripcion: 'Una travesía por la selva amazónica.',
            imagen: 'img/Amazonas.jpg'
        },
        {
            id: 3,
            titulo: 'Cultura en Japón',
            descripcion: 'Sumergiéndome en la tradición japonesa.',
            imagen: 'img/Japon.jpg'
        },
        {
            id: 4,
            titulo: 'Safari en Kenia',
            descripcion: 'Un encuentro cercano con la fauna salvaje.',
            imagen: "img/Lugar1.jpg"
        },
        // Puedes añadir más historias aquí
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <section className="historias-viajeros">
            <h2>Historias de Viajeros</h2>
            <p>Comparte tus experiencias de viaje y forma parte de nuestra comunidad de viajeros.</p>
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
                {historias.map((historia) => (
                    <div key={historia.id} className="card">
                        <img src={historia.imagen} alt={historia.titulo} className="card-img" />
                        <div className="card-content">
                            <h3>{historia.titulo}</h3>
                            <p>{historia.descripcion}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default HistoriasViajeros;
