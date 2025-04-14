import type { MenuProps } from 'antd';
import { Col, Menu, Row } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'MUNICIPIO',
        key: 'MUNICIPIO',
        children: [

            { label: 'Historia', key: 'historia' },
            { label: 'Geografía', key: 'geografia' },
            { label: 'Población', key: 'poblacion' },

        ],
    },
    {
        label: 'GOBIERNO',
        key: 'GOBIERNO',

    },
    {
        label: 'ATENCIÓN CIUDADANA',
        key: 'ATENCIÓN CIUDADANA',
    },
    {
        label: 'TRANSPARENCIA',
        key: 'transparencia',
    },

];
export const MenuLayout = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    return <Row>
        <Col span={24}>
            <Menu
                defaultSelectedKeys={[pathname.slice(1)]}
                defaultOpenKeys={['sub1']}
                onClick={(item) => {
                    navigate(item.key);
                }}
                mode="horizontal" items={items}
                style={{ minWidth: 522, flex: "auto" }}
            />
        </Col>
    </Row>


}
