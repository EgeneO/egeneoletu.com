import { useLayoutEffect, useState } from 'react';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import LogoBig from '../public/logo.svg';
import LogoSmall from '../public/logo_small.svg';
import Contacts from '../components/Contacts';

import styles from '../styles/Home.module.css';

function Logo() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  let [Logo, width] = size[0] < 800 ? [LogoSmall, 286] : [LogoBig, 860];
  let height = 400;
  let maxWidth = size[0] - 100;
  maxWidth = maxWidth < 200 ? 200 : maxWidth;
  if (maxWidth < width) {
    width = maxWidth;
    height = maxWidth / width * height;
  }
  return <Logo width={width} height={height}/>;
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Egene</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={styles.content_container}>
        <a href="/about">
          <div id={styles.logo_animated}>
            <Logo />
          </div>
        </a>
        <Contacts style_class={styles.contacts}
          style_id_1={styles.contacts_email}
          style_id_2={styles.contacts_socials}/>
      </div>
    </div>
  );
}
