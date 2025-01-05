import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type InnerOrder = {
  direction: OrderDirection;
  /** Priority of current field */
  priority: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteFromUsers: Array<UsersItem>;
  insertIntoUsers: Array<UsersItem>;
  insertIntoUsersSingle?: Maybe<UsersItem>;
  updateUsers: Array<UsersItem>;
};


export type MutationDeleteFromUsersArgs = {
  where?: InputMaybe<UsersFilters>;
};


export type MutationInsertIntoUsersArgs = {
  values: Array<UsersInsertInput>;
};


export type MutationInsertIntoUsersSingleArgs = {
  values: UsersInsertInput;
};


export type MutationUpdateUsersArgs = {
  set: UsersUpdateInput;
  where?: InputMaybe<UsersFilters>;
};

/** Order by direction */
export enum OrderDirection {
  /** Ascending order */
  Asc = 'asc',
  /** Descending order */
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  users: Array<UsersSelectItem>;
  usersSingle?: Maybe<UsersSelectItem>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UsersOrderBy>;
  where?: InputMaybe<UsersFilters>;
};


export type QueryUsersSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UsersOrderBy>;
  where?: InputMaybe<UsersFilters>;
};

export type UsersAgeFilters = {
  OR?: InputMaybe<Array<UsersAgefiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersAgefiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersFilters = {
  OR?: InputMaybe<Array<UsersFiltersOr>>;
  age?: InputMaybe<UsersAgeFilters>;
  id?: InputMaybe<UsersIdFilters>;
  name?: InputMaybe<UsersNameFilters>;
};

export type UsersFiltersOr = {
  age?: InputMaybe<UsersAgeFilters>;
  id?: InputMaybe<UsersIdFilters>;
  name?: InputMaybe<UsersNameFilters>;
};

export type UsersIdFilters = {
  OR?: InputMaybe<Array<UsersIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersInsertInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UsersItem = {
  __typename?: 'UsersItem';
  age?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type UsersNameFilters = {
  OR?: InputMaybe<Array<UsersNamefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersNamefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UsersOrderBy = {
  age?: InputMaybe<InnerOrder>;
  id?: InputMaybe<InnerOrder>;
  name?: InputMaybe<InnerOrder>;
};

export type UsersSelectItem = {
  __typename?: 'UsersSelectItem';
  age?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type UsersUpdateInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  InnerOrder: InnerOrder;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UsersAgeFilters: UsersAgeFilters;
  UsersAgefiltersOr: UsersAgefiltersOr;
  UsersFilters: UsersFilters;
  UsersFiltersOr: UsersFiltersOr;
  UsersIdFilters: UsersIdFilters;
  UsersIdfiltersOr: UsersIdfiltersOr;
  UsersInsertInput: UsersInsertInput;
  UsersItem: ResolverTypeWrapper<UsersItem>;
  UsersNameFilters: UsersNameFilters;
  UsersNamefiltersOr: UsersNamefiltersOr;
  UsersOrderBy: UsersOrderBy;
  UsersSelectItem: ResolverTypeWrapper<UsersSelectItem>;
  UsersUpdateInput: UsersUpdateInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  InnerOrder: InnerOrder;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  UsersAgeFilters: UsersAgeFilters;
  UsersAgefiltersOr: UsersAgefiltersOr;
  UsersFilters: UsersFilters;
  UsersFiltersOr: UsersFiltersOr;
  UsersIdFilters: UsersIdFilters;
  UsersIdfiltersOr: UsersIdfiltersOr;
  UsersInsertInput: UsersInsertInput;
  UsersItem: UsersItem;
  UsersNameFilters: UsersNameFilters;
  UsersNamefiltersOr: UsersNamefiltersOr;
  UsersOrderBy: UsersOrderBy;
  UsersSelectItem: UsersSelectItem;
  UsersUpdateInput: UsersUpdateInput;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  deleteFromUsers?: Resolver<Array<ResolversTypes['UsersItem']>, ParentType, ContextType, Partial<MutationDeleteFromUsersArgs>>;
  insertIntoUsers?: Resolver<Array<ResolversTypes['UsersItem']>, ParentType, ContextType, RequireFields<MutationInsertIntoUsersArgs, 'values'>>;
  insertIntoUsersSingle?: Resolver<Maybe<ResolversTypes['UsersItem']>, ParentType, ContextType, RequireFields<MutationInsertIntoUsersSingleArgs, 'values'>>;
  updateUsers?: Resolver<Array<ResolversTypes['UsersItem']>, ParentType, ContextType, RequireFields<MutationUpdateUsersArgs, 'set'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  users?: Resolver<Array<ResolversTypes['UsersSelectItem']>, ParentType, ContextType, Partial<QueryUsersArgs>>;
  usersSingle?: Resolver<Maybe<ResolversTypes['UsersSelectItem']>, ParentType, ContextType, Partial<QueryUsersSingleArgs>>;
};

export type UsersItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersItem'] = ResolversParentTypes['UsersItem']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersSelectItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersSelectItem'] = ResolversParentTypes['UsersSelectItem']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UsersItem?: UsersItemResolvers<ContextType>;
  UsersSelectItem?: UsersSelectItemResolvers<ContextType>;
};


export type UsersQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UsersOrderBy>;
  where?: InputMaybe<UsersFilters>;
}>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'UsersSelectItem', id: number, name?: string | null, age?: number | null }> };

