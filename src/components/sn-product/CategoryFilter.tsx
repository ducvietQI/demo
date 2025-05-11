import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { ArrowDownIcon } from "../Icons";
import { MenuItem } from "@/models/home.type";

const CategoryFilter = ({ categoriesList }: { categoriesList: MenuItem[] }) => {
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
                {category.children.map((item, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      py: 0.5,

                      "&:hover .MuiTypography-root": {
                        color: "primary.main",
                      },
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
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </Box>
  );
};

export default CategoryFilter;
