import React from 'react'
import styles from '@/styles/DocBegin.module.css'

const DocBegin = ({reviewDate}) => {
  return (
    <div className={styles.mainContainer}>
        <h1>Model Risk Management Document</h1>

        
         <div className={styles.mainContainerSubText}>
          Credit Line Decrease Model: <br></br>
          Model Group: <br></br>

          Date Created: 20 Feb 2021<br></br>
          Developer: Team BroCode<br></br>
          Reviewer: (Name)<br></br>
          Last Review Date: {reviewDate}
         </div>
          
          
    </div>
  )
}

export default DocBegin