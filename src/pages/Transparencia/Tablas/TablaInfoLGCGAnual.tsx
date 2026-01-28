import { Button, Table } from "antd";
import { FilePdfOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

export const TablaInfoLGCGAnual = () => {
    const dataSource = [
        {
            name: "INFORMACIÓN ADICIONAL PARA PRESENTAR EL PROYECTO DE PRESUPUESTO DE EGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/ANUAL/PERIODICOFICIALPRESUPUESTO2025.pdf"
            },
            2026: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/2026-01-27_2011/PRESUPUESTO 2026 PUB.docx"
            }
        },
        {
            name: "CALENDARIO DEL PRESUPUESTO DE EGRESOS BASE MENSUAL",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/ANUAL/CALENDARIZADOPRESUPUESTO2025.pdf"
            },
            2026: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/2026-01-27_2011/calendario del presupuesto 2026.pdf"
            }
        },
        {
            name: "PRESUPUESTO DE EGRESOS APROBADO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/ANUAL/PRESUPUESTO 2025 PUB.pdf"
            },
            2026: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/2026-01-27_2011/APROBADOPRESUPUESTO 2026.pdf"
            }
        },
        {
            name: "DOCUMENTOS DE APROBACIÓN DEL PRESUPUESTO DE EGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/ANUAL/PRESUPUESTO 2025 PUB.pdf"
            },
            2026: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/2026-01-27_2011/PRESUPUESTO2026.pdf"
            }
        },
        {
            name: "LEY DE INGRESOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/ANUAL/PRESUPUESTO DE INGRESOS APROBADO.pdf"
            }
        },
        {
            name: "CUENTA PÚBLICA ANUALIZADA",
            2024: {
                4: "https://gobparaiso.blob.core.windows.net/transparencia/CUENTA PUBLICA ANUALIZADA 2024.pdf"
            },
            2020: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/Cuenta Pública 2020_Censurado-1.pdf"
            },
            2021: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/Cuenta Pública Anualizada 2021.pdf"
            },
            2022: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/CUENTA PUBLICA ANUALIZADA 2022.pdf"
            },
            2023: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/CUENTA PUBLICA ANUALIZADA 2023.pdf"
            },

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
                {
                    title: '2020',
                    children: [
                        {
                            title: '1',
                            align: 'center',
                            dataIndex: [2020, 1],
                            render: (e: any) => (
                                (e) && < Button
                                    icon={< FilePdfOutlined />}
                                    href={e}
                                    target="_blank"
                                />
                            ),
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
                    align: "center",
                },
                {
                    title: '2021',
                    children: [
                        {
                            title: '1',
                            align: 'center',
                            dataIndex: [2021, 1],
                            render: (e: any) => (
                                (e) && < Button
                                    icon={< FilePdfOutlined />}
                                    href={e}
                                    target="_blank"
                                />
                            ),
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
                    align: "center",
                },
                {
                    title: '2022',
                    children: [
                        {
                            title: '1',
                            align: 'center',
                            dataIndex: [2022, 1],
                            render: (e: any) => (
                                (e) && < Button
                                    icon={< FilePdfOutlined />}
                                    href={e}
                                    target="_blank"
                                />
                            ),
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
                    align: "center",
                },
                {
                    title: '2023',

                    children: [
                        {
                            title: '1',
                            dataIndex: [2023, 1],
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