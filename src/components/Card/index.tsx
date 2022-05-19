import { Background, Line, MinMax, Cards, City, Temp, Icon, MinIcon, MaxIcon, } from "./styles";
import   WaveDown  from '../../assets/wave.svg'

export function Card(){
    return (
        <Background>
            <Cards>
                    <Line>
                        <City>São Paulo</City>
                    </Line>
                    <Line>
                        <Temp>
                            <div> 20° </div> 
                            <Icon/>
                        </Temp>
                <img src={WaveDown} alt='background'/>
                    </Line>
                    <Line>
                    <MinMax>
                        <div>
                            <MinIcon/> 
                            <span>12°</span>
                        </div>
                        <div>
                            <MaxIcon/>
                            <span>20°</span>
                        </div>
                    </MinMax>
                    </Line>
            </Cards>
            
        </Background>
    )
}