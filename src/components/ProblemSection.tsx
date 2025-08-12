import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, MessageCircle, Shield } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Mengatasi Hoaks di Era Digital
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tingginya peredaran informasi tidak terverifikasi di media sosial dan aplikasi pesan instan 
              menimbulkan kekhawatiran masyarakat Jawa Timur. Hoaks seputar kesehatan, politik, dan bencana 
              berpotensi merusak ketertiban umum.
            </p>
          </div>

          {/* Problem Illustration */}
          <Card className="bg-gradient-subtle border-none shadow-medium mb-12">
            <CardContent className="p-8 lg:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto">
                    <AlertTriangle className="w-8 h-8 text-warning" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Informasi Menyesatkan</h3>
                  <p className="text-muted-foreground">
                    Penyebaran hoaks yang tidak terkendali di platform digital
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Dampak Sosial</h3>
                  <p className="text-muted-foreground">
                    Keresahan masyarakat akibat informasi yang tidak terverifikasi
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Solusi Digital</h3>
                  <p className="text-muted-foreground">
                    Sistem verifikasi cepat melalui teknologi chatbot
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solution Introduction */}
          <div className="text-center">
            <p className="text-lg lg:text-xl text-foreground leading-relaxed">
              Diskominfo Jawa Timur merespons dengan meluncurkan{" "}
              <span className="font-bold text-primary">"Klinik Hoaks"</span>, 
              kini diperkuat teknologi WhatsApp chatbot melalui platform HaloGov, 
              untuk memungkinkan masyarakat mengecek kebenaran informasi secara cepat dan mudah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;