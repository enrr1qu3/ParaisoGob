import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import '../style/SwiperInicio.css'
export const SwiperInicio = () => {
    return (
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
                style={{
                    backgroundImage: "url(./public/Puente_Bellote.png)",
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
                    backgroundImage: "url(./public/Cangrejo_Ceiba.png)",
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
    )
}
