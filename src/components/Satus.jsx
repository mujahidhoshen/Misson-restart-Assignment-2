

const Satus = ({useCards,handleResolve}) => {
    return (
        <div className="bg-gray-200 rounded-xl p-5 my-3 transition duration-300 hover:scale-105">
            <h2 className=" text-lg">{useCards.title}</h2>
            <button onClick={() => handleResolve(useCards)} className="bg-green-700 text-white rounded-md text-sm font-light hover:bg-green-900 hover:cursor-pointer w-full mt-2 p-2">Complete</button>
        </div>
    );
};

export default Satus;
