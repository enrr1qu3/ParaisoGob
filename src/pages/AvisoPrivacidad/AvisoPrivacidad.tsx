import { Col, ConfigProvider, Row, Card, Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

export default function AvisoPrivacidad() {

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
                                        title: 'Aviso de Privacidad',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            Aviso de Privacidad
                        </h2>
                        <p className='subtituloP'>
                            Informacion para la ciudadanía
                        </p>

                    </Card>
                </Col>

                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Card >
                        <embed src="https://gobparaiso.blob.core.windows.net/transparencia/AVISO_PRIVACIDAD/AVISO DE PRIVACIDAD INTEGRAL.pdf" type="application/pdf" width="100%" height="630" />
                    </Card >
                </Col>

            </Row>
        </ConfigProvider>
    )
}