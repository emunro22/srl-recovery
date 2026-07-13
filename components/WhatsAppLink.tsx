'use client'

import { track } from '@vercel/analytics'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

const WHATSAPP_BASE_URL = 'https://wa.me/447776356556'

interface WhatsAppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  source: string
  children: ReactNode
}

export default function WhatsAppLink({ source, href, onClick, children, ...rest }: WhatsAppLinkProps) {
  return (
    <a
      href={href ?? WHATSAPP_BASE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        track('WhatsApp Click', { source })
        onClick?.(e)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
