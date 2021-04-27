import { TableBody } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useParams } from 'react-router-dom';

function Country({ data }) {
  let { country } = useParams();

  let newData = data.Countries.find((cnt) => cnt.CountryCode == country);

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
              <TableCell>Country</TableCell>
              <TableCell>{country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>New confirmed cases</TableCell>
              <TableCell>{newData.NewConfirmed}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>New confirmed cases</TableCell>
              <TableCell>{newData.NewConfirmed}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>New confirmed deaths:</TableCell>
              <TableCell>{newData.NewDeaths}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total cases:</TableCell>
              <TableCell>{newData.TotalConfirmed}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total deaths:</TableCell>
              <TableCell>{newData.TotalDeaths}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>New Recovered:</TableCell>
              <TableCell>{newData.NewRecovered}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Recovered:</TableCell>
              <TableCell>{newData.TotalRecovered}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <small>Date updated: {newData.Date}</small>
    </>
  );
}

export default Country;
