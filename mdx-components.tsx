import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className='text-4xl p-2 font-extrabold'>{children}</h1>,
    h2: ({ children }) => <h2 className='text-xl p-2 font-bold'>{children}</h2>,
    h3: ({ children }) => <h3 className='text-xl p-2 font-semibold'>{children}</h3>,
    p: ({ children }) => <p className=''>{children}</p>,


    ...components,
  }
}