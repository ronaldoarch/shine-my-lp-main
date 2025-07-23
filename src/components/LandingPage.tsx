import { Check, Zap, Target, Shield, Clock, TrendingUp } from "lucide-react";
import aviationLogo from "@/assets/logotipo-da-aviação.png";
import heroBg from "@/assets/hero-bg.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen hero-bg">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={aviationLogo} 
              alt="Anti Aviator Logo" 
              className="w-32 h-32 mx-auto mb-6 animate-glow"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-white">AO VIVO. </span>
            <span className="text-white">SEM FÓRMULA MÁGICA. </span>
            <span className="gradient-primary bg-clip-text text-transparent">
              SÓ LUCRO!
            </span>
          </h1>

          {/* Subtitle */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-slide-up">
            <Zap className="w-6 h-6 text-aviation-gold animate-pulse-glow" />
            <p className="text-xl md:text-2xl text-white font-medium">
              R$1.000/DIA com meus padrões para 
              <span className="text-aviation-gold font-bold"> VELAS 50x e 100x!</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-12 animate-slide-up">
            <button className="btn-primary text-xl font-bold px-12 py-6 rounded-2xl animate-glow">
              <Zap className="w-6 h-6 mr-2" />
              [ ACESSAR AGORA 🏠 ]
            </button>
          </div>

          {/* Features List */}
          <div className="aviation-card max-w-2xl mx-auto animate-fade-in">
            <div className="space-y-4">
              <div className="feature-item">
                <Check className="feature-icon" />
                <span className="text-lg">Cálculo frio, sem achismo</span>
              </div>
              <div className="feature-item">
                <Check className="feature-icon" />
                <span className="text-lg">Sinais diretos, sem enrolação</span>
              </div>
              <div className="feature-item">
                <Check className="feature-icon" />
                <span className="text-lg">Estratégias que funcionam AO VIVO</span>
              </div>
            </div>

            {/* Warning */}
            <div className="mt-6 p-4 border border-aviation-red/30 rounded-lg bg-aviation-red/5">
              <div className="flex items-center gap-2 text-aviation-red">
                <Target className="w-5 h-5" />
                <span className="font-bold">Decida rápido. Quem hesita, perde.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Por que escolher o <span className="gradient-primary bg-clip-text text-transparent">Anti Aviator</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="aviation-card text-center animate-fade-in">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Resultados Reais</h3>
              <p className="text-muted-foreground">
                Estratégias testadas e aprovadas com resultados consistentes de R$1.000/dia
              </p>
            </div>

            <div className="aviation-card text-center animate-fade-in">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Ao Vivo</h3>
              <p className="text-muted-foreground">
                Acompanhe em tempo real, sem gravações ou truques. Tudo transparente.
              </p>
            </div>

            <div className="aviation-card text-center animate-fade-in">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Sem Enganação</h3>
              <p className="text-muted-foreground">
                Métodos diretos, sem fórmulas mágicas. Apenas estratégias que funcionam.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 px-4 bg-gradient-to-b from-transparent to-aviation-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Pronto para <span className="gradient-primary bg-clip-text text-transparent">lucrar</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Não perca mais tempo com métodos que não funcionam. 
            Acesse agora e comece a lucrar hoje mesmo!
          </p>
          <button className="btn-primary text-2xl font-bold px-16 py-8 rounded-2xl animate-glow">
            <Zap className="w-8 h-8 mr-3" />
            QUERO ACESSAR AGORA
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;