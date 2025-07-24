import { Instagram, MapPin, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="block text-foreground">ARAUJO</span>
            <span className="text-gradient">TATTOO</span>
          </h1>
          
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-muted-foreground">
              Tattoo Artist
            </p>
            <p className="text-lg md:text-xl font-medium">
              Blackwork & Geek Tattoos
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Realismo | Micro Realismo
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin size={18} />
            <span>Jandira - SP</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="glow-effect hover:scale-105 transition-transform duration-200"
            >
              <Palette className="mr-2" size={20} />
              Agendar Sessão
            </Button>
            
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
                className="inline-flex items-center"
              >
                <Instagram className="mr-2" size={20} />
                @araujotattoo_
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;