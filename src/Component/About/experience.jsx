"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
    const experiences = [
        {
            title: " Director & Co-Founder",
            company: "Nexcore Alliance",
            duration: "Sep 2024",
            location: "Maharashtra, India",
            image: "/nexcorelogo.jpeg",
        },
        {
            title: " Director | Chief Executive Officer",
            company: "Marketing Junction",
            duration: "Sep 2024",
            location: "Maharashtra, India",
            image: "/marketig.jpeg",
        },
        {
            title: " Director | Chief Marketing Officer",
            company: "ISRC.ORG IN",
            duration: "June 2024",
            location: "Maharashtra, India",
            image: "/isrclogo.jpeg",
        },
        {
            title: "Marketing Head ",
            company: "Student Alliance",
            duration: "June 2023",
            location: "Maharashtra, India",
            image: "/studentlogo.jpeg",
        },
    ];

    return (
        <section className="bg-[#D1F8EF] text-black py-12">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {experiences.map((exp, index) => (
                        <FlipCard key={index} exp={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FlipCard({ exp }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-64 perspective-1000 cursor-pointer"
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
        >
            <motion.div
                className="relative w-full h-full rounded-lg shadow-lg"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}  // ✅ Fixed easing type
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side (Image) */}
                <div className="absolute w-full h-full backface-hidden bg-[#D1F8EF] rounded-lg overflow-hidden">
                    <img 
                        src={exp.image} 
                        alt={exp.title} 
                        className="w-full h-full object-cover object-center rounded-lg"
                    />
                </div>

                {/* Back Side */}
                <div 
                    className="absolute w-full h-full backface-hidden bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 flex flex-col items-center justify-center rounded-lg shadow-lg"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <h3 className="text-base font-bold">{exp.title}</h3>
                    <p className="text-xs mt-1">{exp.company}</p>
                    <p className="text-xs">{exp.duration}</p>
                    <p className="text-xs">{exp.location}</p>
                </div>
            </motion.div>
        </div>
    );
}
