import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/build/lib/devtools";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 6000,
            onError: error => console.log(error)
        }
    }
});

export const QueryProvider = ({children}) => {
    return <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools position={'bottom-left'} />
        {children}
    </QueryClientProvider>
}