import { Link, useNavigate } from 'react-router-dom';
import { Badge, Card, Col, Row, Typography } from 'antd';
import {
    ArrowRightOutlined,
    CalendarOutlined
} from '@ant-design/icons';
import "../style/CartasInicio.css"
const { Meta } = Card;

const { Paragraph } = Typography;
export const CartasInicio = () => {

    const navigate = useNavigate();
    const data = [
        {
            title: 'Paraíso Recibe con Entusiasmo al Ballet Folklórico Usim Yeye de Sonora en Intercambio Cultural',
            fecha: "7 Jun",
            imagen: "https://gobparaiso.blob.core.windows.net/noticias/Paraíso%20Ballet%20Folklórico/WhatsApp%20Image%202025-06-09%20at%2010.40.38%20AM(2).jpeg",
            link: "/noticias/Paraiso_Recibe_con_Entusiasmo_al_Ballet_Folklórico_Usim_Yeye_de_Sonora_en_Intercambio_Cultural"
        },
        {
            title: 'ASIPONA y Ayuntamiento de Paraíso Refuerzan Colaboración para elProgreso del municipio',
            fecha: "7 Jun",
            imagen: "https://gobparaiso.blob.core.windows.net/noticias/ASIPONA y Ayuntamiento de Paraíso/WhatsApp Image 2025-06-09 at 10.40.40 AM.jpeg",
            link: "noticias/ASIPONA_y_Ayuntamiento_de_Paraiso_Refuerzan_Colaboracion_para_el_Progreso_del_municipi"
        },
        {
            title: 'Alcalde Alfonso Baca Sevilla Impulsa Soluciones para Mejorar el Suministro Eléctrico en Paraíso',
            fecha: '8 Jun',
            imagen: "https://gobparaiso.blob.core.windows.net/noticias/Alcalde Alfonso Baca Sevilla Impulsa/WhatsApp Image 2025-06-09 at 10.40.41 AM.jpeg",
            link: "noticias/Alcalde_Alfonso_Baca_Sevilla_ImpulsaSoluciones_para_Mejorar_el_Suministro_Electrico_en_Paraiso"
        },
        {
            title: 'Paraíso Celebra el Día Mundial del Medio Ambiente con un Firme Compromiso por Mares Libres de Plástico y un Futuro Sostenible',
            fecha: '8 Jun',
            imagen: "https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.48 AM.jpeg",
            link: "noticias/Paraiso_Celebra_el_Dia_Mundial_del_Medio_Ambiente_con_un_Firme_Compromiso_por_Mares_Libres_de_Plastico_y_un_Futuro_Sostenible"
        },
    ];

    return (
        <div className='cartasContenedor'>
            {/* <div> */}
            <div className='contenedorTitulo'>
                <h2 className='tituloSeccion'>Noticias</h2>
                <Link to="/noticia"
                    // <Link to="noticias"
                    className='tituloLink'
                >
                    Ver todas las noticias
                    <ArrowRightOutlined />
                </Link>
            </div>
            <Row gutter={[22, 8]}>
                {data.map((item) => (
                    <Col
                        key={item.title}
                        xs={{ flex: "100%" }}
                        md={{ flex: "50%" }}
                        xl={{ flex: "25%" }}
                    >
                        <Badge.Ribbon key={item.title} placement='start' text={item.fecha} color="#f26c0d" >
                            <Card
                                cover={<img alt="example" style={{ height: "12rem" }}
                                    src={(item.imagen)
                                        ? item.imagen
                                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ciudad_de_Paraíso_%288%29.jpg/1280px-Ciudad_de_Paraíso_%288%29.jpg"

                                    }
                                />}
                            >
                                <Meta description={
                                    <div className='metaCard' >
                                        <h4 className='metaCardTitulo' >
                                            <Paragraph ellipsis={{ rows: 2 }}
                                                style={{
                                                    fontSize: "1rem",
                                                    fontWeight: 700,
                                                    lineHeight: "1.75rem"
                                                }}>
                                                {item.title}
                                            </Paragraph>
                                        </h4>
                                        <div className='metaCardFecha'>
                                            <CalendarOutlined />
                                            <p className='metaCardFechaP'>{item.fecha}</p>
                                        </div>
                                        <button className='botonCarta'
                                            onClick={() => navigate(item.link)}
                                        >Leer más</button>
                                    </div>
                                } />
                            </Card>
                        </Badge.Ribbon>
                    </Col>
                ))}
            </Row>
        </div>

    )
}
