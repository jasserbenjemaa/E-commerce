import Pagination from "react-bootstrap/Pagination";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

const AdvancedExample = () => {
  const pageNumbers = useSelector((state) => state.pageNumbers.value);
  const searchParams = useSearchParams();
  const navigate = useNavigate();
  const onClickHandler = (e) => {
    const value = e.target.id;
    navigate(`?page=${value - 1}`);
  };

  return (
    <>
      <Pagination onClick={onClickHandler}>
        {[...Array(pageNumbers)].map((_, i) => (
          <Pagination.Item
            id={i + 1}
            key={i}
            active={i == searchParams[0].get("page")}
          >
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
};

export default AdvancedExample;
