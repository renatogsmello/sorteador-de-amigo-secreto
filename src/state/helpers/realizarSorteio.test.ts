import RealizarSorteio from "./realizarSorteio";

describe("Dado um sorteio de amigo secreto", () => {
  test("Cada participante não sorteie o próprio nome", () => {
    const participantes = [
      "Ana",
      "Catarina",
      "Vinicius",
      "Juliana",
      "João",
      "Natalia",
    ];

    const sorteio = RealizarSorteio(participantes);
    participantes.map((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
