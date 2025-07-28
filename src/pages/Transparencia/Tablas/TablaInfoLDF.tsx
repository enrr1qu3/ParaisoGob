import { Button, Table } from "antd";
import { FilePdfOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

export const TablaInfoLDF = () => {
    const dataSource = [
        {
            name: "ESTADO ANALÍTICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS (POR TIPO DE GASTO)",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS (POR TIPO DE GASTO).pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_(POR TIPO DE GASTO).pdf"
            }
        },
        {
            name: "BALANCE PRESUPUESTARIO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/BALANCE PRESUPUESTARIO.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/BALANCE PRESUPUESTARIO.pdf"
            }
        },
        {
            name: "ESTADO ANALÍTICO DE INGRESOS DETALLADOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DE INGRESOS DETALLADOS.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/ESTADO ANALITICO DE INGRESOS DETALLADOS.pdf"
            }
        },
        {
            name: "ESTADO ANALÍTICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACIÓN ADMINISTRATIVA",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION ADMINISTRATIVA.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION ADMINISTRATIVA.pdf"
            }
        },
        {
            name: "ESTADO ANALÍTICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACIÓN DE SERVICIOS PERSONALES",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION DE SERVICIOS PERSONALES.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION DE SERVICIOS PERSONALES.pdf"
            }
        },
        {
            name: "ESTADO ANALÍTICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACIÓN FUNCIONAL",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION FUNCIONAL.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION FUNCIONAL.pdf"
            }
        },
        {
            name: "ESTADO ANALÍTICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACIÓN POR OBJETO DEL GASTO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION POR OBJETO DEL GASTO.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION POR OBJETO DEL GASTO.pdf"
            }
        },
        {
            name: "ESTADO DE SITUACIÓN FINANCIERA DETALLADO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO DE SITUACION FINANCIERA DETALLADO.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/ESTADO DE SITUACION FINANCIERA DETALLADO.pdf"
            }
        },
        {
            name: "INFORME ANALÍTICO DE LA DEUDA Y OTROS PASIVOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/INFORME ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/INFORME ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf"
            }
        },
        {
            name: "INFORME ANALÍTICO DE OBLIGACIONES DE FINANCIAMIENTO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/INFORME ANALITICO DE OBLIGACIONES DE FINANCIAMIENTO.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/LDF/INFORME ANALITICO DE OBLIGACIONES DE FINANCIAMIENTO.pdf"
            }
        },
        {
            name: "INFORME SOBRE ESTUDIOS ACTUARIALES",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/INFORME SOBRE ESTUDIOS ACTUARIALES.pdf",
                // 2: ""
            }
        },
        {
            name: "OBLIGACIONES A CORTO PLAZO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/OBLIGACIONES A CORTO PLAZO.pdf",
                // 2: ""
            }
        },
        {
            name: "PROYECCIONES DE EGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/PROYECCIONES DE EGRESOS.pdf",
                // 2: ""
            }
        },
        {
            name: "PROYECCIONES DE INGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/PROYECCIONES DE INGRESOS.pdf",
                // 2: ""
            }
        },
        {
            name: "RESULTADOS DE EGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/RESULTADOS DE EGRESOS.pdf",
                // 2: ""
            }
        },
        {
            name: "RESULTADOS DE INGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/RESULTADOS DE INGRESOS.pdf",
                // 2: ""
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
                //     title: '2021',
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
                            align: 'center',
                        },
                        {
                            title: '4',
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