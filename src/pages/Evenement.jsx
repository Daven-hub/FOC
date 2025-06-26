import { useState } from "react";
import { motion } from "framer-motion";

const EventsPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        organization: "",
        email: "",
        country: "",
        type: "",
        message: "",
    });

const EventData = [
  {
    id: 1,
    title: "Salon PME/STARTUP (SOQAF)",
    description:
      "Salon PME/STARTUP mentionné parmi les événements phares de FOC‑COF, dédié aux petites et moyennes entreprises et startups, dans le cadre du SOQAF.",
    date: "À confirmer",
    location: "Montréal, Canada",
    link: "#inscription",
    image: "/images/events/soqaf-site.jpg",
  },
  {
    id: 2,
    title: "Salon des Municipalités",
    description:
      "Organisé par FOC‑COF et présidé par Dr. Armand NGAKETCHA, ce salon rassemble les représentants municipaux du Québec et d'Afrique francophone ",
    date: "À confirmer",
    location: "Montréal, Canada",
    link: "#inscription",
    image: "/images/events/municipalites-site.jpg",
  },
];





    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <main className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6 text-center">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Nos Événements et Salons
                </motion.h1>
                <motion.p
                    className="text-lg max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Découvrez nos grands rendez-vous économiques et institutionnels qui connectent le Canada et l’Afrique francophone.
                </motion.p>
            </section>

            {/* Dynamic Event Section - Expérientiel */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-6xl mx-auto space-y-24">
                    {EventData.map((event, index) => (
                        <motion.div
                            key={event.id}
                            className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="lg:w-1/2 w-full">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="rounded-3xl shadow-lg w-full h-80 object-cover"
                                />
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <h3 className="text-3xl font-bold text-blue-900 mb-4">{event.title}</h3>
                                <p className="text-lg text-gray-700 mb-4 leading-relaxed">{event.description}</p>
                                <p className="text-sm text-gray-500 mb-2">
                                    <strong>Date :</strong> {event.date}
                                </p>
                                <p className="text-sm text-gray-500 mb-6">
                                    <strong>Lieu :</strong> {event.location}
                                </p>
                                <a
                                    href={event.link}
                                    className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl hover:bg-blue-900 transition"
                                >
                                    En savoir plus
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Galerie Section */}
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Galerie Photos/Vidéos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="aspect-video bg-gray-300 rounded-xl shadow-md overflow-hidden"></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formulaire d'inscription */}
            <section className="py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Demander une invitation</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="name" placeholder="Nom complet" onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" required />
                        <input type="text" name="organization" placeholder="Organisation" onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" required />
                        <input type="email" name="email" placeholder="Adresse e-mail" onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" required />
                        <input type="text" name="country" placeholder="Pays" onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" required />
                        <select name="type" onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" required>
                            <option value="">Type de participation</option>
                            <option value="exposant">Exposant</option>
                            <option value="visiteur">Visiteur</option>
                            <option value="partenaire">Partenaire</option>
                            <option value="presse">Presse</option>
                        </select>
                        <textarea name="message" rows="4" placeholder="Message (optionnel)" onChange={handleChange} className="w-full px-4 py-3 border rounded-xl" />
                        <button type="submit" className="bg-blue-800 text-white px-6 py-3 rounded-xl hover:bg-blue-900 transition">Envoyer la demande</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default EventsPage;
