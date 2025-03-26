export default function Education() {
    return (
        <section className="bg-white text-black py-12">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
                
                {/* Education Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Burhani College */}
                    <div className="bg-[#A1E3F9] p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                        <img 
                            src="/logo.png" 
                            alt="Burhani College" 
                            className="w-auto h-32 object-contain mb-4"
                        />
                        <h3 className="text-lg font-bold">Burhani College</h3>
                        <p className="text-sm mt-2">Bachelor of Mass Media</p>
                    </div>

                    {/* Modern English High School */}
                    <div className="bg-[#A1E3F9] p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                        <img 
                            src="/school.png" 
                            alt=" The diamond jubilee high school" 
                            className="w-auto h-32 object-contain mb-4"
                        />
                        <h3 className="text-lg font-bold"> The diamond jubilee high school</h3>
                        <p className="text-sm mt-2"></p>
                    </div>

                </div>
            </div>
        </section>
    );
}
