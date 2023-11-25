'use client'

import NextImage from 'next/image'
import { Tab } from '@headlessui/react'

import { Image } from '@/types'

import GalleryTab from './gallery-tab'

interface GalleryProps {
  images: Image[]
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <Tab.Group as='div' className='flex w-full gap-4'>
      <div className='mx-auto mt-6 hidden w-1/5 max-w-2xl sm:block lg:max-w-none  '>
        <Tab.List className='flex flex-col gap-4'>
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className='aspect-square w-full'>
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className='relative aspect-square h-full w-full overflow-hidden sm:rounded-lg'>
              <NextImage fill src={image.url} alt='Image' className='object-cover object-center' />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Gallery
