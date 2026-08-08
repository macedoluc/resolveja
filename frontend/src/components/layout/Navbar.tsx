import Button from "../ui/Button";

function Navbar() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-blue-600"
        >
          ResolveJá
        </a>

        {/* Navegação */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#como-funciona"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
          >
            Como funciona
          </a>

          <a
            href="#servicos"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
          >
            Serviços
          </a>
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="hidden text-sm font-semibold text-gray-700 transition-colors hover:text-blue-600 sm:block"
          >
            Entrar
          </a>

          <Button href="#login?intencao=contratar">
            Quero contratar
          </Button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
