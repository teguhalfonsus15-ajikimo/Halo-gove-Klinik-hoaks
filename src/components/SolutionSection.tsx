import { Card, CardContent } from "@/components/ui/card";
import { Check, Smartphone, Database, Clock, Globe } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      text: "Cek hoaks via WhatsApp secara langsung"
    },
    {
      icon: <Database className="w-6 h-6" />,
      text: "Integrasi API dengan database cekfakta milik Pemprov"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Opsi permohonan klarifikasi dengan pelacakan status"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Respon otomatis berdasarkan kata kunci atau link"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: "Tersedia juga melalui website: klinikhoaks.jatimprov.go.id"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Solusi Inovatif WhatsApp Chatbot
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Platform terintegrasi yang memudahkan masyarakat memverifikasi informasi 
              dengan teknologi chatbot yang canggih dan database yang komprehensif.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                    <p className="text-lg text-foreground font-medium">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Illustration Card */}
            <Card className="bg-card border-none shadow-large">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Cara Kerja Sistem
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <p className="text-foreground">Kirim pesan atau link ke WhatsApp Klinik Hoaks</p>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <p className="text-foreground">Sistem mencari di database atau forward ke admin</p>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-accent/5 rounded-lg">
                      <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <p className="text-foreground">Terima hasil verifikasi atau status klarifikasi</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;