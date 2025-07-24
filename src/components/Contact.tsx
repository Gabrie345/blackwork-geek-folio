import { Instagram, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      content: "Jandira - SP",
      description: "Endereço completo via WhatsApp"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      content: "Seg - Sáb: 9h às 18h",
      description: "Agendamento necessário"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      content: "Resposta em até 2h",
      description: "Melhor forma de contato"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos Criar Sua <span className="text-gradient">Arte</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar sua ideia em uma obra de arte? Entre em contato 
            comigo e vamos conversar sobre sua próxima tatuagem.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Informações de Contato - Mobile First */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-card border">
                  <div className="text-accent mb-3 flex justify-center">
                    {info.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  <p className="text-muted-foreground text-sm">{info.content}</p>
                  <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                </div>
              ))}
            </div>

            {/* Botões de Contato - Mobile First */}
            <div className="space-y-4">
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                className="w-full glow-effect hover:scale-105 transition-transform duration-200 text-lg py-6"
              >
                <MessageCircle className="mr-3" size={24} />
                Agendar via WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="w-full hover:bg-accent hover:text-accent-foreground transition-colors duration-200 text-lg py-6"
              >
                <a 
                  href="https://www.instagram.com/araujotattoo_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3"
                >
                  <Instagram size={24} />
                  Ver Portfolio no Instagram
                </a>
              </Button>
            </div>

            {/* Processo Simplificado */}
            <Card className="deep-shadow mt-8">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Como Agendar</CardTitle>
                <CardDescription>
                  Processo simples e rápido
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <p className="text-sm">Clique no botão do WhatsApp</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <p className="text-sm">Descreva sua ideia de tatuagem</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <p className="text-sm">Receba o orçamento e agende</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;