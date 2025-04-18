"use client";

import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import { useState } from "react";

const categories = [
  "Bàn Sofa - Bàn Cafe - Bàn Trà",
  "Bàn Ăn",
  "Ghế Sofa",
  "Bộ Bàn Ăn",
  "Tủ Đầu Giường",
  "Tủ Quần Áo",
  "Tủ & Kệ",
  "Ghế Ăn",
  "Giường Ngủ",
  "Tủ Kệ Tivi",
  "Tủ Giày - Tủ Trang Trí",
  "Bàn Làm Việc",
  "Bàn Trang Điểm",
  "Ghế Văn Phòng",
  "Khác",
];

const CategoryFilter = () => {
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
            label="Danh mục"
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

export default CategoryFilter;
