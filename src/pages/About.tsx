import { Link } from "wouter";
import { Target, Lightbulb, Users, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function About() {
  const values = [
    {
      title: "Innovation First",
      description: "We constantly explore emerging technologies to bring our clients the most advanced and efficient solutions available.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Client-Centric",
      description: "Your success is our success. We build deep partnerships and align our technical strategies strictly with your business goals.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Radical Transparency",
      description: "No technical jargon or hidden costs. We communicate openly throughout the entire project lifecycle.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Collaborative Excellence",
      description: "We bring together top-tier developers, designers, and strategists to deliver products that exceed expectations.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-background overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Building India's Digital Future, Today.</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Techway Solution is a homegrown Indian technology powerhouse. We started in Sivakasi with a vision to empower businesses across the subcontinent with global-standard digital solutions. We exist to bridge the gap between complex technical possibilities and tangible business results for modern enterprises.
              </p>
              <div className="flex gap-4">
                <div className="border-l-4 border-primary pl-4 py-1">
                  <div className="font-bold text-2xl text-foreground">2024</div>
                  <div className="text-sm text-muted-foreground uppercase font-bold tracking-wider">Founded</div>
                </div>
                <div className="border-l-4 border-primary pl-4 py-1">
                  <div className="font-bold text-2xl text-foreground">10+</div>
                  <div className="text-sm text-muted-foreground uppercase font-bold tracking-wider">Team Members</div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <img 
                src={`${import.meta.env.BASE_URL}images/about-team.png`} 
                alt="Techway Team" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-secondary text-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Mission</h2>
            <p className="text-3xl md:text-4xl font-display font-medium leading-relaxed italic">
              "To empower Indian organizations by delivering innovative, scalable, and intuitive technology solutions that redefine what's possible in the digital age."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide our work, our culture, and our relationships with clients.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm flex gap-6 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-t border-border text-center">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to join forces?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for ambitious partners who want to build something extraordinary.
            </p>
            <Link href="/contact">
              <Button size="lg" className="group">
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
