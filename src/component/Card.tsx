import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useContext } from "react";
import { recipeContext } from "./Context";
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
}) 
{
  const {handleFavourite, favouriteCopy} = useContext(recipeContext)
  return (
    <div className="rounded-md min-w-64  overflow-hidden shadow-md sm:mw-42 relative">
      <div className="h-42 min-w-8">
        <img
          src={img}
          alt="recipe thumbnail"
          className="w-full sm:h-32 object-cover hover:object-fill"
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
        <div className="absolute top-2 right-3 cursor-pointer" onClick={()=> handleFavourite?.(id)}>{favouriteCopy?.indexOf(id) === -1 ?<MdOutlineFavoriteBorder size={20} />: <MdOutlineFavorite />}</div>
        
      </div>
    </div>
  );
}
