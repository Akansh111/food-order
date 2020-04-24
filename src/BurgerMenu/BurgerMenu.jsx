import React from 'react';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import { colDefs } from './ColumnDefinition';
import { OrderSummary } from '../OrderSummary';
import { url } from '../shared';

import './BurgerMenu.css';

export const BurgerMenu = () => {
    
    const [foodData, setFoodData] = React.useState([]);
    const [summaryData, setSummaryData] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setFoodData(result.data);
        };
        fetchData();
    }, []);

    const onSelectionChanged = (params) => {
        const selectedRows = params.api.getSelectedRows();
        setSummaryData(selectedRows);
    };
    
    return (
        <div className="food-menu ag-theme-balham"> 
            <div className="ag-grid">
                <AgGridReact
                    columnDefs={colDefs}
                    rowData={foodData}
                    floatingFilter={true}
                    rowSelection='multiple'
                    onSelectionChanged={onSelectionChanged}

                />
            </div>
            <OrderSummary
                summaryData = {summaryData}
            />
            
        </div>
    );
}