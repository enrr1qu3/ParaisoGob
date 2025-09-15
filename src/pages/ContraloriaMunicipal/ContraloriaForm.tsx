import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Breadcrumb, Button, Card, Col, ConfigProvider, Form, Input,
    notification, Result, Row, Upload
} from "antd";
import { DeleteOutlined, HomeOutlined, InboxOutlined } from '@ant-design/icons';

export default function ContraloriaForm() {
    const [loadingForm, setLoadingForm] = useState<boolean>(false);
    const [submittable, setSubmittable] = useState<boolean>(true);
    const [submitOk, setSubmitOk] = useState<boolean>(false);
    const [form] = Form.useForm<any>();
    const values = Form.useWatch([], form);
    const [api, contextHolder] = notification.useNotification();
    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const openNotification = () => {
        api.open({
            message: 'Error al enviar el reporte',
            description:
                'Ocurrió un error al enviar tu reporte. Por favor, inténtalo nuevamente en otro momento.',
            showProgress: true,
            pauseOnHover: true,
            type: 'error'
        });
    };

    const submitQueja = async (values: any) => {
        setLoadingForm(true);

        const formData = new FormData();
        formData.append('NombreCompleto', values.NombreCompleto);
        formData.append('Direccion', values.Direccion);
        formData.append('Telefono', values.Telefono);
        formData.append('CorreoElectronico', values.CorreoElectronico);
        formData.append('NarracionHechos', values.NarracionHechos);

        if (values.DocumentoAdjunto && values.DocumentoAdjunto.length > 0) {
            values.DocumentoAdjunto.forEach((file: any) => {
                if (file.originFileObj) {
                    formData.append('DocumentoAdjunto', file.originFileObj);
                }
            });
        }

        try {
            const response = await fetch('https://ev-dealership-apidev.azurewebsites.net/api/Quejas/Create', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                form.resetFields();
                setSubmitOk(true)
            } else {
                openNotification();
            }
        } catch (error) {
            openNotification();
            // console.error('Error de red:', error);
        } finally {
            setLoadingForm(false);
        }
    };


    useEffect(() => {
        form.validateFields({ validateOnly: true })
            .then(() => setSubmittable(false))
            .catch(() => setSubmittable(true));
    }, [form, values]);

    return (
        <ConfigProvider
        >
            {contextHolder}
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
                                        title: 'Reporte ciudadano',
                                        className: "tituloPincipalColor"
                                    },
                                ]
                            }
                            style={{ margin: 0, marginBottom: 16 }}
                        />
                        <h2 className='tituloP tituloPincipalColor'>
                            Reporte ciudadano
                        </h2>
                        <p className='subtituloP'>
                            Siempre pendientes de la voz del pueblo
                        </p>

                    </Card>
                </Col>

                <Col
                    xs={{ flex: '100%' }}
                    xl={{ flex: '100%' }}
                >
                    <Card style={{ border: 'none', boxShadow: 'none' }}>
                        {submitOk
                            ? <div style={{ padding: '2rem' }}>
                                <Result
                                    status="success"
                                    title={<span style={{ color: '#f26c0d' }}>Reporte enviado correctamente</span>}
                                    subTitle={<span style={{ color: '#4b5563' }}>Su reporte ha sido recibido y será procesado por la Contraloría Municipal</span>}
                                    extra={[
                                        <Link to={"/contraloria"} key="contraloria">
                                            <Button
                                                type="primary"
                                                style={{
                                                    backgroundColor: '#1a4b8c',
                                                    borderColor: '#1a4b8c',
                                                    marginRight: '1rem'
                                                }}
                                            >
                                                Regresar a Contraloría
                                            </Button>
                                        </Link>,
                                        <Button
                                            onClick={() => setSubmitOk(false)}
                                            key="reset"
                                            style={{
                                                backgroundColor: '#f26c0d',
                                                borderColor: '#f26c0d',
                                                color: '#FFF'
                                            }}
                                        >
                                            Enviar Nuevo Reporte
                                        </Button>,
                                    ]}
                                />
                            </div>
                            : <div style={{ padding: '1.5rem' }}>
                                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                    <h2 style={{
                                        color: '#f26c0d',
                                        fontSize: '1.8rem',
                                        fontWeight: '600',
                                        margin: '0',
                                        textTransform: 'uppercase'
                                    }}>
                                        REPORTE CIUDADANO
                                    </h2>
                                    <div style={{
                                        width: '80%',
                                        maxWidth: '400px',
                                        height: '4px',
                                        backgroundColor: '#1a4b8c',
                                        margin: '0.5rem auto'
                                    }}></div>
                                    <p style={{
                                        color: '#4b5563',
                                        fontSize: '1rem',
                                        margin: '1rem 0 0 0'
                                    }}>
                                        Complete el formulario para reportar alguna irregularidad o hacer una denuncia ciudadana
                                    </p>
                                </div>

                                <Form
                                    layout="vertical"
                                    form={form}
                                    name="reporte_Ciudadano"
                                    autoComplete='off'
                                    onFinish={submitQueja}
                                    disabled={loadingForm}
                                    style={{
                                        backgroundColor: '#f8f9fa',
                                        padding: '2rem',
                                        borderRadius: '8px',
                                        border: '1px solid #e5e7eb'
                                    }}
                                >
                                    <Row gutter={16}>

                                        <Col
                                            xs={{ flex: "100%" }}
                                            xl={{ flex: "100%" }}
                                        >
                                            <Form.Item
                                                label="Nombre completo"
                                                name="NombreCompleto"
                                                rules={[
                                                    { required: true, message: "Campo requerido" }
                                                ]}
                                            >
                                                <Input placeholder="Nombre completo" />
                                            </Form.Item>
                                        </Col>

                                        <Col
                                            xs={{ flex: "100%" }}
                                            xl={{ flex: "100%" }}
                                        >
                                            <Form.Item
                                                label="Dirección"
                                                name="Direccion"
                                                rules={[
                                                    { required: true, message: 'Colocar dirección de los hechos' },
                                                ]}
                                            >
                                                <Input placeholder="Dirección de los hechos" />
                                            </Form.Item>
                                        </Col>

                                        <Col
                                            xs={{ flex: "100%" }}
                                            xl={{ flex: "50%" }}
                                        >
                                            <Form.Item
                                                label="Número de contacto"
                                                name="Telefono"
                                                rules={[
                                                    { required: true, message: 'Colocar número de contacto' },
                                                    { pattern: /^\d+$/, message: 'Solo se permiten números' }
                                                ]}
                                            >
                                                <Input type="tel"
                                                    maxLength={10}
                                                    minLength={10}
                                                    style={{ width: "100%" }}
                                                    placeholder="Número de contacto"
                                                    inputMode="tel"
                                                    count={{
                                                        show: true,
                                                        max: 10,
                                                    }}

                                                />
                                            </Form.Item>
                                        </Col>

                                        <Col
                                            xs={{ flex: "100%" }}
                                            xl={{ flex: "50%" }}
                                        >
                                            <Form.Item
                                                label="Correo"
                                                name="CorreoElectronico"
                                                rules={[
                                                    { type: 'email', message: 'Solo se permiten correos!', },
                                                    { required: true, message: 'Colocar el correo' }
                                                ]}                            >
                                                <Input placeholder='Correo electrónico' type="email" />
                                            </Form.Item>
                                        </Col>

                                        <Col
                                            xs={{ flex: "100%" }}
                                            xl={{ flex: "100%" }}
                                        >
                                            <Form.Item
                                                label="Descripción de los hechos"
                                                name="NarracionHechos"
                                                rules={[
                                                    { required: true, message: 'Colocar descripción de los hechos' },
                                                ]}
                                            >
                                                <Input.TextArea placeholder="Descripción de los hechos"
                                                    maxLength={500}
                                                    minLength={2}
                                                    rows={6}
                                                    count={{
                                                        show: true,
                                                        max: 500,
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>

                                        <Col
                                            xs={{ flex: "100%" }}
                                            xl={{ flex: "100%" }}
                                        >
                                            <Form.Item
                                                label="Subir archivos"
                                                name={"DocumentoAdjunto"}
                                                valuePropName="DocumentoAdjunto"
                                                getValueFromEvent={normFile}
                                                tooltip={"Solo se permiten archivo de un tamaño maximo de 10 megas"}
                                            >
                                                <Upload.Dragger
                                                    action="/upload.do"
                                                    maxCount={1}
                                                    beforeUpload={(file) => {
                                                        const isSuccess = file.size <= 10000000;
                                                        if (!isSuccess) {
                                                            // message.error(`${file.name} Archivo demasiado pesado`);
                                                            return isSuccess || Upload.LIST_IGNORE
                                                        }
                                                        return false
                                                    }
                                                    }
                                                    showUploadList={{
                                                        extra: ({ size = 0 }) => (
                                                            <span style={{ color: '#cccccc' }}>({(size / 1024 / 1024).toFixed(2)}MB)</span>
                                                        ),
                                                        showRemoveIcon: true,
                                                        removeIcon: <DeleteOutlined style={{ color: "red" }} />
                                                    }}

                                                >
                                                    <p className="ant-upload-drag-icon">
                                                        <InboxOutlined />
                                                    </p>
                                                    <p className="ant-upload-text">Haga clic o arrastre el archivo a esta área para cargarlo</p>
                                                    <p className="ant-upload-hint">
                                                        Admite cargas individuales o masivas. Está estrictamente prohibido subir datos de la empresa u otros archivos prohibidos.
                                                    </p>
                                                </Upload.Dragger>
                                            </Form.Item>
                                        </Col>

                                        <Col
                                            xs={{ flex: "100%" }}
                                            xl={{ flex: "100%" }}
                                        >

                                            <Form.Item label={null}>

                                                {/* <Button >Cancelar</Button> */}
                                                <Button
                                                    htmlType="submit"
                                                    disabled={loadingForm || submittable}
                                                    loading={loadingForm}
                                                    type="primary"
                                                    block
                                                    size="large"
                                                    style={{
                                                        backgroundColor: '#f26c0d',
                                                        borderColor: '#f26c0d',
                                                        fontWeight: '600',
                                                        height: '50px',
                                                        fontSize: '1.1rem'
                                                    }}
                                                >
                                                    Enviar Reporte
                                                </Button>

                                            </Form.Item>

                                        </Col>

                                    </Row>

                                </Form>
                            </div>
                        }
                    </Card>
                </Col>

            </Row>
        </ConfigProvider >
    )
}
