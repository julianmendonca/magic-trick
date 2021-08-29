import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}

export const GetTestsDocument = gql`
    query GetTests {
        test {
            id
        }
    }
`

/**
 * __useGetTestsQuery__
 *
 * To run a query within a React component, call `useGetTestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTestsQuery(
    baseOptions?: Apollo.QueryHookOptions<
        Types.GetTestsQuery,
        Types.GetTestsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<Types.GetTestsQuery, Types.GetTestsQueryVariables>(
        GetTestsDocument,
        options
    )
}
export function useGetTestsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        Types.GetTestsQuery,
        Types.GetTestsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<
        Types.GetTestsQuery,
        Types.GetTestsQueryVariables
    >(GetTestsDocument, options)
}
export type GetTestsQueryHookResult = ReturnType<typeof useGetTestsQuery>
export type GetTestsLazyQueryHookResult = ReturnType<
    typeof useGetTestsLazyQuery
>
export type GetTestsQueryResult = Apollo.QueryResult<
    Types.GetTestsQuery,
    Types.GetTestsQueryVariables
>
export function refetchGetTestsQuery(variables?: Types.GetTestsQueryVariables) {
    return { query: GetTestsDocument, variables: variables }
}
