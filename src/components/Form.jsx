import React from 'react'
import { useState } from 'react'
const Form=()=>{
    const [formData,setFormData]=useState({
        fname:'',
        mailid:'',
    })
    const[error,setError]=useState({})
    const handelChange=(e)=>{
        const{name,value}=e.target
        setFormData({...formData,[name]:value})

    }

    const handelSubmit=(e)=>{
        e.preventDefault()

        const isValid=ValidateForm()

        if(isValid){
            console.log(formData)
        }else{
            console.log("notValid")
        }
    }

    const isValidEmail=(email)=>{
        const emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        return emailRegex.test(email)
    }

    const ValidateForm=()=>{

        const newError={}
        if(!formData.fname){
            newError.fname="Fill name"
        }
        if(!formData.email){
            newError.email="Please write mail id"
        }else if(!isValidEmail(formData.email)){
            newError.email="Wrng format"
        }
        setError(newError)

        return Object.keys(newError).length===0;


    }


    return
    (
        <>
        <form onSubmit={handelSubmit}>
            <label>Name</label>
            <input type='text' name='fname' placeholder='Name' value={formData.fname}onChange={handelChange} ></input>
            {error.fname && <div>error.fname</div>}
            <label>Mailid</label>
            <input type='text' name='mail' placeholder='Mail' value={formData.mailid}onChange={handelChange} ></input>
            {error.mailid && <div>error.mailid</div>}
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}
export default Form