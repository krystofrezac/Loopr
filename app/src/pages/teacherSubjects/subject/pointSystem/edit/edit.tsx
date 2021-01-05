import React, { useEffect, useState } from 'react';

import {
  Box,
  Button,
  fade,
  IconButton,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import OverlayLoading from 'components/OverlayLoading';
import OverlayLoadingContainer from 'components/OverlayLoading/OverlayLoadingContainer';
import { bottomShadow, leftShadow } from 'components/shadows';

import { EditProps } from './types';

const transitionDuration = 500;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 0,
    height: '100%',

    position: 'absolute',
    zIndex: 10001,
    transition: `${transitionDuration}ms`,
    top: 0,
    right: 0,
    backgroundColor: fade(theme.palette.common.black, 0),
  },
  rootBig: {
    width: '100%',
    backgroundColor: fade(theme.palette.common.black, 0.5),
  },
  side: {
    ...leftShadow,
    backgroundColor: 'white',
    height: '100%',
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 10001,
    transitionDuration: `${transitionDuration}ms`,
  },
  sideHidden: {
    display: 'none',
  },
  sideReduced: {
    width: 0,
  },
  sideVisible: {
    width: 800,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  header: { ...bottomShadow },
  headerInfo: {
    minWidth: 200,
  },
  headerActions: {
    width: '100%',
  },
  content: {
    transitionDuration: `${transitionDuration / 2}ms`,
    height: '100%',
  },
}));

const Edit: React.FC<EditProps> = props => {
  const classes = useStyles();
  const [phase, setPhase] = useState('hidden');

  useEffect(() => {
    if (props.open) {
      setPhase('reduced');
      setTimeout(() => {
        setPhase('withoutContent');
        setTimeout(() => {
          setPhase('visible');
        }, transitionDuration);
      });
    } else if (phase !== 'hidden') {
      setPhase('withoutContent');
      setTimeout(() => {
        setPhase('reduced');
        setTimeout(() => {
          setPhase('hidden');
        }, transitionDuration);
      }, transitionDuration / 2);
    }
  }, [props.open]);

  let sideClass = `${classes.side} `;
  if (phase === 'hidden') sideClass += classes.sideHidden;
  if (phase === 'reduced') sideClass += classes.sideReduced;
  if (phase === 'visible' || phase === 'withoutContent')
    sideClass += classes.sideVisible;

  let rootClass = `${classes.root} `;
  if (phase !== 'hidden' && phase !== 'reduced') rootClass += classes.rootBig;

  return (
    <div className={rootClass}>
      <div className={sideClass}>
        <OverlayLoadingContainer>
          <OverlayLoading loading={props.loading} />
          <div
            className={classes.content}
            style={phase === 'visible' ? { opacity: 1 } : { opacity: 0 }}
          >
            <Box
              p={2}
              display="flex"
              alignItems="center"
              className={classes.header}
            >
              <Box
                display="flex"
                alignItems="center"
                className={classes.headerInfo}
              >
                <Box>
                  <Typography variant="h5">{props.exam.name}</Typography>
                  <Typography>{`${props.exam.maxPoints} bodů`}</Typography>
                  <Typography>27.12.2020</Typography>
                </Box>
                <Box pl={4}>
                  <IconButton color="primary" onClick={props.onExamInfoEdit}>
                    <EditIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box
                className={classes.headerActions}
                display="flex"
                justifyContent="flex-end"
              >
                <Button color="primary" onClick={props.onCancel}>
                  Cancel
                </Button>
                <Box pl={2}>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={props.onSubmit}
                  >
                    Save and close
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box pt={2}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell width={250}>Name</TableCell>
                    <TableCell width={250}>Lastname</TableCell>
                    <TableCell />
                    <TableCell width={100}>Points</TableCell>
                    <TableCell width={100}>Percents</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.students?.map(student => {
                    return (
                      <TableRow key={student.id}>
                        <TableCell>{student.firstname}</TableCell>
                        <TableCell>{student.lastname}</TableCell>
                        <TableCell />
                        <TableCell>
                          <TextField
                            value={student.pointsValue}
                            error={student.pointsError}
                            color={
                              student.pointsWarning ? 'secondary' : 'primary'
                            }
                            onChange={e =>
                              props.onStudentExamChange({
                                studentId: student.id,
                                points: e.target.value,
                              })
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            disabled={props.exam.maxPoints === 0}
                            value={student.percentsValue}
                            error={student.percentsError}
                            color={
                              student.percentsWarning ? 'secondary' : 'primary'
                            }
                            onChange={e =>
                              props.onStudentExamChange({
                                studentId: student.id,
                                percents: e.target.value,
                              })
                            }
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </div>
        </OverlayLoadingContainer>
      </div>
    </div>
  );
};

export default Edit;
