import { Button, Table } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

export const TablaInfoLGCGTrimestral = () => {
  const dataSource = [
    {
      name: "INFORMACIÓN DE LOS MONTOS PLENAMENTE IDENTIFICADOS POR ORDEN DE GOBIERNO, DE LOS PROGRAMAS EN QUE CONCURRAN RECURSOS FEDERALES",
      2024: {
        4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-4-2024/4T24 formato de programas con recursos concurrente.pdf",
      },
      2025: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-1/formato de programas con recursos concurrente.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/2DO_TRIM_2025/FORMATO DE PROGRAMAS CON RECURSOS CONCURRENTES POR ORDEN DE GOBIERNO DE ABRIL A JUNIO 2025.pdf",
        3: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/CON RECURSOS CONCURRENTES POR ORDEN DE GOBIERNO.pdf",
        4: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/FORMATO DE PROGRAMAS CON RECURSOS CONCURRENTE POR ORDEN DE GOBIERNO.pdf",
      },
      2026: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe%20Financiero%20LGCG/Trimestral/FORMATO%20DE%20PROGRAMAS%20CON%20RECURSOS%20CONCURRENTE%20POR%20ORDEN%20DE%20GOBIE.pdf",
      },
    },
    {
      name: "INFORMACIÓN TRIMESTRAL SOBRE LA APLICACIÓN DE LOS RECURSOS FEDERALES PARA EL FONDO DE APORTACIONES PARA LA INFRAESTRUCTURA SOCIAL (FAIS) (ARTÍCULO 33, APARTADO B, FRACCIÓN II, INCISO A) Y C) DE LA LCF)",
      2024: {
        4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-4-2024/FAIS4TOTRIM.pdf",
      },
      2025: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-1/CONACFIII1ERTRIM2025.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/2DO_TRIM_2025/CONAC2DOTRIM2025FAIS.pdf",
        3: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/CONAC FAIS TERCER TRIMESTRE.pdf",
        4: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PROGRAMATICA/CONACFIII4TOTRIM2025.pdf",
      },
      2026: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe%20Financiero%20LGCG/Trimestral/CONAC%20FONDO%20III%201ER.TRIM2026.pdf",
      },
    },
    {
      name: "INFORMACIÓN DE APLICACIÓN DE RECURSOS FEDERALES DEL FONDO DE APORTACIONES PARA EL FORTALECIMIENTO DE LOS MUNICIPIOS Y DEMARCACIONES TERRITORIALES DEL DISTRITO FEDERAL (FORTAMUN)",
      2024: {
        4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-4-2024/FORTAMUN4TOTRIM.pdf",
      },
      2025: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION%20PROGRAMATICA/INFORMACION%20FINANCIERA%20LGCG/TRIMESTRE-1/CONAC%20FONDOIV1ERTRIM2025.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/2DO_TRIM_2025/CONAC2DOTRIM2025FORTAMUN.pdf",
        3: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/CONAC FORTAMUN TERCER TRIMESTRE.pdf",
        4: "https://gobparaiso.blob.core.windows.net/transparencia/INFORMACION PROGRAMATICA/CONACFIV4TOTRIM2025.pdf",
      },
      2026: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe%20Financiero%20LGCG/Trimestral/CONAC%20FONDO%20IV%201ER.TRIM2026.pdf",
      },
    },
    {
      name: "INFORMACIÓN RELATIVA A LAS OBLIGACIONES QUE SE PAGAN O GARANTIZAN CON RECURSOS DE FONDOS FEDERALES",
      2024: {
        4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-4-2024/4T24 formato de obligaciones pagadas.pdf",
      },
      2025: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-1/formato de obligaciones pagadas.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/2DO_TRIM_2025/formato de obligaciones pagadas o garantizadas con fondos federales de abril a junio 2025.pdf",
        3: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/DE OBLIGACIONES PAGADAS O GARANTIZADAS CON FONDOS FEDERALES.pdf",
        4: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/FORMATO DE OBLIGACIONES PAGADAS O GARANTIZADAS CON FONDOS FEDERALES.pdf",
      },
      2026: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/Trimestral/FORMATO DE OBLIGACIONES PAGADAS O GARANTIZADAS CON FONDOS FEDERA.pdf",
      },
    },
    {
      name: "INFORMACIÓN TRIMESTRAL DEL EJERCICIO Y DESTINO DE GASTO FEDERALIZADO Y REINTEGROS",
      2024: {
        4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION%20PROGRAMATICA/INFORMACION%20FINANCIERA%20LGCG/TRIMESTRE-4-2024/4T24%20clasificacion%20del%20ejercicio%20y%20destino%20de%20gasto.pdf",
      },
      2025: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/TRIMESTRE-1/clasificacion del ejercicio y destino de gasto.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/INFORMACION FINANCIERA LGCG/2DO_TRIM_2025/FORMATO DEL EJERCICIO Y DESTINO DE GASTO FEDERALIZADO Y REINTEGROS DE ABRIL A JUNIO 2025.pdf",
        3: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/DEL EJERCICIO Y DESTINO DE GASTO FEDERALIZADO Y REINTEGROS.pdf",
        4: "https://gobparaiso.blob.core.windows.net/transparencia/Informe Financiero LGCG/FORMATO DEL EJERCICIO Y DESTINO DE GASTO FEDERALIZADO Y REINTEGROS.pdf",
      },
      2026: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe%20Financiero%20LGCG/Trimestral/FORMATO%20DEL%20EJER%20Y%20DESTINO%20DE%20GASTO%20FEDERALIZADO%20Y%20REINTEGROS.pdf",
      },
    },
    // {
    //   name: "CONAC FONDO III 1ER.TRIM2026",
    //   2026: {
    //     1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe%20Financiero%20LGCG/Trimestral/CONAC%20FONDO%20III%201ER.TRIM2026.pdf",
    //   },
    // },
    // {
    //   name: "CONAC FONDO IV 1ER.TRIM2026",
    //   2026: {
    //     1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe%20Financiero%20LGCG/Trimestral/CONAC%20FONDO%20IV%201ER.TRIM2026.pdf",
    //   },
    // },
    // {
    //   name: "FORMATO DE OBLIGACIONES PAGADAS O GARANTIZADAS CON FONDOS FEDERA",
    //   2026: {
    //     1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe%20Financiero%20LGCG/Trimestral/FORMATO%20DE%20OBLIGACIONES%20PAGADAS%20O%20GARANTIZADAS%20CON%20FONDOS%20FEDERA.pdf",
    //   },
    // },
    // {
    //   name: "FORMATO DE PROGRAMAS CON RECURSOS CONCURRENTE POR ORDEN DE GOBIE",
    //   2026: {
    //     1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe%20Financiero%20LGCG/Trimestral/FORMATO%20DE%20PROGRAMAS%20CON%20RECURSOS%20CONCURRENTE%20POR%20ORDEN%20DE%20GOBIE.pdf",
    //   },
    // },
    // {
    //   name: "FORMATO DEL EJER Y DESTINO DE GASTO FEDERALIZADO Y REINTEGROS",
    //   2026: {
    //     1: "https://gobparaiso.blob.core.windows.net/transparencia/Informe%20Financiero%20LGCG/Trimestral/FORMATO%20DEL%20EJER%20Y%20DESTINO%20DE%20GASTO%20FEDERALIZADO%20Y%20REINTEGROS.pdf",
    //   },
    // },
  ];
  const columns: ColumnsType<any> = [
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
          title: "2024",
          children: [
            {
              title: "1",
              align: "center",
            },
            {
              title: "2",
              align: "center",
            },
            {
              title: "3",
              align: "center",
            },
            {
              title: "4",
              dataIndex: [2024, 4],
              width: "10px",
              render: (e: any) =>
                e && (
                  <Button icon={<FilePdfOutlined />} href={e} target="_blank" />
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
              render: (e: any) =>
                e && (
                  <Button icon={<FilePdfOutlined />} href={e} target="_blank" />
                ),
              align: "center",
            },
            {
              title: "2",
              dataIndex: [2025, 2],
              width: "10px",
              render: (e: any) =>
                e && (
                  <Button icon={<FilePdfOutlined />} href={e} target="_blank" />
                ),
              align: "center",
            },
            {
              title: "3",
              dataIndex: [2025, 3],
              width: "10px",
              render: (e: any) =>
                e && (
                  <Button icon={<FilePdfOutlined />} href={e} target="_blank" />
                ),
              align: "center",
            },
            {
              title: "4",
              dataIndex: [2025, 4],
              width: "10px",
              render: (e: any) =>
                e && (
                  <Button icon={<FilePdfOutlined />} href={e} target="_blank" />
                ),
              align: "center",
            },
          ],
        },
        {
          title: "2026",
          children: [
            {
              title: "1",
              dataIndex: [2026, 1],
              width: "10px",
              render: (e: any) =>
                e && (
                  <Button icon={<FilePdfOutlined />} href={e} target="_blank" />
                ),
              align: "center",
            },
            {
              title: "2",
              width: "10px",
              align: "center",
            },
            {
              title: "3",
              width: "10px",
              align: "center",
            },
            {
              title: "4",
              width: "10px",
              align: "center",
            },
          ],
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
