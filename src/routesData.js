import React, { useStateб  } from 'react';
import { useSpring, animated } from 'react-spring';
import Index from './components/index';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Contacts from './components/contacts'
import Catalog from './components/catalog'
import News from './components/news/news'
import News1 from './components/news/news_1'
import Partners from './components/partners'
import KorpPolitic from './components/politik_confidens'
import TransportVnedorojnaya from './components/catalog/transport_vnedorojnaya'
import About from './components/about'
import MotorMasla from './components/catalog/transport_vnedorojnaya/motor_masla/motor_masla'
import IndustrialMaterial from './components/catalog/industrialnye_smazochnie_materials'
import News2 from './components/news/news_2'
import News3 from './components/news/news_3'
import News4 from './components/news/news_4'
import News5 from './components/news/news_5'
import News6 from './components/news/news_6'
import TransMasla from './components/catalog/transport_vnedorojnaya/trans_masla/transmissionnie_masla'
import JidkostiGur from './components/catalog/transport_vnedorojnaya/jidkosti_gur/jidkosti_gur'
import TraktMasla from './components/catalog/transport_vnedorojnaya/universal_traktor/universal_traktor_masla'
import MotorMaslaLegkovie from './components/catalog/transport_vnedorojnaya/motor_masla/motor_masla_legkovie'
import JidkostiAkpp from './components/catalog/transport_vnedorojnaya/jidkosti_akpp/jidkosti_akpp'
import AvtoPlastichnieSmazki from './components/catalog/transport_vnedorojnaya/auto_plastichnie_smazki/avto_plastichnie_smazki'
import Antifriz from './components/catalog/transport_vnedorojnaya/antifriz/antifriz'
import ObsheIndustrial from './components/catalog/industrialnie_smazochnie/obsheindustrialnie_product'
import SmazochnoOhlajdaushie from './components/catalog/industrialnie_smazochnie/smazochno_ohlajdaushie'
import HeaderIndex from './components/header_index';
import Header from './components/header'
import Solution from './components/solutions/solutions'
import MettalurgiaMachine from './components/solutions/mettalurgia_machine'
import HimGornodobivaushaya from './components/solutions/him_gornodobivaushaya'
import SelskoeHozyaistvo from './components/solutions/selskoehozyaystvo'
import KomTrans from './components/solutions/kom_trans'
import LegkovoyTransport from './components/solutions/legkovoy_trans'
import StroyProm from './components/solutions/stroitelnaya_prom'
import DerevoObrProm from './components/solutions/dereobrabativaushaya_prom'
import Energetik from './components/solutions/energetika'












const routesData = [
   
    { path: '/fuchs-oil/', component: Index, header: HeaderIndex },
    { path: '/index', component: Index, header: HeaderIndex },
    { path: '/contacts', component: Contacts, header: Header },
    { path: '/catalog', component: Catalog, header: Header },
    { path: '/catalog/transport_vnedorojnaya', component: TransportVnedorojnaya, header: Header },
    { path: '/catalog/transport_vnedorojnaya/motor_masla', component: MotorMasla, header: Header  },
    { path: '/catalog/transport_vnedorojnaya/motor_masla/legkovie_avto', component: MotorMaslaLegkovie, header: Header  },
    { path: '/catalog/transport_vnedorojnaya/transmissionie_masla', component: TransMasla, header: Header  },
    { path: '/catalog/transport_vnedorojnaya/universal_traktor_masla', component: TraktMasla, header: Header  },
    { path: '/catalog/transport_vnedorojnaya/jidkosti_gur_gidrosistem', component: JidkostiGur, header: Header  },
    { path: '/catalog/transport_vnedorojnaya/jidkosti_akpp', component: JidkostiAkpp, header: Header  },
    { path: '/catalog/transport_vnedorojnaya/auto_plastichnie_smaski', component: AvtoPlastichnieSmazki, header: Header },
    { path: '/catalog/transport_vnedorojnaya/antifriz', component: Antifriz, header: Header  },
    { path: '/catalog/industrial_smasochnie_materials', component: IndustrialMaterial, header: Header  },
    { path: '/catalog/industrial_smasochnie_materials/obsheindustrial_product', component: ObsheIndustrial, header: Header  },
    { path: '/catalog/industrial_smasochnie_materials/smazochno_ohlajdaushie', component: SmazochnoOhlajdaushie, header: Header  },
    { path: '/news', component: News, header: Header  },
    { path: '/news/news_1', component: News1, header: Header  },
    { path: '/news/news_2', component: News2, header: Header  },
    { path: '/news/news_3', component: News3, header: Header  },
    { path: '/news/news_4', component: News4, header: Header },
    { path: '/news/news_5', component: News5, header: Header  },
    { path: '/news/news_6', component: News6, header: Header  },
    { path: '/partners', component: Partners, header: Header  },
    { path: '/corpolitic', component: KorpPolitic, header: Header  },
    { path: '/about', component: About, header: Header  },
    { path: '/solution', component: Solution, header: Header  },
    { path: '/solution/mattalurgia_machine', component: MettalurgiaMachine, header: Header  },
    { path: '/solution/khimicheskaya_promyshlennost', component: HimGornodobivaushaya, header: Header  },
    { path: '/solution/selskoe_khozyaystvo', component: SelskoeHozyaistvo, header: Header  },
    { path: '/solution/kommercheskiy_transport', component: KomTrans, header: Header  },
    { path: '/solution/legkovoy_avtotransport', component: LegkovoyTransport, header: Header  },
    { path: '/solution/promyshlennost_stroitelnykh_materialov', component: StroyProm, header: Header  },
    { path: '/solution/derevoobrabatyvayushchaya_promyshlennost', component: DerevoObrProm, header: Header  },
    { path: '/solution/energetika', component: Energetik, header: Header  },







  ];
  
  export default routesData;