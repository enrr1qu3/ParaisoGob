import { Button, Table } from "antd";
import { FilePdfOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

export const TablaInfoLGCGTrimestral = () => {
    const dataSource = [
        {
            name: "INFORMACIÓN DE LOS MONTOS PLENAMENTE IDENTIFICADOS POR ORDEN DE GOBIERNO, DE LOS PROGRAMAS EN QUE CONCURRAN RECURSOS FEDERALES",
            2024: {
                4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-4-2024/4T24 formato de programas con recursos concurrente.pdf"
            },
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-1/formato de programas con recursos concurrente.pdf"
            }
        },
        {
            name: "INFORMACIÓN TRIMESTRAL SOBRE LA APLICACIÓN DE LOS RECURSOS FEDERALES PARA EL FONDO DE APORTACIONES PARA LA INFRAESTRUCTURA SOCIAL (FAIS) (ARTÍCULO 33, APARTADO B, FRACCIÓN II, INCISO A) Y C) DE LA LCF)",
            2024: {
                4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-4-2024/FAIS4TOTRIM.pdf"
            },
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-1/CONACFIII1ERTRIM2025.pdf"
            }
        },
        {
            name: "INFORMACIÓN DE APLICACIÓN DE RECURSOS FEDERALES DEL FONDO DE APORTACIONES PARA EL FORTALECIMIENTO DE LOS MUNICIPIOS Y DEMARCACIONES TERRITORIALES DEL DISTRITO FEDERAL (FORTAMUN)",
            2024: {
                4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-4-2024/FORTAMUN4TOTRIM.pdf"
            },
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION%20PROGRAMATICA/INFORMACION%20FINANCIERA%20LGCG/TRIMESTRE-1/CONAC%20FONDOIV1ERTRIM2025.pdf"
            }
        },
        {
            name: "INFORMACIÓN RELATIVA A LAS OBLIGACIONES QUE SE PAGAN O GARANTIZAN CON RECURSOS DE FONDOS FEDERALES",
            2024: {
                4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-4-2024/4T24 formato de obligaciones pagadas.pdf"
            },
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-1/formato de obligaciones pagadas.pdf"
            }
        },
        {
            name: "INFORMACIÓN TRIMESTRAL DEL EJERCICIO Y DESTINO DE GASTO FEDERALIZADO Y REINTEGROS",
            2024: {
                4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION%20PROGRAMATICA/INFORMACION%20FINANCIERA%20LGCG/TRIMESTRE-4-2024/4T24%20clasificacion%20del%20ejercicio%20y%20destino%20de%20gasto.pdf"
            },
            2025: {
                1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-1/clasificacion del ejercicio y destino de gasto.pdf"
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