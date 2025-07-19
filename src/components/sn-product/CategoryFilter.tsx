import { MenuItem } from "@/models/home.type";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { memo } from "react";
import { ArrowDownIcon, SearchIcon } from "../Icons";

const CategoryFilter = ({
  categorySlug,
  categoriesList,
  onSetCategorySlug,
  onClose,
  keyword,
  setKeyword,
}: {
  categorySlug: string;
  categoriesList: MenuItem[];
  onSetCategorySlug: (slug: string) => void;
  onClose?: () => void;
  keyword: string;
  setKeyword: (value: string) => void;
}) => {
  return (
    <Box>
      <Box sx={{ mx: 1 }}>
        <TextField
          fullWidth
          placeholder="Tìm kiếm sản phẩm..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          sx={{
            mb: 2,
            "& .MuiInputBase-input": {
              color: "#333", // màu text value
              fontSize: 16,
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#333",
              fontSize: 16,
              opacity: 1,
            },
            fontSize: 16,
          }}
          size="small"
          variant="standard"
          InputProps={{
            endAdornment: <SearchIcon sx={{ color: "#333" }} />,
            style: { fontSize: 20 },
          }}
        />
      </Box>
      {categoriesList.map((category, index) => (
        <Accordion
          key={index}
          disableGutters
          square
          elevation={0}
          defaultExpanded
          sx={{
            border: "none",
            boxShadow: "none",
            "&::before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDownIcon
                sx={{
                  fontSize: "16px",
                }}
              />
            }
            sx={{
              border: "none",
              minHeight: "auto",
              "&.Mui-expanded": {
                minHeight: "auto",
              },
            }}
          >
            <Typography fontWeight={500} fontSize="16px" color="text.black">
              {category.title}
            </Typography>
          </AccordionSummary>
          {category.children && (
            <AccordionDetails sx={{ p: 0, border: "none" }}>
              <List>
                {category.children.map((item, i) => {
                  return (
                    <ListItemButton
                      key={i}
                      sx={{
                        py: 0.5,
                        backgroundColor:
                          categorySlug === item.slug
                            ? "rgba(0, 0, 0, 0.04)"
                            : "unset",

                        "& .MuiTypography-root": {
                          color:
                            categorySlug === item.slug
                              ? "primary.main"
                              : "text.black",
                        },

                        "&:hover .MuiTypography-root": {
                          color: "primary.main",
                        },
                      }}
                      onClick={() => {
                        onSetCategorySlug(item.slug);
                        onClose?.();
                      }}
                    >
                      <ListItemText
                        primary={item.title}
                        sx={{
                          cursor: "pointer",
                        }}
                        slotProps={{
                          primary: {
                            fontSize: "16px",
                            color: "text.black",
                          },
                        }}
                      />
                    </ListItemButton>
                  );
                })}
              </List>
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </Box>
  );
};

export default memo(CategoryFilter);
