export default function Cabecalho() {
  return (
    <header className="flex justify-around pt-28 md:pt-14 md:flex-col md:items-center">
      <img
        src="/imagens/logo.png"
        className="md:w-[235] md:h-[199]"
        width={351}
        height={117}
        aria-label="Logo do Sorteador"
      />
      <img
        className=" z-10"
        src="/imagens/participante.png"
        alt="Participante com um presente na mão"
      />
    </header>
  );
}
