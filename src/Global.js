import { TableBody } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function Global({ data: { Global } }) {
  return (
    <>
      <TableContainer>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Cases</TableCell>
              <TableCell>Totals</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>New confirmed cases</TableCell>
              <TableCell>{Global.NewConfirmed}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>New confirmed cases</TableCell>
              <TableCell>{Global.NewConfirmed}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>New confirmed deaths:</TableCell>
              <TableCell>{Global.NewDeaths}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total cases:</TableCell>
              <TableCell>{Global.TotalConfirmed}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total deaths:</TableCell>
              <TableCell>{Global.TotalDeaths}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>New Recovered:</TableCell>
              <TableCell>{Global.NewRecovered}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Recovered:</TableCell>
              <TableCell>{Global.TotalRecovered}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <small>Date updated: {Global.Date}</small>
    </>
  );
}

export default Global;
