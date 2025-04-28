import { Link } from 'react-router-dom';
import { Badge, Card, Col, Row, Typography } from 'antd';
import {
    ArrowRightOutlined,
    CalendarOutlined
} from '@ant-design/icons';
import "../style/CartasInicio.css"
const { Meta } = Card;

const { Paragraph } = Typography;
export const CartasInicio = () => {
    const data = [
        {
            title: 'Trabajos de Reparación en Camino hacia Dos Bocas',
            fecha: "7 Abr",
            imagen: "/noticia1.jpg"
        },
        {
            title: 'Paraíso Presenta Proyectos Estratégicos ante CONAGUA',
            fecha: "4 Abr",
            imagen: "/noticia3.jpg"
        },
        {
            title: '¡Siguen las Pollitas! Premiamos tu Responsabilidad',
            fecha: '4 Abr',
            imagen: "/noticia2.jpg"
        },
        {
            title: 'Anuncian cursos gratuitos de capacitación para el empleo',
            fecha: '1 Abr'
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
                                        <button className='botonCarta'>Leer más</button>
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
