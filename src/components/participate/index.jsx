import React from 'react';

import Headline from '../text/headline';
import Share from '../share';

import EnvelopeIcon from '../../../static/icons/envelope.svg';
import FacebookIcon from '../../../static/icons/facebook-square.svg';
import TwitterIcon from '../../../static/icons/twitter.svg';

import './style.scss';

export default ({ title, intro, children, share = true, ...rest }) => (
  <aside className="participate" {...rest}>
    <div className="participate__box">
      <h2 className="participate__title">{title}</h2>

      {intro && <p className="participate__intro">{intro}</p>}

      {children}
    </div>

    {share && (
      <>
        <Headline level="3" levelStyle="4">
          Mach die Kampagne bekannter!
        </Headline>

        <span className="participate__share-container">
          <Share label="Tweet" href="https://twitter.com" Icon={TwitterIcon} />
        </span>

        <span className="participate__share-container">
          <Share
            label="Facebook"
            href="https://facebook.com"
            Icon={FacebookIcon}
          />
        </span>

        <span className="participate__share-container">
          <Share
            label="Email"
            href="mailto:gustav@zoff-kollektiv.net"
            Icon={EnvelopeIcon}
          />
        </span>
      </>
    )}
  </aside>
);
