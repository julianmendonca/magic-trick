import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}

export const InsertUserDocument = gql`
    mutation InsertUser(
        $googleId: String!
        $firstName: String
        $lastName: String
        $email: String
    ) {
        insert_user_one(
            object: {
                email: $email
                first_name: $firstName
                google_id: $googleId
                last_name: $lastName
            }
        ) {
            email
            first_name
            google_id
            id
            last_name
        }
    }
`
export type InsertUserMutationFn = Apollo.MutationFunction<
    Types.InsertUserMutation,
    Types.InsertUserMutationVariables
>

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      googleId: // value for 'googleId'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useInsertUserMutation(
    baseOptions?: Apollo.MutationHookOptions<
        Types.InsertUserMutation,
        Types.InsertUserMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<
        Types.InsertUserMutation,
        Types.InsertUserMutationVariables
    >(InsertUserDocument, options)
}
export type InsertUserMutationHookResult = ReturnType<
    typeof useInsertUserMutation
>
export type InsertUserMutationResult =
    Apollo.MutationResult<Types.InsertUserMutation>
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<
    Types.InsertUserMutation,
    Types.InsertUserMutationVariables
>
export const GetUSerByGoogleIdDocument = gql`
    query GetUSerByGoogleId($googleId: String!) {
        user(where: { google_id: { _eq: $googleId } }) {
            email
            id
            first_name
            last_name
        }
    }
`

/**
 * __useGetUSerByGoogleIdQuery__
 *
 * To run a query within a React component, call `useGetUSerByGoogleIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUSerByGoogleIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUSerByGoogleIdQuery({
 *   variables: {
 *      googleId: // value for 'googleId'
 *   },
 * });
 */
export function useGetUSerByGoogleIdQuery(
    baseOptions: Apollo.QueryHookOptions<
        Types.GetUSerByGoogleIdQuery,
        Types.GetUSerByGoogleIdQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<
        Types.GetUSerByGoogleIdQuery,
        Types.GetUSerByGoogleIdQueryVariables
    >(GetUSerByGoogleIdDocument, options)
}
export function useGetUSerByGoogleIdLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        Types.GetUSerByGoogleIdQuery,
        Types.GetUSerByGoogleIdQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<
        Types.GetUSerByGoogleIdQuery,
        Types.GetUSerByGoogleIdQueryVariables
    >(GetUSerByGoogleIdDocument, options)
}
export type GetUSerByGoogleIdQueryHookResult = ReturnType<
    typeof useGetUSerByGoogleIdQuery
>
export type GetUSerByGoogleIdLazyQueryHookResult = ReturnType<
    typeof useGetUSerByGoogleIdLazyQuery
>
export type GetUSerByGoogleIdQueryResult = Apollo.QueryResult<
    Types.GetUSerByGoogleIdQuery,
    Types.GetUSerByGoogleIdQueryVariables
>
export function refetchGetUSerByGoogleIdQuery(
    variables?: Types.GetUSerByGoogleIdQueryVariables
) {
    return { query: GetUSerByGoogleIdDocument, variables: variables }
}
