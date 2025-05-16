import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function Exemplo() {
  return (
    <Layout
      title="Página de Exemplo"
      description="Exemplo de página customizada com estilo padrão do Docusaurus">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1 className="text--center">Bem-vindo à Página de Exemplo</h1>
            <p className="hero__subtitle text--center">
              Esta página usa os estilos padrão do Docusaurus, compatível com o tema claro e escuro.
            </p>

            <div className="card margin-top--lg">
              <div className="card__header">
                <h2>📄 Como criar páginas</h2>
              </div>
              <div className="card__body">
                <p>Crie arquivos em <code>src/pages</code>. O nome vira a rota (ex: <code>exemplo.js</code> → <code>/exemplo</code>).</p>
              </div>
            </div>

            <div className="card margin-top--lg">
              <div className="card__header">
                <h2>🎨 Estilo automático</h2>
              </div>
              <div className="card__body">
                <p>Use as <code>className</code>s e tokens CSS do Docusaurus. Eles se adaptam automaticamente ao tema atual.</p>
              </div>
            </div>

            <div className="card margin-top--lg">
              <div className="card__header">
                <h2>🔗 Navegação</h2>
              </div>
              <div className="card__body">
                <p>Use o componente <code>&lt;Link /&gt;</code> para links internos.</p>
                <Link className="button button--primary" to="/">
                  Voltar para Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
