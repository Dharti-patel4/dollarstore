import { Box, Flex, Heading } from '@chakra-ui/layout'
import { Button, Img, Input } from '@chakra-ui/react'
import React, { useState,useContext } from 'react'
import {AiFillApple} from 'react-icons/ai'
import {AiOutlineGoogle} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import axios from 'axios'
import {Authcontext} from '../context/Authcontextprovider'
import { Link, Navigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const{login,isAuth}=useContext(Authcontext)
    const toast=useToast()

    const handleLogin=()=>{
        axios({
            method: 'post',
            url: 'https://reqres.in/api/login',
            data: {email,password}
          }).then((res)=>{
            // alert("Login Successful")
            login(res.data.token)})
            return  toast({
              title: 'Login Successful',
              description: "Happy Shopping",
              status: 'success',
              duration: 5000,
              isClosable: true,
              position:'top'
            })
          
    }
   
    
    if(isAuth){return <Navigate to={'/'} />}


  return (
    <Box  backgroundColor={"#f8f8f8"}>
    <Flex style={{backgroundColor:"white",padding:"2%",width:"30%",margin:"auto",marginTop:"2%",flexDirection:"column"}}>
        <Img src='https://b3h2.scene7.com/is/image/BedBathandBeyond/WR_deskstop_22_07_2022?$content$&wid=1280'/>
        <Heading style={{color:"#0040ff"}}>Sign In To Your BbbY Account</Heading>
        <Input marginTop={"2%"} onChange={(e)=>setEmail(e.target.value)} type={"email"} marginBottom={"2%"} padding={"3%"} placeholder='Enter Email'/>
        <Input marginTop={"2%"} onChange={(e)=>setPassword(e.target.value)} type={"password"} marginBottom={"2%"} padding={"3%"} placeholder='Enter Password'/>
        <Button onClick={handleLogin} fontSize={"20px"} border={"0px"} backgroundColor={"#0040ff"} color="white" padding={"3%"}>SIGN IN</Button>
        <br></br>
        <Box marginTop={"2rem"}><Link style={{color:"#0040ff"}} to={'/register'}>CREATE ACCOUNT</Link></Box>
        <br></br>
        <Box marginTop={"1rem"} marginBottom={"2rem"}><Link style={{color:"#0040ff"}} to={'/adminlogin'}>LOGIN AS ADMIN</Link></Box>

        <br></br>
        <Box marginBottom={"1%"} display={"flex"} alignItems="center" justifyContent={"center"} padding={"1%"} border={"1px solid grey"}>
        <AiFillApple size={30}/>
        <b>Continue With Apple</b>
        </Box>
        <Box marginBottom={"1%"} display={"flex"} alignItems="center" justifyContent={"center"} padding={"1%"} border={"1px solid grey"}>
        <AiOutlineGoogle size={30}/>
        <b>Continue With Google</b>
        </Box>
        <Box marginBottom={"1%"} display={"flex"} alignItems="center" justifyContent={"center"} padding={"1%"} border={"1px solid grey"}>
        <AiFillFacebook size={30}/>
        <b>Continue With Facebook</b>
        </Box>
    </Flex>
    </Box>
  )
}

export default Login

//comment
