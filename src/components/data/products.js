import MotorMasla from '../../assetsImage/assets_transport_vnedorojnaya/моторные_масла.png'
import Jidkosti from '../../assetsImage/assets_transport_vnedorojnaya/титан.png'

const products = {
    motor_masla: {
      name: 'Моторные масла',
      items: [
        { id: '1', 
          name: 'Моторноое масло топ', 
          image: MotorMasla,
          price: '11111₽',
          description: 'топ товар всем советую топ товар всем советую топ товар всем советую топ товар всем советую топ товар всем советую топ товар всем советую топ товар всем советуютоп товар всем советую',
          specifications:  'Спецификация топ',
          approvals:  'Одобрения топчик',
          recommendations: 'Рекомендации топпп'
        },
        { id: '12', 
          name: 'text', 
          image: MotorMasla 
        },
        { id: '123', 
          name: 'Моторные масла', 
          image: MotorMasla 
        },
        { id: '1234', 
          name: 'text', 
          image: MotorMasla 
        },
        { id: '12345', 
          name: 'Моторные масла', 
          image: MotorMasla 
        },
        { id: '123456', 
          name: 'text', 
          image: MotorMasla 
        },
        { id: '1234567', 
          name: 'Моторные масла', 
          image: MotorMasla 
        },
      ],
    },
    transmission_oils: {
      name: 'Трансмиссионные масла',
      items: [
        { id: 'tshirt', name: 'T-Shirt' },
        { id: 'jeans', name: 'Jeans' },
        { id: '1234', name: 'text', image: Jidkosti },
      ],
    },
  };

  export default products;
  