import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

/*
* THIS PAGE DOES THE FOLLOWING:
- displays the dashboard charts

! THIS PAGE NEEDS:
- Chart Comps
- Header Comps
- Container to fetch data, pass props
- Links to go to other pages
*/

export default function Home() {
  return (
    <h1 className='header'>Pepsico Dashboard</h1>
  )
}
