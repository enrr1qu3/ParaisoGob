import { Link } from 'react-router-dom';
import { Col, ConfigProvider, Row, Card, Breadcrumb, Statistic } from 'antd';
import { EyeOutlined, FilePdfOutlined, HomeOutlined } from '@ant-design/icons';
import './style/ContraloriaMunicipal.css'
import { useEffect, useState } from 'react';
import { BsMailboxFlag } from 'react-icons/bs';
import { CollapseDocs } from './components/CollapseDocs';
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
                                        title: (
                                            <Link to={"/"}>
                                                <HomeOutlined />
                                                <span> Inicio</span>
                                            </Link>)
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
                    <Card style={{ border: 'none', boxShadow: 'none' }}>
                        <div style={{ padding: '1.5rem' }}>
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <h2 style={{
                                    color: '#f26c0d',
                                    fontSize: '1.8rem',
                                    fontWeight: '600',
                                    margin: '0',
                                    textTransform: 'uppercase'
                                }}>
                                    CONTRALORÍA MUNICIPAL
                                </h2>
                                <div style={{
                                    width: '80%',
                                    maxWidth: '400px',
                                    height: '4px',
                                    backgroundColor: '#1a4b8c',
                                    margin: '0.5rem auto'
                                }}></div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{
                                    color: '#4b5563',
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    textAlign: 'justify',
                                    margin: '0 0 1rem 0'
                                }}>
                                    La Contraloría Municipal hace las funciones del órgano interno de control
                                    del Ayuntamiento Constitucional del municipio de Paraíso, Tabasco.
                                </p>
                                <p style={{
                                    color: '#4b5563',
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    textAlign: 'justify',
                                    margin: '0'
                                }}>
                                    Sus atribuciones son las que le confiere el artículo 81
                                    de la Ley Orgánica de los Municipios y ordenamientos jurídicos aplicables:
                                </p>
                            </div>

                            <div style={{ 
                                backgroundColor: '#f8f9fa', 
                                padding: '1.5rem', 
                                borderRadius: '6px',
                                marginBottom: '2rem'
                            }}>
                                <ol style={{
                                    color: '#4b5563',
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    paddingLeft: '1.5rem',
                                    margin: '0'
                                }} className="listContraloria">
                                    <li style={{ marginBottom: '1rem' }}>
                                        Planear, programar, organizar y coordinar el sistema de control y evaluación municipal.
                                    </li>
                                    <li style={{ marginBottom: '1rem' }}>
                                        Supervisar y vigilar el cumplimiento de la normatividad en las adquisiciones, arrendamientos, servicios y obra pública.
                                    </li>
                                    <li style={{ marginBottom: '0' }}>
                                        Prevenir, auditar, investigar e instaurar procedimientos administrativos conforme a la Ley de Responsabilidades de los Servidores Públicos del Estado de Tabasco.
                                    </li>
                                </ol>
                            </div>

                            <div style={{
                                backgroundColor: '#FFF',
                                padding: '1rem',
                                borderRadius: '6px',
                                border: '1px solid #e5e7eb',
                                textAlign: 'right',
                                marginBottom: '2rem'
                            }}>
                                <p style={{
                                    color: '#4b5563',
                                    margin: '0',
                                    fontSize: '0.95rem'
                                }}>
                                    Atentamente:<br/>
                                    <strong style={{ color: '#f26c0d' }}>Ing. Isaac López Guerra</strong><br/>
                                    <em style={{ color: '#1a4b8c' }}>Contralor Municipal</em>
                                </p>
                            </div>
        
                            <CollapseDocs />

                            <Row gutter={[16, 16]} style={{ marginBottom: '1.5rem' }}>
                                <Col xs={24} md={12}>
                                    <Link to={"/contraloria/etica"} style={{ textDecoration: 'none' }}>
                                        <div style={{
                                            backgroundColor: '#1a4b8c',
                                            color: '#FFF',
                                            padding: '1rem',
                                            borderRadius: '6px',
                                            textAlign: 'center',
                                            cursor: 'pointer',
                                            transition: 'opacity 0.3s'
                                        }}>
                                            <h4 style={{ margin: '0', fontSize: '1rem' }}>
                                                Ética del Servidor Público
                                            </h4>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Link to={"/contraloria/reporteCiudadano"} style={{ textDecoration: 'none' }}>
                                        <div style={{
                                            backgroundColor: '#f26c0d',
                                            color: '#FFF',
                                            padding: '1rem',
                                            borderRadius: '6px',
                                            textAlign: 'center',
                                            cursor: 'pointer',
                                            transition: 'opacity 0.3s',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <BsMailboxFlag />
                                            <h4 style={{ margin: '0', fontSize: '1rem' }}>
                                                Reporte Ciudadano
                                            </h4>
                                        </div>
                                    </Link>
                                </Col>
                            </Row>
                            <Row gutter={[16, 16]} style={{ marginBottom: '1.5rem' }}>
                                <Col span={24}>
                                    <a
                                        href="https://gobparaiso.blob.core.windows.net/contraloria/requisitos contratistas 2026 FEB.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <div style={{
                                            backgroundColor: '#1a4b8c',
                                            color: '#FFF',
                                            padding: '1rem',
                                            borderRadius: '6px',
                                            textAlign: 'center',
                                            cursor: 'pointer',
                                            transition: 'opacity 0.3s',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <FilePdfOutlined />
                                            <h4 style={{ margin: '0', fontSize: '1rem' }}>
                                                Requisitos de contratistas
                                            </h4>
                                        </div>
                                    </a>
                                </Col>
                            </Row>

                            <div style={{ 
                                backgroundColor: '#f8f9fa',
                                padding: '1rem',
                                borderRadius: '6px',
                                textAlign: 'center'
                            }}>
                                <Statistic 
                                    title="Cantidad de visitas" 
                                    value={countVisit} 
                                    prefix={<EyeOutlined style={{ color: '#1a4b8c' }} />}
                                    valueStyle={{ color: '#f26c0d', fontWeight: '600' }}
                                />
                            </div>
                        </div>
                    </Card>
                </Col>

            </Row>
        </ConfigProvider>
    )
}
