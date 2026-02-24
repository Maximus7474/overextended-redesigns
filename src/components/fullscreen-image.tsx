import Image, { ImageProps } from "next/image";

interface FullScreenImageProps extends Omit<ImageProps, "className"> {
  containerClassName?: string;
  imageClassName?: string;
}

export default function FullScreenImage({ 
  src, 
  alt, 
  containerClassName = "", 
  imageClassName = "",
  ...rest
}: FullScreenImageProps) {
  return (
    <a 
      href={typeof src === 'string' ? src : undefined} 
      target="_blank" 
      rel="noreferrer"
      className={`block relative overflow-hidden rounded-lg ${containerClassName}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className={`object-cover transition-transform hover:scale-[1.02] duration-300 ${imageClassName}`}
        {...rest}
      />
    </a>
  );
}
