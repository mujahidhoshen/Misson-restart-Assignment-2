
const Cards = ({useCard,handelCard}) => {
    
        
    return (
            <div onClick={() => handelCard(useCard)} className="bg-gray-200 hover:bg-gray-300 transition duration-300 hover:scale-105 rounded-2xl p-5">
                <div className="flex justify-between">
                    <h2 className="text-lg">{useCard.title}
                    </h2>
                    <div className={`rounded-xl 
                        flex items-center justify-center gap-1 p-1 md:p-2 ${useCard.status =='Open' ? "bg-green-300" :"bg-purple-300" }`}>
                        <div className={` rounded-full w-2 h-2 md:w-4 md:h-4 ${useCard.status =='Open' ? "bg-green-700" :"bg-purple-700"}`}> 
                        </div>
                        <p className={`text-sm ${useCard.status =='Open' ? "text-green-700" :"text-purple-700"}`}>{useCard.status}
                        </p>
                    </div>
                </div>
                        <p className="text-gray-500 text-sm  my-2">
                        {useCard.description}</p>
                    <div className="md:flex items-center justify-between ">
                        <div className="flex gap-5 my-2 md:my-0">
                        <p className="text-sm text-gray-500">#{useCard.id}</p>
                        <p className={`text-sm ${useCard.priority =='Low' ? "text-green-700" : useCard.priority =='Medium' ? "text-purple-700" : "text-red-700"}`}>{useCard.priority}</p>
                        </div>
                        <div className="flex gap-5">
                        <p className="text-sm text-gray-500">{useCard.customer}</p>
                        <p className="text-sm text-gray-500">{useCard.createdAt}</p>
                        </div>
                    </div>
            </div>
    );
};

export default Cards;