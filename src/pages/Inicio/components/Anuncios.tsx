import { Button, Card, Col, Image, Row, Typography } from 'antd';
//  w
const { Title } = Typography;

const anuncios = [
    {
        id: 1,
        title: '📣 ¡Aprovecha los descuentos en el pago del predial!',
        image: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/524129252_122183398922505987_1554585239385295218_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JPjGgKdC7bQQ7kNvwFSL0B2&_nc_oc=Adm3m2A0hxeOb8e1kYwLa0zeGAiW4bB86LFtKPrj7fYuCFy-BEzVVfqSy6Dqb2CMfrw&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=sAlQ2jLSz56iPozmac72Kg&oh=00_AfZOiLaKRUtUqcHldnKu_AO9uTXH85HN45YBjOp8dhRARQ&oe=68C7C15F',
        buttonText: 'Ver en Facebook',
        link: 'https://www.facebook.com/share/p/1FYJkfb1hg/?mibextid=wwXIfr'
    },
    {
        id: 2,
        title: '🐔 ¡HOY INICIA LA ENTREGA DE GALLINAS!',
        image: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/524922430_122183390840505987_299499171823405578_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vvC1cnj7jNgQ7kNvwEbgmuU&_nc_oc=AdmO2YfqRYJ47k2L0jD1rhRUEatKV7OJwx4MXkfMZiE0aknvPUE453ew8wtrmh2fVwQ&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=TAwdk5d613x7fCLwuo9CVQ&oh=00_AfZsWSk9Zh9dEknEKWV1UDnVs4A1JinpddBhc0mdjJzChA&oe=68C7D610',
        buttonText: 'Ver en Facebook',
        link: 'https://www.facebook.com/share/p/1AioG9Regh/?mibextid=wwXIfr'
    },
    {
        id: 3,
        title: ' 🔥🧯EVITEMOS JUNTOS LOS INCENDIOS EN PARAÍSO',
        image: 'https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/525256064_122183593694505987_6819496128697692625_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MdBFtOo8yikQ7kNvwH4tvIl&_nc_oc=Adlj9rsl4eNe41LibUEfBGAVxYvTtnF_-H-pc5r5VqraXyPXIPqyfwsxTN36VwbcfNc&_nc_zt=23&_nc_ht=scontent.fvsa3-1.fna&_nc_gid=gEw42B5jbsgYzgJeYE0BJg&oh=00_AfaCPM9mYcg0tMcw4OLbj8s31JE9V3s8VEPKpLQeEIrTtQ&oe=68C7B62A',
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
                            style={{ borderRadius: 12, cursor: "default" }}
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