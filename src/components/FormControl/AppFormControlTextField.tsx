"use client";

import {
  InputLabel,
  InputLabelProps,
  Stack,
  StackProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import React, { memo } from "react";
import {
  Control,
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

const AppFormControlTextField = <T extends FieldValues>({
  label,
  control,
  name,
  rules,
  controlProps,
  required = false,
  labelProps,
  textfieldProps,
  onChangeValueForm,
  ...otherProps
}: AppFormControlTextFieldProps<T>) => {
  return (
    <Stack {...otherProps}>
      {label && (
        <InputLabel
          required={required}
          htmlFor={name}
          {...labelProps}
          sx={{
            "&": {
              mb: 0.5,
            },
            ...labelProps?.sx,
          }}
        >
          {label}
        </InputLabel>
      )}
      <Controller
        control={control}
        name={name}
        rules={{ required, ...rules }}
        {...controlProps}
        render={({ field: { onChange, ...otherFieldProps } }) => (
          <TextField
            id={name}
            required={required}
            onChange={(event) => {
              if (onChangeValueForm instanceof Function)
                onChangeValueForm(event);

              onChange(event);
            }}
            {...otherFieldProps}
            {...textfieldProps}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 0, // Loại bỏ borderRadius
                bgcolor: "#f5f5f5", // Màu nền giống hình ảnh
                "& fieldset": {
                  borderColor: "#d9d9d9", // Màu viền giống hình ảnh
                },
                "&:hover fieldset": {
                  borderColor: "primary.main", // Màu viền khi hover
                },
              },
              "& .MuiInputBase-input": {
                color: "text.black", // Màu chữ trong ô input
                fontSize: "16px", // Kích thước chữ trong ô input
              },
              "& .MuiFormHelperText-root": {
                fontSize: "14px", // Font size của helperText
              },
            }}
          />
        )}
      />
    </Stack>
  );
};

export type AppFormControlTextFieldProps<T extends FieldValues> = StackProps & {
  label?: string;
  control: Control<any, object>;
  name: FieldPath<T>;

  rules?:
    | Omit<
        RegisterOptions<any, Path<T>>,
        "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
      >
    | undefined;
  required?: boolean;
  controlProps?: Omit<ControllerProps, "render" | "name" | "control">;
  labelProps?: InputLabelProps;
  textfieldProps?: TextFieldProps;
  onChangeValueForm?: (
    event?: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default memo(AppFormControlTextField);
