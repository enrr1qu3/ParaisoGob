import { Button, Table } from "antd";
import { FilePdfOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

export const TablaInfoProgramatica = () => {
    const dataSource = [
        {
            name: "CLASIFICACIÓN DE PROGRAMAS Y PROYECTOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PROGRAMATICA/TRIMESTRE-1/clasificacion de programas y proyectos.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION PROGRAMATICA/programas y proyectos 2DOTRIM.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PROGRAMATICA/PROGRAMAS Y PROYECTOS.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PROGRAMATICA/4to semstre/PROGRAMAS Y PROYECTOS.pdf"
            },
            2026: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información programatica/PROGRAMAS Y PROYECTOS.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Informaci%C3%B3n%20programatica/CLASIFICACION%20DE%20PROGRAMAS%20Y%20PROYECTOS.pdf",
            }
        },
        {
            name: "CLASIFICACIÓN POR CATEGORÍA PROGRAMÁTICA",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PROGRAMATICA/TRIMESTRE-1/clasificacion por categoria programatica.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION PROGRAMATICA/CLASIFICACION POR CATEGORIA PROGRAMATICA 2DOTRIM.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PROGRAMATICA/GASTO POR CATEGORIA PROGRAMATICA.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PROGRAMATICA/4to semstre/GASTO POR CATEGORIA PROGRAMATICA.pdf"
            },
            2026: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información programatica/CLASIFICACION POR CATEGORIA PROGRAMATICA.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Informaci%C3%B3n%20programatica/CLASIFICACION%20POR%20CATEGORIA%20PROGRAMATICA.pdf",
            }
        },
        {
            name: "PROGRAMAS Y PROYECTOS DE INVERSIÓN",
            2025: {
                4: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PROGRAMATICA/4to semstre/PROGRAMAS Y PROYECTOS DE INVERSION.pdf"
            },
            2026: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información programatica/PROGRAMAS Y PROYECTOS DE INVERSION.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Informaci%C3%B3n%20programatica/PROGRAMAS%20Y%20PROYECTOS%20DE%20INVERSION.pdf",
            }
        },
        {
            name: "RECURSOS RECIBIDOS FORTAMUN",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RECURSOS FEDERALES TRANSFERIDOS/TRIMESTRE-1/CONAC FONDOIV1ERTRIM2025.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION PROGRAMATICA/CONAC2DOTRIM2025FORTAMUN.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PROGRAMATICA/CONAC FORTAMUN TERCER TRIMESTRE.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PROGRAMATICA/CONACFIV4TOTRIM2025.pdf"
            },
            2026:{
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información programatica/RECURSOS RECIBIDOS FORTAMUN.pdf",
                2:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Informaci%C3%B3n%20programatica/RECURSOS%20RECIBIDOS%20FORTAMUN%20.pdf",
            }
        },
        {
            name: "OBRAS Y ACCIONES A REALIZAR, FAIS ",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RECURSOS FEDERALES TRANSFERIDOS/TRIMESTRE-1/CONACFIII1ERTRIM2025.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION PROGRAMATICA/CONAC2DOTRIM2025FAIS.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PROGRAMATICA/CONAC FAIS TERCER TRIMESTRE.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PROGRAMATICA/CONACFIII4TOTRIM2025.pdf"
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información programatica/OBRAS Y ACCIONES A REALIZAR FAIS.pdf",
                2:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Informaci%C3%B3n%20programatica/OBRAS,%20ACCIONES%20A%20REALIZAR%20FAIS.pdf",
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