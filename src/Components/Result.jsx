import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function Result() {
  let [inp, setInp] = useState("Showing Results for ...");
  let [data, setData] = useState([]);
  let n = useNavigate();
  let { q } = useParams();
  function fetchResults() {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=40&format=json&origin=*&srsearch=${q}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        let resArr = res.query.search;
        // console.log(resArr);
        if (resArr.length) {
          setInp("Showing Results for " + q);
          setData(res.query.search);
        } else {
          setInp("Nothing to display for " + q);
        }
      })
      .catch((err) => {
        setInp("Nothing to display for " + q);
      });
  }
  useEffect(() => {
    fetchResults();
  }, []);
  console.log(q);
  return (
    <>
      <h1 id="h1">
        {inp}
        <button onClick={() => n("/")}>Back to Search</button>
      </h1>
      {data.length ? (
        <section id="res">
          {data.map(({ pageid, snippet, timestamp, title }) => (
            <div key={pageid}>
              <p>https://en.wikipedia.org/?curid={pageid} :</p>
              <a
                target="_blank"
                href="https://en.wikipedia.org/?curid=14533"
                rel="noreferrer"
              >
                <h2>
                  {title}
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRS3oudp3QSAZ7UyRq817hFt7r9x4WgBTAg&usqp=CAU"
                    alt=""
                  />
                </h2>
              </a>
              <p>
                {snippet
                  .replace(/<span class="searchmatch">/g, "")
                  .replace(/<\/span>/g, "")}
              </p>
              <p>{timestamp.slice(0, 10)}</p>
            </div>
          ))}
        </section>
      ) : (
        <h3>No Results </h3>
      )}
    </>
  );
}
