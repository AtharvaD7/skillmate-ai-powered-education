"use client"
import { db } from '@/configs/db';
import { eq } from 'drizzle-orm';
import { USER_TABLE } from '@/configs/schema';
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import axios from 'axios';

function Provider({children}) {

    const {user}=useUser();

    useEffect(()=>{
        user&&CheckIsNewUser();
    },[user])

    const CheckIsNewUser=async()=> {
        //checks if user already exists

        // const result = await db.select().from(USER_TABLE)
        // .where(eq(USER_TABLE.email,user?.primaryEmailAddress?.emailAddress))
        // console.log(result);
        // if(result?.length==0)
        // {
        //     const userResp = await db.insert(USER_TABLE).values({
        //         name:user?.fullName,
        //         email:user?.primaryEmailAddress?.emailAddress

        //     }).returning({id:USER_TABLE.id})
 
        // }
        //if not then add to DB

        const resp = await axios.post('/api/create-user',{user:user});

        console.log(resp.data);
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default Provider