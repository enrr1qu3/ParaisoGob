import { useState } from "react";

import { ConfigProvider, Modal } from "antd";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import '../style/SwiperInicio.css';

export const SwiperInicio = () => {

    const slides = [
        {
            type: "video",
            src: "https://gobparaiso.blob.core.windows.net/home/Playa%20del%20Sol.mp4", // demo video
            title: "PUERTO DEL SOL",
            subtitle: "PARAISO",
            description: "Un recorrido increíble por nuestros paisajes.",
            buttonText: "Más información",
            buttonLink: "#",
        },
        {
            type: "image",
            src: "/Cangrejo_Ceiba.png",
            alt: "Perro",
            title: "PUERTO CEIBA",
            subtitle: "MALECÓN DEL CANGREJO AZUL",
            description: "Visita nuestros atractivos turísticos y disfruta de la gastronomía local.",
            buttonText: "Explorar",
            buttonLink: "#"
        },
        {
            type: "image",
            src: "/Puente_Bellote.png",
            alt: "Montaña",
            title: "PUENTE EL BELLOTE",
            subtitle: "PUENTE EL BELLOTE",
            description: "Visita nuestros atractivos turísticos.",
            buttonText: "Conoce más",
            buttonLink: "#"
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div style={{ width: "100%", height: "35rem" }}>
            <ConfigProvider
                theme={{
                    components: {
                        Modal: {
                            contentBg: "#d5d5d5",
                            headerBg: "#d5d5d5",
                            titleColor: "#1c9dd9"
                        },
                    },
                }}
            >
                <Modal
                    title="PLAYA DEL SOL"
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={false}
                >
                    <p>PLAYA DEL SOL, EL DESTINO FAMILIAR POR EXCELENCIA EN PARAÍSO
                        TURISMO, SEGURIDAD Y SERVICIOS EN UN SOLO LUGAR
                    </p>
                    <p>Con espacios cómodos, seguros y completamente equipados, Playa del Sol se consolida como uno de los principales atractivos turísticos de Tabasco, ofreciendo a visitantes y familias una experiencia inolvidable frente al mar.
                    </p>
                    <p>
                        Ubicada en el municipio de Paraíso, esta playa cuenta con zonas de palapas tipo sombrilla a solo $200 pesos, secciones amplias con mesa y sillas por $300, y un domo principal para eventos con costo variable según las necesidades del cliente. Además, se brinda atención para bodas, celebraciones especiales y reuniones familiares.
                    </p>
                    <p>Para quienes visitan en vehículo, el área de estacionamiento tiene tarifas accesibles que van desde $30 pesos para motocicletas, hasta $300 pesos para autobuses. También se dispone de baños con regaderas y vestidores por solo $5 pesos, garantizando comodidad y servicios higiénicos a todos los visitantes.
                    </p>
                    <p>Además del encanto natural de sus paisajes, Playa del Sol ofrece seguridad permanente, atención de salvavidas, limpieza constante y acceso a los más deliciosos sabores de playa, todo en un entorno 100% familiar.
                    </p>
                    <p>
                        La administración municipal invita a las y los tabasqueños a disfrutar de este espacio diseñado para el descanso, la convivencia y el desarrollo turístico del estado.
                    </p>
                </Modal>
            </ConfigProvider>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 12000, disableOnInteraction: false }}
                loop
                style={{ width: "100%", height: "100%" }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            {/* Imagen o video según el tipo */}
                            {slide.type === "image" ? (
                                <img src={slide.src} alt={slide.title} className="slide-img" />
                            ) : (
                                <video
                                    className="slide-video"
                                    src={slide.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            )}

                            {/* Overlay en toda la imagen/video */}
                            <div className="overlay"></div>

                            {/* Texto al centro */}
                            <div className="slide-text">
                                <h2>{slide.title}</h2>
                                <h4>{slide.subtitle}</h4>
                                <p>{slide.description}</p>

                                {slide.type === "image" ? (
                                    <a href={slide.buttonLink} className="btn-slide">
                                        {slide.buttonText}
                                    </a>
                                ) : (
                                    <button className="btn-slide" onClick={showModal} style={{ border: 'none', cursor: "pointer", fontWeight: 'bold', fontSize:"1rem"}}>{slide.buttonText}</button>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};