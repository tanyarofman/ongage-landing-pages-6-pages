import { AlertTriangle, CheckCircle, Users, Building2, ArrowDown } from "lucide-react";

const Story = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            From Chaos to Control
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Before - Chaos */}
          <div className="space-y-8">
            <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <h3 className="text-2xl font-bold text-foreground">Before: The Chaos</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Multiple Platforms</h4>
                      <p className="text-muted-foreground">Three clients, three different email service providers, different domains, unique segments.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Wasted Hours</h4>
                      <p className="text-muted-foreground">Team wastes hours switching platforms, double-checking lists, worrying about mis-sends.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Limited Scale</h4>
                      <p className="text-muted-foreground">Stressful workflow limits your ability to take on new clients and grow.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex justify-center">
            <div className="bg-primary/10 rounded-full p-4">
              <ArrowDown className="h-8 w-8 text-primary rotate-90" />
            </div>
          </div>

          {/* After - Control */}
          <div className="space-y-8 lg:order-first">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">After: Complete Control</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">One Dashboard</h4>
                      <p className="text-muted-foreground">Manage all clients from a single platform while keeping their data completely separate.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Separate Reputations</h4>
                      <p className="text-muted-foreground">Each client has their own domain, sender reputation, and suppression rules.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Centralized Control</h4>
                      <p className="text-muted-foreground">Scale effortlessly without compromising on brand separation or data security.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;