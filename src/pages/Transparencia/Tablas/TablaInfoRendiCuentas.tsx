import { Button, Table } from "antd";
import { FilePdfOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

export const TablaInfoRendiCuentas = () => {
    const dataSource = [
        {
            name: "CLASIFICACIÓN ADMINISTRIVA",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PRESUPUESTARIA/TRIMESTRE-1/clasificacion adminisrativa.pdf"
            }
        },
        {
            name: "CLASIFICACIÓN ECONOMICA",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PRESUPUESTARIA/TRIMESTRE-1/clasificacion de economica (por tipo de gasto).pdf"
            }
        },
        {
            name: "CLASIFICACIÓN POR OBJETO DEL GASTO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PRESUPUESTARIA/TRIMESTRE-1/clasificacion por objeto del gasto.pdf"
            }
        },
        {
            name: "CLASIFICACIÓN FUNCIONAL",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PRESUPUESTARIA/TRIMESTRE-1/clasificacion funcional.pdf"
            }
        },
        {
            name: "CLASIFICACIÓN POR CATEGORIA PROGRAMATICA",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PROGRAMATICA/TRIMESTRE-1/clasificacion de programas y proyectos.pdf"
            }
        },
        {
            name: "CLASIFICACIÓN PROGRAMAS Y PROYECTOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PROGRAMATICA/TRIMESTRE-1/clasificacion por categoria programatica.pdf"
            }
        },


    ];
    const columns: ColumnsType<any> = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
            // width: "40%"
            width: 850
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
