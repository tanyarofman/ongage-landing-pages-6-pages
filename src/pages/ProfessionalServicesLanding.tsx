import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Users, Mail, TrendingUp, Shield, Zap } from "lucide-react";

const ProfessionalServicesLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              Professional Services
            </span>
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold rounded-lg"
              style={{ backgroundColor: '#8b5cf6', color: 'white' }}
            >
              Start Free Trial
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

      {/* Why Professional Services Need Smarter Email */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1e3a8a' }}>
              Why Professional Services Need Smarter Email
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white shadow-sm border-0 rounded-xl">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: '#fef3c7' }}>
                  <Users className="h-6 w-6" style={{ color: '#f59e0b' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a8a' }}>
                  Consultants & Coaches
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  You nurture leads through multiple touchpoints — webinars, ebooks, follow‑up sessions. Creating tailored nurture sequences manually is time‑consuming and easy to miss.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm border-0 rounded-xl">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: '#ddd6fe' }}>
                  <Shield className="h-6 w-6" style={{ color: '#8b5cf6' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a8a' }}>
                  Law Firms & Accountants
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Clients depend on you for timely updates about regulation changes and deadlines. Sending compliance reminders and educational content on schedule keeps you top‑of‑mind and builds trust.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm border-0 rounded-xl">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
                  <TrendingUp className="h-6 w-6" style={{ color: '#16a34a' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a8a' }}>
                  Recruitment Agencies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  You must engage both candidates and employers. Automated job alerts, interview prep sequences and employer engagement campaigns increase placements and client satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
          
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
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
    </div>
  );
};

export default ProfessionalServicesLanding;