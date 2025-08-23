import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Users, Mail, TrendingUp, Shield, Zap, ArrowRight, Star, Clock, Target, Workflow, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const ProfessionalServicesLanding = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden" style={{ 
      fontFamily: 'Inter, system-ui, sans-serif',
      backgroundColor: '#0f0f23'
    }}>
      {/* Hexagonal Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 transform rotate-12">
          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 clip-hex"></div>
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 transform -rotate-12">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-400 clip-hex"></div>
        </div>
        <div className="absolute bottom-40 left-20 w-24 h-24 transform rotate-45">
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 clip-hex"></div>
        </div>
        <div className="absolute bottom-20 right-10 w-18 h-18 transform -rotate-30">
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 clip-hex"></div>
        </div>
      </div>
      {/* Navigation Bar */}
      <nav className="bg-black/50 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div className="text-xl font-bold text-white">
                Ongage
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
              <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                Start trial
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-400">
                Get a demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              THE ONE PLACE TO BUILD
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                PROFESSIONAL
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent">
                COMMUNICATIONS
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              Launch, engage, and earn with automated email workflows designed for consultants, agencies, and professional service providers.
            </p>
          </div>
          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Start your free trial →
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-10 py-4 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-lg backdrop-blur-sm"
            >
              View Plans
            </Button>
          </div>
        </div>
      </section>


      {/* Features Section - 4 Cards inspired by uploaded image */}
      <section className="py-32" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              WHY PROFESSIONAL SERVICES
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NEED SMARTER EMAIL
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stop losing clients to manual follow-ups and missed deadlines
            </p>
          </div>
          
          {/* 4 Feature Cards matching uploaded image style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="bg-gray-800/80 border border-gray-700/50 rounded-3xl hover:bg-gray-800 transition-all group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform border border-purple-400/50">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Consultants & Coaches
                  </h3>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-xs px-3 py-1 rounded-full">
                    High Touch
                  </Badge>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  You nurture leads through multiple touchpoints — webinars, ebooks, follow‑up sessions. Creating tailored nurture sequences manually is time‑consuming and easy to miss.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/80 border border-gray-700/50 rounded-3xl hover:bg-gray-800 transition-all group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-400/50">
                  <Shield className="h-8 w-8 text-blue-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Legal & Finance
                  </h3>
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 text-xs px-3 py-1 rounded-full">
                    Professional
                  </Badge>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Clients depend on you for timely updates about regulation changes and deadlines. Automated reminders keep you top‑of‑mind and build lasting trust.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/80 border border-gray-700/50 rounded-3xl hover:bg-gray-800 transition-all group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/30 to-emerald-500/30 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform border border-green-400/50">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Recruitment
                  </h3>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs px-3 py-1 rounded-full">
                    Multi-Party
                  </Badge>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  You must engage both candidates and employers. Automated job alerts and interview prep sequences increase placements and client satisfaction.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/80 border border-gray-700/50 rounded-3xl hover:bg-gray-800 transition-all group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/30 to-red-500/30 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform border border-orange-400/50">
                  <Mail className="h-8 w-8 text-orange-400" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Financial Advisory
                  </h3>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs px-3 py-1 rounded-full">
                    Seasonal
                  </Badge>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Seasonal campaigns, deadline reminders, and client education require precise timing. Automated workflows ensure nothing falls through the cracks.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Yet many professional services firms rely on generic email tools that lack automation, personalization, and reliable deliverability. <span className="text-white font-semibold">Ongage changes that.</span>
            </p>
          </div>
        </div>
      </section>

      {/* How Ongage Helps - Beehiiv Style with Stats Grid */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                EXPLORE ONGAGE'S
              </span>
              <br />
              PROFESSIONAL FEATURES
            </h2>
            <div className="flex justify-end mt-8">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-3 rounded-xl font-semibold">
                Get Started Now →
              </Button>
            </div>
          </div>
          
          
          {/* Feature Highlights with Illustration */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-black text-white mb-8">
                CLEAR. TIMELY. EFFECTIVE
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  COMMUNICATION.
                </span>
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                From client updates to stakeholder reports, Ongage makes it simple to send professional, 
                engaging emails that keep everyone in the loop and drive results.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/src/assets/professional-communication.jpg" 
                alt="Professional Communication Workflow" 
                className="w-full max-w-lg rounded-2xl shadow-2xl" 
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 border border-purple-400/30">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Visual workflow automation
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Create drip campaigns and nurture sequences using our drag‑and‑drop builder. Trigger messages based on client actions and behaviors.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-blue-400/30">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Deep segmentation & personalization
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Segment contacts by behavior, demographics, and preferences with up to 150 custom fields for hyper‑personalized messaging.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0 border border-green-400/30">
                  <Mail className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Superior deliverability
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Advanced email validation and smart sending algorithms ensure your professional communications reach client inboxes reliably.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center flex-shrink-0 border border-orange-400/30">
                  <Workflow className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Seamless integrations
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Connect to your CRM, practice management software, or any system via our flexible API for seamless data synchronization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Updated styling */}
      <section className="py-32" id="benefits">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              BENEFITS 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AT A GLANCE
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800/80 border border-gray-700/50 rounded-3xl hover:bg-gray-800 transition-all group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center flex-shrink-0 border border-purple-400/50">
                    <CheckCircle className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      Lead & client nurturing on autopilot
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      Build sequences that guide prospects through your funnel and keep clients engaged automatically.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/80 border border-gray-700/50 rounded-3xl hover:bg-gray-800 transition-all group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center flex-shrink-0 border border-green-400/50">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      Higher engagement rates
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      Deliver timely, relevant communications that improve response rates and strengthen client relationships.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/80 border border-gray-700/50 rounded-3xl hover:bg-gray-800 transition-all group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center flex-shrink-0 border border-blue-400/50">
                    <CheckCircle className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      Superior deliverability
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      Advanced email validation and reputation management ensure your messages reach client inboxes consistently.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/80 border border-gray-700/50 rounded-3xl hover:bg-gray-800 transition-all group backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center flex-shrink-0 border border-orange-400/50">
                    <CheckCircle className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      Seamless integrations
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      Connect Ongage to your CRM or practice management software via our flexible API for seamless workflows.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs - Updated to match page design */}
      <section className="py-32 bg-gray-800/50" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              FREQUENTLY ASKED 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                QUESTIONS
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about professional email automation
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="item-1" className="bg-gray-800/80 border border-gray-700/50 rounded-2xl px-8 py-2 backdrop-blur-sm">
              <AccordionTrigger className="text-left font-bold text-white text-lg hover:no-underline">
                Can I build different sequences for leads and existing clients?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed text-lg pt-4">
                Absolutely. Visual workflows let you design custom journeys for prospects, new clients, and long‑term customers, each triggered by specific actions or dates.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-gray-800/80 border border-gray-700/50 rounded-2xl px-8 py-2 backdrop-blur-sm">
              <AccordionTrigger className="text-left font-bold text-white text-lg hover:no-underline">
                Is Ongage suitable for small practices or solo consultants?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed text-lg pt-4">
                Yes. Our pricing scales with usage, so even small teams can access advanced automation and deliverability features without a large investment.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-gray-800/80 border border-gray-700/50 rounded-2xl px-8 py-2 backdrop-blur-sm">
              <AccordionTrigger className="text-left font-bold text-white text-lg hover:no-underline">
                How do I ensure regulatory updates reach the right clients?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed text-lg pt-4">
                Use segmentation to group clients by service line, region or industry. Combined with automation, this ensures each reminder or update goes only to the relevant recipients.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-gray-800/80 border border-gray-700/50 rounded-2xl px-8 py-2 backdrop-blur-sm">
              <AccordionTrigger className="text-left font-bold text-white text-lg hover:no-underline">
                Will my emails land in the inbox?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed text-lg pt-4">
                With integrated email validation and the option to choose from multiple delivery vendors, Ongage maximizes deliverability and protects your sender reputation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            ELEVATE YOUR CLIENT
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              COMMUNICATIONS
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Professional services succeed when communication is consistent and personal. Let Ongage handle the workflows so you can focus on your expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="px-12 py-5 text-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all"
            >
              Start your free trial →
            </Button>
            <Button 
              size="lg" 
              className="px-12 py-5 text-xl font-semibold bg-white text-gray-900 hover:bg-gray-100 border-0 rounded-xl shadow-2xl hover:shadow-white/20 transition-all"
            >
              Get a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Action Button - Back to Top */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-2xl hover:shadow-purple-500/25 transition-all"
          size="icon"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ProfessionalServicesLanding;