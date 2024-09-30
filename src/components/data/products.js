import MotorMasla from '../../assetsImage/assets_transport_vnedorojnaya/моторные_масла.png'
import Jidkosti from '../../assetsImage/assets_transport_vnedorojnaya/титан.png'
import TITAN_ATF_DII from '../../assetsImage/assets_products_image/TITAN-ATF_DII_1L_1080x1080.png'
import TITAN_ATF_DIII from '../../assetsImage/assets_products_image/TITAN-ATF_DIII_1L_1080x1080.png'
import TITAN_THF_10W_30_MC from '../../assetsImage/assets_products_image/Bochka-i-kanistra-04.03.2024.jpg'

import ANTICORIT from '../../assetsImage/assets_products_image/Gruppe_mit_IBC.jpg'

const importAll = (r) => r.keys().map(r);

const documents = importAll(require.context('../../products', false, /\.pdf$/));






const products = {
    motor_masla: {
      name: 'Моторные масла',
      items: [
        { id: 'TITAN_UNIMAX_CH_5W-40_MC', 
          name: 'TITAN UNIMAX CH 5W-40 MC', 
          image: MotorMasla,
          price: '',
          description: 'Всесезонное моторное масло на базе МС-технологии для дизельных двигателей тяжелой техники',
          specifications: ['SAE 5W-30', 'API SN', 'ACEA C3'], 
          approvals: ['BMW LL-04', 'MB 229.51', 'VW 504.00/507.00'], 
          recommendations: 'Может использоваться для дизельных и бензиновых двигателей',
          documentation: documents.find((doc) => doc.includes('TITAN_UNIMAX_CH_5W-40_MC')),
        },
        { id: 'TITAN_UNIMAX_CI_5W-40_MC', 
          name: 'TITAN UNIMAX CI 5W-40 MC', 
          image: MotorMasla,
          price: '',
          description: 'Всесезонное моторное масло на базе МС-технологии для дизельных двигателей тяжелой техники',
          specifications:  'API CI-4/CH-4',
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN UNIMAX CI 5W-40 MC')),
          
        },
        { id: 'TITAN_UNIMAX_HD_10W-30_MC', 
          name: 'TITAN UNIMAX HD 10W-30 MC', 
          image: MotorMasla ,
          price: '',
          description: 'Моторное масло для высоконагруженных дизельных двигателей коммерческого транспорта и внедорожной техники',
          specifications:  ['ACEA E9/E7/E6', 'API CJ-4/SN', 'CAT ECF-3', 'JACO DH-2'],
          approvals:  '',
          recommendations: ['Cummins CES 20081', 'Detroit Diesel DDC 93K218', 'Deutz DQC IV-10 LA', 'Mack EO-M Plus', 'MAN M 3271-1 / M 3477/ M 3677', 'MB 228.31/ 228.51', 'MTU Type 3.1', 'Renault RLD-3', 'Volvo VDS-4 / CNG'],
          documentation: documents.find((doc) => doc.includes('TITAN UNIMAX HD 10W-30 MC')),
        
        },
        { id: 'TITAN_UNIMAX_HD_10W-40_MC', 
          name: 'TITAN UNIMAX HD 10W-40 MC', 
          image: MotorMasla ,
          price: '',
          description: 'Моторное масло для высоконагруженных дизельных двигателей коммерческого транспорта и внедорожной техники',
          specifications:  ['ACEA E9/E7/E6', 'API CJ-4/SN', 'CAT ECF-3', 'JACO DH-2'],
          approvals:  '',
          recommendations: ['Cummins CES 20081', 'Detroit Diesel DDC 93K218', 'Deutz DQC IV-10 LA', 'Mack EO-M Plus', ' MAN M 3271-1 / M 3477/ M 3677', ' MB 228.31/ 228.51', 'MTU Type 3.1', 'Renault RLD-3', 'Volvo VDS-4 / CNG'],
          documentation: documents.find((doc) => doc.includes('TITAN UNIMAX HD 10W-40 MC')),
        },
        { id: 'TITAN_UNIMAX_HD_15W-40', 
          name: 'TITAN UNIMAX HD 15W-40', 
          image: MotorMasla ,
          price: '',
          description: 'Моторное масло для высоконагруженных дизельных двигателей коммерческого транспорта и внедорожной техники',
          specifications:  ['ACEA E9/E7', 'API CJ-4/SN', 'CAT ECF-3', 'JACO DH-2'],
          approvals:  '',
          recommendations: ['Cummins CES 20081', 'Detroit Diesel DDC 93K218', 'Deutz DQC IV-10 LA', 'Mack EO-M Plus', ' MAN M 3271-1 / M 3477/ M 3677', ' MB 228.31/ 228.51', 'MTU Type 3.1', 'Renault RLD-3', 'Volvo VDS-4 / CNG'],
          documentation: documents.find((doc) => doc.includes('TITAN UNIMAX HD 15W-40')),
        },
        { id: 'TITAN_UNIMAX_HD_5W-30_MC', 
          name: 'TITAN UNIMAX HD 5W-30 MC', 
          image: MotorMasla ,
          price: '',
          description: 'Моторное масло для высоконагруженных дизельных двигателей коммерческого транспорта и внедорожной техники',
          specifications:  ['ACEA E9/E7', 'API CJ-4/SN', 'CAT ECF-3', 'JACO DH-2'],
          approvals:  '',
          recommendations: ['Cummins CES 20081', 'Detroit Diesel DDC 93K218', 'Deutz DQC IV-10 LA', 'Mack EO-M Plus', 'MAN M 3271-1 / M 3477/ M 3677', 'MB 228.31/ 228.51', 'MTU Type 3.1', 'Renault RLD-3', 'Volvo VDS-4 / CNG'],
          documentation: documents.find((doc) => doc.includes('TITAN UNIMAX HD 5W-30 MC')),
        },

        { id: 'TITAN_UNIMAX_LD_10W-40', 
          name: 'TITAN UNIMAX LD 10W-40', 
          image: MotorMasla ,
          price: '',
          description: 'Высокоэффективное моторное масло для коммерческого транспорта, добывающей и строительной техники',
          specifications:  ['API CI-4', 'ACEA E7/E4', 'JASO DH-1'],
          approvals:  '',
          recommendations:  ['MB 228.5', 'MAN M 3277/3377', 'MTU TYPE 2/3', 'VOLVO VDS-3', 'MACK EO-N/EO-M Plus', 'Scania LDF-3', 'Cummins CES 20072/76/77/78', 'DD 93L215', 'Deutz DQC III-10,18 /IV-10,18'],
          documentation: documents.find((doc) => doc.includes('TITAN UNIMAX LD 10W-40')),
        },
        { id: 'TITAN_UNIMAX_MP_10W-40_MC', 
          name: 'TITAN UNIMAX MP 10W-40 MC', 
          image: MotorMasla ,
          price: '',
          description: 'Высокоэффективное моторное масло для коммерческого транспорта, добывающей и строительной техники, а также лёгких грузовиков и легковых автомобилей',
          specifications:  ['API CI-4/SL', 'ACEA E7-12'],
          approvals:  ['CAT ECF-1a/ECF-2', ' Global DHD-1', 'JASO DH-1', 'MB 228.3', 'MAN 3275', 'Volvo VDS-3', 'Deutz DQC-II/III', 'MTU DDC TYPE 2', 'Mack EO-M+/ EO-N', 'CUMMINS CES 20077/78', 'Renault RLD-2', 'DDC 93K215'],
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN UNIMAX MP 10W-40 MC')),
        },
        { id: 'TITAN_UNIVERSAL_CI_10W-30_MC', 
          name: 'TITAN UNIVERSAL CI 10W-30 MC', 
          image: MotorMasla ,
          price: '',
          description: 'Всесезонное моторное масло для дизельных двигателей тяжелой техники',
          specifications:  ['API CH-4/CI-4'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN UNIVERSAL CI 10W-30 MC')),
        },
        { id: 'TITAN_UNIVERSAL_CI_10W-40_MC', 
          name: 'TITAN UNIVERSAL CI 10W-40 MC', 
          image: MotorMasla ,
          price: '',
          description: 'Всесезонное моторное масло для дизельных двигателей тяжелой техники',
          specifications:  ['API CH-4/CI-4'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN UNIVERSAL CI 10W-40 MC')),
        },
        { id: 'TITAN_UNIVERSAL_CI_15W-40', 
          name: 'TITAN UNIVERSAL CI 15W-40', 
          image: MotorMasla ,
          price: '',
          description: 'Всесезонное моторное масло для дизельных и бензиновых двигателей.',
          specifications:  ['API CH-4/CI-4'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN UNIVERSAL CI 15W-40')),
        },
        { id: 'TITAN_UNIVERSAL_CK_15W-40', 
          name: 'TITAN UNIVERSAL CK 15W-40', 
          image: MotorMasla ,
          price: '',
          description: 'Топливосберегающее моторное масло премиум-класса для высоконагруженных дизельных двигателей коммерческого транспорта и внедорожной техники.',
          specifications:  ['API CK-4/CJ-4/ACEA E9'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN UNIVERSAL CK 15W-40')),
        },
        { id: 'TITAN_UNIVERSAL_HP_10W-30', 
          name: 'TITAN UNIVERSAL HP 10W-30', 
          image: MotorMasla ,
          price: '',
          description: 'Всесезонное моторное масло для дизельных и бензиновых двигателей',
          specifications:  ['API CI-4/SL'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN UNIVERSAL HP 10W-30')),
        },
        { id: 'TITAN_UNIVERSAL_HP_10W-40', 
          name: 'TITAN UNIVERSAL HP 10W-40', 
          image: MotorMasla ,
          price: '',
          description: 'Всесезонное моторное масло для дизельных и бензиновых двигателей',
          specifications:  ['API CI-4/SL'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN UNIVERSAL HP 10W-40')),
        },
        { id: 'TITAN_UNIVERSAL_HP_15W-40', 
          name: 'TITAN UNIVERSAL HP 15W-40', 
          image: MotorMasla ,
          price: '',
          description: 'Всесезонное моторное масло для дизельных и бензиновых двигателей',
          specifications: ['API CI-4/SL'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN UNIVERSAL HP 15W-40')),
        },
        { id: 'TITAN_UTTO_10W-30', 
          name: 'TITAN UTTO 10W-30', 
          image: MotorMasla ,
          price: '',
          description: 'Высокоэффективное многофункциональное масло для трансмиссий и гидравлических систем сельскохозяйственной и строительной техники',
          specifications:  ['API GL-4'],
          approvals:  ['JOHN DEERE JDM J20C / D', 'Case New Holland CNH MAT 3505, 3525, 3526', 'Vickers I286S, M2950S, M2952S', 'ESN M2C86B, C ', 'Allison C4', 'MASSEY FERGUSON CMS M 1145', 'CAT TO-2', 'White Q1826', 'Denison HF-0, HF1, HF 2', 'ZF TE ML 03E/F, 05F, 06E/F/K', 'ZF TE ML 17E, 21', 'Volvo VCE 1273.03 , WB 101', 'Vickers I286S,M2950S, M2952S', 'Allison C4', 'CAT TO-2', 'Denison HF-0, HF1, HF 2'],
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN UTTO 10W-30')),
        },
        { id: 'TITAN_UTTO_TO-4_SAE_10W', 
          name: 'TITAN UTTO TO-4 SAE 10W', 
          image: MotorMasla ,
          price: '',
          description: 'Высокоэффективное многофункциональное трансмиссионное масло для строительной техники',
          specifications:  ['API GL-4', 'CAT TO-4'],
          approvals:  '',
          recommendations: ['ALLISON C-4', 'KOMATSU KES 07.868.1'],
          documentation: documents.find((doc) => doc.includes('TITAN UTTO TO-4 SAE 10W')),
        },
        { id: 'TITAN_UNIVERSAL_CI_15W-40', 
          name: 'TITAN UNIVERSAL CI 15W-40', 
          image: MotorMasla ,
          price: '',
          description: 'Всесезонное моторное масло для дизельных двигателей',
          specifications:  ['API CI-4/SL'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN UNIVERSAL CI 15W-40')),
        },
      ],
    },
    transmission_oils: {
      name: 'Трансмиссионные масла',
      items: [
        { id: 'TITAN_ATF_DII', 
          name: 'TITAN ATF DII', 
          image: TITAN_ATF_DII ,
          price: '',
          description: 'Жидкость ATF класса DEXRON II (D) для всех автоматических коробок передач грузовых автомобилей, внедорожной техники и легковых автомобилей, согласно предписаниям производителя.',
          specifications:  '',
          approvals:  '',
          recommendations: ['DEXRON II (D)', 'ALLISON C-4', 'CAT TO-2', 'FORD MERCON'],
          documentation: documents.find((doc) => doc.includes('TITAN ATF DII')),
        },
        { id: 'TITAN_ATF_DIII', 
          name: 'TITAN ATF DIII', 
          image: TITAN_ATF_DIII ,
          price: '',
          description: 'Жидкость для автоматический трансмиссий ультравысокого уровня потребительских свойств спецификации DEXRON III',
          specifications:  ['DEXRON III'],
          approvals:  '',
          recommendations: ['ALLISON C-4', 'CAT TO-2', 'MERCON ATF'],
          documentation: documents.find((doc) => doc.includes('TITAN ATF DIII')),
        },
        { id: 'TITAN_GANYMET_PRO_LA', 
          name: 'TITAN GANYMET PRO LA', 
          image: MotorMasla ,
          price: '',
          description: 'Низкозольное моторное масло для стационарных газовых двигателей с улучшенными эксплуатационными характеристиками',
          specifications:  '',
          approvals:  ['CATERPILLAR TR 0199-99-12105', 'INNIO JENBACHER TA 1000-1109 - A, B: серии 2, 3, 4 (A, B), 6 (C, E)', 'MWM TR 0199-99-2105', 'ROLLS-ROYCE BERGEN B35:40, C26:33, K-G1, -G2, G3, -G4', 'WÄRTSILÄ GAS ENGINES 20DF, 31DF, 32DF, 34DF, 46DF, 50DF, 31SG, 34SG, 50SG, 34LPG'],
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN GANYMET PRO LA')),
        },
        { id: 'TITAN_GEAR_GL5_90_LS', 
          name: 'TITAN GEAR GL5 90 LS', 
          image: MotorMasla ,
          price: '',
          description: 'Высокоэффективное универсальное трансмиссионное масло для механических коробок передач и ведущих мостов, в том числе с самоблокирующимися дифференциалами (LS=Limited Slip)',
          specifications:  ['API GL-5'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN GEAR GL5 90 LS')),
        },
        { id: 'TITAN_SUPERGEAR_GL5_SAE_75W-90', 
          name: 'TITAN SUPERGEAR GL5 SAE 75W-90',
          image: MotorMasla ,
          price: '',
          description: 'Высококачественное трансмиссионное масло с удлиненным интервалом замены',
          specifications:  ['API GL-5', 'GB 13895-2018', 'SAE J306 75W-90'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN SUPERGEAR GL5 75W-90')),
        },
        { id: 'TITAN_SUPERGEAR_GL4_80W-90', 
          name: 'TITAN SUPERGEAR GL4 80W-90', 
          image: MotorMasla ,
          price: '',
          description: 'Трансмиссионное масло для механических коробок передач',
          specifications:  ['API GL-4', 'SAE J306 80W-90'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN SUPERGEAR GL4 80W-90')),
        },
        { id: 'TITAN_STOU _MC_SAE_10W-30', 
          name: 'TITAN STOU MC SAE 10W-30', 
          image: MotorMasla ,
          price: '',
          description: 'Высококачественное универсальное масло класса STOU/MFO для применения в двигателях, гидросистемах, «мокрых» тормозах и узлах трансмиссий тракторов и другой сельскохозяйственной техники.',
          specifications:  ['API GL-4'],
          approvals:  '',
          recommendations: ['ACEA E2, E3', 'API CG-4, CF-4, CF, CE, SF, SE', 'Allison C-4', 'Caterpillar TO-2', 'Ford ESN-M2C159-B/C, M2C134-D, M2C86-B/C', 'John Deere JDM J27, J20C, J20D', 'MAN 271', 'Massey Ferguson CMS M 1145, 1144, 1143, 1139, 1135', 'MB 228.3, 228.1, 227.1', 'MIL-L-2104D, MIL-L-2105D', 'Sperry Vickers / Eaton M2950S, I-280-S', 'ZF TE-ML 06A, 06B, 06C, 06D, 07B'],
          documentation: documents.find((doc) => doc.includes('TITAN STOU MC 10W-30')),
        },
        { id: 'TITAN_STOU_SAE_15W-40', 
          name: 'TITAN STOU SAE 15W-40', 
          image: MotorMasla ,
          price: '',
          description: 'Высококачественное универсальное масло класса STOU/MFO для применения в двигателях, гидросистемах, «мокрых» тормозах и узлах ттрансмиссий тракторов и другой сельскохозяйственной техники.',
          specifications:  ['API GL-4'],
          approvals:  '',
          recommendations: ['ACEA E2, E3', 'API CG-4, CF-4, CF, CE, SF, SE', 'Allison C-4', 'Caterpillar TO-2', 'Ford ESN-M2C159-B/C, M2C134-D, M2C86-B/C', 'John Deere JDM J27, J20C, J20D', 'MAN 271', 'Massey Ferguson CMS M 1145, 1144, 1143, 1139, 1135', 'MB 228.3, 228.1, 227.1', 'MIL-L-2104D, MIL-L-2105D', 'Sperry Vickers / Eaton M2950S, I-280-S', 'ZF TE-ML 06A, 06B, 06C, 06D, 07B'],
          documentation: documents.find((doc) => doc.includes('TITAN STOU 15W-40')),
        },
        { id: 'TITAN_GEAR_GL5_90', 
          name: 'TITAN GEAR GL5 90', 
          image: MotorMasla ,
          price: '',
          description: 'Высокоэффективное универсальное трансмиссионное масло для механических коробок передач и ведущих мостов',
          specifications:  ['API GL-5', 'SAE J306: 85W-90'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN GEAR GL5 90')),
        },
        { id: 'TITAN TO-4', 
          name: 'TITAN TO-4', 
          image: MotorMasla ,
          price: '',
          description: 'Серия высокоэффективных многофункциональных трансмиссионных масел для строительной техники',
          specifications: ['API GL-4'],
          approvals:  '',
          recommendations: ['CAT TO-4', 'ALLISON C-4', 'KOMATSU KES 07.868.1'],
          documentation: documents.find((doc) => doc.includes('TITAN TO-4 series ru 2021')),
        },
        { id: 'TITAN_SUPERGEAR_GL5_80W-90', 
          name: 'TITAN SUPERGEAR GL5 80W-90', 
          image: MotorMasla ,
          price: '',
          description: 'Высококачественное трансмиссионное масло с удлиненным интервалом замены',
          specifications:  ['API GL-5', 'GB 13895-2018', 'SAE J306 80W-90'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN SUPERGEAR GL5 80W-90 ru 2022')),
        },
        { id: 'TITAN_SUPERGEAR_GL5_SAE_85W-140', 
          name: 'TITAN SUPERGEAR GL5 SAE 85W-140', 
          image: MotorMasla ,
          price: '',
          description: 'Высококачественное трансмиссионное масло с удлиненным интервалом замены',
          specifications: ['API GL-5', 'GB 13895-2018', 'SAE J306 80W-90'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN SUPERGEAR GL5 85W-140 ru 2022')),
        },
        { id: 'TITAN_SUPERGEAR_HYP-R_75W-90_GL5', 
          name: 'TITAN SUPERGEAR HYP-R 75W-90 GL5', 
          image: MotorMasla ,
          price: '',
          description: 'Высококачественное трансмиссионное масло с удлиненным интервалом замены',
          specifications:  ['API GL-5', 'SAE J306 75W-90'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN SUPERGEAR HYP-R 75W-90 GL5 ru')),
        },
        { id: 'TITAN_SUPERGEAR_HYP-R_80W-90_GL5', 
          name: 'TITAN SUPERGEAR HYP-R 80W-90 GL5', 
          image: MotorMasla ,
          price: '',
          description: 'Высококачественное трансмиссионное масло с удлиненным интервалом замены',
          specifications:   ['API GL-5', 'SAE J306 80W-90'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN SUPERGEAR HYP-R 80W-90 GL5 ru')),
        },
        { id: 'TITAN_SUPERGEAR_HYP-R_85W-140_GL5', 
          name: 'TITAN SUPERGEAR HYP-R 85W-140 GL5', 
          image: MotorMasla ,
          price: '',
          description: 'Трансмиссионное масло для ведущих мостов и коробок передач с удлиненным интервалом замены',
          specifications:  ['API GL-5', 'SAE J306 85W-140'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN SUPERGEAR HYP-R 85W-140 GL5 ru')),
        },
        { id: 'TITAN_SUPERGEAR_HYP-R_90_GL5', 
          name: 'TITAN SUPERGEAR HYP-R 90 GL5', 
          image: MotorMasla ,
          price: '',
          description: 'Высокоэффективное универсальное трансмиссионное масло для механических коробок передач и ведущих мостов',
          specifications:  ['API GL-5', 'SAE J306: 85W-90'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN SUPERGEAR HYP-R 90 GL5 ru')),
        },
        { id: 'TITAN_SUPERGEAR_MP-R_75W-90_GL4', 
          name: 'TITAN SUPERGEAR MP-R 75W-90 GL4', 
          image: MotorMasla ,
          price: '',
          description: 'Трансмиссионное масло для механических коробок передач',
          specifications:  ['API GL-5', 'SAE J306 75W-90'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN SUPERGEAR MP-R 75W-90 GL4 ru')),
        },
        { id: 'TITAN_SUPERGEAR_MP-R_80W-90_GL4', 
          name: 'TITAN SUPERGEAR MP-R 80W-90 GL4', 
          image: MotorMasla ,
          price: '',
          description: 'Трансмиссионное масло для механических коробок передач',
          specifications:  ['API GL-5', 'SAE J306 80W-90'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN SUPERGEAR MP-R 80W-90 GL4 ru')),
        },
        { id: 'TITAN_THF_10W-30_MC', 
          name: 'TITAN THF 10W-30 MC', 
          image: TITAN_THF_10W_30_MC ,
          price: '',
          description: 'Высокоэффективное многофункциональное масло для трансмиссий и гидравлических систем сельскохозяйственной и строительной техники',
          specifications:  ['API GL-4', 'API GL-3', 'SAE 75W-80', 'SAE 75W', 'SAE 80 Гидравлические системы', 'DIN 51 524 часть 2 / 3: HLP / HLPD / HVLP / HVLPD', 'ISO VG 46 / 68 / 100 Тракторные трансмиссии, в т.ч. с «мокрыми» тормозами', 'SAE 10W-30', 'SAE 10W', 'SAE 30', 'THF / UTTO'],
          approvals:  '',
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('TITAN THF 10W-30 MC 2022')),
        },
        { id: 'TITAN_TO-4', 
          name: 'TITAN TO-4', 
          image: MotorMasla ,
          price: '',
          description: 'Серия высокоэффективных многофункциональных трансмиссионных масел для строительной техники',
          specifications:  ['API GL-4'],
          approvals:  '',
          recommendations: ['CAT TO-4', 'ALLISON C-4', 'KOMATSU KES 07.868.1 '],
          documentation: documents.find((doc) => doc.includes('TITAN TO-4 series ru 2021')),
        },
      ],
    },
    anticorrosion_compounds: {
      name: 'Антикоррозионные составы',
      items: [
          { id: 'ANTICORIT_DFW_9350', name: 'ANTICORIT DFW 9350', image: ANTICORIT, price: '', description: 'Антикоррозионный водовытесняющий состав', specifications: '', approvals: '', recommendations: '',
            documentation: documents.find((doc) => doc.includes('ANTICORIT DFW 9350 ru')), },
          { id: 'ANTICORIT_RPC_5050', name: 'ANTICORIT RPC 5050', image: ANTICORIT, price: '', description: 'Водосмешиваемый антикоррозионный состав', specifications: '', approvals: '', recommendations: '',
            documentation: documents.find((doc) => doc.includes('ANTICORIT RPC 5050 ru')), },
          { id: 'ANTICORIT_RPO_3050', name: 'ANTICORIT RPO 3050', image: ANTICORIT, price: '', description: 'Антикоррозионный состав', specifications: '', approvals: '', recommendations: '',
            documentation: documents.find((doc) => doc.includes('ANTICORIT RPO 3050 ru')), }
      ]
  },
  cooling_lubricants: {
    name: 'Смазочно-охлаждающие жидкости (СОЖ)',
    items: [
        { id: 'ECOCOOL_68_VR_3', name: 'Ecocool 68 VR 3', image: ANTICORIT, price: '', description: 'Высокоэффективная смазочно-охлаждающая жидкость,разработанная для обработки широкого спектра материалов', specifications: '', approvals: '', 
          recommendations: ['Токарные и фрезерные операции: 6-8%', 'Сверление: 8-14%', 'Шлифование: 5-7%'],
          documentation: documents.find((doc) => doc.includes('ECOCOOL 68 VR3 ru')), },
        { id: 'ECOCOOL_69_VR', name: 'Ecocool 69 VR', image: ANTICORIT, price: '', description: 'Ecocool 69 VR – это современная водосмешиваемая синтетическая смазочно-охлаждающая жидкость.', specifications: '', approvals: '', 
          recommendations: ['Токарные и фрезерные операции: 5-15%', 'Хонингование: 4-6%', 'Шлифование: 4-6%'],
          documentation: documents.find((doc) => doc.includes('ECOCOOL 69 VR ru')), },
        { id: 'ECOCOOL_2510_VR', name: 'Ecocool 2510 VR', image: ANTICORIT, price: '', description: 'Ecocool 2510 VR – высокотехнологичная водосмешиваемая многоцелевая полусинтетическая смазочно-охлаждающая жидкость.', specifications: '', approvals: '', 
          recommendations: ['Токарные и фрезерные операции: 5-7%', 'Шлифование: 4-5%'],
          documentation: documents.find((doc) => doc.includes('ECOCOOL 2510VR ru')), },
        { id: 'ECOCOOL_EC_VR', name: 'Ecocool EC VR', image: ANTICORIT, price: '', description: 'Ecocool EC VR – это современная водосмешиваемая смазочно-охлаждающая жидкость без содержания бора и вторичных аминов, с высокими моющими свойствами.', specifications: '', approvals: '', 
          recommendations: ['Токарные и фрезерные операции: 5–10%', 'Шлифование: 4%', 'Чугун, сталь: 4–10%'],
          documentation: documents.find((doc) => doc.includes('ECOCOOL EC VR ru')), },
        { id: 'ECOCOOL_SOLUBLE_30_VR', name: 'Ecocool Soluble 30 VR', image: ANTICORIT, price: '', description: 'Ecocool Soluble 30 VR – это современнаяполусинтетическая водосмешиваемая смазочно охлаждающая жидкость с низким содержанием минерального масла, предназначенная длямногофункционального использования приобработке чугуна, конструкционных и среднелегированных сталей.', specifications: '', approvals: '', 
          recommendations: ['Токарные и фрезерные операции: 4–7%', 'Сложные операции резания: до 10%', 'Шлифование: 3–4%', 'Чугун, сталь: 4–6%', 'Алюминий: 8–10%'], 
          documentation: documents.find((doc) => doc.includes('ECOCOOL SOLUBLE 30 VR ru')), },
        { id: 'ECOCOOL_SOLUBLE_ER', name: 'Ecocool Soluble ER', image: ANTICORIT, price: '', description: 'Ecocool Soluble ER – мелкодисперсная современная смазочно-охлаждающая жидкость,созданная на базе новейших российских компонентов для обработки широкого списка материалов.', specifications: '', approvals: '', 
          recommendations: ['Токарные, фрезерные операции: 5-8%', 'Сверление: 8-14%', 'Шлифование: 3–4%', 'Шлифование: около: 4-6%'],
          documentation: documents.find((doc) => doc.includes('Ecocool Soluble ER')), },
        { id: 'RATAK_VR', name: 'RATAK VR', image: ANTICORIT, price: '', description: 'RATAK VR - это биостабильная водосмешиваемая смазочно-охлаждающая жидкость с высоким содержанием минерального масла, образующая при смешивании с водой стабильную эмульсию.', specifications: '', approvals: '', 
          recommendations: '',
          documentation: documents.find((doc) => doc.includes('RATAK VR ru 2023')), }
    ]
},
fire_resistant_hydraulic_oils: {
  name: 'Огнестойкие и гидравлические масла',
  items: [
      { id: 'ECOCUT_VR_1520', name: 'ECOCUT VR 1520', image: ANTICORIT, price: '', description: 'Низковязкая масляная СОЖ для шлифования и электроэрозионной обработки',
         specifications: ['Высокая температура вспышки, повышенный уровень безопасности', 'Сокращение износа шлифовальных кругов', 'Низкий уровень загрязнения цеха', 'Очень низкая испаряемость', 'Слабый запах', 'Оптимальные смачивающие, охлаждающие и ополаскивающие свойства', 'Проверенный и испытанный состав'], 
         approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('ECOCUT VR 1520 ru')), },
      { id: 'HYDROTHERM_R_46', name: 'HYDROTHERM R 46', image: ANTICORIT, price: '', description: 'Огнестойкая гидравлическая жидкость', 
        specifications: '', 
        approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('HYDROTHERM R 46 ru')), },
      { id: 'PLANTOFLUX_R', name: 'PLANTOFLUX R', image: ANTICORIT, price: '', description: 'Огнестойкие гидравлические жидкости', 
        specifications: '', 
        approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('PLANTOFLUX R ru')), },
      { id: 'RENOLIN_AW_32_XLT', name: 'RENOLIN AW 32 XLT', image: ANTICORIT, price: '', description: 'Бесцинковое гидравлическое масло с очень высоким индексом вязкости', 
        specifications: ['DIN 51524-3: HVLP', 'ISO 6743-4: HV'], 
        approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOLIN AW 32 XLT ru')), },
      { id: 'RENOLIN_AW_HVI', name: 'RENOLIN AW HVI', image: ANTICORIT, price: '', description: 'Серия высокоиндексных гидравлических масел', 
        specifications: ['ISO 6743-4: HV', 'DIN 51 524-3: HVLP', 'ISO 11158'], 
        approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOLIN AW HVI серия rus 2022')), },
      { id: 'RENOLIN_AW_ZAF_HVI', name: 'RENOLIN AW ZAF HVI', image: ANTICORIT, price: '', description: 'Серия высокоиндексных бесцинковых гидравлических масел', 
        specifications: ['ISO 6743-4: HV', 'DIN 51524-3: HVLP'], 
        approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOLIN AW ZAF HVI ru 2023')), },
      { id: 'RENOLIN_COMP_68_MC', name: 'RENOLIN COMP 68 MC', image: ANTICORIT, price: '', description: 'Высококачественное масло для винтовых и поршневых компрессоров', 
        specifications: ['DIN 51 506 VD-L', 'DIN 51 524-1: H'], 
        approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOLIN COMP 68 MC ru 2023')), },
      { id: 'RENOLIN_COMP_MC', name: 'RENOLIN COMP', image: ANTICORIT, price: '', description: 'Минеральные масла для винтовых и поршневых компрессоров',
          specifications: ['DIN 51 506 VD-L', 'DIN 51 524-1: HL'], 
          approvals: '', recommendations: '',
          documentation: documents.find((doc) => doc.includes('RENOLIN COMP серия ru')), },
      { id: 'RENOLIN_COMPSYN', name: 'RENOLIN COMPSYN', image: ANTICORIT, price: '', description: 'Cинтетические компрессорные масла на основе полиальфаолефинов', 
            specifications: ['DIN 51 506 VDL', 'ISO 6521'], 
            approvals: '', recommendations: '',
            documentation: documents.find((doc) => doc.includes('RENOLIN COMPSYN серия ru')), }
  ]
},
cleaners_flush_compounds: {
  name: 'Очистители и промывочные составы',
  items: [
      { id: 'RENOCLEAN_FTB_3504', name: 'RENOCLEAN FTB 3504', image: ANTICORIT, price: '', description: 'Водный концентрат промышленного очистителя', specifications: '', 
        approvals: '', 
        recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOCLEAN FTB 3504 ru')), },
      { id: 'RENOCLEAN_FTB_4504', name: 'RENOCLEAN FTB 4504', image: ANTICORIT, price: '', description: 'Очиститель для нанесения распылением', specifications: '', 
        approvals: ['Насосы Hammelmann с уплотнительными прокладками', 'ABB Robotics', 'KUKA Robotics', 'Corpac Deutschland GmbH', 'Sensation AGAIN', 'SITA Messtechnik', 'EXCOR VCI', 'INTERCEPT Technology (PE-LD)', 'Соответствует DBL 6575, дополнение 5'], 
        recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOCLEAN FTB 4504 ru')), },
      { id: 'RENOCLEAN_MTA_3504', name: 'RENOCLEAN MTA 3504', image: ANTICORIT, price: '', description: 'Очистители для нанесения распылением без поверхностно-активных веществ с защитой от коррозии', specifications: '', 
        approvals: ['Насосы Hammelmann (для всех типов прокладок)', 'ABB Robotics'], 
        recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOCLEAN MTA 3504 ru')), },
      { id: 'RENOCLEAN_SMCR', name: 'RENOCLEAN SMCR', image: ANTICORIT, price: '', description: 'Очиститель для промышленных систем с рабочими жидкостями на водной основе', specifications: '', approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOCLEAN SMCR ru')), }
  ]
},

metalworking_oils: {
  name: 'Масла для обработки металлов',
  items: [
      { id: 'RENOFORM_BCO_4513', name: 'RENOFORM BCO 4513', image: ANTICORIT, price: '', description: 'Состав для операций штамповки и чистовой вырубки', specifications: '', approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOFORM BCO 4513 ru')), },
      { id: 'RENOFORM_BCO_5513', name: 'RENOFORM BCO 5513', image: ANTICORIT, price: '', description: 'Состав для сложных операций обработки металлов давлением', specifications: '', approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOFORM BCO 5513 ru')), },
      { id: 'RENOFORM_BYV_1531', name: 'RENOFORM BYV 1531', image: ANTICORIT, price: '', description: 'Не содержащий хлора состав для обработки металлов давлением', 
        specifications: ['Очень высокое качество поверхности деталей', 'Достаточно быстрое испарение', 'Надежная защита от коррозии', 'Высокая смазывающая способность', 'После испарения образуется очень тонкая пленка, не требующая удаления перед покраской или защитой поверхности', 'Хорошие смачивающие свойства обеспечивают хорошую смазывающую способность при малом расходе продукта'], 
        approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOFORM BYV 1531 ru')), },
      { id: 'RENOFORM_BYV_2511', name: 'RENOFORM BYV 2511', image: ANTICORIT, price: '', description: 'Не содержащий хлора состав для обработки металлов давлением', 
        specifications: ['Отличные смачивающие способности', 'Высокое качество поверхности деталей', 'Надежная защита от коррозии', 'Высокая смазывающая способность', 'После испарения образуется очень тонкая пленка, не требующая удаления перед покраской или защитой поверхности', 'Хорошие смачивающие свойства обеспечивают хорошую смазывающую способность при малом расходе продукта'], 
        approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOFORM BYV 2511 ru')), },
      { id: 'RENOFORM_DMW_3003R', name: 'RENOFORM DMW 3003R', image: ANTICORIT, price: '', description: 'Водосмешиваемый смазочный материал для большинства процессов ОМД', specifications: '', approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOFORM DMW 3003R ru')), },
      { id: 'RENOFORM_DMW_5571', name: 'RENOFORM DMW 5571', image: ANTICORIT, price: '', description: 'Водосмешиваемый состав для операций прокатки, вытяжки, профилирования', specifications: '', approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOFORM DMW 5571 ru')), },
      { id: 'RENOFORM_TYW_4561', name: 'RENOFORM TYW 4561', image: ANTICORIT, price: '', description: 'Смазочный материал для волочения медной катанки, прутков и ленты', 
        specifications: ['Исключительная термическая стабильность продукта минимизирует его термическое разложение', 'Отличные трибологические свойства', 'Отличная способность продукта противостоять влиянию отложений медной пыли', 'Низкая склонность к пенообразованию', 'Повышенный срок работы эмульсии за счетвысокой биостабильности', 'Исключительная защита от износа инструмента, включая инструмент из закаленной стали, карбид вольфрама, керамику, природный и синтетический алмаз'],
         approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOFORM TYW 4561 ru')), },
      { id: 'RENOFORM_TYW_5562', name: 'RENOFORM TYW 5562', image: ANTICORIT, price: '', description: 'Смазочный материал для волочения проволоки', specifications: '', approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('RENOFORM TYW 5562 ru')), }
  ]
},
pressure_casting_compounds: {
  name: 'Составы для обработки давлением и литья',
  items: [
      { id: 'LUBRODAL_C_80_S', name: 'LUBRODAL C 80 S', image: ANTICORIT, price: '', description: 'Разделительный состав на водной основе для процессов литья под давлением', specifications: '', approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('TITAN UNIMAX CI 5W-40 MC')), },
      { id: 'LUBRODAL_C_100_S', name: 'LUBRODAL C 100 S', image: ANTICORIT, price: '', description: 'Разделительный состав на водной основе для процессов литья под давлением', specifications: '', approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('TITAN UNIMAX CI 5W-40 MC')), },
      { id: 'LUBRODAL_F_133_S', name: 'LUBRODAL F 133 S', image: ANTICORIT, price: '', description: 'Водосмешиваемый состав для горячих и теплых процессов обработки давлением, не содержащий графит', specifications: '', approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('TITAN UNIMAX CI 5W-40 MC')), },
      { id: 'LUBRODAL_F_525_S', name: 'LUBRODAL F 525 S', image: ANTICORIT, price: '', description: 'Графитсодержащий состав для горячих процессов обработки давлением', specifications: '', approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('TITAN UNIMAX CI 5W-40 MC')), },
      { id: 'LUBRODAL_R_150_S', name: 'LUBRODAL R 150 S', image: ANTICORIT, price: '', description: 'Водосмешиваемый состав для горячих процессов обработки давлением', specifications: '', approvals: '', recommendations: '',
        documentation: documents.find((doc) => doc.includes('TITAN UNIMAX CI 5W-40 MC')), }
  ]
}
  };

  export default products;
  