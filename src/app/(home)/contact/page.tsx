import { Button, Container, Stack, TextField, Box } from "@mui/material";

const CONTACTPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        py: "50px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.8324897244433!2d105.84978977503143!3d21.028774730620526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab953357c995%3A0x1babf6bb4f9a20e!2zSG_DoG4gS2nhur9tIExha2U!5e1!3m2!1sen!2s!4v1745828911099!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{
          border: 0,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Form in the Center */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            width: { xs: "100%", sm: "50%" },
            bgcolor: "white",
            p: 4,
            borderRadius: 2,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <TextField
            sx={{
              ".MuiFormLabel-root": {
                fontSize: "16px",
              },
            }}
            label="Họ và tên"
            variant="outlined"
            required
          />
          <TextField
            sx={{
              ".MuiFormLabel-root": {
                fontSize: "16px",
              },
            }}
            label="Số điện thoại"
            variant="outlined"
            required
          />
          <TextField
            sx={{
              ".MuiFormLabel-root": {
                fontSize: "16px",
              },
            }}
            label="Email"
            variant="outlined"
            required
          />
          <TextField
            sx={{
              ".MuiFormLabel-root": {
                fontSize: "16px",
              },
            }}
            label="Diện tích đất và số tầng muốn xây"
            variant="outlined"
            required
          />
          <TextField
            sx={{
              ".MuiFormLabel-root": {
                fontSize: "16px",
              },
            }}
            label="Địa phương muốn xây"
            variant="outlined"
            required
          />
          <TextField
            sx={{
              ".MuiFormLabel-root": {
                fontSize: "16px",
              },
            }}
            label="Yêu cầu chi tiết nếu có"
            variant="outlined"
          />
          <Stack direction="row" justifyContent="center">
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
      </Container>
    </Box>
  );
};

export default CONTACTPage;
