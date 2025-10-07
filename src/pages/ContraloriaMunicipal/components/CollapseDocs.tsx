import { FilePdfOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Button, Card, Col, Collapse, Row } from "antd";

const Childrendocs = () => {
  return (
    <Row gutter={[12, 16]}>
      <Col span={24}>
        <Card
          style={{ height: "100%" }}
          title={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              29/Sep/2025
              <Button
                icon={<FilePdfOutlined />}
                href="https://gobparaiso.blob.core.windows.net/contraloria/DIFUSION_CODIGO_ETICA/DIFUSIÓN DE CÓDIGO DE ÉTICA DÍA 3 PROTECCIÓN AMBIENTAL.pdf"
                target="_blank"
              />
            </div>
          }
        >
          <p style={{ fontWeight: "bold" }}></p>
          <p style={{ textAlign: "justify" }}>
            Difusión del Código de Ética y Código de Conducta a servidores
            públicos municipales del Ayuntamiento Constitucional de Paraíso,
            Tabasco, participando el personal de la Dirección de Protección
            Ambiental y Desarrollo Sustentable.
          </p>
        </Card>
      </Col>
      <Col span={24}>
        <Card
          style={{ height: "100%" }}
          title={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              02/Oct/2025
              <Button
                icon={<FilePdfOutlined />}
                href="https://gobparaiso.blob.core.windows.net/contraloria/DIFUSION_CODIGO_ETICA/DIFUSIÓN DE CÓDIGO DE ÉTICA DÍA 2 ATN CIUDADANA.pdf"
                target="_blank"
              />
            </div>
          }
        >
          <p style={{ textAlign: "justify" }}>
            Difusión del Código de Ética y Código de Conducta a servidores
            públicos municipales del Ayuntamiento Constitucional de Paraíso,
            Tabasco, participando el personal de la Dirección de Atención
            Ciudadana.
          </p>
        </Card>
      </Col>
      <Col span={24}>
        <Card
          style={{ height: "100%" }}
          title={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              02/Oct/2025
              <Button
                icon={<FilePdfOutlined />}
                href="https://gobparaiso.blob.core.windows.net/contraloria/DIFUSION_CODIGO_ETICA/DIFUSIÓN DE CÓDIGO DE ÉTICA DÍA 2 PROTECIÓN CIVIL.pdf"
                target="_blank"
              />
            </div>
          }
        >
          <p style={{ textAlign: "justify" }}>
            Difusión del Código de Ética y Código de Conducta a servidores
            públicos municipales del Ayuntamiento Constitucional de Paraíso,
            Tabasco, participando el personal de la Coordinación de Protección
            Civil.
          </p>
        </Card>
      </Col>
      <Col span={24}>
        <Card
          style={{ height: "100%" }}
          title={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              03/Oct/2025
              <Button
                icon={<FilePdfOutlined />}
                href="https://gobparaiso.blob.core.windows.net/contraloria/DIFUSION_CODIGO_ETICA/DIFUSIÓN DE CÓDIGO DE ÉTICA DÍA 1.pdf"
                target="_blank"
              />
            </div>
          }
        >
          <p style={{ textAlign: "justify" }}>
            Difusión del Código de Ética y Código de Conducta a servidores
            públicos municipales del Ayuntamiento Constitucional de Paraíso,
            Tabasco, participando el personal de la Dirección de Protección
            Ambiental y Desarrollo Sustentable.
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export const CollapseDocs = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Ver documentos de difusión",
      children: <Childrendocs />,
    },
  ];

  return (
    <Collapse
    size="large"
      style={{ marginBottom: "1.5rem" }}
      items={items}
    />
  );
};
