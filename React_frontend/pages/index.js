 import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import DocBegin from './components/DocBegin'
import Theory from './components/Theory'
import Dataset from './components/Dataset'
import DatasetPic from '@/assets/images/dataset.png'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const handleSubmit =  (e) => {
    e.preventDefault()
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
    console.log(document.getElementById("upload-btn").files)
    // console.log(e)
  
      var file = document.getElementById("upload-btn").files[0];
      var reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = function(e) {
          var jsonData = [];
          var headers = [];
          var rows = e.target.result.split("\r\n");               
          for (var i = 0; i < rows.length; i++) {
              var cells = rows[i].split(",");
              var rowData = {};
              for(var j=0;j<cells.length;j++){
                  if(i==0){
                      var headerName = cells[j].trim();
                      headers.push(headerName);
                  }else{
                      var key = headers[j];
                      if(key){
                          rowData[key] = cells[j].trim();
                      }
                  }
              }
              //skip the first row (header) data
              if(i!=0){
                  jsonData.push(rowData);
              }
          }
           
          createAndDownloadJsonFile(jsonData); 
          console.log(jsonData)
          
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          // sendDataToBackend(jsonData);

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: jsonData,
            redirect: 'follow'
          };
          fetch("http://127.0.0.1:5000/csv_upload", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));



