import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  'use client'
  let logIn = () => {
    let id = document.getElementById("id-input").value
    if (id) {
      window.location = "http://localhost:3000/report/" + id
    }
  }
  return (
    <>
      <Head>
        <title>Submit active travel</title>
        <meta charSet="utf-8"></meta>
      </Head>
      <div className={styles.iocontainer}>
        <h1 className={styles.header1}>enter your user ID</h1>
        <input type="text" id="id-input" className={styles.idinput} placeholder="user id"></input>
        <button onClick = {logIn} className="button">start</button>
      </div>
    </>
  )
}
