import { ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";

interface NavLinkProps {
  url: string;
  title: string;
}

const NavLink = ({ url, title }: NavLinkProps) => {
  return (
    <>
      <ListItem key={title} disablePadding sx={{ width: "auto" }}>
        <ListItemButton>
          <a href={url} style={{ color: "#fff"}}>
            <ListItemText
              className="hover-underline-animation"
              primary={<Typography style={{ 
                marginTop: 0, 
                paddingBottom: "5px",
                fontSize: "20px", 
                fontFamily: "ChakraPetch Regular"}}>{title}</Typography>}
            />
          </a>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default NavLink;