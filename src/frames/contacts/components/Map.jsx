import React from 'react';
import Store from '../../../utils/Store';

const Map = () => {

    const offDrag = (e) => {
        e.stopPropagation()
        Store.setListener('offDrag', false)
    }

    return (
        <div className='map_container' >
            <iframe
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()} 
                onMouseMove={(e) => offDrag(e)}
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A72cf5badc989ecb7191581bf96b752e1b4bc53ebeff3e89bff65e6bdccc2bc82&amp;source=constructor" width="100%" height="100%" frameborder="0"
            >
            </iframe>
        </div>
    );
};

export default Map;