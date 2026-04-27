import { Link } from "wouter";
import { ChevronRight, Layout, Smartphone, Cpu, CheckCircle2, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const services = [
    {
      title: "Premium Web Creation",
      description: "Scalable, high-performance websites tailored for the diverse Indian market and global audience.",
      icon: <Layout className="w-8 h-8" />,
      color: "bg-primary",
    },
    {
      title: "Mobile App Excellence",
      description: "Next-gen mobile experiences designed to capture and engage users across the subcontinent.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "bg-secondary",
    },
    {
      title: "Digital Automations",
      description: "Intelligent AI-driven workflows to streamline your business operations and maximize efficiency.",
      icon: <Cpu className="w-8 h-8" />,
      color: "bg-accent",
    },
  ];

  const stats = [
    { value: "500+", label: "Success Stories" },
    { value: "99%", label: "Retention Rate" },
    { value: "Pan-India", label: "Service Network" },
    { value: "12+", label: "Years of Trust" },
  ];

  const testimonials = [
    {
      name: "Krishna Ram",
      role: "Director, SS Enterprises",
      quote: "Techway Solution delivered a portal that truly understands the scale of Indian retail. Their automation tools saved us thousands of hours.",
      avatar: "RK"
    },
    {
      name: "Siva Balamurugan",
      role: "Founder, National Footwear",
      quote: "The mobile app they built is stunning. It works flawlessly across all devices, even on slower networks, which was critical for us.",
      avatar: "AS"
    },
    {
      name: "Kishore Kumar",
      role: "Owner, LION Wholesaler",
      quote: "Highly professional team with deep technical expertise. They are our go-to partner for all digital innovations.",
      avatar: "VM"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground text-sm font-medium mb-8">
                <span className="flex w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Empowering Digital India
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
                Your Strategic Partner for <span className="text-primary">Digital Transformation</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl">
                We craft high-end websites, powerful mobile apps, and smart automations that drive growth for modern Indian enterprises.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="group h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-14 px-8 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                  View Our Services
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Specialized Services</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground">Innovating at the Speed of Trust</h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group bg-card p-10 rounded-[2.5rem] border border-border/50 shadow-xl shadow-black/[0.02] hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  <div className={`w-20 h-20 rounded-3xl ${service.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed flex-grow mb-8 text-lg">
                    {service.description}
                  </p>
                  <Link href="/services" className="text-primary font-bold flex items-center group-hover:gap-2 transition-all">
                    Explore Details <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/50 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Why Partner With Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Expertise Rooted in Innovation.</h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                As a homegrown Indian technology firm, we combine global standards with a deep understanding of the local business landscape. We don't just deliver products; we build long-term digital foundations.
              </p>

              <ul className="space-y-5 mb-10">
                {[
                  "Custom-crafted solutions for unique business challenges",
                  "Dedicated support team available across all time zones",
                  "Future-ready tech stacks for seamless scalability",
                  "Transparent agile delivery with zero hidden costs"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    </div>
                    <span className="text-foreground font-semibold text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about">
                <Button variant="default" size="lg" className="h-14 px-10 rounded-full text-lg shadow-lg">
                  Learn Our Story
                </Button>
              </Link>
            </FadeIn>

            <FadeIn direction="left" className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-card p-10 rounded-[2rem] shadow-sm border border-border/50 flex flex-col items-center justify-center text-center hover:-translate-y-2 hover:border-primary/20 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-display font-black text-primary mb-3">{stat.value}</div>
                  <div className="text-muted-foreground font-bold text-lg">{stat.label}</div>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Client Voices</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground">Trusted by Industry Visionaries</h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-card p-10 rounded-[2.5rem] border border-border/50 shadow-sm relative h-full flex flex-col hover:border-accent/30 transition-colors">
                  <div className="flex text-accent mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-xl text-foreground leading-relaxed mb-10 italic font-medium">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto border-t pt-8 border-border/50">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl shadow-inner">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-xl text-foreground">{testimonial.name}</div>
                      <div className="text-base text-muted-foreground font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-[3rem] bg-secondary relative overflow-hidden shadow-2xl shadow-secondary/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

          <div className="max-w-4xl mx-auto py-20 text-center relative z-10 px-8">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Scale Your Success?</h2>
              <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed">
                Let's discuss how our technology solutions can solve your biggest challenges and propel your business to new heights.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-16 px-12 rounded-full text-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30">
                    Book a Consultation
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="h-16 px-12 rounded-full text-xl border-white/20 text-white hover:bg-white/10 backdrop-blur-md">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
