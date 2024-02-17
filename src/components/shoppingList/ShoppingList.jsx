import { useState } from "react";
import Item from "../item/Item";

export default function ShoppingList() {
    const [items, setItems] = useState([]);

    const [text, setText] = useState("");
    const [quantity, setQuantity] = useState(1);

    function addItem(description, quantity) {
        const newItem = {
            id: Date.now(),
            description: description || "Sem descrição",
            quantity: quantity,
            checked: false,
        };
        setItems([...items, newItem]);
        setText("");
        setQuantity(1)
    }

    function deleteItem(id) {
        setItems(items.filter((item) => item.id !== id));
    }

    function toggleChecked(id) {
        setItems(
            items.map((item) => {
                if (item.id === id) {
                    return { ...item, checked: !item.checked };
                } else {
                    return item;
                }
            })
        );
    }
    return (
        <div>
            <div className="w-screen flex justify-between p-2 border-b-4">
                <input
                    type="number"
                    value={quantity}
                    className="w-1/6 text-sm rounded-md px-2"
                    onChange={(e) => setQuantity(e.target.value)}
                />

                <input
                    className={`w-1/2 text-sm rounded-md px-2
                `}
                    type="text"
                    placeholder="Descrição do produto"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <button
                    className={`
                        w-1/6 bg-green-500 text-slate-50 text-sm rounded-md
                        flex justify-center p-1 hover:bg-green-600
                    `}
                    onClick={() => addItem(text, quantity)}
                >
                    Adicionar
                </button>
            </div>

            {items.length !== 0 ? items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    deleteItem={deleteItem}
                    toggleChecked={toggleChecked}
                />
            )) : <h3 className="text-center text-lg text-slate-50">Sem itens na lista!</h3>}
        </div>
    );
}
