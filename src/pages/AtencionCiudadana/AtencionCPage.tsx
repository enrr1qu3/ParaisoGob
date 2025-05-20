import { Col, ConfigProvider, Row, Card, Breadcrumb, Flex } from 'antd';
import { HomeOutlined, MessageOutlined, WhatsAppOutlined } from '@ant-design/icons';
import "./AtencionCPage.css"
import { LuClock, LuMail, LuMapPin, LuPhone } from 'react-icons/lu';
export default function AtencionCPage() {
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
                    title: 'Atención Ciudadana',
                    className: "tituloPincipalColor"
                  },
                ]
              }
              style={{ margin: 0, marginBottom: 16 }}
            />
            <h2 className='tituloP tituloPincipalColor'>
              Atención Ciudadana
            </h2>
            <p className='subtituloP'>
              Canales de comunicación para atención a la ciudadanía
            </p>

          </Card>
        </Col>

        <Col
          xs={{ flex: '100%' }}
          xl={{ flex: '100%' }}
          className='contenedorCartas'
        >
          <Card
            style={{ backgroundColor: "#1a4b8c", textAlign: "center" }}
          >
            <Row
              gutter={[24, 8]}
            >
              <Col
                xs={{ flex: '100%' }}
                xl={{ flex: '100%' }}
              >
                <h2
                  className='quejasDenuncias'
                >
                  ATENCIÓN A QUEJAS Y DENUNCIAS CIUDADANAS
                </h2>
              </Col>

              <Col
                xs={{ flex: '100%' }}
                xl={{ flex: '33%' }}

              >
                <Card>
                  <Flex vertical>
                    <h3>WhatsApp de Atención Ciudadana</h3>
                    <p style={{ color: "#16a34d" }}>Envía un mensaje y obtén ayuda o información.</p>
                    <div className='iconQuejas'>
                      <WhatsAppOutlined style={{ fontSize: 63, color: "#22c55e" }} />
                    </div>
                    <button className='buttonWhats'>Enviar mensaje</button>
                  </Flex>
                </Card>
              </Col>
              <Col
                xs={{ flex: '100%' }}
                xl={{ flex: '33%' }}

              >
                <Card>
                  <Flex vertical>
                    <h3>Messenger de Atención Ciudadana</h3>
                    <p style={{ color: "#3b82f6" }}>Envía un mensaje y obtén ayuda o información.</p>
                    <div className='iconQuejas'>
                      <MessageOutlined style={{ fontSize: 63, color: "#3b82f6" }} />
                    </div>
                    <button className='buttonMenssage'>Enviar mensaje</button>
                  </Flex>
                </Card>
              </Col>
              <Col
                xs={{ flex: '100%' }}
                xl={{ flex: '33%' }}

              >
                <Card>
                  <Flex vertical>
                    <h3>Teléfono de Atención Ciudadana</h3>
                    <p>Llama y obtén ayuda o información.</p>
                    <div className='iconQuejas'>
                      <h4>933 114 00 00</h4>
                    </div>
                    <button className='buttonTel'>Llamar ahora</button>
                  </Flex>
                </Card>
              </Col>


            </Row>
          </Card>
        </Col>

        <Col
          xs={{ flex: '100%' }}
          xl={{ flex: '100%' }}
          style={{ marginTop: "2.5rem" }}
        >
          <Row
            gutter={[24, 8]}
          >
            <Col
              xs={{ flex: '100%' }}
              xl={{ flex: '100%' }}

            >
              <h2 className='ubicanos'>
                Ubicanos
              </h2>
            </Col>

            <Col
              xs={{ flex: '100%' }}
              xl={{ flex: '50%' }}

            >
              <iframe
                title="Ubicación Paraíso Tabasco"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15143.41357426126!2d-93.22956386547497!3d18.399522359972284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ee8cd48740c2d9%3A0x6b0f2f35187d1a43!2zUGFyYcOtc28sIFRhYi4!5e0!3m2!1ses!2smx!4v1746734008901!5m2!1ses!2smx"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: 5 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Col>

            <Col
              xs={{ flex: '100%' }}
              xl={{ flex: '50%' }}
            >
              <Card >
                <section className='infoGeneral'>
                  <div>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7729.PNG-N4wQd9csCo9xGJAHC7pusSHLPWmOVN.png"
                      alt="Logo"
                      width={200}
                      height={100}
                      style={{ width: "auto" }}
                    />
                  </div>

                  <h3>Ayuntamiento de Paraíso</h3>

                  <div className='cajaDatos' >
                    <div
                      style={{ display: "flex", alignItems: "start" }}
                    >
                      <LuMapPin className="icon-footer" />
                      <p>Plaza Juárez S/N, Centro, C.P. 86300, Paraíso, Tabasco, México.</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginTop: 12 }}
                    >
                      <LuClock className="icon-footer" />
                      <p>Lunes a Viernes de 8:00 a 15:00 horas y Sábados de 9:00 a 12:00 </p></div>
                    <div style={{ display: "flex", alignItems: "center", marginTop: 12 }}>
                      <LuPhone className='icon-footer' />
                      <p>933 114 00 00</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginTop: 12 }}
                    >
                      <LuMail className='icon-footer' />
                      <p>contacto@paraiso.gob.mx</p>
                    </div>
                    <div style={{ display: "flex", width:"100%", justifyContent:"center", alignItems: "center", marginTop: "4rem", marginBottom:"1rem" }}
                    >
                      {/* <p ><span>Horario de atención: </span>Lunes a Viernes de 9:00 a 15:00 horas</p> */}
                    </div>
                  </div>
                </section>
              </Card>
            </Col>

          </Row>

        </Col>

      </Row>
    </ConfigProvider>
  )
}
