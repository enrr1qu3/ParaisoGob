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
            { label: 'Informacion Publica', key: 'informacion-publica' },
            { label: 'Rendición de Cuentas', key: 'rendicion-de-cuentas' },
            { label: 'Normatividad Municipal', key: 'normatividad-municipal' },
            { label: 'Informacion Financiera LGCG', key: 'lgcg' },
            { label: 'Recursos Federales Transferidos', key: 'recursos-federales-transferidos' },
            { label: 'Presupuesto en Lenguaje Ciudadano', key: 'presupuesto-lenguaje-ciudadano' },
            { label: 'Sistema de Evaluación de Armonización Contable', key: 'sevac' },
            { label: 'Unidad de Evaluacion del Desempeño Municipal UEDM', key: 'uedm' },
            // { label: 'Ramo 23 Hidrocarburos. Art. 72 LGCG', key: 'ramo-23-hidrocarburos' },
            // { label: 'Información Publica', key: 'transparencia/archivos-publicados' },

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
