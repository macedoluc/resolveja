import {
  Wrench,
  Zap,
  Sparkles,
  Laptop,
  Car,
  House,
  ArrowRight,
} from "lucide-react";

function PopularServices() {
  const services = [
    {
      name: "Eletricista",
      description: "Instalações e reparos elétricos.",
      icon: Zap,
    },
    {
      name: "Encanador",
      description: "Manutenção hidráulica residencial.",
      icon: Wrench,
    },
    {
      name: "Limpeza",
      description: "Profissionais para limpeza e organização.",
      icon: Sparkles,
    },
    {
      name: "Tecnologia",
      description: "Computadores, sistemas e suporte técnico.",
      icon: Laptop,
    },
    {
      name: "Mecânica",
      description: "Manutenção e reparos automotivos.",
      icon: Car,
    },
    {
      name: "Reformas",
      description: "Pintura, obras e melhorias.",
      icon: House,
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Encontre o profissional certo
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Serviços populares
          </h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            Encontre profissionais qualificados para as necessidades
            do seu dia a dia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.name}
                className="
                  group
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-lg
                "
              >
                <div className="flex items-start justify-between">

                  <div className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                    transition-colors
                    group-hover:bg-blue-600
                    group-hover:text-white
                  ">
                    <Icon size={24} />
                  </div>

                  <ArrowRight
                    size={20}
                    className="
                      text-gray-300
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-blue-600
                    "
                  />

                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {service.name}
                </h3>

                <p className="mt-2 leading-6 text-gray-600">
                  {service.description}
                </p>

                <button
                  className="
                    mt-5
                    text-sm
                    font-semibold
                    text-blue-600
                    hover:text-blue-700
                  "
                >
                  Encontrar profissional
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default PopularServices;