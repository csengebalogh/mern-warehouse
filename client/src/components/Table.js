import React from 'react';

export default function BasicTable(props) {
  const { children } = props

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
      
        {children}
      
    </table>
  );
}
