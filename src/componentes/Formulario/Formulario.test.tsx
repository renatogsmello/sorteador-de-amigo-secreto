import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./index";
import { RecoilRoot } from "recoil";

describe("O comportamento do formulário", () => {
  test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    expect(input).toBeInTheDocument();

    expect(botao).toBeDisabled();
  });

  test("Adicionar um participante caso exista um nome preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Ana Catarina" } });

    fireEvent.click(botao);

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });

  test("Nomes duplicados não podem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Ana Catarina" } });

    fireEvent.click(botao);
    fireEvent.change(input, { target: { value: "Ana Catarina" } });

    fireEvent.click(botao);

    const mensagemErro = screen.getByRole("alert");

    expect(mensagemErro.textContent).toBe(
      "Nomes duplicados não são permitidos"
    );
  });
  test("A mensagem de erro deve sumir depois dos timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );

    const botao = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Ana Catarina" } });

    fireEvent.click(botao);
    fireEvent.change(input, { target: { value: "Ana Catarina" } });

    fireEvent.click(botao);

    let mensagemErro = screen.queryByRole("alert");

    expect(mensagemErro).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    mensagemErro = screen.queryByRole("alert");
  });
});
