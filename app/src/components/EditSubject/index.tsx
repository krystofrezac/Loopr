import React, { useEffect } from 'react';

import { Paper } from '@material-ui/core';

import Stepper from 'components/Stepper';

import GroupsIndex from './groups';
import useEditSubjectState from './state';
import SummaryIndex from './summary';
import TeachersIndex from './teachers';
import { EditSubjectProps } from './types';

const EditSubject: React.FC<EditSubjectProps> = props => {
  const {
    group,
    classGroup,
    teacher,
    setGroup,
    setClassGroup,
    setTeacher,
  } = useEditSubjectState(state => ({
    group: state.group,
    classGroup: state.classGroup,
    teacher: state.teacher,
    setGroup: state.setGroup,
    setClassGroup: state.setClassGroup,
    setTeacher: state.setTeacher,
  }));

  useEffect(() => {
    setTeacher(props.defaultValues?.teacher);
    setClassGroup(props.defaultValues?.classGroup);
    setGroup(props.defaultValues?.group);
  }, [props.defaultValues]);

  const submitHandler = (): Promise<void> => {
    if (teacher) {
      return props.onSubmit({ group, classGroup, teacher });
    }

    return Promise.resolve();
  };

  return (
    <Paper>
      <Stepper
        steps={[
          {
            index: 0,
            label: 'Group/ClassGroup',
            component: <GroupsIndex />,
            nextActive: group !== undefined || classGroup !== undefined,
          },
          {
            index: 1,
            label: 'Teacher',
            component: <TeachersIndex />,
            nextActive: teacher !== undefined,
          },
          {
            index: 2,
            label: 'Summary',
            component: (
              <SummaryIndex
                submitButtonLabel={props.submitButtonLabel}
                onSubmit={submitHandler}
              />
            ),
            nextActive: false,
          },
        ]}
      />
    </Paper>
  );
};

export default EditSubject;
