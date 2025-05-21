// src/pages/elfbot-ng.js
import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './arquivos.module.css';

export default function ElfbotNG() {
  return (
    <Layout
      title="Arquivos"
      description="Download do ElfBot NG. O melhor bot para versão 8.6. Funções: healing, aimbot, hotkeys, cavebot, navigation, targeting, proxy e icons."
    >
      <main className="padding--lg">
        <div className="container">
          {/* Título e imagem */}
          <div className={clsx('row', styles.section)}>
            <div className="col col--5 text--center">
              <img
                src="/img/elfbot/elfbotng.png"
                alt="ElfBot NG 4.5.9 Screenshot"
                className={styles.image}
              />
            </div>
            <div className="col col--7">
              <h1 className="hero__title">ElfBot NG 4.5.9</h1>
              <p className="hero__subtitle">
                O melhor bot para versão 8.6. Conta com funções como: healing, aimbot, hotkeys, custom, cavebot, navigation, targeting, proxy e icons.
              </p>
              <ul>
                <li>Sem erro dos atalhos lighthack e ocultar (shift + F11 ou shift+F12);</li>
                <li>Navigation exige Windows 7 ou VPS/VM para funcionar;</li>
                <li>Instalador já ativado, apenas instalar e usar.</li>
                <li>
                  <strong>Aprenda a baixar e instalar:</strong><br />
                  <a href="/docs/tutoriais/como-baixar-e-instalar-o-elfBot-ng" rel="noopener noreferrer">
                    Como baixar e instalar o ElfBot NG
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Botão de Download */}
          <div className="text--center margin-vert--lg">
            <a
              href="/downloads/elfbot-ng-4.5.9-setup.exe"
              className="button button--primary button--lg"
            >
              BAIXAR
            </a>
          </div>

          {/* Aviso de política */}
          <p className="text--center" style={{ fontSize: '0.95rem' }}>
            Ao baixar qualquer arquivo, você concorda com a <a href="/legal/privacidade">política de privacidade</a> e os <a href="/legal/termos">termos de uso</a>.
          </p>
        </div>
      </main>
    </Layout>
  );
}
