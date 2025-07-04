import React from 'react';
import Layout from '@theme/Layout';
import styles from './contatos.module.css';

export default function Contatos() {
  return (
    <Layout title="Contatos" description="Entre em contato conosco via WhatsApp ou Telegram">
      <main className="container margin-vert--lg">
        <div className="text--center">
          <h1 className="hero__title">Contatos</h1>
          <p className="margin-bottom--lg">
            Clicando nos ícones abaixo, você será direcionado para nossos canais de comunicação.
          </p>

          <div className={styles.cardContainer}>
            {/* WhatsApp */}
            <a
              href="https://wa.me/5582999464655"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <img src="img/social/whatsapp.png" alt="WhatsApp" />
              <p><strong><u>+55 82 9 9946-4655</u></strong></p>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/jobscripts"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <img src="img/social/telegram.png" alt="Telegram" />
              <p><strong><u>@jobscripts</u></strong></p>
            </a>

            {/* Gmail */}
            <a
              href="mailto:suporte@jobscripts.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <img src="img/social/gmail.png" alt="Gmail" />
              <p><strong><u>suporte@jobscripts.com.br</u></strong></p>
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
