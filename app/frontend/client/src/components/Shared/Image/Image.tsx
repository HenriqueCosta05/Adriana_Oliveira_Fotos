
interface ImageProps {
    src: string;
    alt: string;
    className: string;
    width?: string;
    height?: string;
    }
    
export default function Image({src, alt, className, width, height}: ImageProps) {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            decoding="async"
            fetchPriority="high"
        />
    )
}
