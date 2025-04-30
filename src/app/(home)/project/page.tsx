import apiRequester from "@/api/apiRequester";
import { BannerSection } from "@/components";
import ProjectPage from "@/components/sn-project/ProjectPage";
import { ApiConst, GlobalsConst } from "@/constant";
import { BANNER_TYPE } from "@/models/home.type";
import { Stack } from "@mui/material";

const Project = async () => {
  const res = await apiRequester.get(ApiConst.BANNER_LIST, {
    type: BANNER_TYPE.SERVICES,
    size: GlobalsConst.DEFAULT_SIZE,
  });

  const banners = Array.isArray(res?.payload) ? res.payload : [];
  return (
    <Stack>
      <BannerSection banners={banners} />
      <ProjectPage />
    </Stack>
  );
};

export default Project;
