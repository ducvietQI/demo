"use client";

import { ServiceBreadcrumb } from "@/components/sn-service";
import { IService } from "@/models/home.type";
import { Box, Collapse, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import AppSocailMedia from "../AppSocailMedia";
import AppHTMLRender from "../AppHTMLRender";

const ServiceDetailPage = ({ data }: { data: IService | null }) => {
  return (
    <Container>
      <Stack py={5} spacing={2}>
        <ServiceBreadcrumb title={data?.title} />
        <Typography variant="h2" fontWeight={700}>
          {data?.title}
        </Typography>
        <AppSocailMedia view={data?.view} />

        {/* Render Content */}
        <AppHTMLRender htmlRender={data?.content || ""} />

        {data?.businessFrequentlyQuestions &&
          data?.businessFrequentlyQuestions?.length > 0 && (
            <Box mt={5}>
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{ backgroundColor: "#000", color: "#f5ba3e", p: 2 }}
              >
                Các câu hỏi thường gặp
              </Typography>

              {data.businessFrequentlyQuestions.map((item, index) => (
                <CollapseFAQ
                  key={index}
                  number={index + 1}
                  title={item.title}
                  content={item.description}
                />
              ))}
            </Box>
          )}
      </Stack>
    </Container>
  );
};

export default ServiceDetailPage;

const CollapseFAQ = ({
  number,
  title,
  content,
}: {
  number: number;
  title: string;
  content: string;
}) => {
  const [expanded, setExpanded] = useState(true);

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
