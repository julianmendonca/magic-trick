export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
    _eq?: Maybe<Scalars['Int']>
    _gt?: Maybe<Scalars['Int']>
    _gte?: Maybe<Scalars['Int']>
    _in?: Maybe<Array<Scalars['Int']>>
    _is_null?: Maybe<Scalars['Boolean']>
    _lt?: Maybe<Scalars['Int']>
    _lte?: Maybe<Scalars['Int']>
    _neq?: Maybe<Scalars['Int']>
    _nin?: Maybe<Array<Scalars['Int']>>
}

/** mutation root */
export type Mutation_Root = {
    __typename?: 'mutation_root'
    /** delete data from the table: "test" */
    delete_test?: Maybe<Test_Mutation_Response>
    /** delete single row from the table: "test" */
    delete_test_by_pk?: Maybe<Test>
    /** insert data into the table: "test" */
    insert_test?: Maybe<Test_Mutation_Response>
    /** insert a single row into the table: "test" */
    insert_test_one?: Maybe<Test>
    /** update data of the table: "test" */
    update_test?: Maybe<Test_Mutation_Response>
    /** update single row of the table: "test" */
    update_test_by_pk?: Maybe<Test>
}

/** mutation root */
export type Mutation_RootDelete_TestArgs = {
    where: Test_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Test_By_PkArgs = {
    id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootInsert_TestArgs = {
    objects: Array<Test_Insert_Input>
    on_conflict?: Maybe<Test_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Test_OneArgs = {
    object: Test_Insert_Input
    on_conflict?: Maybe<Test_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_TestArgs = {
    _inc?: Maybe<Test_Inc_Input>
    _set?: Maybe<Test_Set_Input>
    where: Test_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Test_By_PkArgs = {
    _inc?: Maybe<Test_Inc_Input>
    _set?: Maybe<Test_Set_Input>
    pk_columns: Test_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
    /** in ascending order, nulls last */
    Asc = 'asc',
    /** in ascending order, nulls first */
    AscNullsFirst = 'asc_nulls_first',
    /** in ascending order, nulls last */
    AscNullsLast = 'asc_nulls_last',
    /** in descending order, nulls first */
    Desc = 'desc',
    /** in descending order, nulls first */
    DescNullsFirst = 'desc_nulls_first',
    /** in descending order, nulls last */
    DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
    __typename?: 'query_root'
    /** fetch data from the table: "test" */
    test: Array<Test>
    /** fetch aggregated fields from the table: "test" */
    test_aggregate: Test_Aggregate
    /** fetch data from the table: "test" using primary key columns */
    test_by_pk?: Maybe<Test>
}

export type Query_RootTestArgs = {
    distinct_on?: Maybe<Array<Test_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Test_Order_By>>
    where?: Maybe<Test_Bool_Exp>
}

export type Query_RootTest_AggregateArgs = {
    distinct_on?: Maybe<Array<Test_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Test_Order_By>>
    where?: Maybe<Test_Bool_Exp>
}

export type Query_RootTest_By_PkArgs = {
    id: Scalars['Int']
}

export type Subscription_Root = {
    __typename?: 'subscription_root'
    /** fetch data from the table: "test" */
    test: Array<Test>
    /** fetch aggregated fields from the table: "test" */
    test_aggregate: Test_Aggregate
    /** fetch data from the table: "test" using primary key columns */
    test_by_pk?: Maybe<Test>
}

export type Subscription_RootTestArgs = {
    distinct_on?: Maybe<Array<Test_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Test_Order_By>>
    where?: Maybe<Test_Bool_Exp>
}

export type Subscription_RootTest_AggregateArgs = {
    distinct_on?: Maybe<Array<Test_Select_Column>>
    limit?: Maybe<Scalars['Int']>
    offset?: Maybe<Scalars['Int']>
    order_by?: Maybe<Array<Test_Order_By>>
    where?: Maybe<Test_Bool_Exp>
}

export type Subscription_RootTest_By_PkArgs = {
    id: Scalars['Int']
}

/** columns and relationships of "test" */
export type Test = {
    __typename?: 'test'
    id: Scalars['Int']
}

/** aggregated selection of "test" */
export type Test_Aggregate = {
    __typename?: 'test_aggregate'
    aggregate?: Maybe<Test_Aggregate_Fields>
    nodes: Array<Test>
}

/** aggregate fields of "test" */
export type Test_Aggregate_Fields = {
    __typename?: 'test_aggregate_fields'
    avg?: Maybe<Test_Avg_Fields>
    count: Scalars['Int']
    max?: Maybe<Test_Max_Fields>
    min?: Maybe<Test_Min_Fields>
    stddev?: Maybe<Test_Stddev_Fields>
    stddev_pop?: Maybe<Test_Stddev_Pop_Fields>
    stddev_samp?: Maybe<Test_Stddev_Samp_Fields>
    sum?: Maybe<Test_Sum_Fields>
    var_pop?: Maybe<Test_Var_Pop_Fields>
    var_samp?: Maybe<Test_Var_Samp_Fields>
    variance?: Maybe<Test_Variance_Fields>
}

/** aggregate fields of "test" */
export type Test_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Test_Select_Column>>
    distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Test_Avg_Fields = {
    __typename?: 'test_avg_fields'
    id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "test". All fields are combined with a logical 'AND'. */
export type Test_Bool_Exp = {
    _and?: Maybe<Array<Test_Bool_Exp>>
    _not?: Maybe<Test_Bool_Exp>
    _or?: Maybe<Array<Test_Bool_Exp>>
    id?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "test" */
export enum Test_Constraint {
    /** unique or primary key constraint */
    TestPkey = 'test_pkey',
}

/** input type for incrementing numeric columns in table "test" */
export type Test_Inc_Input = {
    id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "test" */
export type Test_Insert_Input = {
    id?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Test_Max_Fields = {
    __typename?: 'test_max_fields'
    id?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type Test_Min_Fields = {
    __typename?: 'test_min_fields'
    id?: Maybe<Scalars['Int']>
}

/** response of any mutation on the table "test" */
export type Test_Mutation_Response = {
    __typename?: 'test_mutation_response'
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: Array<Test>
}

/** on conflict condition type for table "test" */
export type Test_On_Conflict = {
    constraint: Test_Constraint
    update_columns?: Array<Test_Update_Column>
    where?: Maybe<Test_Bool_Exp>
}

/** Ordering options when selecting data from "test". */
export type Test_Order_By = {
    id?: Maybe<Order_By>
}

/** primary key columns input for table: test */
export type Test_Pk_Columns_Input = {
    id: Scalars['Int']
}

/** select columns of table "test" */
export enum Test_Select_Column {
    /** column name */
    Id = 'id',
}

/** input type for updating data in table "test" */
export type Test_Set_Input = {
    id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Test_Stddev_Fields = {
    __typename?: 'test_stddev_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Test_Stddev_Pop_Fields = {
    __typename?: 'test_stddev_pop_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Test_Stddev_Samp_Fields = {
    __typename?: 'test_stddev_samp_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Test_Sum_Fields = {
    __typename?: 'test_sum_fields'
    id?: Maybe<Scalars['Int']>
}

/** update columns of table "test" */
export enum Test_Update_Column {
    /** column name */
    Id = 'id',
}

/** aggregate var_pop on columns */
export type Test_Var_Pop_Fields = {
    __typename?: 'test_var_pop_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Test_Var_Samp_Fields = {
    __typename?: 'test_var_samp_fields'
    id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Test_Variance_Fields = {
    __typename?: 'test_variance_fields'
    id?: Maybe<Scalars['Float']>
}
