import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { myProduct } from "../../data/mockData";
import Header from "../../components/Header";
import { NavLink } from "react-router-dom";

const Product = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "pid", headerName: "SR" },
    {
      field: "pname",
      headerName: "Product name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "discounted Price",
      headerName: "Discounted Price",
      flex: 1,
    },
    {
      field: "max order qty",
      headerName: "Max order qty",
      flex: 1,
    },
    {
      field: "edit",
      headerName: "EDIT",
      flex: 1,
      renderCell: () => {
        return (
          <Box
            width="50%"
            m="0 auto"
            p="1px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.greenAccent[700]}
            borderRadius="4px"
          >
            <NavLink  to="/create" style={{textDecoration:'none'}}>
            <Button>
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                Edit
              </Typography>
            </Button></NavLink>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Product" subtitle="Manage the Product" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid  rows={myProduct} columns={columns} />
      </Box>
    </Box>
  );
};

export default Product;
