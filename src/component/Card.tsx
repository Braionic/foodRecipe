import { Link } from "react-router-dom";

export default function Card({
  title,
  id,
  img,
  publisher,
}: {
  title: string;
  id: string;
  img: string;
  publisher: string;
}) {
  return (
    <div className="rounded-md min-w-64  overflow-hidden shadow sm:mw-42">
      <div className="h-42 min-w-8">
        <img
          src={img}
          alt="recipe thumbnail"
          className="w-full sm:h-32 object-cover"
        />
      </div>

      <div className="card-details m-4">
        <span className="text-xs text-green-500 font-bold">{publisher}</span>
        <h2
          className="text-wrap font-bold"
          style={{
            overflowWrap: "break-word",
            wordWrap: "break-word",
            wordBreak: "break-word",
            width: "240px",
          }}
        >
          {title}
        </h2>

        <Link to={`/${id}`}>
          <button
            className="bg-black text-white py-2 px-4 rounded my-2 uppercase text-semi-bold"
            style={{ fontSize: "10px" }}
          >
            Recipe Details
          </button>
        </Link>
      </div>
    </div>
  );
}
