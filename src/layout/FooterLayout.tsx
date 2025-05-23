// import { Link } from 'react-router-dom'
import { LuMail, LuPhone, LuMapPin, LuClock, LuShield, LuTruck, LuFireExtinguisher, LuAmbulance, LuTriangleAlert } from "react-icons/lu";

import './style/FooterLayout.css'
// import { UserOutlined } from '@ant-design/icons';

export const FooterLayout = () => {
  return (
    <footer>
      <div className="container-info">
        <div className="container">
          <div className="info">

            <div>
              <div className="info-container-img">
                <img alt="Logo Paraíso"
                  loading="lazy"
                  width="200"
                  height="80"
                  decoding="async" data-nimg="1"
                  className="info-img"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7729.PNG-N4wQd9csCo9xGJAHC7pusSHLPWmOVN.png" />
              </div>

              <div
                className="container-info-list">
                {/* <div style={{ display: "flex", alignItems: "center" }}
                >
                  <UserOutlined className="icon-footer" />
                  <span>Lic. Oscar Augusto Pérez Carrillo <br/> Titular de la Unidad de Transparencia y Proteccion de Datos Personales L.A</span>
                </div> */}
                <div style={{ display: "flex", alignItems: "center", marginTop: 12 }}
                >
                  <LuMapPin className="icon-footer" />
                  <span>Calle Ignacio Comonfort s/n, Col. Centro. Palacio Municipal. Planta Baja.  C. P. 86600.</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginTop: 12 }}
                >
                  <LuClock className="icon-footer" />
                  <span>Lunes a Viernes de 8:30 am a 15:30 y sábados de 9:30 a 12:30 horas.</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginTop: 12 }}>
                  <LuPhone className='icon-footer' />
                  <span>933 114 00 00</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginTop: 12 }}
                >
                  <LuMail className='icon-footer' />
                  <span>transpayuntamientoparaiso@gmail.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="title-footer">Teléfonos de Emergencia</h3>
              <div className="contactos">
                <div className="contactos-info">
                  <LuTriangleAlert className="icon-footer" />
                  <div>
                    <div className="contactos-info-title">Emergencias</div>
                    <div>911</div>
                  </div>
                </div>
                <div className="contactos-info">
                  <LuShield className="icon-footer" />
                  <div>
                    <div className="contactos-info-title">Denuncia Ciudadana</div>
                    <div>089</div>
                  </div>
                </div>
                <div className="contactos-info">
                  <LuTruck className="icon-footer" />
                  <div>
                    <div className="contactos-info-title">Tránsito Municipal</div>
                    <div>933 334 1219</div>
                  </div>
                </div>
                <div className="contactos-info">
                  <LuShield className="icon-footer" />
                  <div>
                    <div className="contactos-info-title">Policía Estatal</div>
                    <div>933 334 1601</div>
                  </div>
                </div>
                <div className="contactos-info">
                  <LuFireExtinguisher className="icon-footer" />
                  <div>
                    <div className="contactos-info-title">Bomberos</div>
                    <div>933 315 5670</div>
                  </div>
                </div>
                <div className="contactos-info">
                  <LuAmbulance className="icon-footer" />
                  <div>
                    <div className="text-[#F26C0D] font-medium">Cruz Roja</div>
                    <div>933 334 3004</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container-derechos">
        <div className="container">
          <div className="container-derechos-box">
            <div>© 2025 - Portal del H. Ayuntamiento de Paraíso</div>
            <div className="container-derechos-links">
              <a className="derechos-links"
                href="/aviso-privacidad">
                Aviso de Privacidad</a>
              <a className="derechos-links" href="/politicas-seguridad">
                Políticas de Seguridad</a>
              <a className="derechos-links"
                href="/accesibilidad">Accesibilidad</a></div>
          </div>
        </div>
      </div>
    </footer>
  )
}     