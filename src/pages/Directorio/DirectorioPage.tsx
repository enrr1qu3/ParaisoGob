import { Col, ConfigProvider, Row, Card, Breadcrumb, List, Divider, Avatar, Tag, Badge } from 'antd';
import { HomeOutlined, UserOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import "./DirectorioPage.css";
export default function DirectorioPage() {

  const inteDirecciones = [
    {
      nombre: "Mtra. María Eliza Hernández Flores",
      puesto: "Presidencia Municipal Interina",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "Ing. Otoniel Palma Santiago",
      puesto: "Dirección de Administración",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "Lic. Jesús Manuel Sánchez Ricárdez",
      puesto: "Secretaría del Ayuntamiento",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "LIC. RAFAEL SANTIAGO RODRÍGUEZ",
      puesto: "Contraloría Municipal",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "C.P. y A. Miguel Ángel Cruz Sánchez",
      puesto: "Dirección de Finanzas",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "Ing. Arturo Izquierdo Alejandro",
      puesto: "Dirección de Programación",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "Lic. Santiago Magaña Burelo",
      puesto: "Dirección de Desarrollo",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "Ing. Asunción López Veresaluses",
      puesto: "Dirección de Obras, Ordenamiento Territorial y Servicios Municipales",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "Mtro. Carmen Sánchez Jáuregui",
      puesto: "Dirección de Educación, Cultura y Recreación",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "Lic. Juan Sibaja Contreras",
      puesto: "Dirección de Asuntos Jurídicos",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "Arq. Agustín López Buendía",
      puesto: "Dirección de Fomento Económico y Turismo",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "Tec. Daniel Pérez Angulo",
      puesto: "Dirección de Atención Ciudadana",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "Lic. Claudia Lorena Montalvo Wilson",
      puesto: "Dirección de Atención a las Mujeres",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "Ing. Antonio Jehová Javier Angulo",
      puesto: "Dirección de Protección Ambiental y Desarrollo Sustentable",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
  ];
  const inteUnidadesApoyo = [
    {
      nombre: "Lic. Yury Alberto Alamilla Schrunder",
      puesto: "Coordinación de Protección Civil",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "Tec. Nely Carrillo Carrillo",
      puesto: "Coordinación del DIF Municipal",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "Dr. Irving Donaldo Pérez García",
      puesto: "Coordinación de Salud",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
    {
      nombre: "Lic. Flor del Mar Pérez Rosado",
      puesto: "Subdirección de Catastro",
      imagen: "/public/user.png",
      correo: "",
      direccion: "",
    },
  ];
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
                    title: 'Directorio Municipal',
                    className: "tituloPincipalColor"
                  },
                ]
              }
              style={{ margin: 0, marginBottom: 16 }}
            />
            <h2 className='tituloP tituloPincipalColor'>
              Directorio Municipal
            </h2>
            <p className='subtituloP'>
              Conoce a los integrantes del Honorable Directorio del Municipio de Paraíso
            </p>

          </Card>
        </Col>

        <Col xs={{ flex: "100%" }} xl={{ flex: "100%" }}>
          <Card className="gobierno-card">
            <div className="section-header">
              <h2 className="tituloCartas">Direcciones Administrativas</h2>
              <Divider className="divider-gobierno" />
              <p className="section-subtitle">Estructura organizacional del gobierno municipal</p>
            </div>
            <List
              grid={{
                gutter: [20, 24],
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
                xxl: 3,
              }}
              dataSource={inteDirecciones}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    className="direccion-card"
                    hoverable
                    style={{
                      borderRadius: "16px",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                      border: "2px solid #f0f2f5",
                      background: "linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div className="direccion-content">
                      <div className="director-foto">
                        <Avatar
                          size={120}
                          src={item.imagen}
                          icon={<UserOutlined />}
                          className="director-avatar"
                        />
                        <Badge
                          count={<Tag color="#1890ff" style={{ borderRadius: "12px", fontSize: "10px" }}>Director</Tag>}
                          offset={[15, 15]}
                        />
                      </div>
                      <div className="director-info">
                        <h4 className="puesto-director">{item.puesto}</h4>
                        <p className="nombre-director">{item.nombre || "Vacante"}</p>
                        <Divider style={{ margin: "12px 0" }} />
                        <div className="contacto-info">
                          {item.correo && (
                            <div className="contacto-item">
                              <MailOutlined style={{ color: "#f26c0d", marginRight: "8px" }} />
                              <span className="contacto-text">{item.correo}</span>
                            </div>
                          )}
                          {item.direccion && (
                            <div className="contacto-item">
                              <EnvironmentOutlined style={{ color: "#f26c0d", marginRight: "8px" }} />
                              <span className="contacto-text">{item.direccion}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col xs={{ flex: "100%" }} xl={{ flex: "100%" }}>
          <Card className="gobierno-card">
            <div className="section-header">
              <h2 className="tituloCartas">Unidades de Apoyo y Coordinaciones</h2>
              <Divider className="divider-gobierno" />
              <p className="section-subtitle">Servicios especializados y coordinaciones municipales</p>
            </div>
            <List
              grid={{
                gutter: [20, 24],
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
                xxl: 3,
              }}
              dataSource={inteUnidadesApoyo}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    className="coordinacion-card"
                    hoverable
                    style={{
                      borderRadius: "16px",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                      border: "2px solid #f0f2f5",
                      background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div className="coordinacion-content">
                      <div className="coordinador-foto">
                        <Avatar
                          size={110}
                          src={item.imagen}
                          icon={<UserOutlined />}
                          className="coordinador-avatar"
                        />
                        <Badge
                          count={<Tag color="#52c41a" style={{ borderRadius: "12px", fontSize: "10px" }}>Coordinador</Tag>}
                          offset={[12, 12]}
                        />
                      </div>
                      <div className="coordinador-info">
                        <h4 className="puesto-coordinador">{item.puesto}</h4>
                        <p className="nombre-coordinador">{item.nombre || "Vacante"}</p>
                        <Divider style={{ margin: "10px 0" }} />
                        <div className="contacto-info">
                          {item.correo && (
                            <div className="contacto-item">
                              <MailOutlined style={{ color: "#f26c0d", marginRight: "6px" }} />
                              <span className="contacto-text-small">{item.correo}</span>
                            </div>
                          )}
                          {item.direccion && (
                            <div className="contacto-item">
                              <EnvironmentOutlined style={{ color: "#f26c0d", marginRight: "6px" }} />
                              <span className="contacto-text-small">{item.direccion}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
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
