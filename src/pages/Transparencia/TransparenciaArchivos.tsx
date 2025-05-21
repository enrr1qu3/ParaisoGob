import { Button, Col, Row, Table } from "antd"
import { FilePdfOutlined } from '@ant-design/icons';
export const TransparenciaArchivos = () => {
  const dataSource = [
    {
      proyecto: "OPM57",
      obra: "REHABILITACION DE RED DE AGUA ENTUBADA EN CALLE EL POSTECITO, EN LA RANCHERIA ORIENTE SEGUNDA SECCIÓN (PALMA HUACA), DEL MUNICIPIO DE PARAISO; TABASCO. (TERRESTRE 2023)",
      localidad: "270140049. RA. ORIENTE 2DA. SECCION . (PALMA HUACA).",
      contrato: "CO-PA-HIDRCTERR-022-2024",
      archivo: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCTERR-022-2024_OBRA_OPM57_redacted.pdf",
      archivoFisico: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_POSTECITO.pdf"
    },
    {
      proyecto: "OPM56",
      obra: "REHABILITACION DE CALLE A BASE DE GRAVA DE REVESTIMIENTO DE 1 1/2 A FINOS, (UBICACIÓN ENTRADA LOS GÓMEZ) EN LA RANCHERIA LAS FLORES PRIMERA SECCIÓN, DEL MUNICIPIO DE PARAISO; TABASCO. (MARITIMA 2023)",
      localidad: "270140009. RA. LAS FLORES 1RA. SECCION",
      contrato: "CO-PA-HIDRCMAR-021-2024",
      archivo: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCMAR-021-2024_OBRA_OPM56_redacted.pdf",
      archivoFisico: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_RECEPCION_FISICA_LOS_GOMEZ.pdf",
    },
    {
      proyecto: "OPM59",
      obra: "REHABILITACION DE CALLE A BASE DE CONCRETO ASFALTICO EN CALIENTE (UBICACIÓN ENTRADA AL BACHILLER), EN LA RANCHERÍA POTRERITOS DEL MUNICIPIO DE PARAISO; TABASCO. (MARITIMA 2024)",
      localidad: "270140026. RA. POTRERITOS",
      contrato: "CO-PA-HIDRCMAR-024-2024",
      archivo: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCMAR-024-2024_OBRA_OPM59_redacted.pdf",
      archivoFisico: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_POTRERITO.pdf",
    },
    {
      proyecto: "OPM58",
      obra: "REHABILITACION DE CAMINO A BASE DE CONCRETO ASFALTICO EN CALIENTE EN EL EJIDO OCCIDENTE SAN FRANCISCO, DEL MUNICIPIO DE PARAISO; TABASCO. (TERRESTRE 2024)",
      localidad: "270140050. EJ. OCCIDENTE (SAN FRANCISCO).",
      contrato: "CO-PA-HIDRCTERR-023-2024",
      archivo: "https://gobparaiso.blob.core.windows.net/transparencia/Contrato_No._CO-PA-HIDRCTERR-023-2024_OBRA_OPM58_redacted.pdf",
      archivoFisico: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA_ENTREGA_FISICA_SAN_FRANCISCO.pdf",
    },
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
  ]
  const dataArt46 = [
    {
      nombre: "Publicacion Programacion",
      archivo: "https://gobparaiso.blob.core.windows.net/transparencia/PUBLICACION_PROGRAMACION.pdf",
    },
    {
      nombre: "Clasificacion de economica(por tipo de gasto)",
      archivo: "https://gobparaiso.blob.core.windows.net/transparencia/clasificacion_de_economica_(por_tipo_de_gasto).pdf",
    },
    {
      nombre: "Clasificacion funcional",
      archivo: "https://gobparaiso.blob.core.windows.net/transparencia/clasificacion_funcional.pdf",
    },
    {
      nombre: "Clasificacion administrativa",
      archivo: "https://gobparaiso.blob.core.windows.net/transparencia/clasificacion_administrativa.pdf",
    },
    {
      nombre: "Clasificacion por objeto del gasto",
      archivo: "https://gobparaiso.blob.core.windows.net/transparencia/clasificacion_por_objeto_del_gasto.pdf",
    },
    {
      nombre: "Clasificacion por categoria programatica",
      archivo: "https://gobparaiso.blob.core.windows.net/transparencia/clasificacion_por_categoria_programatica.pdf",
    },
    {
      nombre: "Clasificacion por programas y proyectos",
      archivo: "https://gobparaiso.blob.core.windows.net/transparencia/clasificacion_de_programas_y_proyectos.pdf",
    },
  ]
  // const dataArt72y75 = [
  //   {
  //     nombre: "FAIS Y FORTAMUN 2025",
  //     archivo: "https://gobparaiso.blob.core.windows.net/transparencia/FAIS_Y_FORTAMUN_2025.pdf",
  //   },

  // ]

  // const dataUEDM = [
  //   {
  //     nombre: "PAEM2025",
  //     archivo: "https://gobparaiso.blob.core.windows.net/transparencia/PAEM%202025.pdf",
  //   },
  //   {
  //     nombre: "ACTA DE LA PRIMERA SESION EXTRAORDINARIA UEDM",
  //     archivo: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA%20DE%20LA%20PRIMERA%20SESION%20EXTRAORDINARIA%20UEDM.pdf",
  //   },
  //   {
  //     nombre: "ACTA DE LA PRIMERA SESION DE LA UEDM.pdf",
  //     archivo: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA%20DE%20LA%20PRIMERA%20SESION%20DE%20LA%20UEDM.pdf",
  //   },
  //   {
  //     nombre: "ACTA DE INSTALACION Y PUNTO DE ACUERDO.pdf",
  //     archivo: "https://gobparaiso.blob.core.windows.net/transparencia/ACTA%20DE%20INSTALACION%20Y%20PUNTO%20DE%20ACUERDO.pdf",
  //   },
  // ]

  const columnsDOS = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',

    },
    {
      title: 'Archivo',
      key: 'archivo',
      dataIndex: 'archivo',
      width: "2%",
      render: (e: any) => (
        (e)
          ? < Button
            icon={< FilePdfOutlined />}
            href={e}
            target="_blank"
          >
            Archivo
          </ Button>
          : <></>
      ),
    },
  ];
  const columns = [
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
      title: 'Archivo',
      key: 'archivo',
      dataIndex: 'archivo',
      width: "2%",
      render: (e: any) => (

        (e)
          ? < Button
            icon={< FilePdfOutlined />}
            href={e}
            target="_blank"
          >
            archivo
          </ Button>
          : <></>
      ),
    },
    {
      title: 'Actas de entrega',
      key: 'archivoFisico',
      dataIndex: 'archivoFisico',
      width: "2%",
      render: (e: any) => (

        (e)
          ? < Button
            icon={< FilePdfOutlined />}
            href={e}
            target="_blank"
          >
            Acta de entrega
          </ Button>
          : <></>
      ),
    },
  ];

  return (
    <div  >
      <h2 className="tituloInicio">
        Archivos Publicados
      </h2>
      <Row gutter={[8, 16]}>
        <Col
          xs={{ flex: '100%' }}
          xl={{ flex: '100%' }}
        >
          <Table
            title={() => <h3>'Ramo 23 Hidrocarburos.  Art. 72 LGCG'</h3>}
            dataSource={dataSource}
            size="small" columns={columns}
            rowKey={(record) => record.proyecto}
            scroll={{ x: 'max-content' }}
          />
        </Col>

        <Col
          xs={{ flex: '100%' }}
          xl={{ flex: '100%' }}
        >
          <Table
            title={() => <h3 style={{ margin: 0 }}>Articulo 46 de la ley general de contabilidad gubernamental del estado de tabasco</h3>}
            dataSource={dataArt46}
            size="small" columns={columnsDOS}
            rowKey={(record) => record.nombre}
            scroll={{ x: 'max-content' }}
          />
        </Col>

{/* 
        <Col
          xs={{ flex: '100%' }}
          xl={{ flex: '100%' }}
        >
          <Table
            dataSource={dataUEDM}
            size="small"
            columns={columnsDOS}
            rowKey={(record) => record.nombre}
            scroll={{ x: 'max-content' }}
          />
        </Col> */}
      </Row>
    </div>
  )
}
