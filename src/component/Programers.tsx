import { Card, CardHeader, CardBody, CardFooter, Heading,Text } from '@chakra-ui/react'
import { FaReact,FaAngular,FaNode} from 'react-icons/fa';
import "../styles/Programers.css"

interface Programer {
    name: string;
    age: string;
    company: string;
    experience: string;
    }
const Programers = (props:Programer) => {
    return (
        <>
        <Card align='start' className='card-box'>
            <CardHeader>
                <Heading size='md'> {props.name}</Heading>
            </CardHeader>
            <CardBody className='card-body'>
                <h4>{props.company}</h4>
                <h3>years of experience:</h3>
                <Text>{props.experience}</Text>
            </CardBody>
            <CardFooter  className='footer'>
            <ul>
                    <li> <FaReact size={50}/></li>
                </ul>
                <ul>
                    <li> <FaAngular size={50}/></li>
                </ul>
                <ul>
                    <li> <FaNode size={50}/></li>
                </ul>
            </CardFooter>
        </Card>
        </>
        )
    }
export default Programers
