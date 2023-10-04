import clsx from 'clsx';
import Script from 'next/script'
import '@/styles/index.scss';
import { POPPINS, ROBOTO_MONO } from '@/contants/fonts';

import DefaultLayout from '@/components/defaultLayout';
export const metadata = {
  title: 'Ndu Portofolio',
  description: 'Welcome to my portofolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx('scroll-smooth', POPPINS.variable, ROBOTO_MONO.variable)}>
        <DefaultLayout>{children}</DefaultLayout>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HVM4ZSN3ZG" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-HVM4ZSN3ZG');
        `}
        </Script>
      </body>
    </html>
  )
}
