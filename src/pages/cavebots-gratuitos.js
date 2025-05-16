import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function Exemplo() {
  return (
    <Layout
      title="Cavebots Gratuitos"
      description="Página de scripts gratuitos do JOB Scripts">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1 className="text--center">Cavebots Gratuitos</h1>
            <p className="hero__subtitle text--center"> Aqui estarão os melhores servers parceiros do JOB Scripts.</p> 
            <div className="card margin-top--lg">
            <center>Por favor, selecione qual deseja baixar o nosso conteúdo gratuito:</center>
          <div style={{ textAlign: 'center', margin: '3rem 0 1rem' }}>
          <a
            href="/kaldrox"
            className="button button--primary button--sm"
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              letterSpacing: '0.03em',
              padding: '1rem 4rem',
              borderBottom: '4px solid #222',
              textDecoration: 'underline'
            }}
          >
            Kaldrox Global
          </a>
          </div>
        </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
