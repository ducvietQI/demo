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
  categorySlug,
  categoriesList,
  onSetCategorySlug,
  onClose,
}: {
  categorySlug: string;
  categoriesList: MenuItem[];
  onSetCategorySlug: (slug: string) => void;
  onClose?: () => void;
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
