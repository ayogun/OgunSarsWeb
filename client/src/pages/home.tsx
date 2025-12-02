import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Frame, Gamepad2, Video, Utensils, Fan, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_geometric_dark_background_with_subtle_lighting.png";

export default function Home() {
  useEffect(() => {
    document.title = "Ogun-Sars | Premier Investment & Management Group";
  }, []);

  const brands = [
    {
      name: "PGR",
      description: "Manufacturing innovative framed wall decor designs for collectors.",
      icon: <Frame className="h-8 w-8 mb-4 text-blue-400" />,
      gradient: "from-blue-900/20 to-slate-900/50"
    },
    {
      name: "GeekCultcha",
      description: "E-commerce platform manufacturing and selling exclusive collectible items.",
      icon: <Gamepad2 className="h-8 w-8 mb-4 text-emerald-400" />,
      gradient: "from-emerald-900/20 to-slate-900/50"
    },
    {
      name: "Siczil",
      description: "Women's boutique pioneering live transmission sales for immersive shopping.",
      icon: <Video className="h-8 w-8 mb-4 text-purple-400" />,
      gradient: "from-purple-900/20 to-slate-900/50"
    },
    {
      name: "Kof",
      description: "Innovative fast-food restaurant concept currently in development.",
      icon: <Utensils className="h-8 w-8 mb-4 text-amber-400" />,
      gradient: "from-amber-900/20 to-slate-900/50"
    },
    {
      name: "Nexvent",
      description: "Specialized B2B HVAC solutions and commercial climate systems.",
      icon: <Fan className="h-8 w-8 mb-4 text-rose-400" />,
      gradient: "from-rose-900/20 to-slate-900/50"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display text-2xl font-bold tracking-tighter">OGUN-SARS</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#brands" className="hover:text-primary transition-colors">Our Brands</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        </div>

        <div className="container relative z-10 px-6 pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-widest uppercase mb-6 text-muted-foreground">
                Global Holdings Group
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter mb-8">
              Building the future through <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">strategic diversity.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Ogun-Sars is the parent company behind dynamic initiatives that are reshaping industries. From technology to lifestyle, we cultivate growth.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base" asChild>
                <a href="#brands">Explore Our Portfolio</a>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base border-white/10 hover:bg-white/5" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-background border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Visionary Leadership</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded with a vision to integrate diverse business interests under one strategic umbrella, Ogun-Sars represents a modern approach to holding management.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just manage assets; we nurture ecosystems. Each of our subsidiary brands operates with autonomy while benefiting from the collective strength, resources, and strategic direction of the parent group.
              </p>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-[400px] bg-gradient-to-tr from-white/5 to-transparent rounded-lg border border-white/5 p-8 flex items-end">
              <div className="text-3xl font-display font-bold text-white/20">
                Innovation.<br/>
                Integrity.<br/>
                Impact.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-24 md:py-32 bg-white/2 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Ecosystem</h2>
            <p className="text-lg text-muted-foreground">
              Five distinct brands. One shared commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full bg-gradient-to-br ${brand.gradient} border-white/5 hover:border-white/10 transition-colors`}>
                  <CardHeader>
                    {brand.icon}
                    <CardTitle className="font-display text-2xl">{brand.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-white/70">
                      {brand.description}
                    </CardDescription>
                    <div className="mt-6 pt-6 border-t border-white/5 flex items-center text-sm font-medium text-white/50 group cursor-pointer hover:text-white transition-colors">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-background border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              We are always looking for new opportunities and partnerships. Reach out to see how Ogun-Sars can work with you.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg rounded-full">
              <Mail className="mr-2 h-5 w-5" /> Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-background text-center md:text-left">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-xl font-bold tracking-tighter opacity-50">OGUN-SARS</div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ogun-Sars Holdings. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
