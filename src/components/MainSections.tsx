import {Card, CardBody, Tab, Tabs} from "@nextui-org/react";

const MainSections = () => {

    return (
        <Card className="w-full mt-6 h-96">
            <CardBody className="items-center ">
                <Tabs aria-label="Options">
                    <Tab key="photos" title="Photos">
                        <Card>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="music" title="Music">
                        <Card>
                            <CardBody>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="videos" title="Videos">
                        <Card>
                            <CardBody>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </CardBody>
        </Card>
    )
}


export default MainSections
