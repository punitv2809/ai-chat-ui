import { Button, Image, Input } from "@nextui-org/react"
import { BiRefresh, BiSend } from "react-icons/bi";
import { IoAddOutline, IoFlash } from "react-icons/io5";

const Message = ({ content, me }) => {
    return (
        <div className={`flex items-start justify-center w-full gap-3 px-24 py-6 ${me ? 'bg-content2' : 'bg-content1'} capitalize`}>
            {
                me ? <Image src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ20xcXh1MjUyNTRmc3U5dzU2ZGJ4YmVwdjNyd3V2ejVtM2YzbnJ3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif" className="w-10 h-10" classNames={
                    {
                        wrapper: 'flex-shrink-0'
                    }
                } radius="sm" /> : <div className="flex-shrink-0 rounded-sm bg-gradient-to-tr from-purple-700 to-indigo-600 via-blue-600 w-10 h-10 flex items-center justify-center">
                    <IoFlash size={20} />
                </div>
            }
            <div className="grow">
                {content}
            </div>
            <div className=""></div>
        </div>
    )
}

const Chat = () => {
    return (
        <div className="col-span-9 h-screen flex items-center flex-col relative">
            <div className="absolute right-0 top-0 m-3 mr-3">
                <Button variant="solid" radius="none" className="bg-content3 shadow-xl">
                    <IoAddOutline size={16} className="text-green-500" />
                    <p className="dark:text-white/75 light:text-black/75">New Chat</p>
                </Button>
            </div>
            <div className="header"></div>
            <div className="chat grow overflow-y-auto scroll-smooth overflow-x-hidden [&::-webkit-scrollbar]:[width:0px]">
                <Message content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima!"} me={true} />
                <Message content={`        <div className="col-span-9 h-screen flex items-center flex-col relative">
            <div className="absolute right-0 top-0 m-3 mr-8">
                <Button variant="flat" radius="none" className="bg-default-50">
                    <IoAddOutline size={16} className="text-green-500" />
                    <p className="dark:text-white/75 light:text-black/75">New Chat</p>
                </Button>
            </div>
            <div className="header"></div>
            <div className="chat grow overflow-y-auto scroll-smooth overflow-x-hidden [&::-webkit-scrollbar]:[width:0px]">
                <Message content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima!"} me={true} />
                <Message content={'hello how are you'} me={false} />

                <Message content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima!"} me={true} />
                <Message content={'hello how are you'} me={false} />
                <Message content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima!"} me={true} />
                <Message content={'hello how are you'} me={false} />
                <Message content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima!"} me={true} />
                <Message content={'hello how are you'} me={false} />
                <Message content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima!"} me={true} />
                <Message content={'hello how are you'} me={false} />
                <Message content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima!"} me={true} />
                <Message content={'hello how are you'} me={false} />
                <Message content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima!"} me={true} />
                <Message content={'hello how are you'} me={false} />
            </div>
            <div className="bg-content2 cmd p-12 w-full flex flex-col gap-3 items-center justify-center">
                <div className="w-8/12 flex items-center justify-center gap-3">
                    <Input type="text" radius="sm"
                        className="grow text-black"
                        classNames={
                            {
                                inputWrapper: 'p-6 pr-1'
                            }
                        }
                        value={"Search Here"}
                        endContent={
                            <Button isIconOnly radius="sm" color="secondary" variant="light">
                                <BiSend size={18}/>
                            </Button>
                        } />
                    <Button isIconOnly radius="sm" color="default" title="clear">
                        <BiRefresh size={20} />
                    </Button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eveniet.</p>
            </div>
        </div>`} me={false} />

                <Message content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima!"} me={true} />
                <Message content={'hello how are you'} me={false} />
                <Message content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima!"} me={true} />
                <Message content={'hello how are you'} me={false} />
                <Message content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima!"} me={true} />
                <Message content={'hello how are you'} me={false} />
                <Message content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima!"} me={true} />
                <Message content={'hello how are you'} me={false} />
                <Message content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima!"} me={true} />
                <Message content={'hello how are you'} me={false} />
                <Message content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ut facilis repellat at corporis maxime inventore aliquam, veritatis, aperiam eveniet cupiditate officia? Nostrum quidem quas hic non nihil commodi. Minima!"} me={true} />
                <Message content={'hello how are you'} me={false} />
            </div>
            <div className="bg-content2 cmd p-12 w-full flex flex-col gap-3 items-center justify-center">
                <div className="w-8/12 flex items-center justify-center gap-3">
                    <Input type="text" radius="sm"
                        className="grow text-black"
                        classNames={
                            {
                                inputWrapper: 'p-6 pr-1'
                            }
                        }
                        value={"Search Here"}
                        endContent={
                            <Button isIconOnly radius="sm" variant="light" className="text-default-900">
                                <BiSend size={20}/>
                            </Button>
                        } />
                    <Button isIconOnly radius="sm" className="bg-content3" title="clear">
                        <BiRefresh size={20} />
                    </Button>
                </div>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eveniet.</p>
            </div>
        </div>
    )
}

export default Chat
