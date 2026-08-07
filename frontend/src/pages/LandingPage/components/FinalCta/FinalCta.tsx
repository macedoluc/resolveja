import { ArrowRight } from "lucide-react";

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

            <button
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-6
                py-3
                font-semibold
                text-blue-600
                transition
                hover:bg-blue-50
              "
            >
              Encontrar profissional
              <ArrowRight size={18} />
            </button>

            <button
              className="
                rounded-xl
                border
                border-blue-400
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              Oferecer meus serviços
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FinalCta;