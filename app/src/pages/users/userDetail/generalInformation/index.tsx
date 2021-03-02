import React from 'react';

import { useMutation } from '@apollo/client';

import USERS_USER_DETAIL_ARCHIVE_USER_MUTATION from 'pages/users/userDetail/mutations/archiveUser';
import USERS_USER_DETAIL_UPDATE_USER_MUTATION from 'pages/users/userDetail/mutations/editUser';

import {
  UsersUserDetailArchiveUserMutation,
  UsersUserDetailArchiveUserMutationVariables,
  UsersUserDetailUpdateUserMutation,
  UsersUserDetailUpdateUserMutationVariables,
} from 'types/graphql';

import stripRolePrefix from 'components/stripRolePrefix';

import GeneralInformation from './generalInformation';
import { GeneralInformationIndexProps, OnChangeValues } from './types';

const GeneralInformationIndex: React.FC<GeneralInformationIndexProps> = props => {
  const [updateUser] = useMutation<
    UsersUserDetailUpdateUserMutation,
    UsersUserDetailUpdateUserMutationVariables
  >(USERS_USER_DETAIL_UPDATE_USER_MUTATION, {
    // TODO typename
    refetchQueries: ['UsersUserDetailUserQuery'],
    awaitRefetchQueries: true,
  });

  const [archiveUser] = useMutation<
    UsersUserDetailArchiveUserMutation,
    UsersUserDetailArchiveUserMutationVariables
  >(USERS_USER_DETAIL_ARCHIVE_USER_MUTATION, {
    refetchQueries: ['UsersUserDetailUserQuery'],
    awaitRefetchQueries: true,
  });

  const changeHandler = (values: OnChangeValues): Promise<boolean> => {
    return updateUser({
      variables: { input: { id: props.user!.id, ...values } },
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  };

  const archiveHandler = (archive: boolean) => {
    archiveUser({ variables: { input: { id: props.user!.id, archive } } });
  };

  const rolesLookup: Record<string, string> = {};
  props.roles?.forEach(role => {
    if (role) {
      rolesLookup[role.id] = stripRolePrefix(role.name);
    }
  });

  return (
    <GeneralInformation
      user={props.user}
      onChange={changeHandler}
      rolesLookup={rolesLookup}
      onArchive={archiveHandler}
    />
  );
};

export default GeneralInformationIndex;
