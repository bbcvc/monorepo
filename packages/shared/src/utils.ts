// Source: https://github.com/shadcn-ui/ui/blob/main/templates/monorepo-next/packages/ui/src/lib/utils.ts

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
