import React from 'react';

import Block from './block';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Block id="alpha" className="block" title="Alpha" subtitle="First block"/>
        <Block id="beta" className="block" title="Beta" subtitle="Second block"/>
        <Block id="gamma" className="block" title="Gamma" subtitle="Third block"/>
        <Block id="delta" className="block" title="Delta" subtitle="Fourth block"/>
        <Block id="epsilon" className="block" title="Epsilon" subtitle="Fifth block"/>
        <Block id="zeta" className="block" title="Zeta" subtitle="Sixth block"/>
        <Block id="eta" className="block" title="Eta" subtitle="Seventh block"/>
        <Block id="theta" className="block" title="Theta" subtitle="Eight block"/>
      </div>
    );
  }
}
