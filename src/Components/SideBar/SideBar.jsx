import { FaEllipsisH } from "react-icons/fa"
import { CgChevronDown } from "react-icons/cg"
import { PiChatTextFill } from "react-icons/pi";
import { BsChatLeftQuote } from "react-icons/bs"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"


const ConversationTile = ({ name }) => {
    return (
        <div className="flex gap-2 items-center justify-center text-sm px-3 rounded-sm">
            <PiChatTextFill size={22} />
            <div className="grow">
                <p>{name}</p>
                <p className="text-xs">Lorem ipsum dolor sit amet.</p>
            </div>
            <Dropdown placement="right">
                <DropdownTrigger>
                    <Button size="sm" isIconOnly variant="light">
                        <FaEllipsisH size={14} />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem>Cumming Soon</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

const SideBar = () => {
    return (
        <div className='col-span-3 h-full p-3 py-6 flex flex-col gap-3  bg-default-50'>
            <div className="">
                <p className="text-xl font-light">Recent Conversation</p>
            </div>
            <div className="chats flex flex-col gap-3 grow overflow-auto">
                <div className="flex items-start">
                    <div className="flex items-center justify-center gap-1 text-sm">
                        <p>Recent Chats</p>
                        <CgChevronDown size={16} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 ml-4">
                    <ConversationTile name={"Default Thread"} />
                </div>
            </div>
        </div>
    )
}

export default SideBar
