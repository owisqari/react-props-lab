import { Card, CardHeader, CardBody, CardFooter, Heading,Text } from '@chakra-ui/react'
import Services from './Services'
import "../styles/Companies.css"

interface Company {
  logo: string;
  name: string;
  employees: string;
  year: string;
}
const Companies = (props:Company) => {
  return (
    <>
    <Card align='start' className='card-box'>
        <CardHeader>
        <Heading size='md'> <img src={props.logo} /></Heading>
        </CardHeader>
        <CardBody className='card-body'>
        <Heading size='md'> {props.name}</Heading>
        <h4>Number of Employees</h4>
        <Text>{props.employees}</Text>
        </CardBody>
        <CardFooter  className='comp-footer'>
          <Services desc="We are a company that provides training in the field of programming and technology" />
          <Text className='text'>Year Founded: {props.year}</Text>
        </CardFooter>
    </Card>
    </>
  )
}

export default Companies