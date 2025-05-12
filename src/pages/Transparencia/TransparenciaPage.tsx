import { Col, ConfigProvider, Row, Card, Breadcrumb, Tabs, } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import type { TabsProps } from 'antd';
import { TablaInfoContable } from './Tablas/TablaInfoContable';
import { TablaInfoPresupuestaria } from './Tablas/TablaInfoPresupuestaria';
import { TablaInfoLDF } from './Tablas/TablaInfoLDF';
import { TablaInfoProgramatica } from './Tablas/TablaInfoProgramatica';

export default function TransparenciaPage() {

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Informacion contable',
            children: <TablaInfoContable />,
        },
        {
            key: '2',
            label: 'Informacion presupuestaria',
            children: <TablaInfoPresupuestaria />,
        },
        {
            key: '3',
            label: 'Informacion programatica',
            children: < TablaInfoProgramatica />,
        },
        {
            key: '4',
            label: 'LDF Entidades federativas y municipios',
            children: <TablaInfoLDF />,
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
                                        title: 'SEVAC',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            SEVAC
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
                    <Card

                    >
                        <Tabs
                            type='card'
                            defaultActiveKey="1"
                            items={items}
                        />

                    </Card>
                </Col>

            </Row>
        </ConfigProvider>
    )
}
