
export const colDefs = [
    { 
        headerName: "Burger Name",
        field: "burgerName",
        filter: true,
        sortable: true,
        filterParams: { suppressMenu: true, suppressMiniFilter: true, filter: false  },
        headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          checkboxSelection: true,
    },
    {
        headerName: "Category", 
        field: "category" ,
        filter: true,
        sortable: true,
        width: 150,
        filterParams: { suppressMiniFilter: true }

    },
    { 
        headerName: "Rating", 
        field: "rating", 
        filter: true,
        sortable: true,
        width: 120,
        filterParams: { suppressMiniFilter: true }

    },
    { 
        headerName: "Price (₹)", 
        field: "price", 
        filter: true,
        sortable: true,
        width: 120,
        filterParams: { suppressMiniFilter: true }

    },
    { 
        headerName: "Discount (%)", 
        field: "discount", 
        filter: true,
        sortable: true,
        width: 120,
        filterParams: { suppressMiniFilter: true }

    }
];