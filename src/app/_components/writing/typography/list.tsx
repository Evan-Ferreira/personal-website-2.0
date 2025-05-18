interface ListProps {
    children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
    return <ul className="list-disc pl-6 space-y-2 text-white">{children}</ul>;
};

export default List;
