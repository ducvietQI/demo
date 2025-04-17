"use client";

import { EyeIcon } from "@/components/Icons";
import { BasicBreadcrumbs } from "@/components/sn-service";
import { RouteConstant } from "@/constant";
import {
  Container,
  IconButton,
  Stack,
  Typography,
  Collapse,
  Box,
  List,
  ListItem,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const ServiceDetailPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Stack py={5} spacing={2}>
        <BasicBreadcrumbs />
        <Typography variant="h2" fontWeight={700}>
          Công ty thiết kế nội thất quận 5 đẹp, uy tín và chuyên nghiệp
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Image src="/images/fb.png" height={30} width={30} alt="fb-icon" />
          <Image src="/images/yt.png" height={30} width={30} alt="yt-icon" />
          <Image src="/images/ar.png" height={30} width={30} alt="tt-icon" />
          <EyeIcon sx={{ fontSize: 20 }} />
          <Typography variant="h5">69</Typography>
        </Stack>
        {/* === Mục lục nội dung === */}
        <Box
          sx={{
            backgroundColor: "#f5ba3e",
            padding: 2,
            borderRadius: 1,
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Mục lục nội dung{" "}
            <Typography
              component="span"
              sx={{
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 400,
                color: "blue",
              }}
              onClick={() => setOpen(!open)}
            >
              [{open ? "Ẩn" : "Hiện"}]
            </Typography>
          </Typography>

          <Collapse in={open}>
            <List disablePadding sx={{ pl: 2, pt: 1 }}>
              <ListItem disableGutters sx={listItemSx}>
                1. Công ty thiết kế nội thất quận 5 uy tín và chuyên nghiệp
              </ListItem>

              <ListItem disableGutters sx={listItemSx}>
                2. Những mẫu thiết kế nội thất đẹp, tiện nghi của SBS HOUSE
                <List disablePadding sx={{ pl: 3 }}>
                  <ListItem disableGutters sx={listItemSx}>
                    2.1. Mẫu thiết kế nội thất nhà phố
                  </ListItem>
                  <ListItem disableGutters sx={listItemSx}>
                    2.2. Mẫu thiết kế nội thất biệt thự
                  </ListItem>
                  <ListItem disableGutters sx={listItemSx}>
                    2.3. Mẫu thiết kế nội thất căn hộ duplex
                  </ListItem>
                </List>
              </ListItem>

              <ListItem disableGutters sx={listItemSx}>
                3. Báo giá thiết kế nội thất quận 5 và thi công trọn gói
                <List disablePadding sx={{ pl: 3 }}>
                  <ListItem disableGutters sx={listItemSx}>
                    3.1. Bảng giá thiết kế nội thất quận 5
                  </ListItem>
                  <ListItem disableGutters sx={listItemSx}>
                    3.2. Báo giá thi công nội thất quận 5 trọn gói
                  </ListItem>
                </List>
              </ListItem>

              <ListItem disableGutters sx={listItemSx}>
                4. Thời gian thiết kế và thi công nội thất quận 5, HCM
              </ListItem>
            </List>
          </Collapse>
        </Box>
        <Typography variant="h4">
          Mỗi ngôi nhà là một câu chuyện và nội thất chính là cách để kể câu
          chuyện ấy một cách tinh tế nhất. Nếu bạn đang tìm kiếm một đơn vị
          thiết kế nội thất quận 5 đẹp và có năng lực thi công trọn gói, liên hệ
          ngay với SBS HOUSE. Với giải pháp cá nhân hóa theo từng nhu cầu và
          phong cách sống, SBS HOUSE tạo nên không gian sống như ý cho gia chủ.
          Tham khảo bài viết này để tìm hiểu rõ về dịch vụ và báo giá thiết kế
          thi công nội thất quận 5 tại SBS HOUSE!
        </Typography>
        <Typography variant="h4" fontWeight={700}>
          1. Công ty thiết kế nội thất quận 5 uy tín và chuyên nghiệp
        </Typography>
        <Typography variant="h4">
          SBS HOUSE là đơn vị thiết kế – thi công nội thất chuyên nghiệp, có văn
          phòng đặt tại Lầu 5, 137 Lê Quang Định, P. 14, Q. Bình Thạnh, Tp. HCM.
          SBS HOUSE thiết kế nội thất quận 5 với đa dạng hình thức như: nhà phố,
          biệt thự, căn hộ chung cư, tòa nhà văn phòng, showroom,… đáp ứng nhu
          cầu ngày càng cao về thẩm mỹ và công năng tại khu vực này. Không dừng
          lại ở thiết kế, SBS HOUSE còn đảm nhận thi công nội thất trọn gói tại
          quận 5, giúp khách hàng hiện thực hóa ý tưởng một cách đồng bộ và kiểm
          soát tốt tiến độ, chi phí.
        </Typography>
        <Stack position="relative" height={900}>
          <Image
            src="/images/service-1.webp"
            layout="fill"
            alt="service-1"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            SBS HOUSE cung cấp dịch vụ thiết kế nội thất quận 5 và thi công trọn
            gói nhà phố, biệt thự, căn hộ cao cấp,…
          </Box>
        </Stack>
        <Typography variant="h4">
          Với gần 7 năm hoạt động, SBS HOUSE luôn ghi dấu với những công trình
          được “cá nhân hóa”, đáp ứng nhu cầu của từng gia chủ. Dịch vụ{" "}
          <strong>thiết kế nội thất quận 5</strong> của SBS HOUSE nổi bật với:
        </Typography>
        <ul className="custom-list">
          <li>
            Phong cách đa dạng: từ hiện đại, tối giản đến luxury, Indochine,…
            đội ngũ kiến trúc sư SBS HOUSE có kinh nghiệm đều có những giải
            pháp, phương án phù hợp với từng gia chủ.
          </li>
          <li>
            Thiết kế cá nhân hóa từng bản vẽ theo nhu cầu gia chủ. Từng không
            gian được bố trí dựa trên việc nghiên cứu kỹ lưỡng lối sống, thói
            quen sinh hoạt và sở thích riêng của mỗi chủ đầu tư.
          </li>
          <li>
            Tối ưu công năng, diện tích: Mỗi công trình không chỉ đẹp, mà còn
            tiện nghi và bền vững theo thời gian.
          </li>
          <li>
            Quy trình làm việc minh bạch, chuyên nghiệp: từ tư vấn tận tâm,
            triển khai bản vẽ, báo giá rõ ràng đến thi công thực tế đều được
            giám sát chặt chẽ.
          </li>
        </ul>
        <Stack position="relative" height={900}>
          <Image
            src="/images/service-2.webp"
            layout="fill"
            alt="service-2"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Thiết kế thi công nội thất quận 5 của SBS HOUSE đa dạng phong cách
            hiện đại, luxury, tân cổ điển, indochine
          </Box>
        </Stack>
        <Typography variant="h4" fontWeight={700}>
          2. Những mẫu thiết kế nội thất đẹp, tiện nghi của SBS HOUSE
        </Typography>
        <Typography variant="h4">
          Không gian sống lý tưởng không chỉ là nơi đầy đủ tiện nghi mà còn cần
          truyền cảm hứng và phản ánh phong cách riêng của gia chủ. SBS HOUSE
          luôn chú trọng vào sự hài hòa giữa thẩm mỹ – công năng – cảm xúc trong
          từng thiết kế. Dưới đây là một số mẫu thiết kế nội thất do SBS thực
          hiện, ghi dấu ấn bằng sự chỉn chu và tinh tế trong từng chi tiết.
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          2.1. Mẫu thiết kế nội thất nhà phố
        </Typography>
        <Typography variant="h4">
          Nội thất nhà phố là một trong những thế mạnh lớn của SBS HOUSE, đặc
          biệt tại khu vực TP.HCM và <strong>thiết kế nội thất quận 5</strong>.
          Đặc trưng của nhà phố lô ống là hẹp chiều ngang và thường dài, đòi hỏi
          cách bố trí thông minh để không gian luôn thông thoáng, liền mạch và
          tiện nghi.
        </Typography>
        <Typography variant="h4">
          Ở mẫu thiết kế này SBS HOUSE sử dụng tone màu trung tính hiện đại kết
          hợp cùng vật liệu gỗ, đá, kính hiện đại, ánh sáng đèn và ánh sáng tự
          nhiên để tạo nên không gian ấm cúng nhưng vẫn sang trọng. Từng không
          gian trọng nhà từ chung đến riêng đều được đảm bảo tính thẩm mỹ, gọn
          gàng và tối ưu lưu thông để nhà được sáng thoáng.
        </Typography>
        <Stack position="relative" height={900}>
          <Image
            src="/images/service-3.webp"
            layout="fill"
            alt="service-3"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Phòng khách với bộ sofa tối giản và tinh tế với những góc bo cong
            mềm mại. Vách tường phía sau được ốp gỗ, cùng một hình tròn làm điểm
            nhấn trang trí cho khu vực này thêm ấn tượng
          </Box>
        </Stack>
        <Stack position="relative" height={900}>
          <Image
            src="/images/service-4.webp"
            layout="fill"
            alt="service-4"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Phòng bếp – ăn gọn gàng và hiện đại với 3 tông màu chính là trắng –
            xám và nâu
          </Box>
        </Stack>
        <Stack position="relative" height={900}>
          <Image
            src="/images/service-5.webp"
            layout="fill"
            alt="service-5"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Phòng ngủ sáng thoáng với ánh sáng tự nhiên dồi dào làm nổi bật lên
            không gian ấm cúng của nội thất gỗ chủ đạo
          </Box>
        </Stack>
        <Stack position="relative" height={900}>
          <Image
            src="/images/service-6.webp"
            layout="fill"
            alt="service-6"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Khu vực WC cũng được chú trọng thiết kế theo phong cách hiện đại.
            Vách ngăn bằng kính tạo cảm giác thoáng đãng và rộng rãi cho không
            gian này
          </Box>
        </Stack>
        <Typography variant="h5" fontWeight={700}>
          2.2. Mẫu thiết kế nội thất biệt thự
        </Typography>
        <Typography variant="h4">
          Không gian biệt thự đòi hỏi sự đầu tư tỉ mỉ cả về thẩm mỹ lẫn công
          năng. Trong công trình này, SBS HOUSE đã thiết kế cá nhân hóa theo
          phong cách sống, gu thẩm mỹ và nhu cầu sử dụng riêng của gia chủ.
          Không gian trong căn biệt thự chứa đựng sự đẳng cấp ở mọi chi tiết. Từ
          vật liệu, cách bố trí đến ánh sáng hay màu sắc đều được lựa chọn hài
          hòa, tạo nên sự sang trọng nhưng vẫn rất tiện nghi và ấm cúng. Nếu bạn
          đang chuẩn bị bắt đầu <strong>thiết kế nội thất quận 5</strong>, hẳn
          không nên bỏ lỡ công trình này để tham khảo.
        </Typography>
        <Stack position="relative" height={900}>
          <Image
            src="/images/service-7.webp"
            layout="fill"
            alt="service-7"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Phòng khách tạo điểm nhấn với kiểu thiết kế thông tầng, tạo cảm giác
            đẳng cấp, rộng mở trong không gian. Đèn trần thả vòng được ứng dụng
            để tạo điểm nhấn sang trọng, cho phòng khách này thêm phần bắt mắt
          </Box>
        </Stack>
        <Stack position="relative" height={900}>
          <Image
            src="/images/service-8.webp"
            layout="fill"
            alt="service-8"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Phòng ngủ master với trắng, xám nhạt tạo cảm giác sang trọng, thanh
            lịch. Với ưu thế về diện tích của phòng master, các KTS của SBS
            HOUSE đã bố trí đầy đủ tiện nghi: tab đầu giường, kệ tủ tivi, bục
            ghế ngồi bên cửa sổ,… cho căn phòng
          </Box>
        </Stack>
        <Stack position="relative" height={900}>
          <Image
            src="/images/service-9.webp"
            layout="fill"
            alt="service-9"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Phòng thay đồ trong phòng master cũng là một không gian tạo điểm
            nhấn riêng cho căn nhà, cho phong cách riêng của gia chủ. Khu vực
            này được đội ngũ SBS HOUSE thiết kế với tông màu xám chủ đạo. Các kệ
            tủ bố trí thông minh và kết hợp hệ đèn led tăng thêm phần sang trọng
          </Box>
        </Stack>
        <Typography variant="h5" fontWeight={700}>
          2.3. Mẫu thiết kế nội thất căn hộ duplex
        </Typography>
        <Typography variant="h4">
          Thiết kế nội thất quận 5 cho căn hộ duplex cũng là dịch vụ có tại SBS
          HOUSE và hiện được nhiều chủ đầu tư quan tâm. Căn hộ duplex đặc trưng
          bởi không gian thông 2 tầng, mang lại cảm giác rộng rãi và đẳng cấp.
          Tận dụng ưu điểm trên kết hợp cùng sự sáng tạo trong thiết kế, căn hộ
          này được SBS HOUSE thể hiện sự sang trọng trong từng chi tiết. Không
          chỉ tối ưu diện tích sử dụng, căn hộ này còn tạo ra sự kết nối xuyên
          suốt giữa các tầng, đảm bảo cả tính riêng tư và sự gắn kết.
        </Typography>
        <Typography variant="h4">
          Nội thất căn hộ duplex này SBS HOUSE hướng đến sự sang trọng, thanh
          lịch, tiện nghi và tinh giản, nhưng vẫn đủ điểm nhấn để thể hiện cá
          tính của gia chủ. Màu sắc trung tính, nội thất cao cấp và bố cục hợp
          lý tạo nên một không gian sống vừa hiện đại, vừa sang trọng.
        </Typography>
        <Stack position="relative" height={900}>
          <Image
            src="/images/service-10.webp"
            layout="fill"
            alt="service-10"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Phòng khách thông tầng, cùng các hệ vách kính giúp căn phòng luôn
            tràn ngập ánh sáng. Nội thất tinh giản, hiện đại nhưng lại sang
            trọng một cách tinh tế nhờ các chi tiết vật liệu bằng kim loại, đá,…
          </Box>
        </Stack>
        <Stack position="relative" height={900}>
          <Image
            src="/images/service-11.webp"
            layout="fill"
            alt="service-11"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Phòng ngủ được kết hợp khéo léo giữa màu xám, nâu của vật liệu và
            ánh sáng tự nhiên, màu đèn trần, đèn hắt tường giúp thể hiện trọn
            vẹn sự sang trọng của không gian. Hệ tủ quần áo cánh kính vừa đủ
            rộng rãi cho việc sử dụng, vừa thẩm mỹ hài hòa trong tổng thể
          </Box>
        </Stack>
        <Typography variant="h4" fontWeight={700}>
          3. Báo giá thiết kế nội thất quận 5 và thi công trọn gói
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          3.1. Bảng giá thiết kế nội thất quận 5
        </Typography>
        <Typography variant="h4">
          Với kinh nghiệm đồng hành cùng 2000+ công trình trên cả nước, SBS
          HOUSE luôn làm việc rõ ràng và minh bạch trong chi phí. Dịch vụ{" "}
          <strong>thiết kế nội thất quận 5</strong> và các tỉnh thành khác, SBS
          HOUSE hiện cung cấp với mức giá 200.000/m2. Tổng chi phí sẽ được tính
          theo tổng diện tích căn nhà.
        </Typography>
        <Stack position="relative" height={900}>
          <Image
            src="/images/service-11.jpg"
            layout="fill"
            alt="service-12"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Báo giá gói thiết kế nội thất quận 5, TPHCM trọn gói 200.000 VMĐ/m2
          </Box>
        </Stack>
        <Typography variant="h5" fontWeight={700}>
          3.2. Báo giá thi công nội thất quận 5 trọn gói
        </Typography>
        <Typography variant="h4">
          SBS HOUSE mang đến dịch vụ <strong>thiết kế nội thất quận 5</strong>{" "}
          và thi công trọn gói với quy trình chuyên nghiệp, đảm bảo đúng tiến độ
          và chất lượng. Trước khi thi công, SBS HOUSE sẽ tiến hành bóc tách chi
          tiết khối lượng, vật liệu và hạng mục để khách hàng dễ dàng nắm bắt
          chi phí. Sau khi ký hợp đồng đội ngũ thi công sẽ tiến hành thực hiện
          các công việc theo kế hoạch.
        </Typography>

        <Typography variant="h4">
          Hiện nay, SBS HOUSE thiết kế thi công nội thất quận 5 với 2 đơn giá là
          3.000.000 VNĐ/m2 đối với nhà phố và 4.000.000 VNĐ/m2 cho biệt thự. Mỗi
          công trình sẽ khác nhau về tổng chi phí dựa theo quy mô, yêu cầu. Để
          thể lên kế hoạch ngân sách cho ngôi nhà của mình tốt ngay từ khi bắt
          đầu, bạn có thể liên hệ SBS HOUSE để được hỗ trợ khái toán nhanh
          chóng.
        </Typography>
        <Stack position="relative" height={400}>
          <Image
            src="/images/service-12.jpg"
            layout="fill"
            alt="service-13"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            position="absolute"
            bottom={-10}
            fontSize="16px"
            textAlign="center"
            fontStyle="italic"
          >
            Báo giá thiết kế nội thất tại quận 5 và thi công trọn gói do SBS
            HOUSE cung cấp với công trình nhà phố
          </Box>
        </Stack>
        <Stack position="relative" height={400}>
          <Image
            src="/images/service-13.jpg"
            layout="fill"
            alt="service-14"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            position="absolute"
            bottom={-10}
            fontSize="16px"
            textAlign="center"
            fontStyle="italic"
          >
            Báo giá thiết kế thi công nội thất quận 5 đối với các công trình
            biệt thự
          </Box>
        </Stack>

        <Typography variant="h4" fontWeight={700}>
          4. Thời gian thiết kế và thi công nội thất quận 5, HCM
        </Typography>

        <Typography variant="h4">
          Tại SBS HOUSE, quy trình <strong>thiết kế nội thất quận 5</strong> và
          thi công được thực hiện chuyên nghiệp và chặt chẽ. Tiến độ được đảm
          bảo đúng với cam kết mà SBS HOUSE đã thỏa thuận và ký kết với gia chủ.
          Đồng thời vẫn giữ vững chất lượng và tính thẩm mỹ cho từng không gian.
        </Typography>
        <Typography variant="h4">
          Thời gian thiết kế được linh hoạt, phụ thuộc cho từng ngôi nhà theo
          quy mô và yêu cầu cụ thể từ chủ đầu tư. Trung bình tổng thời gian
          thiết kế dao động từ 20 – 30 ngày, bao gồm cả giai đoạn tư vấn, thực
          hiện bản vẽ và các lần chỉnh sửa theo phản hồi từ chủ đầu tư.
        </Typography>
        <Typography variant="h4">
          Với đội ngũ thi công có tay nghề và quy trình làm việc nghiêm ngặt,
          giám sát chặt chẽ hàng ngày, SBS HOUSE có thể hoàn thiện thi công đảm
          bảo chất lượng trong khoảng thời gian hợp lý. Nhà phố, căn hộ thi công
          hoàn thiện nội thất trong khoảng 15 ngày. Công trình biệt thự do khối
          lượng công việc và yêu cầu thẩm mỹ cao hơn, thời gian thi công có thể
          kéo dài khoảng 20 ngày.
        </Typography>

        <Stack position="relative" height={900}>
          <Image
            src="/images/service-15.webp"
            layout="fill"
            alt="service-15"
            loading="lazy"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize="16px"
            textAlign="center"
          >
            Thiết kế nội thất quận 5 cần từ 20 – 30 ngày để hoàn thành. Quá
            trình thi công cần đến 15 – 20 ngày để hoàn thành, tùy vào quy mô
            công trình
          </Box>
        </Stack>

        <Typography variant="h4">
          Hy vọng bài viết đã mang đến cho bạn nhiều thông tin hữu ích. Nếu bạn
          đang tìm kiếm một đơn vị thiết kế nội thất quận 5 và thi công trọn gói
          uy tín, chuyên nghiệp thì đừng bỏ qua SBS HOUSE. Không chỉ có những
          thiết kế mang đậm dấu ấn cá nhân đến từ các kiến trúc sư có chuyên
          môn, SBS HOUSE còn sở hữu đội ngũ thi công có kinh nghiệm, có tay
          nghề. Bạn sẽ luôn có thể sở hữu một không gian sống thẩm mỹ, tiện nghi
          như ý khi đồng hành cùng SBS HOUSE.
        </Typography>

        <Typography fontStyle="italic" variant="h4" fontWeight="bold">
          Không chỉ thiết kế thi công nội thất, SBS HOUSE còn là đơn vị thiết kế
          – xây nhà trọn gói tại Quận 5 uy tín được nhiều khách hàng tin tưởng.
          Chọn SBS HOUSE xây nhà trọn gói, gia chủ có thể an tâm từ lúc lên ý
          tưởng đến khi nhận bàn giao ngôi nhà hoàn chỉnh. Đừng ngần ngại, hãy
          liên hệ ngay với SBS HOUSE để nhận tư vấn chi tiết ngay trong hôm nay
          nhé!
        </Typography>

        <Box mt={5}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ backgroundColor: "#000", color: "#f5ba3e", p: 2 }}
          >
            Các câu hỏi thường gặp
          </Typography>

          {[1, 2, 3, 4, 5].map((index) => {
            const questions = [
              {
                title: "Nhà thầu thi công không giống với thiết kế?",
                content:
                  "Khi lựa chọn dịch vụ thiết kế kiến trúc của SBS HOUSE, chủ đầu tư hoàn toàn yên tâm về vấn đề đơn vị nhà thầu thi công không giống với bản vẽ. Bởi sau khi hoàn thành bản vẽ thiết kế, SBS HOUSE sẽ bàn giao hồ sơ bản vẽ chi tiết được chú thích từng vị trí, màu sắc, tên vật liệu,... Đặc biệt, SBS HOUSE luôn đồng hành cùng khách hàng trong suốt quá trình thi công đến khi hoàn thiện ngôi nhà.  1. Bàn giao hồ...",
              },
              {
                title: "Hồ sơ xây dựng nhà hoàn chỉnh gồm những gì?",
                content:
                  "Hồ sơ hoàn chỉnh khi xây nhà gồm phần kiến trúc, kết cấu, hạng mục điện, nước, nội thất và sân vườn là những hồ sơ mà SBS HOUSE sẽ bàn giao cho chủ đầu tư để thi công và giám sát công trình.  1. Phần kiến trúc Nhằm đảm bảo chi tiết thiết kế kiến trúc, tính thẩm mỹ của công trình SBS sẽ gửi đến chủ đầu tư phần kiến trúc với các thông tin như sau: Phối cảnh 3D tổng thể Mặt bằng các tầng Mặt bằng...",
              },
              {
                title: "Thời gian tiến độ thiết kế kiến trúc của SBS HOUSE",
                content:
                  "Với sự tin tưởng của khách hàng ở xa khi lựa chọn SBS HOUSE là nơi gửi gắm, xây dựng nên tổ ấm cho gia đình. Để sản phẩm thiết kế hiện thực hóa một cách hoàn hảo nhất, SBS HOUSE sẵn sàng hỗ trợ và tư vấn khách hàng trong quá trình xây dựng nên ngôi nhà. Dưới đây là 5 vấn đề SBS HOUSE hỗ trợ khách hàng trong quá trình thi công. Mời bạn cùng theo dõi nhé! 1. SBS HOUSE hỗ trợ tư vấn về giá...",
              },
              {
                title:
                  "SBS HOUSE hỗ trợ khách hàng ở xa trong quá trình thi công như thế nào?",
                content:
                  "Với sự tin tưởng của khách hàng ở xa khi lựa chọn SBS HOUSE là nơi gửi gắm, xây dựng nên tổ ấm cho gia đình. Để sản phẩm thiết kế hiện thực hóa một cách hoàn hảo nhất, SBS HOUSE sẵn sàng hỗ trợ và tư vấn khách hàng trong quá trình xây dựng nên ngôi nhà. Dưới đây là 5 vấn đề SBS HOUSE hỗ trợ khách hàng trong quá trình thi công. Mời bạn cùng theo dõi nhé! 1. SBS HOUSE hỗ trợ tư vấn về giá...",
              },
              {
                title:
                  "Hạng mục xây nhà phần thô hoàn thiện gồm những công việc gì?",
                content:
                  "Quá trình xây dựng nhà ở gồm các công đoạn quan trọng đó là phần thô, phần hoàn thiện và thi công nội thất. Trong đó, xây nhà phần thô + hoàn thiện là công đoạn tốn nhiều thời gian và chi phí; là gốc rễ đảm bảo ngôi nhà vững chắc, bền đẹp theo năm tháng. SBS HOUSE xin chia sẻ đến bạn các công việc trong xây nhà phần thô và xây nhà hoàn thiện. Mời bạn cùng theo dõi! 1. Những công việc trong xây nhà phần...",
              },
            ];

            return (
              <CollapseFAQ
                key={index}
                number={index}
                title={questions[index - 1].title}
                content={questions[index - 1].content}
              />
            );
          })}
        </Box>
      </Stack>
    </Container>
  );
};

