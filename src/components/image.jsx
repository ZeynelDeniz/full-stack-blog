import { Image as IKImage } from '@imagekit/react';

const Image = ({src, className, w, h, alt}) => {
  return (
    <IKImage
                urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
                src={src}
                className={className}
                alt={alt}
                loading="lazy"
                onError={(e) => console.log('ImageKit error:', e)}
                onLoad={() => console.log('ImageKit loaded successfully')}
                width={w}
                height={h}
            />
  )
}

export default Image