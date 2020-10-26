import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';

const rows: RowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'XGrid', col2: 'is Awesome' },
  { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
];

const columns: ColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

function NoStudent() {
  return (
    <div>
      <Container>
        <Typography variant="h5">
          학생들이 없습니다. 학생을 추가해주세요.
        </Typography>
        <Button>학생 추가하기</Button>
      </Container>
    </div>
  );
}

function Students() {
  return (
    <div>
      <DataGrid rows={rows} columns={columns}></DataGrid>
    </div>
  );
}

const list = [];

const ShowStudents = () => {
  return list.length === 0 ? <NoStudent /> : <Students />;
};

export default ShowStudents;
