import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import { useSorteador } from "../../state/hooks/useSorteador";

export default function Rodape() {
  const participantes = useListaParticipantes();

  const navegaPara = useNavigate();

  const sortear = useSorteador();

  const iniciar = () => {
    navegaPara("/sorteio");
    sortear();
  };
  return (
    <footer className="flex items-center justify-between md:flex-col">
      <button
        disabled={participantes.length < 3}
        onClick={iniciar}
        className="w-[350px] height-[80px] text-xl shadow-[2px_2px_0_1px_rgb(0,0,0)] rounded-[45px] bg-[#fe652b] text-white cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#4b69fd] py-8"
      >
        Iniciar a brincadeira
      </button>
      <img
        src="/imagens/sacolas.png"
        alt="Sacolas de compras"
        className="md:mt-8"
      />
    </footer>
  );
}
