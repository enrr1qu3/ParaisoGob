import { Button, Table } from "antd";
import { FilePdfOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

export const TablaInfoHidrocarburos = () => {
    const dataSource = [
        {
            proyecto: "KAM52",
            obra: "MEJORA DE RED DE DISTRIBUCION DE ENERGIA ELECTRICA EN MEDIA Y BAJA TENSION EN LA COLONIA EL BELLOTE (MIGUEL DE LA MADRID), UBICADA ENTRADA ANTES LA PANGA) DEL MUNICIPIO DE PARAISO, TABASCO",
            localidad: "270140004. COL EL BELLOTE. (MIGUEL DE LA MADRID).",
            contrato: "CO-PA-R23MAR-007-2025"
        },
        {
            proyecto: "KAM53",
            obra: "MEJORA DE RED DE DISTRIBUCION DE ENERGIA ELECTRICA EN MEDIA Y BAJA TENSION EN EL EJIDO ANDRES GARCIA (LA ISLA) DEL MUNICIPIO DE PARAISO, TABASCO",
            localidad: "270140045. EJ. ANDRES GARCIA (LA ISLA)",
            contrato: "CO-PA-R23TER-008-2025"
        },
        {
            proyecto: "OPM56",
            obra: "REHABILITACION DE CALLE A BASE DE GRAVA DE REVESTIMIENTO DE 1 1/2 A FINOS, (UBICACIÓN ENTRADA LOS GÓMEZ) EN LA RANCHERIA LAS FLORES PRIMERA SECCIÓN, DEL MUNICIPIO DE PARAISO; TABASCO. (MARITIMA 2023)",
            localidad: "270140009. RA. LAS FLORES 1RA. SECCION",
            contrato: "CO-PA-HIDRCMAR-021-2024",
            2024: {
                4: "https://gobparaiso.blob.core.windows.net/transparencia/RAMO 23/4TO TRIMESTRE 2024/Contrato No. CO-PA-HIDRCMAR-021-2024 OBRA OPM56_redacted.pdf"
            },
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCMAR-021-2024_OBRA_OPM56_redacted.pdf"
            }
        },
        {
            proyecto: "OPM57",
            obra: "REHABILITACION DE RED DE AGUA ENTUBADA EN CALLE EL POSTECITO, EN LA RANCHERIA ORIENTE SEGUNDA SECCIÓN (PALMA HUACA), DEL MUNICIPIO DE PARAISO; TABASCO. (TERRESTRE 2023)",
            localidad: "270140049. RA. ORIENTE 2DA. SECCION . (PALMA HUACA).",
            contrato: "CO-PA-HIDRCTERR-022-2024",
            2024: {
                4: "https://gobparaiso.blob.core.windows.net/transparencia/RAMO 23/4TO TRIMESTRE 2024/Contrato No. CO-PA-HIDRCTERR-022-2024 OBRA OPM57_redacted.pdf"
            },
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCTERR-022-2024_OBRA_OPM57_redacted.pdf"
            }
        },
        {
            proyecto: "OPM58",
            obra: "REHABILITACION DE CAMINO A BASE DE CONCRETO ASFALTICO EN CALIENTE EN EL EJIDO OCCIDENTE SAN FRANCISCO, DEL MUNICIPIO DE PARAISO; TABASCO. (TERRESTRE 2024)",
            localidad: "270140050. EJ. OCCIDENTE (SAN FRANCISCO).",
            contrato: "CO-PA-HIDRCTERR-023-2024",
            2024: {
                4: "https://gobparaiso.blob.core.windows.net/transparencia/RAMO 23/4TO TRIMESTRE 2024/Contrato No. CO-PA-HIDRCTERR-023-2024 OBRA OPM58_redacted.pdf"
            },
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCTERR-023-2024_OBRA_OPM58_redacted.pdf"
            }
        },
        {
            proyecto: "OPM59",
            obra: "REHABILITACION DE CALLE A BASE DE CONCRETO ASFALTICO EN CALIENTE (UBICACIÓN ENTRADA AL BACHILLER), EN LA RANCHERÍA POTRERITOS DEL MUNICIPIO DE PARAISO; TABASCO. (MARITIMA 2024)",
            localidad: "270140026. RA. POTRERITOS",
            contrato: "CO-PA-HIDRCMAR-024-2024",
            2024: {
                4: "https://gobparaiso.blob.core.windows.net/transparencia/RAMO 23/4TO TRIMESTRE 2024/Contrato No. CO-PA-HIDRCMAR-024-2024 OBRA OPM59_redacted.pdf"
            },
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCMAR-024-2024_OBRA_OPM59_redacted.pdf"
            }
        },


    ];

    // const data = [
    //     {
    //         archivoFisico: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_POSTECITO.pdf"
    //     },
    //     {
    //         archivoFisico: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_RECEPCION_FISICA_LOS_GOMEZ.pdf",
    //     },
    //     {
    //         archivoFisico: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_POTRERITO.pdf",
    //     },
    //     {
    //         archivoFisico: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_SAN_FRANCISCO.pdf",
    //     },
    // ]
    const columns: ColumnsType<any> = [
        {
            title: 'Proyecto No.',
            dataIndex: 'proyecto',
            key: 'proyecto',

        },
        {
            title: 'Obra',
            dataIndex: 'obra',
            key: 'obra',
            width: "400px",
        },
        {
            title: 'Localidad',
            dataIndex: 'localidad',
            key: 'localidad',

        },
        {
            title: 'Contrato',
            dataIndex: 'contrato',
            key: 'contrato',

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
