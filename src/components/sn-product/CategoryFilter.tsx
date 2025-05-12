import { MenuItem } from "@/models/home.type";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { memo } from "react";
import { ArrowDownIcon } from "../Icons";

const CategoryFilter = ({
  categoryId,
  categoriesList,
  onSetCategoryId,
}: {
  categoryId: string;
  categoriesList: MenuItem[];
  onSetCategoryId: (id: string) => void;
}) => {
  return (
    <Box>
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

                        "& .MuiTypography-root": {
                          color:
                            categoryId === item.id
                              ? "primary.main"
                              : "text.black",
                        },

                        "&:hover .MuiTypography-root": {
                          color: "primary.main",
                        },
                      }}
                      onClick={() => {
                        onSetCategoryId(item.id);
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
