import Image from "next/image";

import type { NextApiRequest, NextApiResponse } from 'next';

export default function Lotomania() {


 function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { maisSorteados, menosSorteados, tamanhoJogo = 50 } = req.body;

    if (!Array.isArray(maisSorteados) || !Array.isArray(menosSorteados)) {
      return res.status(400).json({ error: 'Os dados devem ser arrays de números.' });
    }

    if (maisSorteados.length < 4 || menosSorteados.length < 2) {
      return res.status(400).json({ error: 'Listas de mais/menos sorteados insuficientes.' });
    }

    const numerosLotomania = Array.from({ length: 100 }, (_, i) => i); // Números de 0 a 99
    const jogo = new Set<number>();

    // Adiciona 4 números dos mais sorteados
    while (jogo.size < 4) {
      jogo.add(getAleatorio(maisSorteados));
    }

    // Adiciona 2 números dos menos sorteados
    while (jogo.size < 6) {
      jogo.add(getAleatorio(menosSorteados));
    }

    // Adiciona números aleatórios do restante
    const numerosRestantes = numerosLotomania.filter((n) => !jogo.has(n));
    while (jogo.size < tamanhoJogo) {
      jogo.add(getAleatorio(numerosRestantes));
    }

    res.status(200).json({ jogo: Array.from(jogo).sort((a, b) => a - b) });

  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar o jogo.' });
  }
}

/**
 * Retorna um número aleatório de uma lista.
 */
function getAleatorio(lista: number[]): number {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

 

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-136px)] bg-amber-200 p-3 justify-top ">
      
      <main className="flex flex-col gap-3 mt-8 items-center sm:items-center text-center">
        <Image
          className="text-azulRoyal"
          src="/logo-lotomania-512.png"
          alt="Logo Lotomania"
          width={200}
          height={20}
        />
        <h3 className=" flex text-xl font-semibold">Calculadora para motagem de fechamento de jogos da Lotomania</h3>
        <p> Clique no botão abaixo para gerar um jogo com números aleatórios</p>




        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-xl border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:opacity-75  font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            16 números
          </a>
          <a
            className="rounded-xl border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:opacity-75  font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            18 números
          </a>
          <a
            className="rounded-xl border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:opacity-75  font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            20 números
          </a>
        </div>
      </main>

    
      
    </div>
  );
}
