// import React, { useState } from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   IconButton,
//   Collapse,
//   Switch,
//   Typography,
// } from "@mui/material";
// import { ExpandLess, ExpandMore, Menu as MenuIcon } from "@mui/icons-material";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleSidebar } from "../redux/sidebarSlice";
// import AccessibilityIcon from "@mui/icons-material/Accessibility";

// // Array for menu items
// const menuItems = [
//   {
//     title: "Dashboard",
//     icon: <AccessibilityIcon />,
//     path: "/dashboard",
//   },
//   {
//     title: "Products",
//     icon: <AccessibilityIcon />,
//     subMenu: [
//       { title: "Categories", icon: <AccessibilityIcon />, path: "/categories" },
//       { title: "Orders", icon: <AccessibilityIcon />, path: "/orders" },
//     ],
//   },
//   {
//     title: "Customers",
//     icon: <AccessibilityIcon />,
//     path: "/customers",
//   },
//   {
//     title: "Settings",
//     icon: <AccessibilityIcon />,
//     path: "/settings",
//   },
//   {
//     title: "Dark Mode",
//     icon: <AccessibilityIcon />,
//     toggle: true, // For dark mode switch
//   },
// ];

// const Sidebar = () => {
//   const [openSubMenu, setOpenSubMenu] = useState({});
//   const dispatch = useDispatch();
//   const isOpen = useSelector((state) => state.sidebar.isOpen);

//   // Toggle submenu
//   const handleSubMenuClick = (index) => {
//     setOpenSubMenu((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       anchor="left"
//       open={isOpen}
//       sx={{
//         width: isOpen ? "240px" : "80px",
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: isOpen ? "240px" : "80px",
//           transition: "width 0.3s",
//           overflowX: "hidden",
//         },
//       }}
//     >
//       {/* Sidebar Header */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           padding: "10px",
//         }}
//       >
//         <IconButton onClick={() => dispatch(toggleSidebar())}>
//           <MenuIcon />
//         </IconButton>
//         {isOpen && <Typography variant="h6">SHOPPING</Typography>}
//       </div>

//       {/* Menu List */}
//       <List>
//         {menuItems.map((menu, index) => (
//           <div key={index}>
//             <ListItem
//               button
//               onClick={() => (menu.subMenu ? handleSubMenuClick(index) : null)}
//             >
//               <ListItemIcon>{menu.icon}</ListItemIcon>
//               {isOpen && <ListItemText primary={menu.title} />}
//               {menu.subMenu && isOpen ? (
//                 openSubMenu[index] ? (
//                   <ExpandLess />
//                 ) : (
//                   <ExpandMore />
//                 )
//               ) : null}
//             </ListItem>

//             {/* SubMenu Handling */}
//             {menu.subMenu && (
//               <Collapse in={openSubMenu[index]} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                   {menu.subMenu.map((subMenu, subIndex) => (
//                     <ListItem button key={subIndex} sx={{ pl: 4 }}>
//                       <ListItemIcon>{subMenu.icon}</ListItemIcon>
//                       {isOpen && <ListItemText primary={subMenu.title} />}
//                     </ListItem>
//                   ))}
//                 </List>
//               </Collapse>
//             )}

//             {/* Dark Mode Toggle */}
//             {menu.toggle && (
//               <ListItem>
//                 <ListItemIcon>{menu.icon}</ListItemIcon>
//                 {isOpen && <ListItemText primary={menu.title} />}
//                 <Switch />
//               </ListItem>
//             )}
//           </div>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Collapse,
  Switch,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore, Menu as MenuIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/sidebarSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import AccessibilityIcon from "@mui/icons-material/Accessibility";

// Array for menu items
const menuItems = [
  {
    title: "Dashboard",
    icon: <AccessibilityIcon />,
    path: "/dashboard",
  },
  {
    title: "Products",
    icon: <AccessibilityIcon />,
    subMenu: [
      { title: "Categories", icon: <AccessibilityIcon />, path: "/categories" },
      { title: "Orders", icon: <AccessibilityIcon />, path: "/orders" },
    ],
  },
  {
    title: "Customers",
    icon: <AccessibilityIcon />,
    path: "/customers",
  },
  {
    title: "Settings",
    icon: <AccessibilityIcon />,
    path: "/settings",
  },
  {
    title: "Dark Mode",
    icon: <AccessibilityIcon />,
    toggle: true, // For dark mode switch
  },
];

const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState({});
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Toggle submenu
  const handleSubMenuClick = (index) => {
    setOpenSubMenu((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Handle navigation
  const handleNavigation = (path) => {
    if (path) {
      navigate(path); // Navigate to the provided path
    }
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={isOpen}
      sx={{
        width: isOpen ? "240px" : "80px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isOpen ? "240px" : "80px",
          transition: "width 0.3s",
          overflowX: "hidden",
        },
      }}
    >
      {/* Sidebar Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <IconButton onClick={() => dispatch(toggleSidebar())}>
          <MenuIcon />
        </IconButton>
        {isOpen && <Typography variant="h6">SHOPPING</Typography>}
      </div>

      {/* Menu List */}
      <List>
        {menuItems.map((menu, index) => (
          <div key={index}>
            <ListItem
              button
              onClick={() =>
                menu.subMenu
                  ? handleSubMenuClick(index)
                  : handleNavigation(menu.path)
              }
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              {isOpen && <ListItemText primary={menu.title} />}
              {menu.subMenu && isOpen ? (
                openSubMenu[index] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItem>

            {/* SubMenu Handling */}
            {menu.subMenu && (
              <Collapse in={openSubMenu[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menu.subMenu.map((subMenu, subIndex) => (
                    <ListItem
                      button
                      key={subIndex}
                      sx={{ pl: 4 }}
                      onClick={() => handleNavigation(subMenu.path)} // Navigate to submenu path
                    >
                      <ListItemIcon>{subMenu.icon}</ListItemIcon>
                      {isOpen && <ListItemText primary={subMenu.title} />}
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}

            {/* Dark Mode Toggle */}
            {menu.toggle && (
              <ListItem>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                {isOpen && <ListItemText primary={menu.title} />}
                <Switch />
              </ListItem>
            )}
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
