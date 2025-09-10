import { useNavigate } from 'react-router-dom';
import { Badge, Card, List, Tooltip, Typography } from 'antd';
import {
    CalendarOutlined
} from '@ant-design/icons';
const { Meta } = Card;
const { Paragraph } = Typography;

export default function Noticias() {

    const navigate = useNavigate();
    const data = [
        // noticias de Julio 2025
        {
            title: 'AYUNTAMIENTO Y GOBIERNO DEL PUEBLO FACILITAN TRÁMITES VEHICULARES EN PARAÍSO',
            fecha: "28 Jun",
            imagen: "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/525984218_122183410310505987_7172928550211851012_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qW25ivGMo0sQ7kNvwH2foyd&_nc_oc=AdkshXJrC3DmucgeUd_HL2EEcmEGLEalpWf-wVMlwnNsY6BmPRwJp198v1PjBDSE9vc&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=Qby0c0o7Rg-k3DK5oY-0XA&oh=00_AfbS7oWPUpqKLtNl5osdi1gMIPBp8HkTDHN1XOMnRkkbQw&oe=68C7C499",
            link: "AYUNTAMIENTO_Y_GOBIERNO_DEL_PUEBLO_FACILITAN_TRAMITES_VEHICULARES_EN_PARAISO"
        },
        {
            title: 'PARAÍSO SE MUEVE: UN FIN DE SEMANA QUE REFLEJA ORGULLO, PASIÓN Y FUTURO',
            fecha: "27 Jun",
            imagen: "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/524995466_122183258066505987_8280541788545535346_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF48bAnhi9O2eHpGyUU48NsneYysHIuried5jKwci6uJxFPNhe5KC6DHy9C12Z1m_C2fqvlBUVuQjR7WNSLzOg4&_nc_ohc=nYyMW-qZX8wQ7kNvwH64mrq&_nc_oc=AdnyU9g-Pt608rtKDKfW1Yf-DqT_MP39MIMjgvJx76agHLCAXQCrnXYgj_eQKjCEwM8&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=Gc4vzBk1ZKYDcTTkESINcg&oh=00_AfbDpWVPWAlMSlG6YDbe_deoR4NYlNoHz1sEcDQCfG4fNQ&oe=68C7E3FB",
            link: "PARAISO_SE_MUEVE_UN_FIN_DE_SEMANA_QUE_REFLEJA_ORGULLO_PASION_Y_FUTURO"
        },
        {
            title: 'PRESIDENTE MUNICIPAL DE PARAÍSO REALIZA LANZAMIENTO DE HONOR EN JUEGO DE LOS OLMECAS DE TABASCO',
            fecha: "27 Jun",
            imagen: "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/524306314_122183241044505987_6685868173445221665_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGrOPN0d53YWV1ZhsylL5uwGf638Fdk0FoZ_rfwV2TQWtU2pZY-ZxkhQW4hMuoqcGodF_Mav7vAZCjLqJUhDyWb&_nc_ohc=FfVTLw5oIfYQ7kNvwEYP8jC&_nc_oc=AdmKOe2FS1GGW0y8BdksSTFOb7tGqqUgb9wnT1F5DijLwsmkbe_CbwWK69I5FEOSa4E&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=Pszy4WQVwHMGvnEMejL7gw&oh=00_AfZrS1LICyfXOv2ESgDogYrk6gKD16uiowV3ewf-WP32gQ&oe=68C7DC7F",
            link: "PRESIDENTE_MUNICIPAL_DE_PARAISO_REALIZA_LANZAMIENTO_DE_HONOR_EN_JUEGO_DE_LOS_OLMECAS_DE_TABASCO"
        },
        // Noticias de Junio 2025
        {
            title: 'Alcalde Alfonso Baca Sevilla Impulsa Soluciones para Mejorar el Suministro Eléctrico en Paraíso',
            fecha: '8 Jun',
            imagen: "https://gobparaiso.blob.core.windows.net/noticias/Alcalde Alfonso Baca Sevilla Impulsa/WhatsApp Image 2025-06-09 at 10.40.41 AM.jpeg",
            link: "Alcalde_Alfonso_Baca_Sevilla_ImpulsaSoluciones_para_Mejorar_el_Suministro_Electrico_en_Paraiso"
        },
        {
            title: 'Paraíso Celebra el Día Mundial del Medio Ambiente con un Firme Compromiso por Mares Libres de Plástico y un Futuro Sostenible',
            fecha: '8 Jun',
            imagen: "https://gobparaiso.blob.core.windows.net/noticias/Paraíso Celebra el Día Mundial del Medio Ambiente /WhatsApp Image 2025-06-09 at 10.40.48 AM.jpeg",
            link: "Paraiso_Celebra_el_Dia_Mundial_del_Medio_Ambiente_con_un_Firme_Compromiso_por_Mares_Libres_de_Plastico_y_un_Futuro_Sostenible"
        },
        {
            title: 'Paraíso Recibe con Entusiasmo al Ballet Folklórico Usim Yeye de Sonora en Intercambio Cultural',
            fecha: "7 Jun",
            imagen: "https://gobparaiso.blob.core.windows.net/noticias/Paraíso%20Ballet%20Folklórico/WhatsApp%20Image%202025-06-09%20at%2010.40.38%20AM(2).jpeg",
            link: "Paraiso_Recibe_con_Entusiasmo_al_Ballet_Folklórico_Usim_Yeye_de_Sonora_en_Intercambio_Cultural"
        },
        {
            title: 'ASIPONA y Ayuntamiento de Paraíso Refuerzan Colaboración para elProgreso del municipio',
            fecha: "7 Jun",
            imagen: "https://gobparaiso.blob.core.windows.net/noticias/ASIPONA y Ayuntamiento de Paraíso/WhatsApp Image 2025-06-09 at 10.40.40 AM.jpeg",
            link: "ASIPONA_y_Ayuntamiento_de_Paraiso_Refuerzan_Colaboracion_para_el_Progreso_del_municipi"
        },
    ];

    return (
        <div style={{ margin: " 20px 10%" }}>
            {/* <div> */}
            <div className='contenedorTitulo'>
                <h2 className='tituloSeccion'>Noticias</h2>
            </div>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 4,
                    xxl: 4,
                }}
                pagination={{ align: "center" }}
                dataSource={data}
                renderItem={(item: any) => (
                    <List.Item>
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
                                        <Tooltip title={item.title} color='orange'>
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
                                        </Tooltip>
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
                    </List.Item>
                )}
            />
            {/* <Row gutter={[22, 8]}>
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
            </Row> */}
        </div>

    )
}