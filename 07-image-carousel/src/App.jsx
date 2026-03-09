
import './App.css'
import ImageCarousel from './components/ImageCarousel'

function App() {
  const images = [
    {
      src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel1.jpg',
      alt: 'nature',
    },
    {
      src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel2.jpg',
      alt: 'Beach',
    },
    {
      src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel3.jpg',
      alt: 'Yak',
    },
    {
      src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel4.jpg',
      alt: 'Hay',
    },
    {
      src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel5.jpg',
      alt: 'Plants',
    },
    {
      src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel6.jpg',
      alt: 'Building',
    },
  ]
  return (
    <>
      <ImageCarousel images={images} />
    </>
  )
}

export default App
