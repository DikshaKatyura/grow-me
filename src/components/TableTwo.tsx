import { useState } from 'react';
import data from '../store/Data';
import { Box,Table,TableBody,TableCell, TableContainer,TableHead,TableRow,Checkbox,Collapse,Paper,IconButton,Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function createData(
  department: string,
  sub_departments:string[],
  index : number
) {
  return {
    department,
    sub_departments: 
      sub_departments
    ,
    index
  };
}

function Row(props: { row: ReturnType<typeof createData> ,index:number}) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [departmentChecked , setDepartmentCheck] = useState<boolean[]>(new Array(data.length).fill(false));
  const [sub_departmentChecked,setSub_departmentChecked] = useState(new Array(row.sub_departments.length).fill(false));
  function onSelectAllClick(position:number){
    const updatedCheckedState = departmentChecked.map((item, index) =>
      index === position ? !item : item
    );
    setDepartmentCheck(updatedCheckedState)
  }

  function onOneSelect(position:number){
    const updatedCheckedState = sub_departmentChecked.map((item, index) =>
    index === position ? !item : item
  );
  setSub_departmentChecked(updatedCheckedState);
  }

  return (
    <>
   
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} selected = {departmentChecked[row.index]}>
        <TableCell sx={{width:'auto',display:'flex'}}>
        <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveIcon/>  : <AddIcon />}
          </IconButton>
          <Checkbox
            color="primary"
            checked={!sub_departmentChecked.includes(false) || departmentChecked[row.index]}
            onChange={() => onSelectAllClick(row.index)}
          />
        </TableCell>
        <TableCell component="th" scope="row" sx={{width:'auto'}}>
        
          {row.department}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} >
        
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.sub_departments.map((sub_department,index) => (
                    <TableRow key={index} selected = {sub_departmentChecked[index] || departmentChecked[row.index]}>
                      <Checkbox
            color="primary"
            
                    checked={(departmentChecked[row.index]) || sub_departmentChecked[index]}
                    onChange={() => onOneSelect(index)}
            />
                      <TableCell component="th" scope="row">
                        {sub_department}
                      </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
const rows = data.map(ele => createData(ele.department,ele.sub_departments,ele.id))

export default function TableTwo() {
  return (
    <>
    <Typography variant='h1' mt={4} sx={{textAlign:'center'}}>Departments</Typography>
   
    <Box sx={{ height: 400 ,padding:'2rem'}}>
    <TableContainer component={Paper} sx={{padding:'2rem',width:'auto'}}>
      <Table aria-label="collapsible table" padding='checkbox'>
        <TableHead>
          <TableRow>
            {/* <TableCell />
            <TableCell></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <Row key={row.department} row={row} index={index}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </>
  );
}