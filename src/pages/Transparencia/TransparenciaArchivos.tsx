import { Button, Col, Row, Table } from "antd"
import { FilePdfOutlined } from '@ant-design/icons';
export const TransparenciaArchivos = () => {
  const dataSource = [
    {
      proyecto: "OPM57",
      obra: "REHABILITACION DE RED DE AGUA ENTUBADA EN CALLE EL POSTECITO, EN LA RANCHERIA ORIENTE SEGUNDA SECCIÓN (PALMA HUACA), DEL MUNICIPIO DE PARAISO; TABASCO. (TERRESTRE 2023)",
      localidad: "270140049. RA. ORIENTE 2DA. SECCION . (PALMA HUACA).",
      contrato: "CO-PA-HIDRCTERR-022-2024",
      archivo: "https://paraisomovimiento.com/transparencia/Contrato%20No.%20CO-PA-HIDRCTERR-022-2024%20OBRA%20OPM57_redacted.pdf",
      archivoFisico: "https://paraisomovimiento.com/transparencia/ACTA%20ENTREGA%20FISICA%20POSTECITO.pdf"
    },
    {
      proyecto: "OPM56",
      obra: "REHABILITACION DE CALLE A BASE DE GRAVA DE REVESTIMIENTO DE 1 1/2 A FINOS, (UBICACIÓN ENTRADA LOS GÓMEZ) EN LA RANCHERIA LAS FLORES PRIMERA SECCIÓN, DEL MUNICIPIO DE PARAISO; TABASCO. (MARITIMA 2023)",
      localidad: "270140009. RA. LAS FLORES 1RA. SECCION",
      contrato: "CO-PA-HIDRCMAR-021-2024",
      archivo: "https://paraisomovimiento.com/transparencia/Contrato%20No.%20CO-PA-HIDRCMAR-021-2024%20OBRA%20OPM56_redacted.pdf",
      archivoFisico: "https://paraisomovimiento.com/transparencia/ACTA%20RECEPCION%20FISICA%20%20LOS%20GOMEZ.pdf",
    },
    {
      proyecto: "OPM59",
      obra: "REHABILITACION DE CALLE A BASE DE CONCRETO ASFALTICO EN CALIENTE (UBICACIÓN ENTRADA AL BACHILLER), EN LA RANCHERÍA POTRERITOS DEL MUNICIPIO DE PARAISO; TABASCO. (MARITIMA 2024)",
      localidad: "270140026. RA. POTRERITOS",
      contrato: "CO-PA-HIDRCMAR-024-2024",
      archivo: "https://paraisomovimiento.com/transparencia/Contrato%20No.%20CO-PA-HIDRCMAR-024-2024%20OBRA%20OPM59_redacted.pdf",
      archivoFisico: "https://paraisomovimiento.com/transparencia/ACTA%20ENTREGA%20FISICA%20%20POTRERITO.pdf",
    },
    {
      proyecto: "OPM58",
      obra: "REHABILITACION DE CAMINO A BASE DE CONCRETO ASFALTICO EN CALIENTE EN EL EJIDO OCCIDENTE SAN FRANCISCO, DEL MUNICIPIO DE PARAISO; TABASCO. (TERRESTRE 2024)",
      localidad: "270140050. EJ. OCCIDENTE (SAN FRANCISCO).",
      contrato: "CO-PA-HIDRCTERR-023-2024",
      archivo: "https://paraisomovimiento.com/transparencia/Contrato%20No.%20CO-PA-HIDRCTERR-023-2024%20OBRA%20OPM58_redacted.pdf ",
      archivoFisico: "https://paraisomovimiento.com/transparencia/ACTA%20ENTREGA%20FISICA%20SAN%20FRANCISCO.pdf",
    },
    {
      proyecto: "KAM52",
      obra: "MEJORA DE RED DE DISTRIBUCION DE ENERGIA ELECTRICA EN MEDIA Y BAJA TENSION EN LA COLONIA EL BELLOTE (MIGUEL DE LA MADRID), UBICADA ENTRADA ANTES LA PANGA) DEL MUNICIPIO DE PARAISO, TABASCO",
      localidad: "270140004. COL EL BELLOTE. (MIGUEL DE LA MADRID).",
      contrato: "CO-PA- R23MAR-007-2025"
    },
    {
      proyecto: "KAM53",
      obra: "MEJORA DE RED DE DISTRIBUCION DE ENERGIA ELECTRICA EN MEDIA Y BAJA TENSION EN EL EJIDO ANDRES GARCIA (LA ISLA) DEL MUNICIPIO DE PARAISO, TABASCO",
      localidad: "270140045. EJ. ANDRES GARCIA (LA ISLA)",
      contrato: "CO-PA-R23TER-008-2025"
    },
  ]

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
            title={() => <h3>'Ramo 23 Hidrocarburos.  Art. 72 LGCG'</h3>}
            dataSource={dataSource}
            size="small" columns={columns}
            rowKey={(record) => record.proyecto}
            scroll={{ x: 'max-content' }}
          />
        </Col>
      </Row>
    </div>
  )
}
