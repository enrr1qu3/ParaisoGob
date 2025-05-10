import { Button, Table } from "antd";
import { FilePdfOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
export const TablaInfoContable = () => {
    const dataSource = [
        {
            name: "ESTADO DE ACTIVIDADES",
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/INFORMACION CONTABLE/ESTADO DE ACTIVIDADES.pdf"
            }
        },
        {
            name: "ESTADO DE SITUACION FINANCIERA"
        },
        {
            name: "ESTADO DE VARIACION DE LA HACIENDA PUBLICA"
        },
        {
            name: "ESTADO DE CAMBIOS EN LA SITUACION FINANCIERA"
        },
        {
            name: "INFORMES SOBRE PASIVOS CONTINGENTES"
        },
        {
            name: "NOTAS A LOS ESTADOS FINANCIEROS"
        },
        {
            name: "ESTADO ANALITICO DEL ACTIVO"
        },
        {
            name: "ESTADO ANALITICO DE LA DEUDA Y OTROS PASIVOS."
        },
    ]
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
        // {
        //     title: 'Obra',
        //     dataIndex: 'obra',
        //     key: 'obra',
        //     width: "400px",
        // },
        // {
        //     title: 'Localidad',
        //     dataIndex: 'localidad',
        //     key: 'localidad',
        //     width: "300px",
        // },
        // {
        //     title: 'Contrato',
        //     dataIndex: 'contrato',
        //     key: 'contrato',

        // },
        // {
        //     title: 'Archivo',
        //     key: 'archivo',
        //     dataIndex: 'archivo',
        //     width: "2%",
        //     render: (e: any) => (

        //         (e)
        //             ? < Button
        //                 icon={< FilePdfOutlined />}
        //                 href={e}
        //                 target="_blank"
        //             >
        //                 archivo
        //             </ Button>
        //             : <></>
        //     ),
        // },
        // {
        //     title: 'Actas de entrega',
        //     key: 'archivoFisico',
        //     dataIndex: 'archivoFisico',
        //     width: "2%",
        //     render: (e: any) => (

        //         (e)
        //             ? < Button
        //                 icon={< FilePdfOutlined />}
        //                 href={e}
        //                 target="_blank"
        //             >
        //                 Acta de entrega
        //             </ Button>
        //             : <></>
        //     ),
        // },
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
