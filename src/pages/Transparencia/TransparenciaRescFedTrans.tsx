import { Col, ConfigProvider, Row, Card, Breadcrumb, Tabs, Empty, } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import type { TabsProps } from 'antd';
import { TablaInfoRecurFedTransferidos } from './Tablas/TablaInfoRecurFedTransferidos';
import { TablaInfoHidrocarburos } from './Tablas/TablaInfoHidrocarburos';


export default function TransparenciaRescFedTrans() {

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Anual',
            children: <div style={{ height: 300, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Empty description={"Sin Informacion"} />
            </div>,
        },
        {
            key: '2',
            label: 'Trimestral',
            children: <TablaInfoRecurFedTransferidos />,
        },
        {
            key: '3',
            label: 'Semestral',
            children: <div style={{ height: 300, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Empty description={"Sin Informacion"} />
            </div>,
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
                                        title: 'Recursos Federales Transferidos',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            Recursos Federales Transferidos
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
                            defaultActiveKey="2"
                            items={items}
                        />
                        <h3>Ramo 23 Hidrocarburos. Art. 72 LGCG</h3>
                        <TablaInfoHidrocarburos />

                    </Card>
                </Col>

            </Row>
        </ConfigProvider>
    )
}
