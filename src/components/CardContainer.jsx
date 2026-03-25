
import Container from "./Container";
import Cards from './Cards';
import { use } from "react";
import { useState } from "react";
import MainSection from "./MainSection";
import Satus from "./Satus";
import RseolveIssue from "./RseolveIssue";
import { toast } from "react-toastify";

const CardContainer = ({promise}) => {
    const useCardsContainer = use(promise);

    const [tickets,setTickets] = useState(useCardsContainer)

    const [taskStatus,setTaskStatus] = useState([])

    const [taskResolve,setTaskResolve] = useState([])


    const handelCard = (useCard) => {
        // console.log(useCard);

        const isAvailable = 
           taskStatus.find((task) => task.id == useCard.id);
 
           if (isAvailable){
            toast.warn('Already Added', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            return;
           }
        
        const addTaskStatus = [...taskStatus, useCard]
        setTaskStatus(addTaskStatus);
        // console.log(useCard);  
        
        
    }

    const handleResolve = (useCard) => { 

        toast.success("Resolved", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });


        const addResolveTask = [...taskResolve,useCard]
        setTaskResolve(addResolveTask);
            //  console.log(addResolveTask);

        const remainingTask = 
        taskStatus.filter((card) => card.id !== useCard.id)
        setTaskStatus(remainingTask);
        
        const remainingCard = 
        tickets.filter(ticket => ticket.id !== useCard.id);
        setTickets(remainingCard);
        // console.log(remainingCard);
        
        
    }


return (
            <Container>
                <MainSection taskStatus={taskStatus.length} taskResolve={taskResolve.length}></MainSection>
            <div className="md:flex gap-5 mx-5 my-15 md:mx-0">
                <div className="mb-5 md:w-9/12">
                <h2 className="text-2xl mb-5">Customer Tickets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {tickets.map(useCard => 
                    (<Cards handelCard={handelCard} 
                        key={useCard.id} 
                        useCard={useCard}> 
                    </Cards>))}
                    
                </div>
            </div>
            <div className="md:w-3/12">
                <h2 className="text-2xl my-5">Task Status</h2>           
                <div>
                    {
                        taskStatus.length === 0 ? (
                        <p className="text-gray-400 pb-2">Select a ticket to add to Task Status</p>
                    ) :
                        taskStatus.map(useCards => 
                        (<Satus handleResolve={handleResolve} key={useCards.id} useCards={useCards}></Satus>))  
                        }
                </div>
        
                <h2 className="text-2xl my-5">Resolved Task</h2>
                    <div className="">
                    {
                        taskResolve.length === 0 ?  (
                        <p className="text-gray-400 pb-2">No resolved tasks yet.</p>
                     ) :
                        taskResolve.map(resolveCard => (<RseolveIssue key={resolveCard.id} resolveCard={resolveCard}>
                    </RseolveIssue>))}
                </div>
            </div>
            </div>
            </Container>
    );
};

export default CardContainer;
