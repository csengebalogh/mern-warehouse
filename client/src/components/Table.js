import * as React from 'react';

function createData(name, supplier, price) {
  return { name, supplier, price};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, ),
  createData('Ice cream sandwich', 237, 9.0, ),
  createData('Eclair', 262, 16.0, ),

];

export default function BasicTable() {
  return (
    <table class="table table-striped">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Product</th>
        <th scope="col">Supplier</th>
        <th scope="col">Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
        </tr>
    </tbody>
    </table>
  );
}
