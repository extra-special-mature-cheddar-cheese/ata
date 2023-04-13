import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '@/styles/Report.module.css'
import ReportBody from '@/components/reportBodyStudent'
import { useState, useEffect } from 'react'

const uri = "mongodb+srv://ata-rw:" + process.env.ATA_RW + "@cluster0.xn3hoeg.mongodb.net/?retryWrites=true&w=majority"

export default function Report() {
  
  const router = useRouter()
  const {id} = router.query

  let [loading, setLoading] = useState(true)
  let [data, setData] = useState(null)

  useEffect(() => {
    console.log("pigon")
    let url = window.location.protocol + "//" + window.location.host + "/api/userexists"

    if (!id) {
      return
    }
    fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: id})
    })
    .then(response => response.json())
    .then(response => {
      if (response.exists) {
        setData({userExists: true, isAdmin: response.isAdmin, name: response.name})
      } else {
        setData({userExists: false})
      }
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
    });
  }, [id])

  if (loading || !data) {
    return (
      <>
        <Head>
          <title>Submit active travel</title>
          <meta charSet="utf-8"></meta>
        </Head>
        <div className={styles.iocontainer}>
          <h1 className={styles.header1}>loading...</h1>
        </div>
      </>
    )
  }

  if (data.userExists) {
    return (
      <>
        <Head>
          <title>Submit active travel</title>
          <meta charSet="utf-8"></meta>
        </Head>
        {!data.isAdmin && <ReportBody name={data.name} id={id}/>}
        {data.isAdmin && undefined /* add admin interface */}
      </>
    )
  } else {
    return (
      <>
        <Head>
          <title>Submit active travel</title>
          <meta charSet="utf-8"></meta>
        </Head>
        <div className={styles.iocontainer}>
          <h1 className={styles.header1}>User ID {id} does not exist</h1>
          <button className={styles.btnprimary} onClick={() => {window.location = window.location.protocol + "//" + window.location.host}}>go back</button>
        </div>
      </>
    )
  }
}