import { Button, Table } from "antd";
import { FilePdfOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
export const TablaInfoContable = () => {
    const dataSource = [
        {
            name: "ESTADO DE ACTIVIDADES",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO DE ACTIVIDADES.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION CONTABLE/ESTADO DE ACTIVIDADES.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/ESTADO DE ACTIVIDADES.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/INFORMACION_CONTABLE_31-12-2025/ESTADO_DE_ACTIVIDADES_01-01-2025-31-12-2025.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información contable/Estado de actividades/ESTADO DE ACTIVIDADES.pdf"
            }
        },
        {
            name: "ESTADO ANALÍTICO DE LA DEUDA Y OTROS PASIVOS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION CONTABLE/ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/INFORMACION_CONTABLE_31-12-2025/ESTADO_ANALITICO_DE_LA_DEUDA_Y_OTROS_PASIVOS_01-12-2025-31-12-2025.pdf",
            },
            2026:{
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información contable/Estado analítico de la deuda y otros pasivos/ESTADO ANALÍTICO DE LA DEUDA Y OTROS PASIVOS.pdf"
                        }
        },
        {
            name: "ESTADO ANALÍTICO DEL ACTIVO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO ANALITICO DEL ACTIVO.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION CONTABLE/ESTADO ANALITICO DEL ACTIVO.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/ESTADO ANALITICO DEL ACTIVO.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/INFORMACION_CONTABLE_31-12-2025/ESTADO_ANALITICO_DEL_ACTIVO_01-01-2025-31-12-2025.pdf",
            },
            2026:{
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información contable/Estado analítico del activo/ESTADO ANALÍTICO DEL ACTIVO.pdf"
            }
        },
        {
            name: "ESTADO DE CAMBIOS EN LA SITUACIÓN FINANCIERA",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO DE CAMBIOS EN LA SITUACION FINANCIERA.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION CONTABLE/ESTADO DE CAMBIOS EN LA SITUACION FINANCIERA.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/ESTADO DE CAMBIOS EN LA SITUACION FINANCIERA.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/INFORMACION_CONTABLE_31-12-2025/ESTADO_DE_CAMBIOS_EN_LA_SITUACION_FINANCIERA_01-12-2025-31-12-2025.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información contable/Estado de cambios en la situación financiera/ESTADOS DE CAMBIOS EN LA SITUACIÓN FINANCIERA.pdf"
                        }
        },
        {
            name: "ESTADO DE FLUJO DE EFECTIVO",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO DE FLUJO DE EFECTIVO.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION CONTABLE/ESTADO DE FLUJO EFECTIVO.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/ESTADO DE FLUJO EFECTIVO.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/INFORMACION_CONTABLE_31-12-2025/ESTADO_DE_FLUJOS_DE_EFECTIVO_01-01-2025-31-12-2025.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información contable/Estado de flujo de efectivo/ESTADO DE FLUJO DE EFECTIVO.pdf"
            }
        },
        {
            name: "ESTADO DE SITUACIÓN FINANCIERA",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO DE SITUACION FINANCIERA.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION CONTABLE/ESTADO DE SITUACION FINANCIERA.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/ESTADO DE SITUACION FINANCIERA.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/INFORMACION_CONTABLE_31-12-2025/ESTADO_DE_SITUACION_FINANCIERA_31-12-2025.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información contable/Estado de situación financiera/ESTADO DE SITUACION FINANCIERA.pdf"
            }
        },
        {
            name: "ESTADO DE VARIACIÓN DE LA HACIENDA PUBLICA",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO DE VARIACION DE LA HACIENDA PUBLICA.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION CONTABLE/ESTADO DE VARIACION DE LA HACIENDA PUBLICA.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/ESTADO DE VARIACION DE LA HACIENDA PUBLICA.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/INFORMACION_CONTABLE_31-12-2025/ESTADO_DE_VARIACION_EN_LA_HACIENDA_PUBLICA_01-12-2025-31-12-2025.pdf",
            },
            2026:{
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información contable/Estado de variación de la hacienda publica/ESTADO DE VARIACIÓN DE LA HACIENDA PÚBLICA.pdf"
            }
        },
        {
            name: "NOTAS A LOS ESTADOS FINANCIEROS",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/NOTAS A LOS ESTADOS FINANCIEROS.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION CONTABLE/NOTAS A LOS ESTADOS FINANCIEROS.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/NOTAS A LOS ESTADOS FINANCIEROS.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/INFORMACION_CONTABLE_31-12-2025/NOTAS_A_LOS_ESTADOS_FINANCIEROS_01-12-2025-31-12-2025.pdf",
            },
            2026:{
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información contable/Notas a los estados financieros/NOTA A LOS ESTADOS FINANCIEROS.pdf"
            }
        },
        {
            name: "PASIVOS CONTINGENTES",
            2024: {
             4: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-4-2024/PASIVOS CONTINGENTES.pdf"   
            },
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/PASIVOS CONTINGENTES.pdf",
                2: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2025/INFORMACION CONTABLE/PASIVOS CONTINGENTES.pdf",
                3: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/PASIVOS CONTINGENTES.pdf",
                4: "https://gobparaiso.blob.core.windows.net/transparencia/Sistema de Evaluación de Armonización Contable/INFORMACION_CONTABLE_31-12-2025/INFORME_SOBRE_PASIVOS_CONTINGENTES_01-12-2025-31-12-2025.pdf",
            },
            2026: {
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información contable/Pasivos contingentes/PASIVOS CONTINGENTES.pdf"
            }
        },
        {
            name: "CUENTAS ACTIVAS DE BANCOS",
            2025: {
                3: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-3-2025/INFORMACION_CONTABLE/CUENTAS ACTIVAS DE BANCOS.pdf"
            },
            2026:{
                1:"https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Información contable/Cuentas activas de banco/CUENTAS ACTIVAS DE BANCOS.pdf"
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
                            width: "10px",
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
                            width: "10px",
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
                            width: "10px",
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
                            width: "10px",
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
                            width: "10px",
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
