import { Button, Table } from "antd";
import { FilePdfOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

export const TablaInfoLDF = () => {
    const dataSource = [
        {
            name: "ESTADO ANALÍTICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS (POR TIPO DE GASTO)",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS (POR TIPO DE GASTO).pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_(POR TIPO DE GASTO).pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION ECONOMICA.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/ESTADO_ANALITICO_DEL_EJERCICIO_DEL_PRESUPUESTO_DE_EGRESO_ DETALLADO_(CLASIFICACION_POR_OBJETO_DE_GASTO)_LDF_01-01-25-31-12-25.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS POR TIPO DE GASTO.pdf"
            }
        },
        {
            name: "BALANCE PRESUPUESTARIO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/BALANCE PRESUPUESTARIO.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/BALANCE PRESUPUESTARIO.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/BALANCE PRESUPUESTARIO.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/BALANCE_PRESUPUESTARIO_LDF_01-01-2025-31-12-2025.pdf",
            },
            2026:{
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/BALANCE PRESUPUESTARIO.pdf"
            }
        },
        {
            name: "ESTADO ANALÍTICO DE INGRESOS DETALLADOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DE INGRESOS DETALLADOS.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/ESTADO ANALITICO DE INGRESOS DETALLADOS.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/ESTADO ANALITICO DE INGRESOS DETALLADO.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/ESTADO_ANAITICO_DE_LOS_INGRESOS_DETALLADOS_LDF_01-01-2025-31-12-2025.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/ESTADO ANALITICO DE INGRESOS DETALLADOS.pdf"
            }
        },
        {
            name: "ESTADO ANALÍTICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACIÓN ADMINISTRATIVA",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION ADMINISTRATIVA.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION ADMINISTRATIVA.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION ADMINISTRATIVA.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/ESTADO_ANALITICO_DEL_EJERCICIO_DEL_PRESUPUESTO_DE_EGRESOS_DETALLADO_(CLASIFICACION_ADMINISTRATIVA)_LDF_01-01-2025-31-12-2025.pdf",
            },
            2026: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACION ADMINISTRATIVA.pdf"
                        }
        },
        {
            name: "ESTADO ANALÍTICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACIÓN DE SERVICIOS PERSONALES",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION DE SERVICIOS PERSONALES.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION DE SERVICIOS PERSONALES.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION DE SERVICIOS PERSONALES.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/ESTADO~4.PDF",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACION DE SERVICIOS PERSONALES.pdf"
                                    }
        },
        {
            name: "ESTADO ANALÍTICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACIÓN FUNCIONAL",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION FUNCIONAL.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION FUNCIONAL.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION FUNCIONAL.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/ESTADO_ANALITICO_DEL_EJERCICIO_DEL_PRESUPUESTO_DE_EGRESOS_DETALLADO_(CLASIFICACION_FUNCIONAL)_LDF_01-12-25-31-12-25.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACION FUNCIONAL.pdf"
            }
        },
        {
            name: "ESTADO ANALÍTICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACIÓN POR OBJETO DEL GASTO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION POR OBJETO DEL GASTO.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION POR OBJETO DEL GASTO.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION POR OBJETO DEL GASTO.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/ESTADO_ANALITICO_DEL_EJERCICIO_DEL_PRESUPUESTO_DE_EGRESO_ DETALLADO_(CLASIFICACION_POR_OBJETO_DE_GASTO)_LDF_01-01-25-31-12-25.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACION POR OBJETO DE GASTO.pdf"
            }
        },
        {
            name: "ESTADO DE SITUACIÓN FINANCIERA DETALLADO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO DE SITUACION FINANCIERA DETALLADO.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/ESTADO DE SITUACION FINANCIERA DETALLADO.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/ESTADO DE SITUACION FINANCIERA DETALLADO.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/ESTADO_DE_SITUACION_FINANCIERA_DETALLADO_LDF_01-01-2025-31-12-2025.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/ESTADO DE SITUACIÓN FINANCIERA DETALLADO.pdf"
            }
        },
        {
            name: "INFORME ANALÍTICO DE LA DEUDA Y OTROS PASIVOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/INFORME ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/INFORME ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/INFORME ANALITICO DE LA DEUDA PUBLICA Y OTROS PASIVOS.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/INFORME_ANALITICO_DE_LA_DEUDA_PUBLICA_Y_OTROS_PASIVOS_LDF_01-01-2025-31-12-2025.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf"
            }
        },
        {
            name: "INFORME ANALÍTICO DE OBLIGACIONES DE FINANCIAMIENTO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/INFORME ANALITICO DE OBLIGACIONES DE FINANCIAMIENTO.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/INFORME ANALITICO DE OBLIGACIONES DE FINANCIAMIENTO.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/INFORME ANALITICO DE OBLIGACIONESDIFERENTES DE FINANCIAMIENTOS.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/INFORME_ANALITICO_DE_OBLIGACIONES_DIFERENTES_DE_FINANCIAMIENTO_LDF_01-01-2025-31-12-2025.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/INFORME ANALÍTICO DE OBLIGACIONES DE FINANCIAMIENTO.pdf"
            }
        },
        {
            name: "INFORME SOBRE ESTUDIOS ACTUARIALES",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/INFORME SOBRE ESTUDIOS ACTUARIALES.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/INFORME SOBRE ESTUDIOS ACTUARIALES.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/INFORME SOBRE ESTUDIOS ACTUARIALES.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/INFORME_SOBRE_ESTUDIOS_ACTUARIALES_LDF_01-10-2025-31-12-2025.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/INFORMES SOBRE ESTUDIOS ACTUARIALES.pdf"
            }
        },
        {
            name: "OBLIGACIONES A CORTO PLAZO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/OBLIGACIONES A CORTO PLAZO.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/OBLIGACIONES A CORTO PLAZO.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/OBLIGACIONES A CORTO PLAZO.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/OBLIGACIONES_A_CORTO_PLAZO_LDF_01-10-2025-31-12-2025.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/OBLIGACIONES A CORTO PLAZO.pdf"
            }
        },
        {
            name: "PROYECCIONES DE EGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/PROYECCIONES DE EGRESOS.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/PROYECCIONES DE EGRESOS.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/PROYECCIONES DE EGRESOS.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/PROYECCIONES_DE_EGRESOS_LDF.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/PROYECCIONES DE EGRESOS.pdf"
            }
        },
        {
            name: "PROYECCIONES DE INGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/PROYECCIONES DE INGRESOS.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/PROYECCIONES DE INGRESOS.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/PROYECCIONES DE INGRESOS.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/PROYECCIONES_DE_INGRESOS_LDF.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/PROYECCIONES DE INGRESOS.pdf"
            }
        },
        {
            name: "RESULTADOS DE EGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/RESULTADOS DE EGRESOS.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/RESULTADOS DE EGRESOS.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/RESULTADOS DE EGRESOS.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/RESULTADOS_DE_EGRESOS_LDF.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/RESULTADOS DE EGRESOS.pdf"
            }
        },
        {
            name: "RESULTADOS DE INGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/RESULTADOS DE INGRESOS.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/RESULTADOS DE INGRESOS.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/RESULTADOS DE INGRESOS.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/LDF Entidades Federativas y Municipios/LDF-ENTIDADES-FEDERATIVAS-Y-MUNICIPIOS-09-02-2026/RESULTADOS_DE_INGRESOS_LDF.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/LDF Entidades federativas y municipios/RESULTADOS DE INGRESOS.pdf"
            }
        },

    ];
    const columns: ColumnsType<any> = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
        },
        {

            title: 'Trimestres',
            align: 'center',
            children: [
                // {
                //     title: '2022',
                //     children: [
                //         {
                //             title: '1',
                //         },
                //         {
                //             title: '2',
                //         },
                //         {
                //             title: '3',
                //         },
                //         {
                //             title: '4',
                //         },
                //     ],
                //     align: "center",
                // },
                {
                    title: '2023',

                    children: [
                        {
                            title: '1',
                            align: 'center',
                        },
                        {
                            title: '2',
                            align: 'center',
                        },
                        {
                            title: '3',
                            align: 'center',
                        },
                        {
                            title: '4',
                            align: 'center',
                        },
                    ],

                },
                {
                    title: '2024',
                    children: [
                        {
                            title: '1',
                            align: 'center',
                        },
                        {
                            title: '2',
                            align: 'center',
                        },
                        {
                            title: '3',
                            align: 'center',
                        },
                        {
                            title: '4',
                            align: 'center',
                        },
                    ],
                },
                {
                    title: '2025',
                    children: [
                        {
                            title: '1',
                            dataIndex: [2025, 1],
                            width: "10px",
                            render: (e: any) => (
                                (e) && < Button
                                    icon={< FilePdfOutlined />}
                                    href={e}
                                    target="_blank"
                                />
                            ),
                            align: 'center',
                        },
                        {
                            title: '2',
                            dataIndex: [2025, 2],
                            render: (e: any) => (
                                (e) && <Button
                                    icon={< FilePdfOutlined />}
                                    href={e}
                                    target="_blank"
                                />
                            ),
                            align: 'center',
                        },
                        {
                            title: '3',
                            dataIndex: [2025, 3],
                            render: (e: any) => (
                                (e) && <Button
                                    icon={< FilePdfOutlined />}
                                    href={e}
                                    target="_blank"
                                />
                            ),
                            align: 'center',
                        },
                        {
                            title: '4',
                            dataIndex: [2025, 4],
                            render: (e: any) => (
                                (e) && <Button
                                    icon={< FilePdfOutlined />}
                                    href={e}
                                    target="_blank"
                                />
                            ),
                            align: 'center',
                        },
                    ]
                },
                {
                    title: '2026',
                    children: [
                        {
                            title: '1',
                            dataIndex: [2026, 1],
                            width: "10px",
                            render: (e: any) => (
                                (e) && < Button
                                    icon={< FilePdfOutlined />}
                                    href={e}
                                    target="_blank"
                                />
                            ),
                            align: 'center',
                        },
                        {
                            title: '2',
                            dataIndex: [2026, 2],
                            render: (e: any) => (
                                (e) && <Button
                                    icon={< FilePdfOutlined />}
                                    href={e}
                                    target="_blank"
                                />
                            ),
                            align: 'center',
                        },
                        {
                            title: '3',
                            dataIndex: [2026, 3],
                            render: (e: any) => (
                                (e) && <Button
                                    icon={< FilePdfOutlined />}
                                    href={e}
                                    target="_blank"
                                />
                            ),
                            align: 'center',
                        },
                        {
                            title: '4',
                            dataIndex: [2026, 4],
                            render: (e: any) => (
                                (e) && <Button
                                    icon={< FilePdfOutlined />}
                                    href={e}
                                    target="_blank"
                                />
                            ),
                            align: 'center',
                        },
                    ]
                },

            ],
        }
    ];
    return (
        <Table
            bordered
            size="small"
            columns={columns}
            dataSource={dataSource}
            rowKey={(record) => record.name}
            scroll={{ x: 'max-content' }}

        />
    )
}