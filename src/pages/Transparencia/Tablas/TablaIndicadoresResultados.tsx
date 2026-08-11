import { Button, Table } from "antd";
import { FileExcelOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface DocFile {
  url: string;
  name?: string;
}

interface TrimestresAnio {
  [trimestre: number]: DocFile[];
}

interface IndicadorResultado {
  name: string;
  2024?: TrimestresAnio;
  2025?: TrimestresAnio;
  2026?: TrimestresAnio;
}

const getOfficeViewerUrl = (url: string) =>
  `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(url)}`;

const renderFileButtons = (docs: DocFile[] | undefined) => (
  <>
    {docs?.map((doc, index) => (
      <Button
        key={index}
        icon={<FileExcelOutlined />}
        href={getOfficeViewerUrl(doc.url)}
        target="_blank"
      />
    ))}
  </>
);

export const TablaIndicadoresResultados = () => {
  const dataSource: IndicadorResultado[] = [
    {
      name: "ADMINISTRACIÓN",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/ADMINISTRACION.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_ADMINISTRACION_2T_2026%20(1).xlsx" }],
      },
    },
    {
      name: "ASUNTOS JURÍDICOS",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/ASUNTOS%20JUR%C3%8DDICOS.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_ASUNTOS%20JURIDICOS_2T_2026.xlsx" }],
      },
    },
    {
      name: "ATENCIÓN CIUDADANA",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/ATENCION%20CIUDADANA.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_ATENCION%20CIUDADANA_2T_2026.xlsx" }],
      },
    },
    {
      name: "ATENCIÓN A LAS MUJERES",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/ATENCI%C3%93N%20A%20LAS%20MUJERES.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_ATENCION%20A%20LAS%20MUJERES_2T_2026.xlsx" }],
      },
    },
    {
      name: "CATASTRO",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/CATASTRO.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2%20CATASTRO_2T_2026.xlsx" }],
      },
    },
    {
      name: "COMUNICACIÓN SOCIAL",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/COMUNICACI%C3%93N%20SOCIAL.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_COMUNICACION%20SOCIAL_2T_2026.xlsx" }],
      },
    },
    {
      name: "CONTRALORÍA",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/CONTRALOR%C3%8DA.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_CONTRALORIA_2T_2026.xlsx" }],
      },
    },
    {
      name: "COORDINACIÓN DE SALUD",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/COORDINACI%C3%93N%20DE%20SALUD.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_COORD%20DE%20SALUD_2T_2026.xlsx" }],
      },
    },
    {
      name: "DECUR",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/DECUR.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_DECUR_2T_2026.xlsx" }],
      },
    },
    {
      name: "DESARROLLO",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/DESARROLLO.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_DESARROLLO_2T_2026.xlsx" }],
      },
    },
    {
      name: "DIF",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/DIF.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_DIF_2T_2026.xlsx" }],
      },
    },
    {
      name: "FINANZAS",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/FINANZAS.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2%20FINANZAS_2T_2026.xlsx" }],
      },
    },
    {
      name: "FOMENTO ECONÓMICO",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/FOMENTO%20ECON%C3%93MICO.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_FOMENTO%20ECONOMICO_2T_2026.xlsx" }],
      },
    },
    {
      name: "MEJORA REGULATORIA",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/MEJORA%20REGULATORIA.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_MEJORA%20REGULATORIA_2T_2026.xlsx" }],
      },
    },
    {
      name: "OBRAS PÚBLICAS",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/OBRAS%20P%C3%9ABLICAS.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_OBRAS%20PUBLICAS_2T_2026.xlsx" }],
      },
    },
    {
      name: "PROGRAMACIÓN",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/PROGRAMACI%C3%93N.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_PROGRAMACION_2T_2026.xlsx" }],
      },
    },
    {
      name: "PROTECCIÓN AMBIENTAL",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/PROTECCI%C3%93N%20AMBIENTAL.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_PROTECCION%20AMBIENTAL_1T_2026.xlsx" }],
      },
    },
    {
      name: "PROTECCIÓN CIVIL",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/PROTECCI%C3%93N%20CIVIL.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_PROTECCION%20CIVIL_2T_2026.xlsx" }],
      },
    },
    {
      name: "SECRETARÍA DEL AYUNTAMIENTO",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/SECRETAR%C3%8DA%20DEL%20AYUNTAMIENTO.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_SECRETARIA%20DEL%20AYUNTAMIENTO_2T_2026.xlsx" }],
      },
    },
    {
      name: "SEGURIDAD PÚBLICA",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/SEGURIDAD%20P%C3%9ABLICA.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_SEGURIDAD%20PUBLICA_2T_2026.xlsx" }],
      },
    },
    {
      name: "TECNOLOGÍA DE LA INFORMACIÓN",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/TECNOLOG%C3%8DA%20DE%20LA%20INFORMACI%C3%93N.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_TECNOLOGIA%20DE%20LA%20INFORMACION_2T_2026.xlsx" }],
      },
    },
    {
      name: "TRÁNSITO MUNICIPAL",
      2026: {
        1: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-1-2026/Indicadores%20de%20Resultado/TRANSITO%20MUNICIPAL.xlsx" }],
        2: [{ url: "https://gobparaiso.blob.core.windows.net/transparencia/SEVAC/TRIMESTRE-2-2026/Indicadores%20de%20resultados/LGT_65_V.2_MUNICIPAL%20DE%20TRANSITO_2T_2026.xlsx" }],
      },
    },
  ];

  const trimestreColumn = (anio: number, trimestre: number) => ({
    title: `${trimestre}`,
    dataIndex: [anio, trimestre],
    width: "10px",
    align: "center" as const,
    render: (docs: DocFile[] | undefined) => renderFileButtons(docs),
  });

  const columns: ColumnsType<IndicadorResultado> = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      width: 850,
    },
    {
      title: "Trimestres",
      align: "center",
      children: [
        {
          title: "2026",
          children: [1, 2, 3, 4].map((t) => trimestreColumn(2026, t)),
        },
      ],
    },
  ];

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
