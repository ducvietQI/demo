"use client";

import apiRequester from "@/api/apiRequester";
import { ApiConst, GlobalsConst } from "@/constant";
import { IProduct } from "@/models/product.type";
import { IPaginationList } from "@/models/project.type";
import { productActions, useAppDispatch, useAppSelector } from "@/redux-store";
import { Container, Grid2, Stack } from "@mui/material";
import { useCallback, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { shallowEqual } from "react-redux";
import ProductCard from "../sn-home/ProductSection/ProductCard";
import CategoryFilter from "./CategoryFilter";

const ProductPage = ({
  data,
  categoriesList,
}: {
  data: IPaginationList<IProduct>;
  categoriesList: any[];
}) => {
  const dispatch = useAppDispatch();
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
    dispatch(productActions.changeproductList(data.items));

    return () => {
      dispatch(productActions.reset());
    };
  }, []);

  const fetchMoreProjects = useCallback(async () => {
    try {
      const response = await apiRequester.get<IPaginationList<IProduct>>(
        ApiConst.PRODUCT_LIST,
        {
          page: currentPage + 1,
          size: GlobalsConst.DEFAULT_SIZE,
        }
      );

      const newProjects = response?.payload?.items || [];
      dispatch(productActions.changeproductList(newProjects));
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
  }, [currentPage, totalPages, dispatch]);

  return (
    <Stack position="relative">
      <Container>
        <Grid2 mt={4} container direction={"row"} spacing={2}>
          <Grid2 size={2.5} bgcolor="white" height="100%" pt={1.5}>
            <CategoryFilter categoriesList={categoriesList} />
          </Grid2>

          <Grid2
            size={9.5}
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
          </Grid2>
        </Grid2>
      </Container>
    </Stack>
  );
};

export default ProductPage;
