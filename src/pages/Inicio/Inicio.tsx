
import 'swiper/swiper-bundle.css'

import { SwiperInicio } from './components/SwiperInicio'
import { CartasInicio } from './components/CartasInicio'
export default function Inicio() {
    return (
        <div>
            <SwiperInicio />
            <div className="container">
            <CartasInicio /> 

            </div>
        </div >
    )
}
