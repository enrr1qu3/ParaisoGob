import { Button, Col, Row, Table, Tooltip } from "antd";
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
            proyecto: "KAM54",
            obra: "MEJORA DE RED DE DISTRIBUCIÓN DE ENERGÍA ELÉCTRICA EN MEDIA Y BAJA TENSION (ENTRADA MELIDA DOMÍNGUEZ), (FRENTE AL TALLER EL COFRE), Y (ENTRADA EMÉRITA), EN EL EJIDO CHILTEPEC SECCIÓN TANQUE, DEL MUNICIPIO DE PARAISO, TABASCO",
            localidad: "270140061. EJ. CHILTEPEC. SECCION TANQUE",
            contrato: "CO-PA-R23MAR-011-2025",
            2025: {
                2: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/CONTRATO KAM54_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/KAM54.-  ACTA DE ENTREGA -  RECEPCIÓN.pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "KAM55",
            obra: "MEJORA DE RED DE DISTRIBUCION DE ENERGIA  ELECTRICA EN MEDIA Y BAJA TENSION EN LA COLONIA QUINTIN ARAUZ DEL MUNICIPIO DE PARAISO, TABASCO.",
            localidad: "270140027.  COL. QUINTIN ARAUZ",
            contrato: "CO-PA-R23MAR-012-2025",
            2025: {
                2: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/CONTRATO KAM55_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/KAM55.- ACTA DE ENTREGA -  RECEPCIÓN.pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "KAM56",
            obra: "MEJORA DE RED DE DISTRIBUCION DE ENERGIA ELECTRICA EN MEDIA Y BAJA TENSION EN EJIDO CHILTEPEC (SECCION BANCO), DEL MUNICIPIO DE PARAISO, TABASCO",
            localidad: "270140046. EJ. CHILTEPEC (SECCION BANCO).",
            contrato: "CO-PAR-R23TER-013-2025",
            2025: {
                2: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/CONTRATO KAM56_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/KAM56.- ACTA DE ENTREGA -  RECEPCIÓN.pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "KAM57",
            obra: "MEJORA DE RED DE DISTRIBUCION DE ENERGIA ELECTRICA EN MEDIA Y BAJA TENSION EN LA RANCHERIA LAS FLORES PRIMERA SECCION  (UBIC EN ENTRADA NINFA TIQUET ), DEL MUNICIPIO DE PARAISO, TABASCO.",
            localidad: "270140009 RIA. LAS FLORES 1A SECCION",
            contrato: "CO-PAR-R23TER-043-2025",
            2025: {
                2: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/CONTRATO KAM57_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/KAM57,- ACTA DE ENTREGA RECEPCIÓN.pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "KAM58",
            obra: "MEJORA DE RED DE DISTRIBUCION DE ENERGIA ELECTRICA EN  MEDIA Y BAJA TENSION EN CALLE ALDEMIR MAGAÑA Y CALLE FRANCISCO VILLA EN EL EJIDO ORIENTE (SAN CAYETANO), DEL MUNICIPIO DE PARAISO, TABASCO.",
            localidad: "270140024 EJ ORIENTE (SAN CAYETANO)",
            contrato: "CO-PA-R23TER-075-2025",
            2025: {
                4: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/recursos-federales-transferidos_2026-01-15_2140/CTTO. FIRMADO KAM58_redacted.pdf",
                        name: "Contrato"
                    }
                ]
            },
            2026: {
                1: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/KAM58.pdf",
                        name: "Acta de entrega"
                    },
                ]
            }
        },
        {
            proyecto: "OPM01",
            obra: 'Rehabilitación de Red de Drenaje Sanitario en diversas calles del Ejido Oriente, (San Cayetano), del Municipio de Paraiso, Tabasco.',
            localidad: "270140024.  Ej,. Oriente San Cayetano.",
            contrato: "CO-PA-R23MAR-003-2026",
            2026: {
                1: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/recursos-federales-transferidos_2026-01-15_2140/CONTRATO%20FIRMADO%20OPM01.pdf",
                        name: "Contrato"
                    },
                ]
            }
        },
        {
            proyecto: "OPM55",
            obra: "REHABILITACION DE CARCAMO DE AGUAS PLUVIALES (UBIC CALLE 2 DE ABRIL ), EN LA CIUDAD DE PARAISO, DEL MUNICIPIO DE PARAISO, TABASCO",
            localidad: "270140001.  CD DE PARAISO",
            contrato: "CO-PA-R23TER-020-2025",
            2025: {
                2: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/CONTRATO OPM55_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/OPM55,- ACTA ENTREGA RECEPCIÓN.pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "OPM56",
            obra: "REHABILITACION DE CALLE A BASE DE GRAVA DE REVESTIMIENTO DE 1 1/2 A FINOS, (UBICACIÓN ENTRADA LOS GÓMEZ) EN LA RANCHERIA LAS FLORES PRIMERA SECCIÓN, DEL MUNICIPIO DE PARAISO; TABASCO. (MARITIMA 2023)",
            localidad: "270140009. RA. LAS FLORES 1RA. SECCION",
            contrato: "CO-PA-HIDRCMAR-021-2024",
            2024: {
                4: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RAMO 23/4TO TRIMESTRE 2024/Contrato No. CO-PA-HIDRCMAR-021-2024 OBRA OPM56_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_RECEPCION_FISICA_LOS_GOMEZ.pdf",
                        name: "Acta de entrega"
                    }
                ]
            },
            2025: {
                1: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCMAR-021-2024_OBRA_OPM56_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_RECEPCION_FISICA_LOS_GOMEZ.pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "OPM56",
            obra: "REHABILITACION DE CARCAMO DE AGUAS PLUVIALES (UBIC CALLE GALEANA), EN LA CIUDAD DE PARAISO, DEL MUNICIPIO DE PARAISO, TABASCO",
            localidad: "270140001. CIUDAD DE PARAISO",
            contrato: "CO-PA-R23TER-021-2025",
            2025: {
                2: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/CONTRATO OPM56_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/OPM56,- ACTA ENTREGA RECEPCIÓN.pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "OPM57",
            obra: "REHABILITACION DE RED DE AGUA ENTUBADA EN CALLE EL POSTECITO, EN LA RANCHERIA ORIENTE SEGUNDA SECCIÓN (PALMA HUACA), DEL MUNICIPIO DE PARAISO; TABASCO. (TERRESTRE 2023)",
            localidad: "270140049. RA. ORIENTE 2DA. SECCION . (PALMA HUACA).",
            contrato: "CO-PA-HIDRCTERR-022-2024",
            2024: {
                4: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RAMO 23/4TO TRIMESTRE 2024/Contrato No. CO-PA-HIDRCTERR-022-2024 OBRA OPM57_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_POSTECITO.pdf",
                        name: "Acta de entrega"
                    }
                ]
            },
            2025: {
                1: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCTERR-022-2024_OBRA_OPM57_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_POSTECITO.pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "OPM57",
            obra: "REHABILITACION DE CARCAMO DE BOMBEO DE AGUAS NEGRAS, (UBIC COLONIA LOS COCOS ), EN LA CIUDAD DE PARAISO, DEL MUNICIPIO DE PARAISO, TABASCO",
            localidad: "270140001. CIUDAD DE PARAISO",
            contrato: "CO-PAR-R23MAR-042-2025",
            2025: {
                2: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/CONTRATO OPM57_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/OPM57,- ACTA ENTREGA RECEPCIÓN .pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "OPM58",
            obra: "REHABILITACION DE CAMINO A BASE DE CONCRETO ASFALTICO EN CALIENTE EN EL EJIDO OCCIDENTE SAN FRANCISCO, DEL MUNICIPIO DE PARAISO; TABASCO. (TERRESTRE 2024)",
            localidad: "270140050. EJ. OCCIDENTE (SAN FRANCISCO).",
            contrato: "CO-PA-HIDRCTERR-023-2024",
            2024: {
                4: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RAMO 23/4TO TRIMESTRE 2024/Contrato No. CO-PA-HIDRCTERR-023-2024 OBRA OPM58_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_SAN_FRANCISCO.pdf",
                        name: "Acta de entrega"
                    }
                ]
            },
            2025: {
                1: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCTERR-023-2024_OBRA_OPM58_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_SAN_FRANCISCO.pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "OPM58",
            obra: "REHABILITACION DE AGUA ENTUBADA EN DIVERSAS ENTRADAS DEL EJIDO LIBERTAD  PRIMERA SECCION, EL CHIVERO DEL MUNICIPIO DE PARAISO, TABASCO",
            localidad: "270140014. EJ. LIBERTAD 1A SECCION (EL CHIVERO).",
            contrato: "CO-PA-R23TER-060-2025",
            2025: {
                2: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/CONTRATO OPM58_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/OPM58,- ACTA DE ENTEGRA  RECEPCION.pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "OPM59",
            obra: "REHABILITACION DE CALLE A BASE DE CONCRETO ASFALTICO EN CALIENTE (UBICACIÓN ENTRADA AL BACHILLER), EN LA RANCHERÍA POTRERITOS DEL MUNICIPIO DE PARAISO; TABASCO. (MARITIMA 2024)",
            localidad: "270140026. RA. POTRERITOS",
            contrato: "CO-PA-HIDRCMAR-024-2024",
            2024: {
                4: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RAMO 23/4TO TRIMESTRE 2024/Contrato No. CO-PA-HIDRCMAR-024-2024 OBRA OPM59_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_POTRERITO.pdf",
                        name: "Acta de entrega"
                    }
                ]
            },
            2025: {
                1: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCMAR-024-2024_OBRA_OPM59_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_POTRERITO.pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "OPM59",
            obra: 'REHABILITACION A BASE DE GRAVA DE REVESTIMIENTO DE 1 1/2" A FINOS EN ENTRADA ALFONSO BACA SEVILLA Y ENTRADA LOS ANIMALONES EN LA COLONIA HUESO DE PUERCO, DEL MUNICIPIO DE PARAISO, TABASCO',
            localidad: "270140059. COL. HUESO DE PUERCO. (COL. QUINTIN ARAUZ)",
            contrato: "CO-PA-R23TER-061-2025",
            2025: {
                2: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/CONTRATO OPM59_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/OPM59,-  ACTA ENTREGA RECEPCIÓN.pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "OPM60",
            obra: 'REHABILITACIÓN DE ALUMBRADO PÚBLICO EN LA COLONIA NUEVO TORNO LARGO, DEL MUNICIPIO DE PARAÍSO, TABASCO.',
            localidad: "270140028.- COL. NUEVO TORNO LARGO",
            contrato: "R23mar-068-2025",
            2025: {
                4: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/3ER_TRIMESTRE_2025/CONTTATO_FIRMADO_OPM60.pdf",
                        name: "Contrato"
                    },
                ]
            }
        },
        {
            proyecto: "OPM61",
            obra: 'REHABILITACIÓN A BASE DE GRAVA DE REVESTIMIENTO DE 1 1/2" A FINOS EN (UBIC. ENTRADA 1, ENTRADA 2 Y ENTRADA EL ALUCHERO) DEL EJIDO PUERTO CEIBA (CARRIZAL) DEL MUNICIPIO DE PARAISO; TABASCO',
            localidad: "270140005.- EJ. PUERTO CEIBA (CARRIZAL)",
            contrato: "CO-PA-R23MAR-072-2025",
            2025: {
                4: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/recursos-federales-transferidos_2026-01-15_2140/CTTO FIRMADO OPM61_redacted.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/recursos-federales-transferidos_2026-01-15_2140/OPM61 ACTA DE ENTREGA.pdf",
                        name: "Acta de entrega"
                    },
                ]
            }
        },
        {
            proyecto: "OPM62",
            obra: 'REHABILITACION DE ALUMBRADO PUBLICO EN EL EJIDO PALESTINA DEL MUNICIPIO DE PARAISO, TABASCO.',
            localidad: "270140056 -  EJIDO PALESTINA",
            contrato: "CO-PA- R23MAR-073-2025",
            2025: {
                4: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/recursos-federales-transferidos_2026-01-15_2140/CCTO. FIRMADO OPM62_redacted.pdf",
                        name: "Contrato"
                    },
                ]
            },
            2026: {
                1: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OPM62.pdf",
                        name: "Acta de entrega"
                    },
                ]
            }
        },
        {
            proyecto: "OPM63",
            obra: 'REHABILITACION DE ALUMBRADO PUBLICO PARA INHIBIR LOS DELITOS EN LA RANCHERIA NICOLAS BRAVO CUARTA SECCION (TILAPA) DEL MUNICIPÍO DE PARAISO, TABASCO. ',
            localidad: "270140037 RIA NICOLAS BRAVO 4TA SECCION (TILAPA)",
            contrato: "CO-PA- R23MAR-074-2025",
            2025: {
                4: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/recursos-federales-transferidos_2026-01-15_2140/CTTO. FIRMADO OPM63_redacted.pdf",
                        name: "Contrato"
                    },
                ]
            },
            2026: {
                1: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OPM63.pdf",
                        name: "Acta de entrega"
                    },
                ]
            }
        },
        {
            proyecto: "OPM64",
            obra: 'REHABILITACION DE RED DE AGUA ENTUBADA EN LA CALLE PROLONGACIÓN JUAN BAUTISTA DEL EJIDO PUERTO CEIBA (CARRIZAL), DEL MUNICIPIO DE PARAÍSO, TABASCO.',
            localidad: "270140005.- EJIDO PUERTO CEIBA CARRIZAL.",
            contrato: "CO-PA-R223TER-001-2026",
            2026: {
                1: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OPM64.pdf",
                        name: "Acta de entrega"
                    },
                ]
            }
        },
        {
            proyecto: "OPM65",
            obra: 'REHABILITACION A BASE DE GRAVA DE REVESTIMIENTO DE 1 1/2 FINOS EN LA CALLE PROLONGACION JUAN BAUTISTA DEL EJIDO PUERTO CEIBA (CARRIZAL), DEL MUNICIPIO DE PARAISO, TABASCO.',
            localidad: "270140005- EJIDO PUERTO CEIBA (CARRIZAL).",
            contrato: "CO-PA- R23MAR-002-2026.",
            2026: {
                1: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OPM65.pdf",
                        name: "Acta de entrega"
                    },
                ]
            }
        },
        {
            proyecto: "KAM 01",
            obra: 'En la Ranchería Nicolás Bravo, Tercera Sección (ubicada Entrada don Chuncho), del municipio de Paraíso, Tabasco. Marítima 2026).',
            localidad: "270140036.  RANCHERIA NICOLAS BRAVO 3RA SECCIÓN.",
            contrato: "CO-PA-R23MAR-033-2026",
            2026:{
                1: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Contto Firmado KAM01-2026.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Tercera%20Seccion/2026/Actas/97.%20KAM01%20ACTA%20DE%20ENTREGA%20-%20%20RECEPCI%C3%93N%20%20(2).pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "KAM 02",
            obra:"En la Ranchería Nicolás Bravo, Cuarta Sección (Tilapa), del municipio de Paraíso, Tabasco. Marítima 2026).",
            localidad:"270140037.  RIA. NICOLAS BRAVO 4TA SECCION (TILAPA).",
            contrato: "CO-PA-R23MAR-034-2026",
            2026:{
                1: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Contto Firmado KAM02-2026.pdf",
                        name: "Contrato"
                    },
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Tercera%20Seccion/2026/Actas/97.%20KAM02%20ACTA%20DE%20ENTREGA%20-%20%20RECEPCI%C3%93N.pdf",
                        name: "Acta de entrega"
                    }
                ]
            }
        },
        {
            proyecto: "OPM03",
            obra: "REHABILITACION A BASE DE CONCRETO HIDRAULICO EN LA CALLE CARMEN URUETA EN EL EJIDO ORIENTE SAN CAYETANO. PARAISO, TABASCO",
            localidad: "270140024. EJ. ORIENTE SAN CAYETANO.",
            contrato: "CO-PA-R23TERR-057-2026",
            2026:{
                1: [
                    {
                        url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Tercera%20Seccion/2026/Contrato/Contrato%20OPM03%20Firmado%20Baluarte.pdf",
                        name: "Contrato"
                    }
                ]
            }
        }
    ];
    const columns: ColumnsType<any> = [
        {
            title: 'Proyecto / Contrato',
            key: 'proyecto',
            render: (_: any, record: any) => (
                <>
                    <div><strong>{record.proyecto}</strong></div>
                    <div>{record.contrato}</div>
                </>
            ),
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

            title: 'Trimestres',
            align: 'center',
            children: [
                {
                    title: '2024',
                    children: [
                        {
                            title: '4',
                            dataIndex: [2024, 4],
                            width: "10px",
                            render: (e: any) => (
                                <>
                                    <Row gutter={[5, 5]}>
                                        <Col span={24}>
                                            {e?.length >= 1 && (
                                                <Tooltip title={e[0].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[0].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                        <Col span={24}>
                                            {e?.length === 2 && (
                                                <Tooltip title={e[1].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[1].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                    </Row>
                                </>
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
                                <>
                                    <Row gutter={[5, 5]}>
                                        <Col span={24}>
                                            {e?.length >= 1 && (
                                                <Tooltip title={e[0].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[0].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                        <Col span={24}>
                                            {e?.length === 2 && (
                                                <Tooltip title={e[1].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[1].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                    </Row>
                                </>
                            ),
                            align: 'center',
                        },
                        {
                            title: '2',
                            dataIndex: [2025, 2],
                            width: "10px",
                            render: (e: any) => (
                                <>
                                    <Row gutter={[5, 5]}>
                                        <Col span={24}>
                                            {e?.length >= 1 && (
                                                <Tooltip title={e[0].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[0].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                        <Col span={24}>
                                            {e?.length === 2 && (
                                                <Tooltip title={e[1].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[1].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                    </Row>
                                </>
                            ),
                            align: 'center',
                        },
                        {
                            title: '3',
                            align: 'center',
                        },
                        {
                            title: '4',
                            dataIndex: [2025, 4],
                            width: "10px",
                            render: (e: any) => (
                                <>
                                    <Row gutter={[5, 5]}>
                                        <Col span={24}>
                                            {e?.length >= 1 && (
                                                <Tooltip title={e[0].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[0].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                        <Col span={24}>
                                            {e?.length === 2 && (
                                                <Tooltip title={e[1].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[1].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                    </Row>
                                </>
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
                                <>
                                    <Row gutter={[5, 5]}>
                                        <Col span={24}>
                                            {e?.length >= 1 && (
                                                <Tooltip title={e[0].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[0].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                        <Col span={24}>
                                            {e?.length === 2 && (
                                                <Tooltip title={e[1].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[1].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                    </Row>
                                </>
                            ),
                            align: 'center',
                        },
                        {
                            title: '2',
                            dataIndex: [2026, 2],
                            width: "10px",
                            render: (e: any) => (
                                <>
                                    <Row gutter={[5, 5]}>
                                        <Col span={24}>
                                            {e?.length >= 1 && (
                                                <Tooltip title={e[0].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[0].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                        <Col span={24}>
                                            {e?.length === 2 && (
                                                <Tooltip title={e[1].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[1].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                    </Row>
                                </>
                            ),
                            align: 'center',
                        },
                        {
                            title: '3',
                            dataIndex: [2026, 3],
                            width: "10px",
                            render: (e: any) => (
                                <>
                                    <Row gutter={[5, 5]}>
                                        <Col span={24}>
                                            {e?.length >= 1 && (
                                                <Tooltip title={e[0].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[0].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                        <Col span={24}>
                                            {e?.length === 2 && (
                                                <Tooltip title={e[1].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[1].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                    </Row>
                                </>
                            ),
                            align: 'center',
                        },
                        {
                            title: '4',
                            dataIndex: [2026, 4],
                            width: "10px",
                            render: (e: any) => (
                                <>
                                    <Row gutter={[5, 5]}>
                                        <Col span={24}>
                                            {e?.length >= 1 && (
                                                <Tooltip title={e[0].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[0].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                        <Col span={24}>
                                            {e?.length === 2 && (
                                                <Tooltip title={e[1].name}>
                                                    <Button
                                                        icon={<FilePdfOutlined />}
                                                        href={e[1].url}
                                                        target="_blank"
                                                    />
                                                </Tooltip>
                                            )}
                                        </Col>
                                    </Row>
                                </>
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
            // title={() => <>Contratos y Actas de entrega</>}
            columns={columns}
            dataSource={dataSource}
            rowKey={(record) => record.name}
            scroll={{ x: 'max-content' }}

        />
    )
}