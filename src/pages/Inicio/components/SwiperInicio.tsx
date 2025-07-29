import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import '../style/SwiperInicio.css'
import { Modal } from "antd";
export const SwiperInicio = () => {
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
        <>
            <Modal
                title="Playa del Sol"
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
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                keyboard={true}
                loop={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="contenedorSwiper"
            >
                <SwiperSlide
                    className="contenedorVideo"
                >
                    <video src="https://gobparaiso.blob.core.windows.net/home/Playa%20del%20Sol.mp4" loop autoPlay muted></video>
                    <div className="cajaSombra" style={{backgroundColor:"#FFF"}}>
                        <div className="container containerTextos">
                            <div className="contenedorCaja">
                                <h2 className="swiperTextoTitulo" >Playa del Sol</h2>
                                <h3 className="swiperTextoSubTitulo">PARAISO</h3>
                                <p className="swiperParrafo">
                                    Visita nuestros atractivos turísticos.
                                </p>
                                <button className="swiperBoton"
                                    onClick={showModal}
                                >Conoce más</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: "url(/Puente_Bellote.png)",
                        // backgroundPosition: "center",
                        backgroundAttachment: "contain",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        // background: "linear-gradient(147deg,rgb(230, 228, 227) 0%,rgb(7, 7, 7) 74%)",
                    }}
                >
                    <div className="cajaSombra">
                        <div className="container containerTextos">
                            <div className="contenedorCaja">
                                <h2 className="swiperTextoTitulo" >Puente el Bellote</h2>
                                <h3 className="swiperTextoSubTitulo">PUENTE EL BELLOTE</h3>
                                <p className="swiperParrafo">
                                    Visita nuestros atractivos turísticos.
                                </p>
                                <button className="swiperBoton"
                                    onClick={() => console.log("hola2")}
                                >Conoce más</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>


                <SwiperSlide
                    style={{
                        backgroundImage: "url(/Cangrejo_Ceiba.png)",
                        backgroundPosition: "center",
                        backgroundAttachment: "contain",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        // background: "linear-gradient(147deg,rgb(230, 228, 227) 0%,rgb(7, 7, 7) 74%)",
                    }}
                >
                    <div className="cajaSombra">
                        <div className="container containerTextos">
                            <div className="contenedorCaja">
                                <h2 className="swiperTextoTitulo" >Puerto Ceiba</h2>
                                <h3 className="swiperTextoSubTitulo">MALECÓN DEL CANGREJO AZUL</h3>
                                <p className="swiperParrafo">
                                    Visita nuestros atractivos turísticos y disfruta de la gastronomía local.
                                </p>
                                <button className="swiperBoton"
                                    onClick={() => console.log("hola2")}
                                >Conoce más</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide
                    style={{
                        backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/481786481_122151543080505987_5429321483106752167_n.jpg-BGmVUC87kptJy3gLnRRbF8qolsTtjk.jpeg)",
                        backgroundPosition: "center",
                        backgroundAttachment: "contain",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        // background: "linear-gradient(147deg,rgb(230, 228, 227) 0%,rgb(7, 7, 7) 74%)",
                    }}
                >
                    <div className="cajaSombra">
                        <div className="container containerTextos">
                            <div className="contenedorCaja">
                                <h2 className="swiperTextoTitulo" >Feria Paraíso 2025</h2>
                                <h3 className="swiperTextoSubTitulo">DEL 20 AL 26 DE ABRIL</h3>
                                <p className="swiperParrafo">
                                    Disfruta de eventos culturales, artísticos y gastronómicos para toda la familia.
                                </p>
                                <button className="swiperBoton"
                                    onClick={() => console.log("hola")}
                                >Conoce más</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
            </Swiper >
        </>
    )
}
