"use client";
import apiRequester from "@/api/apiRequester";
import {
  AppFormControlTextField,
  AppHTMLRender,
  ProductSection,
} from "@/components";
import { ApiConst, GlobalsConst } from "@/constant";
import { useTabletDown } from "@/hooks";
import { IProduct } from "@/models/product.type";
import { IPaginationList } from "@/models/project.type";
import { formatNumber } from "@/utils/format.utils";
import {
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid2,
  GridSize,
  InputLabel,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { ReactNode, useMemo, useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import ImageGallery from "react-image-gallery";

interface ContactFormData {
  fullName: string;
  phoneNumber: string;
}

const DEFAULT_INIT_VALUE: ContactFormData = {
  fullName: "",
  phoneNumber: "",
};

const ProductDetailPage = ({
  data,
  relateProductList,
}: {
  data?: IProduct;
  relateProductList: IPaginationList<IProduct>;
}) => {
  const [openContact, setOpenContact] = useState(false);
  const { reset, handleSubmit, control } = useForm<ContactFormData>({
    defaultValues: DEFAULT_INIT_VALUE,
  });
  const { errors } = useFormState({ control });

  const images = useMemo(() => {
    return data?.images?.length
      ? [
          { original: data.avatar.url, thumbnail: data.avatar.url },
          ...data?.images.map((item) => ({
            original: item.url || GlobalsConst.NO_IMAGE,
            thumbnail: item.url || GlobalsConst.NO_IMAGE,
          })),
        ]
      : [
          {
            original: data?.avatar.url || GlobalsConst.NO_IMAGE,
            thumbnail: data?.avatar.url || GlobalsConst.NO_IMAGE,
          },
        ];
  }, [data]);

  const handleOpenContact = () => setOpenContact(true);
  const handleCloseContact = () => setOpenContact(false);

  const handleSubmitFormData = async (data: ContactFormData) => {
    const res = await apiRequester.post(ApiConst.POST_CONTACT, data);
    if (res.status === GlobalsConst.STT_NO_CONTENT) {
      enqueueSnackbar({
        message: "Gửi liên hệ thành công",
        variant: GlobalsConst.SUCCEED_VARIANT,
      });
      reset(DEFAULT_INIT_VALUE);
      setOpenContact(false);
    }
  };

  return (
    <Container>
      <Stack component="form" py={5}>
        <Grid2 container spacing={4}>
          {/* Image Gallery */}
          <Grid2 className="custome-gallery" size={{ xs: 12, md: 6 }}>
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={true}
              showNav={false}
              thumbnailPosition="left"
            />
          </Grid2>

          {/* Product Info */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack spacing={1} sx={{ height: "100%" }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="h2" fontWeight={700}>
                  {data?.name}
                </Typography>
                {data?.isNew && (
                  <Chip label="NEW" color="warning" size="small" />
                )}
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Rating
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 16,
                      color: "#f94c43",
                    },
                  }}
                  size="large"
                  name="simple-controlled"
                  value={data?.rating?.averageVote || 0}
                  readOnly
                />

                <Typography variant="h4" color="text.black">
                  Đã bán: {data?.totalBuy}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Chip
                  sx={{
                    fontSize: 14,
                  }}
                  label={`-${getDiscountPercent(
                    data?.price || 0,
                    data?.salePrice || 0
                  )}%`}
                  color="warning"
                  size="small"
                />
                <Typography color="error" fontWeight={700} fontSize={24}>
                  {formatNumber(data?.salePrice || 0)}₫
                </Typography>
                <Typography
                  sx={{ textDecoration: "line-through" }}
                  color="text.secondary"
                >
                  {formatNumber(data?.price || 0)}₫
                </Typography>
              </Stack>

              <Divider />

              <Box flex={1} display="flex" flexDirection="column">
                <AppHTMLRender htmlRender={data?.description || ""} />
              </Box>

              <Divider />

              {/* Buttons */}
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "#DE6138",
                    "&:hover": { bgcolor: "#c94f28" },
                    color: "#fff",
                    height: 40,
                    fontSize: 16,
                    borderRadius: 0,
                  }}
                  onClick={handleOpenContact}
                >
                  Liên Hệ
                </Button>
              </Stack>

              {/* <Typography variant="h4" color="text.secondary">
                ✔ Miễn phí giao hàng & lắp đặt tại tất cả quận huyện thuộc khu
                vực hỗ trợ
              </Typography>
              <Typography variant="h4" color="text.secondary">
                ✔ Miễn phí 1 đổi 1 - Bảo hành 2 năm - Bảo trì trọn đời (**)
              </Typography>
              <Typography variant="h4" color="text.secondary">
                (*) Không áp dụng cho danh mục Đồ Trang Trí
              </Typography> */}
            </Stack>
          </Grid2>
        </Grid2>

        <Stack mt={4} p={2} border="1px solid #ccc" spacing={2}>
          <AppHTMLRender htmlRender={data?.content || ""} />
        </Stack>

        <ProductSection
          array={relateProductList.items}
          title="Sản phẩm liên quan"
          containerprops={{
            sx: {
              px: "0px !important",
            },
          }}
        />
        <Dialog
          open={openContact}
          onClose={handleCloseContact}
          fullWidth
          maxWidth="xs"
          sx={{
            "& .MuiDialogTitle-root, & .MuiDialogContent-root, & .MuiDialogActions-root, & .MuiInputBase-root, & .MuiButton-root":
              {
                fontSize: "16px",
              },
          }}
        >
          <DialogTitle
            sx={{
              fontSize: 20,
              fontWeight: 600,
              color: "text.black",
            }}
          >
            Liên hệ tư vấn
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2} mt={1}>
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
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseContact}
              sx={{ borderRadius: 0 }}
              variant="outlined"
            >
              Hủy
            </Button>
            <Button
              sx={{ borderRadius: 0 }}
              variant="contained"
              onClick={handleSubmit(handleSubmitFormData)}
            >
              Gửi
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Container>
  );
};

export default ProductDetailPage;

function getDiscountPercent(price: number, salePrice: number): number {
  if (price <= 0 || salePrice <= 0 || salePrice >= price) return 0;
  return Math.round(((price - salePrice) / price) * 100);
}

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
