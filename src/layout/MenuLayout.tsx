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
            // { label: 'Población', key: 'poblacion' },

        ],
    },
    {
        label: 'GOBIERNO',
        key: 'GOBIERNO',
        children: [

            // { label: 'Cabildo', key: 'cabildo' },
            // { label: 'Directorio', key: 'directorio' },
            // { label: 'Población', key: 'poblacion' },

        ],
    },
    {
        label: 'TRANSPARENCIA',
        key: 'transparencia',
        children: [
            { label: 'Información Pública', key: 'informacion-publica' },
            {
              label: <a href="https://gobparaiso.blob.core.windows.net/transparencia/ADENDUM MODIFICATORIO.pdf" target="_blank" >Adendum Modificatorio( Diciembre 2024 )</a>,
              key: '#-1'
            },
            {
              label: <a href={`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent("https://gobparaiso.blob.core.windows.net/transparencia/TEM_PATXCT06TEOFANI_20260119110821.xlsx")}`} target="_blank" >Inventario de Bienes Muebles (Segundo Semestre 2025)</a>,
              key: '#-3'
            },
            { label: 'Rendición de Cuentas', key: 'rendicion-de-cuentas' },
            { label: 'Normatividad Municipal', key: 'normatividad-municipal' },
            { label: 'Información Financiera LGCG', key: 'lgcg' },
            { label: 'Recursos Federales Transferidos', key: 'recursos-federales-transferidos' },
            { label: 'Presupuesto en Lenguaje Ciudadano', key: 'presupuesto-lenguaje-ciudadano' },
            { label: 'Sistema de Evaluación de Armonización Contable', key: 'sevac' },
            { label: 'Unidad de Evaluación del Desempeño Municipal (UEDM)', key: 'uedm' },
            { label: 'Archivo Municipal', key: 'archivo-municipal' },
            {
              label: <a href="https://gobparaiso.blob.core.windows.net/transparencia/INVENTARIO_GENERAL/INVENTARIO GENERAL AL 30 DE JUNIO DE 2025 FORMATO PATXCT06.pdf" target="_blank" >Inventario General</a>,
              key: '#-2'
            },
            // { label: 'Ramo 23 Hidrocarburos. Art. 72 LGCG', key: 'ramo-23-hidrocarburos' },
            // { label: 'Información Publica', key: 'transparencia/archivos-publicados' },


        ],
    },
    {
        label: 'TRÁMITES Y SERVICIOS',
        key: 'tramitesServicios',
        children: [
            { label: 'Certificado de Funcionamiento SARE', key: 'certificado-funcionamiento-SARE' },
            { label: 'Trámites del Registro Civil', key: 'tramites-registro-civil' },
        ],
    },
    {
        label: 'CONTRALORÍA MUNICIPAL',
        key: 'contraloria',
    },
    // {
    //     label: 'ATENCIÓN CIUDADANA',
    //     key: 'atencionCiudadana',
    // },
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
                style={{ minWidth: 750, flex: "auto" }}
            />
        </Col>
    </Row>


}
