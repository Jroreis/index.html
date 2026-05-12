<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VoltCalc Pro - Cálculos Elétricos Profissionais</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        .gradient-bg { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); }
        .hero-pattern { background-color: #f8fafc; background-image: radial-gradient(#cbd5e1 0.5px, transparent 0.5px); background-size: 20px 20px; }
    </style>
</head>
<body class="font-sans text-slate-900 hero-pattern">

    <nav class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div class="flex items-center gap-2">
                <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                    <i class="fas fa-bolt"></i>
                </div>
                <span class="text-xl font-bold tracking-tight text-blue-900">VoltCalc Pro</span>
            </div>
            <a href="#download" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-md">
                Baixar App
            </a>
        </div>
    </nav>

    <header class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
            <span class="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-100 rounded-full">
                Conforme NBR 5410
            </span>
            <h1 class="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Cálculos Elétricos na <span class="text-blue-600">Palma da Mão</span>
            </h1>
            <p class="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                A ferramenta definitiva para engenheiros e eletricistas. Calcule Lei de Ohm, queda de tensão e consulte tabelas técnicas com precisão profissional.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
                <a href="#download" class="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-xl group">
                    <i class="fab fa-google-play text-2xl group-hover:text-blue-400"></i>
                    <div class="text-left">
                        <p class="text-xs uppercase opacity-70 leading-none">Disponível no</p>
                        <p class="text-lg font-semibold leading-none">Google Play</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="relative flex justify-center">
            <div class="w-64 h-[500px] bg-slate-200 rounded-[3rem] border-8 border-slate-900 shadow-2xl relative overflow-hidden flex items-center justify-center">
                 <i class="fas fa-bolt text-blue-600 text-6xl opacity-20"></i>
                 <div class="absolute bottom-0 w-full h-1/2 bg-blue-600/10"></div>
            </div>
        </div>
    </header>

    <section id="features" class="bg-white py-20 border-y border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-12">Funcionalidades Principais</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow border border-slate-100">
                    <i class="fas fa-calculator text-3xl text-blue-600 mb-6"></i>
                    <h3 class="text-xl font-bold mb-3">Lei de Ohm</h3>
                    <p class="text-slate-600">Cálculos automáticos de Tensão, Corrente, Resistência e Potência com sugestão de bitolas.</p>
                </div>
                <div class="p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow border border-slate-100">
                    <i class="fas fa-ruler-combined text-3xl text-blue-600 mb-6"></i>
                    <h3 class="text-xl font-bold mb-3">Queda de Tensão</h3>
                    <p class="text-slate-600">Dimensionamento preciso conforme NBR 5410 para sistemas monofásicos e trifásicos.</p>
                </div>
                <div class="p-8 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow border border-slate-100">
                    <i class="fas fa-book-reader text-3xl text-blue-600 mb-6"></i>
                    <h3 class="text-xl font-bold mb-3">Tabelas Técnicas</h3>
                    <p class="text-slate-600">Acesso rápido a tabelas de disjuntores, cabos e normas técnicas atualizadas.</p>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-slate-900 text-slate-400 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
                    <i class="fas fa-bolt text-sm"></i>
                </div>
                <span class="text-white font-bold">VoltCalc Pro</span>
            </div>
            <div class="flex gap-8 text-sm">
                <a href="#" class="hover:text-white">Privacidade</a>
                <a href="#" class="hover:text-white">Termos</a>
                <a href="mailto:calcvoltpro@gmail.com" class="hover:text-white">Suporte</a>
            </div>
            <p class="text-xs">&copy; 2026 VoltCalc Pro. Todos os direitos reservados.</p>
        </div>
    </footer>

</body>
</html>
