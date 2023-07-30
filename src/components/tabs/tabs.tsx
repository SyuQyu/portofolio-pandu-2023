import React from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

type TabData = {
    title: string;
    content: React.ReactNode;
};

type Props = {
    dataTab: TabData[];
};

export default function CustomTabs({ dataTab }: Props) {
    const [activeTab, setActiveTab] = React.useState(0);

    const handleChange = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className="w-full py-10">
            <Tabs id="custom-animation" value="html">
                <TabsHeader
                    className="bg-transparent w-1/2 mx-auto flex justify-center"
                    indicatorProps={{
                        className: "bg-blue-500/0 border-b-4 border-cloud-500 mb-5",
                    }}
                >
                    {dataTab.map((data, index) => (
                        <Tab
                            key={index}
                            value={data.title}
                            className="text-white mx-4"
                        >
                            {data.title}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody
                    className="bg-cloud-500 mt-5 rounded-md ring-2 ring-blue-500 "
                    animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                    }}
                >
                    {dataTab.map((data, index) => (
                        <TabPanel key={index} value={data.title} className="text-black">
                            {data.content}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
}
