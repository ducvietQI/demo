import { useState, useEffect, useRef } from "react";
import { Container, Stack, Typography } from "@mui/material";
import CountUp from "react-countup";

const stats = [
  { value: 6, suffix: "+", label: "Năm kinh nghiệm" },
  { value: 100, suffix: "+", label: "Cán bộ, nhân viên" },
  { value: 1300, suffix: "+", label: "Khách hàng" },
  { value: 60, suffix: "+", label: "Tỉnh có mặt Quanghoanhome" },
];

const CountSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Stack bgcolor="bg.main" py={{ xs: "10px", md: "50px" }} ref={ref}>
      <Stack
        sx={{
          borderTop: { xs: "none", md: "2px solid #ffba00" },
          borderBottom: { xs: "none", md: "2px solid #ffba00" },
        }}
      >
        <Container>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            spacing={{ xs: 0, md: 4 }}
          >
            {stats.map((stat, index) => (
              <Stack
                key={index}
                alignItems="center"
                direction="row"
                spacing={2}
                pl={{ xs: 3, md: 0 }}
              >
                <Typography
                  fontSize={{ xs: "25px", md: "50px" }}
                  fontWeight="bold"
                  color="primary.main"
                >
                  {isVisible ? <CountUp end={stat.value} duration={2} /> : 0}{" "}
                  {stat.suffix}
                </Typography>
                <Typography variant="h5" color="text.primary">
                  {stat.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default CountSection;
