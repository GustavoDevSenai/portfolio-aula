export default function Experience(){
    return(
        <section className="max-w-6xl mx-auto px-1 py-20">
            
            
            <h2 className="text-3xl font-semibold text-black mb-12">
                Experiência
            </h2>

            <div className="space-y-12">
                {/* ITEM 1*/}
                <div className="grid md:grid-cols-[150px_1fr] gap-6 group">
                    <span className="text-zinc-500">2023 - atual</span>
                    <div className="transition duration-300 p-6 rounded-lg hover:bg-zinc-100">
                        <h3 className="text-x1 font-semibold text-black">Dev full stack pleno</h3>
                        <p className="text-yellow-400 font-medium">Conta simples</p>
                        <p className="text-zinc-400 mt-3 leading-relaxed">Desenvolvimento de features no produto principal</p>
                    </div>
                </div>

                {/* ITEM 2*/}
                <div className="grid md:grid-cols-[150px_1fr] gap-6 group">
                    <span className="text-zinc-500">2021 - 2023</span>
                    <div className="transition duration-300 p-6 rounded-lg hover:bg-zinc-100">
                        <h3 className="text-x1 font-semibold text-black" >Dev frontend Junior</h3>
                        <p className="text-yellow-400 font-medium">Conta simples</p>
                        <p className="text-zinc-400 mt-3 leading-relaxed">Desenvolvimento de features no produto principal</p>
                    </div>
                </div>

                {/* ITEM 3*/}
                <div className="grid md:grid-cols-[150px_1fr] gap-6 group">
                    <span className="text-zinc-500">2020 - 2021</span>
                    <div className="transition duration-300 p-6 rounded-lg hover:bg-zinc-100">
                        <h3 className="text-x1 font-semibold text-black">Estágio em Desenvolvimento</h3>
                        <p className="text-yellow-400 font-medium">Conta simples</p>
                        <p className="text-zinc-400 mt-3 leading-relaxed">Desenvolvimento de features no produto principal</p>
                    </div>
                </div>

            </div>




        </section>
    )
}