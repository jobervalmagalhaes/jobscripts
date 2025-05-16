import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function Exemplo() {
  return (
    <Layout
      title="Cavebots Privados"
      description="Exemplo de página customizada com estilo padrão do Docusaurus">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1 className="text--center">Bem-vindo à Página de Exemplo</h1>
            <p className="hero__subtitle text--center">
              Esta página usa os estilos padrão do Docusaurus, compatível com o tema claro e escuro.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
