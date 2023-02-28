import React, { useState, useEffect } from "react"
import styles from './Api.module.scss'
import axios from "axios";


interface Apod {
  map: (arg0: (apod: { url: string; hdurl: string; title: string; date: string; explanation: string;}) => JSX.Element) => JSX.Element[];
  title: string;
  date: string;
  url: string;
  hdurl: string;
  explanation: string;
}

  

export function Api() {
  const [ apod, setApod ] = useState<Apod | null>(null)

  useEffect(() => {
    getApod()
    }, [])

  const getApod = () => {
    axios({
      method: 'GET',
      url: 'https://api.nasa.gov/planetary/apod?api_key=URA3LbxiNgTf9tlq9lnGq1Gt3tV7eBC74Ozs2jfp&count=10',
    }).then((response) => {
      const data = response.data
      setApod(data)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data)
      }
    })
  }
  return (
    <section className={styles.main_container}>
        <header>
          <h1>APOD</h1>
          <h2>
            One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. After a request, the API send to us a random image, click in her, and you will be redirected to the HD versions of the image.
          </h2>
        </header>
          
          {
            apod?.map((apod: { url: string; title: string; date: string; hdurl: string; explanation:string;}) => (
              
                  <div className={styles.home_container}>
                    <div className={styles.title_container}>
                      <h2>{apod.title}</h2>
                      <h3>{apod.explanation}</h3>
                    </div>
                    <a href={apod.hdurl} rel="noreferrer" target="_blank">
                      <img src={apod.url} alt="APOD" className={styles.img_container} />
                    </a>
                  </div>   
            ))
          }

            
            {/* <p>{apod && apod.explanation}</p>
            <pre
              style={{
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              }}
            >
              <hr />
              {JSON.stringify(apod, null, 2)}
            </pre> */}
        

    </section>
  )
}
