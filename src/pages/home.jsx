import React from 'react';

import { JumbotronContainer } from '../containers/jumbotron';
import { FaqContainer } from '../containers/faq';
import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
