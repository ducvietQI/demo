import { useTabletDown } from "@/hooks";
import { AppBar, Box, Container, Grid2, Stack, Tab, Tabs } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { RightArrow } from "../Icons";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const isTabletDown = useTabletDown();
  const convertArr = index === 0 ? steps : steps2;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ width: "100%" }}>
          <Container>
            <Grid2 container>
              {convertArr.map((step, idx) => (
                <Grid2
                  key={idx}
                  size={{ xs: 12, md: 3 }}
                  textAlign="center"
                  position="relative"
                >
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      width: "100%",
                      aspectRatio: "1", // Đảm bảo chiều cao và chiều rộng bằng nhau
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      boxShadow: "0 0 0 1px #E5E5E5", // Tạo viền bằng box-shadow
                      backgroundColor: "#fff", // Đảm bảo màu nền
                      p: 2,
                      pt: 5,
                    }}
                  >
                    <Box
                      sx={{
                        filter:
                          "brightness(0) saturate(100%) invert(8%) sepia(1%) saturate(7500%) hue-rotate(180deg) brightness(100%) contrast(95%)",
                      }}
                    >
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={isTabletDown ? 79 : 128}
                        height={isTabletDown ? 80 : 129}
                        loading="lazy"
                        sizes="(max-width: 600px) 79px, 128px"
                      />
                    </Box>
                    <Box
                      sx={{
                        color: "primary.main",
                        fontSize: "18px",
                        fontWeight: "bold",
                        mt: 1,
                      }}
                    >
                      {step.title}
                    </Box>
                    <Box
                      sx={{
                        color: "text.black",
                        mt: 1,
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {step.description}
                    </Box>
                  </Stack>
                </Grid2>
              ))}
            </Grid2>
          </Container>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function TabSection() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack alignItems="center" width="100%" my={5}>
      <AppBar sx={{ width: { xs: "100%", md: 608 } }} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          aria-label="full width tabs example"
        >
          <Tab
            label="Thiết kế"
            {...a11yProps(0)}
            sx={{
              width: "50%",
              color: value === 0 ? "#fff" : "text.black",
              fontSize: { xs: "14px", md: "20px" },
              bgcolor: value === 0 ? "primary.main" : "white",
              "&:hover": {
                color: "#fff",
                bgcolor: "primary.main",
              },
            }}
          />
          <Tab
            label="Thi công trọn gói"
            {...a11yProps(1)}
            sx={{
              width: "50%",
              color: value === 1 ? "#fff" : "text.black",
              fontSize: { xs: "14px", md: "20px" },
              bgcolor: value === 1 ? "primary.main" : "white",
              "&:hover": {
                color: "#fff",
                bgcolor: "primary.main",
              },
            }}
          />
        </Tabs>
      </AppBar>

      <Box sx={{ width: "100%", p: 0 }}>
        <TabPanel value={value} index={0} />
        <TabPanel value={value} index={1} />
      </Box>
    </Stack>
  );
}

const steps = [
  {
    title: "TRAO ĐỔI TƯ VẤN",
    description:
      "Trao đổi yêu cầu, tư vấn định hướng ý tưởng, phong cách và mức đầu tư",
    icon: "/images/icon-1.png",
  },
  {
    title: "BÁO GIÁ QUY TRÌNH",
    description:
      "Gửi khách hàng báo giá theo đúng gói thiết kế mà Khách Hàng đang đề cập, kèm quy trình làm việc cụ thể, chi tiết",
    icon: "/images/icon-2.png",
  },
  {
    title: "KÝ HỢP ĐỒNG",
    description:
      "Thực hiện các thủ tục hành chính và bắt đầu triển khai các công việc theo tiến độ thống nhất",
    icon: "/images/icon-3.png",
  },
  {
    title: "BÀN GIAO & QUYẾT TOÁN",
    description:
      "Sau khi thống nhất hồ sơ báo cáo tiến độ, khách hàng thanh toán lần cuối giá trị HĐ còn lại trước khi nhận hồ sơ hoàn chỉnh.",
    icon: "/images/icon-4.png",
  },
];

const steps2 = [
  {
    title: "TRAO ĐỔI TƯ VẤN",
    description:
      "Trao đổi và tư vấn khách hàng về nhu cầu, mong muốn, và định hướng mức đầu tư.",
    icon: "/images/icon-1.png",
  },
  {
    title: "BÁO GIÁ",
    description:
      "Gửi báo giá thi công, chủng loại vật tư và Quy trình thi công để khách hàng nắm được thông tin.",
    icon: "/images/icon-2.png",
  },
  {
    title: "KÝ HỢP ĐỒNG",
    description:
      "Hai bên gặp gỡ trao đổi thống nhất các vấn đề liên quan tiến độ, chất lượng, ngày khởi công và điều khoản hợp đồng.",
    icon: "/images/icon-5.png",
  },
  {
    title: "BÀN GIAO & QUYẾT TOÁN",
    description:
      "Kiểm tra, nghiệm thu và thanh quyết toán hợp đồng. Tiến hành bảo hành bảo trì dài hạn theo cam kết hợp đồng.",
    icon: "/images/icon-6.png",
  },
];
