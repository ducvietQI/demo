"use client";

import apiRequester from "@/api/apiRequester";
import { AppFormControlTextField } from "@/components";
import { ApiConst, GlobalsConst } from "@/constant";
import { useAppSelector } from "@/redux-store";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  GridSize,
  IconButton,
  InputLabel,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { enqueueSnackbar } from "notistack";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { useForm, useFormState } from "react-hook-form";

interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

const CONTACTPage = () => {
  const [loading, setLoading] = useState(false);
  const { reset, handleSubmit, control } = useForm<ContactFormData>({
    defaultValues: DEFAULT_INIT_VALUE,
  });
  const { errors } = useFormState({ control });
  const { footerData } = useAppSelector((state) => state.appReducer);
  const theme = useTheme();

  // Ref để lấy chiều cao form bên trái
  const formRef = useRef<HTMLDivElement>(null);
  const [formHeight, setFormHeight] = useState<number | undefined>(undefined);

  // Cập nhật chiều cao khi render
  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight);
    }
  }, [formRef.current, loading, errors]);

  const handleSubmitFormData = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const res = await apiRequester.post(ApiConst.POST_CONTACT, data);
      if (res.status === GlobalsConst.STT_NO_CONTENT) {
        enqueueSnackbar({
          message: "Gửi liên hệ thành công",
          variant: GlobalsConst.SUCCEED_VARIANT,
        });
        reset(DEFAULT_INIT_VALUE);
      }
    } catch (error) {
      enqueueSnackbar({
        message: "Đã xảy ra lỗi khi gửi liên hệ.",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const [latitude, longitude] = useMemo(() => {
    if (footerData?.addresses?.length) {
      return [
        footerData?.addresses[0]?.latitude,
        footerData?.addresses[0]?.longitude,
      ];
    }
    return ["", ""];
  }, [footerData]);

  return (
    <Stack>
      <Container>
        <Stack
          direction="row"
          spacing={2}
          py={6}
          component="form"
          onSubmit={handleSubmit(handleSubmitFormData)}
          justifyContent="center"
        >
          {/* Form bên trái */}
          <Stack
            width={{ xs: "100%", md: "50%" }}
            spacing={2}
            ref={formRef}
            sx={{ fontSize: 16 }}
          >
            <FormField label="Họ và tên">
              <AppFormControlTextField
                name="fullName"
                control={control}
                rules={{ required: "Họ và tên không được để trống." }}
                textfieldProps={{
                  error: !!errors.fullName,
                  helperText: errors.fullName?.message as string,
                  sx: { fontSize: 16 },
                }}
              />
            </FormField>

            <FormField label="Số điện thoại">
              <AppFormControlTextField
                name="phoneNumber"
                control={control}
                rules={{
                  required: "Số điện thoại không được để trống.",
                  pattern: {
                    value: GlobalsConst.REGEX_PHONE_NUMBER,
                    message: "Số điện thoại không hợp lệ!",
                  },
                }}
                textfieldProps={{
                  error: !!errors.phoneNumber,
                  helperText: errors.phoneNumber?.message as string,
                  sx: { fontSize: 16 },
                }}
              />
            </FormField>

            <FormField label="Email">
              <AppFormControlTextField
                name="email"
                control={control}
                rules={{
                  required: "Email không được để trống.",
                  pattern: {
                    value: GlobalsConst.REGEX_EMAIL,
                    message: "Email không hợp lệ!",
                  },
                }}
                textfieldProps={{
                  error: !!errors.email,
                  helperText: errors.email?.message as string,
                  sx: { fontSize: 16 },
                }}
              />
            </FormField>

            <FormField label="Lời nhắn">
              <AppFormControlTextField
                name="message"
                control={control}
                textfieldProps={{
                  multiline: true,
                  rows: 4,
                  sx: { fontSize: 16 },
                }}
              />
            </FormField>
            <Stack direction="row" justifyContent="flex-end">
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  fontSize: 16,
                  borderRadius: 0,
                }}
                size="large"
                disabled={loading}
                type="submit"
                startIcon={loading ? <CircularProgress size={20} /> : <></>}
              >
                Gửi liên hệ
              </Button>
            </Stack>
          </Stack>

          {/* Thông tin liên hệ bên phải */}
          <Stack
            width={{ xs: "0", md: "40%" }}
            minWidth={300}
            bgcolor={theme.palette.primary.main}
            color="#fff"
            p={4}
            display={{ xs: "none", md: "flex" }}
            // justifyContent="center"
            alignItems="flex-start"
            sx={{
              fontSize: 16,
              height: formHeight ? `${formHeight}px` : "auto",
              transition: "height 0.2s",
            }}
          >
            <Box width="100%">
              <Box fontWeight={700} fontSize={30} mb={2}>
                Thông tin liên hệ
              </Box>

              <Typography
                fontWeight={600}
                color="white"
                borderTop="1px solid"
                borderColor="primary.main"
                fontSize="18px"
                mb={1}
                letterSpacing="-0.7px"
              >
                {footerData.title}
              </Typography>
              <Typography color="white" fontSize="16px" mb={2}>
                {footerData.description}
              </Typography>
              {/* <Stack spacing={1} fontSize={16}>
                <Box display="flex" alignItems="center" gap={1}>
                  <span role="img" aria-label="address">
                    📍
                  </span>
                  533 PVB, P.15, Q.TB, TPHCM
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <span role="img" aria-label="phone">
                    📞
                  </span>
                  +84 908 562750
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <span role="img" aria-label="email">
                    ✉️
                  </span>
                  contact.vietblogger@gmail.com
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <span role="img" aria-label="facebook">
                    🌐
                  </span>
                  fb.com/kequaduongvodanh
                </Box>
              </Stack> */}
              {Array.isArray(footerData.hotline) &&
                footerData.hotline.map((item, i) => (
                  <Typography color="white" key={i} fontSize="18px">
                    📞 {item}
                  </Typography>
                ))}
              {footerData.email && (
                <Typography mt={2} fontSize="18px" color="white">
                  📧 {footerData.email}
                </Typography>
              )}
              {/* <Stack
                direction="row"
                justifyContent={{ xs: "center", md: "flex-end" }}
                mt={2}
                spacing={{ xs: 0, md: 1 }}
              >
                <SocialIconButton
                  href={footerData.social?.instagram || ""}
                  iconSrc="/images/ig.png"
                  alt="Instagram Icon"
                />
                <SocialIconButton
                  href={footerData.social?.youtube || ""}
                  iconSrc="/images/yt.png"
                  alt="Facebook Icon"
                />
                <SocialIconButton
                  href={footerData.social?.tiktok || ""}
                  iconSrc="/images/ar.png"
                  alt="TikTok Icon"
                />
                <SocialIconButton
                  href={`https://zalo.me/${footerData.social?.zalo}` || ""}
                  iconSrc="/images/zalo.png"
                  alt="Zalo Icon"
                />
              </Stack> */}
            </Box>
          </Stack>
        </Stack>
      </Container>
      <iframe
        src={`https://www.google.com/maps?q=${longitude},${latitude}&z=14&output=embed`}
        width="100%"
        height="600"
        loading="lazy"
      />
    </Stack>
  );
};

