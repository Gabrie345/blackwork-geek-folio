import { Instagram, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <span className="text-2xl font-bold text-gradient">ARAUJO</span>
              <span className="text-lg text-muted-foreground">TATTOO</span>
            </div>
            <p className="text-muted-foreground">
              Transformando ideias em arte corporal desde 2019
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
              <MapPin size={16} />
              <span>Jandira - SP</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Especialista em Blackwork & Geek Tattoos
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <a 
              href="https://www.instagram.com/araujotattoo_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <Instagram size={20} />
              <span>@araujotattoo_</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Araujo Tattoo. Feito com 
            <Heart size={14} className="text-accent fill-accent" /> 
            para a arte da tatuagem.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;