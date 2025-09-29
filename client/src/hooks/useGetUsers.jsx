import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../RTK/features/userSlice";

export default function useGetUsers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const { isLoading, users, isError } = useSelector((state) => state.userSlice);
  console.log(users);
  return { isLoading, users, isError };
}
