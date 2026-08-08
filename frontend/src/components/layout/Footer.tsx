function Footer() {
  const platformLinks = [
    { label: "Início", href: "#" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Serviços", href: "#servicos" },
  ];
  
    const supportLinks = [
      "Central de ajuda",
      "Termos de uso",
      "Política de privacidade",
    ];
  
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_repeat(2,minmax(0,1fr))]">
          <div>
            <a href="#" className="text-2xl font-bold text-white">
              Resolve<span className="text-blue-400">Já</span>
            </a>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Conectando pessoas a profissionais de forma simples, segura e
              transparente.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="font-semibold text-white">Plataforma</h2>

            <ul className="mt-4 space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-semibold text-white">Suporte</h2>

            <ul className="mt-4 space-y-3">
              {supportLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-gray-400">{link}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-gray-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © 2026 ResolveJá. Todos os direitos reservados.
          </p>

          <p className="text-sm text-gray-500">
            Serviços mais simples, do seu jeito.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
