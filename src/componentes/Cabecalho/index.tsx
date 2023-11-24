export default function Cabecalho() {
  return (
    <header className="flex justify-around lg:pt-28 lg:flex-row md:pt-14 md:flex-col md:items-center">
      <img
        src="/imagens/logo.png"
        className="md:w-[235px] md:h-[199] lg:w-[351px] lg:h-[117px]"
        width={351}
        height={117}
        aria-label="Logo do Sorteador"
      />
      <img
        className="z-10"
        src="/imagens/participante.png"
        alt="Participante com um presente na mão"
      />
    </header>
  );
}
