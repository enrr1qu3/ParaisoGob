import { Button, Card, Col, Image, Row, Typography } from 'antd';
//  w
const { Title, Paragraph } = Typography;

const anuncios = [
    {
        id: 1,
        title: '📣 ¡Aprovecha los descuentos en el pago del predial!',
        image: 'https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/524129252_122183398922505987_1554585239385295218_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGqZYKDbjXxb8Gdt3wb3a4v3T7Qh6ZWNRPdPtCHplY1E0yH1eDFrHcdMvWs0hmvfW0bb4BT3_Chqbi7z7Yp-QRw&_nc_ohc=gfkqXUmjYE4Q7kNvwGRjMuH&_nc_oc=Admbz1UUhc8B1UzOIGLTkRMm2G2ZxV2wlKSP8_I-dUoxzFQ1TjF8zBp2B_diqfvAAil9_KOlmWgt8HIUuyZKz_HG&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=2dNuh2OMjt80ldLihcFEDQ&oh=00_AfS1-AJF1W2y5Zx9RrLEhTCtcpr7HFaPIPG3dOlDVFbAXA&oe=688DF79F',
        buttonText: 'Ver en Facebook',
        link: 'https://www.facebook.com/share/p/1FYJkfb1hg/?mibextid=wwXIfr'
    },
    {
        id: 2,
        title: '🐔 ¡HOY INICIA LA ENTREGA DE GALLINAS!',
        image: 'https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/524922430_122183390840505987_299499171823405578_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHXmejr2pMQkm0rRxx64JKuQM2ktkRdySBAzaS2RF3JIK4o_b7sAOLrCJIz1oqI4lViY_Zv1RsnIY_aqCJ69YuZ&_nc_ohc=DCziLz-AXNQQ7kNvwGNTFYx&_nc_oc=AdlctgHUX90OXHL6BuEt3B9wb_SpEyrnZw2GHHdQ2nYVcs2_hcjDSzc6BDJRMVElXC-hSk0nIdIu7RE7ydBFOhib&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=6ZTDIxcZsbQFCfFjX7VbDA&oh=00_AfT2IIbcDxjOEZApTgUdgLMOz0ANgXW2gYKzaseai53ceg&oe=688E0C50',
        buttonText: 'Ver en Facebook',
        link: 'https://www.facebook.com/share/p/1AioG9Regh/?mibextid=wwXIfr'
    },
    {
        id: 3,
        title: ' 🔥🧯EVITEMOS JUNTOS LOS INCENDIOS EN PARAÍSO',
        image: 'https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/524754644_122183384216505987_3481552598953378711_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE6L5Hx45L4Js7EFnPmUqwGzYe6bBw_e9rNh7psHD972rsDdSVW7-3YnGBtvW-7ByrBBzDzDRlWt1EW8bK2k5lV&_nc_ohc=QBz2uf38xM0Q7kNvwHbXagb&_nc_oc=AdlUpoZoGkDvgXgFvc9L6AmgZvYzNLxARVJte3l1DLrBwH01lZErnIJwtQVU9znV04K2u63xbX2lw1VUPyJANCdx&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=Eeohxf75o0IuNztdgcTv4Q&oh=00_AfRVxmTcpOuHe6AI9bejs6dumAat-rOlJGMHGQEOpSBbZA&oe=688E14B7',
        buttonText: 'Ver en Facebook',
        link: 'https://www.facebook.com/share/p/1EYVgcSTRA/?mibextid=wwXIfr'
    }
];

export const Anuncios = () => {
    return (

        <section style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div className='contenedorTitulo'>
                <h2 className='tituloSeccion'>Anuncios</h2>
            </div>

            <Row gutter={[24, 24]} justify="center">
                {anuncios.map(item => (
                    <Col key={item.id} xs={24} sm={12} md={8}>
                        <Card
                            hoverable
                            cover={<Image style={{ aspectRatio: "7  /6" }} alt={item.title} src={item.image} />}
                            bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            style={{ borderRadius: 12, cursor:"default" }}
                        >
                            <Title level={4} style={{ color: '#1A4B8C', textAlign: 'center' }}>
                                {item.title}
                            </Title>
                            <Button
                                type="primary"
                                style={{ background: '#F26C0D', borderColor: '#F26C0D', marginTop: 'auto', borderRadius: 8 }}
                                onClick={() => window.open(item.link, '_blank')}
                            >
                                {item.buttonText}
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    )
}