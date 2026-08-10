import { useState } from "react";
import { LockKeyhole, Mail, UserRound } from "lucide-react";
import Button from "../../components/ui/Button";

function getLoginMessage() {
  const searchParams = new URLSearchParams(window.location.hash.split("?")[1]);
  const intention = searchParams.get("intencao");

  if (intention === "contratar") {
    return "Entre para encontrar o profissional ideal para o seu serviço.";
  }

  if (intention === "oferecer") {
    return "Entre para começar a oferecer seus serviços no ResolveJá.";
  }

  return "Acesse sua conta para continuar no ResolveJá.";
}

function LoginPage() {
  const [showFeedback, setShowFeedback] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowFeedback(true);
  }

  return (
    <main
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-br
        from-blue-200
        via-blue-600
        to-blue-900
        px-4
      "
    >
      <div
        className="
          absolute
          -top-40
          -left-40
          h-96
          w-96
          rounded-full
          bg-white/20
          blur-3xl
        "
      />

      <section
        className="
          w-full
          max-w-[340px]
          rounded-3xl
          bg-white/95
          px-5
          py-6
          shadow-2xl
          backdrop-blur
          sm:max-w-sm
          sm:px-8
          sm:py-8
        "
      >
        <a
          href="#"
          className="
            inline-flex
            items-center
            gap-1
            text-xs
            font-semibold
            text-gray-500
            transition
            hover:text-blue-600
          "
        >
          ← Voltar
        </a>

        {/* Avatar */}
        <div className="mt-2 flex justify-center">
          <div
            className="
              flex
              h-14
              w-14
              sm:h-20
              sm:w-20
              items-center
              justify-center
              rounded-full
              bg-blue-100
              text-blue-600
            "
          >
            <UserRound size={28} />
          </div>
        </div>

        {/* Cabeçalho */}
        <div className="mt-4 text-center sm:mt-8">
          <h1 className="text-lg font-bold text-gray-900 sm:text-xl">
            Entre na sua conta
          </h1>

          <p className="mt-3 text-xs leading-5 text-gray-600 sm:text-sm">
            {getLoginMessage()}
          </p>
        </div>

        {/* Form */}
        <form
          className="mt-6 space-y-4 sm:mt-8 sm:space-y-5"
          onSubmit={handleSubmit}
        >
          {/* E-mail */}
          <div>
            <div className="relative mt-3">
              <Mail
                size={18}
                className="
                  absolute
                  left-0
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                id="email"
                type="email"
                placeholder="E-mail"
                required
                className="
                  w-full
                  border-b-2
                  border-gray-300
                  bg-transparent
                  py-3
                  pl-10
                  pr-2
                  text-sm
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-blue-600
                "
              />
            </div>
          </div>

          {/* Senha */}
          <div>
            <div className="relative mt-3">
              <LockKeyhole
                size={18}
                className="
                  absolute
                  left-0
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                id="password"
                type="password"
                placeholder="Senha"
                required
                className="
                  w-full
                  border-b-2
                  border-gray-300
                  bg-transparent
                  py-3
                  pl-10
                  pr-2
                  text-sm
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-blue-600
                "
              />
            </div>

            {/* Lembrar / Esqueci senha */}
            <div className="mt-4 flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600"
                />
                Lembrar de mim
              </label>

              <a
                href="#login"
                className="text-xs font-semibold text-blue-500 hover:text-blue-600"
              >
                Esqueci minha senha
              </a>
            </div>
          </div>

          {/* Botão Entrar */}
          <div className="flex justify-center pt-8">
            <Button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-blue-400
                py-3
                text-white
                shadow-md
                transition
                hover:from-blue-700
                hover:to-blue-500
              "
            >
              Entrar
            </Button>
          </div>
        </form>

        {/* Feedback */}
        {showFeedback && (
          <p
            className="
              mt-5
              rounded-xl
              bg-blue-50
              px-4
              py-3
              text-sm
              text-blue-700
            "
          >
            A autenticação será conectada ao backend na próxima etapa.
          </p>
        )}

        {/* Criar conta */}
        <p
          className="
            mt-7
            text-center
            text-xs
            text-gray-600
          "
        >
          Ainda não tem uma conta?{" "}

          <a
            href="#login"
            className="font-semibold text-blue-500"
          >
            Criar conta
          </a>
        </p>
      </section>
    </main>
  );
}

export default LoginPage;