import { useState } from 'react';
import { Instagram, MessageCircle, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá! Gostaria de agendar uma sessão de tatuagem.
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Mensagem: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para o WhatsApp para finalizar seu agendamento.",
    });
    
    // Limpar formulário
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-accent mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Links Sociais */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Redes Sociais</h3>
              <div className="flex gap-4">
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
                    className="inline-flex items-center gap-2"
                  >
                    <Instagram size={20} />
                    @araujotattoo_
                  </a>
                </Button>
                
                <Button 
                  size="lg"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                  className="glow-effect hover:scale-105 transition-transform duration-200"
                >
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Processo de Agendamento */}
            <Card className="deep-shadow">
              <CardHeader>
                <CardTitle>Como Funciona o Agendamento</CardTitle>
                <CardDescription>
                  Processo simples e direto para sua comodidade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium">Consulta Inicial</p>
                      <p className="text-sm text-muted-foreground">Conversamos sobre sua ideia e orçamento</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-medium">Criação do Design</p>
                      <p className="text-sm text-muted-foreground">Desenvolvimento do projeto personalizado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium">Execução</p>
                      <p className="text-sm text-muted-foreground">Realização da tatuagem com todo cuidado</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <Card className="deep-shadow">
            <CardHeader>
              <CardTitle>Solicitar Orçamento</CardTitle>
              <CardDescription>
                Preencha os dados abaixo e será redirecionado para o WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Descrição da Tatuagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Descreva sua ideia, estilo desejado, tamanho aproximado e localização no corpo..."
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full glow-effect hover:scale-105 transition-transform duration-200"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;