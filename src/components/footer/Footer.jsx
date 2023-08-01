const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between px-1 rounded-xl pb-8 pt-8 lg:px-8 xl:flex-row dark:bg-shadow-500 bg-navy-800/50">
      <h5 className="mb-4 text-center text-sm font-medium text-gray-600 sm:!mb-0 md:text-lg">
        <p className="mb-4 text-center text-sm text-white sm:!mb-0 md:text-base">
          ©{1900 + new Date().getYear()} NextBI Todos os direitos reservados.
        </p>
      </h5>
      <div>
        <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
          <li>
            <a
              target="blank"
              href="mailto:hudsonflima@gmail.com"
              className="text-base font-medium text-white hover:text-gray-200"
            >
              Suporte
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://simmmple.com/terms-of-service"
              className="text-base font-medium text-white hover:text-gray-200"
            >
              Termos de uso e licenciamento
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
