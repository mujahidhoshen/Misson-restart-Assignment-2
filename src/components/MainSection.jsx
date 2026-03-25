
const MainSection = ({taskStatus,taskResolve}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-15">    
            <div className="bg-gradient-to-r from-purple-900 to-purple-500 rounded-2xl h-60 text-center text-white flex justify-center md:justify-between mx-4 md:mx-0">
                <div className="hidden md:block">
                    <img  src="/vector1.png" alt="vector1.png"/>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-2xl">In-Progress</h2>
                    <p className="text-5xl font-normal mt-4">{taskStatus}</p>
                </div>
                <div className="hidden md:block rotate-y-180">
                    <img  src="/vector1.png" alt="vector2.png"/>
                </div>
            </div>

           <div className="bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-2xl h-60 text-center text-white flex justify-center md:justify-between mx-4 md:mx-0">
                <div className="hidden md:block">
                    <img  src="/vector1.png" alt="vector1.png"/>
                </div>
                 <div className="flex flex-col items-center justify-center">
                    <h2 className="text-2xl">Resolved</h2>
                    <p className="text-5xl font-normal mt-4">{taskResolve}</p>
                 </div>
                 <div className="hidden md:block rotate-y-180">
                    <img  src="/vector1.png" alt="vector2.png"/>
                </div>
           </div>
        </div>
    );
};

export default MainSection;