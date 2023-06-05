import { Card,  CardBody,Text } from '@chakra-ui/react'

interface Service {
  desc: string;
}
const Services = (props:Service) => {
  return (
    <Card>
  <CardBody>
    <Text>{props.desc}</Text>
  </CardBody>
</Card>
  )
}

export default Services