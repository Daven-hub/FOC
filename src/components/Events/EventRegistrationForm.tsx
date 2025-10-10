import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Check, Calendar, MapPin, Clock, User, Mail, Phone, Briefcase, ChevronRight, ChevronLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { events } from '@/data/events';
import { RegistrationFormData } from '@/components/Events/types';
import OptimizedImage from '@/components/OptimizedImage';

const EventRegistrationPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<RegistrationFormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        eventId: id || '',
        comments: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const event = events.find(e => e.id === Number(id));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setSuccess(true);
    };

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);

    if (!event) {
        return (
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
                <Header />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center p-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Événement non trouvé</h1>
                        <Button onClick={() => navigate('/events')}>
                            Retour aux événements
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const bgColor = event.type === 'En ligne' ? 'from-blue-500 to-blue-600' : 'from-red-500 to-red-600';
    const textColor = event.type === 'En ligne' ? 'text-blue-600' : 'text-red-600';
    const borderColor = event.type === 'En ligne' ? 'border-blue-500' : 'border-red-500';
    const buttonColor = event.type === 'En ligne' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700';

    const eventDate = new Date(event.start);
    const formattedDate = eventDate.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedTime = eventDate.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />
            
            <main className="flex-grow">
                {/* Hero Section with Event Details */}
                <div className={`relative py-16  bg-gradient-to-r ${bgColor} text-white overflow-hidden`}>
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        {event.img && (
                            <OptimizedImage
                                src={event.img}
                                alt={event.title}
                                className="w-full h-full object-cover"
                                width={1920}
                                height={600}
                            />
                        )}
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/40 to-transparent"></div>
                    </div>
                    
                    <div className="relative mx-auto" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
                        <Button 
                            variant="ghost" 
                            onClick={() => navigate(-1)}
                            className="mb-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Retour
                        </Button>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col lg:flex-row gap-12 items-start"
                        >
                            <div className="flex-1">
                                <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-white/20 rounded-full backdrop-blur-sm">
                                    {event.type}
                                    {event.status === 'Ouvert' && (
                                        <span className="ml-2 inline-flex items-center">
                                            <span className="relative flex h-2 w-2 mr-1">
                                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${event.type === 'En ligne' ? 'bg-blue-400' : 'bg-red-400'} opacity-75`}></span>
                                                <span className={`relative inline-flex rounded-full h-2 w-2 ${event.type === 'En ligne' ? 'bg-blue-500' : 'bg-red-500'}`}></span>
                                            </span>
                                            Inscriptions ouvertes
                                        </span>
                                    )}
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                    Inscription à<br />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                                        {event.title}
                                    </span>
                                </h1>
                                <p className="text-xl text-white/90 mb-8 max-w-2xl">
                                    {event.subtitle}
                                </p>
                                
                                <div className="flex flex-wrap gap-6 text-white/90 mb-8">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={20} className="text-white" />
                                        <span>{formattedDate}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={20} className="text-white" />
                                        <span>{formattedTime}</span>
                                    </div>
                                    {event.location && (
                                        <div className="flex items-center gap-2">
                                            <MapPin size={20} className="text-white" />
                                            <span>{event.location}</span>
                                        </div>
                                    )}
                                </div>

                                {event.tags && event.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {event.tags.map((tag, index) => (
                                            <span key={index} className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full backdrop-blur-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            
                            <div className="w-full lg:w-96 relative">
                                <motion.div
                                    initial={{ rotate: -2 }}
                                    animate={{ rotate: 2 }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        duration: 4
                                    }}
                                    className="bg-white/10 border-2 border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm p-1"
                                >
                                    <OptimizedImage
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-64 object-cover rounded-xl"
                                        width={384}
                                        height={256}
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className={`absolute -bottom-4 -right-4 px-4 py-2 bg-white rounded-lg shadow-lg ${textColor} font-bold`}
                                >
                                    Places limitées
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Event Details Section */}
                {event.longDescription && (
                    <div className="py-12 bg-white">
                        <div className="mx-auto" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="prose prose-lg max-w-none"
                            >
                                <h2 className={`${textColor} mb-6`}>À propos de l'événement</h2>
                                <p className="text-gray-700 mb-8">{event.longDescription}</p>
                                
                                {event.objectives && event.objectives.length > 0 && (
                                    <div className="mb-8">
                                        <h3 className={`${textColor} mb-4`}>Objectifs</h3>
                                        <ul className="space-y-3">
                                            {event.objectives.map((objective, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className={`flex-shrink-0 mt-1 ${event.type === 'En ligne' ? 'text-blue-500' : 'text-red-500'}`}>
                                                        <ChevronRight size={18} />
                                                    </span>
                                                    <span>{objective}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                                {event.process && event.process.length > 0 && (
                                    <div>
                                        <h3 className={`${textColor} mb-4`}>Déroulement</h3>
                                        <div className="space-y-4">
                                            {event.process.map((step, i) => (
                                                <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                                    <div className={`flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full ${event.type === 'En ligne' ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'} font-bold`}>
                                                        {i + 1}
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">{step}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                )}

                {/* Registration Form Section */}
                <div className="py-16  bg-gray-50">
                    <div className=" mx-auto" style={{ paddingLeft: '6%', paddingRight: '6%' }}>
                        {success ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                            >
                                <div className="p-12 text-center">
                                    <motion.div
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-8"
                                    >
                                        <Check className="h-10 w-10 text-green-600" />
                                    </motion.div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                        Inscription confirmée!
                                    </h3>
                                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                        Merci pour votre inscription à <span className="font-semibold">{event.title}</span>. 
                                        Un email de confirmation vous a été envoyé avec tous les détails.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button 
                                            onClick={() => navigate('/events')}
                                            className="bg-gray-900 hover:bg-gray-800 text-lg py-6 px-8"
                                            size="lg"
                                        >
                                            Voir tous les événements
                                        </Button>
                                        <Button 
                                            onClick={() => navigate('/')}
                                            variant="outline"
                                            className="text-lg py-6 px-8 border-2 border-gray-300 hover:border-gray-400"
                                            size="lg"
                                        >
                                            Retour à l'accueil
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                            >
                                {/* Progress Steps */}
                                <div className="border-b border-gray-200">
                                    <div className="flex justify-between px-8 pt-6">
                                        {[1, 2, 3].map((step) => (
                                            <div key={step} className="flex flex-col items-center">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= step ? `${buttonColor} text-white` : 'bg-gray-100 text-gray-400'} font-bold`}>
                                                    {step}
                                                </div>
                                                <span className={`text-sm ${currentStep >= step ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                                                    {step === 1 ? 'Personnel' : step === 2 ? 'Professionnel' : 'Confirmation'}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="relative h-1 bg-gray-100 mt-6">
                                        <motion.div 
                                            className={`absolute top-0 left-0 h-full ${currentStep === 1 ? 'w-1/3' : currentStep === 2 ? 'w-2/3' : 'w-full'} ${event.type === 'En ligne' ? 'bg-blue-500' : 'bg-red-500'}`}
                                            initial={{ width: '0%' }}
                                            animate={{ 
                                                width: currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%'
                                            }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>
                                
                                <form onSubmit={handleSubmit} className="p-8">
                                    <AnimatePresence mode="wait">
                                        {currentStep === 1 && (
                                            <motion.div
                                                key="step1"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ duration: 0.3 }}
                                                className="space-y-8"
                                            >
                                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                                    <User size={24} className={textColor} />
                                                    <span>Informations personnelles</span>
                                                </h3>
                                                
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                                            Prénom *
                                                        </label>
                                                        <Input
                                                            id="firstName"
                                                            name="firstName"
                                                            value={formData.firstName}
                                                            onChange={handleChange}
                                                            required
                                                            className="py-6 px-4 text-lg border-2 border-gray-200 hover:border-gray-300 focus:border-blue-500"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                                            Nom *
                                                        </label>
                                                        <Input
                                                            id="lastName"
                                                            name="lastName"
                                                            value={formData.lastName}
                                                            onChange={handleChange}
                                                            required
                                                            className="py-6 px-4 text-lg border-2 border-gray-200 hover:border-gray-300 focus:border-blue-500"
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                        Email *
                                                    </label>
                                                    <div className="relative">
                                                        <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                        <Input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                            className="py-6 px-4 pl-10 text-lg border-2 border-gray-200 hover:border-gray-300 focus:border-blue-500"
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="space-y-2">
                                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                        Téléphone *
                                                    </label>
                                                    <div className="relative">
                                                        <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                        <Input
                                                            id="phone"
                                                            name="phone"
                                                            type="tel"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            required
                                                            className="py-6 px-4 pl-10 text-lg border-2 border-gray-200 hover:border-gray-300 focus:border-blue-500"
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="flex justify-end pt-4">
                                                    <Button
                                                        type="button"
                                                        onClick={nextStep}
                                                        className={`${buttonColor} text-white py-6 px-8 text-lg font-bold`}
                                                    >
                                                        Suivant
                                                        <ChevronRight className="ml-2 h-5 w-5" />
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        )}
                                        
                                        {currentStep === 2 && (
                                            <motion.div
                                                key="step2"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ duration: 0.3 }}
                                                className="space-y-8"
                                            >
                                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                                    <Briefcase size={24} className={textColor} />
                                                    <span>Informations professionnelles</span>
                                                </h3>
                                                
                                                <div className="space-y-2">
                                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                                        Entreprise / Organisation
                                                    </label>
                                                    <Input
                                                        id="company"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        className="py-6 px-4 text-lg border-2 border-gray-200 hover:border-gray-300 focus:border-blue-500"
                                                    />
                                                </div>
                                                
                                                <div className="space-y-2">
                                                    <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                                                        Poste / Fonction
                                                    </label>
                                                    <Input
                                                        id="position"
                                                        name="position"
                                                        value={formData.position}
                                                        onChange={handleChange}
                                                        className="py-6 px-4 text-lg border-2 border-gray-200 hover:border-gray-300 focus:border-blue-500"
                                                    />
                                                </div>
                                                
                                                <div className="space-y-2">
                                                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                                                        Commentaires ou besoins spécifiques
                                                    </label>
                                                    <Textarea
                                                        id="comments"
                                                        name="comments"
                                                        value={formData.comments}
                                                        onChange={handleChange}
                                                        rows={4}
                                                        className="text-lg border-2 border-gray-200 hover:border-gray-300 focus:border-blue-500"
                                                    />
                                                </div>
                                                
                                                <div className="flex justify-between pt-4">
                                                    <Button
                                                        type="button"
                                                        onClick={prevStep}
                                                        variant="outline"
                                                        className="py-6 px-8 text-lg font-medium border-2 border-gray-300 hover:border-gray-400"
                                                    >
                                                        <ChevronLeft className="mr-2 h-5 w-5" />
                                                        Retour
                                                    </Button>
                                                    <Button
                                                        type="button"
                                                        onClick={nextStep}
                                                        className={`${buttonColor} text-white py-6 px-8 text-lg font-bold`}
                                                    >
                                                        Suivant
                                                        <ChevronRight className="ml-2 h-5 w-5" />
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        )}
                                        
                                        {currentStep === 3 && (
                                            <motion.div
                                                key="step3"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ duration: 0.3 }}
                                                className="space-y-8"
                                            >
                                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                                    Confirmation de votre inscription
                                                </h3>
                                                
                                                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                                    <h4 className="text-lg font-semibold mb-4">Récapitulatif</h4>
                                                    
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="space-y-4">
                                                            <div>
                                                                <h5 className="text-sm font-medium text-gray-500 mb-1">Événement</h5>
                                                                <p className="font-medium">{event.title}</p>
                                                                <p className="text-gray-600">{event.subtitle}</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="text-sm font-medium text-gray-500 mb-1">Date et heure</h5>
                                                                <p className="font-medium">{formattedDate} à {formattedTime}</p>
                                                            </div>
                                                            {event.location && (
                                                                <div>
                                                                    <h5 className="text-sm font-medium text-gray-500 mb-1">Lieu</h5>
                                                                    <p className="font-medium">{event.location}</p>
                                                                </div>
                                                            )}
                                                        </div>
                                                        
                                                        <div className="space-y-4">
                                                            <div>
                                                                <h5 className="text-sm font-medium text-gray-500 mb-1">Participant</h5>
                                                                <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="text-sm font-medium text-gray-500 mb-1">Email</h5>
                                                                <p className="font-medium">{formData.email}</p>
                                                            </div>
                                                            {formData.company && (
                                                                <div>
                                                                    <h5 className="text-sm font-medium text-gray-500 mb-1">Entreprise</h5>
                                                                    <p className="font-medium">{formData.company}</p>
                                                                    {formData.position && (
                                                                        <p className="text-gray-600">{formData.position}</p>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-start">
                                                    <input 
                                                        type="checkbox" 
                                                        id="consent" 
                                                        required 
                                                        className="mt-1 mr-2 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                    />
                                                    <label htmlFor="consent" className="text-sm text-gray-600">
                                                        Je consens à ce que mes informations soient utilisées pour la gestion de cet événement et pour recevoir des communications pertinentes.
                                                    </label>
                                                </div>
                                                
                                                <div className="flex justify-between pt-4">
                                                    <Button
                                                        type="button"
                                                        onClick={prevStep}
                                                        variant="outline"
                                                        className="py-6 px-8 text-lg font-medium border-2 border-gray-300 hover:border-gray-400"
                                                    >
                                                        <ChevronLeft className="mr-2 h-5 w-5" />
                                                        Retour
                                                    </Button>
                                                    <Button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className={`${buttonColor} text-white py-6 px-8 text-lg font-bold`}
                                                    >
                                                        {isSubmitting ? (
                                                            <span className="flex items-center justify-center">
                                                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg>
                                                                Envoi en cours...
                                                            </span>
                                                        ) : "Confirmer l'inscription"}
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </form>
                            </motion.div>
                        )}
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default EventRegistrationPage;