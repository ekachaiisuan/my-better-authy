import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getValidDomains() {
  const domains = ['gmail.com','coj.go.th']
  if (process.env.NODE_ENV === 'development'){
    domains.push('example.com')
  }
  return domains
}

export function normalizeName(name:String){
  return name
  .trim()
  .replace(/\s+/g," ")
  .replace(/[^a-zA-Z\s'-]/g,"")
  .replace(/\b\w/g,(char)=>char.toLocaleUpperCase())
}