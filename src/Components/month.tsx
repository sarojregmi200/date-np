type tmonthProps = {
    children: React.ReactNode,
}

const Month = (props: tmonthProps) => {
    return <div className="grid grid-cols-7 grid-rows-6 gap-1 h-full w-full">
        {props.children}
    </div>;
}
export default Month;
