import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import TextLoop from 'react-text-loop';
import Contacts from '../components/Contacts';

import styles from '../styles/About.module.css';

export default function AboutSection() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={styles.content_container}>
        <div id={styles.navigation}>
          <a href="/">
            <Typography className={styles.content_text} component="span" variant="body1" paragraph={true} align="left">
              &#x21A2; Back
            </Typography>
          </a>
        </div>
        <div id={styles.content}>
          <Typography component="h3" variant="h3">
            Bonju &#x1F44B;
          </Typography>
          <Typography className={styles.content_text} component="span" variant="body1" paragraph={true} align="left">
            Egene here. I'm a software developer &#x1F4BB; and recent UNSW
             graduate &#x1F393; with a degree in Computer Science (majoring in
             artificial intelligence). And now have set my sights on a career
             in web development.
            <br /><br />
            When I'm not working on personal projects, you can find me diving
             into sci-fi/fantasy novels &#x1F4DA;, binging&nbsp;
            <div id={styles.text_loop}>
              <TextLoop>
                  <span>Netflix</span>
                  <span>Disney+</span>
                  <span>AnimeLab</span>
                  <span>Crunchyroll</span>
                  <span>Stan</span>
              </TextLoop>
            </div>
            &nbsp;shows &#x1F3A5;, daydreaming about future tech &#x1F916;,
            and slowly but surely growing my indoor plant family &#x1F331;.
            <br /><br />
            Wanna have a chat? Feel free to contact me!
          </Typography>
        </div>
        <Contacts style_class={styles.contacts}
          style_id_1={styles.contacts_email}
          style_id_2={styles.contacts_socials}/>
      </div>
    </div>
  );
}
