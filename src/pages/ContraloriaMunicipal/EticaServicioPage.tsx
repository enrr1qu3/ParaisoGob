// import { Link } from 'react-router-dom';
import { Col, ConfigProvider, Row, Card, Breadcrumb, Statistic } from 'antd';
import { EyeOutlined, HomeOutlined } from '@ant-design/icons';
import './style/ContraloriaMunicipal.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const EticaServicioPage = () => {
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
                    title: (
                      <Link to={"/contraloria"} style={{ color: "#1a4b8c" }}>
                        Contraloría Municipal
                      </Link>)
                  },
                  {
                    title: 'La Ética en el Servidor Público',
                    className: "tituloPincipalColor"
                  },
                ]
              }
              style={{ margin: 0, marginBottom: 16 }}
            />
            <h2 className='tituloP tituloPincipalColor'>
              La Ética en el Servidor Público
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
                  LA ÉTICA EN EL SERVIDOR PÚBLICO
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
                  Una de las tareas sustantivas de la Contraloría Municipal es la
                  participación en el Comité de Ética, así como la publicación de
                  los respectivos Código de Ética y Código de Conducta de
                  los servidores públicos.
                </p>
                <p style={{
                  color: '#4b5563',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  textAlign: 'justify',
                  margin: '0 0 1rem 0'
                }}>
                  Para el Ayuntamiento Constitucional de Paraíso, Tabasco, 2024-2027, el
                  fortalecimiento de los Principios y Valores éticos es de gran
                  importancia, por lo tanto, es tarea de todas y todos los servidores
                  públicos del municipio de Paraíso, conocer, leer y poner en práctica
                  los principios y valores contenidos en el Código de Ética y Código de Conducta.
                </p>
              </div>

              <div style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '1.5rem', 
                borderRadius: '6px',
                marginBottom: '2rem'
              }}>
                <h4 style={{
                  color: '#f26c0d',
                  fontSize: '1.1rem',
                  margin: '0 0 0.5rem 0',
                  fontWeight: '600'
                }}>
                  Acción sugerida:
                </h4>
                <p style={{
                  color: '#4b5563',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  Descargar los códigos de ética y conducta, así como la carta compromiso; 
                  firmar y entregar la carta compromiso en la oficina de la Contraloría Municipal.
                </p>
              </div>

              <Row gutter={[16, 16]} style={{ marginBottom: '1.5rem' }}>
                <Col xs={24} md={8}>
                  <div style={{
                    backgroundColor: '#1a4b8c',
                    color: '#FFF',
                    padding: '1rem',
                    borderRadius: '6px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s'
                  }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>
                      Código de Ética
                    </h4>
                    <a 
                      href="https://gobparaiso.blob.core.windows.net/contraloria/Paraíso Código de Ética 2024.pdf" 
                      target="_blank" 
                      style={{ color: '#FFF', textDecoration: 'underline' }}
                    >
                      Descargar
                    </a>
                  </div>
                </Col>
                <Col xs={24} md={8}>
                  <div style={{
                    backgroundColor: '#f26c0d',
                    color: '#FFF',
                    padding: '1rem',
                    borderRadius: '6px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s'
                  }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>
                      Código de Conducta
                    </h4>
                    <a 
                      href="https://gobparaiso.blob.core.windows.net/contraloria/Paraíso Código de Conducta  Paraíso.pdf" 
                      target="_blank" 
                      style={{ color: '#FFF', textDecoration: 'underline' }}
                    >
                      Descargar
                    </a>
                  </div>
                </Col>
                <Col xs={24} md={8}>
                  <div style={{
                    backgroundColor: '#4b5563',
                    color: '#FFF',
                    padding: '1rem',
                    borderRadius: '6px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s'
                  }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>
                      Carta Compromiso
                    </h4>
                    <a 
                      href="https://gobparaiso.blob.core.windows.net/contraloria/Paraíso Código de Conducta Carta Compromiso.pdf" 
                      target="_blank" 
                      style={{ color: '#FFF', textDecoration: 'underline' }}
                    >
                      Descargar
                    </a>
                  </div>
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