export default ServiceDetailPage;

const listItemSx = {
  display: "list-item",
  fontSize: 14,
  color: "#fff",
  cursor: "pointer",
  "&:hover": {
    color: "text.black",
    textDecoration: "underline",
  },
};

const CollapseFAQ = ({
  number,
  title,
  content,
}: {
  number: number;
  title: string;
  content: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Stack
        direction="row"
        sx={{
          gap: 2,
          borderBottom: "1px solid #eee",
          py: 2,
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            minWidth: 40,
            backgroundColor: "#f5ba3e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          {number}
        </Box>

        <Stack justifyContent="center" flex={1}>
          <Box
            height="100%"
            onClick={() => setExpanded((prev) => !prev)}
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" fontWeight={600}>
              {title}
            </Typography>
            <Typography fontSize={16}>{expanded ? "▲" : "▼"}</Typography>
          </Box>
        </Stack>
      </Stack>
      <Collapse in={expanded}>
        <Typography p={2} mt={1} fontSize={15} color="text.secondary">
          {content}
        </Typography>
        <Typography
          alignSelf="flex-end"
          mt={1}
          fontSize={14}
          sx={{ color: "text.black", fontWeight: 500, cursor: "pointer" }}
        >
          XEM THÊM ↗
        </Typography>
      </Collapse>
    </>
  );
};
