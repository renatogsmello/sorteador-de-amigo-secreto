import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";

export default function ListaParticipantes() {
  const participantes: string[] = useListaParticipantes();

  return (
    <ul>
      {participantes.map((participante) => (
        <li key={participante}>{participante}</li>
      ))}
    </ul>
  );
}
