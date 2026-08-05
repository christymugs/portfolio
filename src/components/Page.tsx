import type { ReactNode } from 'react'

export default function Page({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">{children}</div>
}
