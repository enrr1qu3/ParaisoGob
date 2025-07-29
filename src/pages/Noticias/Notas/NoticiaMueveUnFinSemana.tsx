import { useNavigate } from 'react-router-dom';
import { Button, Col, ConfigProvider, Row, Card } from 'antd';
import "../style/Noticia.css"
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Galeria } from '../components/Galeria';
import { FaFacebook } from 'react-icons/fa';

export const NoticiaMueveUnFinSemana = () => {
    const navigate = useNavigate();
    const imagenesGaleria: any = [
        // { id: 1, src: 'https://gobparaiso.blob.core.windows.net/noticias/ASIPONA y Ayuntamiento de Paraíso/WhatsApp Image 2025-06-09 at 10.40.40 AM.jpeg', alt: 'imagen1' },
        // { id: 2, src: 'https://gobparaiso.blob.core.windows.net/noticias/ASIPONA y Ayuntamiento de Paraíso/WhatsApp Image 2025-06-09 at 10.40.40 AM(2).jpeg', alt: 'imagen2' },
        // { id: 3, src: 'https://gobparaiso.blob.core.windows.net/noticias/ASIPONA y Ayuntamiento de Paraíso/WhatsApp Image 2025-06-09 at 10.40.40 AM(3).jpeg', alt: 'imagen3' },
    ];

    return (
        <ConfigProvider>
            <Row
                style={{
                    maxWidth: "87.5rem",
                    width: "100%",
                    margin: "2rem auto",
                    padding: " 0 1rem "
                }}
                gutter={[0, 24]}
            >
                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Button icon={<ArrowLeftOutlined />}
                        onClick={() => navigate("/")}
                    >
                        Volver
                    </Button>
                </Col>

                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Row
                        gutter={[24, 16]}
                    >
                        <Col
                            xs={{ flex: '100%' }}
                            xl={{ flex: '65%' }}
                        >
                            <Card>
                                <h2 className='tituloNoticia'>
                                    PARAÍSO SE MUEVE: UN FIN DE SEMANA QUE REFLEJA ORGULLO, PASIÓN Y FUTURO
                                </h2>

                                <img
                                    src={
                                        "https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/524577970_122183255012505987_3480124234158256541_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGEArzUiY1DmKWjjEfvDhzS-xJNjp5BLbr7Ek2OnkEtukvKqTKt4Pg0fmeYtfnE2v74eWdVT6HqfPmzy2Ag07Y5&_nc_ohc=G-Zotm2Du5QQ7kNvwFcx_r6&_nc_oc=Adn2NI_206JZXmOTnZeHe158XfwPacje2fkDac8Q0z2KkivtV7y6PplWSYyweaj02RuWYLwPF5Ns7HmmOrgR2HCi&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=otNR4y7Ffg1nmbqEeI6czQ&oh=00_AfS_RTX4Zjjn3d6zidfvFRchnjaoQ8jClXzpMaQjv5Vk9Q&oe=688E21B1"
                                    }
                                    className='noticiaImgPrincipal'
                                />

                                <article className='textoNota'>
                                    <p>
                                        En Paraíso no fue un fin de semana cualquiera. Fue un fin de semana que confirmó lo que muchos ya comienzan a reconocer: este municipio se está convirtiendo en un punto clave del deporte, el turismo y el desarrollo económico en Tabasco.
                                    </p>
                                    <p>
                                        Con el impulso del presidente municipal Alfonso Baca Sevilla y el trabajo coordinado de su equipo, cinco eventos se vivieron de manera simultánea, dejando una estampa clara de lo que es capaz esta tierra cuando hay visión, compromiso y rumbo.
                                    </p>
                                    <p>
                                        En el corazón deportivo del municipio, continúa la Copa Paraíso 2025, un torneo que arrancó con fuerza y sigue este lunes con más partidos. Equipos infantiles y juveniles de diversos municipios y estados del país participan en esta fiesta del fútbol que, más allá del balón, representa esperanza, disciplina y comunidad. Cada jornada es una muestra de talento y entrega dentro y fuera de la cancha.
                                    </p>
                                    <p>
                                        En el recién rehabilitado estadio Maximino Domínguez Pérez, la emoción del béisbol vibró con la gran final de la Liga Municipal. Un espacio renovado, digno, que hoy recibe a las familias para disfrutar del rey de los deportes como nunca antes. Este esfuerzo no solo es infraestructura, es identidad rescatada.
                                    </p>
                                    <p>
                                        En las orillas de Penjamo Chiltepec, el Torneo de Pesca de Orilla atrajo a decenas de visitantes que encontraron en Paraíso un lugar donde el mar, la tradición y la convivencia se entrelazan. Cada caña lanzada al agua fue también una invitación a volver.
                                    </p>
                                    <p>
                                        En pleno centro del municipio, la muestra gastronómica se convirtió en un punto de encuentro para los sentidos. Sabores únicos, platos tradicionales, postres irresistibles y chocolates fríos formaron parte de esta experiencia culinaria que dio visibilidad y valor al trabajo de cocineras y productores locales.
                                    </p>
                                    <p>
                                        Además, el espacio de emprendedores y artesanos locales ofreció una ventana para mostrar el talento y la creatividad que nace en Paraíso. Cada compra hecha ahí no solo apoya un negocio, también respalda a una familia y fortalece la economía desde abajo.
                                    </p>
                                    <p>
                                        Restaurantes, hoteles, comercios locales y visitantes hoy saben lo que Paraíso puede ofrecer, pues lo importante es lo se está sembrando: confianza en Paraíso como destino, orgullo en su gente y certeza de que se están haciendo bien las cosas.
                                    </p>
                                    <p>
                                        Este no fue un fin de semana más. Fue un mensaje claro:
                                    </p>
                                    <p>
                                        Paraíso no espera el futuro, lo está construyendo.
                                    </p>
                                    <p>
                                        Por un legado que trasciende.
                                    </p>


                                    <Button size='large'
                                        type='link'
                                        href="https://www.facebook.com/61565179617663/posts/paraíso-se-mueve-un-fin-de-semana-que-refleja-orgullo-pasión-y-futuroen-paraíso-/122183254514505987"
                                        target="_blank"
                                        icon={<FaFacebook />}
                                    />
                                </article>
                                <p></p>
                                <Row>
                                    <Col>
                                        <h3 className='tituloGaleria'>
                                            Galería de imágenes
                                        </h3>
                                    </Col>
                                    <Col

                                    >
                                        <Galeria imagenes={imagenesGaleria} />
                                    </Col>
                                </Row>

                            </Card>
                        </Col>

                        <Col
                            xs={{ flex: '100%' }}
                            xl={{ flex: '35%' }}
                        >
                            <Row
                                gutter={[8, 16]}
                            >
                                {/* <Col
                                    xs={{ flex: '100%' }}
                                    xl={{ flex: '100%' }}
                                >
                                    <Card>
                                        <h3>Noticias relacionadas</h3>

                                    </Card>
                                </Col>
                                <Col
                                    xs={{ flex: '100%' }}
                                    xl={{ flex: '100%' }}
                                >
                                    <Card>
                                        <h3>Síguenos en redes sociales</h3>

                                    </Card>
                                </Col> */}

                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </ConfigProvider>
    )
}