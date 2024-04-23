import React from "react";

const SubMenu = () => {
  return (
    <div>
      <ListItemButton onClick={() => setSubMenuOpen(!subMenuOpen)}>
        <ListItemText primary={text} />
        <ArrowDropDownIcon />
      </ListItemButton>

      <div
        className={selectedIndex === index ? "d-block" : "d-none"}
        // anchorReference="anchorPosition"
        // anchorPosition={{ top: 0, left: 200 }} // Adjust left position according to your layout
        // open={selectedIndex === index && open}
        // onClose={() => handleMenuItemClick(null)}
        // PaperProps={{
        //   style: {
        //     marginTop: "8px",
        //   },
        // }}
      >
        <MenuItem onClick={() => handleMenuItemClick(index)}>
          <Link to="/pen">Pen</Link>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick(index)}>
          <Link to="/pencil">Pencil</Link>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick(index)}>
          <Link to="/notebook">Notebook</Link>
        </MenuItem>
      </div>
    </div>
  );
};

export default SubMenu;
