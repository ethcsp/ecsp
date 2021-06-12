import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import './web-layout.module.scss';

/* eslint-disable-next-line */
export interface WebLayoutProps {}

const WebLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default WebLayout;
