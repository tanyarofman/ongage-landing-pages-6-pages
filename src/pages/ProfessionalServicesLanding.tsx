import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Users, Mail, TrendingUp, Shield, Zap, ArrowUp, Star, Clock, Target, Workflow } from "lucide-react";
import { useState, useEffect } from "react";

const ProfessionalServicesLanding = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [automationProgress, setAutomationProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    const progressInterval = setInterval(() => {
      setAutomationProgress(prev => prev >= 100 ? 0 : prev + 1);
    }, 50);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(progressInterval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50 relative overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {/* Light Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
              linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)
            `,
            backgroundSize: '100% 100%, 100% 100%, 100% 100%, 20px 20px'
          }} />
        </div>
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold" style={{ color: '#1e3a8a' }}>
              Ongage
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">Benefits</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
              <Button size="sm" style={{ backgroundColor: '#8b5cf6', color: 'white' }}>
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Badge className="px-4 py-2 bg-blue-50 text-blue-700 border-blue-200 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Professional Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6 leading-tight" style={{ color: '#1e3a8a' }}>
              Automate Your Professional Communications
            </h1>
            <p className="text-xl text-gray-600 mb-4 font-medium">
              Focus on Clients, Not Email
            </p>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Win more business and build lasting relationships with automated email workflows.
          </p>
          
          <p className="text-base text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
            Whether you're advising clients, staying ahead of compliance requirements, or matching candidates to jobs, 
            Ongage helps B2B professionals deliver the right message at the right time — without manual effort.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: '#8b5cf6', color: 'white' }}
                >
                  Start Free Trial
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>No credit card required • 14-day free trial</p>
              </TooltipContent>
            </Tooltip>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 hover:shadow-lg transition-all"
              style={{ borderColor: '#1e3a8a', color: '#1e3a8a' }}
            >
              Book a Demo
            </Button>
          </div>

          {/* Automation Progress Indicator */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
              <span>Automation Setup</span>
              <span>{automationProgress}% Complete</span>
            </div>
            <Progress value={automationProgress} className="h-2 bg-gray-200" />
            <p className="text-xs text-gray-500 mt-2">
              Watch your professional workflows come to life in real-time
            </p>
          </div>
        </div>
      </section>

      {/* Why Professional Services Need Smarter Email */}
      <section className="py-20 bg-gray-50 relative" id="features">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              <Clock className="w-4 h-4 mr-2" />
              Save 20+ Hours Weekly
            </Badge>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1e3a8a' }}>
              Why Professional Services Need Smarter Email
            </h2>
          </div>
          
          {/* Tabs for different service types */}
          <Tabs defaultValue="consultants" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="consultants">Consultants</TabsTrigger>
              <TabsTrigger value="legal">Legal & Finance</TabsTrigger>
              <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="consultants" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="bg-white shadow-sm border-0 rounded-xl hover:shadow-lg transition-all group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: '#fef3c7' }}>
                      <Users className="h-6 w-6" style={{ color: '#f59e0b' }} />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-bold" style={{ color: '#1e3a8a' }}>
                        Consultants & Coaches
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        <Target className="w-3 h-3 mr-1" />
                        High Touch
                      </Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      You nurture leads through multiple touchpoints — webinars, ebooks, follow‑up sessions. Creating tailored nurture sequences manually is time‑consuming and easy to miss.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="legal" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-white shadow-sm border-0 rounded-xl hover:shadow-lg transition-all group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: '#ddd6fe' }}>
                      <Shield className="h-6 w-6" style={{ color: '#8b5cf6' }} />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-bold" style={{ color: '#1e3a8a' }}>
                        Law Firms & Accountants
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        Compliance
                      </Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Clients depend on you for timely updates about regulation changes and deadlines. Sending compliance reminders and educational content on schedule keeps you top‑of‑mind and builds trust.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm border-0 rounded-xl hover:shadow-lg transition-all group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: '#fee2e2' }}>
                      <Mail className="h-6 w-6" style={{ color: '#ef4444' }} />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-bold" style={{ color: '#1e3a8a' }}>
                        Tax & Financial Advisory
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        Seasonal
                      </Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Seasonal campaigns, deadline reminders, and client education require precise timing. Automated workflows ensure nothing falls through the cracks during busy periods.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="recruitment" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-white shadow-sm border-0 rounded-xl hover:shadow-lg transition-all group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: '#dcfce7' }}>
                      <TrendingUp className="h-6 w-6" style={{ color: '#16a34a' }} />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-bold" style={{ color: '#1e3a8a' }}>
                        Recruitment Agencies
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        Multi-Party
                      </Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      You must engage both candidates and employers. Automated job alerts, interview prep sequences and employer engagement campaigns increase placements and client satisfaction.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm border-0 rounded-xl hover:shadow-lg transition-all group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: '#f0f9ff' }}>
                      <Workflow className="h-6 w-6" style={{ color: '#0ea5e9' }} />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-bold" style={{ color: '#1e3a8a' }}>
                        Executive Search
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        <Target className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      High-stakes placements require nurturing both passive candidates and demanding clients. Sophisticated workflows maintain relationships throughout lengthy search processes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Yet many professional services firms rely on generic email tools that lack automation, personalization, and reliable deliverability. <strong>Ongage changes that.</strong>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1e3a8a' }}>
            Elevate Your Client Communications
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Professional services succeed when communication is consistent and personal. Let Ongage handle the workflows so you can focus on your expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold rounded-lg"
              style={{ backgroundColor: '#8b5cf6', color: 'white' }}
            >
              Start Free Trial Today
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2"
              style={{ borderColor: '#1e3a8a', color: '#1e3a8a' }}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Action Button - Back to Top */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all"
          style={{ backgroundColor: '#8b5cf6', color: 'white' }}
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
    </TooltipProvider>
  );
};

export default ProfessionalServicesLanding;