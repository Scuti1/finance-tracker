import {Card, CardBody} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCreditCard} from '@fortawesome/free-solid-svg-icons';

type Account = {
    accountName: string,
    balance: number
}

const Account: React.FC<Account>  = ({accountName, balance}) => {
    return (
        <Card className="w-40">
            <CardBody className="">
                <div className="items-center ">
                    <p className="text-xl text-slate-500"><span className="mr-2"><FontAwesomeIcon icon={faCreditCard} /></span>{accountName}</p>
                </div>
                <p className="text-slate-500 text-sm justify-content-end">{balance.toLocaleString() + ' ₮'}</p>
            </CardBody>
        </Card>
    )
}


export default Account
