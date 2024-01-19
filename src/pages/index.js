import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Comp from "@/components/Comp";
import Props from "@/components/Props";
import State from "@/components/State";
import ConditionalRender from "@/components/ConditionalRender";
import ElementsRender from "@/components/ElementsRender"; 
import {EventsES6, EventsES7, MoreEvents} from "@/components/Events";
import Parent from "@/components/ComponentComunication";
import LifeCycle from "@/components/ComponentLifecyle";
import AjaxApis from "@/components/AjaxApis";
import HooksCounter from '@/components/HooksCounter';
import ScrollHooks from '@/components/ScrollHooks';
import HookClock from '@/components/HookClock';
import AjaxHooks from '@/components/AjaxHooks';
import CustomHooks from '@/components/CustomHooks';
import References from '@/components/References';
import Forms from '@/components/Forms';
import Styles from '@/components/Styles';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
        <div>
        <Comp msg="Hi, I am a Component!." />
        <Props 
        string="This is a string" 
        number={20} 
        boolean={true}
        array={[1,2,3,4]}/>
        <hr></hr>
        <State/>
        <hr></hr>
        <ConditionalRender/>
        <hr></hr>
        <ElementsRender/>
        <hr></hr>
        <EventsES6/>
        <hr></hr>
        <EventsES7/>
        <hr></hr>
        <MoreEvents/>
        <hr></hr>
        <Parent/>
        <hr></hr>
        <LifeCycle/>
        <hr></hr>
        <AjaxApis/>
        <hr></hr>
        <HooksCounter title="Followers"/>
        <hr></hr>
        <ScrollHooks/>
        <hr></hr>
        <HookClock/>
        <hr></hr>
        <AjaxHooks/>
        <hr></hr>
        <CustomHooks/>
        <hr></hr>
        <References/>
        </div>
        <hr></hr>
        <Forms/>
        <hr></hr>
        <Styles/>
      </main>
    </>
  )
}
