import React, { useState } from 'react';
import styles from './scriptsmenu.module.css';

export default function ScriptsMenu() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  return (
    <nav className={styles.menuNav}>
      <ul className={styles.menuList}>
        <li
          className={styles.menuItem}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => { setOpen(false); setSubOpen(false); }}
        >
          <button className={styles.menuButton}>
            Scripts <span style={{fontSize: 12}}>▼</span>
          </button>
          {open && (
            <ul className={styles.dropdown}>
              <li><a href="/cavebots-privados">Cavebots Privados</a></li>
              <li><a href="/pacotes">Pacotes</a></li>
              <li
                className={styles.menuItem}
                onMouseEnter={() => setSubOpen(true)}
                onMouseLeave={() => setSubOpen(false)}
                style={{position: 'relative'}}
              >
                <button className={styles.menuButton}>
                  Cavebot Gratuito <span style={{fontSize: 12}}>▶</span>
                </button>
                {subOpen && (
                  <ul className={styles.subDropdown}>
                    <li><a href="/cavebot-gratuito/kaldrox">Kaldrox</a></li>
                  </ul>
                )}
              </li>
              <li><a href="/custom-icon">Custom Icon</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
