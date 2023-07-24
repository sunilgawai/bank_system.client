import { Box } from '@mui/material';
import { useOutlet } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Box>
        App
        {useOutlet()}
      </Box>
    </div>
  )
}

export default App;