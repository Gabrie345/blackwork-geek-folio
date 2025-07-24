import { Award, Clock, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Clientes Satisfeitos"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "5+",
      label: "Anos de Experiência"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "100%",
      label: "Satisfação Garantida"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "24h",
      label: "Resposta Rápida"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Sobre <span className="text-gradient">Araujo</span>
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Especialista em <strong className="text-foreground">blackwork</strong> e 
              <strong className="text-foreground"> tatuagens geek</strong>, trago anos de experiência 
              criando arte corporal única e personalizada. Minha paixão pela cultura pop e técnicas 
              avançadas de realismo me permite transformar suas ideias em obras de arte permanentes.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada tatuagem é uma história, uma expressão pessoal que merece o máximo cuidado e 
              atenção aos detalhes. Utilizo apenas materiais de primeira qualidade e mantenho 
              os mais altos padrões de higiene e segurança.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Especialidades:</h3>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Blackwork</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Geek Culture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Realismo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Micro Realismo</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center deep-shadow hover:glow-effect transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-accent mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;