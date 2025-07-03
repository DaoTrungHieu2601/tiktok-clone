import Tippy from '@tippyjs/react/headless';
import Wrapper from "./Wrapper";
import MenuItems from './MenuItems';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const defaultFn = () => {

}

const Menu = ({ children, items = [], onChange = defaultFn }) => {
    const [history, setHistory] = useState([{ data: items }]);
    // phân cấp menu 
    const current = history[history.length - 1]

    // !! là code viết tắt để chuyển giá trị bất kỳ về dạng boolean(true or false)
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return (
                <div key={index} className="w-full text-left flex-col ">
                    <MenuItems
                        data={item}
                        onClick={() => {
                            if (isParent) {
                                setHistory(prev => [...prev, item.children])
                            } else {
                                onChange(item)
                            }
                        }}
                    />
                </div>
            )
        })
    }
    return (
        <Tippy
            delay={[0, 700]}
            offset={[12, 8]}
            interactive
            placement="bottom-end"
            render={attrs => (
                <div className="w-[200px]" tabIndex="-1" {...attrs}>
                    <Wrapper>
                        {history.length > 1 && < HeaderMenu title="Language" onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}
                        {renderItems()}
                    </Wrapper>
                </div>
            )}
            onHidden={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    )
}

export default Menu;