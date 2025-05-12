import { Button, Table } from "antd";
import { FilePdfOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

export const TablaInfoLDF = () => {
    const dataSource = [
        {
            name: "BALANCE PRESUPUESTARIO.",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/BALANCE PRESUPUESTARIO.pdf"
            }
        },
        {
            name: "ESTADO ANALITICO DE INGRESOS DETALLADOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DE INGRESOS DETALLADOS.pdf"
            }
        },
        {
            name: "ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACION ADMINISTRATIVA",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION ADMINISTRATIVA.pdf"
            }
        },
        {
            name: "ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACION DE SERVICIOS PERSONALES",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION DE SERVICIOS PERSONALES.pdf"
            }
        },
        {
            name: "ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACION FUNCIONAL",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION FUNCIONAL.pdf"
            }
        },
        {
            name: "ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS CLASIFICACION POR OBJETO DEL GASTO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO ANALITICO DEL EJERCICIO DEL PRESUPUESTO DE EGRESOS_CLASIFICACION POR OBJETO DEL GASTO.pdf"
            }
        },
        {
            name: "ESTADO DE SITUACION FINANCIERA DETALLADO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/ESTADO DE SITUACION FINANCIERA DETALLADO.pdf"
            }
        },
        {
            name: "INFORME ANALITICO DE LA DEUDA Y OTROS PASIVOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/INFORME ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf"
            }
        },
        {
            name: "INFORME ANALITICO DE OBLIGACIONES DE FINANCIAMIENTO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/INFORME ANALITICO DE OBLIGACIONES DE FINANCIAMIENTO.pdf"
            }
        },
        {
            name: "INFORME SOBRE ESTUDIOS ACTUARIALES",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/INFORME SOBRE ESTUDIOS ACTUARIALES.pdf"
            }
        },
        {
            name: "OBLIGACIONES A CORTO PLAZO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/OBLIGACIONES A CORTO PLAZO.pdf"
            }
        },
        {
            name: "PROYECCIONES DE EGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/PROYECCIONES DE EGRESOS.pdf"
            }
        },
        {
            name: "PROYECCIONES DE INGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/PROYECCIONES DE INGRESOS.pdf"
            }
        },
        {
            name: "RESULTADOS DE EGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/RESULTADOS DE EGRESOS.pdf"
            }
        },
        {
            name: "RESULTADOS DE INGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/LDF/RESULTADOS DE INGRESOS.pdf"
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