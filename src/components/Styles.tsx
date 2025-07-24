import { Gamepad2, Layers, Zap, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Styles = () => {
  const tattooStyles = [
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Blackwork",
      description: "Técnicas avançadas de blackwork com foco em geometria, linhas precisas e contrastes marcantes.",
      features: ["Geometria Sagrada", "Linework Detalhado", "Alto Contraste", "Composições Únicas"]
    },
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: "Geek Culture",
      description: "Tatuagens inspiradas em anime, games, filmes e toda cultura pop que você ama.",
      features: ["Anime & Manga", "Gaming", "Filmes & Séries", "Quadrinhos"]
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Realismo",
      description: "Retratos e imagens realistas com técnicas de sombreamento e detalhamento premium.",
      features: ["Retratos", "Natureza", "Objetos", "Texturas Realistas"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Micro Realismo",
      description: "Pequenos detalhes com grande impacto. Precisão e delicadeza em cada traço.",
      features: ["Detalhes Finos", "Precisão Extrema", "Tamanhos Pequenos", "Acabamento Perfeito"]
    }
  ];

  return (
    <section id="styles" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="text-gradient">Estilos</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada estilo é uma forma diferente de contar sua história. 
            Descubra qual melhor representa sua personalidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tattooStyles.map((style, index) => (
            <Card 
              key={index} 
              className="group deep-shadow hover:glow-effect transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {style.icon}
                </div>
                <CardTitle className="text-xl mb-2">{style.title}</CardTitle>
                <CardDescription className="text-sm">
                  {style.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {style.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Styles;