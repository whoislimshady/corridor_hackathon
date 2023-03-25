import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import DocBegin from './components/DocBegin'
import Theory from './components/Theory'
import Dataset from './components/Dataset'
import DatasetPic from '@/assets/images/dataset.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(document.getElementById("upload-btn").files)
    console.log(e)
    try {
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
           
          // createAndDownloadJsonFile(jsonData); 
          console.log(jsonData)
      }
  }catch(e){
      console.error(e);
  }
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

          <form onSubmit={handleSubmit}>
          <input type="file" id="upload-btn" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"></input>
          {/* <label for="upload-btn" className={styles.label}>Choose Dataset</label> */}

          <input type="submit" value="Generate Data" onSubmit={handleSubmit}></input>
          {/* <input type="submit"></input> */}

          </form>

          </div>

      </div>
    
    </>
  )
}
