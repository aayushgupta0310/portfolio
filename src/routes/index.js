import { useLocation, useNavigate, useParams } from "react-router";
import { useMemo } from "react";
import queryString from "query-string";
import React from "react";

export const HOME_URL = "/";

export const useRouter = () => {
    const params = useParams();
    const location = useLocation();
    const history = useNavigate();
    return useMemo(() => {
      return {
        push: history.push,
        replace: history.replace,
        pathname: location.pathname,
        query: {
          ...queryString.parse(location.search), // Convert string to object
          ...params,
        },
  
        //   match,
        location,
        history,
      };
    }, [params, location, history]);
  };