import { Button } from "@nextui-org/react"
import { BsChatLeftQuote } from "react-icons/bs";

const Nav = () => {
    return (
        <div className="w-16 h-full flex gap-3 flex-col items-center justify-start py-6 bg-default-50 text-default-900">
            <div className="w-full bg-content1 p-3 flex items-center justify-center border-l-3 border-default-900">
                <button>
                    <BsChatLeftQuote size={20} />
                </button>
                {/* <Button isIconOnly variant="faded" color="success" radius="sm">
                <BsChatLeftQuote size={18}/>
            </Button> */}
            </div>
        </div>
    )
}

export default Nav
