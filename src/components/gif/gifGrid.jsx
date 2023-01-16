import { useFetchData } from "../../hooks/useFetchData";

import { Container, Row } from "react-bootstrap";

//
export const gifGrid = ({ category }) => {
  ////////

  const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=yjRNRmo5Mi011SC8CymAH3V1lyK1SNyY&q=${category}&limit=1`;
  const { data, loading, error } = useFetchData(BASE_URL); //

  if (loading) return "Loading ...";
  if (error) return `Error ${error}`;

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return (
    <>
      <Container>
        <Row>
          <div className="col-md-12">
            {gifs?.map((value) => (
              <div key={value.id} className="card">
                <div className="mb-3">
                  <img src={value.url} />
                </div>
                <p>{value.title}</p>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default gifGrid;
