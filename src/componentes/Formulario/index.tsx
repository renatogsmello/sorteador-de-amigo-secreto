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
      <div className="mb-8">
        <input
          ref={inputRef}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
          className=" rounded-s-[45px] h-[82px] w-2/3 box-border pl-8 text-xl border-2 border-black shadow-[0_2px_0_1px_rbg(0,0,0)] focus:outline-none md:w-full md:block md:rounded-[45px] md:mb-5"
        />
        <button
          disabled={!nome}
          className="rounded-e-[45px] h-[82px] w-1/3 box-border border-2 border-black text-xl text-black shadow-[2px_2px_0_1px_rbg(0,0,0)] cursor-pointer bg-[#c4c4c4] hover:opacity-80 disabled:opacity-60 disabled:cursor-not-allowed md:block md:mt-4 md:m-auto md:w-[220px] md:rounded-[45px]"
        >
          Adicionar
        </button>
      </div>
      {mensagemErro && (
        <p
          role="alert"
          className="text-[#842029] bg-[#f8d7da] p-4 border-[#f5c2c7] rounded-lg md:my-12"
        >
          {mensagemErro}
        </p>
      )}
    </form>
  );
}
