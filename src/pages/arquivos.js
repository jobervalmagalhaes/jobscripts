// src/pages/elfbot-ng.js
import React from 'react';
import Layout from '@theme/Layout';

export default function ElfbotNG() {
  return (
    <Layout
      title="Arquivos"
      description="O melhor bot para versão 8.6. Funções: healing, aimbot, hotkeys, cavebot, navigation, targeting, proxy e icons."
    >
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '2rem 1rem',
        fontFamily: 'inherit'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Imagem do bot */}
          <div style={{ flex: '1 1 320px', minWidth: 320, maxWidth: 420, textAlign: 'center' }}>
            <img
              src="/img/elfbot/elfbotng.png"
              alt="ElfBot NG 4.5.9 Screenshot"
              style={{
                maxWidth: '100%',
                borderRadius: 6,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
            />
          </div>

          {/* Conteúdo textual */}
          <div style={{ flex: '2 1 400px', minWidth: 320 }}>
            <h1 style={{
              fontWeight: 700,
              fontSize: '3rem',
              marginBottom: '1.5rem',
              letterSpacing: '0.01em'
            }}>
              ElfBot NG 4.5.9
            </h1>
            <p style={{ fontSize: '1.15rem', marginBottom: '1rem' }}>
              O melhor bot para versão 8.6. Conta com funções como: healing, aimbot, hotkeys, custom, cavebot, navigation, targeting, proxy e icons.
            </p>
            <ul style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              <li>Sem erro dos atalhos lighthack e ocultar (shift + F11 ou shift+F12);</li>
              <li>Para usar o navigation você irá precisar de uma versão do Windows 7 ou hospedar o servidor navigation em uma VPS/VM;</li>
              <li>Instalador já ativado, apenas instalar e usar.</li>
              <li>
                <strong>
                  Aprenda a baixar e instalar corretamente através deste vídeo:
                </strong>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=OcCh-lVQl6A"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline' }}
                >
                  https://www.youtube.com/watch?v=OcCh-lVQl6A
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Botão BAIXAR */}
        <div style={{ textAlign: 'center', margin: '3rem 0 1rem' }}>
          <a
            href="#"
            className="button button--primary button--lg"
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              letterSpacing: '0.03em',
              padding: '1rem 4rem',
              borderBottom: '4px solid #222',
              textDecoration: 'underline'
            }}
          >
            BAIXAR
          </a>
        </div>

        {/* Aviso de política */}
        <p style={{
          textAlign: 'center',
          fontSize: '0.95rem',
          color: '#666',
          marginTop: '2.5rem'
        }}>
          Ao baixar qualquer arquivo disponibilizado no site, você concorda com a <a href="/legal/privacidade" style={{ textDecoration: 'underline' }}>política de privacidade</a>, bem como com os <a href="/legal/termos" style={{ textDecoration: 'underline' }}>termos de uso</a>.
        </p>
      </div>
    </Layout>
  );
}
