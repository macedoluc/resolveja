function Navbar() {
  const links = [
    "Como funciona",
    "Serviços",
    "Sobre nós",
  ];

  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          ResolveJá
        </h1>


        {/* Links */}
        <div className="hidden gap-8 md:flex">

          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-600 hover:text-blue-600"
            >
              {link}
            </a>
          ))}

        </div>


        {/* Botão */}
        <button
          className="
            rounded-lg
            bg-blue-600
            px-5
            py-2
            font-medium
            text-white
            hover:bg-blue-700
          "
        >
          Entrar
        </button>

      </nav>
    </header>
  );
}

export default Navbar;