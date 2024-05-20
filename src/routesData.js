import React, { useStateб  } from 'react';
import { useSpring, animated } from 'react-spring';
import Index from './components/index';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';

import Photo from './assetsImage/assets/Rectangle.png'

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
import TransMaslaGruzovie from './components/catalog/transport_vnedorojnaya/trans_masla/transmissionnie_masla_gruzovie'
import TransMaslaLegkovie from './components/catalog/transport_vnedorojnaya/trans_masla/transmissionnie_masla_legkovie'



import JidkostiGur from './components/catalog/transport_vnedorojnaya/jidkosti_gur/jidkosti_gur'
import JidkostiGurGornihSamosvalov from './components/catalog/transport_vnedorojnaya/jidkosti_gur/masla_dlya_reduktorov_gornih_samosvalov'
import JidkostiGurNefteservisnogo from './components/catalog/transport_vnedorojnaya/jidkosti_gur/masla_dlya_reduktorov_nefteservicnogo_obor'



import TraktMasla from './components/catalog/transport_vnedorojnaya/universal_traktor/universal_traktor_masla'
import MotorMaslaLegkovie from './components/catalog/transport_vnedorojnaya/motor_masla/motor_masla_legkovie'
import MotorMaslaGruzovie from './components/catalog/transport_vnedorojnaya/motor_masla/motor_masla_gruzovie'
import MotorMaslaGazoobraznoe from './components/catalog/transport_vnedorojnaya/motor_masla/motor_masla_gazoobraznoe'


import JidkostiAkpp from './components/catalog/transport_vnedorojnaya/jidkosti_akpp/jidkosti_akpp'
import AvtoPlastichnieSmazki from './components/catalog/transport_vnedorojnaya/auto_plastichnie_smazki/avto_plastichnie_smazki'
import Antifriz from './components/catalog/transport_vnedorojnaya/antifriz/antifriz'

import ObsheIndustrial from './components/catalog/industrialnie_smazochnie/obsheindustrialnie_product/obsheindustrialnie_product'


import ObrabotkaMetallov from './components/catalog/industrialnie_smazochnie/dlya_obrabotki_metallov/dlya_obrabotki_metallov'
import ZashitaKorozii from './components/catalog/industrialnie_smazochnie/product_zachita_koroziya/product_zachita_koroziya'
import OchistkaPoverh from './components/catalog/industrialnie_smazochnie/dlya_ochistki_poverhnosti/dlya_ochistki_poverhnosti'
import TermaObrabotka from './components/catalog/industrialnie_smazochnie/dlya_termicheskoy_obrabotki/dlya_termicheskoy_obrabotki'
import BetonGazobeton from './components/catalog/industrialnie_smazochnie/razdel_sostav_beton_gazobeton/razdel_sostav_beton_gazobeton'




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

import productsData from './components/catalog/productData_industrial';
import productsDataNotGroup from './components/catalog/productData_industrial_notInGroup'
import productsDataGroup from './components/catalog/productData_group'
import KartochkaTovaraData from './components/catalog/kartochkaTovara_Data'


import ProductPage from './components/catalog/ProductPage';
import ProductPageNotGroup from './components/catalog/ProductPage_notInGroup'
import ProductsPage from './components/catalog/ProductsPage'
import KartochkaTovara from './components/catalog/kartochaktovara'

const routesData = [
   
    { path: '/fuchs-oil/', component: Index, header: HeaderIndex },
    { path: '/index', component: Index, header: HeaderIndex },
    { path: '/contacts', component: Contacts, header: Header },
    { path: '/catalog', component: Catalog, header: Header },

    
    { path: '/catalog/:category/:CategoryCatalogNameUrl/:productId', component: () => <ProductPage products={productsData} />, header: Header },
    { path: '/catalog/:category/:productId', component: () => <ProductPageNotGroup productsNoGroup={productsDataNotGroup} />, header: Header },
    { path: '/catalog/:CategoryId', component: () => <ProductsPage productsGroup={productsDataGroup} />, header: Header },
    { path: '/:tovarId', component: () => <KartochkaTovara tovarData={KartochkaTovaraData} />, header: Header },



    { path: '/catalog/transport_vnedorojnaya', component: TransportVnedorojnaya, header: Header },
    { path: '/catalog/transport_vnedorojnaya/motor_masla', component: MotorMasla, header: Header  },
    { path: '/catalog/transport_vnedorojnaya/motor_masla/legkovie_avto', component: MotorMaslaLegkovie, header: Header  },
    { path: '/catalog/transport_vnedorojnaya/motor_masla/gruzovie_avto', component: MotorMaslaGruzovie, header: Header  },
    { path: '/catalog/transport_vnedorojnaya/motor_masla/dlya_dvigateley_rabotayushchikh_na_gazoobraznom_toplive', component: MotorMaslaGazoobraznoe, header: Header  },


    { path: '/catalog/transport_vnedorojnaya/transmissionie_masla', component: TransMasla, header: Header  },
    { path: '/catalog/transport_vnedorojnaya/transmissionie_masla/dlya_gruzovykh_avtomobiley', component: TransMaslaGruzovie, header: Header  },
    { path: '/catalog/transport_vnedorojnaya/transmissionie_masla/dlya_legkovykh_avtomobiley', component: TransMaslaLegkovie, header: Header  },


    { path: '/catalog/transport_vnedorojnaya/universal_traktor_masla', component: TraktMasla, header: Header  },

    { path: '/catalog/transport_vnedorojnaya/jidkosti_gur_gidrosistem', component: JidkostiGur, header: Header  },
    { path: '/catalog/transport_vnedorojnaya/jidkosti_gur_gidrosistem/masla_dlya_reduktorov_gornykh_samosvalov', component: JidkostiGurGornihSamosvalov, header: Header  },
    { path: '/catalog/transport_vnedorojnaya/jidkosti_gur_gidrosistem/masla_dlya_reduktorov_nefteservisnogo_oborudovaniya_svp_privody', component: JidkostiGurNefteservisnogo, header: Header  },



    { path: '/catalog/transport_vnedorojnaya/jidkosti_akpp', component: JidkostiAkpp, header: Header  },
    { path: '/catalog/transport_vnedorojnaya/auto_plastichnie_smaski', component: AvtoPlastichnieSmazki, header: Header },
    { path: '/catalog/transport_vnedorojnaya/antifriz', component: Antifriz, header: Header  },



    { path: '/catalog/industrial_smasochnie_materials', component: IndustrialMaterial, header: Header  },

    { path: '/catalog/industrial_smasochnie_materials/obsheindustrial_product', component: ObsheIndustrial, header: Header  },








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
  
  export default routesData