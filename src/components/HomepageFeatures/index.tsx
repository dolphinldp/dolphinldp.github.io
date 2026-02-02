import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (
      <a href="docs/assign/week01/">
        <div
          className="feature-item"
          style={{
            backgroundImage: `url(${require('@site/static/img/week01/doc-site.jpg').default})`,
          }}
        >
          <div className="feature-text">Week 1</div>
        </div>
      </a>
    ),
  },
  

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        {title}
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
