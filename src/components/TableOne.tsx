import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

//https://api.punkapi.com/v2/beers

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 40 },
  {
    field: "name",
    headerName: "Beer Name",
    width: 200,
    editable: true,
  },
  {
    field: "volume",
    headerName: "Volume",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.volume.value || ""} ${params.row.volume.unit || ""}`,
  },
  {
    field: "author",
    headerName: "Contributed By",
    width: 200,
    editable: true,
  },
  {
    field: "tagline",
    headerName: "Tagline",
    type: "string",
    width: 250,
    editable: true,
  },
 
];

interface beer {
  id: number;
  name: string;
  tagline: string;
  volume: {
    value: number;
    unit: string;
  };
  author: string;
}

export default function TableOne() {
  const [rows, setRows] = useState<beer[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.punkapi.com/v2/beers", {
        method: "GET",
      });
      const data = await response.json();
      if (response.status !== 200) {
        throw new Error("Something went wrong with the server!");
      }
      let newRows = data.map((ele: {id:number,name:string,tagline:string,contributed_by:string,volume:{value:number,unit:string}}) =>{
      
        const i = ele.contributed_by.indexOf('<');
    const trimmedAuthor = ele.contributed_by.slice(0,i).trim();

        return { id: ele.id,
        name: ele.name,
        tagline: ele.tagline,
        author: trimmedAuthor,
        volume: { value: ele.volume.value, unit: ele.volume.unit },}
      });
      
      setRows([ ...newRows]);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
    <Typography variant='h1' mt={4} sx={{textAlign:'center'}}>Beer Book</Typography>
    <Box sx={{ height: 400 ,padding:'2rem'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </>
  );
}
