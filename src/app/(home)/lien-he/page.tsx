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
  InputLabel,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { enqueueSnackbar } from "notistack";
import { ReactNode, useMemo, useState } from "react";
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
        >
          <Stack width={{ xs: "100%", md: "50%" }} spacing={2}>
            <FormField label="Họ và tên">
              <AppFormControlTextField
                name="fullName"
                control={control}
                rules={{ required: "Họ và tên không được để trống." }}
                textfieldProps={{
                  error: !!errors.fullName,
                  helperText: errors.fullName?.message as string,
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
                }}
              />
            </FormField>

            <FormField label="Email">
              <AppFormControlTextField name="email" control={control} />
            </FormField>

            <FormField label="Lời nhắn">
              <AppFormControlTextField
                name="message"
                control={control}
                textfieldProps={{
                  multiline: true,
                  rows: 4,
                }}
              />
            </FormField>
            <Stack direction="row" justifyContent="flex-end">
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  fontSize: 14,
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

          <Stack
            sx={{
              display: { xs: "none", md: "block" },
            }}
            position="relative"
            width="50%"
            height="500px"
          >
            <Image
              src="/images/chi-ha-footer.png"
              layout="fill"
              objectFit="contain"
              alt="chi-ha"
            />
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
