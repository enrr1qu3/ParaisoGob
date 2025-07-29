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
            imagen: "https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/524996808_122183410100505987_8906654654230327905_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHgRUu56VI_PcRH05N0F_natIfuKyRi9VO0h-4rJGL1U4jqMo-wG2lpp1J4eIKjCNs-agmV6SX6qKWoudiLyBwY&_nc_ohc=ns17qEZ-6_oQ7kNvwEzmRkt&_nc_oc=AdlwlrKgjh3Mx2UUnRqCTh-PCE2ScitGnQ_4KbEw08eFrYeyUYT7mnD6tMYSPG00Pb73XtsYnRQOKM92Mrj0YTpI&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=lNxJPMtpp56g4e3JfoMF-w&oh=00_AfQ1aou8ckKWpzjn7ySTIEOZZ624lYbbfrzuX6W0dHauzQ&oe=688E1CC2",
            link: "AYUNTAMIENTO_Y_GOBIERNO_DEL_PUEBLO_FACILITAN_TRAMITES_VEHICULARES_EN_PARAISO"
        },
        {
            title: 'PARAÍSO SE MUEVE: UN FIN DE SEMANA QUE REFLEJA ORGULLO, PASIÓN Y FUTURO',
            fecha: "27 Jun",
            imagen: "https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/524577970_122183255012505987_3480124234158256541_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGEArzUiY1DmKWjjEfvDhzS-xJNjp5BLbr7Ek2OnkEtukvKqTKt4Pg0fmeYtfnE2v74eWdVT6HqfPmzy2Ag07Y5&_nc_ohc=G-Zotm2Du5QQ7kNvwFcx_r6&_nc_oc=Adn2NI_206JZXmOTnZeHe158XfwPacje2fkDac8Q0z2KkivtV7y6PplWSYyweaj02RuWYLwPF5Ns7HmmOrgR2HCi&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=otNR4y7Ffg1nmbqEeI6czQ&oh=00_AfS_RTX4Zjjn3d6zidfvFRchnjaoQ8jClXzpMaQjv5Vk9Q&oe=688E21B1",
            link: "PARAISO_SE_MUEVE_UN_FIN_DE_SEMANA_QUE_REFLEJA_ORGULLO_PASION_Y_FUTURO"
        },
        {
            title: 'PRESIDENTE MUNICIPAL DE PARAÍSO REALIZA LANZAMIENTO DE HONOR EN JUEGO DE LOS OLMECAS DE TABASCO',
            fecha: "27 Jun",
            imagen: "https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/524306314_122183241044505987_6685868173445221665_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGrOPN0d53YWV1ZhsylL5uwGf638Fdk0FoZ_rfwV2TQWtU2pZY-ZxkhQW4hMuoqcGodF_Mav7vAZCjLqJUhDyWb&_nc_ohc=7skiVxBJdX4Q7kNvwF7JZaO&_nc_oc=AdmQRGFebdE9Pymko_e33s3-2R4mXWF4D_1N9LdHzHhQoTcIe6T7lvDzzYmn2IZDE0r6_q02UxGU_Zhx_6KBaiYC&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=9clYRezj-3HUxp1JC1IDHg&oh=00_AfTtoc7DFzy77gdKZ7X8N0dwfYdJ4UmYFMjbvrFUuH-udQ&oe=688E12BF",
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