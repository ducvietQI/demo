"use client";

import { Gallery } from "@/components";
import { EyeIcon } from "@/components/Icons";
import ProjectBreadcrumb from "@/components/sn-project/ProjectBreadcrumb";
import {
  Box,
  Collapse,
  Container,
  List,
  ListItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProjectDetailPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number | null>(0);

  return (
    <Container>
      <Stack py={5} spacing={2}>
        <ProjectBreadcrumb />
        <Typography variant="h2" fontWeight={700}>
          Sống cùng với thiên nhiên – Công trình hiện đại ngập tràn ánh sáng
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Image src="/images/fb.png" height={30} width={30} alt="fb-icon" />
          <Image src="/images/yt.png" height={30} width={30} alt="yt-icon" />
          <Image src="/images/ar.png" height={30} width={30} alt="tt-icon" />
          <EyeIcon sx={{ fontSize: 20 }} />
          <Typography variant="h5">69</Typography>
        </Stack>

        <ImageGallery items={images} showIndex />

        <Box bgcolor="black" color="white" py={3} textAlign="center">
          <Typography variant="h6" color="orange">
            Thông tin công trình
          </Typography>
          <Typography variant="h5" fontWeight={500}>
            Sống cùng với thiên nhiên – Công trình hiện đại ngập tràn ánh sáng
          </Typography>
        </Box>

        <Stack direction="row" justifyContent="space-between" bgcolor="#F5B940">
          {[
            {
              icon: "/images/icon-7.png",
              title: "Vị trí công trình",
              desc: "Đà Nẵng",
            },
            {
              icon: "/images/icon-8.png",
              title: "Số tầng",
              desc: "3 tầng",
            },
            {
              icon: "/images/icon-9.png",
              title: "Diện tích đất",
              desc: "5 x 20m",
            },
            {
              icon: "/images/icon-10.png",
              title: "Diện tích xây dựng",
              desc: "246.7m2",
            },
            {
              icon: "/images/icon-11.png",
              title: "Chi phí xây dựng",
              desc: "",
            },
          ].map((item, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              spacing={1}
              py={2}
              px={2}
              flex={1}
              borderLeft={index !== 0 ? "1px solid white" : "none"}
            >
              <Image src={item.icon} alt="icon" width={50} height={50} />
              <Box>
                <Typography fontSize={16} fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography fontSize={16} variant="body2">
                  {item.desc}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>

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
                1. Kiến trúc mở, đưa ánh sáng và gió trời vào từng căn hộ
                <List disablePadding sx={{ pl: 3 }}>
                  <ListItem disableGutters sx={listItemSx}>
                    1.1. Kiến trúc khối hiện đại cho căn hộ 5 tầng 1 tum
                  </ListItem>
                  <ListItem disableGutters sx={listItemSx}>
                    1.2. Sự linh hoạt ứng dụng màu sắc, vật liệu cho công trình
                  </ListItem>
                </List>
              </ListItem>

              <ListItem disableGutters sx={listItemSx}>
                2. Không gian căn hộ xanh và thư giãn giữa Đà Nẵng hiện đại
              </ListItem>
              <ListItem disableGutters sx={listItemSx}>
                3. Thiết kế tối ưu cho mục đích đầu tư căn hộ cho thuê
              </ListItem>
            </List>
          </Collapse>
        </Box>

        <Typography variant="h4">
          Giữa lòng Đà Nẵng nhộn nhịp, One & Only Apartment là một công trình
          căn hộ vừa hài hòa với nhịp sống hiện đại, vừa gần gũi với thiên
          nhiên. Dù được xây dựng trên lô đất phổ thông 5x20m, hướng đến mục
          đích cho thuê, công trình vẫn mang đến trải nghiệm sống sáng, thoáng
          và tiện nghi cho người ở. Điều này không dễ có được nếu chủ đầu tư
          không chú trọng cho việc thiết kế. Cùng SBS HOUSE tìm hiểu những điểm
          khác biệt có trong One & Only Apartment nhé!
        </Typography>

        <Typography variant="h4" fontWeight={700}>
          1. Kiến trúc mở, đưa ánh sáng và gió trời vào từng căn hộ
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          1.1. Kiến trúc khối hiện đại cho căn hộ 5 tầng 1 tum
        </Typography>
        <Typography variant="h4">
          Mặt tiền của One & Only Apartment được thiết kế theo ngôn ngữ hiện đại
          với kiến trúc hình khối. Kết hợp trên đó là những mảng tường cong lặp
          lại theo quy luật. Các bức tường độc đáo này vừa tạo điểm nhấn cho
          ngoại thất, vừa giúp che nắng cho công trình. Những đường chỉ thẳng
          tinh giản được đan xen giữa các tầng, tạo cảm giác phân chia rõ ràng
          cho từng tầng nhưng cũng vừa đủ tinh tế trong tổng thể.
        </Typography>

        <Stack position="relative" height={1050}>
          <Image
            src="/images/3.webp"
            layout="fill"
            alt="service-3"
            loading="lazy"
            objectFit="contain"
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
            One & Only Apartment mang đến cho người ở không gian sống hiện đại,
            sáng, thoáng và tiện nghi nhờ những giải pháp thiết kế tối ưu đến từ
            đội ngũ SBS HOUSE.
          </Box>
        </Stack>

        <Typography variant="h5" fontWeight={700}>
          1.2. Sự linh hoạt ứng dụng màu sắc, vật liệu cho công trình
        </Typography>

        <Typography variant="h4">
          Công trình kết hợp giữa lan can thanh mảnh, cửa kính lớn, và hệ lam
          chắn nắng tạo nên sự hòa quyện giữa vật liệu và màu sắc. Hệ lam gỗ với
          cấu tạo các thanh thẳng song song, vừa phát huy tối đa công dụng chắn
          nắng hiệu quả, vừa cho gió lưu thông vào nhà. Giúp căn nhà luôn tràn
          ngập ánh sáng tự nhiên và khí tươi, mang lại cảm giác thoáng đãng, dễ
          chịu.
        </Typography>

        <Stack position="relative" height={1050}>
          <Image
            src="/images/5.webp"
            layout="fill"
            alt="service-3"
            loading="lazy"
            objectFit="contain"
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
            Ngoại thất công trình vững chãi với kiến trúc hình khối. Các bức
            tường cong được thiết kế lặp lại theo quy luật. Kết hợp hệ lam chắn
            nắng vừa tạo điểm nhấn, vừa phát huy tối đa khả năng chống nắng cho
            ngôi nhà mát mẻ và thoáng đãng.
          </Box>
        </Stack>

        <Typography variant="h4" fontWeight={700}>
          2. Không gian căn hộ xanh và thư giãn giữa Đà Nẵng hiện đại
        </Typography>

        <Typography variant="h4">
          Cây xanh được bố trí ở nhiều vị trí như ban công và sân thượng, góp
          phần tạo nên không gian sống tươi mới và thư giãn. Đặc biệt, sân
          thượng rộng rãi với phần mái lợp tấm poly trong suốt. Tấm poly vừa có
          thể chắn mưa, vừa có thể lấy sáng cho không gian bên dưới. Tạo nên một
          khu vực sân thượng lý tưởng để đón nắng sớm, thưởng trà chiều hay thư
          giãn, cảm nhận sự chậm lại giữa nhịp sống đô thị cuồng quay.
        </Typography>

        <Stack position="relative" height={1050}>
          <Image
            src="/images/6.webp"
            layout="fill"
            alt="service-3"
            loading="lazy"
            objectFit="contain"
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
            Ngoại thất công trình vững chãi với kiến trúc hình khối. Các bức
            tường cong được thiết kế lặp lại theo quy luật. Kết hợp hệ lam chắn
            nắng vừa tạo điểm nhấn, vừa phát huy tối đa khả năng chống nắng cho
            ngôi nhà mát mẻ và thoáng đãng.
          </Box>
        </Stack>

        <Typography variant="h4" fontWeight={700}>
          3. Thiết kế tối ưu cho mục đích đầu tư căn hộ cho thuê
        </Typography>
        <Typography variant="h4">
          One & Only Apartment có quy mô 5 tầng 1 tum, tổng diện tích xây dựng
          584m2. Dù diện tích đất không lớn, chỉ 5×20 – khá phổ biến với các
          công trình nhà phố hiện nay, One & Only Apartment được bố trí mặt bằng
          linh hoạt và thông minh. Hướng đến sự tiện nghi cho người ở nhưng vẫn
          có thể đảm bảo việc đầu tư hiệu quả cho gia chủ.
        </Typography>

        <ul className="custom-list">
          <li>
            Tầng 1: Bố trí gara để xe, 01 căn hộ 1 phòng ngủ và 01 WC chung.
          </li>
          <li>Tầng lửng: Gồm 01 căn hộ 1 phòng ngủ, phòng kỹ thuật.</li>
          <li>
            Tầng 2, 3, 4, 5: Mỗi tầng bao gồm 2 căn hộ (1 căn 1 phòng ngủ và 1
            căn 2 phòng ngủ). Cách bố trí hợp lý giúp tối ưu diện tích cho từng
            căn hộ. Các căn hộ 2 phòng ngủ phù hợp cho cả các gia đình nhỏ hay ở
            nhóm 3 – 4 người.
          </li>
          <li>Tầng tum: Gồm sân thượng, sân phơi và phòng kho.</li>
        </ul>

        <Stack position="relative" height={1122}>
          <Image
            src="/images/25.webp"
            layout="fill"
            alt="service-25"
            loading="lazy"
            objectFit="contain"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={-10}
            fontSize="16px"
            textAlign="center"
          >
            Mặt bằng công năng chi tiết được đội ngũ SBS HOUSE bố trí cho 5 tầng
            1 tum của One & Only Apartment
          </Box>
        </Stack>

        <Typography mt={6} variant="h4">
          Ngoài ra, công trình được thiết kế thang máy hiện đại để việc di
          chuyển lên các tầng cao thuận tiện hơn cho người thuê. Nhờ đó mà người
          thuê căn hộ dù ở tầng nào cũng không phải lo ngại việc đi thang bộ tốn
          nhiều thời gian và mệt mỏi mỗi ngày.
        </Typography>

        <Typography variant="h4">
          One & Only Apartment mang đến không gian sống hiện đại, sáng – xanh –
          thoáng. Cho người ở trải nghiệm sống tiện nghi và thư giãn. Cũng là
          yếu tố then chốt để khách thuê có thể ở lâu dài, từ đó giúp chủ đầu tư
          tối ưu khoản đầu tư của mình liên tục một cách tốt nhất. Sự chỉn chu
          trong giải pháp kiến trúc, công năng và tiện ích đã giúp One & Only
          Apartment trở thành một căn hộ ấn tượng và khác biệt.
        </Typography>

        <Stack spacing={2} alignItems="center">
          <Rating
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 30, // kích thước sao
              },
            }}
            size="large"
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography variant="h3"> Đánh giá: 5/5. Số lượt vote: 1</Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ProjectDetailPage;

const images = [
  {
    original: "/images/17.webp",
    thumbnail: "/images/17.webp",
  },
  {
    original: "/images/18.webp",
    thumbnail: "/images/18.webp",
  },
  {
    original: "/images/19.webp",
    thumbnail: "/images/19.webp",
  },
  {
    original: "/images/1.webp",
    thumbnail: "/images/1.webp",
  },
  {
    original: "/images/2.webp",
    thumbnail: "/images/2.webp",
  },
  {
    original: "/images/3.webp",
    thumbnail: "/images/3.webp",
  },
  {
    original: "/images/4.webp",
    thumbnail: "/images/4.webp",
  },
  {
    original: "/images/5.webp",
    thumbnail: "/images/5.webp",
  },
  {
    original: "/images/6.webp",
    thumbnail: "/images/6.webp",
  },
  {
    original: "/images/7.webp",
    thumbnail: "/images/7.webp",
  },
  {
    original: "/images/8.webp",
    thumbnail: "/images/8.webp",
  },
  {
    original: "/images/9.webp",
    thumbnail: "/images/9.webp",
  },
  {
    original: "/images/10.webp",
    thumbnail: "/images/10.webp",
  },
  {
    original: "/images/11.webp",
    thumbnail: "/images/11.webp",
  },
  {
    original: "/images/12.webp",
    thumbnail: "/images/12.webp",
  },
  {
    original: "/images/13.webp",
    thumbnail: "/images/13.webp",
  },
  {
    original: "/images/14.webp",
    thumbnail: "/images/14.webp",
  },
  {
    original: "/images/15.webp",
    thumbnail: "/images/15.webp",
  },
  {
    original: "/images/16.webp",
    thumbnail: "/images/16.webp",
  },
];

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
