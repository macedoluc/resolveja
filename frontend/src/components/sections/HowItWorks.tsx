import { Search, MessageCircle, CheckCircle } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Escolha o serviço",
      description:
        "Encontre a categoria do serviço que você precisa e veja os profissionais disponíveis.",
      icon: Search,
    },
    {
      number: "02",
      title: "Encontre o profissional",
      description:
        "Compare profissionais, avaliações e informações para escolher quem melhor atende à sua necessidade.",
      icon: MessageCircle,
    },
    {
      number: "03",
      title: "Resolva seu problema",
      description:
        "Entre em contato, combine os detalhes do serviço e deixe o profissional cuidar do resto.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Simples e rápido"
          title="Como funciona?"
          description="Encontrar um profissional confiável pode ser simples. Veja como o ResolveJá funciona."
          align="left"
        />

        {/* Etapas */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                  relative
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                {/* Ícone */}
                <div
                  className="
                    mt-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                  "
                >
                  <Icon size={28} />
                </div>

                {/* Título */}
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* Descrição */}
                <p className="mt-3 leading-7 text-gray-600">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;