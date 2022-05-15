import React from 'react';

// function createData(name, supplier, price) {
//   return { name, supplier, price};
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, ),
//   createData('Ice cream sandwich', 237, 9.0, ),
//   createData('Eclair', 262, 16.0, ),

// ];

export default function BasicTable(props) {
  const {children} = props
  return (
    <table className="table table-striped">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Product</th>
        <th scope="col">Supplier</th>
        <th scope="col">Price</th>
        </tr>
    </thead>
    <tbody>
        {children}
    </tbody>
    </table>
  );
}
