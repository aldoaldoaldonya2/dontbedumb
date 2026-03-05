export default function Hero() {
    return (
        <section id="hero" className="h-screen w-full pt-24 bg-foreground">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    {/* <h1 className="text-6xl font-bold">Hero</h1> */}
                    {/* <p className="mt-4 text-xl">Some description here...</p> */}
                </div>
                <div id="hero-image-target" className="relative w-1/2 md:w-[400px] aspect-square flex items-center justify-center">
                </div>
            </div>
        </section>
    );
}