import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/register.css"
import dayjs from "dayjs"

const Schedule = (props) => {
  const [infos, setInfos] = useState([])
  useEffect(() => {
    fetchInfos();
  }, [])

  useEffect(() => {
    console.log(infos)
}, [infos])
  
  const fetchInfos=async()=>{
    const response= await axios.get(`http://localhost:3000/schedules/user/${props.userId}`);
    setInfos(response.data)    
}
return (
  <div className="schedule">
    {
      infos && infos.map(infos=>{
        return(
          <div key={infos.id} style={{alignItems:'center',margin:'20px 60px', fontSize: "25px"}}>
          <h4>Aqui está o horário do seu agendamento: {dayjs(infos.dateHour).format("DD-MM-YYYY HH:mm")}</h4>
          <p>Você solicitou o serviço: {infos.requestedService}</p>
          <p>O seu agendamento já foi confimado pela Leila? {infos.isServiceConfirmed ? "Sim" : "Não"}</p>
        </div>
        )
      })
    }
  </div>
);
}

export default Schedule