import { useEffect, useState } from 'react'
import '../style/Galeria.css'
export const Galeria = ({ imagenes }: any) => {
    // Estado para saber si el modal está abierto o cerrado
    const [modalAbierto, setModalAbierto] = useState(false);
    // Estado para saber el índice de la imagen actual que se muestra en el modal
    const [imagenActualIndex, setImagenActualIndex] = useState(0);

    // Función para abrir el modal con una imagen específica
    const abrirModal = (index: any) => {
        setImagenActualIndex(index);
        setModalAbierto(true);
    };

    // Función para cerrar el modal
    const cerrarModal = () => {
        setModalAbierto(false);
    };

    // Función para mostrar la imagen siguiente
    const pasarSiguiente = () => {
        // Usamos el operador de módulo (%) para volver al inicio si llegamos al final
        setImagenActualIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    };

    // Función para mostrar la imagen anterior
    const pasarAnterior = () => {
        // Lógica para ir a la última imagen si estamos en la primera
        setImagenActualIndex((prevIndex) =>
            (prevIndex - 1 + imagenes.length) % imagenes.length
        );
    };

    // Efecto para manejar la navegación con teclado
    useEffect(() => {
        const handleKeyDown = (e: any) => {
            if (!modalAbierto) return;

            if (e.key === 'ArrowRight') {
                pasarSiguiente();
            } else if (e.key === 'ArrowLeft') {
                pasarAnterior();
            } else if (e.key === 'Escape') {
                cerrarModal();
            }
        };

        // Añadimos el listener cuando el componente se monta
        window.addEventListener('keydown', handleKeyDown);

        // Limpiamos el listener cuando el componente se desmonta para evitar fugas de memoria
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalAbierto, pasarSiguiente, pasarAnterior]); // Dependencias del efecto

    return (
        <div>
            {/* Cuadrícula de miniaturas */}
            <div className="galeria-grid">
                {imagenes.map((imagen: any, index: number) => (
                    <div key={imagen.id} className="galeria-item" onClick={() => abrirModal(index)}>
                        <img src={imagen.src} alt={imagen.alt} />
                    </div>
                ))}
            </div>

            {/* Modal que se muestra condicionalmente */}
            {modalAbierto && (
                <div className="modal-overlay" onClick={cerrarModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-cerrar" onClick={cerrarModal}>×</button>
                        <button className="modal-anterior" onClick={pasarAnterior}>❮</button>

                        <img
                            src={imagenes[imagenActualIndex].src}
                            alt={imagenes[imagenActualIndex].alt}
                            className="modal-imagen"
                        />

                        <button className="modal-siguiente" onClick={pasarSiguiente}>❯</button>
                    </div>
                </div>
            )}
        </div>
    );
};