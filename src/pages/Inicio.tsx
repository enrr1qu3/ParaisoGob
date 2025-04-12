import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import 'swiper/swiper-bundle.css'
export default function Inicio() {
    return (
        <div  >
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                keyboard={true}
                loop={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                style={{ width: "100%", height: "52.8vh" }}
            >
                <SwiperSlide
                    style={{
                        // backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/481786481_122151543080505987_5429321483106752167_n.jpg-BGmVUC87kptJy3gLnRRbF8qolsTtjk.jpeg)",
                        // backgroundPosition: "center",
                        // backgroundAttachment: "contain",
                        // backgroundSize: "cover",
                        // backgroundRepeat: "no-repeat",
                        backgroundColor: "green"
                    }}
                >
                    <div style={{
                        width: "100%", height: "100%",
                        color: "#fff"
                    }} >
                        <div className="container"
                            style={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                            <div>
                                <h2 style={{ fontSize: "3rem", margin: 0, marginBottom: ".5rem" }} >Feria Paraíso 2025</h2>
                                <h3 style={{ fontSize: "2rem", margin: 0, marginBottom: ".5rem" }}>Feria Paraíso 2025</h3>
                                <p>Visita nuestros atractivos turísticos y disfruta de la gastronomía local.</p>
                                <button>Conoce más</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="container">
                <div>Noticias</div>
                <div>Portal de Transparencia</div>

            </div>
        </div >
    )
}
