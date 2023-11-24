import { useListaParticipantes } from "./useListaParticipantes";
import { useSetRecoilState } from "recoil";
import { resultadoAmigoSecreto } from "../atom";
import RealizarSorteio from "../helpers/realizarSorteio";

export function useSorteador() {
  const participantes = useListaParticipantes();
  const setResultado = useSetRecoilState(resultadoAmigoSecreto);

  return () => {
    const resultado = RealizarSorteio(participantes);

    setResultado(resultado);
  };
}
