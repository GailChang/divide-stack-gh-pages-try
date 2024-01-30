import Image from 'next/image'
import Link from 'next/link'
import bannerD from '/public/Desktop/banner.png'
import bannerM from '/public/Mobile/banner.png'

export default async function Home() {
  return (
    <>
      <div className='h-screen'>
        <Image alt='banner' src={bannerD} fill sizes='100vw' 
          style={{
            objectFit: 'cover',
            filter: 'brightness(40%)'
          }} />
      </div>
    </>    
  )
}
