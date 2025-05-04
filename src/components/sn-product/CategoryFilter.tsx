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

const arr = [
  {
    title: "Phòng ngủ",
    items: [
      "Giường ngủ các loại",
      "Tủ quần áo",
      "Bàn trang điểm",
      "Tủ đầu giường",
      "Chăn, drap, gối, nệm",
      "Đèn ngủ",
    ],
  },
  {
    title: "Phòng khách",
    items: [
      "Ghế sofa",
      "Bàn trà",
      "Kệ tivi",
      "Tủ sách",
      "Thảm trang trí",
      "Đèn trang trí",
    ],
  },
  {
    title: "Phòng ăn",
    items: [
      "Bàn ăn",
      "Ghế ăn",
      "Tủ bếp",
      "Tủ rượu",
      "Đèn trần phòng ăn",
      "Phụ kiện bàn ăn",
    ],
  },
];

const CategoryFilter = () => {
  return (
    <Box>
      {arr.map((category, index) => (
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
              display: "none", // bỏ line mờ phía trên
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
          {category.items && (
            <AccordionDetails sx={{ p: 0, border: "none" }}>
              <List>
                {category.items.map((item, i) => (
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
                      primary={item}
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
