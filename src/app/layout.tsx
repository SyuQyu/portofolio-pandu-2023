import clsx from 'clsx';
import Script from 'next/script';
import { POPPINS, ROBOTO_MONO } from '@/contants/fonts';
import DefaultLayout from '@/components/defaultLayout';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Pandu Utomo - Full-stack Developer & 3D Artist',
  description: 'Computer Science student specializing in full-stack web development and 3D environment design. Experienced with React.js, Next.js, Node.js, and Blender 3D.',
  keywords: 'Full-stack Developer, 3D Artist, React.js, Next.js, Node.js, Blender, Computer Science, Web Development',
  authors: [{ name: 'Pandu Utomo' }],
  creator: 'Pandu Utomo',
  openGraph: {
    title: 'Pandu Utomo - Full-stack Developer & 3D Artist',
    description: 'Computer Science student specializing in full-stack web development and 3D environment design.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        <ThemeProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </ThemeProvider>
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

