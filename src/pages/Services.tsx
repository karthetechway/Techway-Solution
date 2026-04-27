import { Link } from "wouter";
import { Code, Smartphone, Zap, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Services() {
  const services = [
    {
      id: "web",
      title: "Website Creation",
      subtitle: "Digital experiences that captivate and convert.",
      description: "We don't just build websites; we engineer high-performance digital platforms. From stunning marketing sites to complex e-commerce ecosystems and custom web applications, our solutions are built to scale with your business.",
      features: ["Custom UI/UX Design", "Responsive & Mobile-First", "E-Commerce Solutions", "CMS Integration", "SEO Optimization", "Performance Tuning"],
      image: `${import.meta.env.BASE_URL}images/service-web.png`,
      icon: <Code className="w-6 h-6" />,
      reversed: false
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      subtitle: "Your business, in the palm of their hands.",
      description: "Engage your customers anywhere with beautifully designed, fluid mobile applications. We build native and cross-platform apps that provide flawless user experiences across iOS and Android devices.",
      features: ["iOS & Android Development", "React Native / Flutter", "App UI/UX Design", "API Integrations", "Push Notifications", "App Store Deployment"],
      image: `${import.meta.env.BASE_URL}images/service-mobile.png`,
      icon: <Smartphone className="w-6 h-6" />,
      reversed: true
    },
    {
      id: "automation",
      title: "Tech Innovations & Automations",
      subtitle: "Work smarter, not harder.",
      description: "Reclaim thousands of hours by automating repetitive workflows. We integrate AI, build custom scripts, and connect your fragmented software ecosystem so your team can focus on high-impact strategic work.",
      features: ["AI & Machine Learning", "Business Process Automation", "Custom Software", "API Development", "Data Pipelines", "Legacy System Upgrades"],
      image: `${import.meta.env.BASE_URL}images/service-ai.png`,
      icon: <Zap className="w-6 h-6" />,
      reversed: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-muted/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed to elevate your brand, streamline your operations, and drive measurable growth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${service.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
              
              {/* Content */}
              <FadeIn direction={service.reversed ? "left" : "right"} className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6">
                  {service.icon}
                  {service.title}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.subtitle}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/contact">
                  <Button className="group">
                    Discuss Your Idea
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </FadeIn>
              
              {/* Image */}
              <FadeIn direction={service.reversed ? "right" : "left"} className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted text-center">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure which solution is right for you?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our experts are here to help you navigate the technology landscape and find the perfect fit for your business goals.
            </p>
            <Link href="/contact">
              <Button size="lg">Get a Free Technical Assessment</Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
