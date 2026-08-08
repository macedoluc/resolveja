import heroImage from "../../../../assets/images/hero.svg";
import Button from "../ui/Button";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2">

        {/* Conteúdo */}
        <div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Plataforma segura para contratação de serviços
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            Encontre profissionais confiáveis
            <span className="text-blue-600"> para qualquer serviço.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Conectamos clientes e prestadores de serviço em uma plataforma
            simples, segura e transparente.
          </p>

          <div className="mt-8 space-y-3">

            <div className="flex items-center gap-3">
              <span>✅</span>
              <p>Profissionais avaliados pela comunidade</p>
            </div>

            <div className="flex items-center gap-3">
              <span>✅</span>
              <p>Contato rápido entre cliente e profissional</p>
            </div>

            <div className="flex items-center gap-3">
              <span>✅</span>
              <p>Mais segurança para contratar serviços</p>
            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button>
              Quero contratar
            </Button>

            <Button variant="secondary">
              Quero oferecer serviços
            </Button>

          </div>

        </div>

        {/* Ilustração */}

        <div className="flex justify-center">

          <img
            src={heroImage}
            alt="Profissionais trabalhando"
            className="w-full max-w-lg"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;