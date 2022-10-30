import { useEffect, useState } from 'react';
import { fetchCitys } from '../../../API/citys';


const Cidade = () => {
    
    const [states, setStates] = useState([]);
    useEffect(() => {
        fetchCitys().then((states) => {
            setStates(states);
        })
    })

    return (
        <select id="city">
                    <option value="">Selecione uma Cidade</option>
                    {states.map((state) => {
                        const {code, name} = state;
                        return (<option key={code} value={code}>{name}</option>)
                    })}
                </select>
    );
}; 

export default Cidade