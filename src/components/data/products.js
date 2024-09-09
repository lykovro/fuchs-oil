import MotorMasla from '../../assetsImage/assets_transport_vnedorojnaya/моторные_масла.png'
import Jidkosti from '../../assetsImage/assets_transport_vnedorojnaya/титан.png'

import Anticorrosion from '../../assetsImage/assets_transport_vnedorojnaya/титан.png'
import CoolingLubricants from '../../assetsImage/assets_transport_vnedorojnaya/титан.png'
import FireResistantOils from '../../assetsImage/assets_transport_vnedorojnaya/титан.png'
import Cleaners from '../../assetsImage/assets_transport_vnedorojnaya/титан.png'
import MetalworkingOils from '../../assetsImage/assets_transport_vnedorojnaya/титан.png'
import CastingCompounds from '../../assetsImage/assets_transport_vnedorojnaya/титан.png'




const products = {
    motor_masla: {
      name: 'Моторные масла',
      items: [
        { id: 'TITAN_UNIMAX_CH_5W-40_MC', 
          name: 'TITAN UNIMAX CH 5W-40 MC', 
          image: MotorMasla,
          price: '11111 ₽',
          description: 'Всесезонное моторное масло на базе МС-технологии для дизельных двигателей тяжелой техники',
          specifications:  'API CH-4',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UNIMAX_CI_5W-40_MC', 
          name: 'TITAN UNIMAX CI 5W-40 MC', 
          image: MotorMasla,
          price: '11111 ₽',
          description: 'Всесезонное моторное масло на базе МС-технологии для дизельных двигателей тяжелой техники',
          specifications:  'API CH-4',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UNIMAX_HD_10W-30_MC', 
          name: 'TITAN UNIMAX HD 10W-30 MC', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Моторное масло для высоконагруженных дизельных двигателей коммерческого транспорта и внедорожной техники',
          specifications:  'ACEA E9/E7/E6 API CJ-4/SN CAT ECF-3 JACO DH-2',
          approvals:  '',
          recommendations: 'Cummins CES 20081 Detroit Diesel DDC 93K218 Deutz DQC IV-10 LA Mack EO-M Plus MAN M 3271-1 / M 3477/ M 3677 MB 228.31/ 228.51 MTU Type 3.1 Renault RLD-3 Volvo VDS-4 / CNG',
        },
        { id: 'TITAN_UNIMAX_HD_10W-40_MC', 
          name: 'TITAN UNIMAX HD 10W-40 MC', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Моторное масло для высоконагруженных дизельных двигателей коммерческого транспорта и внедорожной техники',
          specifications:  'ACEA E9/E7/E6 API CJ-4/SN CAT ECF-3 JACO DH-2',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UNIMAX_HD_15W-40', 
          name: 'TITAN UNIMAX HD 15W-40', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Моторное масло для высоконагруженных дизельных двигателей коммерческого транспорта и внедорожной техники',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UNIMAX_HD_5W-30_MC', 
          name: 'TITAN UNIMAX HD 5W-30 MC', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Моторное масло для высоконагруженных дизельных двигателей коммерческого транспорта и внедорожной техники',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },

        { id: 'TITAN_UNIMAX_LD_10W-40', 
          name: 'TITAN UNIMAX LD 10W-40', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высокоэффективное моторное масло для коммерческого транспорта, добывающей и строительной техники',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UNIMAX_MP_10W-40_MC', 
          name: 'TITAN UNIMAX MP 10W-40 MC', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высокоэффективное моторное масло для коммерческого транспорта, добывающей и строительной техники, а также лёгких грузовиков и легковых автомобилей',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UNIVERSAL_CI_10W-30_MC', 
          name: 'TITAN UNIVERSAL CI 10W-30 MC', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Всесезонное моторное масло для дизельных двигателей тяжелой техники',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UNIVERSAL_CI_10W-40_MC', 
          name: 'TITAN UNIVERSAL CI 10W-40 MC', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Всесезонное моторное масло для дизельных двигателей тяжелой техники',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UNIVERSAL_CI_15W-40', 
          name: 'TITAN UNIVERSAL CI 15W-40', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Всесезонное моторное масло для дизельных и бензиновых двигателей.',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UNIVERSAL_CK_15W-40', 
          name: 'TITAN UNIVERSAL CK 15W-40', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Топливосберегающее моторное масло премиум-класса для высоконагруженных дизельных двигателей коммерческого транспорта и внедорожной техники.',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UNIVERSAL_HP_10W-30', 
          name: 'TITAN UNIVERSAL HP 10W-30', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Всесезонное моторное масло для дизельных и бензиновых двигателей',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UNIVERSAL_HP_10W-40', 
          name: 'TITAN UNIVERSAL HP 10W-40', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Всесезонное моторное масло для дизельных и бензиновых двигателей',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UNIVERSAL_HP_15W-40', 
          name: 'TITAN UNIVERSAL HP 15W-40', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Всесезонное моторное масло для дизельных и бензиновых двигателей',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UTTO_10W-30', 
          name: 'TITAN UTTO 10W-30', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высокоэффективное многофункциональное масло для трансмиссий и гидравлических систем сельскохозяйственной и строительной техники',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UTTO_TO-4_SAE_10W', 
          name: 'TITAN UTTO TO-4 SAE 10W', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высокоэффективное многофункциональное трансмиссионное масло для строительной техники',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_UNIVERSAL_CI_15W-40', 
          name: 'TITAN UNIVERSAL CI 15W-40', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Всесезонное моторное масло для дизельных двигателей',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
      ],
    },
    transmission_oils: {
      name: 'Трансмиссионные масла',
      items: [
        { id: 'TITAN_ATF_DII', 
          name: 'TITAN ATF DII', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Жидкость ATF класса DEXRON II (D) для всех автоматических коробок передач грузовых автомобилей, внедорожной техники и легковых автомобилей, согласно предписаниям производителя.',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_ATF_DIII', 
          name: 'TITAN ATF DIII', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Жидкость для автоматический трансмиссий ультравысокого уровня потребительских свойств спецификации DEXRON III',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_GANYMET_PRO_LA', 
          name: 'TITAN GANYMET PRO LA', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Низкозольное моторное масло для стационарных газовых двигателей с улучшенными эксплуатационными характеристиками',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_GEAR_GL5_90_LS', 
          name: 'TITAN GEAR GL5 90 LS', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высокоэффективное универсальное трансмиссионное масло для механических коробок передач и ведущих мостов, в том числе с самоблокирующимися дифференциалами (LS=Limited Slip)',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_SUPERGEAR_GL5_SAE_75W-90', 
          name: 'TITAN SUPERGEAR GL5 SAE 75W-90', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высококачественное трансмиссионное масло с удлиненным интервалом замены',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_SUPERGEAR_GL4_80W-90', 
          name: 'TITAN SUPERGEAR GL4 80W-90', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Трансмиссионное масло для механических коробок передач',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_STOU _MC_SAE_10W-30', 
          name: 'TITAN STOU MC SAE 10W-30', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высококачественное универсальное масло класса STOU/MFO для применения в двигателях, гидросистемах, «мокрых» тормозах и узлах трансмиссий тракторов и другой сельскохозяйственной техники.',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_STOU_SAE_15W-40', 
          name: 'TITAN STOU SAE 15W-40', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высококачественное универсальное масло класса STOU/MFO для применения в двигателях, гидросистемах, «мокрых» тормозах и узлах ттрансмиссий тракторов и другой сельскохозяйственной техники.',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_GEAR_GL5_90', 
          name: 'TITAN GEAR GL5 90', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высокоэффективное универсальное трансмиссионное масло для механических коробок передач и ведущих мостов',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN TO-4', 
          name: 'TITAN TO-4', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Серия высокоэффективных многофункциональных трансмиссионных масел для строительной техники',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_SUPERGEAR_GL5_80W-90', 
          name: 'TITAN SUPERGEAR GL5 80W-90', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высококачественное трансмиссионное масло с удлиненным интервалом замены',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_SUPERGEAR_GL5_SAE_85W-140', 
          name: 'TITAN SUPERGEAR GL5 SAE 85W-140', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высококачественное трансмиссионное масло с удлиненным интервалом замены',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_SUPERGEAR_HYP-R_75W-90_GL5', 
          name: 'TITAN SUPERGEAR HYP-R 75W-90 GL5', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высококачественное трансмиссионное масло с удлиненным интервалом замены',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_SUPERGEAR_HYP-R_80W-90_GL5', 
          name: 'TITAN SUPERGEAR HYP-R 80W-90 GL5', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высококачественное трансмиссионное масло с удлиненным интервалом замены',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_SUPERGEAR_HYP-R_85W-140_GL5', 
          name: 'TITAN SUPERGEAR HYP-R 85W-140 GL5', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Трансмиссионное масло для ведущих мостов и коробок передач с удлиненным интервалом замены',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_SUPERGEAR_HYP-R_90_GL5', 
          name: 'TITAN SUPERGEAR HYP-R 90 GL5', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высокоэффективное универсальное трансмиссионное масло для механических коробок передач и ведущих мостов',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_SUPERGEAR_MP-R_75W-90_GL4', 
          name: 'TITAN SUPERGEAR MP-R 75W-90 GL4', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'rВuыс 2ок0оэ2ф2ф ективное универсальное трансмиссионное масло для механических коробок передач и ведущих мостов',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
        { id: 'TITAN_THF_10W-30_MC', 
          name: 'TITAN THF 10W-30 MC', 
          image: MotorMasla ,
          price: '11111 ₽',
          description: 'Высокоэффективное многофункциональное масло для трансмиссий и гидравлических систем сельскохозяйственной и строительной техники.',
          specifications:  '',
          approvals:  '',
          recommendations: ''
        },
      ],
    },
    anticorrosion_compounds: {
      name: 'Антикоррозионные составы',
      items: [
          { id: 'ANTICORIT_DFW_9350', name: 'ANTICORIT DFW 9350', image: Anticorrosion, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
          { id: 'ANTICORIT_RPC_5050', name: 'ANTICORIT RPC 5050', image: Anticorrosion, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
          { id: 'ANTICORIT_RPO_3050', name: 'ANTICORIT RPO 3050', image: Anticorrosion, price: '', description: '', specifications: '', approvals: '', recommendations: '' }
      ]
  },
  cooling_lubricants: {
    name: 'Смазочно-охлаждающие жидкости (СОЖ)',
    items: [
        { id: 'ECOCOOL_68_VR_3', name: 'Ecocool 68 VR 3', image: CoolingLubricants, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
        { id: 'ECOCOOL_69_VR', name: 'Ecocool 69 VR', image: CoolingLubricants, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
        { id: 'ECOCOOL_2510_VR', name: 'Ecocool 2510 VR', image: CoolingLubricants, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
        { id: 'ECOCOOL_EC_VR', name: 'Ecocool EC VR', image: CoolingLubricants, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
        { id: 'ECOCOOL_SOLUBLE_30_VR', name: 'Ecocool Soluble 30 VR', image: CoolingLubricants, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
        { id: 'ECOCOOL_SOLUBLE_ER', name: 'Ecocool Soluble ER', image: CoolingLubricants, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
        { id: 'RATAK_VR', name: 'RATAK VR', image: CoolingLubricants, price: '', description: '', specifications: '', approvals: '', recommendations: '' }
    ]
},
fire_resistant_hydraulic_oils: {
  name: 'Огнестойкие и гидравлические масла',
  items: [
      { id: 'ECOCUT_VR_1520', name: 'ECOCUT VR 1520', image: FireResistantOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'HYDROTHERM_R_46', name: 'HYDROTHERM R 46', image: FireResistantOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'PLANTOFLUX_R', name: 'PLANTOFLUX R', image: FireResistantOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'RENOLIN_AW_32_XLT', name: 'RENOLIN AW 32 XLT', image: FireResistantOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'RENOLIN_AW_HVI', name: 'RENOLIN AW HVI', image: FireResistantOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'RENOLIN_AW_ZAF_HVI', name: 'RENOLIN AW ZAF HVI', image: FireResistantOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'RENOLIN_COMP_MC', name: 'RENOLIN COMP MC', image: FireResistantOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' }
  ]
},
cleaners_flush_compounds: {
  name: 'Очистители и промывочные составы',
  items: [
      { id: 'RENOCLEAN_FTB_3504', name: 'RENOCLEAN FTB 3504', image: Cleaners, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'RENOCLEAN_FTB_4504', name: 'RENOCLEAN FTB 4504', image: Cleaners, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'RENOCLEAN_MTA_3504', name: 'RENOCLEAN MTA 3504', image: Cleaners, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'RENOCLEAN_SMCR', name: 'RENOCLEAN SMCR', image: Cleaners, price: '', description: '', specifications: '', approvals: '', recommendations: '' }
  ]
},

metalworking_oils: {
  name: 'Масла для обработки металлов',
  items: [
      { id: 'RENOFORM_BCO_4513', name: 'RENOFORM BCO 4513', image: MetalworkingOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'RENOFORM_BCO_5513', name: 'RENOFORM BCO 5513', image: MetalworkingOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'RENOFORM_BYV_1531', name: 'RENOFORM BYV 1531', image: MetalworkingOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'RENOFORM_BYV_2511', name: 'RENOFORM BYV 2511', image: MetalworkingOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'RENOFORM_DMW_3003R', name: 'RENOFORM DMW 3003R', image: MetalworkingOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'RENOFORM_DMW_5571', name: 'RENOFORM DMW 5571', image: MetalworkingOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'RENOFORM_TYW_4561', name: 'RENOFORM TYW 4561', image: MetalworkingOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'RENOFORM_TYW_5562', name: 'RENOFORM TYW 5562', image: MetalworkingOils, price: '', description: '', specifications: '', approvals: '', recommendations: '' }
  ]
},
pressure_casting_compounds: {
  name: 'Составы для обработки давлением и литья',
  items: [
      { id: 'LUBRODAL_C_80_S', name: 'LUBRODAL C 80 S', image: CastingCompounds, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'LUBRODAL_C_100_S', name: 'LUBRODAL C 100 S', image: CastingCompounds, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'LUBRODAL_F_133_S', name: 'LUBRODAL F 133 S', image: CastingCompounds, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'LUBRODAL_F_525_S', name: 'LUBRODAL F 525 S', image: CastingCompounds, price: '', description: '', specifications: '', approvals: '', recommendations: '' },
      { id: 'LUBRODAL_R_150_S', name: 'LUBRODAL R 150 S', image: CastingCompounds, price: '', description: '', specifications: '', approvals: '', recommendations: '' }
  ]
}
  };

  export default products;
  