import { Button, Table } from "antd";
import { FilePdfOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

export const TablaInfoProgramatica = () => {
    const dataSource = [
        {
            name: "ESTADO DE ACTIVIDADES",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO DE ACTIVIDADES.pdf"
            }
        },
        {
            name: "ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf"
            }
        },
        {
            name: "ESTADO ANALITICO DEL ACTIVO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO ANALITICO DEL ACTIVO.pdf"
            }
        },
        {
            name: "ESTADO DE CAMBIOS EN LA SITUACION FINANCIERA",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO DE CAMBIOS EN LA SITUACION FINANCIERA.pdf"
            }
        },
        {
            name: "ESTADO DE FLUJO DE EFECTIVO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO DE FLUJO DE EFECTIVO.pdf"
            }
        },
        {
            name: "ESTADO DE SITUACION FINANCIERA",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO DE SITUACION FINANCIERA.pdf"
            }
        },
        {
            name: "ESTADO DE VARIACION DE LA HACIENDA PUBLICA",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO DE VARIACION DE LA HACIENDA PUBLICA.pdf"
            }
        },
        {
            name: "NOTAS A LOS ESTADOS FINANCIEROS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/NOTAS A LOS ESTADOS FINANCIEROS.pdf"
            }
        },
        {
            name: "PASIVOS CONTINGENTES",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/PASIVOS CONTINGENTES.pdf"
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