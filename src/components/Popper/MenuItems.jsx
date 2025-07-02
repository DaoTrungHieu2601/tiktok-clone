import { Button } from "../ui/Button";

const MenuItems = ({ data, onClick }) => {

    return (
        <Button variant="link" to={data.to} onClick={onClick}> {data.icon} {data.title}</Button >
    );
};

export default MenuItems;
