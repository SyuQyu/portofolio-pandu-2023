import clsx from 'clsx';
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
      </body>
    </html>
  )
}
