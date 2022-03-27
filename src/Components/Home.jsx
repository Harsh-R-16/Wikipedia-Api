import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();
  let [inp, setInp] = useState("");
  const inpHandler = (e) => {
    if (e.key === "Enter" && inp) {
      navigate(`/search/${inp}`);
    }
  };
  return (
    <section id="home">
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt=""
      />
      <div id="search">
        <img
          src="https://th.bing.com/th/id/OIP.X1B-4d3XUm4f3qH6iGrD6wHaHW?w=188&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt=""
        />
        <input
          type="text"
          placeholder="search here..."
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          onKeyDown={inpHandler}
        />
        <img
          src="https://th.bing.com/th/id/OIP.6l9b07QRDyr7lYBJtAltOgHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt=""
        />
      </div>
      <div id="btns">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
      <div id="lang">
        <p>
          Google offered in:{" "}
          <span>
            हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ
          </span>
        </p>
      </div>
    </section>
  );
};
