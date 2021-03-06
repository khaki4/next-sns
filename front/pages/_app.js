import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const NextSns = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Next SNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js"></script>
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  )
}

export default NextSns;