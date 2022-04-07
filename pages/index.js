import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I'm Jakub. I'm a software engineer and I am learning Next.JS</p>
        <p>
          This is a sample website -- you'll be building one like this on {' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>
          
        </p>
      </section>
    </Layout>
  )
}
