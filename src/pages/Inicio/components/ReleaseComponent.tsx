import { useState } from "react";
import { Modal, Image, ConfigProvider, Carousel } from 'antd';

export const ReleaseComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
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
                // closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={false}
            >
                <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>

                    <Image alt='comunicadoImg' src='/comunicado.jpg' preview={false} />
                </Carousel>
            </Modal>
        </ConfigProvider>

    );
};
