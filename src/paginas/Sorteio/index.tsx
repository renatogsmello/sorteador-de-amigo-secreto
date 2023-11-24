import { useState } from "react";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";
import Card from "../../componentes/Card";

export default function Sorteio() {
  const participantes = useListaParticipantes();
  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState("");
  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <Card>
      <section className="">
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <select
            required
            name="participanteDaVez"
            id="participanteDaVez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={(evento) => setParticipanteDaVez(evento.target.value)}
            className="rounded-[45px] h-[82px] w-[70%] box-border px-8 text-xl border-2 border-black shadow-[0_2px_0_1px_rgb(0,0,0)] focus:outline-none md:w-full"
          >
            <option value="">Selecione seu nome</option>
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </select>
          <p className="text-xl font-extralight my-8">
            Clique em sortear para ver quem é seu amigo secreto!
          </p>
          <button className="w-[350px] h-20 text-xl shadow-[2px_2px_0_1px_rgb(0,0,0)] rounded-[45px] bg-[#FE652B] text-white cursor-pointer m-4 disabled:opacity-[60] disabled:cursor-not-allowed hover:bg-[#4B69FD] md:w-[220px] md:my-8">
            Sortear
          </button>
        </form>
        {amigoSecreto && (
          <p
            className="text-[#FE652BFC] text-xl font-extralight my-8"
            role="alert"
          >
            {amigoSecreto}
          </p>
        )}
        <footer className="my-16">
          <img src="/imagens/aviao.png" alt="Um desenho de um avião de papel" />
        </footer>
      </section>
    </Card>
  );
}
