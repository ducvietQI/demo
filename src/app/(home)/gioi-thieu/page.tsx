import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const IntroducePage = () => {
  return (
    <Container>
      <Stack py={5} spacing={2}>
        <Typography variant="h4">
          Quanghoanhome bắt đầu hoạt động từ năm 2012 dưới hình thức một team
          thiết kế nhỏ, khởi đầu bằng tình yêu nghề cũng như trách nhiệm đối với
          người thân và gia đình của đội ngũ Founders.
        </Typography>
        <Typography variant="h4">
          Năm 2018, chúng tôi thành công trong việc tiên phong đưa cây xanh vào
          nhà phố ống tại Đà Nẵng. Sản phẩm của Quanghoanhome được nhiều người
          quan tâm và yêu thích, đó cũng là cột mốc để chúng tôi định hình lại
          sản phẩm và phân khúc chính của mình. Từ đó, chúng tôi bắt đầu trăn
          trở về nhà phố, về việc làm thế nào để có những giải pháp mang ánh
          sáng, thiên nhiên và sự thông thoáng đến cho ngôi nhà. Cũng trong năm
          2018, Công ty TNHH Thiết kế và Xây dựng Quanghoanhome chính thức được
          thành lập và được biết đến như một đơn vị thiết kế – thi công nhà phố
          mang phong cách hiện đại kết hợp tối giản, đáp ứng nhu cầu có một tổ
          ấm tiện nghi và lý tưởng của khách hàng. Đội ngũ Quanghoanhome khao
          khát mang lại những giải pháp kiến trúc hiện đại và bền vững cho ngôi
          nhà Việt trên toàn đất nước.
        </Typography>
        <Stack position="relative" height={{ xs: 250, md: 900 }}>
          <Image
            src="/images/gioi-thieu-1.jpg"
            layout="fill"
            alt="gioi-thieu-1"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize={{ xs: "14px", md: "16px" }}
            textAlign="center"
          >
            Đội ngũ Quanghoanhome những năm đầu thành lập
          </Box>
        </Stack>
        <Typography variant="h4">
          Năm 2020, dịch bệnh COVID xuất hiện và kéo theo nhiều hệ lụy khác cho
          toàn xã hội. Nhìn những đoàn người lao động từ miền Nam lũ lượt kéo
          nhau về giữa tâm điểm dịch bệnh, chúng tôi đã đặt ra câu hỏi: Tại sao
          người miền Trung lại phải vất vả đi làm ăn xa nhiều như thế? Phải làm
          gì để giải quyết phần nào nhu cầu lao động cho người dân địa phương?
          Từ trăn trở đó, Quanghoanhome đặt thêm một sứ mệnh mới lên mình, đó là
          tạo môi trường làm việc lớn để giúp nhiều người dân địa phương có việc
          làm tại quê nhà. Tất cả mọi người trong cộng đồng Quanghoanhome sẽ có
          một công việc phù hợp, một môi trường phát triển ngay tại quê hương
          mình, từ đó có một cuộc sống đủ đầy và hạnh phúc.{" "}
        </Typography>
        <Stack position="relative" height={{ xs: 250, md: 686 }}>
          <Image
            src="/images/gioi-thieu-2.jpg"
            layout="fill"
            alt="gioi-thieu-2"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize={{ xs: "14px", md: "16px" }}
            textAlign="center"
          >
            Toàn thể cán bộ nhân viên tại Quanghoanhome năm 2022
          </Box>
        </Stack>
        <Stack position="relative" height={{ xs: 250, md: 700 }}>
          <Image
            src="/images/gioi-thieu-3.webp"
            layout="fill"
            alt="gioi-thieu-3"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={-10}
            fontSize={{ xs: "14px", md: "16px" }}
            textAlign="center"
          >
            Toàn thể cán bộ nhân viên tại Quanghoanhome năm 2022
          </Box>
        </Stack>
        <Typography variant="h4">
          Trong suốt gần 10 năm kể từ khi bắt tay vào gầy dựng đội ngũ,
          Quanghoanhome đã trải qua rất nhiều khó khăn. Từ những khó khăn về
          việc “dò đường”, tìm kiếm khách hàng ở “buổi sơ khai” đến hôm nay là
          những khó khăn, thử thách về việc phát triển đội ngũ. Tuy nhiên, các
          Founders không ngại thử thách. Trách nhiệm với người thân, gia đình
          ban đầu đã được mở rộng ra thành trách nhiệm với mọi người xung quanh.
          Đó là trách nhiệm mang tới sản phẩm chất lượng nhất cho khách hàng;
          trách nhiệm hỗ trợ, giúp đỡ cộng đồng Quanghoanhome có công việc tốt
          và được phát triển, nâng tầm bản thân mỗi ngày.
        </Typography>
        <Typography variant="h4">
          Quanghoanhome phải vươn lên và lớn mạnh hơn nữa. Chúng tôi tin rằng,
          càng nhiều khách hàng, đối tác biết và làm việc với chúng tôi, thì giá
          trị tốt đẹp của Quanghoanhome sẽ càng được lan tỏa nhiều hơn.
        </Typography>
        <Stack position="relative" height={{ xs: 250, md: 686 }}>
          <Image
            src="/images/gioi-thieu-4.jpg"
            layout="fill"
            alt="gioi-thieu-4"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize={{ xs: "14px", md: "16px" }}
            textAlign="center"
          >
            Đội ngũ giám sát thi công Quanghoanhome
          </Box>
        </Stack>
        <Typography variant="h4" fontWeight={700}>
          1. Sứ mệnh Quanghoanhome
        </Typography>
        <Typography variant="h4">
          Thị trường xây dựng đang được đánh giá là có quy mô và dung lượng ngày
          càng lớn. Nhu cầu Thiết kế và Thi công trọn gói cũng ngày càng tăng.
          Kéo theo việc ra đời của các công ty xây dựng hay kiến trúc càng
          nhiều. Tuy nhiên, việc tăng về số lượng không đồng nghĩa với chất
          lượng và uy tín đủ để khách hàng có thể tin tưởng lựa chọn. Ngược lại
          còn khiến họ thực sự bối rối khi chọn đơn vị thi công cho căn nhà của
          mình.
        </Typography>
        <Typography variant="h4">
          Bên cạnh đó, thực trạng các công trình nhà phố bị thấm dột, nứt tường,
          lún móng, thẩm mỹ kém; khả năng lấy sáng, đối lưu không khí không đảm
          bảo… cũng trở nên khá nhiều. Cụ thể là mùa mưa năm 2020 tại khu vực
          Hòa Xuân – Đà Nẵng lên tới 80-90%. Hiểu được nỗi đau đó, Quanghoanhome
          đã được sinh ra với sứ mệnh mang lại một thương hiệu Thiết kế & Thi
          công uy tín để khách hàng trao gửi niềm tin.{" "}
          <strong>
            Mang lại cuộc sống hạnh phúc, đủ đầy cho cộng đồng Quanghoanhome.
          </strong>
        </Typography>
        <Typography variant="h4" fontWeight={700}>
          2. Tầm nhìn Quanghoanhome
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          + Năm 2025:
        </Typography>
        <Typography variant="h4">
          Trở thành công ty TOP 1 tại Đà Nẵng trong lĩnh vực thiết kế và thi
          công. Doanh thu cán mốc {">"} 400 tỷ. Cộng đồng Quanghoanhome có cuộc
          sống hạnh phúc và đủ đầy.
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          + Năm 2028:
        </Typography>
        <Typography variant="h4">
          Trở thành công ty TOP 1 tại miền Trung. Doanh thu cán mốc {">"} 1000
          tỷ. Cộng đồng Quanghoanhome có cuộc sống hạnh phúc và đủ đầy.
        </Typography>
        <Typography variant="h4" fontWeight={700}>
          3. Giá trị cốt lõi
        </Typography>
        <Typography variant="h4">
          Trung thực – Sáng tạo – Tận tâm – Kỷ luật – Yêu thương là những giá
          trị cốt lõi mà Quanghoanhome gầy dựng cho đội ngũ. Vì chúng tôi tin
          rằng, khi sở hữu những giá trị này thì chúng tôi sẽ thành công trong
          mọi sản phẩm, dịch vụ và tự tin mang đến điều tốt nhất cho khách hàng.
          Trung thực, tận tâm trong thương thảo, sáng tạo trong mọi sản phẩm,
          yêu thương và coi công trình của khách hàng như của chính mình. Và kỷ
          luật để kịp tiến độ dù trong bất cứ hoàn cảnh nào.
        </Typography>
        <Stack position="relative" height={{ xs: 250, md: 915 }}>
          <Image
            src="/images/gioi-thieu-6.webp"
            layout="fill"
            alt="gioi-thieu-6"
          />
        </Stack>
        <Typography variant="h4" fontWeight={700}>
          4. Những dịch vụ mà Quanghoanhome cung cấp
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          4.1 Dịch vụ thiết kế
        </Typography>
        <Typography variant="h4">
          Quanghoanhome cung cấp dịch vụ thiết kế nhà phố, biệt thự, căn hộ
          chung cư cho thuê,… trên mọi miền đất nước. Dưới đây là các dịch vụ
          thiết kế Quanghoanhome cung cấp:
        </Typography>
        <ul className="custom-list">
          <li>Thiết kế kiến trúc</li>
          <li>
            Thiết kế nội thất (nhà phố, biệt thự – villa, căn hộ, khách sạn,
            chung cư, penhouse, văn phòng và tòa nhà văn phòng)
          </li>
          <li>
            Thiết kế trọn gói bao gồm Thiết kế kiến trúc & Thiết kế nội thất
          </li>
        </ul>
        <Typography variant="h5" fontWeight={700}>
          4.2. Dịch vụ thi công:
        </Typography>
        <Typography variant="h4">
          Hiện tại, Quanghoanhome cung cấp dịch vụ thi công nhà phố, biệt thự,…
          tại các tỉnh thành miền Trung (Đà Nẵng, Quảng Nam, Quảng Ngãi, Huế,
          Quảng Trị, Quảng Bình, TP Vinh, Hà Tĩnh) và một số tỉnh ở miền Nam
          (TPHCM, Bình Dương và Đồng Nai).
        </Typography>
        <ul className="custom-list">
          <li>Thi công nhà phần thô</li>
          <li>Thi công hạng mục hoàn thiện</li>
          <li>Thi công nội thất</li>
          <li>
            Xây nhà trọn gói – chìa khóa trao tay (phần thô, phần hoàn thiện &
            phần nội thất)
          </li>
        </ul>
        <Stack position="relative" height={{ xs: 400, md: 976 }}>
          <Image
            src="/images/gioi-thieu-7.jpg"
            layout="fill"
            alt="gioi-thieu-7"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize={{ xs: "14px", md: "16px" }}
            textAlign="center"
          >
            Hình ảnh động thổ công trình xây dựng của Quanghoanhome
          </Box>
        </Stack>
        <Stack position="relative" height={{ xs: 400, md: 976 }}>
          <Image
            src="/images/gioi-thieu-8.jpg"
            layout="fill"
            alt="gioi-thieu-8"
          />
        </Stack>
        <Typography variant="h4" fontWeight={700}>
          5. Những giá trị Quanghoanhome mang đến cho khách hàng
        </Typography>
        <Typography variant="h4">
          Với sứ mệnh mang đến một ngôi nhà hiện đại, tiện nghi và bền vững đến
          khách hàng, Quanghoanhome không ngừng nâng cấp và ngày càng cải tiến
          chất lượng sản phẩm của mình. Đồng thời hợp tác với các nhà cung cấp
          uy tín nhằm mang lại các vật tư thi công tốt nhất cho không gian sống
          của gia chủ.
        </Typography>
        <Typography variant="h4">
          Một số giá trị điển hình tại Quanghoanhome mang đến cho gia chủ:
        </Typography>
        <ul className="custom-list">
          <li>
            Với quy trình thi công chuyên nghiệp và áp dụng 21 giải pháp, kỹ
            thuật mới tối ưu nhất, Quanghoanhome cam kết công trình thi công
            giống {">"}95% bản vẽ thiết kế
          </li>
          <li>
            Bên cạnh yếu tố thẩm mỹ, Quanghoanhome luôn chú trọng đến tiện ích
            công năng phù hợp với nhu cầu thực tế của từng gia đình thông qua
            việc lắng nghe và tư vấn đúng chuyên môn, mức đầu tư của khách hàng
          </li>
          <li>
            Quanghoanhome báo giá chi tiết và minh bạch ngay từ đầu, hạn chế
            những phát sinh trong quá trình thi công
          </li>
          <li>
            Mỗi sản phẩm thiết kế của Quanghoanhome chứa đựng những bản sắc
            riêng, mang đậm dấu ấn cá nhân. Từ việc lựa chọn vật liệu, màu sắc
            đến bố trí không gian, mọi yếu tố đều được chú trọng nhằm phản ánh
            đúng cá tính và mong muốn của gia chủ.
          </li>
          <li>
            Đối với khách hàng ở xa lựa chọn Quanghoanhome làm đơn vị thiết kế
            kiến trúc, thiết kế nội thất, đội ngũ kiến trúc sư và kỹ sư của
            chúng tôi luôn tư vấn giải pháp, hỗ trợ giám sát và xử lý những phát
            sinh nếu có nhằm đảm bảo ngôi nhà hoàn thành giống bản vẽ nhất có
            thể.
          </li>
        </ul>
        <Stack position="relative" height={{ xs: 400, md: 817 }}>
          <Image
            src="/images/gioi-thieu-9.jpg"
            layout="fill"
            alt="gioi-thieu-9"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize={{ xs: "14px", md: "16px" }}
            textAlign="center"
          >
            Chủ đầu tư đến kí hợp đồng tại văn phòng Quanghoanhome
          </Box>
        </Stack>
        <Typography variant="h4" fontWeight={700}>
          6. Một số hình ảnh về Quanghoanhome:
        </Typography>
        <Stack position="relative" height={{ xs: 300, md: 732 }}>
          <Image
            src="/images/gioi-thieu-10.jpg"
            layout="fill"
            alt="gioi-thieu-10"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize={{ xs: "14px", md: "16px" }}
            textAlign="center"
          >
            Kiến trúc sư, kỹ sư Quanghoanhome tham quan học hỏi các showroom nội
            thất tại Singapore.
          </Box>
        </Stack>
        <Stack position="relative" height={{ xs: 300, md: 732 }}>
          <Image
            src="/images/gioi-thieu-11.jpg"
            layout="fill"
            alt="gioi-thieu-11"
          />
          <Box
            p="10px"
            width="100%"
            bgcolor="primary.main"
            position="absolute"
            bottom={0}
            fontSize={{ xs: "14px", md: "16px" }}
            textAlign="center"
          >
            Hoạt động teambuilding mừng sinh nhật Quanghoanhome 4 tuổi
          </Box>
        </Stack>

        <Stack spacing={2}>
          <Typography fontSize={{ xs: "14px", md: "16px" }}>
            Xem thêm các{" "}
            <Box component="span" sx={{ color: "#f7b944", fontWeight: 500 }}>
              mẫu nhà đẹp
            </Box>{" "}
            của Quanghoanhome tại đây:
          </Typography>

          <Box
            sx={{
              borderLeft: "4px solid #f7b944",
              pl: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography fontSize={{ xs: "14px", md: "16px" }}>
              Choáng ngợp trước 55{" "}
              <Box component="span" sx={{ color: "#f7b944", fontWeight: 500 }}>
                mẫu nhà đẹp 2 tầng
              </Box>{" "}
              phong cách hiện đại kết hợp tối giản
            </Typography>

            <Typography fontSize={{ xs: "14px", md: "16px" }}>
              Dành cho những ai có nhu cầu xây{" "}
              <Box component="span" sx={{ color: "#f7b944", fontWeight: 500 }}>
                nhà 3 tầng hiện đại
              </Box>{" "}
              thông thoáng
            </Typography>

            <Typography fontSize={{ xs: "14px", md: "16px" }}>
              10{" "}
              <Box component="span" sx={{ color: "#f7b944", fontWeight: 500 }}>
                mẫu biệt thự đẹp
              </Box>{" "}
              đẳng cấp chỉ từ 3 tỷ.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default IntroducePage;
