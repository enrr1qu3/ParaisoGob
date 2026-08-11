import { Button, Table } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

export const TablaInfoRendiCuentas = () => {
  const dataSource = [
    {
      name: "CLASIFICACIÓN ADMINISTRATIVA",
      2024: {
        4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PRESUPUESTARIA/TRIMESTRE-4-2024/4T24 ClasificacionAdministrativa.pdf",
      },
      2025: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PRESUPUESTARIA/TRIMESTRE-1/clasificacion adminisrativa.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/2DO_TRIM_2025/CLASIFICACION ADMINISTRATIVA 2DOTRIM.pdf",
        3: "https://gobparaiso.blob.core.windows.net/transparencia/Rendición de Cuentas 3er Trimestre 2025/CLASIFICACION ADMINISTRATIVA.pdf",
        4: "https://gobparaiso.blob.core.windows.net/transparencia/rendición de cuentas 4t 2025/CLASIFICACION ADMINISTRATIVA.pdf",
      },
    },
    {
      name: "CLASIFICACIÓN ECONÓMICA",
      2024: {
        4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PRESUPUESTARIA/TRIMESTRE-4-2024/4T24 ClasificacionEconómica.pdf",
      },
      2025: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PRESUPUESTARIA/TRIMESTRE-1/clasificacion de economica (por tipo de gasto).pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/2DO_TRIM_2025/CLASIFICACION ECONOMICA (POR TIPO DE GASTO) 2DOTRIM.pdf",
        3: "https://gobparaiso.blob.core.windows.net/transparencia/Rendición de Cuentas 3er Trimestre 2025/CLASIFICACION ECONOMICA (POR TIPO DE GASTO).pdf",
        4: "https://gobparaiso.blob.core.windows.net/transparencia/rendición de cuentas 4t 2025/CLASIFICACION ECONOMICA (POR TIPO DE GASTO).pdf",
      },
    },
    {
      name: "CLASIFICACIÓN POR OBJETO DEL GASTO",
      2024: {
        4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PRESUPUESTARIA/TRIMESTRE-4-2024/4T24 ClasificacionObjeto del gasto.pdf",
      },
      2025: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PRESUPUESTARIA/TRIMESTRE-1/clasificacion por objeto del gasto.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/2DO_TRIM_2025/CLASIFICACION POR OBJETO DEL GASTO 2DOTRIM.pdf",
        3: "https://gobparaiso.blob.core.windows.net/transparencia/Rendición de Cuentas 3er Trimestre 2025/CLASIFICACION POR OBJETO DEL GASTO (CAPITULO Y CONCEPTO).pdf",
        4: "https://gobparaiso.blob.core.windows.net/transparencia/rendición de cuentas 4t 2025/CLASIFICACION POR OBJETO DEL GASTO (CAPITULO Y CONCEPTO).pdf",
      },
    },
    {
      name: "CLASIFICACIÓN FUNCIONAL",
      2024: {
        4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PRESUPUESTARIA/TRIMESTRE-4-2024/4T24 ClasificacionFuncional.pdf",
      },
      2025: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PRESUPUESTARIA/TRIMESTRE-1/clasificacion funcional.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/2DO_TRIM_2025/CLASIFICACION FUNCIONAL (FINALIDAD Y FUNCION) 2DOTRIM.pdf",
        3: "https://gobparaiso.blob.core.windows.net/transparencia/Rendición de Cuentas 3er Trimestre 2025/CLASIFICACION FUNCIONAL (FINALIDAD Y FUNCION).pdf",
        4: "https://gobparaiso.blob.core.windows.net/transparencia/rendición de cuentas 4t 2025/CLASIFICACION FUNCIONAL (FINALIDAD Y FUNCION).pdf",
      },
    },
    {
      name: "CLASIFICACIÓN POR CATEGORÍA PROGRAMÁTICA",
      2024: {
        4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PROGRAMATICA/TRIMESTRE-4-2024/4T24 ClasificacionProgramática.pdf",
      },
      2025: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PROGRAMATICA/TRIMESTRE-1/clasificacion de programas y proyectos.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/2DO_TRIM_2025/CLASIFICACION POR CATEGORIA PROGRAMATICA 2DOTRIM.pdf",
        3: "https://gobparaiso.blob.core.windows.net/transparencia/Rendición de Cuentas 3er Trimestre 2025/GASTO POR CATEGORIA PROGRAMATICA.pdf",
        4: "https://gobparaiso.blob.core.windows.net/transparencia/rendición de cuentas 4t 2025/GASTO POR CATEGORIA PROGRAMATICA.pdf",
      },
    },
    {
      name: "CLASIFICACIÓN POR CATEGORÍA PROGRAMÁTICA Y PROYECTOS",
      2024: {
        4: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PROGRAMATICA/TRIMESTRE-4-2024/4T24 ClasificacionProgramas  y Proyectos.pdf",
      },
      2025: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/INFORMACION PROGRAMATICA/TRIMESTRE-1/clasificacion por categoria programatica.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/2DO_TRIM_2025/CLASIFICACION POR OBJETO DEL GASTO 2DOTRIM.pdf",
        3: "https://gobparaiso.blob.core.windows.net/transparencia/Rendición de Cuentas 3er Trimestre 2025/PROGRAMAS Y PROYECTOS.pdf",
        4: "https://gobparaiso.blob.core.windows.net/transparencia/rendición de cuentas 4t 2025/PROGRAMAS Y PROYECTOS.pdf",
      },
    },
    {
      name: "CLASIFICACION POR PARTIDA",
      2025: {
        4: "https://gobparaiso.blob.core.windows.net/transparencia/rendición de cuentas 4t 2025/CLASIFICACION POR PARTIDA (1).pdf",
      },
    },
    {
      name: "CLASIFICACIÓN POR FUENTE DE FINANCIAMIENTO",
      2025: {
        2: "https://gobparaiso.blob.core.windows.net/transparencia/DIRECCION PROGRAMATICA/RENDICION DE CUENTAS/2DO_TRIM_2025/CLASIFICACION POR FUENTE DE FINANCIAMIENTO 2DOTRIM.pdf",
        3: "https://gobparaiso.blob.core.windows.net/transparencia/Rendición de Cuentas 3er Trimestre 2025/CLASIFICACION POR FUENTE DE FINANCIAMIENTO.pdf",
        4: "https://gobparaiso.blob.core.windows.net/transparencia/rendición de cuentas 4t 2025/CLASIFICACION POR FUENTE DE FINANCIAMIENTO.pdf",
      },
    },
    {
      name: "CLASIFICACION ADMINISTRATIVA",
      2026: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/CLASIFICACION_ADMINISTRATIVA.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/2026/SEGUNDO%20TRIMESTRE/CLASIFICACION%20ADMINISTRATIVA.pdf",
      },
    },
    {
      name: "CLASIFICACION ECONOMICA (POR TIPO DE GASTO)",
      2026: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/CLASIFICACION_ECONOMICA_(POR%20TIPO%20DE%20GASTO).pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/2026/SEGUNDO%20TRIMESTRE/CLASIFICACION%20ECONOMICA.pdf",
      },
    },
    {
      name: "CLASIFICACION FUNCIONAL",
      2026: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/CLASIFICACION_FUNCIONAL.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/2026/SEGUNDO%20TRIMESTRE/CLASIFICACION%20FUNCIONAL.pdf",
      },
    },
    {
      name: "CLASIFICACION POR FUENTE DE FINANCIAMIENTO",
      2026: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/CLASIFICACION_POR_FUENTE_DE_FINANCIAMIENTO.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/2026/SEGUNDO%20TRIMESTRE/CLASIFICACION%20POR%20FUENTE%20DE%20FINANCIAMIENTO.pdf",
      },
    },
    {
      name: "CLASIFICACION POR OBJETO DEL GASTO",
      2026: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/CLASIFICACION_POR_OBJETO_DEL_GASTO.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/2026/SEGUNDO%20TRIMESTRE/CLASIFICACION%20POR%20OBJETO%20DEL%20GASTO.pdf",
      },
    },
    {
      name: "GASTO POR CATEGORIA PROGRAMATICA",
      2026: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/GASTO_POR_CATEGORIA_PROGRAMATICA.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/2026/SEGUNDO%20TRIMESTRE/GASTO%20POR%20CATEGORIA%20PROGRAMATICA.pdf",
      },
    },
    {
      name: "PRESUPUESTO DE EGRESOS CLASIFICACION POR PARTIDA",
      2026: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/PRESUPUESTO_DE_EGRESOS_CLASIFICACION_POR_PARTIDA.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/2026/SEGUNDO%20TRIMESTRE/PRESUPUESTO%20DE%20EGRESOS%20CLASIFICACION%20POR%20PARTIDA.pdf",
      },
    },
    {
      name: "PROGRAMAS Y PROYECTOS",
      2026: {
        1: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/PROGRAMAS_Y_PROYECTOS.pdf",
        2: "https://gobparaiso.blob.core.windows.net/transparencia/Rendicion%20de%20Cuentas/2026/SEGUNDO%20TRIMESTRE/PROGRAMAS%20Y%20PROYECTOS.pdf",
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
        // {
        //     title: '2023',

        //     children: [
        //         {
        //             title: '1',
        //             align: 'center',
        //         },
        //         {
        //             title: '2',
        //             align: 'center',
        //         },
        //         {
        //             title: '3',
        //             align: 'center',
        //         },
        //         {
        //             title: '4',
        //             align: 'center',
        //         },
        //     ],

        // },
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
              dataIndex: [2026, 2],
              width: "10px",
              render: (e: any) =>
                e && (
                  <Button icon={<FilePdfOutlined />} href={e} target="_blank" />
                ),
              align: "center",
            },
            {
              title: "3",
              align: "center",
            },
            {
              title: "4",
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
