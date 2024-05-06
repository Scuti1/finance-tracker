import Account from "./Account.tsx";
import {Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User} from "@nextui-org/react";

const TopSections = () => {
    const accounts = [
        {accountName: 'INC', balance: 120000},
        {accountName: 'FAM', balance: 120000},
        {accountName: 'EXP', balance: 120000},
        {accountName: 'BUD', balance: 120000},
        {accountName: 'SAV', balance: 120000},
    ]

    return (
        <>
            <Card className="w-full" style={{marginTop: '-400px'}}>
                <div className="flex flex-row-reverse mt-2 mr-2">
                    <div className="flex items-center gap-4">
                        <Dropdown placement="bottom-start">
                            <DropdownTrigger>
                                <Button>
                                    <User
                                        className="p-2 text-xl"
                                        name="Diriilaamyatav Tserendolgor"
                                        description="Software Developer"
                                        avatarProps={{
                                            src: "../assets/user.jpg"
                                        }}
                                    />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="User Actions" variant="flat">
                                <DropdownItem key="help_and_feedback">
                                    Хувийн мэдээлэл
                                </DropdownItem>
                                <DropdownItem key="logout" color="danger">
                                    Гарах
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <CardBody>
                    <div className="flex gap-10">
                        {accounts.map((item, index) => (
                            <Account accountName={item.accountName} balance={item.balance} key={index}/>
                        ))}
                    </div>
                </CardBody>
            </Card></>
    )
}


export default TopSections
