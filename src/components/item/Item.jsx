export default function Item({ item, deleteItem, toggleChecked }) {
    function handleChange() {
        toggleChecked(item.id);
    }

    return (
        <div className={`w-screen flex justify-between px-2 py-1`}>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={handleChange}
            />
            <p className="text-slate-50">{`${item.quantity} - ${item.description}`}</p>
            <button
                className={`w-1/6 bg-red-500 text-slate-50 text-sm rounded-md
                flex justify-center p-1 hover:bg-red-600`}
                onClick={() => deleteItem(item.id)}
            >
                Remove
            </button>
        </div>
    );
}