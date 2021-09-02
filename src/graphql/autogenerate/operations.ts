import * as Types from './schemas'

export type InsertUserMutationVariables = Types.Exact<{
    googleId: Types.Scalars['String']
    firstName?: Types.Maybe<Types.Scalars['String']>
    lastName?: Types.Maybe<Types.Scalars['String']>
    email?: Types.Maybe<Types.Scalars['String']>
}>

export type InsertUserMutation = {
    __typename?: 'mutation_root'
    insert_user_one?: Types.Maybe<{
        __typename?: 'user'
        email?: Types.Maybe<string>
        first_name: string
        google_id: string
        id: number
        last_name: string
    }>
}

export type GetUSerByGoogleIdQueryVariables = Types.Exact<{
    googleId: Types.Scalars['String']
}>

export type GetUSerByGoogleIdQuery = {
    __typename?: 'query_root'
    user: Array<{
        __typename?: 'user'
        email?: Types.Maybe<string>
        id: number
        first_name: string
        last_name: string
    }>
}
