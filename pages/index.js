import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          PK Rasam
        </h1>

        <h2 className={styles.title}>
          Technology Senior Executive
        </h2>

        <h3 className={styles.title}>
          Web3 Engineer - Value Architect - Business Operator
        </h3>

        <p className={styles.description}>
          Say Hello via {'...'}
        </p>

        <div className={styles.grid}>
          <a href="https://hns.to/github.pkrasam/" className={styles.card}>
            <h4>Code &rarr;</h4>
            <p>...that draws my learning & problem solving skills.</p>
          </a>

          <a href="https://hns.to/podcast.pkrasam/" className={styles.card}>
            <h4>Listen &rarr;</h4>
            <p>...to sound bytes that seeks my listening comprehension!</p>
          </a>

          <a href="https://hns.to/twitter.pkrasam/" className={styles.card}>
            <h4>Bytes &rarr;</h4>
            <p>...of random thoughts shared every now and then?!</p>
          </a>

          <a href="https://hns.to/linkedin.pkrasam/" className={styles.card}>
            <h4>Network &rarr;</h4>
            <p>...that keeps growing on a steady pace.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
