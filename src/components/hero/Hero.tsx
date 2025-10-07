function Hero() {
    return (
        <section id="inicio" data-aos="fade-up" className="mt-16 flex flex-col items-center justify-center gap-8">
            <h3 className="text-lg md:text-2xl font-semibold text-white">Olá, eu sou o <span className="text-[#02A8FB]">Lucas Farias</span></h3>
            <h1 className="text-3xl md:text-5xl font-bold text-white">Desenvolvedor Fullstack</h1>
            <p className="text-sm md:text-md text-white/80 text-center">Desenvolvedor Fullstack apaixonado por tecnologia e inovação. Com uma sólida experiência em ReactJS, TypeScript, .NET, C#, SQL Server, MongoDB e Node.js, estou sempre buscando maneiras de aprimorar minhas habilidades e enfrentar novos desafios. Determinado, criativo e comprometido em entregar soluções de alta qualidade para impulsionar o sucesso dos projetos.</p>
            <a href="https://www.linkedin.com/in/lucas-farias-85a07b117" target="_blank" className="bg-button text-black mt-14 font-semibold rounded-lg px-8 py-2 hover:bg-button-hover cursor-pointer transform hover:scale-105 duration-300">
                Acessar Linkedin
            </a>
        </section>
    )
}

export { Hero }