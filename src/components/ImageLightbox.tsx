'use client';

import { useEffect } from 'react';

type ImageLightboxProps = {
  src: string | null;
  alt?: string;
  onClose: () => void;
};

export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/80 grid place-items-center" onClick={onClose}>
      <div className="relative max-w-[95vw] max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt || 'Preview image'} className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-3xl" />
        <button
          aria-label="Close image preview"
          onClick={onClose}
          className="absolute -top-3 -right-3 px-3 py-1 rounded-md bg-black/70 text-white hover:bg-black/90"
        >
          ✕
        </button>
      </div>
    </div>
  );
}


