import { Background, Line, MinMax, Cards, City, Temp, Icon, MinIcon, MaxIcon, } from "./styles";
import   WaveDown  from '../../assets/wave.svg'
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { api } from "../../services/api";

type informationsProps = {
    temperature: number,
    min: number,
    max: number
  }

export function Card(){
    const [informations, setInformations] = useState<informationsProps>()

    useEffect(()=> {
      api.get('informations')
      .then(response => setInformations(response.data[0]))
    },[]);
    console.log('A temperatura é:' + (informations))


    return (
        <Background>
            <Cards>
                    <Line>
                        <City>São Paulo</City>
                    </Line>
                    <Line>
                        <Temp>
                            <motion.span animate={{scale: 2}}>
                                {informations?.temperature}
                            </motion.span> 
                            <motion.div animate={{scale: 2, y: -18}}>
                                <Icon />
                            </motion.div>
                        </Temp>
                <img src={WaveDown} alt='background'/>
                    </Line>
                    <Line>
                    <MinMax>
                        <motion.div animate={{y: 10}}>
                            <MinIcon/> 
                            <span>{informations?.min}</span>
                        </motion.div>
                        <motion.div animate={{y: -5}}>
                            <MaxIcon/>
                            <span>{informations?.max}</span>
                        </motion.div>
                    </MinMax>
                    </Line>
            </Cards>
            
        </Background>
    )
}