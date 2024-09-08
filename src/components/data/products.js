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
  