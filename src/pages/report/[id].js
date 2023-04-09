import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '@/styles/Report.module.css'
import ReportBody from '@/components/reportBodyStudent'

export default function Report(props) {
  return (
    <>
      <Head>
        <title>Submit active travel</title>
        <meta charSet="utf-8"></meta>
      </Head>
      <ReportBody name={props.name}/>
    </>
  )
}

export async function getServerSideProps() {
  let name = "jimmyahh theory"
  let isAdmin = false
  return {
    props: {name, isAdmin}, // will be passed to the page component as props
  }
}