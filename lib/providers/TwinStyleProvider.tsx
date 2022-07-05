import type { ReactNode } from 'react'

import React from 'react'
import { cache } from '@emotion/css'
import { Global, CacheProvider } from '@emotion/react'
import tw, { css, theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.indigo.500`,
    ...tw`antialiased`,
  },
})

export interface TwinStyleProviderProps {
  children: ReactNode;
}

export default function TwinStyleProvider({ children }: TwinStyleProviderProps) {
  return (
    <CacheProvider value={cache}>
        <BaseStyles />
        <Global styles={customStyles} />
        {children}
    </CacheProvider>
  )
}