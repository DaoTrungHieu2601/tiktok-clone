import { forwardRef, useState } from "react";
import images from "@/assets/images";

const Image = forwardRef(({ src, alt, fallback: customeFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('')

    const handleError = () => {
        setFallback(customeFallback)
    }
    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt} {...props}
            onError={handleError}
        />
    );
});

export default Image;