import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';

import { GroupListProps } from 'pages/groups/groupList/types';

import SideList from 'components/SideList';

import AddDialog from './addDialog';

const GroupList: React.FC<GroupListProps> = props => {
  const [addOpen, setAddOpen] = useState(false);

  return (
    <>
      <AddDialog
        open={addOpen}
        loading={props.addGroupLoading}
        onSubmit={values => {
          props.onAdd(values).then((success: boolean) => {
            if (success) setAddOpen(false);
          });
        }}
        onClose={() => {
          setAddOpen(false);
        }}
      />
      <SideList
        title="Groups"
        loading={props.groupsLoading}
        bottomAction={{
          icon: <AddIcon />,
          onClick: () => {
            setAddOpen(true);
          },
        }}
        items={props.groups.map(group => ({
          id: group.id,
          primary: group?.section,
          onValueChange: (value: string) =>
            props.onUpdate({ id: group.id, section: value }),
          onClick: () => props.onSelectedGroupChange(group.id),
        }))}
      />
    </>
  );
};

export default GroupList;