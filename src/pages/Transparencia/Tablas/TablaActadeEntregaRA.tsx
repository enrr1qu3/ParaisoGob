import { Button, Col, Row, Table, Tooltip } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

export const TablaActadeEntregaRA = () => {
  const dataSource = [
    {
      proyecto: "KA 352",
      description: "CONTRATO MEJORA DE RED DE DISTRIBUCION DE ENERGÍA ELÉCTRICA EN MEDIA Y BAJA TENSION EN LA RANCHERÍA NICOLÁS BRAVO QUINTA SECCION (PUNTA BRAVA), PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO KA352_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/publicaciones-en-recursos-federales-transferidos_2026-01-12_1754/KA352_ACTA DE ENTREGA_NICOLAS BRAVO 5TA. PUNTA BRAVA_MEJORA DE RED.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 360",
      description: "CONTRATO REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE (UBIC ENTRADA LOS OSORIOS), EN LA RANCHERIA MOCTEZUMA PRIMERA SECCION DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP360_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP360_RA. MOCTEZUMA 1RA. SEC_OSORIOS_ASFALTO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 361",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE, EN CAMINO AQUITOFEL PEREZ DEL POBLADO FRANCISCO I. MADERO, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP361_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP361_POB. FRANCISCO I. MADERO_AQUITOFEL_ASFALTO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 362",
      description: "REHABILITACION A BASE DE GRAVA DE REVESTIMIENTO DE 1 ½” A FINOS Y OBRA COMPLEMENTARIA, EN DIVERSOS CAMINOS DEL EJIDO ORIENTE  (HORMIGUERO) DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP362_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP362_EJ. ORIENTE (HORMIGUERO)_REVESTIMIENTO.pdf",
            name: "Acta de entrega",
          }
        ],
      },
    },
    {
      proyecto: "OP 363",
      description: "REHABILITACION A BASE DE GRAVA DE REVESTIMIENTO DE 1 ½” A FINOS, EN DIVERSOS CAMINOS DE LA RANCHERIA POTRERITOS DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP363_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP363_RA. POTRERITOS_REVESTIMIENTO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 364",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE EN TRAMOS AISLADOS, EN LA RANCHERIA NICOLAS BRAVO CUARTA SECCION TILAPA, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP364_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP364_RA. NICOLAS BRAVO 4TA. SEC (TILAPA)_TILAPA_ASFALTO.pdf",
            name: "Acta Entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 365",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE EN CALLE LA CALENDARIA, EN LA RANCHERIA FRANCISCO I. MADERO SEGUNDA SECCION DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP365_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP365_RA. FRANCISCO I. MADERO 2DA. SEC_CANDELARIA_ASFALTO..pdf",
            name: "Acta Entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 366",
      description: "REHABILITACION A BASE DE GRAVA DE REVESTIMIENTO DE 1 ½” A FINOS, ENTRADA LOS BAMBU DEL EJIDO FRANCISCO I. MADERO DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP366_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP366_EJ. FRANCISCO I. MADERO_BAMBU_REVESTIMIENTO.pdf",
            name: "Acta Entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 367",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE ENTRADA EL NEGRO DEL POBLADO FRANCISCO I. MADERO (MADERO), DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP367_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP367_POB. FRANCISCO I. MADERO_NEGRO_ASFALTO..pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 368",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE, EN CALLES DE LA COLONIA HUESO DE PUERCO (GRANADITAS), DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP368_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP368_COL. HUESO DE PUERCO (QUINTIN ARAUZ)_GRANADITA_ASFALTO.pdf",
            name: "Acta Entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 369",
      description: "REHABILITACION DE DRENAJE SANITARIO EN CALLE LA CANDELARIA, EN LA RANCHERIA FRANCISCO I. MADERO SEGUNDA SECCION DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP369_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP369_RA. FRANCISCO I. MADERO 2DA. SEC_LA CANDELARIA_DRENAJE.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 370",
      description: "REHABILITACION DE RED DE DRENAJE SANITARIO EN ENTRADA EL NEGRO DEL POBLADO FRANCISCO I. MADERO (MADERO), DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP370_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP370_POB. FRANCISCO I. MADERO_EL NEGRO_DRENAJE.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 371",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE, (UBIC. ENTRADA LOS ARIAS), EN LA RANCHERIA LAS FLORES SEGUNDA SECCION, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP371_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP371_RA. LAS FLORES 2DA. SEC_LOS ARIAS_ASFALTO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 372",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE, (UBIC. ENTRADA SIGLO XX), EN LA RANCHERIA LAS FLORES SEGUNDA SECCION, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP372_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP372_RA. LAS FLORES 2DA. SEC_SIGLO XXI_ASFALTO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 373",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE Y OBRA COMPLEMENTARIA, (UBIC. ENTRADA LOS ALEJANDRO), EN LA RANCHERIA MOCTEZUMA SEGUNDA SECCION, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP373_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP373_RA. MOCTEZUMA 2DA. SEC_LOS ALEJANDRO_ASFALTO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 374",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE EN CAMINO PALESTINA EL CHIVERO, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP374_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP374_EJ. PALESTINA_CAMINO A PALESTINA_ASFALTO..pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 375",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE Y OBRA COMPLEMENTARIA, (UBIC. ENTRADA LA VACA), EN LA RANCHERIA MOCTEZUMA SEGUNDA SECCION DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP375_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP375_RA. MOCTEZUMA 3RA. SEC_LA VACA_ASFALTO..pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 376",
      description: "REHABILITACION DE RED DE AGUA ENTUBADA (UBIC. ENTRADA LA VACA) EN LA RANCHERIA MOCTEZUMA SEGUNDA SECCION DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP376_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP376_RA. MOCTEZUMA 2DA. SEC_LA VACA_AGUA ENTUBADA..pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 377",
      description: "REHABILITACION DE ALUMBRADO PUBLICO EN LA COLONIA EL BELLOTE (MIGUEL DE LA MADRID), DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP377_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP377_COL. MIGUEL DE LA MADRID_ALUMBRADO PUBLICO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 378",
      description: "REHABILITACION DE ALUMBRADO PUBLICO EN LA RANCHERIA NICOLAS BRAVO SEGUNDA SECCION (LA GLORIA), DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP378_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP378_RA. NICOLAS BRAVO 2DA. SEC (LA GLORIA)_ALUMBRADO PUBLICO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 379",
      description: "REHABILITACION DE ALUMBRADO PUBLICO EN LA RANCHERIA NICOLAS BRAVO TERCERA SECCION, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP379_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP379_RA. NICOLAS BRAVO 3RA. SEC_ALUMBRADO PUBLICO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 380",
      description: "REHABILITACION DE ALUMBRADO PUBLICO EN LA RANCHERIA NICOLAS BRAVO QUINTA SECCION (PUNTA BRAVA), DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP380_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP380_RA. NICOLAS BRAVO 5TA. SEC (PUNTA BRAVA)_ALUMBRADO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 381",
      description: "REHABILITACION DE ALUMBRADO PUBLICO EN EL POBLADO NICOLAS BRAVO, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP381_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP381_POB. NICOLAS BRAVO_ALUMBRADO PUBLICO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 382",
      description: "REHABILITACION DE ALUMBRADO PUBLICO EN LA RANCHERIA LIBERTAD SEGUNDA SECCION, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP382_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP382_RA. LIBERTAD 2DA. SEC_ALUMBRADO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 383",
      description: "REHABILITACION DE ALUMBRADO PUBLICO EN LA RANCHERIA UNION PRIMERA SECCION (AMATILLO), DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP383_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP383_RA. UNION 1RA. SEC (AMATILLO)_ALUMBRADO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 384",
      description: "REHABILITACION DE ALUMBRADO PUBLICO EN LA RANCHERIA LA UNION SEGUNDA SECCION DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP384_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP384_RA. UNION 2DA SEC_ALUMBRADO PUBLICO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 385",
      description: "REHABILITACION DE ALUMBRADO PUBLICO EN EL EJIDO GUANO SOLO (EL COQUITO) DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP385_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP385_EJIDO GUANOSOLO (EL COQUITO)_AUMBRADO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 386",
      description: "REHABILITACION DE ALUMBRADO PUBLICO EN LA RANCHERIA BARRA DE TUPILCO DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/CONTRATO OP386.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP386_RA. BARRA DE TUPILCO_ALUMBRADO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    // -----------------------------------------------------------------------------
    {
      proyecto: "KA 401",
      description: "SUMINISTRO E INSTALACION DE POSTES CONICOS PARA CAMARAS DE VIDEO VIGILANCIA PARA INHIBIR LOS DELITOS EN EL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CONTRATO%20FIRMADO%20KA401%20-2026.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    {
      proyecto: "OP 411",
      description: "REHABILITACION DE LA OFICINA DEL AREA JURIDICA DE LA DIRECCION DE SEGURIDAD PUBLICA DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CONTRATO%20FIRMADO%20OP411%20-2025%20EDIF%20SEG%20PUBL.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/Actas/OP411%20ACTA%20ENTREGA-%20RECEPCION.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 387",
      description: "REHABILITACION DE SISTEMA DE AGUA (UBIC. COLONIA LOS COCOS) EN LA CIUDAD DE PARAISO DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/CONTRATO OP387.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP387_CD PARAISO (LOS COCOS)_AGUA POTABLE..pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 388",
      description: "REHABILITACION DE ALUMBRADO PUBLICO EN LA COLONIA NUEVO TORNO LARGO (TRAMO DE LA ENTRADA A TORNO LARGO HASTA LA LAVANDERIA), DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP388_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/OP388_COL. NUEVO TORNO LARGO_ALUMBRADO PUBLICO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 389",
      description: "REHABILITACION DE SISTEMA DE AGUA POTABLE EN LA RANCHERIA MOCTEZUMA PRIMERA SECCION DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP389_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/publicaciones-en-recursos-federales-transferidos_2026-01-12_1754/OP389_ACTA ENTREGA_RA. MOCTEZUMA 1RA. SEC_AGUA POTABLE.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 390",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE Y OBRA COMPLEMENTARIA EN DIVERSAS ENTRADAS DE LA RANCHERIA NICOLAS BRAVO TERCERA SECCION, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP390_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/publicaciones-en-recursos-federales-transferidos_2026-01-12_1754/OP390_ACTA ENTREGA_RA. NICOCLAS BRAVO 3RA. SEC_DIVERSAS ENTRADAS_ASFALTO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 391",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE, EN ENTRADA LAS ISABELES DE LA RANCHERIA NICOLAS BRAVO TERCERA SECCION, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP391_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/publicaciones-en-recursos-federales-transferidos_2026-01-12_1754/OP391_ACTA ENTREGA_RA. NICOLAS BRAVO 3RA. SEC_ISABELES_ASFALTO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 392",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE, EN DIVERSAS ENTRADAS DEL EJIDO LIBERTAD PRIMERA SECCION EL CHIVERO DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP392_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/publicaciones-en-recursos-federales-transferidos_2026-01-12_1754/OP392_ACTA ENTREGA_EJ. LIBERTAD 1RA. SEC (EL CHIVERO)_DIVERSAS ENTRADAS_ASFALTO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 393",
      description: "REHABILITACION DE INSTALACIONES DEL DISPENSARIO MEDICO LOCALIZADO EN EL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP393_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/publicaciones-en-recursos-federales-transferidos_2026-01-12_1754/OP393_ACTA ENTREGA_CD. PARAISO_DISPENSARIO MEDICO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 394",
      description: "REHABILITACION DE RED DE AGUA ENTUBADA, EN LA COLONIA QUINTIN ARAUZ, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/Acta_de_Entrega_RA_Nicolas_Bravo_3RA/CONTRATO OP394_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/publicaciones-en-recursos-federales-transferidos_2026-01-12_1754/OP394_ACTA ENTREGA_COL. QUINTIN ARAUZ_AGUA ENTUBADA.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 395",
      description: "REHABILITACION DE RED DE AGUA ENTUBADA, EN LA COLONIA QUINTIN ARAUZ, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/publicaciones-en-recursos-federales-transferidos_2026-01-12_1754/CONTRATO OP395_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/publicaciones-en-recursos-federales-transferidos_2026-01-12_1754/OP395_ACTA ENTREGA_EJ. FRANCISCO I. MADERO_LOS SANCHEZ_REVESTIMIENTO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 396",
      description: "REHABILITACION DE RED DE AGUA ENTUBADA, EN LA COLONIA QUINTIN ARAUZ, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2025: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/publicaciones-en-recursos-federales-transferidos_2026-01-12_1754/CONTRATO OP396.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/publicaciones-en-recursos-federales-transferidos_2026-01-12_1754/OP396_ACTA DE ENTREGA_EJ. PUERTO CEIBA (CARRIZAL)_MANUEL ALEJANDRO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    // -----------------------------------------------------------------------------
    {
      proyecto: "OP302",
      description: " REHABILITACIÓN A BASE DE CONCRETO ASFALTICO EN CALIENTE, EN TRAMOS AISLADOS ENTRADA AL EJIDO CHILTEPEC(SECCION BANCO) DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
      1: [
        {
          url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OP/OP302.pdf",
          name: "Contrato",
        },
      ],
    },
    },
    {
      proyecto: "OP303",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE, EN TRAMOS AISLADOS ENTRADA HACIA EL PANTEÓN EN EL EJIDO CHILTEPEC (SECCIÓN BANCO) DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OP/OP303.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    {
      proyecto: "OP304",
      description: "REHABILITACIÓN A BASE DE CONCRETO ASFALTICO EN CALIENTE, EN DIVERSAS CALLES DEL EJIDO ORIENTE SAN CAYETANO DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OP/OP304.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/1/OP304_EJ%20ORIENTE%20SAN%20CAYETANO%20ASFALTO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP305",
      description: "REHABILITACIÓN A BASE DE CONCRETO ASFALTICO EN CALIENTE, EN TRAMOS AISLADOS EN ENTRADA HACIA EL CAMPO DEPORTIVO, DE LA RANCHERIA AQUILES SERDAN, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OP/OP305.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/1/OP305_RA%20AQUILES%20SERDAN%20HACIA%20EL%20CAMPO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP306",
      description: "REHABILITACIÓN A BASE DE CONCRETO ASFALTICO EN CALIENTE, ENTRADA EL BRUJO, DESDE LA ESCUELA PRIMARIA JOSE C. JULIAN PALMA A LA PAPELERIA SHADAY EN LA COLONIA PENJAMO (CHILTEPEC), DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OP/OP306.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/1/OP306%20_CHILTEPEC%20PENJAMO%20EN%20EL%20BRUJO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP307",
      description: "REHABILITACIÓN A BASE DE GRAVA DE REVESTIMIENTO DE 1 1/2\" A FINOS EN ENTRADA PRIMERO DE JUNIO, MACUILI Y FLOR DE CAÑA, EN LA COLONIA NUEVO TORNOLARGO, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OP/OP307.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/1/OP307_COL%20NVO%20TORNO%20LARGO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP308",
      description: "REHABILITACIÓN A BASE DE GRAVA DE REVESTIMIENTO DE 1 1/2\" A FINOS EN CAMINO ELOY CORDOVA DEL POBLADO FRANCISCO I MADERO (MADERO), DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OP/OP308.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/1/OP308_ELOY%20CORDOVA%20POB%20MADERO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP309",
      description: "REHABILITACIÓN A BASE DE CONCRETO ASFALTICO EN CALIENTE EN CERRADA MÉXICO CHELO Y GERZAYN, A UN COSTADO EL EDIFICIO KAAN CEIBA, EN EL EJIDO PUERTO CEIBA (CARRIZAL) DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OP/OP309.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/1/OP309_EJ%20PTO%20CEIBA%20CARRIZAL.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP310",
      description: "REHABILITACIÓN DE RED DE AGUA ENTUBADA, EN DIVERSAS CALLES DE LA RANCHERIA EL ESCRIBANO DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OP/OP310.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/1/OP310_ESCRIBANO%20AGUA%20ENTUBADA.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "KA302",
      description: "CONSTRUCCIÓN DE GUARNICIONES Y BANQUETAS, EN DIVERSAS CALLES (USUMACINTA, SAMARIA, PUXCATAN, GRIJALVA Y CONTINUACIÓN GRIJALVA) EN CIUDAD PARAISO, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OP/KA302.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/1/KA302%20_CD%20DE%20PARAISO%20BANQUETAS%20GUANAJAY.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP312",
      description: "REHEBILITACION DE DRENAJE SANITARIO, EN DIVERSAS CALLES DE LA CIUDAD DE PARAISO, (18 METROS, PROLOGANCIÓN 5 DE MAYO Y JUAN SANTOS). DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OP/OP312.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/1/OP312_CD%20DE%20PARAISO%2018%20MTRS%20Y%205%20DE%20MAYO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP313",
      description: "REHABILITACIÓN DE EMBARCADERO EN ENTRADA A LA ISLA EN EL EJIDO ANDRÉS GARCÍA (LA ISLA), DEL MUNICIPIO DE PARAÍSO TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OP/OP313.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/1/OP313.-%20EMBARCADERO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP314",
      description: "REHABILITACIÓN DE TECHADO DEL PALACIO DE LOS DEPORTES EN LA CIUDAD DE PARAÍSO, DEL MUNICIPIO DE PARAÍSO, TABASCO. (PRIMERA ETAPA)",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS FEDERALES TRANSFERIDOS/R_F_T_13-04-2026/OP/OP314.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    // -----------------------------------------------------------------------------
    {
      proyecto: "KA 301",
      description: "CONSTRUCCION A BASE DE CONCRETO ASFALTICO EN CALIENTE EN DIVERSAS CALLES (USUMACINTA, SAMARIA, PUXCATAN, GRIJALVA Y CONTINUACION GRIJALVA DEL MUNICIPIO DE PARAISO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CO-PA-R33FIII-015-2026%20KA301_redacted.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    {
      proyecto: "KA 303",
      description: "CONSTRUCCION DE TECHUMBRE EN EL POLIDEPORTIVO DE LA CIUDAD DE PARAISO, TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/1/KA303.pdf",
            name: "Acta de entrega",
          },
        ],
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CONTRATO%20KA303.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    {
      proyecto: "OP 301",
      description: "REHABILITACION A BASE DE GRAVA DE REVESTIMIENTO DE 1 \" 1/2\" A FINOS EN ENTRADA A BUENA VISTA EN LA RANCHERIA AQUILES SERDAN DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CONTRATO%20OP301_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/Actas/OP301_RA.%20AQUILES%20SERDAN%20ENT%20BUENA%20VISTA.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 311",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE Y OBRA COMPLEMENTARIA, EN DIVERSAS CALLES DEL ESCRIBANO, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/1/OP311.-%20ESCRIBANO.pdf",
            name: "Acta de entrega",
          },
        ],
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CONTRATO%20OP311_redacted.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    {
      proyecto: "OP 315",
      description: "REHABILITACION DEL SISTEMA DE AGUA POTABLE EN LA RANCHERIA NICOLAS BRAVO SEGUNDA SECCION (LA GLORIA), DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CONTRATO%20OP315-1.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/Actas/OP315_NB%202DA%20LA%20GLORIA%20SISTEMA%20DE%20AGUA.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 318",
      description: "REHABILITACION DE PISTA DE ATLETISMO Y CANCHA DEL FUTBOL DEL POLIDEPORTIVO EN LA CIUDAD DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CO-PA-R33FIII-036-2026%20OP318_redacted.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    {
      proyecto: "OP 319",
      description: "REHABILITACION DE CUBIERTA AUTOSOPORTANTE EN TECHADO DEL PALACIO DE LOS DEPORTES EN LA CIUDAD DE PARAISO, TABASCO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CONTRATO%20OP319.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    {
      proyecto: "OP 320",
      description: "REHABILITACION DE RED DE DRENAJE SANITARIO EN LA CALLE CARMEN URUETA EN EL EJIDO ORIENTE (SAN CAYETANO), DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CO-PA-R33FIII-039-2026%20OP320%20(2)_redacted.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    {
      proyecto: "OP 321",
      description: "REHABILITACION DE RED DE AGUA ENTUBADA EN LA CALLE CARMEN URUETA (SAN CAYETANO), EJIDO ORIENTE, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CO-PA-R33FIII-040-2026%20OP321%20(2)_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/Actas/ACTA%20ENTREGA%20OP321.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 322",
      description: "REHABILITACION DE RED DE AGUA ENTUBADA, EN ENTRADA LOS PESCADITOS DE LA RANCHERIA ORIENTE PRIMERA SECCION DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/1/OP322-.PESCADITO.pdf",
            name: "Acta de entrega",
          },
        ],
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CO-PA-R33FIII-041-2026%20OP322_redacted.pdf",
            name: "Contrato",
          },
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/Actas/OP322-.PESCADITO.pdf",
            name: "Acta de entrega",
          },
        ],
      },
    },
    {
      proyecto: "OP 323",
      description: "REHABILITACION DE RED DE AGUA ENTUBADA EN ENTRADA MORALES ROMERO Y LOS DOMINGUEZ EN LA RANCHERIA LIBERTAD SEGUNDA SECCION, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        1: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/1/OP323.pdf",
            name: "Acta de entrega",
          },
        ],
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CO-PA-R33FIII-042-2026%20OP323_redacted.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    {
      proyecto: "OP 324",
      description: "REHABILITACION A BASE DE GRAVA REVESTIMIENTO DE 1 1/2\" A FINOS, EN DIVERSOS CAMINOS (SAN ANTONIO DE PADUA, LOS RAMIREZ, LOS PAJARITOS Y DON BELI), Y OBRA COMPLEMENTARIA EN EL EJIDO AQUILES SERDAN, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CO-PA-R33FIII-043-2026%20OP324.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    {
      proyecto: "OP 325",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE, EN CAMINOS LOS CORDOBA PEREZ (LA KATY) Y LOS ANGULOS, DE LA COLONIA MOCTEZUMA, RIA. FRANCISCO Y MADERO 1A SECCION, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CO-PA-R33FIII-044-2026%20OP325_redacted.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    {
      proyecto: "OP 326",
      description: "REHABILITACION A BASE DE GRAVA DE REVESTIMIENTOS 1 1/2\", A FINOS, EN AVENIDA PALMA DE COCO, Y CALLE LOPEZ OBRADOR, PALMA HUACA, PALMA DE COCO, PALMA DE OROZCO, PALMA REAL, PALMA ARECA Y LAS PALMITA DE LA COLONIA LA MONTAÑITA, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CO-PA-R33FIII-045-2026%20OP326_redacted.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    {
      proyecto: "OP 327",
      description: "REHABILITACION A BASE DE CONCRETO ASFALTICO EN CALIENTE, EN ENTRADA A UN COSTADO DE LA ESCUELA AUGUSTO HERNANDEZ OLIVE, DEL POBLADO FRANCISCO I. MADERO, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CO-PA-R33FIII-046-2026%20OP327.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    {
      proyecto: "OP 328",
      description: "REHABILITACION A BASE DE GRAVA DE REVESTIMIENTO DE 1 1/2\" FINOS, EN ENTRADA LOS MORALES ROMERO, LOS DIAZ, LOS DOMINGUEZ Y OBRA COMPLEMENTARIA EN RIA. LIBERTAD SEGUNDA SECCION, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CO-PA-R33FIII-048-2026_redacted.pdf",
            name: "Contrato",
          },
        ],
      },
    },
    {
      proyecto: "OP 329",
      description: "REHABILITACION A BASE DE GRAVA DE REVESTIMIENTO DE 1 1/2\" FINOS, EN ENTRADA LOS PESCADITOS, DE LA RANCHERIA ORIENTE PRIMERA SECCION, DEL MUNICIPIO DE PARAISO, TABASCO.",
      2026: {
        2: [
          {
            url: "https://gobparaiso.blob.core.windows.net/transparencia/RECURSOS%20FEDERALES%20TRANSFERIDOS/Segunda%20Seccion/Trimestre%202026/2/CO-PA-R33FIII-049-2026_redacted.pdf",
            name: "Contrato",
          },
        ],
      },
    },
  ];

const columns: ColumnsType<any> = [
  {
    title: 'Proyecto No.',
    dataIndex: 'proyecto',
    width: "80px",
    key: 'proyecto',
  },
  {
    title: "Descripción",
    dataIndex: "description",
    key: "description",
    width: 850,
  },
  {
    title: "Trimestres",
    align: "center",
    children: [

      {
        title: "2025",
        align: "center",
        children: [
          {
            title: "1",
            dataIndex: [2025, 1],
            width: "80px",
            render: (e: any) => (
              <>
                <Row gutter={[5, 5]}>
                  <Col span={12}>
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
                  <Col span={12}>
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
            align: "center",
          },
        ],
      },
      {
        title: "2026",
        align: "center",
        children: [
          {
            title: "1",
            dataIndex: [2026, 1],
            width: "80px",
            render: (e: any) => (
              <>
                <Row gutter={[5, 5]}>
                  <Col span={12}>
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
                  <Col span={12}>
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
            align: "center",
          },
          {
            title: "2",
            dataIndex: [2026, 2],
            width: "80px",
            render: (e: any) => (
              <>
                <Row gutter={[5, 5]}>
                  <Col span={12}>
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
                  <Col span={12}>
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
