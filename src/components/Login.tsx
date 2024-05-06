import {Button, Card, CardBody, Input, Link} from "@nextui-org/react";
import React from "react";

const Login = () => {
    return (
        <>
           <Card className="w-96">
               <p className="text-slate-500 text-2xl align text-center mt-2">Нэвтрэх</p>
               <CardBody className="gap-6 p-10">
                   <Input
                       isClearable
                       type="email"
                       label="Имэйл хаяг"
                       variant="bordered"
                       className="max-w-xs"
                       size="sm"
                   />
                   <Input
                       label="Нууц үг"
                       variant="bordered"
                       type={"password"}
                       className="max-w-xs"
                       size="sm"
                   />
                   <Button color="primary" variant="solid">
                       Нэвтрэх
                   </Button>
                   <Link href="#">Бүртгүүлэх</Link>
               </CardBody>
           </Card>
        </>

    )
}

export default Login
