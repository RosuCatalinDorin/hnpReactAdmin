import PropTypes from 'prop-types';
// material
import { Paper, Typography } from '@mui/material';

// ----------------------------------------------------------------------

SearchNotFound.propTypes = {
  searchQuery: PropTypes.string
};

export default function SearchNotFound({ searchQuery = '', ...other }) {
  return (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
        Nu exista
      </Typography>
      <Typography variant="body2" align="center">
        Nici un rezultat gasit pentru &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Incearca cautarea dupa alt text.
      </Typography>
    </Paper>
  );
}
