import React, { useMemo, useState} from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

const Table = () => {
    // eslint-disable-next-line
  const [rowData, setRowData] = useState([
    { company: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
    { company: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October'  },
    { company: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August'  },
    { company: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February'  },
    { company: 'Fiat', model: '500', price: 15774, electric: false, month: 'January'  },
    { company: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March'  },
    { company: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July'  },
    { company: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September'  },
    { company: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December'  },
    { company: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April'  },
    { company: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November'  },
    { company: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May'  },
    { company: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
    { company: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October'  },
    { company: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August'  },
    { company: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February'  },
    { company: 'Fiat', model: '500', price: 15774, electric: false, month: 'January'  },
    { company: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March'  },
    { company: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July'  },
    { company: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September'  },
    { company: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December'  },
    { company: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April'  },
    { company: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November'  },
    { company: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May'  },
    { company: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
    { company: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October'  },
    { company: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August'  },
    { company: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February'  },
    { company: 'Fiat', model: '500', price: 15774, electric: false, month: 'January'  },
    { company: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March'  },
    { company: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July'  },
    { company: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September'  },
    { company: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December'  },
    { company: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April'  },
    { company: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November'  },
    { company: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May'  },
  ]);
// eslint-disable-next-line
  const [columnDefs, setColumnDefs] = useState([
    {
        field: "company",
        checkboxSelection: true,
        editable: false,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
            values: ["Tesla", "Ford", "Toyota", "Mercedes", "Fiat", "Nissan", "Vauxhall", "Volvo", "Jaguar"],
        },
    },
    { field: "model" },
    { field: "price", filter: 'agNumberColumnFilter' },
    { field: "electric" },
    {
        field: "month",
        comparator: (valueA, valueB) => {
            const months = [
                'January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December',
            ];
            const idxA = months.indexOf(valueA);
            const idxB = months.indexOf(valueB);
            return idxA - idxB;
        },
    }
  ]);
  
  const defaultColDef = useMemo(() => {
    return {
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    }
  }, []);

  return (
    <div className="ag-theme-quartz " style={{ height: 729 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          suppressRowClickSelection={true}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 25, 50]}
        />
    </div>
  );
}

export default Table;
