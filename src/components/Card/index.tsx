import { Background, Line, MinMax, Cards, City, Temp, Icon, MinIcon, MaxIcon, } from "./styles";
import   WaveDown  from '../../assets/wave.svg'
import { motion } from 'framer-motion'

interface informationsProps {
    temperature: number | null,
    min: number | null;
    max: number | null

  }

export function Card(props: informationsProps){



    return (
        <Background>
            <Cards>
                    <Line>
                        <City>São Paulo</City>
                    </Line>
                    <Line>
                        <Temp>
                            <motion.span animate={{scale: 2}}>
                                {props.temperature}
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
                            <span>{props.min}</span>
                        </motion.div>
                        <motion.div animate={{y: -5}}>
                            <MaxIcon/>
                            <span>{props.max}</span>
                        </motion.div>
                    </MinMax>
                    </Line>
            </Cards>
            
        </Background>
    )
}