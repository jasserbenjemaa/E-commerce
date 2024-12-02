import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import useHttp from "../../hooks/use-http";
import { Link } from "react-router-dom";

const AdvancedExample = () => {
  const [page, setPage] = useState({});
  const [activeButton, setActiveButton] = useState(1);
  const { sendRequest: fetchPagesNumbre } = useHttp();
  useEffect(() => {
    const getPageObj = (pageObj) => {
      setPage(pageObj["page"]);
    };
    fetchPagesNumbre({ url: "http://localhost:8080/api/products" }, getPageObj);
  }, [fetchPagesNumbre]);
  const onClickHandler = (e) => {
    const value = e.target.id;
    console.log(value);
    if (value === "next" && activeButton < page.totalPages)
      setActiveButton((prev) => prev + 1);
    else if (value === "prev" && activeButton > page.totalPages)
      setActiveButton((prev) => prev - 1);
    else if (!isNaN(value)) setActiveButton(value);
  };

  return (
    <>
      {page.totalPages !== undefined && (
        <Pagination onClick={onClickHandler}>
          <Pagination.Prev id={"prev"} />
          {[...Array(page.totalPages)].map((_, i) => (
            <Link key={i} to={`?page=${activeButton}`}>
              <Pagination.Item active={i === activeButton - 1} id={i + 1}>
                {i + 1}
              </Pagination.Item>
            </Link>
          ))}
          <Pagination.Next id={"next"} />
        </Pagination>
      )}
    </>
  );
};

export default AdvancedExample;
