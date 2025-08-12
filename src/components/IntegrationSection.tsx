import { Card, CardContent } from "@/components/ui/card";
import { Globe, Settings, RefreshCw, Network } from "lucide-react";

const IntegrationSection = () => {
  const integrationFeatures = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website Terintegrasi",
      description: "Klinik Hoaks WhatsApp langsung terhubung ke sistem internal klinikhoaks.jatimprov.go.id"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Manajemen Terpusat",
      description: "Admin dapat memproses permintaan klarifikasi yang masuk dari berbagai kanal secara terpusat"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Update Real-time",
      description: "Update status klarifikasi dapat dikirim kembali via WhatsApp secara otomatis"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Interoperabilitas",
      description: "Mendukung interoperabilitas dengan sistem pelaporan masyarakat lainnya"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Terintegrasi dengan Website Resmi Pemprov
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Sistem yang saling terhubung untuk memberikan layanan verifikasi informasi 
              yang menyeluruh dan terpercaya kepada masyarakat.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {integrationFeatures.map((feature, index) => (
              <Card key={index} className="bg-card border-none shadow-medium hover:shadow-large transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <div className="text-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Important Note */}
          <Card className="bg-accent/5 border-accent/20 shadow-medium">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold text-sm">📌</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Catatan Penting</h3>
                  <p className="text-muted-foreground text-lg italic">
                    Klinik Hoaks WhatsApp ini bukan hanya chatbot, tapi saluran layanan publik terintegrasi 
                    yang menghubungkan masyarakat dengan sistem verifikasi informasi resmi pemerintah.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;