import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Signup = () => {
  return (
    <>
      <Head>
        <title>Next SNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js"/>
      </Head>
      <AppLayout>
        <div>
          Signup
        </div>
      </AppLayout>
    </>
  );
};

export default Signup;