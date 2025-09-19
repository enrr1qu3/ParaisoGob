import { Col, ConfigProvider, Row, Card, Breadcrumb, Image, List } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import "./CabildoPage.css";
export default function CabildoPage() {
    const inteCabildo = [
        {
            nombre: "Lic. María Eliza Hernández Flores",
            puesto: "Segunda Regidora y Síndico de Hacienda",
            imagen:
                "https://gobparaiso.blob.core.windows.net/fotoscabildo/maestra maria/mtra maria 05.jpg",
        },
        {
            nombre: "Lic. Misleida Magaña Flores",
            puesto: "Tercera Regidora",
            imagen:
                "https://gobparaiso.blob.core.windows.net/fotoscabildo/lic misdeila/lic 05.jpg",
        },
        {
            nombre: "C. Selena del Carmen Gómez Chacha",
            puesto: "Cuarta Regidora",
            imagen:
                "https://gobparaiso.blob.core.windows.net/fotoscabildo/LIC SELENA/05.jpg",
        },
        {
            nombre: "C. Israel Palma Rodríguez",
            puesto: "Quinto Regidor",
            imagen:
                "https://gobparaiso.blob.core.windows.net/fotoscabildo/LIC ISRRAEL/ISRRA 05.jpg",
        },
    ];
    const inteDirecciones = [
        {
            nombre: "C.P y A. Miguel Angel Cruz Sanchez.",
            puesto: "Dirección de Finanzas",
            // imagen: "https://gobparaiso.blob.core.windows.net/fotoscabildo/CP MIRELLA/CP MIRELLA 06.jpg"
            imagen: "/public/user.png",
            correo: "finanzas@paraiso2427.gob.mx",
            direccion:
                "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86609",
        },
        {
            nombre: "Ing. Arturo Izquierdo Alejandro",
            puesto: "Dirección de Programación",
            imagen:
                "https://gobparaiso.blob.core.windows.net/fotoscabildo/LIC ARTURO IZQ/LIC ARTURO 06.jpg",
            correo: "programaciónypresupuesto@paraiso2427.gob.mx",
            direccion:
                "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86611",
        },
        {
            nombre: "Ing. Isaac López Guerra",
            puesto: "Contraloría Municipal",
            imagen: "/public/user.png",
            correo: "contraloria@paraiso.gob.mx",
            direccion:
                "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86605",
        },
        {
            nombre: "Lic. Santiago Magaña Burelo",
            puesto: "Dirección de Desarrollo",
            imagen: "/public/user.png",
            correo: "desarrollo@paraiso2427.gob.mx",
            direccion: "Santos Degollado, El Carmen, 86605 Paraíso, Tab.",
        },
        {
            nombre: "Lic. Julio Cesar Jimenez Cruz.",
            puesto: "Dirección de Fomento Económico y Turismo",
            imagen: "/public/user.png",
            correo: "fomentoyturismo@paraiso2427.gob.mx",
            direccion: "Santos Degollado 87, El Carmen, 86605 Paraíso, Tab.",
        },
        {
            nombre: "Ing. Edison García Wilzon",
            puesto:
                "Dirección de Obras, Ordenamiento Territorial y Servicios Municipales",
            imagen: "/public/user.png",
            correo: "obraspublicas@paraiso2427.gob.mx",
            direccion:
                "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86614",
        },
        {
            nombre: "Lic. Marco Ernesto Pérez Torres",
            puesto: "Dirección de Educación, Cultura y Recreación",
            imagen: "/public/user.png",
            correo: "decur@paraiso2427.gob.mx",
            direccion: "Santos Degollado 406, Centro, 86605 Paraíso, Tab.",
        },
        {
            nombre: "Lic. Demetrio Velázquez Castellanos",
            puesto: "Dirección de Administración",
            imagen: "/public/user.png",
            correo: "administración@paraiso.gob.mx",
            direccion:
                "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86613",
        },
        // {
        //   nombre: "Arq. Rafael Lezama Javier",
        //   puesto: "Dirección de Seguridad Pública",
        //   imagen: "/public/user.png",
        //   correo: "seguridadpublica@paraiso2427.gob.mx",
        //   direccion: "Benito Juárez 3, Centro, 86600 Paraíso, Tab.",
        // },
        // {
        //   nombre: "Tec. Otilio Baeza Ocampo",
        //   puesto: "Dirección de Tránsito",
        //   imagen: "/public/user.png",
        //   correo: "transito@paraiso2427.gob.mx",
        //   direccion:
        //     "La Central Comonera, Buenos Aires 1292, Centro, 86605 Paraíso, Tab.",
        // },
        {
            nombre: "Lic. Javier Rodríguez Hernández",
            puesto: "Dirección de Asuntos Jurídicos",
            imagen: "/public/user.png",
            correo: "juridico@paraiso.gob.mx",
            direccion:
                "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86615",
        },
        {
            nombre: "Ing. Daniel Pérez Angulo",
            puesto: "Dirección de Atención Ciudadana",
            imagen: "/public/user.png",
            correo: "atencionciudadana@paraiso2427.gob.mx",
            direccion: "Santos Degollado, El Carmen, 86605 Paraíso, Tab.",
        },
        {
            nombre: "Lic. Claudia Lorena Montalvo Wilson",
            puesto: "Dirección de Atención a las Mujeres",
            imagen: "/public/user.png",
            correo: "dam@paraiso2427.gob.mx",
            direccion: "Gregorio Méndez Magaña 218a, Centro, 86600 Paraíso, Tab.",
        },
        {
            nombre: "Ing. Antonio Jehova Javier Angulo",
            puesto: "Dirección de Protección Ambiental y Desarrollo Sustentable",
            imagen: "/public/user.png",
            correo: "proteccionambiental@paraiso2427.gob.mx",
            direccion: "Calle Ignacio Comonfort 6, La Ceiba, 86607 Paraíso, Tab.",
        },
    ];
    const inteUnidadesApoyo = [
        {
            nombre: "Lic. Nelson Alonso Pérez Pérez",
            puesto: "Secretaría Técnica",
            imagen: "/public/user.png",
            correo: "secretariotecnicco@paraiso2427.gob.mx",
            direccion: "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86608"
        },
        {
            nombre: "Ing. Ronny Castellanos Magaña",
            puesto: "Secretaría Particular",
            imagen: "/public/user.png",
            correo: "secretarioparticular@paraiso2427.gob.mx",
            direccion: "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86605"
        },
        {
            nombre: "Biol. Yuri Alberto Alamilla Schrunder",
            puesto: "Coordinación de Protección Civil",
            imagen: "/public/user.png",
            correo: "proteccioncivil@paraiso2427.gob.mx",
            direccion: "Blvd. Manuel Antonio Romero Zurita s/n, Centro, 86605 Paraíso, Tab."
        },
        {
            nombre: "Nury del Carmen Mendoza Pérez",
            puesto: "Coordinación del DIF Municipal",
            imagen: "/public/user.png",
            correo: "dif@paraiso.gob.mx",
            direccion: "José María Morelos 704, Centro, 86600 Paraíso, Tab."
        },
        {
            nombre: "Dr. Guillermo Valencia Gómez",
            puesto: "Coordinación de Atención a la Salud",
            imagen: "/public/user.png",
            correo: "salud@paraiso2427.gob.mx",
            direccion: "Blvd. Manuel Antonio Romero Zurita s/n, Centro, 86605 Paraíso, Tab."
        },
        {
            nombre: "Lic. Javier Pérez Villegas",
            puesto: "Coordinación de Comunicación Social",
            imagen: "/public/user.png",
            correo: "comunicacionsocial@paraiso2427.gob.mx",
            direccion: "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86606"
        },
        {
            nombre: "Lic. Andrés Izquierdo Morales",
            puesto: "Coordinación de Evaluación de Resultados",
            imagen: "/public/user.png",
            correo: "evaluacion@paraiso2427.gob.mx",
            direccion: "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86606"
        },
        //   {
        //     nombre: "Arq. Emilio Gómez Gallegos",
        //     puesto: "Instituto Municipal de Planeación",
        //     imagen: "/public/user.png",
        //     correo: "", // No aparece en la lista
        //     direccion: "" // No aparece en la lista
        //   },
        //   {
        //     nombre: "Biol. Jorge Enrique Oyosa Ortiz",
        //     puesto: "Coordinación de Eventos Especiales",
        //     imagen: "/public/user.png",
        //     correo: "", // No aparece
        //     direccion: "" // No aparece
        //   },
        {
            nombre: "Lic. Marian Kayle Alejandro de la Cruz",
            puesto: "Coordinación Administrativa",
            imagen: "/public/user.png",
            correo: "presidencia@paraiso2427.gob.mx",
            direccion: "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86606"
        },
        {
            nombre: "Lic. Óscar Augusto Pérez Carrillo",
            puesto: "Unidad de Transparencia y Protección de Datos Personales",
            imagen: "/public/user.png",
            correo: "transparencia@paraiso.gob.mx",
            direccion: "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86607"
        },
        {
            nombre: "L.A. Maria del Carmen Gonzalez Rabanales",
            puesto: "Departamento de Mejora Regulatoria",
            imagen: "/public/user.png",
            correo: "mejoraregulatoria@paraiso2427.gob.mx",
            direccion: "Palacio Municipal. Calle Ignacio Comonfort. La Candelaria. C.P. 86605"
        },
        {
            nombre: "Lic. Ana Rosa Domínguez Pérez",
            puesto: "Archivo Municipal",
            imagen: "/public/user.png",
            correo: "secretariodelayuntamiento@paraiso2427.gob.mx",
            direccion: "Santos Degollado, El Carmen, 86605 Paraíso, Tab."
        },
        {
            nombre: "Lic. Martín de la Cruz Carrillo",
            puesto: "Registro Civil 01",
            imagen: "/public/user.png",
            correo: "secretariodelayuntamiento@paraiso2427.gob.mx",
            direccion: "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86607"
        },
        {
            nombre: "Lic. Marta Angélica Mendiola Gutiérrez",
            puesto: "Registro Civil 02",
            imagen: "/public/user.png",
            correo: "secretariodelayuntamiento@paraiso2427.gob.mx",
            direccion: "86610 Puerto Ceiba, Tab."
        },
        {
            nombre: "Tec. Luis Lázaro Hernández",
            puesto: "Departamento de Delegados",
            imagen: "/public/user.png",
            correo: "secretariodelayuntamiento@paraiso2427.gob.mx",
            direccion: "Santos Degollado, El Carmen, 86605 Paraíso, Tab."
        },
        {
            nombre: "Tec. Freddy Martínez Aguilar",
            puesto: "Departamento de Asuntos Religiosos",
            imagen: "/public/user.png",
            correo: "decur@paraiso2427.gob.mx",
            direccion: "Santos Degollado, El Carmen, 86605 Paraíso, Tab."
        },
        {
            nombre: "Lic. Michelle Andrea Escobar Camacho",
            puesto: "Subdirección de Catastro",
            imagen: "/public/user.png",
            correo: "catastro@paraiso2427.gob.mx",
            direccion: "2 de Abril 210, El Carmen, 86605 Paraíso, Tab."
        },
        {
            nombre: "Lic. Marco Arturo Javier Madrigal",
            puesto: "Coordinación de Fiscalización y Normatividad",
            imagen: "/public/user.png",
            correo: "finanzas@paraiso2427.gob.mx",
            direccion: "Santos Degollado 87, El Carmen, 86605 Paraíso, Tab."
        },
        {
            nombre: "Profr. Celso Fernando Cauich May",
            puesto: "Coordinación de Cultura",
            imagen: "/public/user.png",
            correo: "decur@paraiso2427.gob.mx",
            direccion: "Santos Degollado 406, Centro, 86605 Paraíso, Tab."
        },
        {
            nombre: "Lic. Mariana Gomez Madrigal",
            puesto: "Coordinación de Fomento Deportivo",
            imagen: "/public/user.png",
            correo: "decur@paraiso2427.gob.mx",
            direccion: "Ignacio Comonfort 20, La Ceiba, 86607 Paraíso, Tab."
        },
        //   {
        //     nombre: "",
        //     puesto: "Coordinación de Recursos Materiales",
        //     imagen: "/public/user.png",
        //     correo: "", // No aparece
        //     direccion: "" // No aparece
        //   },
        {
            nombre: "Ing. Otoniel Palma Santiago",
            puesto: "Departamento de Licitaciones",
            imagen: "/public/user.png",
            correo: "administracion@paraiso.gob.mx",
            direccion: "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86606"
        },
        {
            nombre: "Lic. María del Rosario Jesús Arias",
            puesto: "Departamento de Bienes Patrimoniales",
            imagen: "/public/user.png",
            correo: "administracion@paraiso.gob.mx",
            direccion: "Santos Degollado 87, El Carmen, 86605 Paraíso, Tab."
        },
        {
            nombre: "Grisela del Carmen Sosa Gomez",
            puesto: "Departamento de Recursos Humanos",
            imagen: "/public/user.png",
            correo: "recursoshumanos@paraiso2427.gob.mx",
            direccion: "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86606"
        },
        {
            nombre: "Eladio Trujillo Alejandro",
            puesto: "Ramo 33",
            imagen: "/public/user.png",
            correo: "obraspublicas@paraiso2427.gob.mx",
            direccion: "Palacio Municipal, Calle Ignacio Comonfort S/N, La Candelaria 86605"
        }
    ];
    return (
        <ConfigProvider
        // theme={{
        //     components: {
        //         Divider: {
        //             marginLG: 16
        //         },
        //     },
        // }}
        >
            <Row
                style={{
                    maxWidth: "87.5rem",
                    width: "100%",
                    margin: "2rem auto",
                    padding: " 0 1rem ",

                }}
                gutter={[0, 24]}

            >
                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Card
                        className='cardContainerTitulo'
                    >
                        <Breadcrumb
                            separator=">"
                            items={
                                [
                                    {
                                        href: '/',
                                        title: (
                                            <>
                                                <HomeOutlined />
                                                <span>Inicio</span>
                                            </>)
                                    },
                                    {
                                        title: 'Cabildo Municipal',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            Cabildo Municipal
                        </h2>
                        <p className='subtituloP'>
                            Conoce a los integrantes del Honorable Cabildo del Municipio de Paraíso
                        </p>

                    </Card>
                </Col>

                <Col xs={{ flex: "100%" }} xl={{ flex: "100%" }}>
                    <Card>
                        <Row gutter={[8, 8]}>
                            <Col xs={{ flex: "100%" }} xl={{ flex: "100%" }}>
                                <h2 className="tituloCartas">
                                    Primer Regidor y Presidente Municipal
                                </h2>
                            </Col>
                            <Col
                                xs={{ flex: "100%" }}
                                md={{ flex: "30%" }}
                                xl={{ flex: "20%" }}
                                className="contenImagenes"
                            >
                                <Image
                                    // width={200}
                                    src="https://gobparaiso.blob.core.windows.net/fotoscabildo/Ing Baca/2.jpg"
                                    style={{ borderRadius: "5%", width: "100%" }}
                                />
                            </Col>
                            <Col
                                xs={{ flex: "100%" }}
                                md={{ flex: "70%" }}
                                xl={{ flex: "80%" }}
                            >
                                <h3 className="nombrePresidete">
                                    Ing. Alfonso Jesús Baca Sevilla
                                </h3>
                                <p className="textoPresidente">
                                    Presidente Municipal Constitucional de Paraíso, Tabasco para
                                    el periodo 2024-2027.
                                </p>
                                <Card style={{ backgroundColor: "#f9fafb" }}>
                                    <h4 className="tituloMensaje">Mensaje del Presidente:</h4>
                                    <p className="textMensaje">
                                        "Trabajamos con transparencia y compromiso para hacer de
                                        Paraíso un municipio próspero, seguro y con mejores
                                        oportunidades para todos sus habitantes. Nuestra
                                        administración está enfocada en el desarrollo sustentable,
                                        la modernización de los servicios públicos y el bienestar de
                                        las familias paraiseñas."
                                    </p>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col xs={{ flex: "100%" }} xl={{ flex: "100%" }}>
                    <Card>
                        <h2 className="tituloCartas">Integrantes</h2>
                        <Row gutter={[8, 8]}>
                            {inteCabildo.map((itegrante) => (
                                <Col
                                    xs={{ flex: "100%" }}
                                    md={{ flex: "50%" }}
                                    xl={{ flex: "50%" }}
                                    key={itegrante.nombre}
                                >
                                    <Card
                                        style={{
                                            textAlign: "center",
                                        }}
                                    >
                                        <Image
                                            src={itegrante.imagen}
                                            style={{ borderRadius: "50%" }}
                                            width={120}
                                        />
                                        <h4 className="tituloPuestos">{itegrante.puesto}</h4>
                                        <p className="textoPresidente">{itegrante.nombre}</p>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </Col>

                <Col xs={{ flex: "100%" }} xl={{ flex: "100%" }}>
                    <Card>
                        <h2 className="tituloCartas">DIRECCIONES</h2>
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 3,
                                lg: 3,
                                xxl: 3,
                            }}
                            dataSource={inteDirecciones}
                            renderItem={(item) => (
                                <List.Item>
                                    <Card
                                        style={{
                                            textAlign: "center",
                                        }}
                                    >
                                        <Image
                                            width={150}
                                            height={193}
                                            src={item.imagen}
                                            style={{ borderRadius: "50%" }}
                                        />
                                        <h4 className="tituloPuestos">{item.puesto}</h4>
                                        <p className="textoPresidente">{item.nombre}</p>
                                        <p className="textoPresidente">{item.correo}</p>
                                        <p className="textoPresidente">{item.direccion}</p>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>

                <Col xs={{ flex: "100%" }} xl={{ flex: "100%" }}>
                    <Card>
                        <h2 className="tituloCartas">UNIDADES DE APOYO</h2>
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 3,
                                lg: 3,
                                xxl: 3,
                            }}
                            dataSource={inteUnidadesApoyo}
                            renderItem={(item) => (
                                <List.Item>
                                    <Card
                                        style={{
                                            textAlign: "center",
                                        }}
                                    >
                                        <Image
                                            width={150}
                                            height={193}
                                            src={item.imagen}
                                            style={{ borderRadius: "50%" }}
                                        />
                                        <h4 className="tituloPuestos">{item.puesto}</h4>
                                        <p className="textoPresidente">{item.nombre}</p>
                                        <p className="textoPresidente">{item.correo}</p>
                                        <p className="textoPresidente">{item.direccion}</p>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
        </ConfigProvider>
    )
}
