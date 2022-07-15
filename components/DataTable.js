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



export default function DataGridDemo({
  props
}) {
  //console.log(props.mercedes_vehicles[0])
  //*
  let rows = [];
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
  //*/
  return (<
    Box sx={
      {
        height: 600,
        width: '100%'
      }
    } >
    <
      DataGrid rows={
        rows
      }
      columns={
        columns
      }
      pageSize={
        10
      }
      rowsPerPageOptions={
        [5]
      }
      checkboxSelection disableSelectionOnClick /
    >
  </Box>
  );
}