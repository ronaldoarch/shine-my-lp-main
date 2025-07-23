# Anti Aviator Landing Page - Arquivos Completos

## 1. src/components/LandingPage.tsx
```tsx
import { Check, Zap, Target, Shield, Clock, TrendingUp } from "lucide-react";
import aviationLogo from "@/assets/aviation-logo.png";
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
```

## 2. src/index.css
```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 7%;
    --foreground: 0 0% 98%;
    --card: 0 0% 10%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 10%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 84% 60%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 15%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 15%;
    --muted-foreground: 0 0% 65%;
    --accent: 0 0% 15%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 20%;
    --input: 0 0% 20%;
    --ring: 0 84% 60%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    
    /* Custom Aviation Colors */
    --aviation-red: 0 84% 60%;
    --aviation-gold: 45 96% 64%;
    --aviation-dark: 0 0% 5%;
    --aviation-light: 0 0% 15%;
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, hsl(var(--aviation-red)), hsl(var(--aviation-gold)));
    --gradient-card: linear-gradient(145deg, hsl(var(--card)), hsl(var(--aviation-light)));
    
    /* Shadows */
    --shadow-glow: 0 0 30px hsl(var(--aviation-red) / 0.5);
    --shadow-card: 0 10px 30px -5px hsl(var(--aviation-dark) / 0.3);
    
    /* Transitions */
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .dark {
    --background: 0 0% 7%;
    --foreground: 0 0% 98%;
    --card: 0 0% 10%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 10%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 84% 60%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 15%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 15%;
    --muted-foreground: 0 0% 65%;
    --accent: 0 0% 15%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 20%;
    --input: 0 0% 20%;
    --ring: 0 84% 60%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
  }
}

/* Utility Classes */
.gradient-primary {
  background: var(--gradient-primary);
}

.gradient-card {
  background: var(--gradient-card);
}

.shadow-glow {
  box-shadow: var(--shadow-glow);
}

.shadow-card {
  box-shadow: var(--shadow-card);
}

.transition-smooth {
  transition: var(--transition-smooth);
}

/* Component Classes */
.hero-bg {
  background: radial-gradient(ellipse at center, hsl(var(--aviation-red) / 0.1) 0%, hsl(var(--background)) 70%);
}

.aviation-card {
  @apply bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-card transition-smooth hover:shadow-glow hover:-translate-y-1;
}

.btn-primary {
  @apply gradient-primary text-white font-bold transition-smooth hover:shadow-glow hover:scale-105;
}

.feature-item {
  @apply flex items-center gap-3 text-white;
}

.feature-icon {
  @apply w-5 h-5 text-green-500 flex-shrink-0;
}

/* Animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px hsl(var(--aviation-red) / 0.5);
  }
  50% {
    box-shadow: 0 0 40px hsl(var(--aviation-red) / 0.8);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}
```

## 3. tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        aviation: {
          red: "hsl(var(--aviation-red))",
          gold: "hsl(var(--aviation-gold))",
          dark: "hsl(var(--aviation-dark))",
          light: "hsl(var(--aviation-light))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(var(--aviation-red) / 0.5)",
          },
          "50%": {
            boxShadow: "0 0 40px hsl(var(--aviation-red) / 0.8)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.7",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
```

## 4. src/pages/Index.tsx
```tsx
import LandingPage from "@/components/LandingPage";

const Index = () => {
  return <LandingPage />;
};

export default Index;
```

## 5. src/App.tsx
```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

## 6. src/main.tsx
```tsx
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
```

## 7. index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Anti Aviator - Estratégias Que Funcionam AO VIVO</title>
    <meta name="description" content="R$1.000/DIA com padrões para VELAS 50x e 100x. Sem fórmula mágica, só lucro! Estratégias ao vivo que realmente funcionam." />
    <meta name="author" content="Lovable" />

    <meta property="og:title" content="Anti Aviator - Estratégias Que Funcionam AO VIVO" />
    <meta property="og:description" content="R$1.000/DIA com padrões para VELAS 50x e 100x. Sem fórmula mágica, só lucro!" />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Dependências necessárias (package.json)
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2",
    "@tanstack/react-query": "^5.56.2",
    "lucide-react": "^0.462.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.2",
    "class-variance-authority": "^0.7.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react-swc": "^3.7.0",
    "tailwindcss": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "^5.5.3",
    "vite": "^5.4.0"
  }
}
```

## Imagens necessárias:
- `src/assets/aviation-logo.png` - Logo circular com tema aviação
- `src/assets/hero-bg.jpg` - Background de aviação/trading

## Instruções de uso:
1. Crie um projeto React com Vite
2. Instale as dependências listadas
3. Substitua os arquivos pelos códigos acima
4. Adicione as imagens necessárias na pasta `src/assets/`
5. Execute `npm run dev`