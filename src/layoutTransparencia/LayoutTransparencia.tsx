import { Col, Row } from "antd";
import { FooterLayout } from "../layout/FooterLayout";
import "./style/LayoutTransparencia.css"
import { Outlet } from "react-router-dom";
import { MenuTransparencia } from "./MenuTransparencia";

export default function LayoutTransparencia() {
    return (
        <Row gutter={[0, 0]} style={{ marginTop: 20 }}>
            <Col
                xs={{ flex: "100%" }}
                xl={{ flex: "100%" }}
            >
                <div className="contenedorTransparencia" >
                    <MenuTransparencia />
                    <Row>
                        <Col
                            xs={{ flex: "100%" }}
                            xl={{ flex: "100%" }}
                        >
                            <Outlet />
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col
                xs={{ flex: "100%" }}
                xl={{ flex: "100%" }}
            >
                <FooterLayout />
            </Col>
        </Row>
    )
}
