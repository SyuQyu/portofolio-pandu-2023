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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PD7JJF8Z');
      `}
      </Script>
      <body className={clsx('scroll-smooth', POPPINS.variable, ROBOTO_MONO.variable)}>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PD7JJF8Z"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
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
