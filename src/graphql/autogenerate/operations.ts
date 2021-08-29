import * as Types from './schemas'

export type GetTestsQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetTestsQuery = {
    __typename?: 'query_root'
    test: Array<{ __typename?: 'test'; id: number }>
}
