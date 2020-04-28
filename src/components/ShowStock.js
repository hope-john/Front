import React, { Component } from 'react';
import {AppProvider, Page} from '@shopify/polaris';
import DataTable from './DataTable';
import '../App.css';

class ShowStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: []
    };
  }

  render() {

    const headings = [
      'Product name',
      'Cost',
    ]

    const rows = [
      [
        'aaa',
        '$$$',
      ],
    ];

    return (
      <AppProvider>
        <Page title="Data table">
          <DataTable headings={headings} rows={rows} />
        </Page>
      </AppProvider>
    );
  }
}

export default ShowStock;

