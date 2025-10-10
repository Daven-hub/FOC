
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Eye, Award, ArrowRight, Play } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

const About = () => {
  const partners = [
    { name: "Partner 1", logo: "/uploads/logo.png" },
    { name: "Partner 2", logo: "/uploads/logo.png" },
    { name: "Partner 3", logo: "/uploads/logo.png" },
    { name: "Partner 4", logo: "/uploads/logo.png" },
    { name: "Partner 5", logo: "/uploads/logo.png" },
  ];

  const features = [
    {
      icon: Target,
      title: "Milliers d'Opportunités Disponibles",
      description: "Accédez à une vaste base de données d'opportunités professionnelles dans le monde entier."
    },
    {
      icon: Users,
      title: "Le Bon Poste Pour Vos Compétences",
      description: "Trouvez le poste parfait qui correspond à vos compétences et aspirations professionnelles."
    }
  ];

  const visionCards = [
    {
      icon: Users,
      title: "Qui Sommes-Nous ?",
      description: "Nous sommes une équipe d'experts dédiés à connecter les talents avec les meilleures opportunités internationales.",
      link: "En savoir plus"
    },
    {
      icon: Eye,
      title: "Notre Vision",
      description: "Devenir la référence mondiale pour les opportunités de carrière internationale et le développement professionnel.",
      link: "En savoir plus"
    },
    {
      icon: Target,
      title: "Notre Mission",
      description: "Faciliter l'accès aux opportunités internationales et accompagner chaque professionnel vers le succès.",
      link: "En savoir plus"
    }
  ];

  const teamMembers = [
    {
      name: "Jean Dupont",
      role: "Directeur Général",
      image: "/uploads/banner.jpg"
    },
    {
      name: "Marie Martin",
      role: "Responsable RH",
      image: "/uploads/banner.jpg"
    },
    {
      name: "Pierre Bernard",
      role: "Directeur Commercial",
      image: "/uploads/banner.jpg"
    },
    {
      name: "Sophie Leblanc",
      role: "Responsable Marketing",
      image: "/uploads/banner.jpg"
    }
  ];

  const stats = [
    { label: "Placement d'Emplois", value: "90%", color: "bg-orange-500" },
    { label: "Recrutement", value: "85%", color: "bg-blue-500" },
    { label: "Développement", value: "95%", color: "bg-green-500" }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-24">
        <div className="mx-auto text-center" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
          <p className="text-sm uppercase tracking-wide text-blue-300 mb-4">FOC PORTAIL EMPLOI</p>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            À propos de <span className="text-blue-400">Nous</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez notre histoire, notre mission et notre engagement à créer des opportunités exceptionnelles pour votre carrière.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto text-center" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-12">
            Collaboration Avec Plus de 100,000+ Entreprises Internationalement Reconnues
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <OptimizedImage
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto"
                  width={120}
                  height={48}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl">
                    <OptimizedImage
                      src="/uploads/banner.jpg"
                      alt="Team working"
                      className="w-full h-48 object-cover"
                      width={300}
                      height={200}
                    />
                    <div className="absolute inset-0 bg-blue-600/20"></div>
                    <Button
                      size="icon"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 text-blue-600 hover:bg-white rounded-full"
                    >
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-orange-500 text-white p-6 rounded-2xl">
                    <div className="text-3xl font-bold">30+</div>
                    <div className="text-sm">Années d'Expérience</div>
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <OptimizedImage
                      src="/uploads/banner.jpg"
                      alt="Professional meeting"
                      className="w-full h-32 object-cover"
                      width={300}
                      height={130}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-sm uppercase tracking-wide text-blue-600 mb-4">À PROPOS DE NOUS</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Trouvez Votre <span className="text-blue-600">Emploi de Rêve</span><br />
                Et Votre Chemin de Carrière
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chez FOC, nous nous engageons à transformer les aspirations professionnelles en réalités concrètes. 
                Notre expertise de plus de 30 ans nous permet d'offrir des solutions personnalisées pour chaque profil.
              </p>

              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
                En Savoir Plus <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto text-center" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
          <p className="text-sm uppercase tracking-wide text-blue-400 mb-4">MISSION</p>
          <h2 className="text-4xl font-bold mb-6">
            Explorez <span className="text-blue-400">Des Milliers d'Emplois</span> Chez FOC
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-16">
            Notre mission est de créer des ponts entre les talents exceptionnels et les opportunités mondiales, 
            en offrant un accompagnement personnalisé à chaque étape de votre parcours professionnel.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {visionCards.map((card, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <card.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{card.description}</p>
                  <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">
                    {card.link} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <OptimizedImage
                src="/uploads/banner.jpg"
                alt="Team collaboration"
                className="w-full h-96 object-cover"
                width={600}
                height={400}
              />
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg">
                <h4 className="font-semibold text-gray-900">Conseil en Carrière</h4>
                <p className="text-sm text-gray-600">Accompagnement personnalisé pour votre évolution professionnelle</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-sm uppercase tracking-wide text-blue-600 mb-4">POURQUOI NOUS CHOISIR</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nous Créons <span className="text-blue-600">Plus d'Emplois</span><br />
                Que Toute Autre Agence
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre approche unique combine technologie de pointe et expertise humaine pour offrir des résultats exceptionnels. 
                Avec un taux de réussite de plus de 90%, nous sommes fiers de notre engagement envers l'excellence.
              </p>

              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{stat.label}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${stat.color}`}
                          style={{ width: stat.value }}
                        ></div>
                      </div>
                      <span className="font-semibold text-gray-900 w-12">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wide text-blue-400 mb-4">NOTRE ÉQUIPE</p>
            <h2 className="text-4xl font-bold mb-6">
              Rencontrez Nos <span className="text-blue-400">Experts</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Une équipe passionnée de professionnels dédiés à votre succès, 
              avec une expertise reconnue dans le domaine du recrutement international.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
              En Savoir Plus <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <OptimizedImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                    width={300}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <CardContent className="p-6 text-center relative -mt-16">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
