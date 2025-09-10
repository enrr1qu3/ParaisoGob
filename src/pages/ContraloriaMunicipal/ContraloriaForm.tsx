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
                    <Card>
                        {submitOk
                            ? <Result
                                status="success"
                                title="Reporte enviado correctamente"
                                extra={[
                                    <Link to={"/contraloria"} key="contraloria">
                                        <Button type="primary">
                                            Regresar a contraloria
                                        </Button>
                                    </Link>,
                                    <Button
                                        onClick={() => setSubmitOk(false)}
                                        key="reset">
                                        Enviar un nuevo Reporte
                                    </Button>,
                                ]}
                            />
                            : <Form
                                layout="vertical"
                                form={form}
                                name="reporte_Ciudadano"
                                autoComplete='off'
                                onFinish={submitQueja}
                                disabled={loadingForm}
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
                                            <Input placeholder="Descripción de los hechos"
                                                maxLength={50}
                                                minLength={2}
                                                count={{
                                                    show: true,
                                                    max: 50,
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
                                                multiple
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
                                            <Button htmlType="submit" disabled={loadingForm || submittable} loading={loadingForm} type="primary" block>
                                                Enviar
                                            </Button>

                                        </Form.Item>

                                    </Col>

                                </Row>

                            </Form>
                        }
                    </Card>
                </Col>

            </Row>
        </ConfigProvider >
    )
}
