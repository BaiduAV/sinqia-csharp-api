import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    HStack,
    Input,
    InputGroup, Select,
    Stack, Textarea,
    useColorModeValue,
    useToast
} from '@chakra-ui/react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Field, Form, Formik} from 'formik';
import * as yup from 'yup';
import axios from "axios";

const CreateSchema = yup.object().shape({
    name: yup.string()
        .min(2, 'Muito Curto')
        .required('Obrigatório'),
    description: yup.string()
        .min(2, 'Muito Curto')
        .required('Obrigatório'),
    address: yup.string()
        .min(2, 'Muito Curto')
        .required('Obrigatório'),
    city: yup.string()
        .min(2, 'Muito Curto')
        .required('Obrigatório'),
    state: yup.string()
        .required('Obrigatório'),
});

export const AddNewDestination = () => {
    const toast = useToast()
    const navigate = useNavigate();
    
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}>
            <Stack spacing={5} mx={'auto'} maxW={'lg'} py={4} px={6}>
                <Box boxShadow={'lg'}
                     p={6}
                     rounded={'lg'}
                     bg={useColorModeValue('white', 'gray.700')}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Cadastre um novo destino
                        </Heading>
                    </Stack>
                </Box>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <Formik
                            initialValues={{
                                name: '',
                                description: '',                                
                                address: '',
                                city: '',
                                state: ''
                            }}
                            validationSchema={CreateSchema}
                            enableReinitialize={true}
                            onSubmit={values => {
                                axios.post('https://localhost:7151/destinations', values)
                                    .then((r) => {
                                        toast({
                                        title: 'Destino criado',
                                        description: "Agora outras pessoas podem aproveitar junto com você!",
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true
                                    })
                                navigate('/')}
                                    )
                                    .catch((err) => {
                                        toast({
                                            title: 'Ops, Algo deu errado',
                                            description: `${err}`,
                                            status: 'error',
                                            duration: 9000,
                                            isClosable: true
                                        })
                                    })
                            }}
                        >
                            {(props) => (
                                <Form>
                                        <Field name="name">
                                            {({field, form}) => (
                                                <FormControl isRequired
                                                             isInvalid={Boolean(form.errors.name && form.touched.name)}>
                                                    <FormLabel htmlFor='name'>Nome</FormLabel>
                                                    <Input {...field} type="text" id='name' placeholder='Nome'/>
                                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    <HStack>
                                        <Field name="state">
                                            {({field, form}) => (
                                                <FormControl isRequired
                                                             isInvalid={Boolean(form.errors.state && form.touched.state)}>
                                                    <FormLabel htmlFor='state'>UF</FormLabel>
                                                    <Select {...field} id='state' placeholder={'UF'}>
                                                        <option value='AC'>AC</option>
                                                        <option value='AL'>AL</option>
                                                        <option value='AP'>AP</option>
                                                        <option value='AM'>AM</option>
                                                        <option value='BA'>BA</option>
                                                        <option value='CE'>CE</option>
                                                        <option value='DF'>DF</option>
                                                        <option value='ES'>ES</option>
                                                        <option value='GO'>GO</option>
                                                        <option value='MA'>MA</option>
                                                        <option value='MT'>MT</option>
                                                        <option value='MS'>MS</option>
                                                        <option value='MG'>MG</option>
                                                        <option value='PA'>PA</option>
                                                        <option value='PB'>PB</option>
                                                        <option value='PR'>PR</option>
                                                        <option value='PE'>PE</option>
                                                        <option value='PI'>PI</option>
                                                        <option value='RJ'>RJ</option>
                                                        <option value='RN'>RN</option>
                                                        <option value='RS'>RS</option>
                                                        <option value='RO'>RO</option>
                                                        <option value='RR'>RR</option>
                                                        <option value='SC'>SC</option>
                                                        <option value='SP'>SP</option>
                                                        <option value='SE'>SE</option>
                                                        <option value='TO'>TO</option>
                                                    </Select>
                                                    <FormErrorMessage>{form.errors.state}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Field name='city'>
                                            {({field, form}) => (
                                                <FormControl isRequired isInvalid={form.errors.city && form.touched.city}>
                                                    <FormLabel htmlFor='city'>Cidade</FormLabel>
                                                    <Input {...field} type="text" id='city' placeholder='Cidade'/>
                                                    <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </HStack>
                                    <Field name='address'>
                                        {({field, form}) => (
                                            <FormControl isRequired isInvalid={form.errors.address && form.touched.address}>
                                                <FormLabel htmlFor='address'>Referência</FormLabel>
                                                <InputGroup>
                                                    <Input {...field} type='text' id='address' placeholder='Como chegar no local'/>
                                                </InputGroup>
                                                <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name='description'>
                                        {({field, form}) => (
                                            <FormControl isRequired
                                                         isInvalid={form.errors.description && form.touched.description}>
                                                <FormLabel htmlFor='description'>Descrição</FormLabel>
                                                <InputGroup>
                                                    <Textarea {...field} id='description' placeholder="Descreva o lugar"/>
                                                </InputGroup>
                                                <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Stack spacing={10} pt={7}>
                                        <Button
                                            type="submit"
                                            loadingText="Submitting"
                                            size="lg"
                                            id='submit'
                                            bg={'blue.400'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'blue.500',
                                            }}>
                                            Cadastrar
                                        </Button>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}