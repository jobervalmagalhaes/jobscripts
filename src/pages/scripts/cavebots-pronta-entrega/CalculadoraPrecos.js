// src/components/CalculadoraPrecos.js

import React, { useState, useEffect } from 'react';
import styles from './CalculadoraPrecos.module.css';

const MAX_QUANTIDADE = 300;

export default function CalculadoraPrecos() {
  const [quantidade, setQuantidade] = useState(1);
  const [valorTotal, setValorTotal] = useState(30);

  const calcularPreco = (qtd) => {
    const qtdNumerica = Number(qtd) || 0;

    if (qtdNumerica <= 0) return 0;
    if (qtdNumerica === 1) return 30;
    if (qtdNumerica === 2) return 50;
    if (qtdNumerica === 3) return 70;
    if (qtdNumerica === 4) return 85;
    if (qtdNumerica === 5) return 100;
    return 100 + (qtdNumerica - 5) * 10;
  };

  useEffect(() => {
    const novoValor = calcularPreco(quantidade);
    setValorTotal(novoValor);
  }, [quantidade]);

  const handleQuantidadeChange = (event) => {
    const valorInput = event.target.value;
    
    if (valorInput === '') {
      setQuantidade('');
    } else {
      let novaQuantidade = parseInt(valorInput, 10);
      
      if (!isNaN(novaQuantidade)) {
        if (novaQuantidade > MAX_QUANTIDADE) {
          novaQuantidade = MAX_QUANTIDADE;
        }
        setQuantidade(novaQuantidade);
      }
    }
  };

  const handleBlur = () => {
    if (Number(quantidade) < 1) {
      setQuantidade(1);
    }
  };

  const valorFormatado = valorTotal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.inputGroup}>
        <label htmlFor="quantidade" className={styles.label}>
          Quantidade de Cavebots:
        </label>
        <input
          type="number"
          id="quantidade"
          value={quantidade}
          onChange={handleQuantidadeChange}
          onBlur={handleBlur}
          min="1"
          max={MAX_QUANTIDADE}
          className={styles.input}
          placeholder="Digite uma quantidade válida."
        />
      </div>
      <div className={styles.resultContainer}>
        <p className={styles.resultText}>
          {Number(quantidade) > 0 || quantidade === '' ? `Total: ${valorFormatado}` : 'Quantidade digitada inválida.'}
        </p>
      </div>
    </div>
  );
}