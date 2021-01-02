import React, { MutableRefObject, useRef } from 'react';

import {
  Box,
  fade,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import Edit from './edit';

const useStyles = makeStyles(theme => ({
  studentCell: {
    minWidth: '200px',
  },
  paper: {
    padding: 0,
    position: 'relative',
  },
  whiteCell: {
    backgroundColor: theme.palette.common.white,
  },
  grayCell: { backgroundColor: theme.palette.grey['100'] },
  cellWithoutBorder: { borderColor: theme.palette.common.white },
  cellWithRightBorder: {
    borderRight: '1px solid #E0E0E0',
  },
}));

const StickyTableCell = withStyles(theme => ({
  head: {
    left: 0,
    position: 'sticky',
    zIndex: theme.zIndex.appBar + 2,
  },
  body: {
    left: 0,
    position: 'sticky',
    zIndex: theme.zIndex.appBar + 1,
  },
}))(TableCell);

const Subject: React.FC = () => {
  let id = 0;
  function createData(name, calories, fat, carbs, protein) {
    id += 1;

    return { id, name, calories, fat, carbs, protein };
  }

  const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const classes = useStyles();
  const headerRef = useRef() as MutableRefObject<HTMLTableRowElement>;

  let tableContainerStyle = {};

  if (process.browser) {
    const toolbarHeight = 64;
    tableContainerStyle = {
      maxHeight: window.innerHeight - toolbarHeight * 3,
    };
  }

  const test1 = (
    <TableCell
      colSpan={2}
      align="center"
      className={`${classes.whiteCell} ${classes.cellWithoutBorder} ${classes.cellWithRightBorder}`}
    >
      <Typography>Test1</Typography>
      <Typography>27. 7. 2020</Typography>
      <Typography>10 bodů</Typography>
      <IconButton color="primary">
        <EditIcon />
      </IconButton>
    </TableCell>
  );
  const test2 = (
    <>
      <TableCell
        className={classes.whiteCell}
        align="center"
        style={{ top: headerRef.current?.clientHeight }}
      >
        <Typography>BODY</Typography>
      </TableCell>
      <TableCell
        className={`${classes.whiteCell} ${classes.cellWithRightBorder}`}
        align="center"
        style={{ top: headerRef.current?.clientHeight }}
      >
        <Typography>PROCENTA</Typography>
      </TableCell>
    </>
  );

  return (
    <Paper className={classes.paper}>
      <TableContainer style={tableContainerStyle}>
        <Table stickyHeader>
          <TableHead>
            <TableRow ref={headerRef} style={{ backgroundColor: 'white' }}>
              <StickyTableCell
                rowSpan={2}
                className={`${'head'} ${classes.studentCell} ${
                  classes.whiteCell
                } ${classes.cellWithRightBorder}`}
              >
                <Grid container>
                  <Grid item xs={6}>
                    <Box display="flex" justifyContent="center">
                      Jméno
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" justifyContent="center">
                      Příjmení
                    </Box>
                  </Grid>
                </Grid>
              </StickyTableCell>
              {test1}
              {test1}
              {test1}
              {test1}
              {test1}
              {test1}
              {test1}
              {test1}
            </TableRow>
            <TableRow>
              {test2}
              {test2}
              {test2}
              {test2}
              {test2}
              {test2}
              {test2}
              {test2}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((n, index) => {
              const backgroundColor =
                index % 2 === 0 ? classes.whiteCell : classes.grayCell;
              const points = (
                <>
                  {' '}
                  <TableCell align="center" className={backgroundColor}>
                    {n.fat}
                  </TableCell>
                  <TableCell
                    align="center"
                    className={`${classes.cellWithRightBorder} ${backgroundColor}`}
                  >
                    {n.carbs}
                  </TableCell>
                </>
              );

              return (
                <TableRow key={n.id}>
                  <StickyTableCell
                    className={`body ${classes.cellWithRightBorder} ${backgroundColor}`}
                  >
                    <Box width={300}>
                      <Grid container>
                        <Grid item xs={6}>
                          <Box display="flex" justifyContent="center">
                            Name
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box display="flex" justifyContent="center">
                            Surname
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </StickyTableCell>
                  {points}
                  {points}
                  {points}
                  {points}
                  {points}
                  {points}
                  {points}
                  {points}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Edit />
    </Paper>
  );
};

export default Subject;
