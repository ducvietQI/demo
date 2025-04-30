"use client";

import { AppFormControlTextField } from "@/components";
import {
  Box,
  Button,
  Container,
  GridSize,
  InputLabel,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
import { useForm, useFormState } from "react-hook-form";

interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

const CONTACTPage = () => {
  const { reset, handleSubmit, control, setValue } = useForm<ContactFormData>({
    defaultValues: DEFAULT_INIT_VALUE,
  });
  const { errors } = useFormState({ control });

  const handleSubmitFormData = (data: ContactFormData) => {
    console.log(data);
  };

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
          <Stack width="50%" spacing={2}>
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
                rules={{ required: "Số điện thoại không được để trống." }}
                textfieldProps={{
                  error: !!errors.phoneNumber,
                  helperText: errors.phoneNumber?.message as string,
                }}
              />
            </FormField>

            <FormField label="Email">
              <AppFormControlTextField
                name="email"
                control={control}
                rules={{ required: "email không được để trống." }}
                textfieldProps={{
                  error: !!errors.email,
                  helperText: errors.email?.message as string,
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
                }}
              />
            </FormField>
            <Stack direction="row" justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  fontSize: 14,
                }}
                size="large"
                type="submit"
              >
                Gửi liên hệ
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28319.80673824442!2d105.81636405839672!3d21.02273835997583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2sHanoi%2C%20Vietnam!5e1!3m2!1sen!2s!4v1746007445910!5m2!1sen!2s"
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
    spacing={2}
    sx={{
      width: "100%",
    }}
  >
    <InputLabel
      sx={{
        fontSize: "16px",
        flex: "0 0 150px",
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