export type UsersSingleQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UsersOrderBy>;
  where?: InputMaybe<UsersFilters>;
}>;


export type UsersSingleQuery = { __typename?: 'Query', usersSingle?: { __typename?: 'UsersSelectItem', id: number, name?: string | null, age?: number | null } | null };

export type InsertIntoUsersMutationVariables = Exact<{
  values: Array<UsersInsertInput> | UsersInsertInput;
}>;


export type InsertIntoUsersMutation = { __typename?: 'Mutation', insertIntoUsers: Array<{ __typename?: 'UsersItem', id: number, name?: string | null, age?: number | null }> };

export type InsertIntoUsersSingleMutationVariables = Exact<{
  values: UsersInsertInput;
}>;


export type InsertIntoUsersSingleMutation = { __typename?: 'Mutation', insertIntoUsersSingle?: { __typename?: 'UsersItem', id: number, name?: string | null, age?: number | null } | null };

export type UpdateUsersMutationVariables = Exact<{
  set: UsersUpdateInput;
  where?: InputMaybe<UsersFilters>;
}>;


export type UpdateUsersMutation = { __typename?: 'Mutation', updateUsers: Array<{ __typename?: 'UsersItem', id: number, name?: string | null, age?: number | null }> };

export type DeleteFromUsersMutationVariables = Exact<{
  where?: InputMaybe<UsersFilters>;
}>;


export type DeleteFromUsersMutation = { __typename?: 'Mutation', deleteFromUsers: Array<{ __typename?: 'UsersItem', id: number, name?: string | null, age?: number | null }> };


export const Users = gql`
    query users($offset: Int, $limit: Int, $orderBy: UsersOrderBy, $where: UsersFilters) {
  users(offset: $offset, limit: $limit, orderBy: $orderBy, where: $where) {
    id
    name
    age
  }
}
    `;
export const UsersSingle = gql`
    query usersSingle($offset: Int, $orderBy: UsersOrderBy, $where: UsersFilters) {
  usersSingle(offset: $offset, orderBy: $orderBy, where: $where) {
    id
    name
    age
  }
}
    `;
export const InsertIntoUsers = gql`
    mutation insertIntoUsers($values: [UsersInsertInput!]!) {
  insertIntoUsers(values: $values) {
    id
    name
    age
  }
}
    `;
export const InsertIntoUsersSingle = gql`
    mutation insertIntoUsersSingle($values: UsersInsertInput!) {
  insertIntoUsersSingle(values: $values) {
    id
    name
    age
  }
}
    `;
export const UpdateUsers = gql`
    mutation updateUsers($set: UsersUpdateInput!, $where: UsersFilters) {
  updateUsers(set: $set, where: $where) {
    id
    name
    age
  }
}
    `;
export const DeleteFromUsers = gql`
    mutation deleteFromUsers($where: UsersFilters) {
  deleteFromUsers(where: $where) {
    id
    name
    age
  }
}
    `;


