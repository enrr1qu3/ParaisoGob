import { useState, useRef, useCallback } from "react";
import { Modal, ConfigProvider, Button } from 'antd';
import { DownloadOutlined, ZoomInOutlined, ZoomOutOutlined, UndoOutlined } from '@ant-design/icons';

export const ReleaseComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });
    const posStart = useRef({ x: 0, y: 0 });

    const handleCancel = () => {
        setIsModalOpen(false);
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/MAPATURISTICOQR.webp';
        link.download = 'MapaTuristicoParaiso.webp';
        link.click();
    };

    const handleWheel = useCallback((e: React.WheelEvent) => {
        e.preventDefault();
        setScale(prev => {
            const newScale = prev + (e.deltaY > 0 ? -0.15 : 0.15);
            return Math.min(Math.max(newScale, 1), 5);
        });
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale <= 1) return;
        setIsDragging(true);
        dragStart.current = { x: e.clientX, y: e.clientY };
        posStart.current = { ...position };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setPosition({
            x: posStart.current.x + (e.clientX - dragStart.current.x),
            y: posStart.current.y + (e.clientY - dragStart.current.y),
        });
    };

    const handleMouseUp = () => setIsDragging(false);

    const resetZoom = () => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Modal: {
                        contentBg: "#d5d5d5"
                    },
                },
            }}
        >
            <Modal
                open={isModalOpen}
                onOk={handleCancel}
                onCancel={handleCancel}
                footer={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: 8 }}>
                            <Button icon={<ZoomInOutlined />} onClick={() => setScale(prev => Math.min(prev + 0.3, 5))} />
                            <Button icon={<ZoomOutOutlined />} onClick={() => { setScale(prev => { const n = Math.max(prev - 0.3, 1); if (n === 1) setPosition({ x: 0, y: 0 }); return n; }); }} />
                            <Button icon={<UndoOutlined />} onClick={resetZoom} />
                        </div>
                        <Button
                            type="primary"
                            icon={<DownloadOutlined />}
                            onClick={handleDownload}
                        >
                            Descargar mapa
                        </Button>
                    </div>
                }
                width={900}
            >
                <div
                    style={{
                        overflow: 'hidden',
                        cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                    }}
                    onWheel={handleWheel}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <img
                        alt="Mapa Turístico de Paraíso"
                        src="/MAPATURISTICOQR.webp"
                        draggable={false}
                        style={{
                            width: '100%',
                            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                            transformOrigin: 'center center',
                            transition: isDragging ? 'none' : 'transform 0.2s ease',
                            userSelect: 'none',
                        }}
                    />
                </div>
            </Modal>
        </ConfigProvider>
    );
};
