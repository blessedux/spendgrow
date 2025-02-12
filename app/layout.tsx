import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { cn } from '../lib/utils'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SpendGrow',
  description: 'A Stacks-based commerce protocol',
}

const Layout: React.FC = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.className
        )}
      >
        <div className="layout-container">
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;
