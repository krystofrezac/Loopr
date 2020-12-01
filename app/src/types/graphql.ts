/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserImportTableCreateUserMutation
// ====================================================

export interface UserImportTableCreateUserMutation_createUser_user {
  __typename: "createUserPayloadData";
  id: string;
}

export interface UserImportTableCreateUserMutation_createUser {
  __typename: "createUserPayload";
  user: UserImportTableCreateUserMutation_createUser_user | null;
}

export interface UserImportTableCreateUserMutation {
  /**
   * Creates a User.
   */
  createUser: UserImportTableCreateUserMutation_createUser | null;
}

export interface UserImportTableCreateUserMutationVariables {
  input: createUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserImportTableAclRolesQuery
// ====================================================

export interface UserImportTableAclRolesQuery_aclRoles {
  __typename: "AclRoleCollection";
  id: string;
  /**
   * Example format: ROLE_ADMIN.
   * Must start with 'ROLE_' and name cant be longer than 20 letters.
   * (regex: ^ROLE_[A-Z]{1,20}$/m)
   */
  name: string;
}

export interface UserImportTableAclRolesQuery {
  aclRoles: (UserImportTableAclRolesQuery_aclRoles | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WithPageMeUserQuery
// ====================================================

export interface WithPageMeUserQuery_meUser_role_resources {
  __typename: "AclResource";
  name: string;
}

export interface WithPageMeUserQuery_meUser_role {
  __typename: "AclRole";
  /**
   * Example format: ROLE_ADMIN.
   * Must start with 'ROLE_' and name cant be longer than 20 letters.
   * (regex: ^ROLE_[A-Z]{1,20}$/m)
   */
  name: string;
  /**
   * Must be an array IRIs (acl_resources/<uuid>) of existing resources
   */
  resources: (WithPageMeUserQuery_meUser_role_resources | null)[] | null;
}

export interface WithPageMeUserQuery_meUser {
  __typename: "User";
  id: string;
  firstname: string;
  lastname: string;
  role: WithPageMeUserQuery_meUser_role;
}

export interface WithPageMeUserQuery {
  meUser: WithPageMeUserQuery_meUser | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AclEditRoleUpdateRole
// ====================================================

export interface AclEditRoleUpdateRole_updateAclRole_aclRole {
  __typename: "AclRoleItem";
  id: string;
  /**
   * Example format: ROLE_ADMIN.
   * Must start with 'ROLE_' and name cant be longer than 20 letters.
   * (regex: ^ROLE_[A-Z]{1,20}$/m)
   */
  name: string;
}

export interface AclEditRoleUpdateRole_updateAclRole {
  __typename: "updateAclRolePayload";
  aclRole: AclEditRoleUpdateRole_updateAclRole_aclRole | null;
}

export interface AclEditRoleUpdateRole {
  /**
   * Updates a AclRole.
   */
  updateAclRole: AclEditRoleUpdateRole_updateAclRole | null;
}

export interface AclEditRoleUpdateRoleVariables {
  id: string;
  name?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AclEditRoleAclRole
// ====================================================

export interface AclEditRoleAclRole_aclRole {
  __typename: "AclRoleItem";
  id: string;
  /**
   * Example format: ROLE_ADMIN.
   * Must start with 'ROLE_' and name cant be longer than 20 letters.
   * (regex: ^ROLE_[A-Z]{1,20}$/m)
   */
  name: string;
}

export interface AclEditRoleAclRole {
  aclRole: AclEditRoleAclRole_aclRole | null;
}

export interface AclEditRoleAclRoleVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AclCreateAclRole
// ====================================================

export interface AclCreateAclRole_createAclRole_aclRole_resources {
  __typename: "AclResourceItem";
  id: string;
}

export interface AclCreateAclRole_createAclRole_aclRole {
  __typename: "AclRoleItem";
  id: string;
  /**
   * Example format: ROLE_ADMIN.
   * Must start with 'ROLE_' and name cant be longer than 20 letters.
   * (regex: ^ROLE_[A-Z]{1,20}$/m)
   */
  name: string;
  /**
   * Must be an array IRIs (acl_resources/<uuid>) of existing resources
   */
  resources: (AclCreateAclRole_createAclRole_aclRole_resources | null)[] | null;
}

export interface AclCreateAclRole_createAclRole {
  __typename: "createAclRolePayload";
  aclRole: AclCreateAclRole_createAclRole_aclRole | null;
}

export interface AclCreateAclRole {
  /**
   * Creates a AclRole.
   */
  createAclRole: AclCreateAclRole_createAclRole | null;
}

export interface AclCreateAclRoleVariables {
  input: createAclRoleInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AclUpdateAclMutation
// ====================================================

export interface AclUpdateAclMutation_updateAclRole_aclRole_resources {
  __typename: "AclResourceItem";
  id: string;
}

export interface AclUpdateAclMutation_updateAclRole_aclRole {
  __typename: "AclRoleItem";
  id: string;
  /**
   * Must be an array IRIs (acl_resources/<uuid>) of existing resources
   */
  resources: (AclUpdateAclMutation_updateAclRole_aclRole_resources | null)[] | null;
}

export interface AclUpdateAclMutation_updateAclRole {
  __typename: "updateAclRolePayload";
  aclRole: AclUpdateAclMutation_updateAclRole_aclRole | null;
}

export interface AclUpdateAclMutation {
  /**
   * Updates a AclRole.
   */
  updateAclRole: AclUpdateAclMutation_updateAclRole | null;
}

export interface AclUpdateAclMutationVariables {
  id: string;
  resources: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AclTableQuery
// ====================================================

export interface AclTableQuery_aclResources {
  __typename: "AclResourceCollection";
  id: string;
  name: string;
}

export interface AclTableQuery_aclRoles_resources {
  __typename: "AclResourceCollection";
  id: string;
}

export interface AclTableQuery_aclRoles {
  __typename: "AclRoleCollection";
  id: string;
  /**
   * Example format: ROLE_ADMIN.
   * Must start with 'ROLE_' and name cant be longer than 20 letters.
   * (regex: ^ROLE_[A-Z]{1,20}$/m)
   */
  name: string;
  /**
   * Must be an array IRIs (acl_resources/<uuid>) of existing resources
   */
  resources: (AclTableQuery_aclRoles_resources | null)[] | null;
}

export interface AclTableQuery {
  aclResources: (AclTableQuery_aclResources | null)[] | null;
  aclRoles: (AclTableQuery_aclRoles | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GroupsAddGroupMutation
// ====================================================

export interface GroupsAddGroupMutation_createGroup_group {
  __typename: "createGroupPayloadData";
  id: string;
}

export interface GroupsAddGroupMutation_createGroup {
  __typename: "createGroupPayload";
  group: GroupsAddGroupMutation_createGroup_group | null;
}

export interface GroupsAddGroupMutation {
  /**
   * Creates a Group.
   */
  createGroup: GroupsAddGroupMutation_createGroup | null;
}

export interface GroupsAddGroupMutationVariables {
  input: createGroupInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GroupsUpdateGroupMutation
// ====================================================

export interface GroupsUpdateGroupMutation_updateGroup_group {
  __typename: "updateGroupPayloadData";
  id: string;
  year: number | null;
  section: string | null;
}

export interface GroupsUpdateGroupMutation_updateGroup {
  __typename: "updateGroupPayload";
  group: GroupsUpdateGroupMutation_updateGroup_group | null;
}

export interface GroupsUpdateGroupMutation {
  /**
   * Updates a Group.
   */
  updateGroup: GroupsUpdateGroupMutation_updateGroup | null;
}

export interface GroupsUpdateGroupMutationVariables {
  input: updateGroupInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GroupsGroupQuery
// ====================================================

export interface GroupsGroupQuery_group_users_edges_node {
  __typename: "UserItem";
  id: string;
  firstname: string;
  lastname: string;
}

export interface GroupsGroupQuery_group_users_edges {
  __typename: "UserItemEdge";
  node: GroupsGroupQuery_group_users_edges_node | null;
  cursor: string;
}

export interface GroupsGroupQuery_group_users {
  __typename: "UserItemConnection";
  edges: (GroupsGroupQuery_group_users_edges | null)[] | null;
  totalCount: number;
}

export interface GroupsGroupQuery_group {
  __typename: "Group";
  id: string;
  users: GroupsGroupQuery_group_users | null;
}

export interface GroupsGroupQuery {
  group: GroupsGroupQuery_group | null;
}

export interface GroupsGroupQueryVariables {
  id: string;
  usersFirst?: number | null;
  usersLast?: number | null;
  usersAfter?: string | null;
  usersBefore?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GroupsGroupsQuery
// ====================================================

export interface GroupsGroupsQuery_groups_edges_node {
  __typename: "Group";
  id: string;
  year: number;
  section: string;
}

export interface GroupsGroupsQuery_groups_edges {
  __typename: "GroupEdge";
  node: GroupsGroupsQuery_groups_edges_node | null;
}

export interface GroupsGroupsQuery_groups {
  __typename: "GroupConnection";
  edges: (GroupsGroupsQuery_groups_edges | null)[] | null;
}

export interface GroupsGroupsQuery {
  groups: GroupsGroupsQuery_groups | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GroupsUsersQuery
// ====================================================

export interface GroupsUsersQuery_users_edges_node {
  __typename: "UserCollection";
  id: string;
  firstname: string;
  lastname: string;
}

export interface GroupsUsersQuery_users_edges {
  __typename: "UserCollectionEdge";
  node: GroupsUsersQuery_users_edges_node | null;
  cursor: string;
}

export interface GroupsUsersQuery_users {
  __typename: "UserCollectionConnection";
  edges: (GroupsUsersQuery_users_edges | null)[] | null;
  totalCount: number;
}

export interface GroupsUsersQuery {
  users: GroupsUsersQuery_users | null;
}

export interface GroupsUsersQueryVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LoginGetTokenQuery
// ====================================================

export interface LoginGetTokenQuery_getToken {
  __typename: "Token";
  /**
   * Use token in header like this: 'Authorization: Bearer {token}'
   */
  token: string;
}

export interface LoginGetTokenQuery {
  getToken: LoginGetTokenQuery_getToken | null;
}

export interface LoginGetTokenQueryVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LoginMeUserQuery
// ====================================================

export interface LoginMeUserQuery_meUser {
  __typename: "User";
  id: string;
  firstname: string;
  lastname: string;
}

export interface LoginMeUserQuery {
  meUser: LoginMeUserQuery_meUser | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ProfileChangePassword
// ====================================================

export interface ProfileChangePassword_changePasswordUser_user {
  __typename: "UserItem";
  id: string;
}

export interface ProfileChangePassword_changePasswordUser {
  __typename: "changePasswordUserPayload";
  user: ProfileChangePassword_changePasswordUser_user | null;
}

export interface ProfileChangePassword {
  /**
   * ChangePasswords a User.
   */
  changePasswordUser: ProfileChangePassword_changePasswordUser | null;
}

export interface ProfileChangePasswordVariables {
  input: changePasswordUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProfileUserQuery
// ====================================================

export interface ProfileUserQuery_meUser_role {
  __typename: "AclRole";
  id: string;
  /**
   * Example format: ROLE_ADMIN.
   * Must start with 'ROLE_' and name cant be longer than 20 letters.
   * (regex: ^ROLE_[A-Z]{1,20}$/m)
   */
  name: string;
}

export interface ProfileUserQuery_meUser {
  __typename: "User";
  id: string;
  /**
   * email of user
   */
  email: string;
  firstname: string;
  lastname: string;
  role: ProfileUserQuery_meUser_role;
}

export interface ProfileUserQuery {
  meUser: ProfileUserQuery_meUser | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UsersAddCsvCreateUserMutation
// ====================================================

export interface UsersAddCsvCreateUserMutation_createUser_user {
  __typename: "createUserPayloadData";
  id: string;
}

export interface UsersAddCsvCreateUserMutation_createUser {
  __typename: "createUserPayload";
  user: UsersAddCsvCreateUserMutation_createUser_user | null;
}

export interface UsersAddCsvCreateUserMutation {
  /**
   * Creates a User.
   */
  createUser: UsersAddCsvCreateUserMutation_createUser | null;
}

export interface UsersAddCsvCreateUserMutationVariables {
  input: createUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UsersAddManualCreateUserMutation
// ====================================================

export interface UsersAddManualCreateUserMutation_createUser_user {
  __typename: "createUserPayloadData";
  id: string;
}

export interface UsersAddManualCreateUserMutation_createUser {
  __typename: "createUserPayload";
  user: UsersAddManualCreateUserMutation_createUser_user | null;
}

export interface UsersAddManualCreateUserMutation {
  /**
   * Creates a User.
   */
  createUser: UsersAddManualCreateUserMutation_createUser | null;
}

export interface UsersAddManualCreateUserMutationVariables {
  input: createUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UsersAddManualUpdateUser
// ====================================================

export interface UsersAddManualUpdateUser_updateUser_user_role {
  __typename: "updateAclRoleNestedPayload";
  id: string;
  /**
   * Example format: ROLE_ADMIN.
   * Must start with 'ROLE_' and name cant be longer than 20 letters.
   * (regex: ^ROLE_[A-Z]{1,20}$/m)
   */
  name: string | null;
}

export interface UsersAddManualUpdateUser_updateUser_user {
  __typename: "updateUserPayloadData";
  firstname: string | null;
  lastname: string | null;
  /**
   * email of user
   */
  email: string | null;
  role: UsersAddManualUpdateUser_updateUser_user_role | null;
}

export interface UsersAddManualUpdateUser_updateUser {
  __typename: "updateUserPayload";
  user: UsersAddManualUpdateUser_updateUser_user | null;
}

export interface UsersAddManualUpdateUser {
  /**
   * Updates a User.
   */
  updateUser: UsersAddManualUpdateUser_updateUser | null;
}

export interface UsersAddManualUpdateUserVariables {
  input: updateUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UsersAddManualAclRolesQuery
// ====================================================

export interface UsersAddManualAclRolesQuery_aclRoles {
  __typename: "AclRoleCollection";
  id: string;
  /**
   * Example format: ROLE_ADMIN.
   * Must start with 'ROLE_' and name cant be longer than 20 letters.
   * (regex: ^ROLE_[A-Z]{1,20}$/m)
   */
  name: string;
}

export interface UsersAddManualAclRolesQuery {
  aclRoles: (UsersAddManualAclRolesQuery_aclRoles | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UsersUsersQuery
// ====================================================

export interface UsersUsersQuery_users_edges_node_role {
  __typename: "AclRoleCollection";
  id: string;
  /**
   * Example format: ROLE_ADMIN.
   * Must start with 'ROLE_' and name cant be longer than 20 letters.
   * (regex: ^ROLE_[A-Z]{1,20}$/m)
   */
  name: string;
}

export interface UsersUsersQuery_users_edges_node {
  __typename: "UserCollection";
  id: string;
  /**
   * email of user
   */
  email: string;
  firstname: string;
  lastname: string;
  createdAt: string;
  role: UsersUsersQuery_users_edges_node_role;
}

export interface UsersUsersQuery_users_edges {
  __typename: "UserCollectionEdge";
  node: UsersUsersQuery_users_edges_node | null;
  cursor: string;
}

export interface UsersUsersQuery_users {
  __typename: "UserCollectionConnection";
  edges: (UsersUsersQuery_users_edges | null)[] | null;
  totalCount: number;
}

export interface UsersUsersQuery {
  users: UsersUsersQuery_users | null;
}

export interface UsersUsersQueryVariables {
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UsersUserDetailUpdateUserMutation
// ====================================================

export interface UsersUserDetailUpdateUserMutation_updateUser_user_role {
  __typename: "updateAclRoleNestedPayload";
  id: string;
  /**
   * Example format: ROLE_ADMIN.
   * Must start with 'ROLE_' and name cant be longer than 20 letters.
   * (regex: ^ROLE_[A-Z]{1,20}$/m)
   */
  name: string | null;
}

export interface UsersUserDetailUpdateUserMutation_updateUser_user {
  __typename: "updateUserPayloadData";
  id: string;
  /**
   * email of user
   */
  email: string | null;
  firstname: string | null;
  lastname: string | null;
  role: UsersUserDetailUpdateUserMutation_updateUser_user_role | null;
}

export interface UsersUserDetailUpdateUserMutation_updateUser {
  __typename: "updateUserPayload";
  user: UsersUserDetailUpdateUserMutation_updateUser_user | null;
}

export interface UsersUserDetailUpdateUserMutation {
  /**
   * Updates a User.
   */
  updateUser: UsersUserDetailUpdateUserMutation_updateUser | null;
}

export interface UsersUserDetailUpdateUserMutationVariables {
  input: updateUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UsersUserDetailUserQuery
// ====================================================

export interface UsersUserDetailUserQuery_user_role {
  __typename: "AclRoleItem";
  id: string;
  /**
   * Example format: ROLE_ADMIN.
   * Must start with 'ROLE_' and name cant be longer than 20 letters.
   * (regex: ^ROLE_[A-Z]{1,20}$/m)
   */
  name: string;
}

export interface UsersUserDetailUserQuery_user {
  __typename: "UserItem";
  id: string;
  /**
   * email of user
   */
  email: string;
  firstname: string;
  lastname: string;
  createdAt: string;
  role: UsersUserDetailUserQuery_user_role;
}

export interface UsersUserDetailUserQuery_aclRoles {
  __typename: "AclRoleCollection";
  id: string;
  /**
   * Example format: ROLE_ADMIN.
   * Must start with 'ROLE_' and name cant be longer than 20 letters.
   * (regex: ^ROLE_[A-Z]{1,20}$/m)
   */
  name: string;
}

export interface UsersUserDetailUserQuery {
  user: UsersUserDetailUserQuery_user | null;
  aclRoles: (UsersUserDetailUserQuery_aclRoles | null)[] | null;
}

export interface UsersUserDetailUserQueryVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface changePasswordUserInput {
  clientMutationId?: string | null;
  newPassword: string;
  oldPassword: string;
}

export interface createAclRoleInput {
  clientMutationId?: string | null;
  name: string;
  resources?: (string | null)[] | null;
}

export interface createGroupInput {
  clientMutationId?: string | null;
  section: string;
  users?: (string | null)[] | null;
  year: number;
}

export interface createUserInput {
  classGroup?: string | null;
  clientMutationId?: string | null;
  email: string;
  firstname: string;
  lastname: string;
  role: string;
}

export interface updateGroupInput {
  clientMutationId?: string | null;
  id: string;
  section?: string | null;
  users?: (string | null)[] | null;
  year?: number | null;
}

export interface updateUserInput {
  classGroup?: string | null;
  clientMutationId?: string | null;
  email?: string | null;
  firstname?: string | null;
  id: string;
  lastname?: string | null;
  role?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
