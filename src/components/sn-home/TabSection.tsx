"use client";

import { useTabletDown } from "@/hooks";
import { IService } from "@/models/home.type";
import { AppBar, Box, Container, Grid2, Stack, Tab, Tabs } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: string;
  data: IService;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, data, ...other } = props;
  const isTabletDown = useTabletDown();

  return (
    <div
      role="tabpanel"
      hidden={value !== data.code}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === data.code && (
        <Box sx={{ width: "100%" }}>
          <Container>
            <Grid2 container>
              {data.workflows.map((step, idx) => (
                <Grid2
                  key={idx}
                  size={{ xs: 12, md: 3 }}
                  textAlign="center"
                  position="relative"
                  display="flex"
                  justifyContent="center"
                >
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      width: { xs: "80%", md: "100%" },
                      aspectRatio: "1",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      textAlign: "center",
                      boxShadow: "0 0 0 1px #E5E5E5",
                      backgroundColor: "#fff",
                      p: 2,
                      pt: 5,
                    }}
                  >
                    <Image
                      src={step?.image?.url || "/images/no-image.webp"}
                      alt={step?.image?.caption || "SEO Image"}
                      width={250}
                      height={250}
                      loading="lazy"
                      style={{
                        objectFit: "cover",
                        width: "250px",
                        height: "250px",
                      }}
                      sizes="250px"
                    />
                    <Box
                      sx={{
                        color: "primary.main",
                        fontSize: "18px",
                        fontWeight: "bold",
                        mt: 1,
                      }}
                    >
                      {step.name}
                    </Box>
                    <Box
                      sx={{
                        color: "text.black",
                        mt: 1,
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {step.description}
                    </Box>
                  </Stack>
                </Grid2>
              ))}
            </Grid2>
          </Container>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function TabSection({
  serviceData,
}: {
  serviceData: IService[];
}) {
  const [value, setValue] = useState(serviceData[0]?.code || "");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack alignItems="center" width="100%" my={5}>
      <AppBar
        sx={{
          width: { xs: "calc(100% - 30px)", md: serviceData.length * 304 },
          mb: 2,
        }}
        position="static"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          aria-label="full width tabs example"
        >
          {serviceData.map((item) => (
            <Tab
              key={item.id}
              label={item.title}
              value={item?.code || ""}
              {...a11yProps(1)}
              sx={{
                width: `${100 / serviceData.length}%`,
                color: value === item?.code ? "#fff" : "text.black",
                fontSize: { xs: "14px", md: "20px" },
                bgcolor: value === item?.code ? "primary.main" : "white",
                "&:hover": {
                  color: "#fff",
                  bgcolor: "primary.main",
                },
              }}
            />
          ))}
        </Tabs>
      </AppBar>

      <Box sx={{ width: "100%", p: 0 }}>
        {serviceData.map((item, index) => (
          <TabPanel key={item.id} data={item} value={value} index={index} />
        ))}
      </Box>
    </Stack>
  );
}
