import React from "react";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';



const Sidebar = () => {
  return (
    <div>
      <SidebarMenu>
        <SidebarMenu.Header>
          <SidebarMenu.Brand>
            {/* Your brand icon */}
            <img
              src="https://techworldthink.github.io/MCA/assets/img/logo.png"
              alt="logo"
              className="logo m-0"
            />
          </SidebarMenu.Brand>
          <SidebarMenu.Toggle />
        </SidebarMenu.Header>
        <SidebarMenu.Body>
          <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link>
              <SidebarMenu.Nav.Icon>
                <HomeOutlinedIcon/>
              </SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>
                Home
              </SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
          </SidebarMenu.Nav>
          <SidebarMenu.Sub>
            <SidebarMenu.Sub.Toggle>
              <SidebarMenu.Nav.Icon />
              <SidebarMenu.Nav.Title>
                dashboard
              </SidebarMenu.Nav.Title>
            </SidebarMenu.Sub.Toggle>
            <SidebarMenu.Sub.Collapse>
              <SidebarMenu.Nav>
                <SidebarMenu.Nav.Link>
                  <SidebarMenu.Nav.Icon>
                    <GridViewOutlinedIcon/>
                  </SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>
                    Dashboard
                  </SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav>
            </SidebarMenu.Sub.Collapse>
          </SidebarMenu.Sub>
        </SidebarMenu.Body>
      </SidebarMenu>
    </div>
  );
};

export default Sidebar;
