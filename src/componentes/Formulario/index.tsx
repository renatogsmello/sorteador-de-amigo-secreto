import { useRef, useState } from "react";
import { useAdicioinarParticipante } from "../../state/hooks/useAdicionarParticipante";
import useMensagemErro from "../../state/hooks/useMensagemErro";

export default function Formulario() {
  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const adicionarNaLista = useAdicioinarParticipante();
  const mensagemErro = useMensagemErro();

  const adicionaParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionarNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={adicionaParticipante}>
      <input
        ref={inputRef}
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        type="text"
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!nome}>Adicionar</button>
      {mensagemErro && <p role="alert">{mensagemErro}</p>}
    </form>
  );
}
