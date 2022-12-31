import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title : 'Being Wolves Store'}</title>
        <meta name='description' content='Being Wolves Store ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col justify-between'>
        <header>
          <nav>
            <Link href='/'>
              <a className='logo text-xl font-bold'>Being Wolves</a>
            </Link>
            <div>
              <Link href='/cart'>
                <a className='p-2'>Cart</a>
              </Link>
              <Link href='/login'>
                <a className='p-2'>Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>©2022-23 Being Wolves. All Rights Reserved.</footer>
      </div>
    </>
  );
}
