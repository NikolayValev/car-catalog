import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid
} from '@mui/x-data-grid';
import {
  ClassNames
} from '@emotion/react';
import {
  cardClasses
} from '@mui/material';
import {
  blue,
  lightBlue
} from '@mui/material/colors';

const columns = [{
  field: 'id',
  headerName: 'ID',
  width: 100,
},
{
  field: 'name',
  headerName: 'Model Name',
  width: 350,
},
{
  field: 'className',
  headerName: 'Class Name',
  width: 150,

},
{
  field: 'bodyName',
  headerName: 'Body Name',
  width: 150,
},
{
  field: 'price',
  headerName: 'Price with VAT',
  width: 110,
},
{
  field: 'netPrice',
  headerName: 'Net Price',
  width: 110,
}
];


/*
//Loading all of the data is expensive.
// https://mui.com/x/react-data-grid/pagination/
*/
export default function DataGridDemo({props}) {
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(5);
  let rows = [];
  let rowCount = 10
  //map the props to the the row items
  props.mercedes_vehicles.map(({
    vehicleSortId,
    name,
    vehicleClass: {
      className
    },
    vehicleBody: {
      bodyName
    },
    priceInformation: {
      price,
      netPrice
    },
  }) => {
    rows.push({
      id: `${vehicleSortId}`,
      name: `${name}`,
      className: `${className}`,
      bodyName: `${bodyName}`,
      price: `${price}`,
      netPrice: `${netPrice}`
    })
  })
  //State
  const [rowCountState, setRowCountState] = React.useState(rowCount);
  React.useEffect(() => {
    setRowCountState((prevRowCountState) =>
      rowCount !== undefined ? rowCount : prevRowCountState,
    );
  }, [rowCount, setRowCountState]);

  return (
    <
      DataGrid
      sx={
        {
          hight: '100%',
          width: '100%'
        }
      }
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[5]}
      rowCount={rowCountState}
      paginationMode="server"
      onPageChange={(newPage) => setPage(newPage)}
      checkboxSelection disableSelectionOnClick /
    >
  );
}