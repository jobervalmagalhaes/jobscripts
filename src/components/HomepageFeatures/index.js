import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '100% AFK',
    imgSrc: '/img/100afk.png',
    description: (
      <>
        Script profissional e avançado com funções personalizadas, como treiners, caça PK, refill, loot, banco... Hotkeys, icons, tudo para ElfBot NG.
      </>
    ),
  },
  {
    title: 'Atualizado e melhorado',
    imgSrc: '/img/dev.png',
    description: (
      <>
        Novas funções, melhorias e correções de bugs de acordo com o feedback e dicas dos usuários.
      </>
    ),
  },
  {
    title: 'Suporte contínuo',
    imgSrc: '/img/suporte.png',
    description: (
      <>
        Suporte eficiente de qualidade, com explicações, acesso remoto, chamadas, cast e etc.
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={imgSrc} alt={title}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
