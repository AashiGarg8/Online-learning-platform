//api endpoint to create or fetch user
import { NextResponse } from "next/server";
import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";

export async function POST(req){
    const {userEmail, name}=await req.json(); //it is fetching from the req body.

    //if user already exists?
    const users = await db.select().from(usersTable)
    .where(eq(usersTable.email,email));

    //if not, create user
    if(users?.length==0){
        const result=await db.insert(usersTable).values({
            name:name,
            email:email
        }).returning(userTable);

        console.log(result);
        return NextResponse.json(result)
    }
    return NextResponse.json(users[0]);
    
}