"use client";

import { IIFAQ } from "@/models/project.type";
import { Box, Collapse, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import stringFormat from "string-format";
import { RouteConstant } from "@/constant";
import { ArrowCollapseIcon } from "../Icons";

const CollapseFAQ = ({ data, index }: { data: IIFAQ; index: number }) => {
  const router = useRouter();

  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    router.push(
      stringFormat(RouteConstant.FAQ_DETAIL, { pathName: data.slug })
    );
  };

  return (
    <Stack bgcolor="#fff" px={2} pb={1}>
      <Stack
        direction="row"
        sx={{
          gap: 2,
          borderBottom: expanded ? "1px solid #eee" : "none",
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
          {index + 1}
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
              {data.title}
            </Typography>
            <Typography fontSize={16}>
              {expanded ? (
                <ArrowCollapseIcon />
              ) : (
                <ArrowCollapseIcon
                  sx={{
                    transform: "rotate(180deg)",
                  }}
                />
              )}
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Collapse in={expanded}>
        <Typography p={2} fontSize={15} color="text.secondary">
          {data.description}
        </Typography>
        <Typography
          alignSelf="flex-end"
          mt={1}
          onClick={handleClick}
          fontSize={14}
          sx={{ color: "text.black", fontWeight: 500, cursor: "pointer" }}
        >
          XEM THÊM ↗
        </Typography>
      </Collapse>
    </Stack>
  );
};

export default CollapseFAQ;
