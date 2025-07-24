import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tattoo1 from '@/assets/tattoo-1.jpg';
import tattoo2 from '@/assets/tattoo-2.jpg';
import tattoo3 from '@/assets/tattoo-3.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: tattoo1,
      alt: "Blackwork Geométrico",
      category: "Blackwork",
      description: "Mandala geométrica com detalhes intrincados"
    },
    {
      src: tattoo2,
      alt: "Retrato Realista",
      category: "Realismo",
      description: "Micro realismo com sombreamento detalhado"
    },
    {
      src: tattoo3,
      alt: "Tattoo Geek",
      category: "Geek Culture",
      description: "Personagem anime em estilo blackwork"
    },
    {
      src: tattoo1,
      alt: "Geometria Sagrada",
      category: "Blackwork",
      description: "Padrões geométricos complexos"
    },
    {
      src: tattoo2,
      alt: "Micro Realismo",
      category: "Micro Realismo",
      description: "Detalhes precisos em pequena escala"
    },
    {
      src: tattoo3,
      alt: "Arte Geek",
      category: "Geek Culture",
      description: "Inspiração em cultura pop"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
    } else {
      setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-secondary/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Galeria</span> de Trabalhos
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes. Cada peça é única e 
            criada especialmente para cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg deep-shadow hover:glow-effect transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <span className="inline-block px-2 py-1 bg-accent text-xs rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="font-semibold mb-1">{image.alt}</h3>
                  <p className="text-sm text-gray-300">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft size={24} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight size={24} />
            </Button>
            
            <div className="max-w-4xl max-h-full">
              <img 
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4 text-white">
                <span className="inline-block px-3 py-1 bg-accent text-sm rounded-full mb-2">
                  {galleryImages[selectedImage].category}
                </span>
                <h3 className="text-xl font-semibold mb-1">{galleryImages[selectedImage].alt}</h3>
                <p className="text-gray-300">{galleryImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
          >
            <a 
              href="https://www.instagram.com/araujotattoo_/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver Mais no Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;