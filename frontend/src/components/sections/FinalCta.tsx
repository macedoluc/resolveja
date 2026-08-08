import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

function FinalCta() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-blue-600 px-8 py-16 text-center md:px-16">

          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white md:text-4xl">
            Pronto para encontrar o profissional certo?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Encontre profissionais para resolver suas necessidades
            ou comece a oferecer seus serviços através do ResolveJá.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Button>
              Encontrar profissional
            </Button>

            <Button variant="secondary">
              Oferecer meus serviços
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FinalCta;