
interface ImageProps {
    src: string;
    alt: string;
    className: string;
    }
    
export default function Image({src, alt, className}: ImageProps) {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className={className}
            decoding="async"
            fetchPriority="high"
        />
    )
}
