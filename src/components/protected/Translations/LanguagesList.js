import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import LanguageItem from "./LanguageItem";
import { Loading, Pagination } from "../../";
import { GET_LANGUAGES } from "../../../graphQl";

const LanguagesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const {
    loading: languageLoading,
    error: languageError,
    data: languageData,
  } = useQuery(GET_LANGUAGES, {
    variables: {
      page: page,
      size: 10,
    },
  });

  // Update State once the response is received
  useEffect(() => {
    if (languageData) {
      setCurrentPage(languageData?.getLanguage?.responscedata.currentPage);
      setTotalPages(languageData?.getLanguage?.responscedata.totalPages);
    }
  }, [languageData]);

  if (languageLoading) {
    return <Loading />;
  }

  if (languageError) {
    return (
      <div className="flex justify-center">
        <h1 className=" text-[#D85C27] font-bold text-2xl">Not Authorized</h1>
      </div>
    );
  }
  return (
    <div className="bg-[#FFFFFF] rounded-lg p-6">
      <div className="flex items-center justify-between">
        <h1>Languages</h1>
        <div></div>
      </div>
      <div className="bg-[#EFF3F7] rounded-lg p-4 space-y-2">
        {languageData?.getLanguage?.responscedata?.languages.map((data) => (
          <LanguageItem key={data.id} data={data} />
        ))}
        <Pagination
          setPage={setPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default LanguagesList;
