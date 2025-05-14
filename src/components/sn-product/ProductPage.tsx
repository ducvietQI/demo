"use client";

import apiRequester from "@/api/apiRequester";
import { ApiConst, GlobalsConst } from "@/constant";
import { IProduct } from "@/models/product.type";
import { IPaginationList } from "@/models/project.type";
import { productActions, useAppDispatch, useAppSelector } from "@/redux-store";
import { Container, Drawer, Grid2, Stack, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { shallowEqual } from "react-redux";
import ProductCard from "../sn-home/ProductSection/ProductCard";
import CategoryFilter from "./CategoryFilter";
import { useTabletDown } from "@/hooks";
import { FilterIcon } from "../Icons";

const ProductPage = ({
  data,
  categoriesList,
  groupSlug,
}: {
  data: IPaginationList<IProduct>;
  categoriesList: any[];
  groupSlug?: string;
}) => {
  const dispatch = useAppDispatch();
  const isTabletDown = useTabletDown();
  const [isOpen, setIsOpen] = useState(false);
  const [categorySlug, setCategorySlug] = useState(groupSlug || "");
  const { productList, currentPage, totalPages, hasMore } = useAppSelector(
    (state) => ({
      productList: state.productReducer.productList,
      currentPage: state.productReducer.currentPage,
      totalPages: state.productReducer.totalPages,
      hasMore: state.productReducer.hasMore,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(
      productActions.changePagination({
        currentPage: data.currentPage,
        totalPages: data.totalPages,
      })
    );
    dispatch(productActions.changeProductList(data.items));

    return () => {
      dispatch(productActions.reset());
    };
  }, []);

  useEffect(() => {
    if (categorySlug) {
      const fetchData = async () => {
        try {
          const productResponse = await apiRequester.get<
            IPaginationList<IProduct>
          >(ApiConst.PRODUCT_LIST, {
            categorySlug,
            page: GlobalsConst.DEFAULT_PAGE,
            size: GlobalsConst.DEFAULT_SIZE,
          });
          dispatch(
            productActions.changeProductList(productResponse.payload.items)
          );
        } catch (error) {
          console.error("Lỗi khi fetch product:", error);
        }
      };

      fetchData();
    }
  }, [categorySlug]);

  const fetchMoreProjects = useCallback(async () => {
    try {
      const response = await apiRequester.get<IPaginationList<IProduct>>(
        ApiConst.PRODUCT_LIST,
        {
          categorySlug: categorySlug || "",
          page: currentPage + 1,
          size: GlobalsConst.DEFAULT_SIZE,
        }
      );

      const newProjects = response?.payload?.items || [];
      dispatch(productActions.changeMoreProductList(newProjects));
      dispatch(
        productActions.changePagination({
          currentPage: currentPage + 1,
          totalPages: response?.payload?.totalPages || totalPages,
        })
      );
      dispatch(
        productActions.setHasMore(
          currentPage + 1 < response?.payload?.totalPages
        )
      );
    } catch (error) {
      console.error("Error fetching more products:", error);
    }
  }, [currentPage, totalPages, categorySlug]);

  return (
    <Stack position="relative">
      <Container>
        <Grid2 my={4} container direction={"row"} spacing={2}>
          <Grid2
            size={{ md: 2.5 }}
            display={{ xs: "none", md: "block" }}
            bgcolor="white"
            height="100%"
            pt={1.5}
          >
            <CategoryFilter
              categorySlug={categorySlug}
              categoriesList={categoriesList}
              onSetCategorySlug={setCategorySlug}
            />
          </Grid2>
          {isTabletDown && (
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              component="div"
              onClick={() => setIsOpen(true)}
              bgcolor="primary.main"
              color="white"
              p={1}
            >
              <FilterIcon
                sx={{
                  color: "white",
                  fontSize: 20,
                }}
              />
              <Typography fontSize="18px">Bộ lọc</Typography>
            </Stack>
          )}

          <Grid2
            size={{ xs: 12, md: 9.5 }}
            container
            columnSpacing={2}
            rowSpacing={4}
            bgcolor="white"
            p={2}
          >
            <InfiniteScroll
              dataLength={productList.length}
              next={fetchMoreProjects}
              hasMore={hasMore}
              loader={<></>}
            >
              <Grid2 width="100%" container columnSpacing={2} rowSpacing={2}>
                {productList.map((item, index) => {
                  return (
                    <Grid2 size={{ xs: 12, md: 3 }} key={index}>
                      <ProductCard data={item} />
                    </Grid2>
                  );
                })}
              </Grid2>
            </InfiniteScroll>

            {productList.length === 0 && (
              <Stack width="100%" alignItems="center">
                <Typography fontSize={18}>Không có sản phẩm</Typography>
              </Stack>
            )}
          </Grid2>
        </Grid2>
      </Container>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <Stack width={280} p={2}>
          <CategoryFilter
            categorySlug={categorySlug}
            categoriesList={categoriesList}
            onSetCategorySlug={setCategorySlug}
            onClose={() => setIsOpen(false)}
          />
        </Stack>
      </Drawer>
    </Stack>
  );
};

export default ProductPage;
