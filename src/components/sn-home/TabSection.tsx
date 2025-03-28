import { useState } from "react";
import { Stack, Container, AppBar, Box, Tab, Tabs, Grid2 } from "@mui/material";
import Image from "next/image";
import { ArrowRightIcon, RightArrow } from "../Icons";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

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
        <Box
          sx={{ pt: "50px", pb: "100px", width: "100%", bgcolor: "#161616" }}
        >
          <Container>
            <Grid2 container spacing={3}>
              {convertArr.map((step, idx) => (
                <Grid2
                  key={idx}
                  size={3}
                  textAlign="center"
                  position="relative"
                >
                  <Stack alignItems="center">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={128}
                      height={129}
                      loading="lazy"
                    />
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
                        color: "text.primary",
                        mt: 1,
                        fontSize: "14px",
                      }}
                    >
                      {step.description}
                    </Box>
                  </Stack>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 40,
                      right: -30,
                      color: "text.primary",
                      fontSize: "40px",
                    }}
                  >
                    {idx < steps.length - 1 && <RightArrow />}
                  </Box>
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
    <Stack bgcolor="#f3f3f3" alignItems="center" width="100%">
      <AppBar sx={{ width: 600 }} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="full width tabs example"
        >
          <Tab
            label="Thiết kế"
            {...a11yProps(0)}
            sx={{
              width: 300,
              color: "white",
              fontSize: "20px",
              bgcolor: value === 0 ? "bg.main" : "transparent",
              "&:hover": {
                color: "primary.main",
                bgcolor: "bg.main",
              },
            }}
          />
          <Tab
            label="Thi công trọn gói"
            {...a11yProps(1)}
            sx={{
              width: 300,
              color: "white",
              fontSize: "20px",
              bgcolor: value === 1 ? "bg.main" : "transparent",
              "&:hover": {
                color: "primary.main",
                bgcolor: "bg.main",
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
      "Hai bên gặp gỡ trao đổi thống nhất các vấn đề liên quan tiến độ, chất lượng, ngày khởi công và các điều khoản hợp đồng.",
    icon: "/images/icon-5.png",
  },
  {
    title: "BÀN GIAO & QUYẾT TOÁN",
    description:
      "Kiểm tra, nghiệm thu và thanh quyết toán hợp đồng. Tiến hành bảo hành bảo trì dài hạn theo cam kết hợp đồng.",
    icon: "/images/icon-6.png",
  },
];
