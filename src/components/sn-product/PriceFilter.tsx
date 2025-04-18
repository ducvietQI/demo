"use client";

import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import { useState } from "react";

const categories = [
  "Dưới 500.000₫",
  "500.000₫ - 1.000.000₫",
  "1.000.000₫ - 1.500.000₫",
  "1.500.000₫ - 2.000.000₫",
];

const PriceFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <Stack spacing={1}>
      <Autocomplete
        multiple
        size="small"
        options={categories}
        getOptionLabel={(option) => option}
        value={selectedCategories}
        onChange={(event, newValue) => setSelectedCategories(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Giá sản phẩm"
            slotProps={{
              inputLabel: {
                sx: { fontSize: 16 },
              },
            }}
            sx={{
              "& .MuiInputBase-root": {
                fontSize: 16,
              },
              "& .MuiAutocomplete-tag": {
                fontSize: 16,
              },
            }}
          />
        )}
        renderOption={(props, option) => {
          const { key, ...rest } = props;
          return (
            <Box
              component="li"
              key={key}
              {...rest}
              sx={{ fontSize: 16, color: "text.black" }}
            >
              {option}
            </Box>
          );
        }}
        sx={{
          "& .MuiAutocomplete-inputRoot": {
            fontSize: 16,
          },
          "& .MuiAutocomplete-endAdornment": {
            fontSize: 16,
          },
          "& .MuiAutocomplete-option": {
            fontSize: 16,
          },
          "& .MuiChip-label": {
            fontSize: 16,
          },
        }}
      />
    </Stack>
  );
};

export default PriceFilter;