export const UsersDocument = `
    query users($offset: Int, $limit: Int, $orderBy: UsersOrderBy, $where: UsersFilters) {
  users(offset: $offset, limit: $limit, orderBy: $orderBy, where: $where) {
    id
    name
    age
  }
}
    `;

export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: UsersQueryVariables,
      options?: UseQueryOptions<UsersQuery, TError, TData>
    ) => {
    
    return useQuery<UsersQuery, TError, TData>(
      variables === undefined ? ['users'] : ['users', variables],
      fetcher<UsersQuery, UsersQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UsersDocument, variables),
      options
    )};

export const UsersSingleDocument = `
    query usersSingle($offset: Int, $orderBy: UsersOrderBy, $where: UsersFilters) {
  usersSingle(offset: $offset, orderBy: $orderBy, where: $where) {
    id
    name
    age
  }
}
    `;

export const useUsersSingleQuery = <
      TData = UsersSingleQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: UsersSingleQueryVariables,
      options?: UseQueryOptions<UsersSingleQuery, TError, TData>
    ) => {
    
    return useQuery<UsersSingleQuery, TError, TData>(
      variables === undefined ? ['usersSingle'] : ['usersSingle', variables],
      fetcher<UsersSingleQuery, UsersSingleQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UsersSingleDocument, variables),
      options
    )};

export const InsertIntoUsersDocument = `
    mutation insertIntoUsers($values: [UsersInsertInput!]!) {
  insertIntoUsers(values: $values) {
    id
    name
    age
  }
}
    `;

export const useInsertIntoUsersMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<InsertIntoUsersMutation, TError, InsertIntoUsersMutationVariables, TContext>
    ) => {
    
    return useMutation<InsertIntoUsersMutation, TError, InsertIntoUsersMutationVariables, TContext>(
      ['insertIntoUsers'],
      (variables?: InsertIntoUsersMutationVariables) => fetcher<InsertIntoUsersMutation, InsertIntoUsersMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, InsertIntoUsersDocument, variables)(),
      options
    )};

export const InsertIntoUsersSingleDocument = `
    mutation insertIntoUsersSingle($values: UsersInsertInput!) {
  insertIntoUsersSingle(values: $values) {
    id
    name
    age
  }
}
    `;

export const useInsertIntoUsersSingleMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<InsertIntoUsersSingleMutation, TError, InsertIntoUsersSingleMutationVariables, TContext>
    ) => {
    
    return useMutation<InsertIntoUsersSingleMutation, TError, InsertIntoUsersSingleMutationVariables, TContext>(
      ['insertIntoUsersSingle'],
      (variables?: InsertIntoUsersSingleMutationVariables) => fetcher<InsertIntoUsersSingleMutation, InsertIntoUsersSingleMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, InsertIntoUsersSingleDocument, variables)(),
      options
    )};

export const UpdateUsersDocument = `
    mutation updateUsers($set: UsersUpdateInput!, $where: UsersFilters) {
  updateUsers(set: $set, where: $where) {
    id
    name
    age
  }
}
    `;

export const useUpdateUsersMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<UpdateUsersMutation, TError, UpdateUsersMutationVariables, TContext>
    ) => {
    
    return useMutation<UpdateUsersMutation, TError, UpdateUsersMutationVariables, TContext>(
      ['updateUsers'],
      (variables?: UpdateUsersMutationVariables) => fetcher<UpdateUsersMutation, UpdateUsersMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UpdateUsersDocument, variables)(),
      options
    )};

export const DeleteFromUsersDocument = `
    mutation deleteFromUsers($where: UsersFilters) {
  deleteFromUsers(where: $where) {
    id
    name
    age
  }
}
    `;

export const useDeleteFromUsersMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<DeleteFromUsersMutation, TError, DeleteFromUsersMutationVariables, TContext>
    ) => {
    
    return useMutation<DeleteFromUsersMutation, TError, DeleteFromUsersMutationVariables, TContext>(
      ['deleteFromUsers'],
      (variables?: DeleteFromUsersMutationVariables) => fetcher<DeleteFromUsersMutation, DeleteFromUsersMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, DeleteFromUsersDocument, variables)(),
      options
    )};

// The file generated on: 05.01.25
