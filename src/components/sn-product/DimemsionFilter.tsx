"use client";

import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import { useState } from "react";

const categories = ["90cm", "1m2", "1m4", "1m6", "1m8"];

const DimemsionFilter = () => {
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
            label="Kích thước"
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

export default DimemsionFilter;
