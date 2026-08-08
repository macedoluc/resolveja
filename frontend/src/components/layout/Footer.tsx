function Footer() {
    const platformLinks = [
      "Como funciona",
      "Serviços",
      "Sobre nós",
    ];
  
    const supportLinks = [
      "Central de ajuda",
      "Termos de uso",
      "Política de privacidade",
    ];
  
    return (
      <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
        <div className="mx-auto max-w-7xl px-6 py-14">
  
          <div className="grid gap-10 md:grid-cols-3">
  
            {/* Marca */}
            <div>
              <h2 className="text-2xl font-bold text-white">
                ResolveJá
              </h2>
  
              <p className="mt-4 max-w-sm leading-7 text-gray-400">
                Conectando pessoas a profissionais de forma
                simples, segura e transparente.
              </p>
            </div>
  
            {/* Plataforma */}
            <div>
              <h3 className="font-semibold text-white">
                Plataforma
              </h3>
  
              <ul className="mt-4 space-y-3">
                {platformLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Suporte */}
            <div>
              <h3 className="font-semibold text-white">
                Suporte
              </h3>
  
              <ul className="mt-4 space-y-3">
                {supportLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
          </div>
  
          {/* Copyright */}
  
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500">
              © 2026 ResolveJá. Todos os direitos reservados.
            </p>
          </div>
  
        </div>
      </footer>
    );
  }
  
  export default Footer;