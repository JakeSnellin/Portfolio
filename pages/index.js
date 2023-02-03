import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

const SketchComp = dynamic(() =>
  import('../comps/Sketchcomp').then((mod) => mod.default),{
    ssr: false
  }
)

export default function Home() {
  return (
    <>
       <SketchComp />
    </>
  )
}
