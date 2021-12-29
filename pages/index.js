import { useRef} from 'react'
import styles from '../styles/Home.module.css'
import VideoJS from '../components/VideoJS'

export default function Home() {
  const playerRef = useRef(null);

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
      type: 'application/x-mpegurl'
    }]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </main>
    </div>
  )
}