var raw = JSON.stringify([
  {
    "monthly_salary": 78780,
    "fico": 897,
    "utilization": 0.1316805608,
    "card_limit": 31032,
    "card_interest_rate": 0.0374668137,
    "model_output": 0.223082181,
    "model_target": 0
  },
  {
    "monthly_salary": 10065,
    "fico": 794,
    "utilization": 0.062197449,
    "card_limit": 31697,
    "card_interest_rate": 0.0340802418,
    "model_output": 0.9543139004,
    "model_target": 1
  },
  {
    "monthly_salary": 97434,
    "fico": 880,
    "utilization": 0.0844259547,
    "card_limit": 48998,
    "card_interest_rate": 0.0967544176,
    "model_output": 0.9906197418,
    "model_target": 0
  },
  {
    "monthly_salary": 126755,
    "fico": 729,
    "utilization": 0.0072965409,
    "card_limit": 38827,
    "card_interest_rate": 0.0414248771,
    "model_output": 0.0231735469,
    "model_target": 0
  },
  {
    "monthly_salary": 70696,
    "fico": 624,
    "utilization": 0.1547092752,
    "card_limit": 9082,
    "card_interest_rate": 0.0550618473,
    "model_output": 0.1075338539,
    "model_target": 0
  },
  {
    "monthly_salary": 173006,
    "fico": 889,
    "utilization": 0.1457124429,
    "card_limit": 18039,
    "card_interest_rate": 0.0285822373,
    "model_output": 0.4745736718,
    "model_target": 0
  },
  {
    "monthly_salary": 88528,
    "fico": 814,
    "utilization": 0.1453161043,
    "card_limit": 9946,
    "card_interest_rate": 0.0240275653,
    "model_output": 0.3881688207,
    "model_target": 0
  },
  {
    "monthly_salary": 40985,
    "fico": 743,
    "utilization": 0.116850119,
    "card_limit": 25788,
    "card_interest_rate": 0.0950190796,
    "model_output": 0.1198215643,
    "model_target": 0
  },
  {
    "monthly_salary": 154213,
    "fico": 864,
    "utilization": 0.0479850205,
    "card_limit": 20240,
    "card_interest_rate": 0.0906251039,
    "model_output": 0.3699575039,
    "model_target": 0
  },
  {
    "monthly_salary": 48492,
    "fico": 612,
    "utilization": 0.001548374,
    "card_limit": 45523,
    "card_interest_rate": 0.1022412804,
    "model_output": 0.2896529832,
    "model_target": 0
  },
  {
    "monthly_salary": 31681,
    "fico": 821,
    "utilization": 0.0973414598,
    "card_limit": 7493,
    "card_interest_rate": 0.0981704583,
    "model_output": 0.1124447446,
    "model_target": 0
  },
  {
    "monthly_salary": 67238,
    "fico": 887,
    "utilization": 0.1063393951,
    "card_limit": 29482,
    "card_interest_rate": 0.0794119381,
    "model_output": 0.9567733647,
    "model_target": 0
  },
  {
    "monthly_salary": 44643,
    "fico": 893,
    "utilization": 0.1203982319,
    "card_limit": 47461,
    "card_interest_rate": 0.1129301746,
    "model_output": 0.8540797561,
    "model_target": 1
  },
  {
    "monthly_salary": 197514,
    "fico": 818,
    "utilization": 0.1567113957,
    "card_limit": 11436,
    "card_interest_rate": 0.0391450756,
    "model_output": 0.905336482,
    "model_target": 1
  },
  {
    "monthly_salary": 72272,
    "fico": 667,
    "utilization": 0.0616126348,
    "card_limit": 11734,
    "card_interest_rate": 0.0680444009,
    "model_output": 0.6001907014,
    "model_target": 1
  },
  {
    "monthly_salary": 78675,
    "fico": 624,
    "utilization": 0.1560087525,
    "card_limit": 41669,
    "card_interest_rate": 0.0721128048,
    "model_output": 0.095902643,
    "model_target": 0
  },
  {
    "monthly_salary": 43980,
    "fico": 631,
    "utilization": 0.0309336059,
    "card_limit": 20331,
    "card_interest_rate": 0.0546931313,
    "model_output": 0.0082848315,
    "model_target": 0
  },
  {
    "monthly_salary": 154442,
    "fico": 811,
    "utilization": 0.0701082163,
    "card_limit": 20678,
    "card_interest_rate": 0.0291005355,
    "model_output": 0.4956695918,
    "model_target": 0
  },
  {
    "monthly_salary": 75990,
    "fico": 834,
    "utilization": 0.0605756273,
    "card_limit": 45412,
    "card_interest_rate": 0.0216909181,
    "model_output": 0.0684725887,
    "model_target": 0
  },
  {
    "monthly_salary": 145779,
    "fico": 801,
    "utilization": 0.0761657712,
    "card_limit": 20020,
    "card_interest_rate": 0.0993038949,
    "model_output": 0.5087321937,
    "model_target": 0
  },
  {
    "monthly_salary": 60938,
    "fico": 790,
    "utilization": 0.0424047886,
    "card_limit": 23268,
    "card_interest_rate": 0.0686245397,
    "model_output": 0.204626917,
    "model_target": 0
  },
  {
    "monthly_salary": 139356,
    "fico": 640,
    "utilization": 0.0333664609,
    "card_limit": 49806,
    "card_interest_rate": 0.0650176106,
    "model_output": 0.7585933367,
    "model_target": 0
  },
  {
    "monthly_salary": 58355,
    "fico": 831,
    "utilization": 0.1522397261,
    "card_limit": 13192,
    "card_interest_rate": 0.08294091,
    "model_output": 0.9687055111,
    "model_target": 0
  },
  {
    "monthly_salary": 105779,
    "fico": 637,
    "utilization": 0.0558290045,
    "card_limit": 16280,
    "card_interest_rate": 0.118018366,
    "model_output": 0.2445308812,
    "model_target": 0
  },
  {
    "monthly_salary": 60382,
    "fico": 851,
    "utilization": 0.115583546,
    "card_limit": 42546,
    "card_interest_rate": 0.1008025865,
    "model_output": 0.4049657438,
    "model_target": 0
  },
  {
    "monthly_salary": 119585,
    "fico": 633,
    "utilization": 0.0563226669,
    "card_limit": 40902,
    "card_interest_rate": 0.1010506362,
    "model_output": 0.854763223,
    "model_target": 1
  },
  {
    "monthly_salary": 104314,
    "fico": 863,
    "utilization": 0.0369435784,
    "card_limit": 41368,
    "card_interest_rate": 0.0268723453,
    "model_output": 0.1266858481,
    "model_target": 0
  },
  {
    "monthly_salary": 20568,
    "fico": 617,
    "utilization": 0.0588876413,
    "card_limit": 24465,
    "card_interest_rate": 0.0296097195,
    "model_output": 0.3033142987,
    "model_target": 0
  },
  {
    "monthly_salary": 159146,
    "fico": 832,
    "utilization": 0.1226998571,
    "card_limit": 48567,
    "card_interest_rate": 0.0553449854,
    "model_output": 0.8952032137,
    "model_target": 0
  },
  {
    "monthly_salary": 17086,
    "fico": 768,
    "utilization": 0.0427250005,
    "card_limit": 31294,
    "card_interest_rate": 0.0219641453,
    "model_output": 0.8353446597,
    "model_target": 1
  },
  {
    "monthly_salary": 79060,
    "fico": 763,
    "utilization": 0.0862901552,
    "card_limit": 19442,
    "card_interest_rate": 0.1084554385,
    "model_output": 0.0049388039,
    "model_target": 0
  },
  {
    "monthly_salary": 193520,
    "fico": 691,
    "utilization": 0.1336880928,
    "card_limit": 40760,
    "card_interest_rate": 0.0379188499,
    "model_output": 0.4794045792,
    "model_target": 0
  },
  {
    "monthly_salary": 166258,
    "fico": 893,
    "utilization": 0.0102334329,
    "card_limit": 34904,
    "card_interest_rate": 0.0783612206,
    "model_output": 0.5595750038,
    "model_target": 1
  },
  {
    "monthly_salary": 153003,
    "fico": 681,
    "utilization": 0.1608187931,
    "card_limit": 20544,
    "card_interest_rate": 0.0946002194,
    "model_output": 0.3171162637,
    "model_target": 0
  },
  {
    "monthly_salary": 41495,
    "fico": 780,
    "utilization": 0.0682628468,
    "card_limit": 45872,
    "card_interest_rate": 0.0917907316,
    "model_output": 0.0402925658,
    "model_target": 0
  },
  {
    "monthly_salary": 128315,
    "fico": 894,
    "utilization": 0.0453542674,
    "card_limit": 5966,
    "card_interest_rate": 0.087517796,
    "model_output": 0.6843687982,
    "model_target": 0
  },
  {
    "monthly_salary": 142618,
    "fico": 633,
    "utilization": 0.0470693715,
    "card_limit": 48436,
    "card_interest_rate": 0.046295587,
    "model_output": 0.6991786619,
    "model_target": 1
  },
  {
    "monthly_salary": 168887,
    "fico": 600,
    "utilization": 0.0428126017,
    "card_limit": 25317,
    "card_interest_rate": 0.0208596085,
    "model_output": 0.5470011652,
    "model_target": 1
  },
  {
    "monthly_salary": 132944,
    "fico": 636,
    "utilization": 0.005458127,
    "card_limit": 46237,
    "card_interest_rate": 0.1135368866,
    "model_output": 0.8074424555,
    "model_target": 0
  },
  {
    "monthly_salary": 94029,
    "fico": 900,
    "utilization": 0.1637487044,
    "card_limit": 11875,
    "card_interest_rate": 0.1175068699,
    "model_output": 0.5325698549,
    "model_target": 1
  },
  {
    "monthly_salary": 18049,
    "fico": 810,
    "utilization": 0.022118165,
    "card_limit": 40311,
    "card_interest_rate": 0.1040254398,
    "model_output": 0.7123952076,
    "model_target": 0
  },
  {
    "monthly_salary": 135669,
    "fico": 813,
    "utilization": 0.1400933967,
    "card_limit": 15867,
    "card_interest_rate": 0.0882690022,
    "model_output": 0.4131858755,
    "model_target": 0
  },
  {
    "monthly_salary": 95868,
    "fico": 847,
    "utilization": 0.1048350494,
    "card_limit": 48221,
    "card_interest_rate": 0.1134413788,
    "model_output": 0.8383689767,
    "model_target": 0
  },
  {
    "monthly_salary": 90246,
    "fico": 708,
    "utilization": 0.1104568649,
    "card_limit": 19885,
    "card_interest_rate": 0.0445645022,
    "model_output": 0.7782272727,
    "model_target": 0
  },
  {
    "monthly_salary": 182525,
    "fico": 784,
    "utilization": 0.0720691825,
    "card_limit": 30590,
    "card_interest_rate": 0.0614579163,
    "model_output": 0.0495883919,
    "model_target": 0
  },
  {
    "monthly_salary": 166492,
    "fico": 671,
    "utilization": 0.0508056993,
    "card_limit": 44947,
    "card_interest_rate": 0.1189919977,
    "model_output": 0.4062753593,
    "model_target": 0
  },
  {
    "monthly_salary": 60416,
    "fico": 755,
    "utilization": 0.0373883433,
    "card_limit": 44098,
    "card_interest_rate": 0.1173287042,
    "model_output": 0.2878264739,
    "model_target": 0
  },
  {
    "monthly_salary": 144007,
    "fico": 662,
    "utilization": 0.1188605788,
    "card_limit": 43597,
    "card_interest_rate": 0.0452968142,
    "model_output": 0.5297999831,
    "model_target": 0
  },
  {
    "monthly_salary": 113170,
    "fico": 707,
    "utilization": 0.0583907438,
    "card_limit": 45132,
    "card_interest_rate": 0.0238723198,
    "model_output": 0.7304423173,
    "model_target": 0
  },
  {
    "monthly_salary": 47979,
    "fico": 611,
    "utilization": 0.0896972373,
    "card_limit": 35831,
    "card_interest_rate": 0.0510514774,
    "model_output": 0.0114715324,
    "model_target": 0
  },
  {
    "monthly_salary": 120644,
    "fico": 879,
    "utilization": 0.0247000973,
    "card_limit": 37880,
    "card_interest_rate": 0.0634671492,
    "model_output": 0.2767195095,
    "model_target": 0
  },
  {
    "monthly_salary": 146814,
    "fico": 864,
    "utilization": 0.058925218,
    "card_limit": 31841,
    "card_interest_rate": 0.0424065499,
    "model_output": 0.0356665163,
    "model_target": 0
  },
  {
    "monthly_salary": 169359,
    "fico": 759,
    "utilization": 0.0730090413,
    "card_limit": 16729,
    "card_interest_rate": 0.1008842927,
    "model_output": 0.3695245062,
    "model_target": 0
  },
  {
    "monthly_salary": 146430,
    "fico": 837,
    "utilization": 0.1202963797,
    "card_limit": 36063,
    "card_interest_rate": 0.0465662248,
    "model_output": 0.5215520468,
    "model_target": 0
  },
  {
    "monthly_salary": 187204,
    "fico": 644,
    "utilization": 0.0397481157,
    "card_limit": 10843,
    "card_interest_rate": 0.0219265282,
    "model_output": 0.6680363292,
    "model_target": 1
  },
  {
    "monthly_salary": 34788,
    "fico": 810,
    "utilization": 0.1227586736,
    "card_limit": 34794,
    "card_interest_rate": 0.1117986907,
    "model_output": 0.2344929527,
    "model_target": 0
  },
  {
    "monthly_salary": 194899,
    "fico": 786,
    "utilization": 0.0676253301,
    "card_limit": 48535,
    "card_interest_rate": 0.1116617333,
    "model_output": 0.0941380262,
    "model_target": 0
  },
  {
    "monthly_salary": 80752,
    "fico": 625,
    "utilization": 0.0498577937,
    "card_limit": 47229,
    "card_interest_rate": 0.1109648287,
    "model_output": 0.8004649842,
    "model_target": 1
  },
  {
    "monthly_salary": 159184,
    "fico": 636,
    "utilization": 0.1183139839,
    "card_limit": 15984,
    "card_interest_rate": 0.0683557071,
    "model_output": 0.2341103774,
    "model_target": 0
  },
  {
    "monthly_salary": 58394,
    "fico": 793,
    "utilization": 0.0916422885,
    "card_limit": 18405,
    "card_interest_rate": 0.1184627167,
    "model_output": 0.1943422287,
    "model_target": 0
  },
  {
    "monthly_salary": 68910,
    "fico": 653,
    "utilization": 0.1056999826,
    "card_limit": 36537,
    "card_interest_rate": 0.0799014285,
    "model_output": 0.9582531345,
    "model_target": 1
  },
  {
    "monthly_salary": 52756,
    "fico": 829,
    "utilization": 0.0647587876,
    "card_limit": 18754,
    "card_interest_rate": 0.0244250068,
    "model_output": 0.0986440288,
    "model_target": 0
  },
  {
    "monthly_salary": 64593,
    "fico": 659,
    "utilization": 0.1381735975,
    "card_limit": 43790,
    "card_interest_rate": 0.0385501829,
    "model_output": 0.6593317617,
    "model_target": 1
  },
  {
    "monthly_salary": 169880,
    "fico": 775,
    "utilization": 0.0767507006,
    "card_limit": 41388,
    "card_interest_rate": 0.0578191422,
    "model_output": 0.0264930641,
    "model_target": 0
  },
  {
    "monthly_salary": 45551,
    "fico": 883,
    "utilization": 0.1620759037,
    "card_limit": 39217,
    "card_interest_rate": 0.0910791758,
    "model_output": 0.457285296,
    "model_target": 0
  },
  {
    "monthly_salary": 127615,
    "fico": 835,
    "utilization": 0.1581499637,
    "card_limit": 25293,
    "card_interest_rate": 0.0321967012,
    "model_output": 0.6236883118,
    "model_target": 0
  },
  {
    "monthly_salary": 96789,
    "fico": 757,
    "utilization": 0.1226345381,
    "card_limit": 28864,
    "card_interest_rate": 0.1082463645,
    "model_output": 0.5890329245,
    "model_target": 1
  },
  {
    "monthly_salary": 26788,
    "fico": 673,
    "utilization": 0.1441695101,
    "card_limit": 24343,
    "card_interest_rate": 0.0261905794,
    "model_output": 0.853100343,
    "model_target": 1
  },
  {
    "monthly_salary": 167203,
    "fico": 801,
    "utilization": 0.0763661889,
    "card_limit": 11569,
    "card_interest_rate": 0.0666151143,
    "model_output": 0.5307127057,
    "model_target": 0
  },
  {
    "monthly_salary": 122967,
    "fico": 891,
    "utilization": 0.1059931429,
    "card_limit": 12713,
    "card_interest_rate": 0.1140024186,
    "model_output": 0.2038392479,
    "model_target": 0
  },
  {
    "monthly_salary": 92791,
    "fico": 639,
    "utilization": 0.1629078007,
    "card_limit": 49130,
    "card_interest_rate": 0.1137705599,
    "model_output": 0.9831237227,
    "model_target": 0
  },
  {
    "monthly_salary": 118503,
    "fico": 814,
    "utilization": 0.1334200339,
    "card_limit": 7494,
    "card_interest_rate": 0.0691553074,
    "model_output": 0.9322433757,
    "model_target": 1
  },
  {
    "monthly_salary": 56183,
    "fico": 814,
    "utilization": 0.0359249241,
    "card_limit": 27310,
    "card_interest_rate": 0.0948499452,
    "model_output": 0.0030036021,
    "model_target": 0
  },
  {
    "monthly_salary": 114237,
    "fico": 732,
    "utilization": 0.1154907397,
    "card_limit": 47122,
    "card_interest_rate": 0.0543684456,
    "model_output": 0.0467268373,
    "model_target": 0
  },
  {
    "monthly_salary": 189115,
    "fico": 879,
    "utilization": 0.0969328349,
    "card_limit": 36725,
    "card_interest_rate": 0.0534871988,
    "model_output": 0.3621529997,
    "model_target": 0
  },
  {
    "monthly_salary": 69837,
    "fico": 812,
    "utilization": 0.0908421496,
    "card_limit": 41605,
    "card_interest_rate": 0.0597638873,
    "model_output": 0.0995719433,
    "model_target": 0
  },
  {
    "monthly_salary": 136384,
    "fico": 632,
    "utilization": 0.1557890236,
    "card_limit": 42473,
    "card_interest_rate": 0.0471065203,
    "model_output": 0.7580498667,
    "model_target": 1
  },
  {
    "monthly_salary": 106263,
    "fico": 889,
    "utilization": 0.067990074,
    "card_limit": 19600,
    "card_interest_rate": 0.0655257465,
    "model_output": 0.2921458711,
    "model_target": 0
  },
  {
    "monthly_salary": 31295,
    "fico": 746,
    "utilization": 0.1306148471,
    "card_limit": 7276,
    "card_interest_rate": 0.0874320886,
    "model_output": 0.1438252817,
    "model_target": 0
  },
  {
    "monthly_salary": 121225,
    "fico": 800,
    "utilization": 0.0648700425,
    "card_limit": 31363,
    "card_interest_rate": 0.0399471191,
    "model_output": 0.2726747824,
    "model_target": 0
  },
  {
    "monthly_salary": 148542,
    "fico": 795,
    "utilization": 0.0030896721,
    "card_limit": 20582,
    "card_interest_rate": 0.0986152675,
    "model_output": 0.0682796699,
    "model_target": 0
  },
  {
    "monthly_salary": 197301,
    "fico": 603,
    "utilization": 0.1067339123,
    "card_limit": 31550,
    "card_interest_rate": 0.0724294794,
    "model_output": 0.7851627298,
    "model_target": 0
  },
  {
    "monthly_salary": 104825,
    "fico": 717,
    "utilization": 0.1409813347,
    "card_limit": 26900,
    "card_interest_rate": 0.0830830155,
    "model_output": 0.1596025927,
    "model_target": 0
  },
  {
    "monthly_salary": 28939,
    "fico": 657,
    "utilization": 0.0494607713,
    "card_limit": 36476,
    "card_interest_rate": 0.1179161963,
    "model_output": 0.8824582202,
    "model_target": 1
  },
  {
    "monthly_salary": 81063,
    "fico": 877,
    "utilization": 0.1154176342,
    "card_limit": 49236,
    "card_interest_rate": 0.0687108108,
    "model_output": 0.4068493431,
    "model_target": 0
  },
  {
    "monthly_salary": 70855,
    "fico": 854,
    "utilization": 0.1116580193,
    "card_limit": 31636,
    "card_interest_rate": 0.0554812465,
    "model_output": 0.2546411739,
    "model_target": 0
  },
  {
    "monthly_salary": 37625,
    "fico": 639,
    "utilization": 0.1261880864,
    "card_limit": 39173,
    "card_interest_rate": 0.0389113675,
    "model_output": 0.6138731017,
    "model_target": 0
  },
  {
    "monthly_salary": 61199,
    "fico": 648,
    "utilization": 0.1147025434,
    "card_limit": 13161,
    "card_interest_rate": 0.0519536714,
    "model_output": 0.7452382158,
    "model_target": 0
  },
  {
    "monthly_salary": 42532,
    "fico": 700,
    "utilization": 0.0198206828,
    "card_limit": 25243,
    "card_interest_rate": 0.0924610157,
    "model_output": 0.7597902442,
    "model_target": 1
  },
  {
    "monthly_salary": 103675,
    "fico": 745,
    "utilization": 0.025474133,
    "card_limit": 45321,
    "card_interest_rate": 0.0606983516,
    "model_output": 0.8723159104,
    "model_target": 1
  },
  {
    "monthly_salary": 57622,
    "fico": 618,
    "utilization": 0.1646030825,
    "card_limit": 27292,
    "card_interest_rate": 0.0541748178,
    "model_output": 0.2022700559,
    "model_target": 0
  },
  {
    "monthly_salary": 156790,
    "fico": 742,
    "utilization": 0.0632715511,
    "card_limit": 12572,
    "card_interest_rate": 0.066716384,
    "model_output": 0.0699114112,
    "model_target": 0
  },
  {
    "monthly_salary": 122085,
    "fico": 711,
    "utilization": 0.1381804562,
    "card_limit": 20446,
    "card_interest_rate": 0.0367686427,
    "model_output": 0.924713714,
    "model_target": 1
  },
  {
    "monthly_salary": 194474,
    "fico": 609,
    "utilization": 0.0475230018,
    "card_limit": 46887,
    "card_interest_rate": 0.0293594475,
    "model_output": 0.9888307947,
    "model_target": 1
  },
  {
    "monthly_salary": 43284,
    "fico": 775,
    "utilization": 0.1477031329,
    "card_limit": 24847,
    "card_interest_rate": 0.1033526221,
    "model_output": 0.8410754129,
    "model_target": 0
  },
  {
    "monthly_salary": 52098,
    "fico": 657,
    "utilization": 0.131256439,
    "card_limit": 17904,
    "card_interest_rate": 0.0420192891,
    "model_output": 0.0064862334,
    "model_target": 0
  },
  {
    "monthly_salary": 109930,
    "fico": 886,
    "utilization": 0.0989932831,
    "card_limit": 27945,
    "card_interest_rate": 0.0779896534,
    "model_output": 0.5336531741,
    "model_target": 0
  },
  {
    "monthly_salary": 157698,
    "fico": 769,
    "utilization": 0.0610031156,
    "card_limit": 36679,
    "card_interest_rate": 0.0695661952,
    "model_output": 0.6956981811,
    "model_target": 1
  },
  {
    "monthly_salary": 50241,
    "fico": 882,
    "utilization": 0.1258997156,
    "card_limit": 46921,
    "card_interest_rate": 0.1166913804,
    "model_output": 0.4762450648,
    "model_target": 0
  },
  {
    "monthly_salary": 190143,
    "fico": 765,
    "utilization": 0.1452614093,
    "card_limit": 8595,
    "card_interest_rate": 0.0860416686,
    "model_output": 0.3854184654,
    "model_target": 0
  },
  {
    "monthly_salary": 62237,
    "fico": 707,
    "utilization": 0.031732048,
    "card_limit": 23748,
    "card_interest_rate": 0.0652411824,
    "model_output": 0.5698496612,
    "model_target": 0
  },
  {
    "monthly_salary": 19788,
    "fico": 671,
    "utilization": 0.1385102374,
    "card_limit": 38001,
    "card_interest_rate": 0.0906956262,
    "model_output": 0.7459245615,
    "model_target": 1
  },
  {
    "monthly_salary": 163333,
    "fico": 645,
    "utilization": 0.0193335958,
    "card_limit": 21736,
    "card_interest_rate": 0.0645205745,
    "model_output": 0.7384430488,
    "model_target": 1
  },
  {
    "monthly_salary": 191284,
    "fico": 669,
    "utilization": 0.1546325687,
    "card_limit": 43085,
    "card_interest_rate": 0.0549949197,
    "model_output": 0.0716099718,
    "model_target": 0
  },
  {
    "monthly_salary": 12573,
    "fico": 781,
    "utilization": 0.0646599573,
    "card_limit": 16808,
    "card_interest_rate": 0.1038259964,
    "model_output": 0.9617628274,
    "model_target": 0
  },
  {
    "monthly_salary": 132008,
    "fico": 660,
    "utilization": 0.0803606216,
    "card_limit": 28745,
    "card_interest_rate": 0.0483781247,
    "model_output": 0.2810871284,
    "model_target": 0
  },
  {
    "monthly_salary": 140551,
    "fico": 722,
    "utilization": 0.030475973,
    "card_limit": 26708,
    "card_interest_rate": 0.0923135949,
    "model_output": 0.7895747226,
    "model_target": 1
  },
  {
    "monthly_salary": 179897,
    "fico": 875,
    "utilization": 0.04479407,
    "card_limit": 31033,
    "card_interest_rate": 0.1095137842,
    "model_output": 0.6625931784,
    "model_target": 0
  },
  {
    "monthly_salary": 155876,
    "fico": 638,
    "utilization": 0.1468695918,
    "card_limit": 40959,
    "card_interest_rate": 0.1065792874,
    "model_output": 0.4323168186,
    "model_target": 0
  },
  {
    "monthly_salary": 173886,
    "fico": 739,
    "utilization": 0.0132501812,
    "card_limit": 12370,
    "card_interest_rate": 0.1024210616,
    "model_output": 0.7589347957,
    "model_target": 0
  },
  {
    "monthly_salary": 133416,
    "fico": 883,
    "utilization": 0.0187138044,
    "card_limit": 41533,
    "card_interest_rate": 0.0559113817,
    "model_output": 0.5666595895,
    "model_target": 1
  },
  {
    "monthly_salary": 114255,
    "fico": 690,
    "utilization": 0.0050308009,
    "card_limit": 6802,
    "card_interest_rate": 0.1043804725,
    "model_output": 0.0973381859,
    "model_target": 0
  },
  {
    "monthly_salary": 160801,
    "fico": 831,
    "utilization": 0.1370979049,
    "card_limit": 20563,
    "card_interest_rate": 0.0774474505,
    "model_output": 0.1573663611,
    "model_target": 0
  },
  {
    "monthly_salary": 84853,
    "fico": 810,
    "utilization": 0.1134229653,
    "card_limit": 16274,
    "card_interest_rate": 0.0730082643,
    "model_output": 0.4531257628,
    "model_target": 0
  },
  {
    "monthly_salary": 127363,
    "fico": 834,
    "utilization": 0.0256450608,
    "card_limit": 29907,
    "card_interest_rate": 0.0618921604,
    "model_output": 0.770486745,
    "model_target": 0
  },
  {
    "monthly_salary": 128311,
    "fico": 703,
    "utilization": 0.1382797276,
    "card_limit": 23228,
    "card_interest_rate": 0.0926638903,
    "model_output": 0.1102833784,
    "model_target": 0
  },
  {
    "monthly_salary": 61971,
    "fico": 742,
    "utilization": 0.0121867692,
    "card_limit": 17554,
    "card_interest_rate": 0.1112374557,
    "model_output": 0.9445953875,
    "model_target": 1
  },
  {
    "monthly_salary": 98510,
    "fico": 823,
    "utilization": 0.0186851581,
    "card_limit": 42964,
    "card_interest_rate": 0.0915407215,
    "model_output": 0.9055039721,
    "model_target": 1
  },
  {
    "monthly_salary": 185632,
    "fico": 606,
    "utilization": 0.0735662509,
    "card_limit": 5598,
    "card_interest_rate": 0.0267622539,
    "model_output": 0.3693468366,
    "model_target": 0
  },
  {
    "monthly_salary": 173961,
    "fico": 819,
    "utilization": 0.1282587876,
    "card_limit": 18436,
    "card_interest_rate": 0.0879537227,
    "model_output": 0.3646041635,
    "model_target": 0
  },
  {
    "monthly_salary": 55351,
    "fico": 839,
    "utilization": 0.0469195186,
    "card_limit": 21118,
    "card_interest_rate": 0.1162293367,
    "model_output": 0.5825368415,
    "model_target": 1
  },
  {
    "monthly_salary": 174307,
    "fico": 715,
    "utilization": 0.1239717433,
    "card_limit": 35685,
    "card_interest_rate": 0.0816439843,
    "model_output": 0.7513543795,
    "model_target": 0
  },
  {
    "monthly_salary": 141076,
    "fico": 663,
    "utilization": 0.1319326347,
    "card_limit": 12800,
    "card_interest_rate": 0.030459265,
    "model_output": 0.092236393,
    "model_target": 0
  },
  {
    "monthly_salary": 90657,
    "fico": 669,
    "utilization": 0.0539043612,
    "card_limit": 28488,
    "card_interest_rate": 0.0690918816,
    "model_output": 0.5293992618,
    "model_target": 0
  },
  {
    "monthly_salary": 137557,
    "fico": 750,
    "utilization": 0.0710327498,
    "card_limit": 32484,
    "card_interest_rate": 0.0922231745,
    "model_output": 0.7291289358,
    "model_target": 1
  },
  {
    "monthly_salary": 15236,
    "fico": 845,
    "utilization": 0.0490859007,
    "card_limit": 25319,
    "card_interest_rate": 0.0731529711,
    "model_output": 0.4093673946,
    "model_target": 0
  },
  {
    "monthly_salary": 122107,
    "fico": 674,
    "utilization": 0.0907448476,
    "card_limit": 35184,
    "card_interest_rate": 0.0546003729,
    "model_output": 0.371282033,
    "model_target": 0
  },
  {
    "monthly_salary": 35997,
    "fico": 870,
    "utilization": 0.1626050162,
    "card_limit": 15176,
    "card_interest_rate": 0.0306514235,
    "model_output": 0.5273870054,
    "model_target": 1
  },
  {
    "monthly_salary": 163484,
    "fico": 740,
    "utilization": 0.0851468049,
    "card_limit": 11163,
    "card_interest_rate": 0.0255959243,
    "model_output": 0.2101997467,
    "model_target": 0
  },
  {
    "monthly_salary": 97310,
    "fico": 644,
    "utilization": 0.1246855124,
    "card_limit": 34450,
    "card_interest_rate": 0.0472949946,
    "model_output": 0.2305808015,
    "model_target": 0
  },
  {
    "monthly_salary": 61767,
    "fico": 795,
    "utilization": 0.0291970377,
    "card_limit": 12582,
    "card_interest_rate": 0.0639749149,
    "model_output": 0.4597330367,
    "model_target": 0
  },
  {
    "monthly_salary": 166113,
    "fico": 843,
    "utilization": 0.0154447402,
    "card_limit": 41162,
    "card_interest_rate": 0.0793857061,
    "model_output": 0.6728691832,
    "model_target": 0
  },
  {
    "monthly_salary": 156081,
    "fico": 637,
    "utilization": 0.1151773045,
    "card_limit": 10509,
    "card_interest_rate": 0.0950722933,
    "model_output": 0.8804985218,
    "model_target": 1
  },
  {
    "monthly_salary": 197257,
    "fico": 640,
    "utilization": 0.0969206676,
    "card_limit": 7429,
    "card_interest_rate": 0.0348269635,
    "model_output": 0.8343574323,
    "model_target": 1
  },
  {
    "monthly_salary": 42630,
    "fico": 772,
    "utilization": 0.0225115977,
    "card_limit": 29005,
    "card_interest_rate": 0.1109717564,
    "model_output": 0.9997230438,
    "model_target": 1
  },
  {
    "monthly_salary": 28268,
    "fico": 701,
    "utilization": 0.0662689373,
    "card_limit": 18943,
    "card_interest_rate": 0.0519682377,
    "model_output": 0.4441334104,
    "model_target": 0
  },
  {
    "monthly_salary": 157558,
    "fico": 612,
    "utilization": 0.0378174458,
    "card_limit": 29624,
    "card_interest_rate": 0.117167803,
    "model_output": 0.2633687331,
    "model_target": 0
  },
  {
    "monthly_salary": 178999,
    "fico": 697,
    "utilization": 0.0689970749,
    "card_limit": 32223,
    "card_interest_rate": 0.0405429381,
    "model_output": 0.5244951847,
    "model_target": 1
  },
  {
    "monthly_salary": 104843,
    "fico": 829,
    "utilization": 0.0230169019,
    "card_limit": 25563,
    "card_interest_rate": 0.116948478,
    "model_output": 0.1431028312,
    "model_target": 0
  },
  {
    "monthly_salary": 40198,
    "fico": 848,
    "utilization": 0.0985285033,
    "card_limit": 40871,
    "card_interest_rate": 0.0825663045,
    "model_output": 0.1901291083,
    "model_target": 0
  },
  {
    "monthly_salary": 82643,
    "fico": 840,
    "utilization": 0.0512497734,
    "card_limit": 30541,
    "card_interest_rate": 0.0986410627,
    "model_output": 0.0298843324,
    "model_target": 0
  },
  {
    "monthly_salary": 166954,
    "fico": 840,
    "utilization": 0.1460197483,
    "card_limit": 15513,
    "card_interest_rate": 0.0473533081,
    "model_output": 0.8748555635,
    "model_target": 0
  },
  {
    "monthly_salary": 150233,
    "fico": 862,
    "utilization": 0.14986453,
    "card_limit": 11917,
    "card_interest_rate": 0.1119906617,
    "model_output": 0.4389975446,
    "model_target": 0
  },
  {
    "monthly_salary": 181150,
    "fico": 871,
    "utilization": 0.0195408537,
    "card_limit": 29524,
    "card_interest_rate": 0.0801391087,
    "model_output": 0.1581665389,
    "model_target": 0
  },
  {
    "monthly_salary": 71808,
    "fico": 708,
    "utilization": 0.1620235777,
    "card_limit": 19042,
    "card_interest_rate": 0.1047962187,
    "model_output": 0.004247312,
    "model_target": 0
  },
  {
    "monthly_salary": 105203,
    "fico": 791,
    "utilization": 0.1610924867,
    "card_limit": 42316,
    "card_interest_rate": 0.0610470537,
    "model_output": 0.8014357785,
    "model_target": 1
  },
  {
    "monthly_salary": 21883,
    "fico": 885,
    "utilization": 0.025330439,
    "card_limit": 30078,
    "card_interest_rate": 0.0950761161,
    "model_output": 0.0933437088,
    "model_target": 0
  },
  {
    "monthly_salary": 68565,
    "fico": 739,
    "utilization": 0.134365351,
    "card_limit": 41298,
    "card_interest_rate": 0.0848238369,
    "model_output": 0.8475521189,
    "model_target": 1
  },
  {
    "monthly_salary": 175625,
    "fico": 651,
    "utilization": 0.0110195634,
    "card_limit": 44664,
    "card_interest_rate": 0.097105417,
    "model_output": 0.7894713248,
    "model_target": 1
  },
  {
    "monthly_salary": 105955,
    "fico": 692,
    "utilization": 0.069144623,
    "card_limit": 19905,
    "card_interest_rate": 0.0928836753,
    "model_output": 0.6965983613,
    "model_target": 0
  },
  {
    "monthly_salary": 146067,
    "fico": 759,
    "utilization": 0.1044011395,
    "card_limit": 49730,
    "card_interest_rate": 0.1103501789,
    "model_output": 0.8785127272,
    "model_target": 0
  },
  {
    "monthly_salary": 111725,
    "fico": 896,
    "utilization": 0.0242575788,
    "card_limit": 20949,
    "card_interest_rate": 0.0603707145,
    "model_output": 0.8434875038,
    "model_target": 0
  },
  {
    "monthly_salary": 150566,
    "fico": 844,
    "utilization": 0.0686176499,
    "card_limit": 35243,
    "card_interest_rate": 0.0413750043,
    "model_output": 0.295852398,
    "model_target": 0
  },
  {
    "monthly_salary": 78590,
    "fico": 687,
    "utilization": 0.1003277617,
    "card_limit": 43376,
    "card_interest_rate": 0.0413215938,
    "model_output": 0.4912117384,
    "model_target": 0
  },
  {
    "monthly_salary": 111776,
    "fico": 877,
    "utilization": 0.0916441613,
    "card_limit": 34768,
    "card_interest_rate": 0.0220346926,
    "model_output": 0.925228818,
    "model_target": 1
  },
  {
    "monthly_salary": 49433,
    "fico": 777,
    "utilization": 0.037642043,
    "card_limit": 41232,
    "card_interest_rate": 0.0453107593,
    "model_output": 0.966223871,
    "model_target": 1
  },
  {
    "monthly_salary": 11686,
    "fico": 805,
    "utilization": 0.0249192803,
    "card_limit": 38820,
    "card_interest_rate": 0.0385581965,
    "model_output": 0.4244548157,
    "model_target": 0
  },
  {
    "monthly_salary": 161837,
    "fico": 678,
    "utilization": 0.0670712267,
    "card_limit": 21564,
    "card_interest_rate": 0.0264749093,
    "model_output": 0.8317437228,
    "model_target": 1
  },
  {
    "monthly_salary": 102455,
    "fico": 710,
    "utilization": 0.0252017916,
    "card_limit": 21416,
    "card_interest_rate": 0.1104346375,
    "model_output": 0.8643416633,
    "model_target": 0
  },
  {
    "monthly_salary": 103136,
    "fico": 869,
    "utilization": 0.1647266286,
    "card_limit": 24426,
    "card_interest_rate": 0.0293876093,
    "model_output": 0.7823766524,
    "model_target": 0
  },
  {
    "monthly_salary": 148662,
    "fico": 702,
    "utilization": 0.0851530458,
    "card_limit": 45837,
    "card_interest_rate": 0.0843207046,
    "model_output": 0.9088161006,
    "model_target": 0
  },
  {
    "monthly_salary": 106353,
    "fico": 715,
    "utilization": 0.1513393551,
    "card_limit": 32399,
    "card_interest_rate": 0.0513005873,
    "model_output": 0.9118893914,
    "model_target": 1
  },
  {
    "monthly_salary": 64770,
    "fico": 727,
    "utilization": 0.0987953975,
    "card_limit": 44100,
    "card_interest_rate": 0.1045728216,
    "model_output": 0.3026147405,
    "model_target": 0
  },
  {
    "monthly_salary": 49494,
    "fico": 804,
    "utilization": 0.0436072646,
    "card_limit": 46781,
    "card_interest_rate": 0.0437574421,
    "model_output": 0.2684708507,
    "model_target": 0
  },
  {
    "monthly_salary": 68636,
    "fico": 685,
    "utilization": 0.0198781121,
    "card_limit": 12350,
    "card_interest_rate": 0.0205948616,
    "model_output": 0.850302501,
    "model_target": 1
  },
  {
    "monthly_salary": 33153,
    "fico": 712,
    "utilization": 0.0612966637,
    "card_limit": 25924,
    "card_interest_rate": 0.1120533438,
    "model_output": 0.8821037044,
    "model_target": 1
  },
  {
    "monthly_salary": 190478,
    "fico": 805,
    "utilization": 0.1222174233,
    "card_limit": 46245,
    "card_interest_rate": 0.1131744308,
    "model_output": 0.4145425315,
    "model_target": 0
  },
  {
    "monthly_salary": 167605,
    "fico": 877,
    "utilization": 0.0359782723,
    "card_limit": 22378,
    "card_interest_rate": 0.0535586968,
    "model_output": 0.6911999869,
    "model_target": 1
  },
  {
    "monthly_salary": 32260,
    "fico": 828,
    "utilization": 0.0476271938,
    "card_limit": 5411,
    "card_interest_rate": 0.1026115627,
    "model_output": 0.7960219966,
    "model_target": 0
  },
  {
    "monthly_salary": 14881,
    "fico": 657,
    "utilization": 0.139457783,
    "card_limit": 21425,
    "card_interest_rate": 0.0572055731,
    "model_output": 0.1754481192,
    "model_target": 0
  },
  {
    "monthly_salary": 69569,
    "fico": 623,
    "utilization": 0.0222529457,
    "card_limit": 24302,
    "card_interest_rate": 0.1150396439,
    "model_output": 0.511310922,
    "model_target": 1
  },
  {
    "monthly_salary": 95573,
    "fico": 876,
    "utilization": 0.047705734,
    "card_limit": 29935,
    "card_interest_rate": 0.1196759032,
    "model_output": 0.5745469045,
    "model_target": 1
  },
  {
    "monthly_salary": 48160,
    "fico": 833,
    "utilization": 0.1108666124,
    "card_limit": 19854,
    "card_interest_rate": 0.0682783778,
    "model_output": 0.302929094,
    "model_target": 0
  },
  {
    "monthly_salary": 121991,
    "fico": 743,
    "utilization": 0.160812083,
    "card_limit": 42082,
    "card_interest_rate": 0.0988148846,
    "model_output": 0.5344499908,
    "model_target": 0
  },
  {
    "monthly_salary": 105971,
    "fico": 727,
    "utilization": 0.1259792944,
    "card_limit": 34601,
    "card_interest_rate": 0.0222839138,
    "model_output": 0.8083670499,
    "model_target": 0
  },
  {
    "monthly_salary": 199191,
    "fico": 814,
    "utilization": 0.053538192,
    "card_limit": 19386,
    "card_interest_rate": 0.0528696461,
    "model_output": 0.9608277145,
    "model_target": 0
  },
  {
    "monthly_salary": 85856,
    "fico": 609,
    "utilization": 0.0112615672,
    "card_limit": 6485,
    "card_interest_rate": 0.0632759507,
    "model_output": 0.8077320972,
    "model_target": 0
  },
  {
    "monthly_salary": 174353,
    "fico": 621,
    "utilization": 0.0127004243,
    "card_limit": 31528,
    "card_interest_rate": 0.1132319509,
    "model_output": 0.0012119977,
    "model_target": 0
  },
  {
    "monthly_salary": 111068,
    "fico": 743,
    "utilization": 0.1469403197,
    "card_limit": 9075,
    "card_interest_rate": 0.0354919762,
    "model_output": 0.2546661183,
    "model_target": 0
  },
  {
    "monthly_salary": 151860,
    "fico": 701,
    "utilization": 0.1161209035,
    "card_limit": 14897,
    "card_interest_rate": 0.1179173072,
    "model_output": 0.0408851335,
    "model_target": 0
  },
  {
    "monthly_salary": 137904,
    "fico": 742,
    "utilization": 0.0305538148,
    "card_limit": 35071,
    "card_interest_rate": 0.0448738629,
    "model_output": 0.2794397017,
    "model_target": 0
  },
  {
    "monthly_salary": 80698,
    "fico": 692,
    "utilization": 0.0317177542,
    "card_limit": 31563,
    "card_interest_rate": 0.0290765105,
    "model_output": 0.6417984128,
    "model_target": 0
  },
  {
    "monthly_salary": 35288,
    "fico": 841,
    "utilization": 0.145115113,
    "card_limit": 37513,
    "card_interest_rate": 0.0685229607,
    "model_output": 0.2095142814,
    "model_target": 0
  },
  {
    "monthly_salary": 189821,
    "fico": 880,
    "utilization": 0.0672467624,
    "card_limit": 37087,
    "card_interest_rate": 0.0580068769,
    "model_output": 0.6280707451,
    "model_target": 0
  },
  {
    "monthly_salary": 188687,
    "fico": 702,
    "utilization": 0.0788862326,
    "card_limit": 46561,
    "card_interest_rate": 0.060220895,
    "model_output": 0.5698608905,
    "model_target": 1
  },
  {
    "monthly_salary": 113666,
    "fico": 891,
    "utilization": 0.1532862253,
    "card_limit": 13976,
    "card_interest_rate": 0.0895695492,
    "model_output": 0.3159637829,
    "model_target": 0
  },
  {
    "monthly_salary": 83862,
    "fico": 881,
    "utilization": 0.0872325264,
    "card_limit": 45755,
    "card_interest_rate": 0.032520466,
    "model_output": 0.9570285991,
    "model_target": 0
  },
  {
    "monthly_salary": 140013,
    "fico": 620,
    "utilization": 0.1105856686,
    "card_limit": 44875,
    "card_interest_rate": 0.1003488467,
    "model_output": 0.8813205769,
    "model_target": 1
  },
  {
    "monthly_salary": 59896,
    "fico": 659,
    "utilization": 0.0831444933,
    "card_limit": 37744,
    "card_interest_rate": 0.0707436495,
    "model_output": 0.5970984019,
    "model_target": 0
  },
  {
    "monthly_salary": 126999,
    "fico": 693,
    "utilization": 0.0401230498,
    "card_limit": 12155,
    "card_interest_rate": 0.0935948253,
    "model_output": 0.3745787847,
    "model_target": 0
  },
  {
    "monthly_salary": 109707,
    "fico": 858,
    "utilization": 0.1614892508,
    "card_limit": 21163,
    "card_interest_rate": 0.033622849,
    "model_output": 0.5335861174,
    "model_target": 0
  },
  {
    "monthly_salary": 99671,
    "fico": 723,
    "utilization": 0.076650995,
    "card_limit": 16323,
    "card_interest_rate": 0.0728187447,
    "model_output": 0.1445414355,
    "model_target": 0
  },
  {
    "monthly_salary": 161295,
    "fico": 608,
    "utilization": 0.0871633614,
    "card_limit": 42850,
    "card_interest_rate": 0.0732913203,
    "model_output": 0.4980524402,
    "model_target": 0
  },
  {
    "monthly_salary": 43642,
    "fico": 841,
    "utilization": 0.1632816422,
    "card_limit": 44670,
    "card_interest_rate": 0.0652730578,
    "model_output": 0.7696470769,
    "model_target": 0
  },
  {
    "monthly_salary": 164142,
    "fico": 778,
    "utilization": 0.0334441763,
    "card_limit": 8793,
    "card_interest_rate": 0.0569353418,
    "model_output": 0.1102360671,
    "model_target": 0
  },
  {
    "monthly_salary": 186945,
    "fico": 891,
    "utilization": 0.0791537403,
    "card_limit": 18236,
    "card_interest_rate": 0.1084156447,
    "model_output": 0.762690677,
    "model_target": 0
  },
  {
    "monthly_salary": 109814,
    "fico": 834,
    "utilization": 0.0501308487,
    "card_limit": 15679,
    "card_interest_rate": 0.050793354,
    "model_output": 0.6681781778,
    "model_target": 1
  },
  {
    "monthly_salary": 99152,
    "fico": 819,
    "utilization": 0.080440738,
    "card_limit": 38534,
    "card_interest_rate": 0.0753672709,
    "model_output": 0.6955960853,
    "model_target": 1
  },
  {
    "monthly_salary": 94842,
    "fico": 842,
    "utilization": 0.1011181552,
    "card_limit": 43888,
    "card_interest_rate": 0.0805170704,
    "model_output": 0.2199006891,
    "model_target": 0
  },
  {
    "monthly_salary": 160428,
    "fico": 656,
    "utilization": 0.0538285552,
    "card_limit": 26112,
    "card_interest_rate": 0.0394195501,
    "model_output": 0.259345044,
    "model_target": 0
  },
  {
    "monthly_salary": 90491,
    "fico": 839,
    "utilization": 0.0992173965,
    "card_limit": 17520,
    "card_interest_rate": 0.0704506203,
    "model_output": 0.1702170951,
    "model_target": 0
  },
  {
    "monthly_salary": 93936,
    "fico": 665,
    "utilization": 0.0573206049,
    "card_limit": 24208,
    "card_interest_rate": 0.0394979242,
    "model_output": 0.5455633002,
    "model_target": 1
  },
  {
    "monthly_salary": 170089,
    "fico": 813,
    "utilization": 0.0171265739,
    "card_limit": 38733,
    "card_interest_rate": 0.087452433,
    "model_output": 0.4482915355,
    "model_target": 0
  },
  {
    "monthly_salary": 192582,
    "fico": 680,
    "utilization": 0.1062911142,
    "card_limit": 24220,
    "card_interest_rate": 0.086353269,
    "model_output": 0.3162192118,
    "model_target": 0
  },
  {
    "monthly_salary": 79074,
    "fico": 770,
    "utilization": 0.0173597314,
    "card_limit": 35435,
    "card_interest_rate": 0.0358596202,
    "model_output": 0.3383483386,
    "model_target": 0
  },
  {
    "monthly_salary": 10336,
    "fico": 814,
    "utilization": 0.0428515747,
    "card_limit": 17686,
    "card_interest_rate": 0.0479316257,
    "model_output": 0.6626896156,
    "model_target": 1
  },
  {
    "monthly_salary": 158929,
    "fico": 632,
    "utilization": 0.1273452252,
    "card_limit": 24457,
    "card_interest_rate": 0.0215176891,
    "model_output": 0.8178198853,
    "model_target": 0
  },
  {
    "monthly_salary": 157501,
    "fico": 650,
    "utilization": 0.0878365041,
    "card_limit": 20204,
    "card_interest_rate": 0.0282019972,
    "model_output": 0.5820079206,
    "model_target": 1
  },
  {
    "monthly_salary": 158448,
    "fico": 812,
    "utilization": 0.0272395681,
    "card_limit": 27521,
    "card_interest_rate": 0.0909732018,
    "model_output": 0.5301838106,
    "model_target": 0
  },
  {
    "monthly_salary": 96575,
    "fico": 747,
    "utilization": 0.0036744488,
    "card_limit": 17226,
    "card_interest_rate": 0.0396173694,
    "model_output": 0.0939693128,
    "model_target": 0
  },
  {
    "monthly_salary": 108393,
    "fico": 723,
    "utilization": 0.0291581864,
    "card_limit": 36033,
    "card_interest_rate": 0.062520043,
    "model_output": 0.9853815455,
    "model_target": 1
  },
  {
    "monthly_salary": 137419,
    "fico": 889,
    "utilization": 0.0239803043,
    "card_limit": 19628,
    "card_interest_rate": 0.0998165376,
    "model_output": 0.4560903083,
    "model_target": 0
  },
  {
    "monthly_salary": 169243,
    "fico": 804,
    "utilization": 0.1344830851,
    "card_limit": 6377,
    "card_interest_rate": 0.0684301049,
    "model_output": 0.886255887,
    "model_target": 0
  },
  {
    "monthly_salary": 18955,
    "fico": 675,
    "utilization": 0.0820486192,
    "card_limit": 48360,
    "card_interest_rate": 0.119179425,
    "model_output": 0.3129959268,
    "model_target": 0
  },
  {
    "monthly_salary": 191354,
    "fico": 806,
    "utilization": 0.0110929546,
    "card_limit": 11626,
    "card_interest_rate": 0.0810778901,
    "model_output": 0.5477473662,
    "model_target": 0
  },
  {
    "monthly_salary": 84742,
    "fico": 693,
    "utilization": 0.1066442055,
    "card_limit": 13318,
    "card_interest_rate": 0.1000237132,
    "model_output": 0.6420487404,
    "model_target": 0
  },
  {
    "monthly_salary": 119176,
    "fico": 871,
    "utilization": 0.0836345085,
    "card_limit": 9347,
    "card_interest_rate": 0.0725396056,
    "model_output": 0.6451246152,
    "model_target": 1
  },
  {
    "monthly_salary": 136566,
    "fico": 757,
    "utilization": 0.1299479303,
    "card_limit": 35833,
    "card_interest_rate": 0.0297361184,
    "model_output": 0.667982361,
    "model_target": 0
  },
  {
    "monthly_salary": 162008,
    "fico": 657,
    "utilization": 0.0329461961,
    "card_limit": 25424,
    "card_interest_rate": 0.0694273197,
    "model_output": 0.2023930656,
    "model_target": 0
  },
  {
    "monthly_salary": 127163,
    "fico": 635,
    "utilization": 0.0938633862,
    "card_limit": 39165,
    "card_interest_rate": 0.1096901719,
    "model_output": 0.4466184962,
    "model_target": 0
  },
  {
    "monthly_salary": 75767,
    "fico": 878,
    "utilization": 0.0261926326,
    "card_limit": 34041,
    "card_interest_rate": 0.088086403,
    "model_output": 0.0319569555,
    "model_target": 0
  },
  {
    "monthly_salary": 59024,
    "fico": 622,
    "utilization": 0.0577039588,
    "card_limit": 5033,
    "card_interest_rate": 0.0366989285,
    "model_output": 0.1327221603,
    "model_target": 0
  },
  {
    "monthly_salary": 130286,
    "fico": 809,
    "utilization": 0.1413433445,
    "card_limit": 31260,
    "card_interest_rate": 0.034781338,
    "model_output": 0.2469531274,
    "model_target": 0
  },
  {
    "monthly_salary": 52716,
    "fico": 775,
    "utilization": 0.1407430205,
    "card_limit": 30322,
    "card_interest_rate": 0.1128334779,
    "model_output": 0.5115990785,
    "model_target": 0
  },
  {
    "monthly_salary": 133128,
    "fico": 622,
    "utilization": 0.1342766423,
    "card_limit": 35298,
    "card_interest_rate": 0.1101248513,
    "model_output": 0.9894070963,
    "model_target": 1
  },
  {
    "monthly_salary": 47485,
    "fico": 682,
    "utilization": 0.118010668,
    "card_limit": 18290,
    "card_interest_rate": 0.0481164951,
    "model_output": 0.790698425,
    "model_target": 0
  },
  {
    "monthly_salary": 131757,
    "fico": 876,
    "utilization": 0.1233901864,
    "card_limit": 22672,
    "card_interest_rate": 0.0848347494,
    "model_output": 0.9170848635,
    "model_target": 0
  },
  {
    "monthly_salary": 169268,
    "fico": 689,
    "utilization": 0.1454499228,
    "card_limit": 28352,
    "card_interest_rate": 0.0858469952,
    "model_output": 0.9094213655,
    "model_target": 1
  },
  {
    "monthly_salary": 65502,
    "fico": 802,
    "utilization": 0.1163065372,
    "card_limit": 19999,
    "card_interest_rate": 0.0970604648,
    "model_output": 0.0518545564,
    "model_target": 0
  },
  {
    "monthly_salary": 182329,
    "fico": 885,
    "utilization": 0.0587672119,
    "card_limit": 23135,
    "card_interest_rate": 0.0956632356,
    "model_output": 0.3663358675,
    "model_target": 0
  },
  {
    "monthly_salary": 195794,
    "fico": 809,
    "utilization": 0.1139976028,
    "card_limit": 38518,
    "card_interest_rate": 0.0311989504,
    "model_output": 0.3603810702,
    "model_target": 0
  },
  {
    "monthly_salary": 39083,
    "fico": 617,
    "utilization": 0.1342922943,
    "card_limit": 47933,
    "card_interest_rate": 0.0700027726,
    "model_output": 0.3074796149,
    "model_target": 0
  },
  {
    "monthly_salary": 158154,
    "fico": 622,
    "utilization": 0.0691107097,
    "card_limit": 49084,
    "card_interest_rate": 0.0595706157,
    "model_output": 0.4775314608,
    "model_target": 0
  },
  {
    "monthly_salary": 67500,
    "fico": 609,
    "utilization": 0.0211067422,
    "card_limit": 45274,
    "card_interest_rate": 0.0270324885,
    "model_output": 0.0324299793,
    "model_target": 0
  },
  {
    "monthly_salary": 101917,
    "fico": 658,
    "utilization": 0.123925656,
    "card_limit": 26889,
    "card_interest_rate": 0.0858673897,
    "model_output": 0.6230702077,
    "model_target": 1
  },
  {
    "monthly_salary": 103680,
    "fico": 835,
    "utilization": 0.030415762,
    "card_limit": 19209,
    "card_interest_rate": 0.0706192433,
    "model_output": 0.2120008088,
    "model_target": 0
  },
  {
    "monthly_salary": 130045,
    "fico": 631,
    "utilization": 0.0007757647,
    "card_limit": 11723,
    "card_interest_rate": 0.1112951843,
    "model_output": 0.3477990419,
    "model_target": 0
  },
  {
    "monthly_salary": 51533,
    "fico": 875,
    "utilization": 0.132038536,
    "card_limit": 43509,
    "card_interest_rate": 0.1152792107,
    "model_output": 0.6690774827,
    "model_target": 1
  },
  {
    "monthly_salary": 162291,
    "fico": 677,
    "utilization": 0.0455995627,
    "card_limit": 18895,
    "card_interest_rate": 0.0282537549,
    "model_output": 0.886595698,
    "model_target": 1
  },
  {
    "monthly_salary": 117148,
    "fico": 870,
    "utilization": 0.0179941735,
    "card_limit": 24720,
    "card_interest_rate": 0.0326282672,
    "model_output": 0.1391380798,
    "model_target": 0
  },
  {
    "monthly_salary": 82576,
    "fico": 669,
    "utilization": 0.0136641814,
    "card_limit": 49846,
    "card_interest_rate": 0.0237318711,
    "model_output": 0.7188083065,
    "model_target": 0
  },
  {
    "monthly_salary": 168734,
    "fico": 710,
    "utilization": 0.1110851071,
    "card_limit": 37353,
    "card_interest_rate": 0.0735674274,
    "model_output": 0.7269698157,
    "model_target": 0
  },
  {
    "monthly_salary": 157381,
    "fico": 680,
    "utilization": 0.1222984022,
    "card_limit": 7798,
    "card_interest_rate": 0.0759114751,
    "model_output": 0.332766653,
    "model_target": 0
  },
  {
    "monthly_salary": 157582,
    "fico": 692,
    "utilization": 0.1280188158,
    "card_limit": 30104,
    "card_interest_rate": 0.0267486394,
    "model_output": 0.9291392844,
    "model_target": 0
  },
  {
    "monthly_salary": 184349,
    "fico": 771,
    "utilization": 0.0473444751,
    "card_limit": 27102,
    "card_interest_rate": 0.0473997529,
    "model_output": 0.0680072599,
    "model_target": 0
  },
  {
    "monthly_salary": 60917,
    "fico": 727,
    "utilization": 0.0437921681,
    "card_limit": 5363,
    "card_interest_rate": 0.0748128119,
    "model_output": 0.8567019853,
    "model_target": 1
  },
  {
    "monthly_salary": 81705,
    "fico": 681,
    "utilization": 0.1334071457,
    "card_limit": 23124,
    "card_interest_rate": 0.1007343967,
    "model_output": 0.4390242251,
    "model_target": 0
  },
  {
    "monthly_salary": 136127,
    "fico": 649,
    "utilization": 0.1328901383,
    "card_limit": 36479,
    "card_interest_rate": 0.0430708953,
    "model_output": 0.3188552643,
    "model_target": 0
  },
  {
    "monthly_salary": 173606,
    "fico": 678,
    "utilization": 0.0800392498,
    "card_limit": 39935,
    "card_interest_rate": 0.0840886118,
    "model_output": 0.2164334115,
    "model_target": 0
  },
  {
    "monthly_salary": 180421,
    "fico": 817,
    "utilization": 0.1053602698,
    "card_limit": 33531,
    "card_interest_rate": 0.1148708772,
    "model_output": 0.5057869794,
    "model_target": 0
  },
  {
    "monthly_salary": 67539,
    "fico": 864,
    "utilization": 0.1540541715,
    "card_limit": 38597,
    "card_interest_rate": 0.0942550148,
    "model_output": 0.2094695343,
    "model_target": 0
  },
  {
    "monthly_salary": 171449,
    "fico": 739,
    "utilization": 0.0116577818,
    "card_limit": 27458,
    "card_interest_rate": 0.0295808615,
    "model_output": 0.3185171344,
    "model_target": 0
  },
  {
    "monthly_salary": 147627,
    "fico": 615,
    "utilization": 0.1079321578,
    "card_limit": 24619,
    "card_interest_rate": 0.020890416,
    "model_output": 0.6274568536,
    "model_target": 1
  },
  {
    "monthly_salary": 148921,
    "fico": 731,
    "utilization": 0.1115598778,
    "card_limit": 38188,
    "card_interest_rate": 0.025206471,
    "model_output": 0.7563556505,
    "model_target": 1
  },
  {
    "monthly_salary": 166218,
    "fico": 752,
    "utilization": 0.0249629338,
    "card_limit": 22213,
    "card_interest_rate": 0.1005979759,
    "model_output": 0.8326502845,
    "model_target": 1
  },
  {
    "monthly_salary": 154198,
    "fico": 782,
    "utilization": 0.1359384789,
    "card_limit": 5256,
    "card_interest_rate": 0.0319971053,
    "model_output": 0.9006253354,
    "model_target": 0
  },
  {
    "monthly_salary": 131849,
    "fico": 852,
    "utilization": 0.0642854029,
    "card_limit": 8022,
    "card_interest_rate": 0.0657133018,
    "model_output": 0.4836156576,
    "model_target": 0
  },
  {
    "monthly_salary": 23759,
    "fico": 869,
    "utilization": 0.1648792013,
    "card_limit": 46974,
    "card_interest_rate": 0.0363903977,
    "model_output": 0.7790609801,
    "model_target": 1
  },
  {
    "monthly_salary": 89474,
    "fico": 819,
    "utilization": 0.1177279117,
    "card_limit": 16295,
    "card_interest_rate": 0.1037130086,
    "model_output": 0.5237050505,
    "model_target": 1
  },
  {
    "monthly_salary": 151221,
    "fico": 899,
    "utilization": 0.09493325,
    "card_limit": 28245,
    "card_interest_rate": 0.0882700103,
    "model_output": 0.0019575801,
    "model_target": 0
  },
  {
    "monthly_salary": 121031,
    "fico": 882,
    "utilization": 0.1048052879,
    "card_limit": 26357,
    "card_interest_rate": 0.056107258,
    "model_output": 0.2254120696,
    "model_target": 0
  },
  {
    "monthly_salary": 14178,
    "fico": 883,
    "utilization": 0.0181837128,
    "card_limit": 14380,
    "card_interest_rate": 0.1173041295,
    "model_output": 0.4124943114,
    "model_target": 0
  },
  {
    "monthly_salary": 56945,
    "fico": 663,
    "utilization": 0.1019815582,
    "card_limit": 20135,
    "card_interest_rate": 0.0767028141,
    "model_output": 0.8563156621,
    "model_target": 1
  },
  {
    "monthly_salary": 122873,
    "fico": 867,
    "utilization": 0.0598988614,
    "card_limit": 6601,
    "card_interest_rate": 0.1061879641,
    "model_output": 0.8641168911,
    "model_target": 0
  },
  {
    "monthly_salary": 30149,
    "fico": 653,
    "utilization": 0.0387203674,
    "card_limit": 5376,
    "card_interest_rate": 0.0484846495,
    "model_output": 0.2994145057,
    "model_target": 0
  },
  {
    "monthly_salary": 183921,
    "fico": 882,
    "utilization": 0.0960372425,
    "card_limit": 35276,
    "card_interest_rate": 0.0665937734,
    "model_output": 0.5424607574,
    "model_target": 0
  },
  {
    "monthly_salary": 100598,
    "fico": 735,
    "utilization": 0.0473837225,
    "card_limit": 42702,
    "card_interest_rate": 0.0753779114,
    "model_output": 0.719019586,
    "model_target": 0
  },
  {
    "monthly_salary": 98895,
    "fico": 798,
    "utilization": 0.1172372279,
    "card_limit": 28432,
    "card_interest_rate": 0.1057587159,
    "model_output": 0.2937050477,
    "model_target": 0
  },
  {
    "monthly_salary": 164091,
    "fico": 770,
    "utilization": 0.1266061179,
    "card_limit": 7318,
    "card_interest_rate": 0.0331976303,
    "model_output": 0.7077368611,
    "model_target": 1
  },
  {
    "monthly_salary": 124218,
    "fico": 723,
    "utilization": 0.0619140584,
    "card_limit": 40567,
    "card_interest_rate": 0.1126995694,
    "model_output": 0.1517495317,
    "model_target": 0
  },
  {
    "monthly_salary": 32439,
    "fico": 826,
    "utilization": 0.1583716117,
    "card_limit": 17944,
    "card_interest_rate": 0.085611759,
    "model_output": 0.1407861168,
    "model_target": 0
  },
  {
    "monthly_salary": 28755,
    "fico": 898,
    "utilization": 0.0750499458,
    "card_limit": 35819,
    "card_interest_rate": 0.0393816715,
    "model_output": 0.5101204799,
    "model_target": 0
  },
  {
    "monthly_salary": 192507,
    "fico": 666,
    "utilization": 0.1627670352,
    "card_limit": 24390,
    "card_interest_rate": 0.0624383534,
    "model_output": 0.5769431175,
    "model_target": 1
  },
  {
    "monthly_salary": 122113,
    "fico": 661,
    "utilization": 0.0644856888,
    "card_limit": 38901,
    "card_interest_rate": 0.0866973569,
    "model_output": 0.1385744483,
    "model_target": 0
  },
  {
    "monthly_salary": 18349,
    "fico": 681,
    "utilization": 0.0764898139,
    "card_limit": 30423,
    "card_interest_rate": 0.1146359609,
    "model_output": 0.6223611428,
    "model_target": 1
  },
  {
    "monthly_salary": 161342,
    "fico": 707,
    "utilization": 0.0372303908,
    "card_limit": 38816,
    "card_interest_rate": 0.1122995047,
    "model_output": 0.8671439176,
    "model_target": 1
  },
  {
    "monthly_salary": 169415,
    "fico": 687,
    "utilization": 0.0453063673,
    "card_limit": 30742,
    "card_interest_rate": 0.0225568665,
    "model_output": 0.3716521184,
    "model_target": 0
  },
  {
    "monthly_salary": 103511,
    "fico": 659,
    "utilization": 0.0046624187,
    "card_limit": 11860,
    "card_interest_rate": 0.0682236634,
    "model_output": 0.2606485673,
    "model_target": 0
  },
  {
    "monthly_salary": 108360,
    "fico": 792,
    "utilization": 0.1605431055,
    "card_limit": 19334,
    "card_interest_rate": 0.0501066967,
    "model_output": 0.2827376041,
    "model_target": 0
  },
  {
    "monthly_salary": 36241,
    "fico": 795,
    "utilization": 0.0419328377,
    "card_limit": 15293,
    "card_interest_rate": 0.1134151778,
    "model_output": 0.8838895948,
    "model_target": 1
  },
  {
    "monthly_salary": 156308,
    "fico": 698,
    "utilization": 0.0775408407,
    "card_limit": 29688,
    "card_interest_rate": 0.0301454266,
    "model_output": 0.5665935172,
    "model_target": 1
  },
  {
    "monthly_salary": 168158,
    "fico": 776,
    "utilization": 0.0037737541,
    "card_limit": 12631,
    "card_interest_rate": 0.0689161183,
    "model_output": 0.8518962646,
    "model_target": 0
  },
  {
    "monthly_salary": 142064,
    "fico": 825,
    "utilization": 0.1354462511,
    "card_limit": 34548,
    "card_interest_rate": 0.0975900038,
    "model_output": 0.0842094342,
    "model_target": 0
  },
  {
    "monthly_salary": 94648,
    "fico": 812,
    "utilization": 0.1108998681,
    "card_limit": 25908,
    "card_interest_rate": 0.0322830509,
    "model_output": 0.7013629545,
    "model_target": 0
  },
  {
    "monthly_salary": 192642,
    "fico": 603,
    "utilization": 0.0401535157,
    "card_limit": 40395,
    "card_interest_rate": 0.082116886,
    "model_output": 0.5605928369,
    "model_target": 1
  },
  {
    "monthly_salary": 65049,
    "fico": 874,
    "utilization": 0.0555182705,
    "card_limit": 9540,
    "card_interest_rate": 0.1100861631,
    "model_output": 0.2800947781,
    "model_target": 0
  },
  {
    "monthly_salary": 57192,
    "fico": 722,
    "utilization": 0.1531515638,
    "card_limit": 8907,
    "card_interest_rate": 0.0470548498,
    "model_output": 0.6348192212,
    "model_target": 1
  },
  {
    "monthly_salary": 32211,
    "fico": 623,
    "utilization": 0.1526463545,
    "card_limit": 26178,
    "card_interest_rate": 0.0819304835,
    "model_output": 0.2927806806,
    "model_target": 0
  },
  {
    "monthly_salary": 138618,
    "fico": 741,
    "utilization": 0.1244218898,
    "card_limit": 8395,
    "card_interest_rate": 0.0440087462,
    "model_output": 0.3669399424,
    "model_target": 0
  },
  {
    "monthly_salary": 131487,
    "fico": 640,
    "utilization": 0.1101010039,
    "card_limit": 11158,
    "card_interest_rate": 0.0717510821,
    "model_output": 0.4662768645,
    "model_target": 0
  },
  {
    "monthly_salary": 99633,
    "fico": 681,
    "utilization": 0.133416454,
    "card_limit": 31888,
    "card_interest_rate": 0.1120294406,
    "model_output": 0.5836106701,
    "model_target": 1
  },
  {
    "monthly_salary": 128798,
    "fico": 681,
    "utilization": 0.1392235248,
    "card_limit": 16816,
    "card_interest_rate": 0.0691389349,
    "model_output": 0.4989725776,
    "model_target": 0
  },
  {
    "monthly_salary": 122139,
    "fico": 729,
    "utilization": 0.1230107083,
    "card_limit": 37032,
    "card_interest_rate": 0.1178733264,
    "model_output": 0.1468217206,
    "model_target": 0
  },
  {
    "monthly_salary": 47127,
    "fico": 653,
    "utilization": 0.0683060284,
    "card_limit": 48899,
    "card_interest_rate": 0.038687652,
    "model_output": 0.1705144488,
    "model_target": 0
  },
  {
    "monthly_salary": 194386,
    "fico": 654,
    "utilization": 0.0817630611,
    "card_limit": 25681,
    "card_interest_rate": 0.0312675207,
    "model_output": 0.4219489609,
    "model_target": 0
  },
  {
    "monthly_salary": 111274,
    "fico": 719,
    "utilization": 0.1665535168,
    "card_limit": 39004,
    "card_interest_rate": 0.0539112604,
    "model_output": 0.2345988425,
    "model_target": 0
  },
  {
    "monthly_salary": 114780,
    "fico": 713,
    "utilization": 0.0028462658,
    "card_limit": 7407,
    "card_interest_rate": 0.0913684332,
    "model_output": 0.9659766944,
    "model_target": 1
  },
  {
    "monthly_salary": 76006,
    "fico": 787,
    "utilization": 0.0227895282,
    "card_limit": 6176,
    "card_interest_rate": 0.0458297111,
    "model_output": 0.1637432054,
    "model_target": 0
  },
  {
    "monthly_salary": 69081,
    "fico": 659,
    "utilization": 0.0834468998,
    "card_limit": 40929,
    "card_interest_rate": 0.0220879148,
    "model_output": 0.5832734431,
    "model_target": 0
  },
  {
    "monthly_salary": 44989,
    "fico": 634,
    "utilization": 0.0788001669,
    "card_limit": 8272,
    "card_interest_rate": 0.1180745396,
    "model_output": 0.0165805818,
    "model_target": 0
  },
  {
    "monthly_salary": 90427,
    "fico": 734,
    "utilization": 0.1344913781,
    "card_limit": 27485,
    "card_interest_rate": 0.0330418329,
    "model_output": 0.249455274,
    "model_target": 0
  },
  {
    "monthly_salary": 174509,
    "fico": 728,
    "utilization": 0.0736248477,
    "card_limit": 35222,
    "card_interest_rate": 0.0301172905,
    "model_output": 0.8515762412,
    "model_target": 0
  },
  {
    "monthly_salary": 164765,
    "fico": 892,
    "utilization": 0.0122579769,
    "card_limit": 15587,
    "card_interest_rate": 0.0269918829,
    "model_output": 0.0939987503,
    "model_target": 0
  },
  {
    "monthly_salary": 167606,
    "fico": 743,
    "utilization": 0.1212586228,
    "card_limit": 48993,
    "card_interest_rate": 0.1193154315,
    "model_output": 0.30305531,
    "model_target": 0
  },
  {
    "monthly_salary": 25052,
    "fico": 649,
    "utilization": 0.0242175107,
    "card_limit": 46728,
    "card_interest_rate": 0.065306694,
    "model_output": 0.2853466286,
    "model_target": 0
  },
  {
    "monthly_salary": 11739,
    "fico": 835,
    "utilization": 0.1650853816,
    "card_limit": 18580,
    "card_interest_rate": 0.0288149101,
    "model_output": 0.3935944032,
    "model_target": 0
  },
  {
    "monthly_salary": 12659,
    "fico": 854,
    "utilization": 0.0048593375,
    "card_limit": 46897,
    "card_interest_rate": 0.1007293614,
    "model_output": 0.669881917,
    "model_target": 1
  },
  {
    "monthly_salary": 165396,
    "fico": 719,
    "utilization": 0.0838050082,
    "card_limit": 6260,
    "card_interest_rate": 0.0414177092,
    "model_output": 0.9993329806,
    "model_target": 1
  },
  {
    "monthly_salary": 36842,
    "fico": 746,
    "utilization": 0.0552895405,
    "card_limit": 46093,
    "card_interest_rate": 0.1162341152,
    "model_output": 0.7855589048,
    "model_target": 0
  },
  {
    "monthly_salary": 30665,
    "fico": 774,
    "utilization": 0.1408139715,
    "card_limit": 32183,
    "card_interest_rate": 0.0253519828,
    "model_output": 0.8703900045,
    "model_target": 0
  },
  {
    "monthly_salary": 40587,
    "fico": 876,
    "utilization": 0.1017911394,
    "card_limit": 13003,
    "card_interest_rate": 0.0436764572,
    "model_output": 0.0750247921,
    "model_target": 0
  },
  {
    "monthly_salary": 36961,
    "fico": 627,
    "utilization": 0.1080476245,
    "card_limit": 48156,
    "card_interest_rate": 0.0640693055,
    "model_output": 0.8867430686,
    "model_target": 0
  },
  {
    "monthly_salary": 112529,
    "fico": 696,
    "utilization": 0.1605060419,
    "card_limit": 34222,
    "card_interest_rate": 0.0240427496,
    "model_output": 0.9502168295,
    "model_target": 0
  },
  {
    "monthly_salary": 53702,
    "fico": 662,
    "utilization": 0.094898513,
    "card_limit": 45648,
    "card_interest_rate": 0.0328982618,
    "model_output": 0.5906795926,
    "model_target": 0
  },
  {
    "monthly_salary": 118586,
    "fico": 798,
    "utilization": 0.1452332834,
    "card_limit": 17563,
    "card_interest_rate": 0.0992030766,
    "model_output": 0.764782405,
    "model_target": 1
  },
  {
    "monthly_salary": 22676,
    "fico": 650,
    "utilization": 0.0892964496,
    "card_limit": 38897,
    "card_interest_rate": 0.0663287851,
    "model_output": 0.6609258596,
    "model_target": 1
  },
  {
    "monthly_salary": 108412,
    "fico": 808,
    "utilization": 0.0187735592,
    "card_limit": 19419,
    "card_interest_rate": 0.0440444084,
    "model_output": 0.7019669353,
    "model_target": 0
  },
  {
    "monthly_salary": 145259,
    "fico": 828,
    "utilization": 0.1069529662,
    "card_limit": 13085,
    "card_interest_rate": 0.0231725696,
    "model_output": 0.2020904119,
    "model_target": 0
  },
  {
    "monthly_salary": 110125,
    "fico": 625,
    "utilization": 0.051126054,
    "card_limit": 42567,
    "card_interest_rate": 0.0976508991,
    "model_output": 0.3191996193,
    "model_target": 0
  },
  {
    "monthly_salary": 159881,
    "fico": 795,
    "utilization": 0.0759845155,
    "card_limit": 42449,
    "card_interest_rate": 0.0466889263,
    "model_output": 0.7280366752,
    "model_target": 1
  },
  {
    "monthly_salary": 63095,
    "fico": 640,
    "utilization": 0.1277708235,
    "card_limit": 43357,
    "card_interest_rate": 0.0868084917,
    "model_output": 0.7574571231,
    "model_target": 1
  },
  {
    "monthly_salary": 175909,
    "fico": 664,
    "utilization": 0.090090662,
    "card_limit": 39306,
    "card_interest_rate": 0.0533930912,
    "model_output": 0.8717643226,
    "model_target": 1
  },
  {
    "monthly_salary": 183050,
    "fico": 698,
    "utilization": 0.1059631104,
    "card_limit": 36703,
    "card_interest_rate": 0.0476083662,
    "model_output": 0.9401999511,
    "model_target": 0
  },
  {
    "monthly_salary": 24033,
    "fico": 785,
    "utilization": 0.0875669064,
    "card_limit": 41501,
    "card_interest_rate": 0.0896476522,
    "model_output": 0.9004947407,
    "model_target": 1
  },
  {
    "monthly_salary": 23440,
    "fico": 651,
    "utilization": 0.1192443492,
    "card_limit": 21477,
    "card_interest_rate": 0.0984369557,
    "model_output": 0.9854840938,
    "model_target": 0
  },
  {
    "monthly_salary": 188547,
    "fico": 716,
    "utilization": 0.0850062767,
    "card_limit": 31744,
    "card_interest_rate": 0.11781271,
    "model_output": 0.4367123837,
    "model_target": 0
  },
  {
    "monthly_salary": 153116,
    "fico": 775,
    "utilization": 0.1431609848,
    "card_limit": 43805,
    "card_interest_rate": 0.0463607054,
    "model_output": 0.3336020516,
    "model_target": 0
  },
  {
    "monthly_salary": 124680,
    "fico": 859,
    "utilization": 0.003856406,
    "card_limit": 18549,
    "card_interest_rate": 0.0337942387,
    "model_output": 0.6583227525,
    "model_target": 0
  },
  {
    "monthly_salary": 35654,
    "fico": 886,
    "utilization": 0.1198377207,
    "card_limit": 21770,
    "card_interest_rate": 0.0790954484,
    "model_output": 0.0647785463,
    "model_target": 0
  },
  {
    "monthly_salary": 65975,
    "fico": 632,
    "utilization": 0.0679205603,
    "card_limit": 22851,
    "card_interest_rate": 0.0519430529,
    "model_output": 0.0888914274,
    "model_target": 0
  },
  {
    "monthly_salary": 82587,
    "fico": 793,
    "utilization": 0.1637074908,
    "card_limit": 8331,
    "card_interest_rate": 0.1057094778,
    "model_output": 0.6261407703,
    "model_target": 0
  },
  {
    "monthly_salary": 72133,
    "fico": 703,
    "utilization": 0.1242303621,
    "card_limit": 19031,
    "card_interest_rate": 0.099641432,
    "model_output": 0.6977877829,
    "model_target": 0
  },
  {
    "monthly_salary": 129808,
    "fico": 862,
    "utilization": 0.1519257686,
    "card_limit": 37906,
    "card_interest_rate": 0.0243251481,
    "model_output": 0.7991246462,
    "model_target": 1
  },
  {
    "monthly_salary": 101894,
    "fico": 702,
    "utilization": 0.0382214063,
    "card_limit": 5947,
    "card_interest_rate": 0.0473560248,
    "model_output": 0.8562642323,
    "model_target": 0
  },
  {
    "monthly_salary": 186972,
    "fico": 601,
    "utilization": 0.0141311745,
    "card_limit": 42338,
    "card_interest_rate": 0.0667974926,
    "model_output": 0.5780213377,
    "model_target": 0
  },
  {
    "monthly_salary": 96254,
    "fico": 626,
    "utilization": 0.1541600684,
    "card_limit": 46056,
    "card_interest_rate": 0.1167816871,
    "model_output": 0.0759672148,
    "model_target": 0
  },
  {
    "monthly_salary": 68354,
    "fico": 835,
    "utilization": 0.0157021926,
    "card_limit": 34737,
    "card_interest_rate": 0.0651637469,
    "model_output": 0.5734871073,
    "model_target": 1
  },
  {
    "monthly_salary": 13215,
    "fico": 803,
    "utilization": 0.1465891358,
    "card_limit": 39736,
    "card_interest_rate": 0.092861769,
    "model_output": 0.8686428559,
    "model_target": 1
  },
  {
    "monthly_salary": 114460,
    "fico": 707,
    "utilization": 0.1217155517,
    "card_limit": 16139,
    "card_interest_rate": 0.108141375,
    "model_output": 0.2431370339,
    "model_target": 0
  },
  {
    "monthly_salary": 172689,
    "fico": 759,
    "utilization": 0.0824060201,
    "card_limit": 47313,
    "card_interest_rate": 0.049418425,
    "model_output": 0.3780286593,
    "model_target": 0
  },
  {
    "monthly_salary": 97454,
    "fico": 806,
    "utilization": 0.1290882479,
    "card_limit": 33816,
    "card_interest_rate": 0.0777329362,
    "model_output": 0.3420451367,
    "model_target": 0
  },
  {
    "monthly_salary": 181073,
    "fico": 900,
    "utilization": 0.0828901713,
    "card_limit": 27784,
    "card_interest_rate": 0.0438971873,
    "model_output": 0.1559046632,
    "model_target": 0
  },
  {
    "monthly_salary": 155103,
    "fico": 758,
    "utilization": 0.0123050138,
    "card_limit": 37689,
    "card_interest_rate": 0.0347654459,
    "model_output": 0.4019316497,
    "model_target": 0
  },
  {
    "monthly_salary": 114255,
    "fico": 695,
    "utilization": 0.1649892269,
    "card_limit": 37159,
    "card_interest_rate": 0.0569209123,
    "model_output": 0.9834255949,
    "model_target": 1
  },
  {
    "monthly_salary": 94088,
    "fico": 657,
    "utilization": 0.0925574144,
    "card_limit": 43882,
    "card_interest_rate": 0.0307036329,
    "model_output": 0.2275098125,
    "model_target": 0
  },
  {
    "monthly_salary": 10679,
    "fico": 850,
    "utilization": 0.0318274618,
    "card_limit": 44282,
    "card_interest_rate": 0.0361192433,
    "model_output": 0.5162086914,
    "model_target": 1
  },
  {
    "monthly_salary": 30138,
    "fico": 720,
    "utilization": 0.0666807683,
    "card_limit": 48737,
    "card_interest_rate": 0.0731470202,
    "model_output": 0.5459902802,
    "model_target": 0
  },
  {
    "monthly_salary": 126003,
    "fico": 895,
    "utilization": 0.0316907847,
    "card_limit": 45721,
    "card_interest_rate": 0.0417739285,
    "model_output": 0.6878758144,
    "model_target": 0
  },
  {
    "monthly_salary": 162058,
    "fico": 859,
    "utilization": 0.125039981,
    "card_limit": 6258,
    "card_interest_rate": 0.039929134,
    "model_output": 0.2808275293,
    "model_target": 0
  },
  {
    "monthly_salary": 166525,
    "fico": 703,
    "utilization": 0.0565823426,
    "card_limit": 11277,
    "card_interest_rate": 0.1014825284,
    "model_output": 0.8131302003,
    "model_target": 1
  },
  {
    "monthly_salary": 66217,
    "fico": 645,
    "utilization": 0.0406584302,
    "card_limit": 33959,
    "card_interest_rate": 0.0866245803,
    "model_output": 0.928793251,
    "model_target": 0
  },
  {
    "monthly_salary": 81714,
    "fico": 868,
    "utilization": 0.1106820674,
    "card_limit": 47079,
    "card_interest_rate": 0.0311411273,
    "model_output": 0.6499027092,
    "model_target": 1
  },
  {
    "monthly_salary": 185975,
    "fico": 750,
    "utilization": 0.1513488385,
    "card_limit": 32701,
    "card_interest_rate": 0.1035402278,
    "model_output": 0.201348779,
    "model_target": 0
  },
  {
    "monthly_salary": 189065,
    "fico": 827,
    "utilization": 0.1198034455,
    "card_limit": 35439,
    "card_interest_rate": 0.1154905933,
    "model_output": 0.9131693135,
    "model_target": 1
  },
  {
    "monthly_salary": 194520,
    "fico": 631,
    "utilization": 0.1151069755,
    "card_limit": 17638,
    "card_interest_rate": 0.0689867682,
    "model_output": 0.2136693642,
    "model_target": 0
  },
  {
    "monthly_salary": 197293,
    "fico": 736,
    "utilization": 0.1269466068,
    "card_limit": 30264,
    "card_interest_rate": 0.1102335937,
    "model_output": 0.8738841581,
    "model_target": 0
  },
  {
    "monthly_salary": 194395,
    "fico": 857,
    "utilization": 0.0443867718,
    "card_limit": 28517,
    "card_interest_rate": 0.0979252713,
    "model_output": 0.8497684592,
    "model_target": 0
  },
  {
    "monthly_salary": 102266,
    "fico": 741,
    "utilization": 0.097294415,
    "card_limit": 19098,
    "card_interest_rate": 0.1028458307,
    "model_output": 0.3588790735,
    "model_target": 0
  },
  {
    "monthly_salary": 50983,
    "fico": 877,
    "utilization": 0.1550119759,
    "card_limit": 20888,
    "card_interest_rate": 0.0701514322,
    "model_output": 0.5478366311,
    "model_target": 1
  },
  {
    "monthly_salary": 82631,
    "fico": 761,
    "utilization": 0.0370882457,
    "card_limit": 29831,
    "card_interest_rate": 0.0757728185,
    "model_output": 0.2159678752,
    "model_target": 0
  },
  {
    "monthly_salary": 131088,
    "fico": 808,
    "utilization": 0.0034229009,
    "card_limit": 41741,
    "card_interest_rate": 0.0252721022,
    "model_output": 0.1996197909,
    "model_target": 0
  },
  {
    "monthly_salary": 47911,
    "fico": 886,
    "utilization": 0.0826233512,
    "card_limit": 25948,
    "card_interest_rate": 0.0553827816,
    "model_output": 0.7878975837,
    "model_target": 1
  },
  {
    "monthly_salary": 180987,
    "fico": 722,
    "utilization": 0.1081709211,
    "card_limit": 16103,
    "card_interest_rate": 0.0571605112,
    "model_output": 0.4705197546,
    "model_target": 0
  },
  {
    "monthly_salary": 148076,
    "fico": 827,
    "utilization": 0.0835953882,
    "card_limit": 37235,
    "card_interest_rate": 0.1060598846,
    "model_output": 0.2048753422,
    "model_target": 0
  },
  {
    "monthly_salary": 87370,
    "fico": 656,
    "utilization": 0.1162948884,
    "card_limit": 34688,
    "card_interest_rate": 0.1167275614,
    "model_output": 0.9678312143,
    "model_target": 0
  },
  {
    "monthly_salary": 72621,
    "fico": 648,
    "utilization": 0.0206228657,
    "card_limit": 11337,
    "card_interest_rate": 0.0709548915,
    "model_output": 0.054457682,
    "model_target": 0
  },
  {
    "monthly_salary": 39898,
    "fico": 635,
    "utilization": 0.0641148813,
    "card_limit": 39084,
    "card_interest_rate": 0.1161578019,
    "model_output": 0.923485755,
    "model_target": 1
  },
  {
    "monthly_salary": 144627,
    "fico": 680,
    "utilization": 0.0189815458,
    "card_limit": 45115,
    "card_interest_rate": 0.0505103992,
    "model_output": 0.8065319121,
    "model_target": 1
  },
  {
    "monthly_salary": 138163,
    "fico": 785,
    "utilization": 0.1418376239,
    "card_limit": 47512,
    "card_interest_rate": 0.1117343321,
    "model_output": 0.5408316911,
    "model_target": 0
  },
  {
    "monthly_salary": 77036,
    "fico": 609,
    "utilization": 0.0777041645,
    "card_limit": 35520,
    "card_interest_rate": 0.1048549434,
    "model_output": 0.9874864632,
    "model_target": 1
  },
  {
    "monthly_salary": 39940,
    "fico": 635,
    "utilization": 0.0890656378,
    "card_limit": 13242,
    "card_interest_rate": 0.0565831842,
    "model_output": 0.7739399057,
    "model_target": 0
  },
  {
    "monthly_salary": 138455,
    "fico": 744,
    "utilization": 0.1311141646,
    "card_limit": 43842,
    "card_interest_rate": 0.0259873149,
    "model_output": 0.6296230544,
    "model_target": 1
  },
  {
    "monthly_salary": 60209,
    "fico": 879,
    "utilization": 0.1258246483,
    "card_limit": 49258,
    "card_interest_rate": 0.053733682,
    "model_output": 0.9699165651,
    "model_target": 0
  },
  {
    "monthly_salary": 153455,
    "fico": 708,
    "utilization": 0.1570713047,
    "card_limit": 20563,
    "card_interest_rate": 0.0363845127,
    "model_output": 0.7281964228,
    "model_target": 1
  },
  {
    "monthly_salary": 143748,
    "fico": 817,
    "utilization": 0.0531605617,
    "card_limit": 24413,
    "card_interest_rate": 0.0875081921,
    "model_output": 0.6825767017,
    "model_target": 0
  },
  {
    "monthly_salary": 130168,
    "fico": 659,
    "utilization": 0.1621440997,
    "card_limit": 33371,
    "card_interest_rate": 0.0698614321,
    "model_output": 0.9685922782,
    "model_target": 1
  },
  {
    "monthly_salary": 162529,
    "fico": 686,
    "utilization": 0.1292360922,
    "card_limit": 35465,
    "card_interest_rate": 0.0651766286,
    "model_output": 0.748062721,
    "model_target": 0
  },
  {
    "monthly_salary": 98618,
    "fico": 658,
    "utilization": 0.0972928355,
    "card_limit": 37904,
    "card_interest_rate": 0.0923479452,
    "model_output": 0.630109069,
    "model_target": 1
  },
  {
    "monthly_salary": 25899,
    "fico": 816,
    "utilization": 0.10514244,
    "card_limit": 34026,
    "card_interest_rate": 0.0978542777,
    "model_output": 0.8536811776,
    "model_target": 0
  },
  {
    "monthly_salary": 27573,
    "fico": 730,
    "utilization": 0.0547566061,
    "card_limit": 43525,
    "card_interest_rate": 0.0404520737,
    "model_output": 0.5112594397,
    "model_target": 0
  },
  {
    "monthly_salary": 96815,
    "fico": 865,
    "utilization": 0.1017357317,
    "card_limit": 47625,
    "card_interest_rate": 0.0906649271,
    "model_output": 0.8001085208,
    "model_target": 0
  },
  {
    "monthly_salary": 62089,
    "fico": 822,
    "utilization": 0.0199341726,
    "card_limit": 13665,
    "card_interest_rate": 0.0365315446,
    "model_output": 0.7757403671,
    "model_target": 0
  },
  {
    "monthly_salary": 15517,
    "fico": 812,
    "utilization": 0.0605511749,
    "card_limit": 37855,
    "card_interest_rate": 0.0871765303,
    "model_output": 0.1895280685,
    "model_target": 0
  },
  {
    "monthly_salary": 107462,
    "fico": 726,
    "utilization": 0.0143150151,
    "card_limit": 42321,
    "card_interest_rate": 0.0743480435,
    "model_output": 0.50015242,
    "model_target": 1
  },
  {
    "monthly_salary": 129007,
    "fico": 735,
    "utilization": 0.1091839035,
    "card_limit": 43611,
    "card_interest_rate": 0.0260471908,
    "model_output": 0.6191899395,
    "model_target": 0
  },
  {
    "monthly_salary": 107867,
    "fico": 805,
    "utilization": 0.0160751319,
    "card_limit": 27942,
    "card_interest_rate": 0.0296387927,
    "model_output": 0.2667170479,
    "model_target": 0
  },
  {
    "monthly_salary": 125812,
    "fico": 696,
    "utilization": 0.0855025423,
    "card_limit": 42100,
    "card_interest_rate": 0.0617619498,
    "model_output": 0.6379277096,
    "model_target": 0
  },
  {
    "monthly_salary": 107068,
    "fico": 616,
    "utilization": 0.1438602268,
    "card_limit": 39852,
    "card_interest_rate": 0.1070816415,
    "model_output": 0.629809195,
    "model_target": 0
  },
  {
    "monthly_salary": 62769,
    "fico": 778,
    "utilization": 0.0551653369,
    "card_limit": 39784,
    "card_interest_rate": 0.083424399,
    "model_output": 0.7645517463,
    "model_target": 0
  },
  {
    "monthly_salary": 127590,
    "fico": 800,
    "utilization": 0.0491997602,
    "card_limit": 17221,
    "card_interest_rate": 0.0876875673,
    "model_output": 0.577881742,
    "model_target": 1
  },
  {
    "monthly_salary": 80121,
    "fico": 867,
    "utilization": 0.0127290372,
    "card_limit": 13311,
    "card_interest_rate": 0.0319828567,
    "model_output": 0.0696190649,
    "model_target": 0
  },
  {
    "monthly_salary": 79546,
    "fico": 711,
    "utilization": 0.0575293235,
    "card_limit": 44527,
    "card_interest_rate": 0.0387261738,
    "model_output": 0.9867217844,
    "model_target": 1
  },
  {
    "monthly_salary": 151014,
    "fico": 817,
    "utilization": 0.0562049162,
    "card_limit": 9627,
    "card_interest_rate": 0.0772728823,
    "model_output": 0.9993283625,
    "model_target": 0
  },
  {
    "monthly_salary": 127710,
    "fico": 812,
    "utilization": 0.1031501449,
    "card_limit": 25991,
    "card_interest_rate": 0.1185355186,
    "model_output": 0.4309835071,
    "model_target": 0
  },
  {
    "monthly_salary": 18672,
    "fico": 812,
    "utilization": 0.0863559774,
    "card_limit": 13541,
    "card_interest_rate": 0.0211624042,
    "model_output": 0.8513119982,
    "model_target": 0
  },
  {
    "monthly_salary": 79813,
    "fico": 726,
    "utilization": 0.0734319643,
    "card_limit": 49194,
    "card_interest_rate": 0.0792100604,
    "model_output": 0.8942569188,
    "model_target": 1
  },
  {
    "monthly_salary": 192973,
    "fico": 828,
    "utilization": 0.0719134867,
    "card_limit": 35617,
    "card_interest_rate": 0.0552718491,
    "model_output": 0.1916162498,
    "model_target": 0
  },
  {
    "monthly_salary": 120588,
    "fico": 675,
    "utilization": 0.0519151797,
    "card_limit": 14371,
    "card_interest_rate": 0.0959848839,
    "model_output": 0.8398400978,
    "model_target": 0
  },
  {
    "monthly_salary": 155818,
    "fico": 737,
    "utilization": 0.063559202,
    "card_limit": 12158,
    "card_interest_rate": 0.0236505284,
    "model_output": 0.3905320538,
    "model_target": 0
  },
  {
    "monthly_salary": 87637,
    "fico": 718,
    "utilization": 0.1627067271,
    "card_limit": 26779,
    "card_interest_rate": 0.0394882631,
    "model_output": 0.61180268,
    "model_target": 1
  },
  {
    "monthly_salary": 81613,
    "fico": 869,
    "utilization": 0.0880830587,
    "card_limit": 30523,
    "card_interest_rate": 0.0389263885,
    "model_output": 0.7281355585,
    "model_target": 0
  },
  {
    "monthly_salary": 10424,
    "fico": 774,
    "utilization": 0.1396464487,
    "card_limit": 28308,
    "card_interest_rate": 0.0388281829,
    "model_output": 0.2063968341,
    "model_target": 0
  },
  {
    "monthly_salary": 144075,
    "fico": 784,
    "utilization": 0.0714656182,
    "card_limit": 25955,
    "card_interest_rate": 0.0303751257,
    "model_output": 0.3200232177,
    "model_target": 0
  },
  {
    "monthly_salary": 173769,
    "fico": 783,
    "utilization": 0.1207049041,
    "card_limit": 33590,
    "card_interest_rate": 0.044184455,
    "model_output": 0.4555548494,
    "model_target": 0
  },
  {
    "monthly_salary": 169426,
    "fico": 798,
    "utilization": 0.1027365669,
    "card_limit": 11511,
    "card_interest_rate": 0.0837057907,
    "model_output": 0.5970061133,
    "model_target": 1
  },
  {
    "monthly_salary": 129323,
    "fico": 704,
    "utilization": 0.001122758,
    "card_limit": 32439,
    "card_interest_rate": 0.0982314282,
    "model_output": 0.605896291,
    "model_target": 0
  },
  {
    "monthly_salary": 158679,
    "fico": 708,
    "utilization": 0.0930809411,
    "card_limit": 49547,
    "card_interest_rate": 0.073824634,
    "model_output": 0.662315263,
    "model_target": 1
  },
  {
    "monthly_salary": 42299,
    "fico": 743,
    "utilization": 0.0956827875,
    "card_limit": 8365,
    "card_interest_rate": 0.0289150062,
    "model_output": 0.0577699396,
    "model_target": 0
  },
  {
    "monthly_salary": 59772,
    "fico": 677,
    "utilization": 0.0389978591,
    "card_limit": 35191,
    "card_interest_rate": 0.1161709511,
    "model_output": 0.4846384555,
    "model_target": 0
  },
  {
    "monthly_salary": 166647,
    "fico": 626,
    "utilization": 0.1582560166,
    "card_limit": 13281,
    "card_interest_rate": 0.0210115838,
    "model_output": 0.689411743,
    "model_target": 1
  },
  {
    "monthly_salary": 44816,
    "fico": 798,
    "utilization": 0.1033272129,
    "card_limit": 18552,
    "card_interest_rate": 0.0312346021,
    "model_output": 0.2691636391,
    "model_target": 0
  },
  {
    "monthly_salary": 158228,
    "fico": 770,
    "utilization": 0.1600254584,
    "card_limit": 11488,
    "card_interest_rate": 0.05122844,
    "model_output": 0.1619765215,
    "model_target": 0
  },
  {
    "monthly_salary": 186130,
    "fico": 795,
    "utilization": 0.0043834551,
    "card_limit": 9254,
    "card_interest_rate": 0.056443513,
    "model_output": 0.2014682987,
    "model_target": 0
  },
  {
    "monthly_salary": 116098,
    "fico": 781,
    "utilization": 0.063810466,
    "card_limit": 41786,
    "card_interest_rate": 0.0486502044,
    "model_output": 0.9532869882,
    "model_target": 0
  },
  {
    "monthly_salary": 28980,
    "fico": 656,
    "utilization": 0.0287791577,
    "card_limit": 8738,
    "card_interest_rate": 0.0646922094,
    "model_output": 0.0659222972,
    "model_target": 0
  },
  {
    "monthly_salary": 13476,
    "fico": 681,
    "utilization": 0.0388752963,
    "card_limit": 16510,
    "card_interest_rate": 0.0879418247,
    "model_output": 0.5635503531,
    "model_target": 0
  },
  {
    "monthly_salary": 152535,
    "fico": 624,
    "utilization": 0.0337280907,
    "card_limit": 41449,
    "card_interest_rate": 0.0883733146,
    "model_output": 0.5022381891,
    "model_target": 0
  },
  {
    "monthly_salary": 69677,
    "fico": 703,
    "utilization": 0.0292952057,
    "card_limit": 34600,
    "card_interest_rate": 0.032295337,
    "model_output": 0.4775635439,
    "model_target": 0
  },
  {
    "monthly_salary": 76169,
    "fico": 781,
    "utilization": 0.0290699398,
    "card_limit": 15116,
    "card_interest_rate": 0.0699391874,
    "model_output": 0.14751012,
    "model_target": 0
  },
  {
    "monthly_salary": 57275,
    "fico": 810,
    "utilization": 0.0877637622,
    "card_limit": 20281,
    "card_interest_rate": 0.1136280345,
    "model_output": 0.5482229616,
    "model_target": 0
  },
  {
    "monthly_salary": 35608,
    "fico": 882,
    "utilization": 0.092441947,
    "card_limit": 14415,
    "card_interest_rate": 0.0968896214,
    "model_output": 0.8987577304,
    "model_target": 0
  },
  {
    "monthly_salary": 155806,
    "fico": 894,
    "utilization": 0.1033191557,
    "card_limit": 17648,
    "card_interest_rate": 0.0925388978,
    "model_output": 0.619265563,
    "model_target": 1
  },
  {
    "monthly_salary": 55880,
    "fico": 680,
    "utilization": 0.0941934629,
    "card_limit": 35978,
    "card_interest_rate": 0.0518448763,
    "model_output": 0.5704845378,
    "model_target": 0
  },
  {
    "monthly_salary": 47953,
    "fico": 876,
    "utilization": 0.1344451909,
    "card_limit": 13549,
    "card_interest_rate": 0.0551056398,
    "model_output": 0.4555072174,
    "model_target": 0
  },
  {
    "monthly_salary": 91381,
    "fico": 757,
    "utilization": 0.011491256,
    "card_limit": 20371,
    "card_interest_rate": 0.0522755148,
    "model_output": 0.3765495178,
    "model_target": 0
  },
  {
    "monthly_salary": 170533,
    "fico": 785,
    "utilization": 0.159568923,
    "card_limit": 38738,
    "card_interest_rate": 0.0294169328,
    "model_output": 0.5614522329,
    "model_target": 1
  },
  {
    "monthly_salary": 81929,
    "fico": 837,
    "utilization": 0.1200617551,
    "card_limit": 37979,
    "card_interest_rate": 0.0438376879,
    "model_output": 0.7648364441,
    "model_target": 1
  },
  {
    "monthly_salary": 132759,
    "fico": 842,
    "utilization": 0.0372732952,
    "card_limit": 20813,
    "card_interest_rate": 0.0950057162,
    "model_output": 0.7996875539,
    "model_target": 0
  },
  {
    "monthly_salary": 89041,
    "fico": 618,
    "utilization": 0.008729873,
    "card_limit": 37664,
    "card_interest_rate": 0.0844837306,
    "model_output": 0.0215150346,
    "model_target": 0
  },
  {
    "monthly_salary": 175725,
    "fico": 698,
    "utilization": 0.1099826269,
    "card_limit": 32926,
    "card_interest_rate": 0.0928652821,
    "model_output": 0.0652356644,
    "model_target": 0
  },
  {
    "monthly_salary": 164256,
    "fico": 608,
    "utilization": 0.1313492604,
    "card_limit": 19682,
    "card_interest_rate": 0.0410245439,
    "model_output": 0.8494725942,
    "model_target": 0
  },
  {
    "monthly_salary": 150290,
    "fico": 696,
    "utilization": 0.0964780545,
    "card_limit": 6630,
    "card_interest_rate": 0.0538376009,
    "model_output": 0.7179369373,
    "model_target": 0
  },
  {
    "monthly_salary": 148511,
    "fico": 788,
    "utilization": 0.0229865759,
    "card_limit": 22028,
    "card_interest_rate": 0.057116133,
    "model_output": 0.4387309551,
    "model_target": 0
  },
  {
    "monthly_salary": 176651,
    "fico": 868,
    "utilization": 0.1119805918,
    "card_limit": 45370,
    "card_interest_rate": 0.0567733848,
    "model_output": 0.249502274,
    "model_target": 0
  },
  {
    "monthly_salary": 84872,
    "fico": 900,
    "utilization": 0.1658706415,
    "card_limit": 32425,
    "card_interest_rate": 0.0222943303,
    "model_output": 0.7769531036,
    "model_target": 1
  },
  {
    "monthly_salary": 36584,
    "fico": 661,
    "utilization": 0.1189257761,
    "card_limit": 25290,
    "card_interest_rate": 0.1144482298,
    "model_output": 0.3832858484,
    "model_target": 0
  },
  {
    "monthly_salary": 109491,
    "fico": 854,
    "utilization": 0.0809652592,
    "card_limit": 23741,
    "card_interest_rate": 0.0203179287,
    "model_output": 0.5027131164,
    "model_target": 1
  },
  {
    "monthly_salary": 153248,
    "fico": 889,
    "utilization": 0.0554432112,
    "card_limit": 36176,
    "card_interest_rate": 0.1008140296,
    "model_output": 0.7318639035,
    "model_target": 1
  },
  {
    "monthly_salary": 195050,
    "fico": 879,
    "utilization": 0.0184952264,
    "card_limit": 8965,
    "card_interest_rate": 0.0953927921,
    "model_output": 0.1559033299,
    "model_target": 0
  },
  {
    "monthly_salary": 160791,
    "fico": 850,
    "utilization": 0.1480455924,
    "card_limit": 41998,
    "card_interest_rate": 0.0653673859,
    "model_output": 0.419583732,
    "model_target": 0
  },
  {
    "monthly_salary": 66273,
    "fico": 671,
    "utilization": 0.1658759208,
    "card_limit": 12930,
    "card_interest_rate": 0.0945916266,
    "model_output": 0.4169618385,
    "model_target": 0
  },
  {
    "monthly_salary": 184696,
    "fico": 661,
    "utilization": 0.1621640436,
    "card_limit": 35565,
    "card_interest_rate": 0.0933871218,
    "model_output": 0.0044046462,
    "model_target": 0
  },
  {
    "monthly_salary": 106733,
    "fico": 627,
    "utilization": 0.064899422,
    "card_limit": 42155,
    "card_interest_rate": 0.1107727122,
    "model_output": 0.8036205652,
    "model_target": 1
  },
  {
    "monthly_salary": 119619,
    "fico": 606,
    "utilization": 0.1285807048,
    "card_limit": 21259,
    "card_interest_rate": 0.0302537906,
    "model_output": 0.2862565539,
    "model_target": 0
  },
  {
    "monthly_salary": 55240,
    "fico": 839,
    "utilization": 0.0607832425,
    "card_limit": 34040,
    "card_interest_rate": 0.1134146427,
    "model_output": 0.2803288271,
    "model_target": 0
  },
  {
    "monthly_salary": 65742,
    "fico": 682,
    "utilization": 0.0410856399,
    "card_limit": 15298,
    "card_interest_rate": 0.086300577,
    "model_output": 0.4890777952,
    "model_target": 0
  },
  {
    "monthly_salary": 28026,
    "fico": 740,
    "utilization": 0.0796315667,
    "card_limit": 17762,
    "card_interest_rate": 0.0549645662,
    "model_output": 0.5667484432,
    "model_target": 0
  },
  {
    "monthly_salary": 71565,
    "fico": 760,
    "utilization": 0.0806730995,
    "card_limit": 22153,
    "card_interest_rate": 0.1195047056,
    "model_output": 0.0625785065,
    "model_target": 0
  },
  {
    "monthly_salary": 30515,
    "fico": 875,
    "utilization": 0.065603664,
    "card_limit": 11785,
    "card_interest_rate": 0.0315483851,
    "model_output": 0.3587226578,
    "model_target": 0
  },
  {
    "monthly_salary": 185383,
    "fico": 877,
    "utilization": 0.0167466837,
    "card_limit": 28894,
    "card_interest_rate": 0.077221724,
    "model_output": 0.3201471706,
    "model_target": 0
  },
  {
    "monthly_salary": 80305,
    "fico": 625,
    "utilization": 0.162345219,
    "card_limit": 32702,
    "card_interest_rate": 0.0522793865,
    "model_output": 0.7144922304,
    "model_target": 0
  },
  {
    "monthly_salary": 142043,
    "fico": 618,
    "utilization": 0.0428489606,
    "card_limit": 40595,
    "card_interest_rate": 0.0870642799,
    "model_output": 0.0543400393,
    "model_target": 0
  },
  {
    "monthly_salary": 47700,
    "fico": 640,
    "utilization": 0.0011674802,
    "card_limit": 34993,
    "card_interest_rate": 0.0880555316,
    "model_output": 0.0428959986,
    "model_target": 0
  },
  {
    "monthly_salary": 74203,
    "fico": 858,
    "utilization": 0.1526984874,
    "card_limit": 43644,
    "card_interest_rate": 0.0694676438,
    "model_output": 0.5348550962,
    "model_target": 0
  },
  {
    "monthly_salary": 153266,
    "fico": 620,
    "utilization": 0.090646754,
    "card_limit": 12081,
    "card_interest_rate": 0.0748467864,
    "model_output": 0.256700999,
    "model_target": 0
  },
  {
    "monthly_salary": 39225,
    "fico": 764,
    "utilization": 0.1087389896,
    "card_limit": 15453,
    "card_interest_rate": 0.100563615,
    "model_output": 0.1702083413,
    "model_target": 0
  },
  {
    "monthly_salary": 126064,
    "fico": 666,
    "utilization": 0.0167898613,
    "card_limit": 41390,
    "card_interest_rate": 0.0982961218,
    "model_output": 0.0365348235,
    "model_target": 0
  },
  {
    "monthly_salary": 155759,
    "fico": 774,
    "utilization": 0.1261865865,
    "card_limit": 31787,
    "card_interest_rate": 0.0603631348,
    "model_output": 0.0185395331,
    "model_target": 0
  },
  {
    "monthly_salary": 103811,
    "fico": 782,
    "utilization": 0.127801231,
    "card_limit": 30958,
    "card_interest_rate": 0.0853076833,
    "model_output": 0.8682434831,
    "model_target": 1
  },
  {
    "monthly_salary": 177415,
    "fico": 825,
    "utilization": 0.1611764187,
    "card_limit": 13653,
    "card_interest_rate": 0.0361480935,
    "model_output": 0.0707403868,
    "model_target": 0
  },
  {
    "monthly_salary": 145907,
    "fico": 897,
    "utilization": 0.076030362,
    "card_limit": 30737,
    "card_interest_rate": 0.0375520273,
    "model_output": 0.663595988,
    "model_target": 1
  },
  {
    "monthly_salary": 139889,
    "fico": 809,
    "utilization": 0.1418059758,
    "card_limit": 31537,
    "card_interest_rate": 0.1191800504,
    "model_output": 0.2467109665,
    "model_target": 0
  },
  {
    "monthly_salary": 115295,
    "fico": 868,
    "utilization": 0.0285471193,
    "card_limit": 34144,
    "card_interest_rate": 0.113922536,
    "model_output": 0.7114560465,
    "model_target": 0
  },
  {
    "monthly_salary": 160285,
    "fico": 626,
    "utilization": 0.0663323973,
    "card_limit": 28937,
    "card_interest_rate": 0.0906952849,
    "model_output": 0.6799228727,
    "model_target": 0
  },
  {
    "monthly_salary": 80103,
    "fico": 890,
    "utilization": 0.1087644756,
    "card_limit": 10736,
    "card_interest_rate": 0.0704332149,
    "model_output": 0.3098161923,
    "model_target": 0
  },
  {
    "monthly_salary": 151863,
    "fico": 875,
    "utilization": 0.0667929853,
    "card_limit": 45784,
    "card_interest_rate": 0.0735819959,
    "model_output": 0.5941391739,
    "model_target": 0
  },
  {
    "monthly_salary": 195127,
    "fico": 858,
    "utilization": 0.0398185527,
    "card_limit": 45188,
    "card_interest_rate": 0.1024223893,
    "model_output": 0.3400431614,
    "model_target": 0
  },
  {
    "monthly_salary": 190283,
    "fico": 603,
    "utilization": 0.1297737315,
    "card_limit": 5038,
    "card_interest_rate": 0.0635992408,
    "model_output": 0.7672774885,
    "model_target": 1
  },
  {
    "monthly_salary": 47085,
    "fico": 715,
    "utilization": 0.0196764982,
    "card_limit": 29745,
    "card_interest_rate": 0.0748481559,
    "model_output": 0.9205422382,
    "model_target": 0
  },
  {
    "monthly_salary": 30614,
    "fico": 697,
    "utilization": 0.0957794639,
    "card_limit": 7460,
    "card_interest_rate": 0.1095334575,
    "model_output": 0.7397892073,
    "model_target": 1
  },
  {
    "monthly_salary": 91200,
    "fico": 845,
    "utilization": 0.0852636656,
    "card_limit": 23439,
    "card_interest_rate": 0.0306214101,
    "model_output": 0.0406618176,
    "model_target": 0
  },
  {
    "monthly_salary": 122804,
    "fico": 652,
    "utilization": 0.0357615879,
    "card_limit": 26435,
    "card_interest_rate": 0.0978948447,
    "model_output": 0.9579836539,
    "model_target": 1
  },
  {
    "monthly_salary": 196675,
    "fico": 671,
    "utilization": 0.0338103231,
    "card_limit": 12673,
    "card_interest_rate": 0.1070746574,
    "model_output": 0.1655085069,
    "model_target": 0
  },
  {
    "monthly_salary": 52203,
    "fico": 659,
    "utilization": 0.008206142,
    "card_limit": 20516,
    "card_interest_rate": 0.1037926788,
    "model_output": 0.486484319,
    "model_target": 0
  },
  {
    "monthly_salary": 81006,
    "fico": 760,
    "utilization": 0.0530790914,
    "card_limit": 6185,
    "card_interest_rate": 0.0786259483,
    "model_output": 0.4225233766,
    "model_target": 0
  },
  {
    "monthly_salary": 134639,
    "fico": 638,
    "utilization": 0.124084888,
    "card_limit": 43635,
    "card_interest_rate": 0.0862183275,
    "model_output": 0.7091353894,
    "model_target": 1
  },
  {
    "monthly_salary": 20281,
    "fico": 635,
    "utilization": 0.0722170698,
    "card_limit": 21406,
    "card_interest_rate": 0.0553462475,
    "model_output": 0.3509147373,
    "model_target": 0
  },
  {
    "monthly_salary": 150893,
    "fico": 641,
    "utilization": 0.1338380387,
    "card_limit": 9369,
    "card_interest_rate": 0.0503926247,
    "model_output": 0.1354636236,
    "model_target": 0
  },
  {
    "monthly_salary": 81605,
    "fico": 647,
    "utilization": 0.0091871656,
    "card_limit": 30958,
    "card_interest_rate": 0.0674166915,
    "model_output": 0.8006973797,
    "model_target": 0
  },
  {
    "monthly_salary": 35350,
    "fico": 663,
    "utilization": 0.0385725602,
    "card_limit": 40271,
    "card_interest_rate": 0.0409479148,
    "model_output": 0.5021628503,
    "model_target": 1
  },
  {
    "monthly_salary": 63059,
    "fico": 711,
    "utilization": 0.1516824963,
    "card_limit": 48692,
    "card_interest_rate": 0.0333732065,
    "model_output": 0.4101331639,
    "model_target": 0
  },
  {
    "monthly_salary": 169973,
    "fico": 619,
    "utilization": 0.1576126339,
    "card_limit": 7547,
    "card_interest_rate": 0.1129247004,
    "model_output": 0.4085402714,
    "model_target": 0
  },
  {
    "monthly_salary": 173903,
    "fico": 686,
    "utilization": 0.0654972668,
    "card_limit": 26471,
    "card_interest_rate": 0.0636467418,
    "model_output": 0.935404099,
    "model_target": 1
  },
  {
    "monthly_salary": 188017,
    "fico": 870,
    "utilization": 0.0081539781,
    "card_limit": 30850,
    "card_interest_rate": 0.0998410533,
    "model_output": 0.7446128981,
    "model_target": 1
  },
  {
    "monthly_salary": 57543,
    "fico": 789,
    "utilization": 0.0253362114,
    "card_limit": 14736,
    "card_interest_rate": 0.0723461917,
    "model_output": 0.3366010546,
    "model_target": 0
  },
  {
    "monthly_salary": 67584,
    "fico": 635,
    "utilization": 0.041047524,
    "card_limit": 27896,
    "card_interest_rate": 0.0329748623,
    "model_output": 0.7943559185,
    "model_target": 0
  },
  {
    "monthly_salary": 170872,
    "fico": 881,
    "utilization": 0.0459158934,
    "card_limit": 49130,
    "card_interest_rate": 0.030689943,
    "model_output": 0.9874332895,
    "model_target": 0
  },
  {
    "monthly_salary": 171813,
    "fico": 860,
    "utilization": 0.1282704767,
    "card_limit": 11088,
    "card_interest_rate": 0.0885824655,
    "model_output": 0.6488975747,
    "model_target": 1
  },
  {
    "monthly_salary": 16262,
    "fico": 641,
    "utilization": 0.0923052442,
    "card_limit": 48678,
    "card_interest_rate": 0.0802243722,
    "model_output": 0.2359312962,
    "model_target": 0
  },
  {
    "monthly_salary": 199433,
    "fico": 705,
    "utilization": 0.1136387915,
    "card_limit": 17434,
    "card_interest_rate": 0.0517220981,
    "model_output": 0.1102655584,
    "model_target": 0
  },
  {
    "monthly_salary": 186512,
    "fico": 825,
    "utilization": 0.0109015435,
    "card_limit": 25658,
    "card_interest_rate": 0.0572901641,
    "model_output": 0.1289290363,
    "model_target": 0
  },
  {
    "monthly_salary": 23536,
    "fico": 799,
    "utilization": 0.1642495351,
    "card_limit": 42237,
    "card_interest_rate": 0.0898798366,
    "model_output": 0.6612830464,
    "model_target": 1
  },
  {
    "monthly_salary": 164651,
    "fico": 727,
    "utilization": 0.0044770252,
    "card_limit": 22688,
    "card_interest_rate": 0.0504888187,
    "model_output": 0.768999694,
    "model_target": 1
  },
  {
    "monthly_salary": 10251,
    "fico": 816,
    "utilization": 0.1274273538,
    "card_limit": 49416,
    "card_interest_rate": 0.0564942495,
    "model_output": 0.0176764611,
    "model_target": 0
  },
  {
    "monthly_salary": 40391,
    "fico": 789,
    "utilization": 0.1247003907,
    "card_limit": 41231,
    "card_interest_rate": 0.0976036619,
    "model_output": 0.1091315162,
    "model_target": 0
  },
  {
    "monthly_salary": 78132,
    "fico": 886,
    "utilization": 0.0989367307,
    "card_limit": 36618,
    "card_interest_rate": 0.0750916292,
    "model_output": 0.8513059129,
    "model_target": 1
  },
  {
    "monthly_salary": 145364,
    "fico": 838,
    "utilization": 0.0535473988,
    "card_limit": 29715,
    "card_interest_rate": 0.1190458726,
    "model_output": 0.133744815,
    "model_target": 0
  },
  {
    "monthly_salary": 89410,
    "fico": 816,
    "utilization": 0.1045316694,
    "card_limit": 38615,
    "card_interest_rate": 0.0469864201,
    "model_output": 0.2062037171,
    "model_target": 0
  },
  {
    "monthly_salary": 51659,
    "fico": 654,
    "utilization": 0.1112801747,
    "card_limit": 31404,
    "card_interest_rate": 0.1119930175,
    "model_output": 0.216268502,
    "model_target": 0
  },
  {
    "monthly_salary": 59716,
    "fico": 602,
    "utilization": 0.0611058134,
    "card_limit": 43921,
    "card_interest_rate": 0.0388442141,
    "model_output": 0.0399674444,
    "model_target": 0
  },
  {
    "monthly_salary": 10892,
    "fico": 815,
    "utilization": 0.1651816733,
    "card_limit": 21775,
    "card_interest_rate": 0.0875940759,
    "model_output": 0.8906425545,
    "model_target": 0
  },
  {
    "monthly_salary": 32896,
    "fico": 819,
    "utilization": 0.1409413015,
    "card_limit": 33227,
    "card_interest_rate": 0.0268822965,
    "model_output": 0.9707938486,
    "model_target": 0
  },
  {
    "monthly_salary": 146340,
    "fico": 851,
    "utilization": 0.1454029548,
    "card_limit": 45279,
    "card_interest_rate": 0.1066226113,
    "model_output": 0.4996405631,
    "model_target": 0
  },
  {
    "monthly_salary": 194509,
    "fico": 670,
    "utilization": 0.0656009652,
    "card_limit": 11433,
    "card_interest_rate": 0.039693075,
    "model_output": 0.3444710679,
    "model_target": 0
  },
  {
    "monthly_salary": 12959,
    "fico": 849,
    "utilization": 0.1593107253,
    "card_limit": 24259,
    "card_interest_rate": 0.054522174,
    "model_output": 0.8752940761,
    "model_target": 1
  },
  {
    "monthly_salary": 24312,
    "fico": 609,
    "utilization": 0.1269035395,
    "card_limit": 12988,
    "card_interest_rate": 0.0657789278,
    "model_output": 0.9460073966,
    "model_target": 0
  },
  {
    "monthly_salary": 72634,
    "fico": 658,
    "utilization": 0.130908867,
    "card_limit": 46571,
    "card_interest_rate": 0.0317219304,
    "model_output": 0.820045971,
    "model_target": 1
  },
  {
    "monthly_salary": 75330,
    "fico": 675,
    "utilization": 0.0041403803,
    "card_limit": 36503,
    "card_interest_rate": 0.0906056044,
    "model_output": 0.2479317001,
    "model_target": 0
  },
  {
    "monthly_salary": 194867,
    "fico": 689,
    "utilization": 0.0229865431,
    "card_limit": 17947,
    "card_interest_rate": 0.0202845947,
    "model_output": 0.1612923496,
    "model_target": 0
  },
  {
    "monthly_salary": 121244,
    "fico": 669,
    "utilization": 0.1048147751,
    "card_limit": 28318,
    "card_interest_rate": 0.0436006086,
    "model_output": 0.83293994,
    "model_target": 1
  },
  {
    "monthly_salary": 180757,
    "fico": 672,
    "utilization": 0.0957895546,
    "card_limit": 13688,
    "card_interest_rate": 0.1133244725,
    "model_output": 0.2820423913,
    "model_target": 0
  },
  {
    "monthly_salary": 74128,
    "fico": 710,
    "utilization": 0.0472274258,
    "card_limit": 35988,
    "card_interest_rate": 0.0618905797,
    "model_output": 0.2643999381,
    "model_target": 0
  },
  {
    "monthly_salary": 46450,
    "fico": 755,
    "utilization": 0.1181655194,
    "card_limit": 49274,
    "card_interest_rate": 0.0632047436,
    "model_output": 0.5375091969,
    "model_target": 1
  },
  {
    "monthly_salary": 160613,
    "fico": 832,
    "utilization": 0.0429826834,
    "card_limit": 24316,
    "card_interest_rate": 0.0850976789,
    "model_output": 0.0568007151,
    "model_target": 0
  },
  {
    "monthly_salary": 126610,
    "fico": 667,
    "utilization": 0.0496780651,
    "card_limit": 49505,
    "card_interest_rate": 0.0613563901,
    "model_output": 0.8681443992,
    "model_target": 1
  },
  {
    "monthly_salary": 124144,
    "fico": 880,
    "utilization": 0.0526740762,
    "card_limit": 30373,
    "card_interest_rate": 0.0561721018,
    "model_output": 0.7627085551,
    "model_target": 1
  },
  {
    "monthly_salary": 20810,
    "fico": 850,
    "utilization": 0.011273585,
    "card_limit": 45944,
    "card_interest_rate": 0.1137852893,
    "model_output": 0.2461713815,
    "model_target": 0
  },
  {
    "monthly_salary": 17278,
    "fico": 629,
    "utilization": 0.15795476,
    "card_limit": 16475,
    "card_interest_rate": 0.1155612633,
    "model_output": 0.4269562459,
    "model_target": 0
  },
  {
    "monthly_salary": 172320,
    "fico": 840,
    "utilization": 0.1039719283,
    "card_limit": 6210,
    "card_interest_rate": 0.1181404098,
    "model_output": 0.6429072292,
    "model_target": 0
  },
  {
    "monthly_salary": 56970,
    "fico": 726,
    "utilization": 0.0581750242,
    "card_limit": 14500,
    "card_interest_rate": 0.0901034402,
    "model_output": 0.5370620111,
    "model_target": 0
  },
  {
    "monthly_salary": 87408,
    "fico": 771,
    "utilization": 0.1311012297,
    "card_limit": 39159,
    "card_interest_rate": 0.0908586445,
    "model_output": 0.7915704273,
    "model_target": 0
  },
  {
    "monthly_salary": 54219,
    "fico": 898,
    "utilization": 0.0693131421,
    "card_limit": 21778,
    "card_interest_rate": 0.020545055,
    "model_output": 0.0362863351,
    "model_target": 0
  },
  {
    "monthly_salary": 71240,
    "fico": 790,
    "utilization": 0.1146042403,
    "card_limit": 30574,
    "card_interest_rate": 0.0856970122,
    "model_output": 0.7239486101,
    "model_target": 1
  },
  {
    "monthly_salary": 181813,
    "fico": 603,
    "utilization": 0.1308460374,
    "card_limit": 32610,
    "card_interest_rate": 0.0707388832,
    "model_output": 0.2679544497,
    "model_target": 0
  },
  {
    "monthly_salary": 27442,
    "fico": 623,
    "utilization": 0.0698121177,
    "card_limit": 30568,
    "card_interest_rate": 0.1012895957,
    "model_output": 0.4739779766,
    "model_target": 0
  },
  {
    "monthly_salary": 50188,
    "fico": 774,
    "utilization": 0.0189150731,
    "card_limit": 24706,
    "card_interest_rate": 0.0721704394,
    "model_output": 0.8329880891,
    "model_target": 0
  },
  {
    "monthly_salary": 130682,
    "fico": 618,
    "utilization": 0.0724841493,
    "card_limit": 14912,
    "card_interest_rate": 0.0976662065,
    "model_output": 0.3273125387,
    "model_target": 0
  },
  {
    "monthly_salary": 194752,
    "fico": 787,
    "utilization": 0.0889904957,
    "card_limit": 22465,
    "card_interest_rate": 0.0858293063,
    "model_output": 0.1039153441,
    "model_target": 0
  },
  {
    "monthly_salary": 134772,
    "fico": 777,
    "utilization": 0.0386264161,
    "card_limit": 36554,
    "card_interest_rate": 0.0464460926,
    "model_output": 0.9293145783,
    "model_target": 1
  },
  {
    "monthly_salary": 41669,
    "fico": 759,
    "utilization": 0.1315128238,
    "card_limit": 32323,
    "card_interest_rate": 0.0925014268,
    "model_output": 0.5255033061,
    "model_target": 0
  },
  {
    "monthly_salary": 132071,
    "fico": 782,
    "utilization": 0.1035095539,
    "card_limit": 24351,
    "card_interest_rate": 0.0822396874,
    "model_output": 0.5861798324,
    "model_target": 0
  },
  {
    "monthly_salary": 134756,
    "fico": 737,
    "utilization": 0.0672498347,
    "card_limit": 11877,
    "card_interest_rate": 0.0367799004,
    "model_output": 0.2127461632,
    "model_target": 0
  },
  {
    "monthly_salary": 78818,
    "fico": 817,
    "utilization": 0.108392212,
    "card_limit": 34601,
    "card_interest_rate": 0.0232829982,
    "model_output": 0.3623467003,
    "model_target": 0
  },
  {
    "monthly_salary": 130408,
    "fico": 879,
    "utilization": 0.0688496441,
    "card_limit": 26227,
    "card_interest_rate": 0.0605109784,
    "model_output": 0.7400328926,
    "model_target": 0
  },
  {
    "monthly_salary": 75733,
    "fico": 601,
    "utilization": 0.0821448099,
    "card_limit": 16231,
    "card_interest_rate": 0.0961845665,
    "model_output": 0.5147823323,
    "model_target": 1
  },
  {
    "monthly_salary": 150558,
    "fico": 706,
    "utilization": 0.0657273681,
    "card_limit": 20866,
    "card_interest_rate": 0.030606102,
    "model_output": 0.3003254309,
    "model_target": 0
  },
  {
    "monthly_salary": 195109,
    "fico": 616,
    "utilization": 0.072452477,
    "card_limit": 46344,
    "card_interest_rate": 0.0556375884,
    "model_output": 0.349663189,
    "model_target": 0
  },
  {
    "monthly_salary": 45571,
    "fico": 763,
    "utilization": 0.1013659958,
    "card_limit": 26664,
    "card_interest_rate": 0.0333205158,
    "model_output": 0.6401421603,
    "model_target": 0
  },
  {
    "monthly_salary": 95878,
    "fico": 688,
    "utilization": 0.0098542693,
    "card_limit": 18103,
    "card_interest_rate": 0.0968562164,
    "model_output": 0.4434789374,
    "model_target": 0
  },
  {
    "monthly_salary": 58312,
    "fico": 716,
    "utilization": 0.0066500917,
    "card_limit": 44021,
    "card_interest_rate": 0.1129464334,
    "model_output": 0.7757236207,
    "model_target": 0
  },
  {
    "monthly_salary": 24183,
    "fico": 850,
    "utilization": 0.0649506701,
    "card_limit": 34297,
    "card_interest_rate": 0.0422144423,
    "model_output": 0.0584087279,
    "model_target": 0
  },
  {
    "monthly_salary": 190946,
    "fico": 633,
    "utilization": 0.0905632362,
    "card_limit": 15494,
    "card_interest_rate": 0.0446794894,
    "model_output": 0.5392485373,
    "model_target": 0
  },
  {
    "monthly_salary": 60666,
    "fico": 860,
    "utilization": 0.1288557675,
    "card_limit": 46366,
    "card_interest_rate": 0.059039255,
    "model_output": 0.4863032823,
    "model_target": 0
  },
  {
    "monthly_salary": 44222,
    "fico": 748,
    "utilization": 0.0853167407,
    "card_limit": 25375,
    "card_interest_rate": 0.0680386436,
    "model_output": 0.453283419,
    "model_target": 0
  },
  {
    "monthly_salary": 190679,
    "fico": 606,
    "utilization": 0.1186621257,
    "card_limit": 49457,
    "card_interest_rate": 0.0617412872,
    "model_output": 0.4777290678,
    "model_target": 0
  },
  {
    "monthly_salary": 62225,
    "fico": 766,
    "utilization": 0.1408595337,
    "card_limit": 10036,
    "card_interest_rate": 0.064062139,
    "model_output": 0.3893233922,
    "model_target": 0
  },
  {
    "monthly_salary": 172543,
    "fico": 837,
    "utilization": 0.0660396256,
    "card_limit": 33462,
    "card_interest_rate": 0.0365220658,
    "model_output": 0.1188944225,
    "model_target": 0
  },
  {
    "monthly_salary": 18976,
    "fico": 605,
    "utilization": 0.0121389586,
    "card_limit": 42254,
    "card_interest_rate": 0.0335381639,
    "model_output": 0.4254850587,
    "model_target": 0
  },
  {
    "monthly_salary": 101322,
    "fico": 636,
    "utilization": 0.1525906251,
    "card_limit": 39688,
    "card_interest_rate": 0.0329062923,
    "model_output": 0.7921084795,
    "model_target": 1
  },
  {
    "monthly_salary": 87656,
    "fico": 630,
    "utilization": 0.0757689384,
    "card_limit": 24027,
    "card_interest_rate": 0.0482936151,
    "model_output": 0.4129283493,
    "model_target": 0
  },
  {
    "monthly_salary": 35189,
    "fico": 831,
    "utilization": 0.1314885684,
    "card_limit": 17518,
    "card_interest_rate": 0.1145016242,
    "model_output": 0.7425736031,
    "model_target": 1
  },
  {
    "monthly_salary": 171997,
    "fico": 788,
    "utilization": 0.0995159708,
    "card_limit": 5084,
    "card_interest_rate": 0.0781555724,
    "model_output": 0.0148299789,
    "model_target": 0
  },
  {
    "monthly_salary": 163567,
    "fico": 853,
    "utilization": 0.107597052,
    "card_limit": 9279,
    "card_interest_rate": 0.08694118,
    "model_output": 0.3392572258,
    "model_target": 0
  },
  {
    "monthly_salary": 176854,
    "fico": 772,
    "utilization": 0.0861056863,
    "card_limit": 20075,
    "card_interest_rate": 0.0942779086,
    "model_output": 0.5607453251,
    "model_target": 1
  },
  {
    "monthly_salary": 165589,
    "fico": 874,
    "utilization": 0.0641655498,
    "card_limit": 14438,
    "card_interest_rate": 0.0982318716,
    "model_output": 0.1894313109,
    "model_target": 0
  },
  {
    "monthly_salary": 13023,
    "fico": 611,
    "utilization": 0.0510918447,
    "card_limit": 17150,
    "card_interest_rate": 0.0683123921,
    "model_output": 0.518641096,
    "model_target": 1
  },
  {
    "monthly_salary": 15387,
    "fico": 761,
    "utilization": 0.0982291695,
    "card_limit": 38132,
    "card_interest_rate": 0.0740934238,
    "model_output": 0.6899329636,
    "model_target": 0
  },
  {
    "monthly_salary": 57661,
    "fico": 672,
    "utilization": 0.0543284759,
    "card_limit": 35003,
    "card_interest_rate": 0.106185087,
    "model_output": 0.9230488153,
    "model_target": 0
  },
  {
    "monthly_salary": 12792,
    "fico": 659,
    "utilization": 0.0240095291,
    "card_limit": 38778,
    "card_interest_rate": 0.0357702353,
    "model_output": 0.4836411374,
    "model_target": 0
  },
  {
    "monthly_salary": 46585,
    "fico": 832,
    "utilization": 0.0949612635,
    "card_limit": 11600,
    "card_interest_rate": 0.1063622472,
    "model_output": 0.7975908777,
    "model_target": 1
  },
  {
    "monthly_salary": 111589,
    "fico": 760,
    "utilization": 0.0206991099,
    "card_limit": 29773,
    "card_interest_rate": 0.09173476,
    "model_output": 0.2630565629,
    "model_target": 0
  },
  {
    "monthly_salary": 89375,
    "fico": 896,
    "utilization": 0.0124272953,
    "card_limit": 40441,
    "card_interest_rate": 0.0233655533,
    "model_output": 0.7011082018,
    "model_target": 1
  },
  {
    "monthly_salary": 98990,
    "fico": 877,
    "utilization": 0.1415608943,
    "card_limit": 21163,
    "card_interest_rate": 0.0782433099,
    "model_output": 0.8158174967,
    "model_target": 0
  },
  {
    "monthly_salary": 131333,
    "fico": 648,
    "utilization": 0.0999483886,
    "card_limit": 22832,
    "card_interest_rate": 0.0573969946,
    "model_output": 0.6269334913,
    "model_target": 0
  },
  {
    "monthly_salary": 42711,
    "fico": 854,
    "utilization": 0.0506073517,
    "card_limit": 15832,
    "card_interest_rate": 0.0914820874,
    "model_output": 0.5467098567,
    "model_target": 0
  },
  {
    "monthly_salary": 32577,
    "fico": 807,
    "utilization": 0.1075847518,
    "card_limit": 35864,
    "card_interest_rate": 0.1162942031,
    "model_output": 0.8532963087,
    "model_target": 0
  },
  {
    "monthly_salary": 103388,
    "fico": 770,
    "utilization": 0.1199945808,
    "card_limit": 36629,
    "card_interest_rate": 0.0397441441,
    "model_output": 0.6100869491,
    "model_target": 1
  },
  {
    "monthly_salary": 101076,
    "fico": 770,
    "utilization": 0.0251835773,
    "card_limit": 15505,
    "card_interest_rate": 0.0942551899,
    "model_output": 0.1288306551,
    "model_target": 0
  },
  {
    "monthly_salary": 169251,
    "fico": 776,
    "utilization": 0.0462060585,
    "card_limit": 25627,
    "card_interest_rate": 0.0954607599,
    "model_output": 0.4340785236,
    "model_target": 0
  },
  {
    "monthly_salary": 81138,
    "fico": 683,
    "utilization": 0.1635483009,
    "card_limit": 30029,
    "card_interest_rate": 0.0470074504,
    "model_output": 0.0707201958,
    "model_target": 0
  },
  {
    "monthly_salary": 175383,
    "fico": 782,
    "utilization": 0.0734039529,
    "card_limit": 25003,
    "card_interest_rate": 0.0307899517,
    "model_output": 0.767643505,
    "model_target": 1
  },
  {
    "monthly_salary": 137700,
    "fico": 603,
    "utilization": 0.1445114465,
    "card_limit": 37053,
    "card_interest_rate": 0.0810727835,
    "model_output": 0.5348252464,
    "model_target": 0
  },
  {
    "monthly_salary": 146587,
    "fico": 669,
    "utilization": 0.0437302838,
    "card_limit": 8267,
    "card_interest_rate": 0.0277191936,
    "model_output": 0.4031308276,
    "model_target": 0
  },
  {
    "monthly_salary": 140749,
    "fico": 890,
    "utilization": 0.1028959356,
    "card_limit": 9424,
    "card_interest_rate": 0.1077813408,
    "model_output": 0.3084789491,
    "model_target": 0
  },
  {
    "monthly_salary": 20230,
    "fico": 737,
    "utilization": 0.14601819,
    "card_limit": 46399,
    "card_interest_rate": 0.1042104933,
    "model_output": 0.6559103997,
    "model_target": 1
  },
  {
    "monthly_salary": 137844,
    "fico": 635,
    "utilization": 0.1254471841,
    "card_limit": 18537,
    "card_interest_rate": 0.084563752,
    "model_output": 0.9894306717,
    "model_target": 1
  },
  {
    "monthly_salary": 184474,
    "fico": 719,
    "utilization": 0.1239362758,
    "card_limit": 31025,
    "card_interest_rate": 0.0458076099,
    "model_output": 0.2697989138,
    "model_target": 0
  },
  {
    "monthly_salary": 80560,
    "fico": 844,
    "utilization": 0.1361654628,
    "card_limit": 8913,
    "card_interest_rate": 0.0972090282,
    "model_output": 0.7011918335,
    "model_target": 0
  },
  {
    "monthly_salary": 78279,
    "fico": 707,
    "utilization": 0.156417572,
    "card_limit": 6946,
    "card_interest_rate": 0.0704037617,
    "model_output": 0.1790321294,
    "model_target": 0
  },
  {
    "monthly_salary": 165462,
    "fico": 766,
    "utilization": 0.0607901082,
    "card_limit": 34091,
    "card_interest_rate": 0.0491908634,
    "model_output": 0.0989681106,
    "model_target": 0
  },
  {
    "monthly_salary": 169508,
    "fico": 631,
    "utilization": 0.1101383813,
    "card_limit": 6755,
    "card_interest_rate": 0.039662607,
    "model_output": 0.0266559657,
    "model_target": 0
  },
  {
    "monthly_salary": 30142,
    "fico": 618,
    "utilization": 0.0614805377,
    "card_limit": 35227,
    "card_interest_rate": 0.0663711386,
    "model_output": 0.325230243,
    "model_target": 0
  },
  {
    "monthly_salary": 187461,
    "fico": 686,
    "utilization": 0.0487341148,
    "card_limit": 37120,
    "card_interest_rate": 0.1100870448,
    "model_output": 0.3132722554,
    "model_target": 0
  },
  {
    "monthly_salary": 50964,
    "fico": 888,
    "utilization": 0.116270292,
    "card_limit": 30994,
    "card_interest_rate": 0.0974845782,
    "model_output": 0.4541976814,
    "model_target": 0
  },
  {
    "monthly_salary": 69347,
    "fico": 775,
    "utilization": 0.1610634604,
    "card_limit": 34862,
    "card_interest_rate": 0.0501932376,
    "model_output": 0.8425593403,
    "model_target": 1
  },
  {
    "monthly_salary": 183092,
    "fico": 641,
    "utilization": 0.0861774214,
    "card_limit": 18350,
    "card_interest_rate": 0.0694526344,
    "model_output": 0.9351250496,
    "model_target": 1
  },
  {
    "monthly_salary": 148411,
    "fico": 654,
    "utilization": 0.142623287,
    "card_limit": 37404,
    "card_interest_rate": 0.0369878073,
    "model_output": 0.8199940127,
    "model_target": 0
  },
  {
    "monthly_salary": 104720,
    "fico": 816,
    "utilization": 0.0697460704,
    "card_limit": 25630,
    "card_interest_rate": 0.1199906314,
    "model_output": 0.4109538128,
    "model_target": 0
  },
  {
    "monthly_salary": 33860,
    "fico": 779,
    "utilization": 0.0134107586,
    "card_limit": 9590,
    "card_interest_rate": 0.0483430883,
    "model_output": 0.6434561256,
    "model_target": 0
  },
  {
    "monthly_salary": 11116,
    "fico": 809,
    "utilization": 0.1133494507,
    "card_limit": 9110,
    "card_interest_rate": 0.0829449705,
    "model_output": 0.4979101869,
    "model_target": 0
  },
  {
    "monthly_salary": 162156,
    "fico": 738,
    "utilization": 0.0554656558,
    "card_limit": 33611,
    "card_interest_rate": 0.0403602576,
    "model_output": 0.4592519891,
    "model_target": 0
  },
  {
    "monthly_salary": 38204,
    "fico": 833,
    "utilization": 0.0098204107,
    "card_limit": 10197,
    "card_interest_rate": 0.1006745463,
    "model_output": 0.9999091598,
    "model_target": 1
  },
  {
    "monthly_salary": 70640,
    "fico": 852,
    "utilization": 0.0757823451,
    "card_limit": 41490,
    "card_interest_rate": 0.1069068212,
    "model_output": 0.8205242338,
    "model_target": 0
  },
  {
    "monthly_salary": 138440,
    "fico": 796,
    "utilization": 0.0978470955,
    "card_limit": 8486,
    "card_interest_rate": 0.1154825167,
    "model_output": 0.0767031216,
    "model_target": 0
  },
  {
    "monthly_salary": 171819,
    "fico": 843,
    "utilization": 0.0571388126,
    "card_limit": 26816,
    "card_interest_rate": 0.067779873,
    "model_output": 0.9186255964,
    "model_target": 1
  },
  {
    "monthly_salary": 49983,
    "fico": 605,
    "utilization": 0.0009695185,
    "card_limit": 36059,
    "card_interest_rate": 0.0830840315,
    "model_output": 0.954755142,
    "model_target": 1
  },
  {
    "monthly_salary": 70573,
    "fico": 745,
    "utilization": 0.1109685528,
    "card_limit": 22481,
    "card_interest_rate": 0.0920085274,
    "model_output": 0.519048816,
    "model_target": 0
  },
  {
    "monthly_salary": 35707,
    "fico": 778,
    "utilization": 0.0347677131,
    "card_limit": 30259,
    "card_interest_rate": 0.1163973274,
    "model_output": 0.3736104893,
    "model_target": 0
  },
  {
    "monthly_salary": 12237,
    "fico": 678,
    "utilization": 0.0097898363,
    "card_limit": 5778,
    "card_interest_rate": 0.0923595581,
    "model_output": 0.8447753398,
    "model_target": 0
  },
  {
    "monthly_salary": 36140,
    "fico": 872,
    "utilization": 0.1083771868,
    "card_limit": 47044,
    "card_interest_rate": 0.0201677452,
    "model_output": 0.497501802,
    "model_target": 0
  },
  {
    "monthly_salary": 153323,
    "fico": 643,
    "utilization": 0.0340998385,
    "card_limit": 32326,
    "card_interest_rate": 0.0989031374,
    "model_output": 0.6499098945,
    "model_target": 0
  },
  {
    "monthly_salary": 115479,
    "fico": 773,
    "utilization": 0.0655068108,
    "card_limit": 33608,
    "card_interest_rate": 0.1052365284,
    "model_output": 0.032087818,
    "model_target": 0
  },
  {
    "monthly_salary": 114803,
    "fico": 681,
    "utilization": 0.1090033091,
    "card_limit": 17711,
    "card_interest_rate": 0.0453475327,
    "model_output": 0.819305616,
    "model_target": 0
  },
  {
    "monthly_salary": 45520,
    "fico": 651,
    "utilization": 0.1419771005,
    "card_limit": 34855,
    "card_interest_rate": 0.0663717014,
    "model_output": 0.7002632687,
    "model_target": 1
  },
  {
    "monthly_salary": 122687,
    "fico": 742,
    "utilization": 0.0665791386,
    "card_limit": 49224,
    "card_interest_rate": 0.0576410632,
    "model_output": 0.2352844242,
    "model_target": 0
  },
  {
    "monthly_salary": 177640,
    "fico": 889,
    "utilization": 0.0720220158,
    "card_limit": 41196,
    "card_interest_rate": 0.0867717526,
    "model_output": 0.6201701229,
    "model_target": 0
  },
  {
    "monthly_salary": 79117,
    "fico": 614,
    "utilization": 0.0452664969,
    "card_limit": 41408,
    "card_interest_rate": 0.0850084089,
    "model_output": 0.8558686886,
    "model_target": 1
  },
  {
    "monthly_salary": 59449,
    "fico": 815,
    "utilization": 0.159055423,
    "card_limit": 18957,
    "card_interest_rate": 0.0644821768,
    "model_output": 0.9548092938,
    "model_target": 1
  },
  {
    "monthly_salary": 17826,
    "fico": 743,
    "utilization": 0.1199859359,
    "card_limit": 9902,
    "card_interest_rate": 0.0381401184,
    "model_output": 0.9511417375,
    "model_target": 1
  },
  {
    "monthly_salary": 162775,
    "fico": 743,
    "utilization": 0.1457488485,
    "card_limit": 21071,
    "card_interest_rate": 0.0864401801,
    "model_output": 0.0685297731,
    "model_target": 0
  },
  {
    "monthly_salary": 158358,
    "fico": 796,
    "utilization": 0.1123480827,
    "card_limit": 10118,
    "card_interest_rate": 0.1157553776,
    "model_output": 0.012046189,
    "model_target": 0
  },
  {
    "monthly_salary": 73239,
    "fico": 637,
    "utilization": 0.1581581406,
    "card_limit": 39990,
    "card_interest_rate": 0.0516566194,
    "model_output": 0.3243276316,
    "model_target": 0
  },
  {
    "monthly_salary": 108372,
    "fico": 638,
    "utilization": 0.0069623319,
    "card_limit": 34841,
    "card_interest_rate": 0.0913377293,
    "model_output": 0.7613386046,
    "model_target": 0
  },
  {
    "monthly_salary": 54731,
    "fico": 741,
    "utilization": 0.1302699741,
    "card_limit": 17476,
    "card_interest_rate": 0.0396919334,
    "model_output": 0.2211072271,
    "model_target": 0
  },
  {
    "monthly_salary": 111443,
    "fico": 759,
    "utilization": 0.0354633827,
    "card_limit": 24974,
    "card_interest_rate": 0.0676928129,
    "model_output": 0.0073962324,
    "model_target": 0
  },
  {
    "monthly_salary": 132948,
    "fico": 716,
    "utilization": 0.0039809558,
    "card_limit": 8784,
    "card_interest_rate": 0.0591817796,
    "model_output": 0.3262556748,
    "model_target": 0
  },
  {
    "monthly_salary": 179300,
    "fico": 682,
    "utilization": 0.0541188045,
    "card_limit": 47199,
    "card_interest_rate": 0.0733502531,
    "model_output": 0.3515960497,
    "model_target": 0
  },
  {
    "monthly_salary": 10159,
    "fico": 870,
    "utilization": 0.0463774974,
    "card_limit": 11249,
    "card_interest_rate": 0.0953786915,
    "model_output": 0.0710985669,
    "model_target": 0
  },
  {
    "monthly_salary": 92194,
    "fico": 868,
    "utilization": 0.0435638102,
    "card_limit": 33467,
    "card_interest_rate": 0.0960449582,
    "model_output": 0.3181552599,
    "model_target": 0
  },
  {
    "monthly_salary": 135389,
    "fico": 601,
    "utilization": 0.1100617274,
    "card_limit": 32522,
    "card_interest_rate": 0.1087208907,
    "model_output": 0.0007042672,
    "model_target": 0
  },
  {
    "monthly_salary": 25357,
    "fico": 852,
    "utilization": 0.0918995842,
    "card_limit": 49621,
    "card_interest_rate": 0.1129452624,
    "model_output": 0.6663673766,
    "model_target": 1
  },
  {
    "monthly_salary": 192868,
    "fico": 733,
    "utilization": 0.1145806068,
    "card_limit": 35056,
    "card_interest_rate": 0.0481035921,
    "model_output": 0.2013739107,
    "model_target": 0
  },
  {
    "monthly_salary": 133814,
    "fico": 643,
    "utilization": 0.1334282292,
    "card_limit": 36233,
    "card_interest_rate": 0.0623878732,
    "model_output": 0.0794363856,
    "model_target": 0
  },
  {
    "monthly_salary": 72414,
    "fico": 815,
    "utilization": 0.1067788048,
    "card_limit": 10446,
    "card_interest_rate": 0.1141593776,
    "model_output": 0.9559103738,
    "model_target": 0
  },
  {
    "monthly_salary": 24592,
    "fico": 713,
    "utilization": 0.1181250317,
    "card_limit": 6323,
    "card_interest_rate": 0.0991364368,
    "model_output": 0.2275824584,
    "model_target": 0
  },
  {
    "monthly_salary": 144284,
    "fico": 843,
    "utilization": 0.1267319124,
    "card_limit": 22136,
    "card_interest_rate": 0.0973626158,
    "model_output": 0.9259387229,
    "model_target": 1
  },
  {
    "monthly_salary": 75982,
    "fico": 848,
    "utilization": 0.0684486061,
    "card_limit": 19370,
    "card_interest_rate": 0.115168104,
    "model_output": 0.2673660095,
    "model_target": 0
  },
  {
    "monthly_salary": 141898,
    "fico": 837,
    "utilization": 0.1363840768,
    "card_limit": 8807,
    "card_interest_rate": 0.0826312898,
    "model_output": 0.4503193002,
    "model_target": 0
  },
  {
    "monthly_salary": 86281,
    "fico": 787,
    "utilization": 0.0089139329,
    "card_limit": 23783,
    "card_interest_rate": 0.0853396717,
    "model_output": 0.0714810656,
    "model_target": 0
  },
  {
    "monthly_salary": 18233,
    "fico": 624,
    "utilization": 0.0852753084,
    "card_limit": 49583,
    "card_interest_rate": 0.042342782,
    "model_output": 0.637839981,
    "model_target": 0
  },
  {
    "monthly_salary": 141826,
    "fico": 859,
    "utilization": 0.0887589551,
    "card_limit": 38612,
    "card_interest_rate": 0.0956830393,
    "model_output": 0.0564536101,
    "model_target": 0
  },
  {
    "monthly_salary": 177759,
    "fico": 887,
    "utilization": 0.044566282,
    "card_limit": 18380,
    "card_interest_rate": 0.0709062188,
    "model_output": 0.4703115845,
    "model_target": 0
  },
  {
    "monthly_salary": 20218,
    "fico": 651,
    "utilization": 0.1495494982,
    "card_limit": 41897,
    "card_interest_rate": 0.0292829305,
    "model_output": 0.0782233571,
    "model_target": 0
  },
  {
    "monthly_salary": 198571,
    "fico": 867,
    "utilization": 0.1589892432,
    "card_limit": 8445,
    "card_interest_rate": 0.0604027219,
    "model_output": 0.9089577516,
    "model_target": 1
  },
  {
    "monthly_salary": 72925,
    "fico": 855,
    "utilization": 0.0816547166,
    "card_limit": 30946,
    "card_interest_rate": 0.057514256,
    "model_output": 0.9515900462,
    "model_target": 1
  },
  {
    "monthly_salary": 119636,
    "fico": 846,
    "utilization": 0.0793489066,
    "card_limit": 13007,
    "card_interest_rate": 0.094039202,
    "model_output": 0.193253466,
    "model_target": 0
  },
  {
    "monthly_salary": 11944,
    "fico": 809,
    "utilization": 0.1119216659,
    "card_limit": 18714,
    "card_interest_rate": 0.1137412171,
    "model_output": 0.1886933132,
    "model_target": 0
  },
  {
    "monthly_salary": 131980,
    "fico": 861,
    "utilization": 0.0980120894,
    "card_limit": 43093,
    "card_interest_rate": 0.0845462348,
    "model_output": 0.9584119168,
    "model_target": 1
  },
  {
    "monthly_salary": 132322,
    "fico": 862,
    "utilization": 0.0720895713,
    "card_limit": 48683,
    "card_interest_rate": 0.1023466463,
    "model_output": 0.2794217972,
    "model_target": 0
  },
  {
    "monthly_salary": 149595,
    "fico": 842,
    "utilization": 0.0963104437,
    "card_limit": 34086,
    "card_interest_rate": 0.1020337174,
    "model_output": 0.1874637136,
    "model_target": 0
  },
  {
    "monthly_salary": 92024,
    "fico": 639,
    "utilization": 0.014455814,
    "card_limit": 45695,
    "card_interest_rate": 0.0221720152,
    "model_output": 0.5038865381,
    "model_target": 0
  },
  {
    "monthly_salary": 55508,
    "fico": 873,
    "utilization": 0.1417239907,
    "card_limit": 36343,
    "card_interest_rate": 0.090609712,
    "model_output": 0.2088527002,
    "model_target": 0
  },
  {
    "monthly_salary": 58277,
    "fico": 864,
    "utilization": 0.0090848078,
    "card_limit": 20561,
    "card_interest_rate": 0.1031723886,
    "model_output": 0.8904501864,
    "model_target": 0
  },
  {
    "monthly_salary": 168433,
    "fico": 728,
    "utilization": 0.0375068088,
    "card_limit": 48813,
    "card_interest_rate": 0.0372405528,
    "model_output": 0.1938542567,
    "model_target": 0
  },
  {
    "monthly_salary": 166966,
    "fico": 611,
    "utilization": 0.1315901729,
    "card_limit": 6986,
    "card_interest_rate": 0.075455407,
    "model_output": 0.544501356,
    "model_target": 1
  },
  {
    "monthly_salary": 38996,
    "fico": 761,
    "utilization": 0.1407224256,
    "card_limit": 34857,
    "card_interest_rate": 0.028419365,
    "model_output": 0.7836933453,
    "model_target": 1
  },
  {
    "monthly_salary": 125213,
    "fico": 614,
    "utilization": 0.1118096296,
    "card_limit": 9209,
    "card_interest_rate": 0.1070704063,
    "model_output": 0.471055675,
    "model_target": 0
  },
  {
    "monthly_salary": 47762,
    "fico": 623,
    "utilization": 0.1000759149,
    "card_limit": 29326,
    "card_interest_rate": 0.0603129948,
    "model_output": 0.3584154557,
    "model_target": 0
  },
  {
    "monthly_salary": 114824,
    "fico": 611,
    "utilization": 0.0062251117,
    "card_limit": 25403,
    "card_interest_rate": 0.0711969907,
    "model_output": 0.0118273923,
    "model_target": 0
  },
  {
    "monthly_salary": 176710,
    "fico": 808,
    "utilization": 0.0986663606,
    "card_limit": 41147,
    "card_interest_rate": 0.0828344236,
    "model_output": 0.9633811336,
    "model_target": 0
  },
  {
    "monthly_salary": 112929,
    "fico": 761,
    "utilization": 0.1655555899,
    "card_limit": 9143,
    "card_interest_rate": 0.0840681944,
    "model_output": 0.6937495311,
    "model_target": 0
  },
  {
    "monthly_salary": 16123,
    "fico": 679,
    "utilization": 0.0393130319,
    "card_limit": 5560,
    "card_interest_rate": 0.0857613894,
    "model_output": 0.34038151,
    "model_target": 0
  },
  {
    "monthly_salary": 49827,
    "fico": 731,
    "utilization": 0.0934695865,
    "card_limit": 34615,
    "card_interest_rate": 0.1054306547,
    "model_output": 0.2357540901,
    "model_target": 0
  },
  {
    "monthly_salary": 29983,
    "fico": 670,
    "utilization": 0.1211767797,
    "card_limit": 49355,
    "card_interest_rate": 0.0303775783,
    "model_output": 0.815093405,
    "model_target": 0
  },
  {
    "monthly_salary": 70733,
    "fico": 637,
    "utilization": 0.1228348004,
    "card_limit": 39576,
    "card_interest_rate": 0.1160344357,
    "model_output": 0.5443063173,
    "model_target": 0
  },
  {
    "monthly_salary": 127863,
    "fico": 795,
    "utilization": 0.1266891396,
    "card_limit": 6768,
    "card_interest_rate": 0.0994978885,
    "model_output": 0.807824832,
    "model_target": 0
  },
  {
    "monthly_salary": 137734,
    "fico": 756,
    "utilization": 0.160787539,
    "card_limit": 46561,
    "card_interest_rate": 0.0980621341,
    "model_output": 0.1216966183,
    "model_target": 0
  },
  {
    "monthly_salary": 193660,
    "fico": 729,
    "utilization": 0.0039356333,
    "card_limit": 31641,
    "card_interest_rate": 0.0650641347,
    "model_output": 0.437783193,
    "model_target": 0
  },
  {
    "monthly_salary": 129677,
    "fico": 797,
    "utilization": 0.0017131735,
    "card_limit": 16459,
    "card_interest_rate": 0.1001171333,
    "model_output": 0.5560324135,
    "model_target": 1
  },
  {
    "monthly_salary": 162461,
    "fico": 641,
    "utilization": 0.0725097225,
    "card_limit": 15174,
    "card_interest_rate": 0.0402347098,
    "model_output": 0.4505932317,
    "model_target": 0
  },
  {
    "monthly_salary": 146802,
    "fico": 815,
    "utilization": 0.1216326942,
    "card_limit": 30264,
    "card_interest_rate": 0.0880232007,
    "model_output": 0.8154638455,
    "model_target": 0
  },
  {
    "monthly_salary": 193499,
    "fico": 824,
    "utilization": 0.0672881685,
    "card_limit": 10627,
    "card_interest_rate": 0.1030764762,
    "model_output": 0.5232888461,
    "model_target": 1
  },
  {
    "monthly_salary": 153498,
    "fico": 879,
    "utilization": 0.0489130532,
    "card_limit": 38580,
    "card_interest_rate": 0.0749334784,
    "model_output": 0.3542770524,
    "model_target": 0
  },
  {
    "monthly_salary": 49361,
    "fico": 805,
    "utilization": 0.0590117748,
    "card_limit": 40142,
    "card_interest_rate": 0.1141970266,
    "model_output": 0.7899169938,
    "model_target": 1
  },
  {
    "monthly_salary": 108443,
    "fico": 818,
    "utilization": 0.020187457,
    "card_limit": 43013,
    "card_interest_rate": 0.1118602539,
    "model_output": 0.4935701822,
    "model_target": 0
  },
  {
    "monthly_salary": 159602,
    "fico": 709,
    "utilization": 0.016691247,
    "card_limit": 40838,
    "card_interest_rate": 0.040090599,
    "model_output": 0.2242606523,
    "model_target": 0
  },
  {
    "monthly_salary": 47290,
    "fico": 786,
    "utilization": 0.1158511422,
    "card_limit": 28005,
    "card_interest_rate": 0.0645339836,
    "model_output": 0.8683943654,
    "model_target": 0
  },
  {
    "monthly_salary": 189166,
    "fico": 729,
    "utilization": 0.0793386303,
    "card_limit": 47602,
    "card_interest_rate": 0.0783341852,
    "model_output": 0.7446773172,
    "model_target": 0
  },
  {
    "monthly_salary": 96762,
    "fico": 639,
    "utilization": 0.0138907404,
    "card_limit": 22354,
    "card_interest_rate": 0.0303599473,
    "model_output": 0.6562182458,
    "model_target": 0
  },
  {
    "monthly_salary": 32146,
    "fico": 873,
    "utilization": 0.0772630983,
    "card_limit": 38488,
    "card_interest_rate": 0.0273466298,
    "model_output": 0.6409466754,
    "model_target": 1
  },
  {
    "monthly_salary": 152235,
    "fico": 655,
    "utilization": 0.0149507714,
    "card_limit": 10884,
    "card_interest_rate": 0.0751049309,
    "model_output": 0.803716095,
    "model_target": 1
  },
  {
    "monthly_salary": 86299,
    "fico": 701,
    "utilization": 0.0410158989,
    "card_limit": 7182,
    "card_interest_rate": 0.0710605996,
    "model_output": 0.1262417019,
    "model_target": 0
  },
  {
    "monthly_salary": 47175,
    "fico": 676,
    "utilization": 0.0847167983,
    "card_limit": 37472,
    "card_interest_rate": 0.0218184488,
    "model_output": 0.0511573579,
    "model_target": 0
  },
  {
    "monthly_salary": 170461,
    "fico": 610,
    "utilization": 0.0831443124,
    "card_limit": 34317,
    "card_interest_rate": 0.0529654302,
    "model_output": 0.5914194143,
    "model_target": 1
  },
  {
    "monthly_salary": 54993,
    "fico": 625,
    "utilization": 0.1146157886,
    "card_limit": 25394,
    "card_interest_rate": 0.0724394875,
    "model_output": 0.4826964913,
    "model_target": 0
  },
  {
    "monthly_salary": 120950,
    "fico": 725,
    "utilization": 0.0692770122,
    "card_limit": 38672,
    "card_interest_rate": 0.0915303971,
    "model_output": 0.9769359386,
    "model_target": 1
  },
  {
    "monthly_salary": 31352,
    "fico": 655,
    "utilization": 0.0163195575,
    "card_limit": 6278,
    "card_interest_rate": 0.1176897962,
    "model_output": 0.8888485018,
    "model_target": 0
  },
  {
    "monthly_salary": 114609,
    "fico": 788,
    "utilization": 0.0983760212,
    "card_limit": 13328,
    "card_interest_rate": 0.0635484823,
    "model_output": 0.7136131137,
    "model_target": 0
  },
  {
    "monthly_salary": 171554,
    "fico": 804,
    "utilization": 0.0941764888,
    "card_limit": 24635,
    "card_interest_rate": 0.1143992984,
    "model_output": 0.9622420592,
    "model_target": 0
  },
  {
    "monthly_salary": 179194,
    "fico": 695,
    "utilization": 0.1358537942,
    "card_limit": 44951,
    "card_interest_rate": 0.0285474499,
    "model_output": 0.9416361262,
    "model_target": 0
  },
  {
    "monthly_salary": 148574,
    "fico": 802,
    "utilization": 0.0688508897,
    "card_limit": 20011,
    "card_interest_rate": 0.1166027074,
    "model_output": 0.3228431494,
    "model_target": 0
  },
  {
    "monthly_salary": 190268,
    "fico": 805,
    "utilization": 0.005538961,
    "card_limit": 43505,
    "card_interest_rate": 0.0377584693,
    "model_output": 0.3625816746,
    "model_target": 0
  },
  {
    "monthly_salary": 67487,
    "fico": 625,
    "utilization": 0.1149161514,
    "card_limit": 28398,
    "card_interest_rate": 0.1119047777,
    "model_output": 0.4133410754,
    "model_target": 0
  },
  {
    "monthly_salary": 129795,
    "fico": 607,
    "utilization": 0.04265612,
    "card_limit": 10550,
    "card_interest_rate": 0.1184351852,
    "model_output": 0.6676285686,
    "model_target": 1
  },
  {
    "monthly_salary": 32520,
    "fico": 673,
    "utilization": 0.0998303449,
    "card_limit": 20189,
    "card_interest_rate": 0.0761141707,
    "model_output": 0.2640102379,
    "model_target": 0
  },
  {
    "monthly_salary": 22682,
    "fico": 615,
    "utilization": 0.1548098888,
    "card_limit": 32521,
    "card_interest_rate": 0.028363082,
    "model_output": 0.212675354,
    "model_target": 0
  },
  {
    "monthly_salary": 169615,
    "fico": 845,
    "utilization": 0.0032933481,
    "card_limit": 24023,
    "card_interest_rate": 0.0444337047,
    "model_output": 0.1094585464,
    "model_target": 0
  },
  {
    "monthly_salary": 124150,
    "fico": 623,
    "utilization": 0.0737816219,
    "card_limit": 23283,
    "card_interest_rate": 0.0675381145,
    "model_output": 0.5647994519,
    "model_target": 1
  },
  {
    "monthly_salary": 147254,
    "fico": 674,
    "utilization": 0.1178878025,
    "card_limit": 48564,
    "card_interest_rate": 0.0480719715,
    "model_output": 0.4732216043,
    "model_target": 0
  },
  {
    "monthly_salary": 63982,
    "fico": 747,
    "utilization": 0.1193795102,
    "card_limit": 37499,
    "card_interest_rate": 0.0221347559,
    "model_output": 0.9518738298,
    "model_target": 0
  },
  {
    "monthly_salary": 98118,
    "fico": 785,
    "utilization": 0.0543566076,
    "card_limit": 18030,
    "card_interest_rate": 0.0615741392,
    "model_output": 0.0117644163,
    "model_target": 0
  },
  {
    "monthly_salary": 192299,
    "fico": 873,
    "utilization": 0.1268549407,
    "card_limit": 16223,
    "card_interest_rate": 0.1094997855,
    "model_output": 0.1263797761,
    "model_target": 0
  },
  {
    "monthly_salary": 106907,
    "fico": 846,
    "utilization": 0.0831862133,
    "card_limit": 9054,
    "card_interest_rate": 0.0930872818,
    "model_output": 0.5343332396,
    "model_target": 0
  },
  {
    "monthly_salary": 10006,
    "fico": 866,
    "utilization": 0.020005625,
    "card_limit": 17634,
    "card_interest_rate": 0.0280342007,
    "model_output": 0.9643023573,
    "model_target": 1
  },
  {
    "monthly_salary": 123080,
    "fico": 857,
    "utilization": 0.0804379258,
    "card_limit": 46797,
    "card_interest_rate": 0.0608690932,
    "model_output": 0.8621142749,
    "model_target": 0
  },
  {
    "monthly_salary": 62771,
    "fico": 749,
    "utilization": 0.0124630942,
    "card_limit": 33466,
    "card_interest_rate": 0.0800594416,
    "model_output": 0.4098857497,
    "model_target": 0
  },
  {
    "monthly_salary": 180274,
    "fico": 802,
    "utilization": 0.0171923078,
    "card_limit": 21780,
    "card_interest_rate": 0.0823722888,
    "model_output": 0.7477759979,
    "model_target": 0
  },
  {
    "monthly_salary": 128174,
    "fico": 802,
    "utilization": 0.0951795272,
    "card_limit": 48311,
    "card_interest_rate": 0.0932657219,
    "model_output": 0.4369966019,
    "model_target": 0
  },
  {
    "monthly_salary": 165316,
    "fico": 648,
    "utilization": 0.0191763965,
    "card_limit": 26314,
    "card_interest_rate": 0.0440067872,
    "model_output": 0.8988031406,
    "model_target": 1
  },
  {
    "monthly_salary": 27398,
    "fico": 848,
    "utilization": 0.0350952698,
    "card_limit": 20671,
    "card_interest_rate": 0.0828323361,
    "model_output": 0.2085585143,
    "model_target": 0
  },
  {
    "monthly_salary": 84073,
    "fico": 697,
    "utilization": 0.1551987631,
    "card_limit": 12950,
    "card_interest_rate": 0.071076811,
    "model_output": 0.2047961219,
    "model_target": 0
  },
  {
    "monthly_salary": 156668,
    "fico": 866,
    "utilization": 0.0372964767,
    "card_limit": 27977,
    "card_interest_rate": 0.0640775103,
    "model_output": 0.8982708683,
    "model_target": 0
  },
  {
    "monthly_salary": 58195,
    "fico": 710,
    "utilization": 0.1090965152,
    "card_limit": 13010,
    "card_interest_rate": 0.1183517257,
    "model_output": 0.7954647857,
    "model_target": 0
  },
  {
    "monthly_salary": 103895,
    "fico": 694,
    "utilization": 0.1071791315,
    "card_limit": 30405,
    "card_interest_rate": 0.0883863935,
    "model_output": 0.9055210209,
    "model_target": 0
  },
  {
    "monthly_salary": 107246,
    "fico": 898,
    "utilization": 0.1342787294,
    "card_limit": 25806,
    "card_interest_rate": 0.1062616721,
    "model_output": 0.3033623017,
    "model_target": 0
  },
  {
    "monthly_salary": 27465,
    "fico": 822,
    "utilization": 0.0893421906,
    "card_limit": 40627,
    "card_interest_rate": 0.0535902418,
    "model_output": 0.7975835996,
    "model_target": 0
  },
  {
    "monthly_salary": 124917,
    "fico": 832,
    "utilization": 0.0070137407,
    "card_limit": 14636,
    "card_interest_rate": 0.0288782513,
    "model_output": 0.1900904427,
    "model_target": 0
  },
  {
    "monthly_salary": 69273,
    "fico": 813,
    "utilization": 0.1661974868,
    "card_limit": 22676,
    "card_interest_rate": 0.0559003893,
    "model_output": 0.9960345987,
    "model_target": 0
  },
  {
    "monthly_salary": 33069,
    "fico": 802,
    "utilization": 0.0571725258,
    "card_limit": 11788,
    "card_interest_rate": 0.1147756102,
    "model_output": 0.7489826719,
    "model_target": 0
  },
  {
    "monthly_salary": 161350,
    "fico": 878,
    "utilization": 0.0009366803,
    "card_limit": 12180,
    "card_interest_rate": 0.0524724198,
    "model_output": 0.3705829559,
    "model_target": 0
  },
  {
    "monthly_salary": 174382,
    "fico": 806,
    "utilization": 0.0927965528,
    "card_limit": 17519,
    "card_interest_rate": 0.0767596113,
    "model_output": 0.2189921552,
    "model_target": 0
  },
  {
    "monthly_salary": 45729,
    "fico": 812,
    "utilization": 0.0634695737,
    "card_limit": 17858,
    "card_interest_rate": 0.0917866909,
    "model_output": 0.7876507344,
    "model_target": 1
  },
  {
    "monthly_salary": 186359,
    "fico": 887,
    "utilization": 0.0423005041,
    "card_limit": 7823,
    "card_interest_rate": 0.101556301,
    "model_output": 0.6471520413,
    "model_target": 0
  },
  {
    "monthly_salary": 42184,
    "fico": 698,
    "utilization": 0.0104479088,
    "card_limit": 18473,
    "card_interest_rate": 0.1199411695,
    "model_output": 0.6980544075,
    "model_target": 0
  },
  {
    "monthly_salary": 58490,
    "fico": 796,
    "utilization": 0.0834789912,
    "card_limit": 28820,
    "card_interest_rate": 0.1051820127,
    "model_output": 0.7996382135,
    "model_target": 1
  },
  {
    "monthly_salary": 97719,
    "fico": 880,
    "utilization": 0.0386563674,
    "card_limit": 12429,
    "card_interest_rate": 0.0628840709,
    "model_output": 0.8437189696,
    "model_target": 0
  },
  {
    "monthly_salary": 129330,
    "fico": 630,
    "utilization": 0.0616648656,
    "card_limit": 29939,
    "card_interest_rate": 0.0772550669,
    "model_output": 0.6388753687,
    "model_target": 0
  },
  {
    "monthly_salary": 110214,
    "fico": 701,
    "utilization": 0.0513004279,
    "card_limit": 35828,
    "card_interest_rate": 0.022352201,
    "model_output": 0.5637813117,
    "model_target": 1
  },
  {
    "monthly_salary": 194203,
    "fico": 718,
    "utilization": 0.1270575518,
    "card_limit": 44988,
    "card_interest_rate": 0.1103945087,
    "model_output": 0.0166386832,
    "model_target": 0
  },
  {
    "monthly_salary": 24433,
    "fico": 819,
    "utilization": 0.0530663012,
    "card_limit": 17522,
    "card_interest_rate": 0.0631738819,
    "model_output": 0.3226244145,
    "model_target": 0
  },
  {
    "monthly_salary": 162023,
    "fico": 746,
    "utilization": 0.1485140822,
    "card_limit": 15434,
    "card_interest_rate": 0.0255886918,
    "model_output": 0.1566910099,
    "model_target": 0
  },
  {
    "monthly_salary": 160148,
    "fico": 734,
    "utilization": 0.0422253334,
    "card_limit": 17369,
    "card_interest_rate": 0.0445529649,
    "model_output": 0.4438685798,
    "model_target": 0
  },
  {
    "monthly_salary": 185288,
    "fico": 709,
    "utilization": 0.0998544705,
    "card_limit": 5329,
    "card_interest_rate": 0.0665720062,
    "model_output": 0.8567616019,
    "model_target": 0
  },
  {
    "monthly_salary": 175824,
    "fico": 799,
    "utilization": 0.1273963745,
    "card_limit": 46362,
    "card_interest_rate": 0.0924454883,
    "model_output": 0.483293963,
    "model_target": 0
  },
  {
    "monthly_salary": 91396,
    "fico": 895,
    "utilization": 0.0919624789,
    "card_limit": 35462,
    "card_interest_rate": 0.1154507198,
    "model_output": 0.7858431367,
    "model_target": 0
  },
  {
    "monthly_salary": 139190,
    "fico": 692,
    "utilization": 0.079693894,
    "card_limit": 9364,
    "card_interest_rate": 0.0852080345,
    "model_output": 0.7188684859,
    "model_target": 0
  },
  {
    "monthly_salary": 161069,
    "fico": 638,
    "utilization": 0.0567526183,
    "card_limit": 17436,
    "card_interest_rate": 0.0367600789,
    "model_output": 0.711711201,
    "model_target": 0
  },
  {
    "monthly_salary": 112699,
    "fico": 766,
    "utilization": 0.082310516,
    "card_limit": 19029,
    "card_interest_rate": 0.0429344992,
    "model_output": 0.2769230238,
    "model_target": 0
  },
  {
    "monthly_salary": 137405,
    "fico": 624,
    "utilization": 0.0262849002,
    "card_limit": 47220,
    "card_interest_rate": 0.0605684418,
    "model_output": 0.4037297862,
    "model_target": 0
  },
  {
    "monthly_salary": 153001,
    "fico": 628,
    "utilization": 0.1061483909,
    "card_limit": 46856,
    "card_interest_rate": 0.0614660552,
    "model_output": 0.9900868005,
    "model_target": 0
  },
  {
    "monthly_salary": 72922,
    "fico": 635,
    "utilization": 0.0142387349,
    "card_limit": 9232,
    "card_interest_rate": 0.0789866175,
    "model_output": 0.5215018589,
    "model_target": 0
  },
  {
    "monthly_salary": 42222,
    "fico": 684,
    "utilization": 0.0465657509,
    "card_limit": 11880,
    "card_interest_rate": 0.105680037,
    "model_output": 0.1255395832,
    "model_target": 0
  },
  {
    "monthly_salary": 64438,
    "fico": 768,
    "utilization": 0.0350087749,
    "card_limit": 34885,
    "card_interest_rate": 0.0303708013,
    "model_output": 0.2404789624,
    "model_target": 0
  },
  {
    "monthly_salary": 183865,
    "fico": 753,
    "utilization": 0.0132229995,
    "card_limit": 21768,
    "card_interest_rate": 0.0906225965,
    "model_output": 0.2027365094,
    "model_target": 0
  },
  {
    "monthly_salary": 13556,
    "fico": 676,
    "utilization": 0.1486982253,
    "card_limit": 15599,
    "card_interest_rate": 0.0465668821,
    "model_output": 0.1666119025,
    "model_target": 0
  },
  {
    "monthly_salary": 169390,
    "fico": 804,
    "utilization": 0.1105801649,
    "card_limit": 29151,
    "card_interest_rate": 0.1021949084,
    "model_output": 0.699935884,
    "model_target": 0
  },
  {
    "monthly_salary": 192580,
    "fico": 666,
    "utilization": 0.0242031389,
    "card_limit": 11054,
    "card_interest_rate": 0.1197362031,
    "model_output": 0.2544825909,
    "model_target": 0
  },
  {
    "monthly_salary": 165066,
    "fico": 752,
    "utilization": 0.1549354644,
    "card_limit": 14502,
    "card_interest_rate": 0.0868435577,
    "model_output": 0.1311453728,
    "model_target": 0
  },
  {
    "monthly_salary": 199413,
    "fico": 832,
    "utilization": 0.0667862938,
    "card_limit": 30822,
    "card_interest_rate": 0.0246947905,
    "model_output": 0.7337043443,
    "model_target": 1
  },
  {
    "monthly_salary": 182757,
    "fico": 675,
    "utilization": 0.0633954616,
    "card_limit": 15932,
    "card_interest_rate": 0.1190151993,
    "model_output": 0.7526624854,
    "model_target": 1
  },
  {
    "monthly_salary": 125101,
    "fico": 869,
    "utilization": 0.0088499443,
    "card_limit": 10760,
    "card_interest_rate": 0.0924182863,
    "model_output": 0.2489438739,
    "model_target": 0
  },
  {
    "monthly_salary": 108621,
    "fico": 709,
    "utilization": 0.0584929581,
    "card_limit": 11729,
    "card_interest_rate": 0.1095488082,
    "model_output": 0.6650128201,
    "model_target": 0
  },
  {
    "monthly_salary": 62693,
    "fico": 648,
    "utilization": 0.0509566395,
    "card_limit": 31605,
    "card_interest_rate": 0.0416047762,
    "model_output": 0.5775520962,
    "model_target": 1
  },
  {
    "monthly_salary": 148793,
    "fico": 779,
    "utilization": 0.0912535879,
    "card_limit": 34770,
    "card_interest_rate": 0.072793483,
    "model_output": 0.8361931115,
    "model_target": 1
  },
  {
    "monthly_salary": 126550,
    "fico": 649,
    "utilization": 0.1008769794,
    "card_limit": 28008,
    "card_interest_rate": 0.0232014721,
    "model_output": 0.9689706291,
    "model_target": 0
  },
  {
    "monthly_salary": 40090,
    "fico": 767,
    "utilization": 0.0632266563,
    "card_limit": 33755,
    "card_interest_rate": 0.0267159656,
    "model_output": 0.2507503497,
    "model_target": 0
  },
  {
    "monthly_salary": 36685,
    "fico": 734,
    "utilization": 0.1013605132,
    "card_limit": 9048,
    "card_interest_rate": 0.0419049045,
    "model_output": 0.6809072111,
    "model_target": 1
  },
  {
    "monthly_salary": 63831,
    "fico": 892,
    "utilization": 0.1364824009,
    "card_limit": 47572,
    "card_interest_rate": 0.0618224888,
    "model_output": 0.0420333538,
    "model_target": 0
  },
  {
    "monthly_salary": 189631,
    "fico": 725,
    "utilization": 0.0540006522,
    "card_limit": 35441,
    "card_interest_rate": 0.0772171044,
    "model_output": 0.0134737091,
    "model_target": 0
  },
  {
    "monthly_salary": 174252,
    "fico": 749,
    "utilization": 0.0245823254,
    "card_limit": 39328,
    "card_interest_rate": 0.1111493761,
    "model_output": 0.7882292192,
    "model_target": 1
  },
  {
    "monthly_salary": 176098,
    "fico": 673,
    "utilization": 0.0186687128,
    "card_limit": 16747,
    "card_interest_rate": 0.1121233885,
    "model_output": 0.6744052513,
    "model_target": 1
  },
  {
    "monthly_salary": 175535,
    "fico": 761,
    "utilization": 0.1494021004,
    "card_limit": 20398,
    "card_interest_rate": 0.066223716,
    "model_output": 0.733459663,
    "model_target": 0
  },
  {
    "monthly_salary": 178868,
    "fico": 821,
    "utilization": 0.0423043799,
    "card_limit": 25922,
    "card_interest_rate": 0.0813548739,
    "model_output": 0.7721060452,
    "model_target": 0
  },
  {
    "monthly_salary": 28866,
    "fico": 609,
    "utilization": 0.0900486171,
    "card_limit": 44245,
    "card_interest_rate": 0.0706694486,
    "model_output": 0.2607976402,
    "model_target": 0
  },
  {
    "monthly_salary": 173181,
    "fico": 879,
    "utilization": 0.0342506933,
    "card_limit": 41145,
    "card_interest_rate": 0.1040769885,
    "model_output": 0.0201975493,
    "model_target": 0
  },
  {
    "monthly_salary": 77280,
    "fico": 737,
    "utilization": 0.0468561787,
    "card_limit": 5957,
    "card_interest_rate": 0.043508155,
    "model_output": 0.6127394982,
    "model_target": 1
  },
  {
    "monthly_salary": 64804,
    "fico": 861,
    "utilization": 0.093130497,
    "card_limit": 5782,
    "card_interest_rate": 0.062333115,
    "model_output": 0.7547044627,
    "model_target": 0
  },
  {
    "monthly_salary": 140676,
    "fico": 708,
    "utilization": 0.0540675802,
    "card_limit": 47430,
    "card_interest_rate": 0.0242127576,
    "model_output": 0.3852195587,
    "model_target": 0
  },
  {
    "monthly_salary": 80315,
    "fico": 857,
    "utilization": 0.0945680339,
    "card_limit": 9379,
    "card_interest_rate": 0.1103612591,
    "model_output": 0.2858552364,
    "model_target": 0
  },
  {
    "monthly_salary": 118715,
    "fico": 696,
    "utilization": 0.1520708569,
    "card_limit": 12322,
    "card_interest_rate": 0.02881392,
    "model_output": 0.3630978082,
    "model_target": 0
  },
  {
    "monthly_salary": 24109,
    "fico": 869,
    "utilization": 0.0937244419,
    "card_limit": 7987,
    "card_interest_rate": 0.0487454961,
    "model_output": 0.619172988,
    "model_target": 0
  },
  {
    "monthly_salary": 58114,
    "fico": 852,
    "utilization": 0.0960095728,
    "card_limit": 24410,
    "card_interest_rate": 0.074993377,
    "model_output": 0.6082250393,
    "model_target": 1
  },
  {
    "monthly_salary": 80652,
    "fico": 688,
    "utilization": 0.0122710971,
    "card_limit": 29100,
    "card_interest_rate": 0.1080789484,
    "model_output": 0.139191093,
    "model_target": 0
  },
  {
    "monthly_salary": 114035,
    "fico": 859,
    "utilization": 0.0651889072,
    "card_limit": 26459,
    "card_interest_rate": 0.089848268,
    "model_output": 0.5363584045,
    "model_target": 0
  },
  {
    "monthly_salary": 188633,
    "fico": 771,
    "utilization": 0.0451388587,
    "card_limit": 29742,
    "card_interest_rate": 0.0602804921,
    "model_output": 0.9234729313,
    "model_target": 1
  },
  {
    "monthly_salary": 98985,
    "fico": 615,
    "utilization": 0.132540954,
    "card_limit": 38318,
    "card_interest_rate": 0.0991611517,
    "model_output": 0.8476528028,
    "model_target": 0
  },
  {
    "monthly_salary": 10242,
    "fico": 816,
    "utilization": 0.1406608949,
    "card_limit": 49191,
    "card_interest_rate": 0.1018643004,
    "model_output": 0.6799964136,
    "model_target": 1
  },
  {
    "monthly_salary": 156322,
    "fico": 728,
    "utilization": 0.1353407233,
    "card_limit": 42651,
    "card_interest_rate": 0.1054091094,
    "model_output": 0.319103612,
    "model_target": 0
  },
  {
    "monthly_salary": 29933,
    "fico": 678,
    "utilization": 0.0795160248,
    "card_limit": 7900,
    "card_interest_rate": 0.0363139729,
    "model_output": 0.1283617246,
    "model_target": 0
  },
  {
    "monthly_salary": 108594,
    "fico": 695,
    "utilization": 0.0731672875,
    "card_limit": 17554,
    "card_interest_rate": 0.0638027037,
    "model_output": 0.4787028353,
    "model_target": 0
  },
  {
    "monthly_salary": 87796,
    "fico": 709,
    "utilization": 0.0108929249,
    "card_limit": 49867,
    "card_interest_rate": 0.0653274118,
    "model_output": 0.991291627,
    "model_target": 0
  },
  {
    "monthly_salary": 81418,
    "fico": 666,
    "utilization": 0.1401740177,
    "card_limit": 13790,
    "card_interest_rate": 0.0333338156,
    "model_output": 0.3033589215,
    "model_target": 0
  },
  {
    "monthly_salary": 45341,
    "fico": 680,
    "utilization": 0.0213525817,
    "card_limit": 32061,
    "card_interest_rate": 0.0882041309,
    "model_output": 0.6597486015,
    "model_target": 1
  },
  {
    "monthly_salary": 94463,
    "fico": 837,
    "utilization": 0.1220642192,
    "card_limit": 27274,
    "card_interest_rate": 0.1116661702,
    "model_output": 0.199607711,
    "model_target": 0
  },
  {
    "monthly_salary": 31991,
    "fico": 802,
    "utilization": 0.1592230559,
    "card_limit": 45383,
    "card_interest_rate": 0.101234181,
    "model_output": 0.3405414949,
    "model_target": 0
  },
  {
    "monthly_salary": 68475,
    "fico": 835,
    "utilization": 0.0940305434,
    "card_limit": 27829,
    "card_interest_rate": 0.1088207169,
    "model_output": 0.4122241456,
    "model_target": 0
  },
  {
    "monthly_salary": 76985,
    "fico": 866,
    "utilization": 0.126378062,
    "card_limit": 14450,
    "card_interest_rate": 0.0948718754,
    "model_output": 0.9030124732,
    "model_target": 1
  },
  {
    "monthly_salary": 117842,
    "fico": 675,
    "utilization": 0.0871793498,
    "card_limit": 13704,
    "card_interest_rate": 0.1016508177,
    "model_output": 0.5760689648,
    "model_target": 1
  },
  {
    "monthly_salary": 20817,
    "fico": 880,
    "utilization": 0.1647269463,
    "card_limit": 47453,
    "card_interest_rate": 0.1150538166,
    "model_output": 0.2903863938,
    "model_target": 0
  },
  {
    "monthly_salary": 126352,
    "fico": 884,
    "utilization": 0.1347667875,
    "card_limit": 47354,
    "card_interest_rate": 0.0672914366,
    "model_output": 0.686535991,
    "model_target": 1
  },
  {
    "monthly_salary": 26620,
    "fico": 894,
    "utilization": 0.0732474827,
    "card_limit": 37508,
    "card_interest_rate": 0.0996287123,
    "model_output": 0.8463532097,
    "model_target": 1
  },
  {
    "monthly_salary": 19782,
    "fico": 785,
    "utilization": 0.1056677815,
    "card_limit": 46106,
    "card_interest_rate": 0.0738877949,
    "model_output": 0.2600949564,
    "model_target": 0
  },
  {
    "monthly_salary": 23064,
    "fico": 809,
    "utilization": 0.0495976829,
    "card_limit": 47527,
    "card_interest_rate": 0.0239472686,
    "model_output": 0.0887936976,
    "model_target": 0
  },
  {
    "monthly_salary": 175549,
    "fico": 871,
    "utilization": 0.0148991416,
    "card_limit": 17416,
    "card_interest_rate": 0.1173097453,
    "model_output": 0.7255614793,
    "model_target": 0
  },
  {
    "monthly_salary": 26358,
    "fico": 869,
    "utilization": 0.1466925443,
    "card_limit": 24589,
    "card_interest_rate": 0.1077180897,
    "model_output": 0.716224693,
    "model_target": 1
  },
  {
    "monthly_salary": 150486,
    "fico": 678,
    "utilization": 0.1063451179,
    "card_limit": 10870,
    "card_interest_rate": 0.1161485158,
    "model_output": 0.1064149608,
    "model_target": 0
  },
  {
    "monthly_salary": 128559,
    "fico": 880,
    "utilization": 0.1643411984,
    "card_limit": 21295,
    "card_interest_rate": 0.103836356,
    "model_output": 0.1001339896,
    "model_target": 0
  },
  {
    "monthly_salary": 84287,
    "fico": 865,
    "utilization": 0.0119793659,
    "card_limit": 5213,
    "card_interest_rate": 0.0985454046,
    "model_output": 0.1928854319,
    "model_target": 0
  },
  {
    "monthly_salary": 18626,
    "fico": 795,
    "utilization": 0.0027614114,
    "card_limit": 36375,
    "card_interest_rate": 0.0286650233,
    "model_output": 0.3551240603,
    "model_target": 0
  },
  {
    "monthly_salary": 165046,
    "fico": 673,
    "utilization": 0.038337852,
    "card_limit": 30862,
    "card_interest_rate": 0.0443522449,
    "model_output": 0.6684336646,
    "model_target": 0
  },
  {
    "monthly_salary": 61208,
    "fico": 763,
    "utilization": 0.1556121919,
    "card_limit": 29106,
    "card_interest_rate": 0.1108847565,
    "model_output": 0.711539201,
    "model_target": 0
  },
  {
    "monthly_salary": 44737,
    "fico": 721,
    "utilization": 0.0758731339,
    "card_limit": 20180,
    "card_interest_rate": 0.0473689989,
    "model_output": 0.9480696463,
    "model_target": 1
  },
  {
    "monthly_salary": 77890,
    "fico": 854,
    "utilization": 0.1139712546,
    "card_limit": 35344,
    "card_interest_rate": 0.0552827669,
    "model_output": 0.2804885367,
    "model_target": 0
  },
  {
    "monthly_salary": 106560,
    "fico": 789,
    "utilization": 0.0671487497,
    "card_limit": 5585,
    "card_interest_rate": 0.0741046741,
    "model_output": 0.8457292809,
    "model_target": 1
  },
  {
    "monthly_salary": 77296,
    "fico": 881,
    "utilization": 0.0950647373,
    "card_limit": 6543,
    "card_interest_rate": 0.1005384444,
    "model_output": 0.1030005219,
    "model_target": 0
  },
  {
    "monthly_salary": 191172,
    "fico": 607,
    "utilization": 0.0802562056,
    "card_limit": 49382,
    "card_interest_rate": 0.058386515,
    "model_output": 0.0453247967,
    "model_target": 0
  },
  {
    "monthly_salary": 11739,
    "fico": 743,
    "utilization": 0.1212665901,
    "card_limit": 13193,
    "card_interest_rate": 0.0220641999,
    "model_output": 0.3331775393,
    "model_target": 0
  },
  {
    "monthly_salary": 198850,
    "fico": 651,
    "utilization": 0.0749343328,
    "card_limit": 24221,
    "card_interest_rate": 0.0524843902,
    "model_output": 0.7763877635,
    "model_target": 1
  },
  {
    "monthly_salary": 70812,
    "fico": 756,
    "utilization": 0.0000983815,
    "card_limit": 15027,
    "card_interest_rate": 0.1072145893,
    "model_output": 0.50501627,
    "model_target": 1
  },
  {
    "monthly_salary": 66120,
    "fico": 898,
    "utilization": 0.1421599147,
    "card_limit": 20803,
    "card_interest_rate": 0.0740700195,
    "model_output": 0.0523511004,
    "model_target": 0
  },
  {
    "monthly_salary": 70006,
    "fico": 863,
    "utilization": 0.0372872757,
    "card_limit": 21136,
    "card_interest_rate": 0.0396894896,
    "model_output": 0.5749944362,
    "model_target": 1
  },
  {
    "monthly_salary": 185746,
    "fico": 835,
    "utilization": 0.0675793015,
    "card_limit": 33827,
    "card_interest_rate": 0.0397043122,
    "model_output": 0.4200037172,
    "model_target": 0
  },
  {
    "monthly_salary": 17834,
    "fico": 791,
    "utilization": 0.1350952221,
    "card_limit": 8174,
    "card_interest_rate": 0.0407942722,
    "model_output": 0.084200777,
    "model_target": 0
  },
  {
    "monthly_salary": 13241,
    "fico": 656,
    "utilization": 0.1167894243,
    "card_limit": 26338,
    "card_interest_rate": 0.0566134634,
    "model_output": 0.8856668039,
    "model_target": 0
  },
  {
    "monthly_salary": 97565,
    "fico": 674,
    "utilization": 0.0516022236,
    "card_limit": 10868,
    "card_interest_rate": 0.0595104865,
    "model_output": 0.626928886,
    "model_target": 1
  },
  {
    "monthly_salary": 102064,
    "fico": 719,
    "utilization": 0.1538154816,
    "card_limit": 9289,
    "card_interest_rate": 0.0788103426,
    "model_output": 0.6609692701,
    "model_target": 1
  },
  {
    "monthly_salary": 93225,
    "fico": 652,
    "utilization": 0.1446668501,
    "card_limit": 45611,
    "card_interest_rate": 0.102265838,
    "model_output": 0.3951174295,
    "model_target": 0
  },
  {
    "monthly_salary": 26767,
    "fico": 731,
    "utilization": 0.065105191,
    "card_limit": 46758,
    "card_interest_rate": 0.0962403226,
    "model_output": 0.6331586107,
    "model_target": 1
  },
  {
    "monthly_salary": 49370,
    "fico": 613,
    "utilization": 0.0832590077,
    "card_limit": 44349,
    "card_interest_rate": 0.0821262802,
    "model_output": 0.9532771766,
    "model_target": 1
  },
  {
    "monthly_salary": 142974,
    "fico": 881,
    "utilization": 0.1211706615,
    "card_limit": 34687,
    "card_interest_rate": 0.0682395995,
    "model_output": 0.1767096032,
    "model_target": 0
  },
  {
    "monthly_salary": 175004,
    "fico": 682,
    "utilization": 0.0718946151,
    "card_limit": 17055,
    "card_interest_rate": 0.0201821228,
    "model_output": 0.4157002959,
    "model_target": 0
  },
  {
    "monthly_salary": 196958,
    "fico": 652,
    "utilization": 0.0621333728,
    "card_limit": 32961,
    "card_interest_rate": 0.0884123661,
    "model_output": 0.6402513878,
    "model_target": 0
  },
  {
    "monthly_salary": 115167,
    "fico": 612,
    "utilization": 0.0425684962,
    "card_limit": 23697,
    "card_interest_rate": 0.0875431374,
    "model_output": 0.6915246535,
    "model_target": 0
  },
  {
    "monthly_salary": 163493,
    "fico": 737,
    "utilization": 0.1232787784,
    "card_limit": 7798,
    "card_interest_rate": 0.0568458064,
    "model_output": 0.7618139861,
    "model_target": 0
  },
  {
    "monthly_salary": 124846,
    "fico": 888,
    "utilization": 0.1545534535,
    "card_limit": 20833,
    "card_interest_rate": 0.0620361043,
    "model_output": 0.5439804944,
    "model_target": 1
  },
  {
    "monthly_salary": 68950,
    "fico": 657,
    "utilization": 0.1646544232,
    "card_limit": 21145,
    "card_interest_rate": 0.0687366078,
    "model_output": 0.4730090644,
    "model_target": 0
  },
  {
    "monthly_salary": 116078,
    "fico": 717,
    "utilization": 0.0024876939,
    "card_limit": 28218,
    "card_interest_rate": 0.0309160729,
    "model_output": 0.5038507336,
    "model_target": 0
  },
  {
    "monthly_salary": 168319,
    "fico": 807,
    "utilization": 0.1130373258,
    "card_limit": 40412,
    "card_interest_rate": 0.1139094875,
    "model_output": 0.276549868,
    "model_target": 0
  },
  {
    "monthly_salary": 17192,
    "fico": 627,
    "utilization": 0.137524139,
    "card_limit": 22366,
    "card_interest_rate": 0.080226063,
    "model_output": 0.5754347735,
    "model_target": 0
  },
  {
    "monthly_salary": 98886,
    "fico": 698,
    "utilization": 0.0211444677,
    "card_limit": 44291,
    "card_interest_rate": 0.0288400438,
    "model_output": 0.2396426221,
    "model_target": 0
  },
  {
    "monthly_salary": 16031,
    "fico": 640,
    "utilization": 0.1402829174,
    "card_limit": 18970,
    "card_interest_rate": 0.1174981101,
    "model_output": 0.5833438987,
    "model_target": 0
  },
  {
    "monthly_salary": 44100,
    "fico": 768,
    "utilization": 0.0729272945,
    "card_limit": 6944,
    "card_interest_rate": 0.0876858855,
    "model_output": 0.8970363636,
    "model_target": 1
  },
  {
    "monthly_salary": 34365,
    "fico": 637,
    "utilization": 0.0233554886,
    "card_limit": 19845,
    "card_interest_rate": 0.1109726344,
    "model_output": 0.6031254585,
    "model_target": 0
  },
  {
    "monthly_salary": 156014,
    "fico": 778,
    "utilization": 0.1512775779,
    "card_limit": 48563,
    "card_interest_rate": 0.0490795184,
    "model_output": 0.1513150832,
    "model_target": 0
  },
  {
    "monthly_salary": 67635,
    "fico": 786,
    "utilization": 0.0590162045,
    "card_limit": 37388,
    "card_interest_rate": 0.0431772656,
    "model_output": 0.3864900003,
    "model_target": 0
  },
  {
    "monthly_salary": 191602,
    "fico": 760,
    "utilization": 0.140848723,
    "card_limit": 37656,
    "card_interest_rate": 0.0552035614,
    "model_output": 0.8843932588,
    "model_target": 1
  },
  {
    "monthly_salary": 11014,
    "fico": 686,
    "utilization": 0.0385694547,
    "card_limit": 36027,
    "card_interest_rate": 0.0563666091,
    "model_output": 0.9869029692,
    "model_target": 0
  },
  {
    "monthly_salary": 172820,
    "fico": 738,
    "utilization": 0.0136057013,
    "card_limit": 20807,
    "card_interest_rate": 0.0746766792,
    "model_output": 0.133797059,
    "model_target": 0
  },
  {
    "monthly_salary": 164744,
    "fico": 897,
    "utilization": 0.1024667745,
    "card_limit": 38120,
    "card_interest_rate": 0.0628601451,
    "model_output": 0.8832245978,
    "model_target": 0
  },
  {
    "monthly_salary": 193984,
    "fico": 609,
    "utilization": 0.0737376532,
    "card_limit": 10347,
    "card_interest_rate": 0.0833118951,
    "model_output": 0.6614696473,
    "model_target": 0
  },
  {
    "monthly_salary": 118018,
    "fico": 713,
    "utilization": 0.1208086345,
    "card_limit": 37022,
    "card_interest_rate": 0.0446677173,
    "model_output": 0.0232925329,
    "model_target": 0
  },
  {
    "monthly_salary": 106959,
    "fico": 857,
    "utilization": 0.1182165606,
    "card_limit": 37274,
    "card_interest_rate": 0.0307156164,
    "model_output": 0.7634414533,
    "model_target": 0
  },
  {
    "monthly_salary": 172466,
    "fico": 745,
    "utilization": 0.0363767607,
    "card_limit": 32700,
    "card_interest_rate": 0.0279649899,
    "model_output": 0.1168158332,
    "model_target": 0
  },
  {
    "monthly_salary": 159655,
    "fico": 761,
    "utilization": 0.1320181412,
    "card_limit": 26087,
    "card_interest_rate": 0.0663857523,
    "model_output": 0.5882968182,
    "model_target": 0
  },
  {
    "monthly_salary": 83739,
    "fico": 634,
    "utilization": 0.097973809,
    "card_limit": 21013,
    "card_interest_rate": 0.0820410264,
    "model_output": 0.7142895205,
    "model_target": 0
  },
  {
    "monthly_salary": 178961,
    "fico": 753,
    "utilization": 0.1262284914,
    "card_limit": 34151,
    "card_interest_rate": 0.1184135061,
    "model_output": 0.7941091507,
    "model_target": 0
  },
  {
    "monthly_salary": 79889,
    "fico": 778,
    "utilization": 0.1500627415,
    "card_limit": 24613,
    "card_interest_rate": 0.1164158783,
    "model_output": 0.6480713524,
    "model_target": 0
  },
  {
    "monthly_salary": 23779,
    "fico": 715,
    "utilization": 0.0722722637,
    "card_limit": 24883,
    "card_interest_rate": 0.0796308663,
    "model_output": 0.4611973891,
    "model_target": 0
  },
  {
    "monthly_salary": 49224,
    "fico": 640,
    "utilization": 0.1017557406,
    "card_limit": 22083,
    "card_interest_rate": 0.0801090322,
    "model_output": 0.0811385529,
    "model_target": 0
  },
  {
    "monthly_salary": 28293,
    "fico": 691,
    "utilization": 0.1099146732,
    "card_limit": 47258,
    "card_interest_rate": 0.0601721615,
    "model_output": 0.066091582,
    "model_target": 0
  },
  {
    "monthly_salary": 81189,
    "fico": 657,
    "utilization": 0.1021286507,
    "card_limit": 13063,
    "card_interest_rate": 0.0637837237,
    "model_output": 0.0218394768,
    "model_target": 0
  },
  {
    "monthly_salary": 81654,
    "fico": 821,
    "utilization": 0.0033823093,
    "card_limit": 46689,
    "card_interest_rate": 0.0885935137,
    "model_output": 0.4255231851,
    "model_target": 0
  },
  {
    "monthly_salary": 173603,
    "fico": 603,
    "utilization": 0.13443019,
    "card_limit": 31710,
    "card_interest_rate": 0.0680138692,
    "model_output": 0.7982735893,
    "model_target": 0
  },
  {
    "monthly_salary": 97452,
    "fico": 746,
    "utilization": 0.0927246137,
    "card_limit": 6447,
    "card_interest_rate": 0.064141101,
    "model_output": 0.6437407801,
    "model_target": 1
  },
  {
    "monthly_salary": 57145,
    "fico": 789,
    "utilization": 0.02558462,
    "card_limit": 27064,
    "card_interest_rate": 0.0925986032,
    "model_output": 0.7385006499,
    "model_target": 1
  },
  {
    "monthly_salary": 199659,
    "fico": 806,
    "utilization": 0.0594785934,
    "card_limit": 31357,
    "card_interest_rate": 0.0852633192,
    "model_output": 0.6882828085,
    "model_target": 1
  },
  {
    "monthly_salary": 106470,
    "fico": 705,
    "utilization": 0.0894584282,
    "card_limit": 43034,
    "card_interest_rate": 0.0751255391,
    "model_output": 0.5329472312,
    "model_target": 1
  },
  {
    "monthly_salary": 69203,
    "fico": 747,
    "utilization": 0.1474875143,
    "card_limit": 19929,
    "card_interest_rate": 0.0603703589,
    "model_output": 0.6154310628,
    "model_target": 0
  },
  {
    "monthly_salary": 151412,
    "fico": 751,
    "utilization": 0.021120307,
    "card_limit": 28472,
    "card_interest_rate": 0.028361856,
    "model_output": 0.3391228197,
    "model_target": 0
  },
  {
    "monthly_salary": 15465,
    "fico": 884,
    "utilization": 0.0046476474,
    "card_limit": 8371,
    "card_interest_rate": 0.0790681184,
    "model_output": 0.1444585588,
    "model_target": 0
  },
  {
    "monthly_salary": 125612,
    "fico": 886,
    "utilization": 0.0799835075,
    "card_limit": 30704,
    "card_interest_rate": 0.1010983915,
    "model_output": 0.2676799163,
    "model_target": 0
  },
  {
    "monthly_salary": 36082,
    "fico": 763,
    "utilization": 0.0369742316,
    "card_limit": 19677,
    "card_interest_rate": 0.020103968,
    "model_output": 0.1076404107,
    "model_target": 0
  },
  {
    "monthly_salary": 94078,
    "fico": 647,
    "utilization": 0.0359336798,
    "card_limit": 42248,
    "card_interest_rate": 0.0854153029,
    "model_output": 0.1201800199,
    "model_target": 0
  },
  {
    "monthly_salary": 138624,
    "fico": 629,
    "utilization": 0.0095180735,
    "card_limit": 43283,
    "card_interest_rate": 0.0570949809,
    "model_output": 0.7896022351,
    "model_target": 1
  },
  {
    "monthly_salary": 60814,
    "fico": 664,
    "utilization": 0.1547359519,
    "card_limit": 41964,
    "card_interest_rate": 0.0736695616,
    "model_output": 0.0555099757,
    "model_target": 0
  },
  {
    "monthly_salary": 183603,
    "fico": 656,
    "utilization": 0.1337613292,
    "card_limit": 31578,
    "card_interest_rate": 0.1073626551,
    "model_output": 0.7143543442,
    "model_target": 0
  },
  {
    "monthly_salary": 199272,
    "fico": 683,
    "utilization": 0.0827101317,
    "card_limit": 9517,
    "card_interest_rate": 0.1035788465,
    "model_output": 0.6822105185,
    "model_target": 0
  },
  {
    "monthly_salary": 25420,
    "fico": 610,
    "utilization": 0.0952125814,
    "card_limit": 7778,
    "card_interest_rate": 0.0420316809,
    "model_output": 0.5813379162,
    "model_target": 0
  },
  {
    "monthly_salary": 37958,
    "fico": 724,
    "utilization": 0.0448271901,
    "card_limit": 27652,
    "card_interest_rate": 0.0314094422,
    "model_output": 0.1121284904,
    "model_target": 0
  },
  {
    "monthly_salary": 29441,
    "fico": 656,
    "utilization": 0.1559827616,
    "card_limit": 47763,
    "card_interest_rate": 0.0276869795,
    "model_output": 0.7236585327,
    "model_target": 1
  },
  {
    "monthly_salary": 83622,
    "fico": 853,
    "utilization": 0.1324159039,
    "card_limit": 33998,
    "card_interest_rate": 0.1173465932,
    "model_output": 0.9865173116,
    "model_target": 0
  },
  {
    "monthly_salary": 68261,
    "fico": 805,
    "utilization": 0.125734154,
    "card_limit": 9229,
    "card_interest_rate": 0.1186080073,
    "model_output": 0.2336886081,
    "model_target": 0
  },
  {
    "monthly_salary": 81868,
    "fico": 696,
    "utilization": 0.1540823153,
    "card_limit": 14959,
    "card_interest_rate": 0.058575665,
    "model_output": 0.8843333103,
    "model_target": 1
  },
  {
    "monthly_salary": 60115,
    "fico": 736,
    "utilization": 0.1020715522,
    "card_limit": 18827,
    "card_interest_rate": 0.0327597579,
    "model_output": 0.2353005474,
    "model_target": 0
  },
  {
    "monthly_salary": 48478,
    "fico": 791,
    "utilization": 0.1488470958,
    "card_limit": 44961,
    "card_interest_rate": 0.0434355998,
    "model_output": 0.8449903604,
    "model_target": 1
  },
  {
    "monthly_salary": 189472,
    "fico": 867,
    "utilization": 0.0789752832,
    "card_limit": 48370,
    "card_interest_rate": 0.069726513,
    "model_output": 0.2806836595,
    "model_target": 0
  },
  {
    "monthly_salary": 121669,
    "fico": 787,
    "utilization": 0.079945276,
    "card_limit": 27117,
    "card_interest_rate": 0.0422885011,
    "model_output": 0.7508387747,
    "model_target": 1
  },
  {
    "monthly_salary": 104363,
    "fico": 601,
    "utilization": 0.1609859004,
    "card_limit": 45288,
    "card_interest_rate": 0.1115993522,
    "model_output": 0.5061656521,
    "model_target": 0
  },
  {
    "monthly_salary": 160744,
    "fico": 862,
    "utilization": 0.1223612069,
    "card_limit": 45173,
    "card_interest_rate": 0.079610177,
    "model_output": 0.800356279,
    "model_target": 1
  },
  {
    "monthly_salary": 152639,
    "fico": 869,
    "utilization": 0.1392021008,
    "card_limit": 45490,
    "card_interest_rate": 0.0620074018,
    "model_output": 0.6294916338,
    "model_target": 0
  },
  {
    "monthly_salary": 88635,
    "fico": 889,
    "utilization": 0.0315793851,
    "card_limit": 18654,
    "card_interest_rate": 0.1184369787,
    "model_output": 0.3093292058,
    "model_target": 0
  },
  {
    "monthly_salary": 188542,
    "fico": 639,
    "utilization": 0.1480142026,
    "card_limit": 5664,
    "card_interest_rate": 0.0491129513,
    "model_output": 0.6350249451,
    "model_target": 1
  },
  {
    "monthly_salary": 25099,
    "fico": 616,
    "utilization": 0.1049121849,
    "card_limit": 40217,
    "card_interest_rate": 0.1179586703,
    "model_output": 0.1676382217,
    "model_target": 0
  },
  {
    "monthly_salary": 21130,
    "fico": 773,
    "utilization": 0.096736229,
    "card_limit": 11164,
    "card_interest_rate": 0.0471324877,
    "model_output": 0.738363724,
    "model_target": 1
  },
  {
    "monthly_salary": 133591,
    "fico": 897,
    "utilization": 0.0965842947,
    "card_limit": 48530,
    "card_interest_rate": 0.0220414283,
    "model_output": 0.7827452248,
    "model_target": 1
  },
  {
    "monthly_salary": 83936,
    "fico": 729,
    "utilization": 0.0033956065,
    "card_limit": 33045,
    "card_interest_rate": 0.0610217353,
    "model_output": 0.003578778,
    "model_target": 0
  },
  {
    "monthly_salary": 134280,
    "fico": 635,
    "utilization": 0.1484123246,
    "card_limit": 16163,
    "card_interest_rate": 0.0891784642,
    "model_output": 0.6023347507,
    "model_target": 0
  },
  {
    "monthly_salary": 63532,
    "fico": 711,
    "utilization": 0.1136366382,
    "card_limit": 12053,
    "card_interest_rate": 0.1001582146,
    "model_output": 0.5009606133,
    "model_target": 1
  },
  {
    "monthly_salary": 99062,
    "fico": 824,
    "utilization": 0.0644236701,
    "card_limit": 47195,
    "card_interest_rate": 0.0602395628,
    "model_output": 0.93814462,
    "model_target": 0
  },
  {
    "monthly_salary": 138865,
    "fico": 778,
    "utilization": 0.0916762157,
    "card_limit": 27855,
    "card_interest_rate": 0.0205173786,
    "model_output": 0.7277321955,
    "model_target": 0
  },
  {
    "monthly_salary": 163818,
    "fico": 898,
    "utilization": 0.0368883191,
    "card_limit": 40812,
    "card_interest_rate": 0.0709289398,
    "model_output": 0.9368035237,
    "model_target": 0
  },
  {
    "monthly_salary": 139145,
    "fico": 744,
    "utilization": 0.1174715971,
    "card_limit": 20764,
    "card_interest_rate": 0.0988779919,
    "model_output": 0.8961757328,
    "model_target": 0
  },
  {
    "monthly_salary": 10352,
    "fico": 869,
    "utilization": 0.1098727144,
    "card_limit": 42653,
    "card_interest_rate": 0.0816296148,
    "model_output": 0.0530798258,
    "model_target": 0
  },
  {
    "monthly_salary": 169893,
    "fico": 718,
    "utilization": 0.1206129539,
    "card_limit": 11816,
    "card_interest_rate": 0.0764820766,
    "model_output": 0.7412030047,
    "model_target": 0
  },
  {
    "monthly_salary": 23433,
    "fico": 663,
    "utilization": 0.1132177744,
    "card_limit": 14645,
    "card_interest_rate": 0.1129409543,
    "model_output": 0.1835616969,
    "model_target": 0
  },
  {
    "monthly_salary": 143648,
    "fico": 866,
    "utilization": 0.0854334571,
    "card_limit": 21131,
    "card_interest_rate": 0.0593491544,
    "model_output": 0.4713563558,
    "model_target": 0
  },
  {
    "monthly_salary": 189679,
    "fico": 799,
    "utilization": 0.0735511773,
    "card_limit": 14620,
    "card_interest_rate": 0.0243954673,
    "model_output": 0.8872864142,
    "model_target": 1
  },
  {
    "monthly_salary": 56356,
    "fico": 769,
    "utilization": 0.1262040941,
    "card_limit": 41766,
    "card_interest_rate": 0.0257018864,
    "model_output": 0.0329777632,
    "model_target": 0
  },
  {
    "monthly_salary": 168918,
    "fico": 872,
    "utilization": 0.000093262,
    "card_limit": 41165,
    "card_interest_rate": 0.0543253688,
    "model_output": 0.5426919223,
    "model_target": 1
  },
  {
    "monthly_salary": 135321,
    "fico": 709,
    "utilization": 0.1114202375,
    "card_limit": 11487,
    "card_interest_rate": 0.0818601013,
    "model_output": 0.7668631769,
    "model_target": 0
  },
  {
    "monthly_salary": 148399,
    "fico": 672,
    "utilization": 0.0155722972,
    "card_limit": 35210,
    "card_interest_rate": 0.0874551021,
    "model_output": 0.3215784641,
    "model_target": 0
  },
  {
    "monthly_salary": 160692,
    "fico": 870,
    "utilization": 0.1450673776,
    "card_limit": 42076,
    "card_interest_rate": 0.0422258595,
    "model_output": 0.9907942255,
    "model_target": 0
  },
  {
    "monthly_salary": 155933,
    "fico": 753,
    "utilization": 0.1022632157,
    "card_limit": 17529,
    "card_interest_rate": 0.0344020256,
    "model_output": 0.9702693296,
    "model_target": 1
  },
  {
    "monthly_salary": 36036,
    "fico": 791,
    "utilization": 0.0759539725,
    "card_limit": 13699,
    "card_interest_rate": 0.0288982432,
    "model_output": 0.8611982552,
    "model_target": 1
  },
  {
    "monthly_salary": 54182,
    "fico": 678,
    "utilization": 0.1625113738,
    "card_limit": 43956,
    "card_interest_rate": 0.0838150945,
    "model_output": 0.3111979062,
    "model_target": 0
  },
  {
    "monthly_salary": 23829,
    "fico": 680,
    "utilization": 0.083570189,
    "card_limit": 25925,
    "card_interest_rate": 0.0858710734,
    "model_output": 0.7647435547,
    "model_target": 0
  },
  {
    "monthly_salary": 130742,
    "fico": 827,
    "utilization": 0.1197097326,
    "card_limit": 45258,
    "card_interest_rate": 0.0273744822,
    "model_output": 0.3657009918,
    "model_target": 0
  },
  {
    "monthly_salary": 128439,
    "fico": 809,
    "utilization": 0.1295935655,
    "card_limit": 9769,
    "card_interest_rate": 0.0520896189,
    "model_output": 0.3184699907,
    "model_target": 0
  },
  {
    "monthly_salary": 12727,
    "fico": 720,
    "utilization": 0.1506124248,
    "card_limit": 29559,
    "card_interest_rate": 0.1033803326,
    "model_output": 0.0674668396,
    "model_target": 0
  },
  {
    "monthly_salary": 150084,
    "fico": 856,
    "utilization": 0.0615082293,
    "card_limit": 28539,
    "card_interest_rate": 0.1088463605,
    "model_output": 0.0582492849,
    "model_target": 0
  },
  {
    "monthly_salary": 92337,
    "fico": 665,
    "utilization": 0.0659089765,
    "card_limit": 17313,
    "card_interest_rate": 0.0633047522,
    "model_output": 0.7180966606,
    "model_target": 1
  },
  {
    "monthly_salary": 11365,
    "fico": 652,
    "utilization": 0.054829371,
    "card_limit": 15826,
    "card_interest_rate": 0.1086161381,
    "model_output": 0.9537529842,
    "model_target": 1
  },
  {
    "monthly_salary": 97356,
    "fico": 790,
    "utilization": 0.0894079643,
    "card_limit": 15508,
    "card_interest_rate": 0.0336594831,
    "model_output": 0.9294433393,
    "model_target": 1
  },
  {
    "monthly_salary": 159598,
    "fico": 709,
    "utilization": 0.1567293926,
    "card_limit": 44853,
    "card_interest_rate": 0.0545651545,
    "model_output": 0.7780941315,
    "model_target": 1
  },
  {
    "monthly_salary": 145847,
    "fico": 695,
    "utilization": 0.138347239,
    "card_limit": 32041,
    "card_interest_rate": 0.0330961648,
    "model_output": 0.6152655137,
    "model_target": 1
  },
  {
    "monthly_salary": 49684,
    "fico": 795,
    "utilization": 0.0559844154,
    "card_limit": 5155,
    "card_interest_rate": 0.0592765932,
    "model_output": 0.9969398523,
    "model_target": 0
  },
  {
    "monthly_salary": 74436,
    "fico": 761,
    "utilization": 0.0963917469,
    "card_limit": 21561,
    "card_interest_rate": 0.0611231525,
    "model_output": 0.2163825028,
    "model_target": 0
  },
  {
    "monthly_salary": 88475,
    "fico": 823,
    "utilization": 0.0059080828,
    "card_limit": 19724,
    "card_interest_rate": 0.0959405379,
    "model_output": 0.530829866,
    "model_target": 1
  },
  {
    "monthly_salary": 58489,
    "fico": 618,
    "utilization": 0.0633680768,
    "card_limit": 21308,
    "card_interest_rate": 0.1135713656,
    "model_output": 0.3636604955,
    "model_target": 0
  },
  {
    "monthly_salary": 12234,
    "fico": 810,
    "utilization": 0.1413933072,
    "card_limit": 42752,
    "card_interest_rate": 0.0201427485,
    "model_output": 0.4319707859,
    "model_target": 0
  },
  {
    "monthly_salary": 158156,
    "fico": 693,
    "utilization": 0.0850574997,
    "card_limit": 38160,
    "card_interest_rate": 0.1034131648,
    "model_output": 0.4621565652,
    "model_target": 0
  },
  {
    "monthly_salary": 187195,
    "fico": 683,
    "utilization": 0.1256922388,
    "card_limit": 10966,
    "card_interest_rate": 0.0918032727,
    "model_output": 0.0398197318,
    "model_target": 0
  },
  {
    "monthly_salary": 76611,
    "fico": 880,
    "utilization": 0.0675365578,
    "card_limit": 29651,
    "card_interest_rate": 0.0902364445,
    "model_output": 0.5935684344,
    "model_target": 0
  },
  {
    "monthly_salary": 62517,
    "fico": 780,
    "utilization": 0.007084283,
    "card_limit": 48530,
    "card_interest_rate": 0.0476719289,
    "model_output": 0.5158661384,
    "model_target": 0
  },
  {
    "monthly_salary": 154708,
    "fico": 710,
    "utilization": 0.0588315341,
    "card_limit": 41042,
    "card_interest_rate": 0.1031676537,
    "model_output": 0.8243891467,
    "model_target": 0
  },
  {
    "monthly_salary": 196891,
    "fico": 873,
    "utilization": 0.1076704882,
    "card_limit": 43970,
    "card_interest_rate": 0.0495561684,
    "model_output": 0.1753262493,
    "model_target": 0
  },
  {
    "monthly_salary": 65589,
    "fico": 696,
    "utilization": 0.0796924494,
    "card_limit": 18429,
    "card_interest_rate": 0.0999509913,
    "model_output": 0.6310704316,
    "model_target": 0
  },
  {
    "monthly_salary": 31215,
    "fico": 751,
    "utilization": 0.0396859827,
    "card_limit": 24967,
    "card_interest_rate": 0.0731727569,
    "model_output": 0.7407758701,
    "model_target": 0
  },
  {
    "monthly_salary": 173365,
    "fico": 691,
    "utilization": 0.1388502479,
    "card_limit": 8652,
    "card_interest_rate": 0.0479181943,
    "model_output": 0.1339101228,
    "model_target": 0
  },
  {
    "monthly_salary": 110402,
    "fico": 890,
    "utilization": 0.0100404911,
    "card_limit": 16620,
    "card_interest_rate": 0.0697758896,
    "model_output": 0.439472409,
    "model_target": 0
  },
  {
    "monthly_salary": 163543,
    "fico": 765,
    "utilization": 0.1417246593,
    "card_limit": 18763,
    "card_interest_rate": 0.0634778549,
    "model_output": 0.1067738722,
    "model_target": 0
  },
  {
    "monthly_salary": 57423,
    "fico": 626,
    "utilization": 0.0616515775,
    "card_limit": 12416,
    "card_interest_rate": 0.0666807409,
    "model_output": 0.7922993023,
    "model_target": 1
  },
  {
    "monthly_salary": 30343,
    "fico": 859,
    "utilization": 0.0341651383,
    "card_limit": 10486,
    "card_interest_rate": 0.0673315495,
    "model_output": 0.0042396123,
    "model_target": 0
  },
  {
    "monthly_salary": 90840,
    "fico": 765,
    "utilization": 0.1518348674,
    "card_limit": 44563,
    "card_interest_rate": 0.1141958941,
    "model_output": 0.4285672616,
    "model_target": 0
  },
  {
    "monthly_salary": 114912,
    "fico": 641,
    "utilization": 0.1351684846,
    "card_limit": 44515,
    "card_interest_rate": 0.0287652913,
    "model_output": 0.2410438448,
    "model_target": 0
  },
  {
    "monthly_salary": 166793,
    "fico": 828,
    "utilization": 0.0774723067,
    "card_limit": 6776,
    "card_interest_rate": 0.1025856993,
    "model_output": 0.378617154,
    "model_target": 0
  },
  {
    "monthly_salary": 110660,
    "fico": 853,
    "utilization": 0.1487976562,
    "card_limit": 35166,
    "card_interest_rate": 0.0990099889,
    "model_output": 0.656160884,
    "model_target": 1
  },
  {
    "monthly_salary": 64658,
    "fico": 668,
    "utilization": 0.1120778539,
    "card_limit": 49564,
    "card_interest_rate": 0.0823518749,
    "model_output": 0.007201513,
    "model_target": 0
  },
  {
    "monthly_salary": 21010,
    "fico": 632,
    "utilization": 0.1483377208,
    "card_limit": 26682,
    "card_interest_rate": 0.0998180057,
    "model_output": 0.9964382021,
    "model_target": 0
  },
  {
    "monthly_salary": 199468,
    "fico": 757,
    "utilization": 0.0453403427,
    "card_limit": 34489,
    "card_interest_rate": 0.1197630446,
    "model_output": 0.1575174202,
    "model_target": 0
  },
  {
    "monthly_salary": 33457,
    "fico": 744,
    "utilization": 0.0111145567,
    "card_limit": 32863,
    "card_interest_rate": 0.1071306403,
    "model_output": 0.6290433116,
    "model_target": 1
  },
  {
    "monthly_salary": 28893,
    "fico": 825,
    "utilization": 0.0463046175,
    "card_limit": 37923,
    "card_interest_rate": 0.1041437535,
    "model_output": 0.671682856,
    "model_target": 1
  },
  {
    "monthly_salary": 181623,
    "fico": 701,
    "utilization": 0.1148561253,
    "card_limit": 38382,
    "card_interest_rate": 0.0831426329,
    "model_output": 0.8202772904,
    "model_target": 0
  },
  {
    "monthly_salary": 78887,
    "fico": 603,
    "utilization": 0.0947168206,
    "card_limit": 24089,
    "card_interest_rate": 0.1174961893,
    "model_output": 0.372185251,
    "model_target": 0
  },
  {
    "monthly_salary": 157474,
    "fico": 779,
    "utilization": 0.0405841165,
    "card_limit": 47677,
    "card_interest_rate": 0.0843955916,
    "model_output": 0.3484287097,
    "model_target": 0
  },
  {
    "monthly_salary": 123379,
    "fico": 622,
    "utilization": 0.1231419575,
    "card_limit": 31385,
    "card_interest_rate": 0.0556658948,
    "model_output": 0.8547945603,
    "model_target": 0
  },
  {
    "monthly_salary": 54659,
    "fico": 800,
    "utilization": 0.0824799929,
    "card_limit": 19978,
    "card_interest_rate": 0.0440069892,
    "model_output": 0.0137557676,
    "model_target": 0
  },
  {
    "monthly_salary": 184081,
    "fico": 629,
    "utilization": 0.1364654493,
    "card_limit": 21636,
    "card_interest_rate": 0.1051374425,
    "model_output": 0.2216663824,
    "model_target": 0
  },
  {
    "monthly_salary": 185468,
    "fico": 873,
    "utilization": 0.0017718326,
    "card_limit": 21714,
    "card_interest_rate": 0.0670810311,
    "model_output": 0.5984950725,
    "model_target": 1
  },
  {
    "monthly_salary": 148271,
    "fico": 619,
    "utilization": 0.1207911005,
    "card_limit": 45004,
    "card_interest_rate": 0.0838798661,
    "model_output": 0.7295250402,
    "model_target": 0
  },
  {
    "monthly_salary": 49722,
    "fico": 672,
    "utilization": 0.1210060535,
    "card_limit": 47075,
    "card_interest_rate": 0.0281313955,
    "model_output": 0.8587304763,
    "model_target": 1
  },
  {
    "monthly_salary": 83141,
    "fico": 895,
    "utilization": 0.1352914846,
    "card_limit": 24414,
    "card_interest_rate": 0.0282399544,
    "model_output": 0.4382024776,
    "model_target": 0
  },
  {
    "monthly_salary": 109503,
    "fico": 732,
    "utilization": 0.0021074267,
    "card_limit": 33886,
    "card_interest_rate": 0.0454149938,
    "model_output": 0.3083642803,
    "model_target": 0
  },
  {
    "monthly_salary": 125263,
    "fico": 834,
    "utilization": 0.0072702302,
    "card_limit": 49735,
    "card_interest_rate": 0.0820517835,
    "model_output": 0.4063301293,
    "model_target": 0
  },
  {
    "monthly_salary": 76243,
    "fico": 850,
    "utilization": 0.1165028192,
    "card_limit": 24769,
    "card_interest_rate": 0.0709342708,
    "model_output": 0.509295182,
    "model_target": 0
  },
  {
    "monthly_salary": 34012,
    "fico": 818,
    "utilization": 0.1008469423,
    "card_limit": 23205,
    "card_interest_rate": 0.0268034004,
    "model_output": 0.0211760777,
    "model_target": 0
  },
  {
    "monthly_salary": 62973,
    "fico": 715,
    "utilization": 0.0685030133,
    "card_limit": 27928,
    "card_interest_rate": 0.0570797292,
    "model_output": 0.7028210105,
    "model_target": 0
  },
  {
    "monthly_salary": 57249,
    "fico": 764,
    "utilization": 0.1591662609,
    "card_limit": 32347,
    "card_interest_rate": 0.0923488595,
    "model_output": 0.2866540465,
    "model_target": 0
  },
  {
    "monthly_salary": 67578,
    "fico": 656,
    "utilization": 0.0260892065,
    "card_limit": 45013,
    "card_interest_rate": 0.0860830744,
    "model_output": 0.3124790612,
    "model_target": 0
  },
  {
    "monthly_salary": 90641,
    "fico": 781,
    "utilization": 0.1040256515,
    "card_limit": 23318,
    "card_interest_rate": 0.0423112704,
    "model_output": 0.5861916696,
    "model_target": 0
  },
  {
    "monthly_salary": 180248,
    "fico": 899,
    "utilization": 0.0216590029,
    "card_limit": 10728,
    "card_interest_rate": 0.1103261606,
    "model_output": 0.790862252,
    "model_target": 1
  },
  {
    "monthly_salary": 16127,
    "fico": 778,
    "utilization": 0.0847457337,
    "card_limit": 36375,
    "card_interest_rate": 0.0245874633,
    "model_output": 0.7348487147,
    "model_target": 0
  },
  {
    "monthly_salary": 199115,
    "fico": 708,
    "utilization": 0.0830116294,
    "card_limit": 14973,
    "card_interest_rate": 0.0978556392,
    "model_output": 0.6608827768,
    "model_target": 1
  },
  {
    "monthly_salary": 187875,
    "fico": 880,
    "utilization": 0.0053429786,
    "card_limit": 8283,
    "card_interest_rate": 0.0793977607,
    "model_output": 0.3278586098,
    "model_target": 0
  },
  {
    "monthly_salary": 120661,
    "fico": 630,
    "utilization": 0.0558589963,
    "card_limit": 18809,
    "card_interest_rate": 0.0950042192,
    "model_output": 0.3695980684,
    "model_target": 0
  },
  {
    "monthly_salary": 61690,
    "fico": 664,
    "utilization": 0.1085831888,
    "card_limit": 20457,
    "card_interest_rate": 0.0708476986,
    "model_output": 0.1612955876,
    "model_target": 0
  },
  {
    "monthly_salary": 141061,
    "fico": 821,
    "utilization": 0.1125064232,
    "card_limit": 37991,
    "card_interest_rate": 0.0576957567,
    "model_output": 0.6997926077,
    "model_target": 0
  },
  {
    "monthly_salary": 57270,
    "fico": 708,
    "utilization": 0.0928742679,
    "card_limit": 27808,
    "card_interest_rate": 0.045267455,
    "model_output": 0.16613045,
    "model_target": 0
  },
  {
    "monthly_salary": 180434,
    "fico": 756,
    "utilization": 0.1262281512,
    "card_limit": 22745,
    "card_interest_rate": 0.1047543277,
    "model_output": 0.2063760893,
    "model_target": 0
  },
  {
    "monthly_salary": 106336,
    "fico": 696,
    "utilization": 0.113049023,
    "card_limit": 44364,
    "card_interest_rate": 0.0645170614,
    "model_output": 0.0714479162,
    "model_target": 0
  },
  {
    "monthly_salary": 25124,
    "fico": 607,
    "utilization": 0.044878465,
    "card_limit": 20118,
    "card_interest_rate": 0.0643508855,
    "model_output": 0.212289046,
    "model_target": 0
  },
  {
    "monthly_salary": 198212,
    "fico": 607,
    "utilization": 0.1346806812,
    "card_limit": 23130,
    "card_interest_rate": 0.0354011069,
    "model_output": 0.2485948847,
    "model_target": 0
  },
  {
    "monthly_salary": 113844,
    "fico": 689,
    "utilization": 0.1114777056,
    "card_limit": 36365,
    "card_interest_rate": 0.1116716634,
    "model_output": 0.8286032833,
    "model_target": 0
  },
  {
    "monthly_salary": 30504,
    "fico": 693,
    "utilization": 0.1170574444,
    "card_limit": 33431,
    "card_interest_rate": 0.0792985135,
    "model_output": 0.6286755351,
    "model_target": 0
  },
  {
    "monthly_salary": 28766,
    "fico": 833,
    "utilization": 0.0600458596,
    "card_limit": 9248,
    "card_interest_rate": 0.0891086528,
    "model_output": 0.788093801,
    "model_target": 1
  },
  {
    "monthly_salary": 144350,
    "fico": 716,
    "utilization": 0.1216470675,
    "card_limit": 33404,
    "card_interest_rate": 0.1076160076,
    "model_output": 0.614896719,
    "model_target": 1
  },
  {
    "monthly_salary": 143696,
    "fico": 880,
    "utilization": 0.0914148517,
    "card_limit": 19812,
    "card_interest_rate": 0.1059462502,
    "model_output": 0.3985908985,
    "model_target": 0
  },
  {
    "monthly_salary": 122362,
    "fico": 649,
    "utilization": 0.037742037,
    "card_limit": 38920,
    "card_interest_rate": 0.0888158631,
    "model_output": 0.8032082179,
    "model_target": 0
  },
  {
    "monthly_salary": 161160,
    "fico": 625,
    "utilization": 0.0674945718,
    "card_limit": 15525,
    "card_interest_rate": 0.0929028222,
    "model_output": 0.9453746981,
    "model_target": 1
  },
  {
    "monthly_salary": 154520,
    "fico": 897,
    "utilization": 0.0445276436,
    "card_limit": 6124,
    "card_interest_rate": 0.0882095966,
    "model_output": 0.4945159593,
    "model_target": 0
  },
  {
    "monthly_salary": 190753,
    "fico": 886,
    "utilization": 0.1216285771,
    "card_limit": 7936,
    "card_interest_rate": 0.0372983529,
    "model_output": 0.4798490998,
    "model_target": 0
  },
  {
    "monthly_salary": 122334,
    "fico": 876,
    "utilization": 0.0928683792,
    "card_limit": 25007,
    "card_interest_rate": 0.1106720681,
    "model_output": 0.2351382266,
    "model_target": 0
  },
  {
    "monthly_salary": 61306,
    "fico": 605,
    "utilization": 0.0838226163,
    "card_limit": 41055,
    "card_interest_rate": 0.1104382472,
    "model_output": 0.2194553905,
    "model_target": 0
  },
  {
    "monthly_salary": 169771,
    "fico": 863,
    "utilization": 0.0804080625,
    "card_limit": 7866,
    "card_interest_rate": 0.0837000578,
    "model_output": 0.4054122238,
    "model_target": 0
  },
  {
    "monthly_salary": 12383,
    "fico": 895,
    "utilization": 0.102768742,
    "card_limit": 18025,
    "card_interest_rate": 0.0724700143,
    "model_output": 0.1116103053,
    "model_target": 0
  },
  {
    "monthly_salary": 158556,
    "fico": 766,
    "utilization": 0.1274767557,
    "card_limit": 17768,
    "card_interest_rate": 0.0401636991,
    "model_output": 0.5263555441,
    "model_target": 0
  },
  {
    "monthly_salary": 81078,
    "fico": 892,
    "utilization": 0.0168306443,
    "card_limit": 23973,
    "card_interest_rate": 0.0679882491,
    "model_output": 0.3583525278,
    "model_target": 0
  },
  {
    "monthly_salary": 64154,
    "fico": 871,
    "utilization": 0.0587467668,
    "card_limit": 33842,
    "card_interest_rate": 0.0295879235,
    "model_output": 0.9485850499,
    "model_target": 0
  },
  {
    "monthly_salary": 12195,
    "fico": 680,
    "utilization": 0.0620504105,
    "card_limit": 23584,
    "card_interest_rate": 0.1136000246,
    "model_output": 0.499960947,
    "model_target": 0
  },
  {
    "monthly_salary": 43286,
    "fico": 827,
    "utilization": 0.0208066149,
    "card_limit": 17474,
    "card_interest_rate": 0.0383274768,
    "model_output": 0.7944549711,
    "model_target": 0
  },
  {
    "monthly_salary": 124189,
    "fico": 773,
    "utilization": 0.0671015735,
    "card_limit": 11522,
    "card_interest_rate": 0.0961467607,
    "model_output": 0.6722907786,
    "model_target": 0
  },
  {
    "monthly_salary": 66281,
    "fico": 820,
    "utilization": 0.0356547492,
    "card_limit": 10835,
    "card_interest_rate": 0.0935977202,
    "model_output": 0.9523898365,
    "model_target": 1
  },
  {
    "monthly_salary": 34854,
    "fico": 865,
    "utilization": 0.0567052846,
    "card_limit": 13741,
    "card_interest_rate": 0.1060010077,
    "model_output": 0.8068137827,
    "model_target": 1
  },
  {
    "monthly_salary": 32659,
    "fico": 872,
    "utilization": 0.0823213128,
    "card_limit": 28026,
    "card_interest_rate": 0.0765924153,
    "model_output": 0.9710668728,
    "model_target": 1
  },
  {
    "monthly_salary": 76259,
    "fico": 607,
    "utilization": 0.0818724945,
    "card_limit": 14156,
    "card_interest_rate": 0.0965715277,
    "model_output": 0.272820983,
    "model_target": 0
  },
  {
    "monthly_salary": 71542,
    "fico": 855,
    "utilization": 0.0604438355,
    "card_limit": 28121,
    "card_interest_rate": 0.0650189766,
    "model_output": 0.4104868969,
    "model_target": 0
  },
  {
    "monthly_salary": 43708,
    "fico": 696,
    "utilization": 0.1397336785,
    "card_limit": 15852,
    "card_interest_rate": 0.1006736641,
    "model_output": 0.9720534801,
    "model_target": 1
  },
  {
    "monthly_salary": 12998,
    "fico": 651,
    "utilization": 0.1452936509,
    "card_limit": 26103,
    "card_interest_rate": 0.0560338283,
    "model_output": 0.5077283556,
    "model_target": 1
  },
  {
    "monthly_salary": 111243,
    "fico": 792,
    "utilization": 0.0750711319,
    "card_limit": 32608,
    "card_interest_rate": 0.0226334765,
    "model_output": 0.4068950041,
    "model_target": 0
  },
  {
    "monthly_salary": 71114,
    "fico": 769,
    "utilization": 0.1040530649,
    "card_limit": 24854,
    "card_interest_rate": 0.1040509818,
    "model_output": 0.478591392,
    "model_target": 0
  },
  {
    "monthly_salary": 153134,
    "fico": 871,
    "utilization": 0.0641502527,
    "card_limit": 32052,
    "card_interest_rate": 0.0268347217,
    "model_output": 0.2395407504,
    "model_target": 0
  },
  {
    "monthly_salary": 56129,
    "fico": 743,
    "utilization": 0.0795962872,
    "card_limit": 17914,
    "card_interest_rate": 0.1130730294,
    "model_output": 0.8643252479,
    "model_target": 0
  },
  {
    "monthly_salary": 75542,
    "fico": 714,
    "utilization": 0.0949998264,
    "card_limit": 47525,
    "card_interest_rate": 0.0378913593,
    "model_output": 0.342226227,
    "model_target": 0
  },
  {
    "monthly_salary": 73646,
    "fico": 776,
    "utilization": 0.1347505357,
    "card_limit": 35237,
    "card_interest_rate": 0.0954658754,
    "model_output": 0.6477303164,
    "model_target": 1
  },
  {
    "monthly_salary": 92808,
    "fico": 767,
    "utilization": 0.1429649152,
    "card_limit": 38832,
    "card_interest_rate": 0.0728014357,
    "model_output": 0.0742613085,
    "model_target": 0
  },
  {
    "monthly_salary": 13853,
    "fico": 823,
    "utilization": 0.0053996821,
    "card_limit": 28031,
    "card_interest_rate": 0.0954392932,
    "model_output": 0.3982994053,
    "model_target": 0
  },
  {
    "monthly_salary": 163112,
    "fico": 726,
    "utilization": 0.0106356228,
    "card_limit": 16501,
    "card_interest_rate": 0.0234396192,
    "model_output": 0.2924917237,
    "model_target": 0
  },
  {
    "monthly_salary": 178632,
    "fico": 725,
    "utilization": 0.1391707874,
    "card_limit": 29530,
    "card_interest_rate": 0.0494397891,
    "model_output": 0.0955016602,
    "model_target": 0
  },
  {
    "monthly_salary": 127292,
    "fico": 823,
    "utilization": 0.0950635013,
    "card_limit": 27206,
    "card_interest_rate": 0.0697669673,
    "model_output": 0.4557573208,
    "model_target": 0
  }
]);

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };
// console.log('asdhajxdfgahjsdfg')
// fetch("http://127.0.0.1:5000/csv_upload", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
      
//   }

  axios.post()
  }
  
  
  return (
    <>

    <Head>
      <title>Model Risk Management Document</title>
    </Head>

          <div className={styles.main}>

          {/* <DocBegin />
          <Theory />
          <Dataset />   */}

          <h2>Model Risk Management Document</h2>

          <div className={styles.dataUpload}>
          <Image src={DatasetPic} width={100} height={100} />

          <input type="file" id="upload-btn" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"></input>
          {/* <label for="upload-btn" className={styles.label}>Choose Dataset</label> */}

          <input type="submit" value="Generate Data" onClick={handleSubmit}></input>
          {/* <input type="submit"></input> */}

    

          </div>

      </div>
    }
    </>
  )

}