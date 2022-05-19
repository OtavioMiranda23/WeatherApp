import { Background, Line, MinMax, Cards, City, Temp, Icon, MinIcon, MaxIcon, } from "./styles";
import   WaveDown  from '../../assets/wave.svg'
import { motion } from 'framer-motion'

export function Card(){
    return (
        <Background>
            <Cards>
                    <Line>
                        <City>São Paulo</City>
                    </Line>
                    <Line>
                        <Temp>
                            <motion.span animate={{scale: 2}}>
                                     20°
                            </motion.span> 
                            <motion.div animate={{scale: 2, y: -18}}>
                                <Icon />
                            </motion.div>
                        </Temp>
                <img src={WaveDown} alt='background'/>
                    </Line>
                    <Line>
                    <MinMax>
                        <motion.div animate={{y: 5}}>
                            <MinIcon/> 
                            <span>12°</span>
                        </motion.div>
                        <motion.div animate={{y: -5}}>
                            <MaxIcon/>
                            <span>20°</span>
                        </motion.div>
                    </MinMax>
                    </Line>
            </Cards>
            
        </Background>
    )
}