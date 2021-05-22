import React from 'react';
import Head from 'next/head';
import {getSession} from 'next-auth/client';

// This page should be secured
const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div>
      </div>
    </>
  )
};

export default Dashboard;

export async function getServerSideProps(context) {
  const {res} = context;
  const session = await getSession(context);

  if (!session) {
    res.writehead(302, {
      Location: '/',
    });

    return res.end();
  }

  return {
    props: {session}
  }
}