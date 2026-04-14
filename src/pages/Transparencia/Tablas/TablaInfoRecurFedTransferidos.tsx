import { Button, Table, Tooltip } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

export const TablaInfoRecurFedTransferidos = () => {
  const dataSource = [
    {
      name: "APLICACIÓN DE LOS RECURSOS DEL FORTAMUN",
      2024: {
        4: [
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RECURSOS FEDERALES TRANSFERIDOS/TRIMESTRE-4-2024/FORTAMUN4TOTRIM.pdf",
          },
        ],
      },
      2025: {
        1: [
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RECURSOS FEDERALES TRANSFERIDOS/TRIMESTRE-1/CONAC FONDOIV1ERTRIM2025.pdf",
          },
        ],
        2: [
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/CONAC2DOTRIM2025FAIS.pdf",
          },
        ],
        3: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/CONAC FORTAMUN TERCER TRIMESTRE.pdf"
          }
        ],
        4: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/CONACFIV4TOTRIM2025.pdf"
          }
        ]
      },
    },
    {
      name: "MONTOS, OBRAS Y ACCIONES A REALIZAR CON EL FAIS",
      2024: {
        4: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RECURSOS FEDERALES TRANSFERIDOS/TRIMESTRE-4-2024/FAIS4TOTRIM.pdf",
          }
        ],
      },
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RECURSOS FEDERALES TRANSFERIDOS/TRIMESTRE-1/CONACFIII1ERTRIM2025.pdf",
          }
        ],
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/CONAC2DOTRIM2025FAIS.pdf",
          }
        ],
        3: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/CONAC FAIS TERCER TRIMESTRE.pdf"
          }
        ],
        4: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/CONACFIII4TOTRIM2025.pdf"
          }
        ]
      },
    },
    {
      name: "SRFT",
      2024: {
        4: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-4-2024/SRFT 4TO TRIM 2024 TRANSPARENCIA-1.pdf",
          }
        ],
      },
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2025/SRFT 1er Trimestre  2025.pdf",
          },
        ],
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/2DO_TRIMESTRE_2025/SRFT 2do. TRIM. 2025.pdf",
          }
        ],
        3: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/SRFT_3ER.T.2025.pdf",
          }
        ],
        4: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/SSRF-2024/SRFT%204to.TRIM.%202025.pdf",
          }
        ],
      },
    },
    {
      name: "CIERRE DEFINITIVO 2024",
      2024: {
        4: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/SSRF-2024/Cierre definitivo 2024.pdf",
          }
        ],
      },
    },
    {
      name: "KA351  COL. QUINTIN ARAUZ VASCONCELOS ELECTRIFICACION",
      // 2024: {
      //     4: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/KA351_CONTRATO_COL. QUINTIN ARAUZ_VASCONCELOS_ELECTRIFICACION.pdf"
      // },
      2025: {
        1: [
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/KA351_CONTRATO_COL. QUINTIN ARAUZ_VASCONCELOS_ELECTRIFICACION.pdf",
            name: "Contrato",
          },
           {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/KA351_COL. QUINTIN ARAUZ_VASCONCELOS_ELECTRIFICACION.pdf",
            name: "Acta Entrega",
          }
        ],
      },
    },
    {
      name:
        "OP351 ACTA ENTREGA RA. LAS FLORES 3RA. SEC EL CERRO KINDER,TELE,TORRE ASFALTO",
      2025: {
        1: [
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP351_CONTRATO_RA. LAS FLORES 3RA. SEC EL CERRO_KINDER,TELE,TORRE_ASFALTO_redacted.pdf",
            name: "Contrato",
          },
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP351_ACTA ENTREGA_RA. LAS FLORES 3RA. SEC EL CERRO_KINDER,TELE,TORRE_ASFALTO.pdf",
            name: "Acta Entrega",
          },
        ],
      },
    },
    {
      name:
        "OP352 ACTA ENTREGA RA. LAS FLORES 3RA. SEC EL CERRO DGUEZ Y CASTELLANOS REVESTIMIENTO",
      2025: {
        1: [
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP352_CONTRATO_RA. LAS FLORES 3RA. SEC EL CERRO_DGUEZ Y CASTELLANOS_REVESTIMIENTO_redacted.pdf",
            name: "Contrato",
          },
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP352_ACTA ENTREGA_RA. LAS FLORES 3RA. SEC EL CERRO_DGUEZ Y CASTELLANOS_REVESTIMIENTO.pdf",
            name: "Acta Entrega",
          },
        ],
      },
    },
    {
      name:
        "OP353 ACTA ENTREGA RA. LAS FLORES 3RA. SEC EL CERRO LOS OLAN REVESTIMIENTO",
      2025: {
        1: [
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP353_CONTRATO_RA. LAS FLORES 3RA. SEC EL CERRO_LOS OLAN_REVESTIMIENTO_redacted.pdf",
            name: "Contrato",
          },
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP353_ACTA ENTREGA_RA. LAS FLORES 3RA. SEC EL CERRO_LOS OLAN_REVESTIMIENTO.pdf",
            name: "Acta Entrega",
          },
        ],
      },
    },
    {
      name: "OP354 ACTA ENTREGA COL. QUINTIN ARAUZ LAS PALMAS ASFALTO",
      2024: {
        4: [
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP354_ACTA ENTREGA_COL. QUINTIN ARAUZ_LAS PALMAS_ASFALTO.pdf",
            name: "Acta Entrega",
          },
        ],
      },
      // 2025: {
      //     1: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP353_CONTRATO_RA. LAS FLORES 3RA. SEC EL CERRO_LOS OLAN_REVESTIMIENTO_redacted.pdf"
      // }
    },
    {
      name: "OP355 ACTA ENTREGA COL. QUINTIN ARAUZ MERCED REAL ASFALTO",
      2025: {
        1: [
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP355_CONTRATO_COL. QUINTIN ARAUZ_MERCED REAL_ASFALTO_redacted.pdf",
            name: "Contrato",
          },
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP355_ACTA ENTREGA_COL. QUINTIN ARAUZ_MERCED REAL_ASFALTO.pdf",
            name: "Acta Entrega",
          },
        ],
      },
    },
    {
      name: "OP356 ACTA ETREGA RA. MONTE ADENTRO GUERO YAIR ASFALTO",
      2024: {
        4: [
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP356_ACTA ETREGA_RA. MONTE ADENTRO_GUERO YAIR_ASFALTO.pdf",
            name: "Acta Entrega",
          },
        ],
      },
      // 2025: {
      //     1: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP355_CONTRATO_COL. QUINTIN ARAUZ_MERCED REAL_ASFALTO_redacted.pdf"
      // }
    },
    {
      name:
        "OP357 ACTA ENTREGA COL. CHILTEPEC SEC PENJAMO PLAYA BRUJA REVESTIMIENTO",
      2025: {
        1: [
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP357_CONTRATO_COL. CHILTEPEC SEC PENJAMO_ PLAYA BRUJA_REVESTIMIENTO_redacted.pdf",
            name: "Contrato",
          },
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP357_ACTA ENTREGA_COL. CHILTEPEC SEC PENJAMO_ PLAYA BRUJA_REVESTIMIENTO.pdf",
            name: "Acta Entrega",
          },
        ],
      },
    },
    {
      name: "OP358 ACTA ENTREGA RA. NICOLAS BRAVO 3RA. SEC AGUA POTABLE",
      2025: {
        1: [
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP358_CONTRATO_ RA. NICOLAS BRAVO 3RA. SEC_AGUA POTABLE.pdf",
            name: "Contrato",
          },
          {
            url:
              "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/OP358_ACTA ENTREGA_ RA. NICOLAS BRAVO 3RA. SEC_AGUA POTABLE.pdf",
            name: "Acta Entrega",
          },
        ],
      },
    },
  ];

  const columns: ColumnsType<any> = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      // width: "40%"
      width: 850,
    },
    {
      title: "Trimestres",
      align: "center",
      children: [
        {
          title: "2024",
          children: [

            {
              title: "4",
              dataIndex: [2024, 4],
              width: "10px",
              render: (e: any) => (
                <>
                  {e?.length >= 1 && (
                    <Tooltip title={e[0].name}>
                      <Button
                        icon={<FilePdfOutlined />}
                        href={e[0].url}
                        target="_blank"
                      />
                    </Tooltip>
                  )}
                  {e?.length === 2 && (
                    <Tooltip title={e[1].name}>
                      <Button
                        icon={<FilePdfOutlined />}
                        href={e[1].url}
                        target="_blank"
                      />
                    </Tooltip>
                  )}
                </>
              ),
              align: "center",
            },
          ],
        },
        {
          title: "2025",
          children: [
            {
              title: "1",
              dataIndex: [2025, 1],
              width: "10px",
              render: (e: any) => (
                <>
                  {e?.length >= 1 && (
                    <Tooltip title={e[0].name}>
                      <Button
                        icon={<FilePdfOutlined />}
                        href={e[0].url}
                        target="_blank"
                      />
                    </Tooltip>
                  )}
                  {e?.length === 2 && (
                    <Tooltip title={e[1].name}>
                      <Button
                        icon={<FilePdfOutlined />}
                        href={e[1].url}
                        target="_blank"
                      />
                    </Tooltip>
                  )}
                </>
              ),
              align: "center",
            },
            {
              title: "2",
              dataIndex: [2025, 2],
              width: "10px",
              render: (e: any) => (
                <>
                  {e?.length >= 1 && (
                    <Tooltip title={e[0].name}>
                      <Button
                        icon={<FilePdfOutlined />}
                        href={e[0].url}
                        target="_blank"
                      />
                    </Tooltip>
                  )}
                  {e?.length === 2 && (
                    <Tooltip title={e[1].name}>
                      <Button
                        icon={<FilePdfOutlined />}
                        href={e[1].url}
                        target="_blank"
                      />
                    </Tooltip>
                  )}
                </>
              ),
              align: "center",
            },
            {
              title: "3",
              dataIndex: [2025, 3],
              width: "10px",
              align: "center",
              render: (e: any) => (
                <>
                  {e?.length >= 1 && (
                    <Tooltip title={e[0].name}>
                      <Button
                        icon={<FilePdfOutlined />}
                        href={e[0].url}
                        target="_blank"
                      />
                    </Tooltip>
                  )}
                  {e?.length === 2 && (
                    <Tooltip title={e[1].name}>
                      <Button
                        icon={<FilePdfOutlined />}
                        href={e[1].url}
                        target="_blank"
                      />
                    </Tooltip>
                  )}
                </>
              ),
            },
            {
              title: "4",
               dataIndex: [2025, 4],
              width: "10px",
              align: "center",
              render: (e: any) => (
                <>
                  {e?.length >= 1 && (
                    <Tooltip title={e[0].name}>
                      <Button
                        icon={<FilePdfOutlined />}
                        href={e[0].url}
                        target="_blank"
                      />
                    </Tooltip>
                  )}
                  {e?.length === 2 && (
                    <Tooltip title={e[1].name}>
                      <Button
                        icon={<FilePdfOutlined />}
                        href={e[1].url}
                        target="_blank"
                      />
                    </Tooltip>
                  )}
                </>
              ),
            },
          ],
        },
      ],
    },
  ];
  // typeof e === 'string' ? (
  //     <Button
  //         icon={<FilePdfOutlined />}
  //         href={e}
  //         target="_blank"
  //     />
  // ) : (
  //     e?.length >= 0 && (
  //         <Button
  //             icon={<FilePdfOutlined />}
  //             href={e[1] || e[0]}
  //         />
  //     )
  // )
  return (
    <Table
      bordered
      size="small"
      columns={columns}
      dataSource={dataSource}
      rowKey={(record) => record.name}
      scroll={{ x: "max-content" }}
    />
  );
};
