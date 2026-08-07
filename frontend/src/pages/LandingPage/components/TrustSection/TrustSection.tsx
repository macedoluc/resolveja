import {
    BadgeCheck,
    Star,
    ShieldCheck,
    History,
  } from "lucide-react";
  
  function TrustSection() {
    const benefits = [
      {
        title: "Profissionais avaliados",
        description:
          "Veja as avaliações de outros clientes antes de escolher um profissional.",
        icon: Star,
      },
      {
        title: "Profissionais verificados",
        description:
          "Construímos mecanismos para aumentar a segurança e a confiança na plataforma.",
        icon: BadgeCheck,
      },
      {
        title: "Contratação mais segura",
        description:
          "Tenha mais informações para tomar uma decisão antes de contratar um serviço.",
        icon: ShieldCheck,
      },
      {
        title: "Histórico e reputação",
        description:
          "A reputação dos profissionais será construída com base nos serviços realizados.",
        icon: History,
      },
    ];
  
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="grid items-center gap-14 lg:grid-cols-2">
  
            {/* Texto */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Confiança em primeiro lugar
              </span>
  
              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Contrate com mais confiança.
              </h2>
  
              <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
                O ResolveJá foi pensado para tornar a contratação de
                serviços mais transparente, segura e confiável.
              </p>
  
              <p className="mt-4 max-w-xl leading-7 text-gray-600">
                Nossa proposta é criar um ambiente onde clientes possam
                conhecer melhor os profissionais e onde bons prestadores
                possam construir uma reputação dentro da plataforma.
              </p>
            </div>
  
            {/* Benefícios */}
            <div className="grid gap-6 sm:grid-cols-2">
  
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
  
                return (
                  <div
                    key={benefit.title}
                    className="
                      rounded-2xl
                      border
                      border-gray-200
                      p-6
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-md
                    "
                  >
                    <div className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-50
                      text-blue-600
                    ">
                      <Icon size={24} />
                    </div>
  
                    <h3 className="mt-5 font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
  
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default TrustSection;