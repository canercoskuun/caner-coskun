import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

export default function Portfolio() {
    const projects = [
        {
            title: "Task Manager",
            link: "https://github.com/canercoskuun/TaskManager",
            description: "Kullanıcıların görevlerini verimli bir şekilde yönetmesini sağlayan bir platform. Kullanıcı kimlik doğrulama, görev oluşturma, öncelik yönetimi ve Firebase ile gerçek zamanlı güncellemeler içerir.",
            features: [
                "Kullanıcı Kaydı ve Girişi",
                "Firebase Authentication ile Güvenli Kimlik Doğrulama",
                "Görev Oluşturma ve Atama",
                "Görev Öncelik Yönetimi (Normal, Önemli, Çok Önemli)",
                "Görev Durumu Güncellemeleri",
                "Görev Filtreleme Seçenekleri (Bana Atanan, Tüm Görevler)"
            ],
            technologies: [
                "Firebase Authentication",
                "Firestore Database"
            ]
        },
        {
            title: "Library Management System",
            link: "https://github.com/canercoskuun/library-management-system",
            description: "Spring Boot ile geliştirilmiş bir Kütüphane Yönetim Sistemi. Kitap ödünç alma, kullanıcı yönetimi ve iade süresi dolan kitaplar için bildirim gönderme özelliklerini içerir.",
            features: [
                "User Management: Kullanıcı kaydı, rol atama ve kullanıcı verilerini yönetme.",
                "Book Management: Kütüphaneye kitap ekleme, güncelleme ve silme.",
                "Borrow and Return Books: Kullanıcılar kitap ödünç alabilir, ödünç süresini uzatabilir ve kitapları iade edebilir.",
                "Notifications: İade süresi dolan kitaplar için kullanıcılara hatırlatma gönderme.",
                "Job Scheduling: Her gün 08:30'da bildirim e-postalarını tetikler.",
                "Gateway Service: İstekleri ilgili mikro hizmetlere yönlendirir."
            ],
            technologies: [
                "Java",
                "Spring Boot",
                "Spring Security",
                "PostgreSQL"
            ]
        },
        {
            title: "Heart Disease Prediction System",
            link: "https://github.com/canercoskuun/Heart-Disease-Prediction",
            description: "Random Forest algoritmasını kullanarak kalp hastalığı riskini %83 doğruluk oranıyla tahmin eden bir web uygulaması.",
            features: [
                "Tahmin: Kullanıcı girdilerine dayanarak kalp hastalığı riskini tahmin eder.",
                "Random Forest Modeli: %83 doğruluk oranına sahiptir.",
                "Kullanıcı Dostu Arayüz: Basit ve sezgisel kullanıcı deneyimi sunar."
            ],
            technologies: [
                "Random Forest Algorithm",
                "Machine Learning",
                "Python"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#1E1E2E] text-[#CDD6F4] font-sans w-full flex flex-col">
            <header className="sticky top-0 w-full p-4 sm:p-6 md:p-8 text-center bg-[#313244] shadow-md z-50">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5E0DC]">Caner Coşkun</h1>
                <p className="text-lg sm:text-xl text-[#BAC2DE]">Computer Engineering Student | Software Developer</p>
            </header>

            <main className="flex-grow w-full p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                <p className="text-lg sm:text-xl leading-relaxed text-[#BAC2DE] w-full">
                    Merhaba! Ben Caner Coşkun, İstanbul'da yaşayan bir bilgisayar mühendisliği öğrencisiyim ve Eskişehir Osmangazi Üniversitesi'nde 4. sınıfım. Teknolojiye olan ilgim, sürekli olarak yeni şeyler öğrenmeye ve gelişen alanlarda kendimi daha da geliştirmeye yönlendiriyor. Özellikle yazılım geliştirme ve backend teknolojileri üzerine yoğunlaşıyorum ve bu alanda yenilikçi çözümler üretmeye hevesliyim.

                    Her zaman daha verimli ve etkili sistemler geliştirebilmek için yeni teknolojilere açık, öğrenmeye ve deneyim kazanmaya istekliyim. Java ve Spring Boot gibi güçlü teknolojilerde derinleşmek ve bu alanda profesyonel beceriler kazanmak hedefim. Ayrıca, gelişen bulut teknolojileri ve DevOps süreçleri gibi yenilikçi alanlarda da kendimi sürekli olarak geliştirmekteyim.

                    Kariyerimdeki amacım, öğrendiğim her yeni bilgiyi pratiğe dökerek, teknoloji dünyasında fark yaratacak projelerde yer almak ve bu alanda güçlü bir kariyer inşa etmektir.
                </p>
            </main>

            <section className="flex-grow w-full p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {projects.map((proj, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#45475A] rounded-xl shadow-lg p-6 h-full"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[#F5E0DC]">{proj.title}</h3>
                            <p className="text-base sm:text-lg text-[#BAC2DE] mb-4">{proj.description}</p>
                            <ul className="text-base text-[#BAC2DE] space-y-2">
                                {proj.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="mr-2 flex-shrink-0">✔</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[#89B4FA] hover:text-[#B4BEFE] transition-colors">View Project</a>
                        </motion.div>
                    ))}
                </div>
            </section>

            <footer className="w-full p-2 flex justify-center gap-6 bg-[#313244] shadow-inner mt-4">
                <a href="https://github.com/canercoskuun" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 text-[#89B4FA]">
                    <FaGithub className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/caner-co%C5%9Fkun-87080b1b4/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 text-[#89B4FA]">
                    <FaLinkedin className="w-8 h-8" />
                </a>
                <a href="https://medium.com/@canercoskun51" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 text-[#89B4FA]">
                    <SiMedium className="w-8 h-8" />
                </a>
            </footer>
        </div>
    );
}
