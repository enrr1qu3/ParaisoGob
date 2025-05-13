import { useLocation, useNavigate } from 'react-router-dom';
import { Col, Menu, Row } from 'antd';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
export const MenuLayoutMovil = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const items: MenuItem[] = [
        {
            label: 'MUNICIPIO',
            key: 'MUNICIPIO',
            children: [

                { label: 'Historia', key: 'historia' },
                { label: 'Geografía', key: 'geografia' },
                // { label: 'Población', key: 'poblacion' },

            ],
        },
        {
            label: 'GOBIERNO',
            key: 'GOBIERNO',
            children: [

                { label: 'Cabildo', key: 'cabildo' },
                { label: 'Directorio', key: 'directorio' },
                // { label: 'Población', key: 'poblacion' },

            ],

        },
        {
            label: 'TRANSPARENCIA',
            key: 'transparencia',
            children: [
                { label: 'SEVAC', key: 'sevac' },
                { label: 'Informacion financiera LGCG', key: 'lgcg' },
                { label: 'Presupuesto lenguaje ciudadano', key: 'presupuesto-lenguaje-ciudadano' },
                { label: 'Recursos federales transferidos', key: 'recursos-federales-transferidos' },
                { label: 'Rendimiento de cuentas', key: 'rendimiento-de-cuentas' },
                { label: 'Archivos publicados', key: 'transparencia/archivos-publicados' },
            ],
        },
        {
            label: 'ATENCIÓN CIUDADANA',
            key: 'atencionCiudadana',
        },
        // {
        //     label: 'TRANSPARENCIA',
        //     key: 'transparencia',
        // },

    ];
    return (
        <Row>
            <Col span={24}>
                <Menu
                    defaultSelectedKeys={[pathname.slice(1)]}
                    defaultOpenKeys={['sub1']}
                    onClick={(item) => {
                        navigate(item.key);
                    }}
                    mode="inline"
                    items={items}
                // style={{ minWidth: 522, flex: "auto" }}
                />
            </Col>
        </Row>
    )
}
