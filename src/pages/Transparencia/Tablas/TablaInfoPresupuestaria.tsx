import { Button, Table } from "antd";
import { FilePdfOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
export const TablaInfoPresupuestaria = () => {
    const dataSource = [
        {
            name: "ENDEUDAMIENTO NETO",
            2024: {
                4: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-4-2024/ENDEUDAMIENTO NETO.pdf"
            },
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION PRESUPUESTARIA/ENDEUDAMIENTO NETO.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION PRESUPUESTARIA/ENDEUDAMIENTO NETO.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PRESUPUESTARIA/ENDEUDAMIENTO NETO A 3ER TRIMESTRE 2025.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PRESUPUESTARIA/INFORMACION_PRESUPUESTARIA-01-10-2025-31-12-2025/ENDEUDAMIENTO_NETO_01-10-2025-31-12-2025.pdf"
            },
            2026:{
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información presupuestaria/ENDEUDAMIENTO NETO.pdf",
                2:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Informaci%C3%B3n%20presupuestaria/1.-%20ENDEUDAMIENTO%20NETO.pdf",
            }
        },
        {
            name: "ESTADO ANALÍTICO DE LOS INGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION PRESUPUESTARIA/ESTADO ANALITICO DE LOS INGRESOS.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION PRESUPUESTARIA/ESTADO ANALITICO DE LOS INGRESOS.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PRESUPUESTARIA/ESTADO ANALITICO DE LOS INGRESOS.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PRESUPUESTARIA/INFORMACION_PRESUPUESTARIA-01-10-2025-31-12-2025/ESTADO_ANALITICO_DE_LOS_INGRESOS_01-12-2025-31-12-2025.pdf",
            },
            2026:{
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información presupuestaria/ESTADO ANALITICO DE LOS INGRESOS.pdf",
                2:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Informaci%C3%B3n%20presupuestaria/2.-%20ESTADO%20ANALITICO%20DE%20LOS%20INGRESOS.pdf",
            }
        },
        {
            name: "INTERESES DE LA DEUDA",
            2024: {
                4: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-4-2024/INTERESES DE LA DEUDA.pdf"
            },
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION PRESUPUESTARIA/INTERESES DE LA DEUDA.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION PRESUPUESTARIA/INTERESES DE LA DEUDA.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PRESUPUESTARIA/INTERESES DE LA DEUDA 3ER TRIMESTRE 2025.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PRESUPUESTARIA/INFORMACION_PRESUPUESTARIA-01-10-2025-31-12-2025/INTERESES_DE_LA_DEUDA_01-10-2025-31-12-2025.pdf",
            },
            2026:{
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información presupuestaria/INTERESES DE LA DEUDA.pdf",
                2:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Informaci%C3%B3n%20presupuestaria/3.-%20INTERESES%20DE%20LA%20DEUDA.pdf",
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
                            dataIndex: [2024, 4],
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
                            title: '3',
                            dataIndex: [2025, 3],
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
                            title: '4',
                             dataIndex: [2025, 4],
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
                            title: '3',
                            dataIndex: [2026, 3],
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
                            title: '4',
                             dataIndex: [2026, 4],
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