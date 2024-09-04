// import React from 'react';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import { Box } from '@mui/material';
// import { useSelector } from 'react-redux';

// function App() {
//   const isOpen = useSelector((state) => state.sidebar.isOpen);

//   return (
//     <Box display="flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           transition: 'margin 0.3s',
//           marginLeft: isOpen ? '240px' : '80px', // Adjust margin based on sidebar width
//         }}
//       >
//         <Dashboard />
//       </Box>
//     </Box>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Categories from "./components/Categories";


function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div style={{ flexGrow: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/orders" element={<Categories />} />
            <Route path="/customers" element={<Categories />} />
            <Route path="/settings" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
