import React, { useState, useEffect } from "react"
import styles from './ApodApi.module.scss'
import axios from "axios";

interface Apod {
    map(arg0: (apod: { url: string;  title: string; date: string;}) => JSX.Element): React.ReactNode;
    title: string;
    date: string;
    url: string;
    explanation: string;
  }
  

export function ApodApi() {
  const [ apod, setApod ] = useState<Apod | null>(null)

  useEffect(() => {
    getApod()
    }, [])

  const getApod = () => {
    axios({
      method: 'GET',
      url: 'https://api.nasa.gov/planetary/apod?api_key=URA3LbxiNgTf9tlq9lnGq1Gt3tV7eBC74Ozs2jfp&count=5',
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
        
        {
          apod && ( 
          <div>
            
              {
                apod && apod.map(
                  (apod: { url: string; title: string; date: string; }) => {
                    return (
                      <div>
                        <h1>{apod.title} - <i>{apod.date}</i></h1>
                        <img src={apod.url} alt="APOD" width="800" height="auto"/>
                      </div>
                    )
                  }
                )
              }
            
            <p>{apod.explanation}</p>
            <pre
              style={{
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              }}
            >
              <hr />
              {JSON.stringify(apod, null, 2)}
            </pre>
          </div>
          )
        }

    </section>
  )
}
