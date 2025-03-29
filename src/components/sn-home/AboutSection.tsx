import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ArrowRightIcon } from "../Icons";

const AboutSection = () => {
  return (
    <Stack bgcolor="#f3f3f3" py={{ xs: "15px", md: "50px" }}>
      <Container>
        <Grid2 container columnSpacing={2} rowSpacing={2}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack>
              <Box
                sx={{
                  height: { xs: 267, md: 400 },
                  position: "relative",
                }}
              >
                <Image
                  src="/images/about-1.jpg"
                  fill
                  alt="about-1"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </Box>
              <Box
                sx={{
                  bgcolor: "primary.main",
                  py: 1,
                  fontWeight: 500,
                  fontSize: "22px",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Câu chuyện thương hiệu
              </Box>
              <Stack bgcolor="white" spacing="15px" p="30px 30px 15px 30px">
                <Typography variant="h6">
                  Năm 2018, SBS HOUSE chính thức được thành lập sau hơn 3 năm
                  hoạt động dưới tên gọi là một Team thiết kế M – Design. Sau
                  thành công từ việc đưa cây xanh vào nhà qua một công trình nhà
                  phố, SBS HOUSE nhen nhuốm hi vọng mang lại những giải pháp
                  kiến trúc tối ưu, nhiều ánh sáng và thông thoáng nhất cho mọi
                  ngôi nhà của người Việt. Từ đó đến nay, chúng tôi vẫn không
                  ngừng theo đuổi mục tiêu này, nỗ lực mỗi ngày để tạo ra “tác
                  phẩm” hơn là sản phẩm cho khách hàng.
                </Typography>
                <Button
                  focusRipple={false}
                  sx={{
                    minWidth: "fit-content",
                    width: "fit-content",
                    borderRadius: "unset",
                    ml: "30px",
                    fontSize: "14px",
                    color: "white",

                    ":hover": {
                      color: "text.black",
                      bgColor: "primary.main",
                    },
                  }}
                  variant="contained"
                  endIcon={<ArrowRightIcon />}
                >
                  Xem đầy đủ nội dung
                </Button>
              </Stack>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack>
              <Box
                sx={{
                  height: { xs: 267, md: 400 },
                  position: "relative",
                }}
              >
                <Image
                  src="/images/about-2.png"
                  fill
                  alt="about-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Box>
              <Box
                sx={{
                  bgcolor: "primary.main",
                  py: 1,
                  fontWeight: 500,
                  fontSize: "22px",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Giá trị cốt lõi
              </Box>
              <Stack bgcolor="white" spacing="15px" p="30px 30px 15px 30px">
                <Typography variant="h6">
                  Trung thực – Sáng tạo – Tận tâm – Kỷ luật – Yêu thương là
                  những giá trị cốt lõi mà SBS HOUSE gầy dựng cho đội ngũ. Vì
                  chúng tôi tin rằng, khi sở hữu những giá trị này thì chúng tôi
                  sẽ thành công trong mọi sản phẩm, dịch vụ và tự tin mang đến
                  điều tốt nhất cho khách hàng. Trung thực, tận tâm trong thương
                  thảo, sáng tạo trong mọi sản phẩm, yêu thương và coi công
                  trình của khách hàng như của chính mình. Và kỷ luật để kịp
                  tiến độ dù trong bất cứ hoàn cảnh nào.
                </Typography>
                <Button
                  focusRipple={false}
                  sx={{
                    minWidth: "fit-content",
                    width: "fit-content",
                    borderRadius: "unset",
                    ml: "30px",
                    fontSize: "14px",
                    color: "white",

                    ":hover": {
                      color: "text.black",
                      bgColor: "primary.main",
                    },
                  }}
                  variant="contained"
                  endIcon={<ArrowRightIcon />}
                >
                  Xem đầy đủ nội dung
                </Button>
              </Stack>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Stack>
  );
};

export default AboutSection;
