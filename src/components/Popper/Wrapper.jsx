
const Wrapper = ({ children }) => {
    return (
        <div className="w-full max-h-[min(calc(100vh-156px),734px)] min-h-[100px] rounded-lg bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.12)] pt-2">
            {children}
        </div>
    )
}

export default Wrapper;