export default CONTACTPage;

const DEFAULT_INIT_VALUE: ContactFormData = {
  fullName: "",
  phoneNumber: "",
  email: "",
  message: "",
};

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: ReactNode;
  labelSize?: GridSize;
  childrenSize?: GridSize;
  flexLabel?: string;
}

const FormField = ({ label, required = false, children }: FormFieldProps) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={{ xs: 0, md: 2 }}
    sx={{
      width: "100%",
    }}
  >
    <InputLabel
      sx={{
        fontSize: "16px",
        flex: { xs: "0 0 120px", md: "0 0 150px" },
        textAlign: "left",
        fontWeight: 500,
      }}
      required={required}
    >
      {label}
    </InputLabel>
    <Box flex={1}>{children}</Box>
  </Stack>
);

const SocialIconButton = ({
  href,
  iconSrc,
  alt,
}: {
  href: string;
  iconSrc: string;
  alt: string;
}) => {
  return (
    <IconButton
      onClick={() => (href ? window.open(href, "_blank") : null)}
      sx={{
        color: "white",
        background: "white",
        ":hover": {
          background: "none",
        },
      }}
    >
      <Image
        src={iconSrc}
        height={iconSrc.includes("ig.png") ? 18 : 30}
        width={iconSrc.includes("ig.png") ? 18 : 30}
        alt={alt}
      />
    </IconButton>
  );
};
