import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return <>
    <Head>
      <title>{title ? title : 'Being Wolves Store'}</title>
      <meta name='description' content='Being Wolves Store ' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <div className='flex flex-col justify-between'>
      <header>
        <nav>
          <Link href='/' className='logo text-xl font-bold'>
            Being Wolves
          </Link>
          <div>
            <Link href='/cart' className='p-2'>
              Cart
            </Link>
            <Link href='/login' className='p-2'>
              Login
            </Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer>©2022-23 Being Wolves. All Rights Reserved.</footer>
    </div>
  </>;
}
