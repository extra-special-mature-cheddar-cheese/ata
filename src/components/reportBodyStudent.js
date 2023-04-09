import styles from '@/styles/Reportbody.module.css'
import { useState } from 'react'

function Stage1(props) {
  let setStage = props.setstage
  let setMethod = props.setmethod
  function bike() {
    setStage(2);
    setMethod("bike")
    console.log("bike")
  }
  function walk() {
    setStage(2);
    setMethod("walk")
    console.log("walk")
  }
  function pubtrans() {
    setStage(2);
    setMethod("pubtrans")
    console.log("public transport")
  }
  return (
    <div className={styles.iocontainer}>
      <h1>Hi {props.name}, how did you get to school today?</h1>
      <p>Select an option</p>
      <div className={styles.methodscontainer}>
        <div className={styles.method} onClick={walk}>
          <svg className={styles.methodsvg} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m304.923 996 119.846-588.308L293 463v127.615h-31V441.461l172.769-72.538q13.231-6 26.039-7.885 12.807-1.884 24.73.347 12.385 2.23 22.193 8.692 9.808 6.461 17.038 16.923l28.154 45.231q36.385 58 83.269 90.115 46.885 32.115 100.654 36.731v30.769q-66.923-6.615-118.884-41.269-51.962-34.654-91.116-99.808l-42.615 196.616 89.692 92.23V996h-30.769V770.615L420.538 651.846 336.154 996h-31.231ZM540 297.385q-26.923 0-45.731-18.808-18.808-18.808-18.808-45.731 0-26.923 18.808-45.731 18.808-18.807 45.731-18.807 26.923 0 45.731 18.807 18.808 18.808 18.808 45.731 0 26.923-18.808 45.731-18.808 18.808-45.731 18.808Z"/></svg>
          <p className={styles.xscaption}>Walk</p>
        </div>
        <div className={styles.method} onClick={bike}>
          <svg className={styles.methodsvg} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M196.825 876q-74.594 0-125.71-51.231Q20 773.539 20 698.308q0-73.693 52.168-126.347 52.168-52.653 125.909-52.653 65.615 0 117.192 45.884 51.577 45.885 57.962 116.654h82.538l-90.461-255.077H300V396h154.154v30.769h-56.615l33.692 92.539h250.461l-73.307-198.693q-2.308-6.923-7.693-10.384-5.384-3.462-12.307-3.462h-85V276h82.077q17.846 0 32.038 9.461 14.192 9.462 20.654 26.847l76 207.769h48.769q73.326 0 125.201 51.59Q940 623.257 940 696.177q0 73.823-51.26 126.054-51.26 52.231-125.817 52.231-68.831 0-119.031-46.847-50.2-46.846-58.354-115H373.231q-6.385 70.462-57.962 116.924Q263.692 876 196.825 876Zm.252-30.769q53.131 0 94.527-35.616 41.396-35.615 52.627-97H222.923v-30.769h121.308Q333 620.692 291.615 586.154q-41.384-34.539-93.538-34.539-62.154 0-104.73 42.558-42.578 42.558-42.578 103.75 0 61.635 42.558 104.471 42.558 42.837 103.75 42.837Zm292.692-163.385h96q3.231-27.615 21.654-68.692 18.423-41.077 53.808-63.077h-219l47.538 131.769Zm273.289 163.385q61.25 0 103.711-42.837 42.462-42.836 42.462-104.113 0-61.742-42.558-104.204-42.558-42.462-103.75-42.462-9.384 0-19.154.385-9.769.385-18.384 2.692l41.307 113.77L738.385 679l-42.231-113.538q-39 19.307-59.269 56.846-20.27 37.538-20.27 75.615 0 61.635 42.597 104.471 42.596 42.837 103.846 42.837ZM197.615 697.923Zm565.308 0Z"/></svg>
          <p className={styles.xscaption}>Bike</p>
        </div>
        <div className={styles.method} onClick={pubtrans}>
          <svg className={styles.methodsvg} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M285.923 896q-6.808 0-11.827-3.74-5.019-3.741-5.019-10.183V805q-24.385-6-46.731-36.419Q200 738.162 200 700.385V328q0-58.438 67.253-85.219Q334.507 216 480.206 216q148.333 0 214.063 26.288Q760 268.577 760 328v372.385q0 37.777-22.346 68.196Q715.308 799 690.923 805v77.077q0 6.442-5.019 10.183-5.019 3.74-11.827 3.74h1q-7.808 0-12.827-3.74-5.019-3.741-5.019-10.183v-67.308H302.769v67.308q0 6.442-5.019 10.183-5.019 3.74-12.827 3.74h1Zm194.308-580.154h252.077-505.385 253.308ZM648 580.385H230.769h498.462H648Zm-417.231-30.77h498.462v-203H230.769v203ZM334.009 724q17.57 0 29.588-12.199t12.018-29.769q0-17.57-12.199-30.109-12.199-12.538-29.769-12.538t-30.109 12.719Q291 664.824 291 682.394t12.719 29.588Q316.439 724 334.009 724Zm292.344 0q17.57 0 30.109-12.199Q669 699.602 669 682.032t-12.719-30.109q-12.72-12.538-30.29-12.538t-29.588 12.719q-12.018 12.72-12.018 30.29t12.199 29.588Q608.783 724 626.353 724Zm-399.43-408.154h505.385q-14.77-35.231-77-52.154-62.231-16.923-175.077-16.923-122.616 0-182.923 16.192-60.308 16.193-70.385 52.885ZM312 784h336q34.231 0 57.731-25.077t23.5-58.538v-120H230.769v120q0 33.461 23.5 58.538Q277.769 784 312 784Z"/></svg>
          <p className={styles.xscaption}>Public Transport</p>
        </div>
      </div>
    </div>
  )
}

function Stage2(props) {
  let setStage = props.setstage
  let setMethod = props.setmethod
  return (
    <div className={styles.mapcontainer}>
      {props.method}
    </div>
  )
}

function Stage3(props) {
  let setStage = props.setstage
  let setMethod = props.setmethod
  return (
    <div className={styles.resultscontainer}>
      
    </div>
  )
}

export default function ReportBody(props) {
  let [method, setMethod] = useState("pigon")
  let [stage, setStage] = useState(1)
  return (
    <>
      {stage == 1 && <Stage1 name={props.name} setmethod={setMethod} setstage={setStage} />}
      {stage == 2 && <Stage2 setmethod={setMethod} setstage={setStage} method={method} />}
      {stage == 3 && <Stage3 name={props.name} method={method} />}
    </>
  )
}