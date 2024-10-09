import MotorMasla from '../../assetsImage/assets_transport_vnedorojnaya/моторные_масла.png'
import Jidkosti from '../../assetsImage/assets_transport_vnedorojnaya/титан.png'
import CompMc from '../../assetsImage/assets_news/COMP_MC.png'
import Kaluga from '../../assetsImage/assets_news/Конференция_в_Калуге.jpg'
import ANTICORIT from '../../assetsImage/assets_products_image/Gruppe_mit_IBC.jpg'

const categories = [
    { id: 'motor_masla', name: 'Моторные масла', image: MotorMasla },
    { id: 'transmission_oils', name: 'Трансмиссионные масла', image: Jidkosti },
    { id: 'anticorrosion_compounds', name: 'Антикоррозионные составы', image: MotorMasla },
    { id: 'antifreeze', name: 'Антифризы', image: MotorMasla },
    { id: 'cooling_lubricants', name: 'Смазочно-охлаждающие жидкости (СОЖ)', image: ANTICORIT },
    { id: 'fire_resistant_hydraulic_oils', name: 'Огнестойкие и гидравлические масла', image: ANTICORIT },
    { id: 'cleaners_flush_compounds', name: 'Очистители и промывочные составы', image: ANTICORIT },
    { id: 'metalworking_oils', name: 'Масла для обработки металлов', image: ANTICORIT },
    { id: 'pressure_casting_compounds', name: 'Составы для обработки давлением и литья', image: ANTICORIT },
  ];
  
  export default categories;