import { Button, Container, Stack, TextField } from "@mui/material";
import Image from "next/image";

const CONTACTPage = () => {
  return (
    <Container>
      <Stack direction="row" spacing={2} py={6}>
        <Stack width="50%" spacing={2}>
          <TextField
            sx={{
              ".MuiFormLabel-root": {
                fontSize: "16px",
              },
            }}
            label="Họ và tên"
            variant="filled"
            required
          />
          <TextField
            sx={{
              ".MuiFormLabel-root": {
                fontSize: "16px",
              },
            }}
            label="Số điện thoại"
            variant="filled"
            required
          />
          <TextField
            sx={{
              ".MuiFormLabel-root": {
                fontSize: "16px",
              },
            }}
            label="Email"
            variant="filled"
            required
          />
          <TextField
            sx={{
              ".MuiFormLabel-root": {
                fontSize: "16px",
              },
            }}
            label="Diện tích đất và số tầng muốn xây"
            variant="filled"
            required
          />
          <TextField
            sx={{
              ".MuiFormLabel-root": {
                fontSize: "16px",
              },
            }}
            label="Địa phương muốn xây"
            variant="filled"
            required
          />
          <TextField
            sx={{
              ".MuiFormLabel-root": {
                fontSize: "16px",
              },
            }}
            label="yêu cầu chia tiết nếu có"
            variant="filled"
          />
          <Stack direction="row">
            <Button
              variant="contained"
              sx={{
                color: "white",
                fontSize: 14,
              }}
              size="large"
            >
              Gửi yêu cầu thiết kế thi công
            </Button>
          </Stack>
        </Stack>

        <Stack position="relative" width="50%" height="500px">
          <Image
            src="/images/chi-ha-footer.png"
            layout="fill"
            objectFit="contain"
            alt="chi-ha"
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default CONTACTPage;
