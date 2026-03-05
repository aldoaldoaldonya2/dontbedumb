export default function Hero() {
    return (
        <section id="hero" className="h-screen w-full pt-24 bg-gray-500">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    {/* <h1 className="text-6xl font-bold">Hero</h1> */}
                    {/* <p className="mt-4 text-xl">Some description here...</p> */}
                </div>
                {/* Target context for the Flip animation */}
                <div id="hero-image-target" className="w-1/2 md:w-200 min-h-[400px] flex items-center justify-center">
                </div>
            </div>
        </section>
    );
}