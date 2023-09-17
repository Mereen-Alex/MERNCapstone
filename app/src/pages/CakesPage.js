import React, { useState } from "react";
import {
  Grid,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import CakeCard from "../components/cakes/CakeCard";
import { cakesArray } from "../cakesdb";


const CakesPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [keyword, setKeyword] = useState("");

  const filteredCakes = cakesArray.filter((cake) => {
    if (categoryFilter === "All" || cake.category === categoryFilter) {
      return cake.name.toLowerCase().includes(keyword.toLowerCase());
    }
    return false;
  });

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <Box mt={3} textAlign="center">
        <Typography variant="h4" gutterBottom>
          CAKES
        </Typography>
        <Typography
          variant="body1"
          style={{ fontSize: "20px", marginBottom: "20px" }}
        >
          Unwrap happiness with every slice!
        </Typography>
      </Box>
      <Container style={{ marginBottom: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select value={categoryFilter} onChange={handleCategoryChange}>
                <MenuItem value="All">All Cakes</MenuItem>
                <MenuItem value="With Egg">With Egg</MenuItem>
                <MenuItem value="Eggless">Eggless</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Search by Keyword"
              value={keyword}
              onChange={handleKeywordChange}
            />
          </Grid>
          {filteredCakes.map((cake) => (
            <Grid item xs={12} sm={6} md={4} key={cake.pid}>
              <CakeCard cake={cake} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CakesPage;
