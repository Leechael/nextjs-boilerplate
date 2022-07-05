import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Provider as JotaiProvider } from 'jotai'
import { queryClientAtom } from 'jotai/query'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

export type StateProviderProps =
  { children: ReactNode}
  & ComponentPropsWithoutRef<typeof JotaiProvider>;

const queryClient = new QueryClient()

export default function StateProvider({ children, initialValues, scope }: StateProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider
        initialValues={[
          ...initialValues || [],
          [queryClientAtom, queryClient],
        ]}
        scope={scope}
      >
        {children}
        <ReactQueryDevtools />
      </JotaiProvider>
    </QueryClientProvider>
  )
}
