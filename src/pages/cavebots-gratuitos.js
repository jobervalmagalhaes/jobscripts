import React from 'react';
import Layout from '@theme/Layout';
import styles from './cavebots-gratuitos.module.css';
import clsx from 'clsx';

const bots = [
  {
    server: 'Kaldrox Global',
    image: '/img/kaldrox.png',
    description:
      'Scripts gratuitos de cavebot otimizados para o servidor Kaldrox Global. Inclui suporte para cavebot, targeting, healing e anti-idle.',
    downloadLink: '/kaldrox'
  },
  /*{
    server: 'Em breve mais servidores',
    image: '/img/jobscripts.png',
    description:
      'Em breve mais servidores.',
    downloadLink: '#'
  },*/
];

export default function Cavebots() {
  return (
    <Layout
      title="Cavebots Gratuitos"
      description="Coleção de cavebots gratuitos para diversos servidores ElfBot NG 8.6"
    >
      <main className="padding--lg">
        <div className="container">
          <h1 className="text--center margin-bottom--lg">Cavebots Gratuitos</h1>
          <div className="row">
            {bots.map((bot, index) => (
              <div key={index} className={clsx('col col--6 margin-bottom--lg')}>
                <div className={styles.card}>
                  <img src={bot.image} alt={bot.server} className={styles.image} />
                  <div className={styles.content}>
                    <h3>{bot.server}</h3>
                    <p>{bot.description}</p>
                    <a href={bot.downloadLink} className="button button--primary button--sm">
                      Baixar scripts
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
