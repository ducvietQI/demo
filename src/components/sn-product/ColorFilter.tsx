"use client";

import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import { useState } from "react";

const categories = ["Xanh", "Đỏ", "Tím", "Vàng"];

const ColorFilter = () => {
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
            label="Màu sắc"
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

export default ColorFilter;
