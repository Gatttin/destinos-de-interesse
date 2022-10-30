import { useEffect, useState } from 'react'; 
import { fetchStates } from '../../API/paises';


const Pais = () => {
    
    const [states, setStates] = useState([]);
    useEffect(() => {
        fetchStates().then((states) => {
            setStates(states);
        })
    })


    return (
        <select id="country">
                    <option value="">Selecione um País</option>
                    {states.map((state) => {
                        const {code, name} = state;
                        return (<option key={code} value={code}>{name}</option>)
                    })}
                </select>
    );
}; 

export default Pais