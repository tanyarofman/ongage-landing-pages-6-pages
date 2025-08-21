import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
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
          
          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-400"></div>
              </div>
              <span className="text-sm">5/5 from <strong className="text-white">2,847</strong> customers</span>
            </div>
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
              className="px-10 py-4 text-lg font-semibold border-2 border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 rounded-lg"
            >
              View Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <section className="py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-400 text-sm font-medium mb-8 uppercase tracking-wider">
            POWERING THE WORLD'S TOP PROFESSIONAL SERVICE PROVIDERS
          </p>
          <div className="flex items-center justify-center space-x-12 opacity-50">
            <div className="text-2xl font-bold text-gray-500">KPMG</div>
            <div className="text-2xl font-bold text-gray-500">McKinsey</div>
            <div className="text-2xl font-bold text-gray-500">Deloitte</div>
            <div className="text-2xl font-bold text-gray-500">BCG</div>
            <div className="text-2xl font-bold text-gray-500">EY</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
          
          {/* Feature Tabs */}
          <Tabs defaultValue="consultants" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-16 bg-gray-800 p-2 rounded-xl">
              <TabsTrigger 
                value="consultants" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white text-gray-300 rounded-lg py-3"
              >
                Consultants
              </TabsTrigger>
              <TabsTrigger 
                value="legal" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white text-gray-300 rounded-lg py-3"
              >
                Legal & Finance
              </TabsTrigger>
              <TabsTrigger 
                value="recruitment" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white text-gray-300 rounded-lg py-3"
              >
                Recruitment
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="consultants" className="mt-8">
              <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
                <Card className="bg-gray-800/50 border-gray-700 rounded-2xl hover:bg-gray-800/70 transition-all group backdrop-blur-sm">
                  <CardContent className="p-10">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center group-hover:scale-110 transition-transform border border-purple-400/30">
                        <Users className="h-8 w-8 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold text-white">
                            Consultants & Coaches
                          </h3>
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                            <Target className="w-3 h-3 mr-1" />
                            High Touch
                          </Badge>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          You nurture leads through multiple touchpoints — webinars, ebooks, follow‑up sessions. Creating tailored nurture sequences manually is time‑consuming and easy to miss.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="legal" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="bg-gray-800/50 border-gray-700 rounded-2xl hover:bg-gray-800/70 transition-all group backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-400/30">
                      <Shield className="h-8 w-8 text-blue-400" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-white">
                        Law Firms & Accountants
                      </h3>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                        <Shield className="w-3 h-3 mr-1" />
                        Compliance
                      </Badge>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Clients depend on you for timely updates about regulation changes and deadlines. Sending compliance reminders and educational content on schedule keeps you top‑of‑mind and builds trust.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-800/50 border-gray-700 rounded-2xl hover:bg-gray-800/70 transition-all group backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400/20 to-emerald-400/20 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform border border-green-400/30">
                      <Mail className="h-8 w-8 text-green-400" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-white">
                        Tax & Financial Advisory
                      </h3>
                      <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                        <Clock className="w-3 h-3 mr-1" />
                        Seasonal
                      </Badge>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Seasonal campaigns, deadline reminders, and client education require precise timing. Automated workflows ensure nothing falls through the cracks during busy periods.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="recruitment" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="bg-gray-800/50 border-gray-700 rounded-2xl hover:bg-gray-800/70 transition-all group backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400/20 to-red-400/20 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform border border-orange-400/30">
                      <TrendingUp className="h-8 w-8 text-orange-400" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-white">
                        Recruitment Agencies
                      </h3>
                      <Badge className="bg-orange-500/20 text-orange-300 border-orange-400/30">
                        <Users className="w-3 h-3 mr-1" />
                        Multi-Party
                      </Badge>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      You must engage both candidates and employers. Automated job alerts, interview prep sequences and employer engagement campaigns increase placements and client satisfaction.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-800/50 border-gray-700 rounded-2xl hover:bg-gray-800/70 transition-all group backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-400/20 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform border border-cyan-400/30">
                      <Workflow className="h-8 w-8 text-cyan-400" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-white">
                        Executive Search
                      </h3>
                      <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30">
                        <Target className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      High-stakes placements require nurturing both passive candidates and demanding clients. Sophisticated workflows maintain relationships throughout lengthy search processes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-16">
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Yet many professional services firms rely on generic email tools that lack automation, personalization, and reliable deliverability. <span className="text-white font-semibold">Ongage changes that.</span>
            </p>
          </div>
        </div>
      </section>

      {/* How Ongage Helps */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1e3a8a' }}>
              How Ongage Helps
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#fef3c7' }}>
                  <Zap className="h-4 w-4" style={{ color: '#f59e0b' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a8a' }}>
                    Visual workflow automation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Create drip campaigns and nurture sequences using our drag‑and‑drop builder. Trigger messages based on sign‑ups, downloads, or other events, and update list fields when recipients act.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#ddd6fe' }}>
                  <Users className="h-4 w-4" style={{ color: '#8b5cf6' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a8a' }}>
                    Deep segmentation & personalization
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Segment contacts by behavior, demographics or psychographics; slice and dice data with up to 150 custom fields, then deliver hyper‑personalized messages that resonate.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#dcfce7' }}>
                  <Mail className="h-4 w-4" style={{ color: '#16a34a' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a8a' }}>
                    Reliable deliverability
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Route emails through over 15 SMTP relays and MTAs, choosing the best provider for each campaign to maintain inbox placement.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#fee2e2' }}>
                  <Shield className="h-4 w-4" style={{ color: '#ef4444' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a8a' }}>
                    Integrated data management
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Built‑in email validation reduces bounces and complaints; a flexible API connects to your CRM or applicant tracking system for seamless data sync.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#f0f9ff' }}>
                  <TrendingUp className="h-4 w-4" style={{ color: '#0ea5e9' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a8a' }}>
                    Cost‑effective scalability
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our token‑based pricing ensures you pay only for what you use, making enterprise‑grade automation accessible to small teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Table */}
      <section className="py-20 bg-gray-50" id="benefits">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <TrendingUp className="w-4 h-4 mr-2" />
              Proven Results
            </Badge>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1e3a8a' }}>
              Benefits at a Glance
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#16a34a' }} />
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#1e3a8a' }}>
                      Lead & client nurturing on autopilot
                    </h3>
                    <p className="text-gray-600">
                      Build sequences that guide prospects through your funnel and keep clients informed.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 border-b md:border-b-0 border-gray-200">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#16a34a' }} />
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#1e3a8a' }}>
                      Compliance made easy
                    </h3>
                    <p className="text-gray-600">
                      Schedule deadline reminders and regulatory updates with confidence; segmentation ensures messages go to the right clients.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#16a34a' }} />
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#1e3a8a' }}>
                      Higher placement rates
                    </h3>
                    <p className="text-gray-600">
                      Deliver timely job alerts and candidate nurturing emails to improve response rates and placements.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 border-b md:border-b-0 border-gray-200">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#16a34a' }} />
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#1e3a8a' }}>
                      Stronger deliverability & reputation
                    </h3>
                    <p className="text-gray-600">
                      Multi‑ESP routing and email validation keep your sender score healthy.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:border-r border-gray-200 md:col-span-2">
                <div className="flex items-start gap-4 justify-center">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#16a34a' }} />
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#1e3a8a' }}>
                      Seamless integrations
                    </h3>
                    <p className="text-gray-600">
                      Connect Ongage to your CRM, ATS or practice management software via API.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              Common Questions
            </Badge>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1e3a8a' }}>
              Frequently Asked Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold" style={{ color: '#1e3a8a' }}>
                Can I build different sequences for leads and existing clients?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Absolutely. Visual workflows let you design custom journeys for prospects, new clients, and long‑term customers, each triggered by specific actions or dates.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold" style={{ color: '#1e3a8a' }}>
                Is Ongage suitable for small practices or solo consultants?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes. Our pricing scales with usage, so even small teams can access advanced automation and deliverability features without a large investment.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold" style={{ color: '#1e3a8a' }}>
                How do I ensure regulatory updates reach the right clients?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Use segmentation to group clients by service line, region or industry. Combined with automation, this ensures each reminder or update goes only to the relevant recipients.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold" style={{ color: '#1e3a8a' }}>
                Will my emails land in the inbox?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
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
              variant="outline"
              className="px-12 py-5 text-xl font-semibold border-2 border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 rounded-xl"
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