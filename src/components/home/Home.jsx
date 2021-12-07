import React from 'react'
import { setImages } from './images'
import SimpleImageSlider from 'react-simple-image-slider'
import styles from '../../css/slider.module.css'
import { Typography, Container, Stack , Button  } from '@mui/material'
import { textHome } from '../../utils/texts'

export default function Home() {

  const sliderStyle = {
    objectFit: 'contain', 
    backgroundSize: 'contain', 
    backgroundPositionY: 'top !important'
  }

  return (
    <section className={styles.section}>
      <main className={styles.content}>
        <article className={styles.positionContainer}>
         <SimpleImageSlider
          width={'40%'}
          height={'100%'}
          images={setImages}
          showBullets={false}
          showNavs={false}
          loop={true}
          autoPlay={true}
          autoPlayDelay={5}
          slideDuration={1.2}
          style ={sliderStyle}
         />
        </article>
        <article className={styles.dataContainer}>
          <Container fixed>
            <Stack spacing={2}>
              <Typography variant='h3'>{textHome.title}</Typography>
              <Typography variant='span'>{textHome.firstText}</Typography>
              <Typography variant='span'>{textHome.secondText}</Typography>
              <Typography variant='span'>{textHome.trheeText}</Typography>
              <Typography variant='span'>{textHome.fourtyText}</Typography>
              <Button>{textHome.about}</Button>
            </Stack>
          </Container>
        </article>
      </main>
    </section>
  )
}
