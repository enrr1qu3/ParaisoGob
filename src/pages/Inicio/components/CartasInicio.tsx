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
            title: 'Inauguración de nueva planta potabilizadora beneficiará a más de 5,000 habitantes',
            fecha: "7 Abr",
            imagen: "https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/491328258_1258649088950249_2793354559391509090_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFOsAFdWLxk--nTrb5qPMtV-HFWlCTbfBr4cVaUJNt8GsqM7e9sGocV80YET7LnU6fYTUv_w5kL3G7LmuKIrSpK&_nc_ohc=ztfmyNsweZEQ7kNvwEh-6d9&_nc_oc=AdlFGEPpFQqZH1oXC0-4UVs5uhGyFi5trLYGzPE81u2PYFG695QMkez3Rm3Y67OVCfsGUxexWk-WgIApYhgsaTWI&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=UeuExusvfKdp_bSznmLhAw&oh=00_AfH-pMbDmPMic_CFy1x9jl2VXoL-nA5Si2LfHJ3mJUB4Mg&oe=680268B9"
        },
        {
            title: 'Inicia programa de bacheo en colonias del centro',
            fecha: "4 Abr"
        },
        {
            title: 'Ayuntamiento realiza jornada de limpieza en playas',
            fecha: '2 Abr',
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
