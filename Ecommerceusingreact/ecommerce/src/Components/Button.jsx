import { Link } from "react-router-dom";
export default function button() {
    return (
        <div className="flex items-center justify-around">
            <div>
                <Link to="/">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 border border-blue-700 rounded">
                        Fragrance
                    </button>
                </Link>
            </div>
            <div>
           

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 border border-blue-700 rounded">
                    Beauty
                </button>
                
            </div>
            
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 border border-blue-700 rounded">
                    Furniture
                </button>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 border border-blue-700 rounded">
                    Groceries
                </button>
            </div>

        </div>
    )
}