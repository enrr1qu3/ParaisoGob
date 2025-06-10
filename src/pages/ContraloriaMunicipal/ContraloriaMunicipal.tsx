import { Col, ConfigProvider, Row, Card, Breadcrumb, Statistic } from 'antd';
import { EyeOutlined, HomeOutlined } from '@ant-design/icons';
import './style/ContraloriaMunicipal.css'
import { useEffect, useState } from 'react';
export default function ContraloriaMunicipal() {
    const [countVisit, setCountVisit] = useState<number>(0);
    const visitApi = async () => {
        try {
            const response = await fetch(
                'https://ev-dealership-apidev.azurewebsites.net/api/ParaisoWebVisit/Contraloria/GetVisitsCount'
            );
            const data = await response.json();
            setCountVisit(data);
        } catch (error) {
            console.error('Error obteniendo visitas:', error);
            setCountVisit(0);
        }
    };
    const countVisitApi = async () => {
        try {
            // const response =
            await fetch(
                'https://ev-dealership-apidev.azurewebsites.net/api/ParaisoWebVisit/Contraloria'
            );
            localStorage.setItem("visitadoContraloria", "true");
            // const data = await response.json();

        } catch (error) {
            console.error('Error publicando visitas:', error);
        }
    };
    useEffect(() => {
        const visitante = localStorage.getItem("visitadoContraloria");
        if (!visitante) countVisitApi();
        visitApi();
    }, []); //
    return (
        <ConfigProvider

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
                                        title: 'Contraloría Municipal',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            Contraloría Municipal
                        </h2>
                        <p className='subtituloP'>
                            Asegurando el uso legal, eficaz y eficiente de los recursos
                        </p>

                    </Card>
                </Col>

                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Card >
                        <article className='contenTextContraloria'>
                            <h2>
                                CONTRALORÍA MUNICIPAL
                            </h2>
                            <p>
                                La Contraloría Municipal hace las funciones del órgano
                                interno de control del Ayuntamiento Constitucional del
                                municipio de Paraíso, Tabasco.
                            </p>
                            <p>
                                Sus atribuciones son las que le confiere el artículo 81
                                de la Ley Orgánica de los Municipios y ordenamientos jurídicos
                                aplicables, entre ellas:
                            </p>

                            <ul className='listContraloria'>
                                <li>
                                    Planear, programar, organizar y coordinar el sistema de
                                    control y evaluación municipal.
                                </li>
                                <li>
                                    Supervisar y vigilar el cumplimiento de la normatividad en las adquisiciones,
                                    arrendamientos, servicios y obra pública, así como del ejercicio y aplicación del gasto.
                                </li>
                                <li>
                                    Prevenir, auditar, investigar, instaurar procedimientos administrativos y sancionar
                                    en términos de la Ley de Responsabilidades de los Servidores Públicos del Estado de
                                    Tabasco las faltas administrativas o prácticas de corrupción al interior del Ayuntamiento.
                                </li>
                            </ul>

                            <h2>
                                LA ÉTICA EN EL SERVIDOR PÚBLICO
                            </h2>

                            <p>
                                Una de las tareas sustantivas de la Contraloría Municipal es la
                                participación en el Comité de Ética, así como la publicación de
                                los respectivos Código de Ética y Código de Conducta de
                                los servidores públicos.
                            </p>
                            <p>
                                Para el Ayuntamiento Constitucional de Paraíso, Tabasco, 2024-2027, el
                                fortalecimiento de los Principios y Valores éticos es de gran
                                importancia, por lo tanto, es tarea de todas y todos los servidores
                                públicos del municipio de Paraíso, conocer, leer y poner en práctica
                                los principios y valores contenidos en el Código de Ética y Código de Conducta,
                            </p>
                        </article>

                        <Row>
                            <Col
                                xs={{ flex: '100%' }}
                                md={{ flex: '33.3%' }}
                                xl={{ flex: '33.3%' }}
                            >
                                <div
                                    className='contenBotonContraloria'
                                >
                                    <h4 style={{ margin: 0 }}>Código de Ética</h4>
                                    <a href="https://gobparaiso.blob.core.windows.net/contraloria/Paraíso Código de Ética 2024.pdf" target="_blank">Descargar</a>
                                </div>
                            </Col>
                            <Col
                                xs={{ flex: '100%' }}
                                md={{ flex: '33.3%' }}
                                xl={{ flex: '33.3%' }}
                            >
                                <div
                                    className='contenBotonContraloria'
                                >
                                    <h4 style={{ margin: 0 }}>Código de Conducta</h4>
                                    <a href="https://gobparaiso.blob.core.windows.net/contraloria/Paraíso Código de Conducta  Paraíso.pdf" target="_blank">Descargar</a>
                                </div>
                            </Col>
                            <Col
                                xs={{ flex: '100%' }}
                                md={{ flex: '33.3%' }}
                                xl={{ flex: '33.3%' }}
                            >
                                <div
                                    className='contenBotonContraloria'
                                >
                                    <h4 style={{ margin: 0 }}>Carta Compromiso</h4>
                                    <a href="https://gobparaiso.blob.core.windows.net/contraloria/Paraíso  Código de Conducta    Carta Compromiso.docx" target="_blank">Descargar</a>
                                </div>
                            </Col>
                        </Row>
                        <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop:40 }}>
                            <Statistic title="Cantidad de visitas" value={countVisit} prefix={<EyeOutlined />} />
                        </div>
                    </Card>
                </Col>

            </Row>
        </ConfigProvider>
    )
}
